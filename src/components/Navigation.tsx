'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      name: 'Lending Network',
      href: '/lending-network',
      description: 'Connect with our vetted network of lenders'
    },
    {
      name: 'Rate Sheets',
      href: '/features#rate-sheets',
      description: 'Professional, customizable rate sheets'
    },
    {
      name: 'Deal Analysis',
      href: '/features#deal-analysis',
      description: 'Comprehensive deal comparison tools'
    },
    {
      name: 'Client Management',
      href: '/features#client-management',
      description: 'Streamlined client communication'
    }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' 
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EZ</span>
            </div>
            <span className="text-xl font-bold text-slate-900">EZ Rate Sheet</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/features" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Features
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                <span>Solutions</span>
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.name}
                      href={solution.href}
                      className="block px-4 py-3 hover:bg-slate-50 transition-colors"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      <div className="font-medium text-slate-900">{solution.name}</div>
                      <div className="text-sm text-slate-600 mt-1">{solution.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/pricing" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Pricing
            </Link>

            <Link 
              href="/about" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </Link>

            <Link 
              href="/blog" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://app.ezratesheet.com/login"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              href="https://app.ezratesheet.com/register"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-blue-600"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4">
            <div className="space-y-4">
              <Link 
                href="/features" 
                className="block text-slate-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              
              <div className="space-y-2">
                <div className="font-medium text-slate-900">Solutions</div>
                <div className="pl-4 space-y-2">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.name}
                      href={solution.href}
                      className="block text-slate-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/pricing" 
                className="block text-slate-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>

              <Link 
                href="/about" 
                className="block text-slate-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link 
                href="/blog" 
                className="block text-slate-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <div className="pt-4 border-t border-slate-200 space-y-2">
                <Link
                  href="https://app.ezratesheet.com/login"
                  className="block text-slate-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="https://app.ezratesheet.com/register"
                  className="block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop for dropdown */}
      {isSolutionsOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsSolutionsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;