import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div className="space-y-4">
            <Image
              src="/images/logo-white.jpg"
              alt="EZ Rate Sheet"
              width={160}
              height={48}
              className="h-10 w-auto"
            />
            <p className="text-slate-300 text-sm leading-relaxed">
              Professional rate sheet software for mortgage professionals. Streamline your lending process with our comprehensive platform.
            </p>
            <div className="text-sm text-slate-400">
              <p>EZ Rate Sheet LLC</p>
              <p>DBA of Copy Machines LLC</p>
              <p>Florida, USA</p>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Product</h4>
            <div className="space-y-2 text-slate-300">
              <Link href="/features" className="block hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="block hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/lending-network" className="block hover:text-white transition-colors">
                Lending Network
              </Link>
              <Link href="https://app.ezratesheet.com/register" className="block hover:text-white transition-colors">
                Start Free Trial
              </Link>
              <Link href="https://crm.risehub.ai" className="block hover:text-white transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <div className="space-y-2 text-slate-300">
              <Link href="/about" className="block hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/blog" className="block hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="block hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/careers" className="block hover:text-white transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <div className="space-y-2 text-slate-300">
              <Link href="/contact" className="block hover:text-white transition-colors">
                Help Center
              </Link>
              <Link href="/contact" className="block hover:text-white transition-colors">
                Customer Support
              </Link>
              <Link href="https://app.ezratesheet.com/login" className="block hover:text-white transition-colors">
                Login
              </Link>
              <Link href="/status" className="block hover:text-white transition-colors">
                System Status
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-slate-400">
              <p>&copy; {currentYear} EZ Rate Sheet LLC. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Social Links (placeholder for future use) */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;