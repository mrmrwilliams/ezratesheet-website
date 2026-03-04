// Global theme management — persists across pages via query parameter
(function() {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;

  // Read theme from URL query string, fallback to system preference
  function getThemeFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('theme');
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  let theme = getThemeFromURL() || getSystemTheme();
  root.setAttribute('data-theme', theme);

  // Update toggle icon
  function updateToggleIcon() {
    if (!toggle) return;
    toggle.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
    toggle.innerHTML = theme === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
  updateToggleIcon();

  // Add theme param to all internal links
  function updateLinks() {
    document.querySelectorAll('a[href]').forEach(function(a) {
      var href = a.getAttribute('href');
      // Only update internal links (relative paths or same domain), not external
      if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#') || href.startsWith('javascript:')) return;
      try {
        var url = new URL(href, window.location.href);
        url.searchParams.set('theme', theme);
        // Preserve relative path style
        if (href.startsWith('./') || href.startsWith('../') || href.startsWith('pages/') || href === 'index.html') {
          a.setAttribute('href', href.split('?')[0].split('#')[0] + '?' + url.searchParams.toString() + (url.hash || ''));
        } else {
          a.setAttribute('href', url.pathname + '?' + url.searchParams.toString() + (url.hash || ''));
        }
      } catch(e) {}
    });
  }
  updateLinks();

  // Toggle handler
  if (toggle) {
    toggle.addEventListener('click', function() {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      updateToggleIcon();
      updateLinks();
      // Update current URL without reload
      var url = new URL(window.location.href);
      url.searchParams.set('theme', theme);
      window.history.replaceState({}, '', url.toString());
    });
  }
})();
