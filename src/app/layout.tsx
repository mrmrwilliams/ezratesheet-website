import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ezratesheet.com'),
  title: {
    default: "EZ Rate Sheet - Professional Rate Sheet Software for Mortgage Professionals",
    template: "%s | EZ Rate Sheet"
  },
  description: "Professional rate sheet software that streamlines your lending process. 5-day free trial, no credit card required. Join thousands of mortgage professionals using EZ Rate Sheet.",
  keywords: [
    "rate sheet software",
    "mortgage software",
    "lending software",
    "mortgage professionals", 
    "rate sheets",
    "mortgage calculator",
    "lending network",
    "mortgage tools"
  ],
  authors: [{ name: "EZ Rate Sheet LLC" }],
  creator: "EZ Rate Sheet LLC",
  publisher: "EZ Rate Sheet LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ezratesheet.com",
    siteName: "EZ Rate Sheet",
    title: "EZ Rate Sheet - Professional Rate Sheet Software",
    description: "Professional rate sheet software that streamlines your lending process. 5-day free trial, no credit card required.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EZ Rate Sheet - Professional Rate Sheet Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EZ Rate Sheet - Professional Rate Sheet Software",
    description: "Professional rate sheet software that streamlines your lending process. 5-day free trial, no credit card required.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RFZ49G913E"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RFZ49G913E');
        `}} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#735076" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}