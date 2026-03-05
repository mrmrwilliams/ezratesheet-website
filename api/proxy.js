import https from 'https';
import http from 'http';

const ORIGIN_IP = '34.111.179.208';
const ORIGIN_HOST = 'ezratesheet.com';

function makeRequest(options, body) {
  return new Promise((resolve, reject) => {
    const proxyReq = https.request(options, (proxyRes) => {
      const chunks = [];
      proxyRes.on('data', (chunk) => chunks.push(chunk));
      proxyRes.on('end', () => {
        resolve({
          status: proxyRes.statusCode,
          headers: proxyRes.headers,
          body: Buffer.concat(chunks),
        });
      });
    });

    proxyReq.on('error', reject);
    proxyReq.setTimeout(30000, () => {
      proxyReq.destroy(new Error('Request timeout'));
    });

    if (body) {
      proxyReq.write(body);
    }
    proxyReq.end();
  });
}

export default async function handler(req, res) {
  const url = new URL(req.url, `https://${req.headers.host}`);
  const appPath = url.pathname || '/app';
  const queryString = url.search || '';
  const targetPath = `${appPath}${queryString}`;

  try {
    // Collect request body for non-GET requests
    let body = null;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      if (chunks.length > 0) {
        body = Buffer.concat(chunks);
      }
    }

    // Build headers to forward
    const forwardHeaders = {};
    for (const [key, value] of Object.entries(req.headers)) {
      const lk = key.toLowerCase();
      if (['host', 'x-forwarded-host', 'x-vercel-id', 'x-vercel-deployment-url', 'x-vercel-forwarded-for', 'connection'].includes(lk)) continue;
      forwardHeaders[key] = value;
    }
    forwardHeaders['host'] = ORIGIN_HOST;
    forwardHeaders['x-forwarded-host'] = ORIGIN_HOST;

    let currentPath = targetPath;
    let proxyResponse;
    let redirectCount = 0;
    const MAX_REDIRECTS = 5;

    // Follow trailing-slash redirects internally to prevent loops
    // with Vercel's trailingSlash:false setting
    while (redirectCount < MAX_REDIRECTS) {
      const options = {
        hostname: ORIGIN_IP,
        port: 443,
        path: currentPath,
        method: req.method,
        headers: forwardHeaders,
        servername: ORIGIN_HOST,
        rejectUnauthorized: true,
      };

      proxyResponse = await makeRequest(options, redirectCount === 0 ? body : null);

      // If it's a redirect that just adds a trailing slash, follow it internally
      if ([301, 302, 307, 308].includes(proxyResponse.status) && proxyResponse.headers['location']) {
        let loc = proxyResponse.headers['location']
          .replace(`https://${ORIGIN_HOST}`, '')
          .replace(`http://${ORIGIN_HOST}`, '');

        // Check if this is a trailing-slash redirect (path/ vs path)
        const locPath = loc.split('?')[0];
        const curPath = currentPath.split('?')[0];
        const isTrailingSlashRedirect = locPath === curPath + '/' || locPath + '/' === curPath;

        if (isTrailingSlashRedirect || locPath.replace(/\/+$/, '') === curPath.replace(/\/+$/, '')) {
          // Follow it internally - use the redirect target (with trailing slash)
          currentPath = loc;
          redirectCount++;
          continue;
        }
      }

      // Not a trailing-slash redirect, stop following
      break;
    }

    // Forward response headers, fixing redirects to stay on current domain
    const responseHeaders = { ...proxyResponse.headers };
    delete responseHeaders['transfer-encoding'];
    delete responseHeaders['connection'];

    if (responseHeaders['location']) {
      let loc = responseHeaders['location']
        .replace(`https://${ORIGIN_HOST}`, '')
        .replace(`http://${ORIGIN_HOST}`, '');
      // Strip trailing slashes to stay consistent with Vercel's trailingSlash:false
      const qIdx = loc.indexOf('?');
      if (qIdx > -1) {
        const path = loc.substring(0, qIdx).replace(/\/+$/, '') || '/';
        loc = path + loc.substring(qIdx);
      } else {
        loc = loc.replace(/\/+$/, '') || '/';
      }
      responseHeaders['location'] = loc;
    }

    res.writeHead(proxyResponse.status, responseHeaders);
    res.end(proxyResponse.body);

  } catch (error) {
    console.error('Proxy error:', error);
    res.writeHead(502, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ error: 'Bad Gateway', details: error.message }));
  }
}

export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};
