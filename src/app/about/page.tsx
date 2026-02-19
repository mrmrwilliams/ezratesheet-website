import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'About Us - Our Mission to Transform Lending',
  description: 'Learn about EZ Rate Sheet\'s mission to empower mortgage professionals with professional-grade tools at affordable prices. Discover our story and values.',
};

export default function About() {
  const stats = [
    { label: 'Active Users', value: '15,000+', description: 'Mortgage professionals trust our platform' },
    { label: 'Deals Processed', value: '$2.8B+', description: 'In loan volume through our platform' },
    { label: 'Partner Lenders', value: '500+', description: 'In our exclusive network' },
    { label: 'Time Saved', value: '45,000+', description: 'Hours saved monthly by our users' },
    { label: 'Customer Satisfaction', value: '98%', description: 'Of users would recommend us' },
    { label: 'Average ROI', value: '340%', description: 'Return on investment for our customers' }
  ];

  const values = [
    {
      title: 'Simplicity First',
      description: 'Complex problems deserve elegant solutions. We believe powerful tools should be intuitive and easy to use.',
      icon: '⚡'
    },
    {
      title: 'Transparency Always',
      description: 'No hidden fees, no surprise charges, no confusing contracts. What you see is what you pay.',
      icon: '🔍'
    },
    {
      title: 'Customer Success',
      description: 'Your success is our success. We\'re committed to helping you grow your business and exceed your goals.',
      icon: '🎯'
    },
    {
      title: 'Innovation Driven',
      description: 'We continuously evolve our platform based on user feedback and industry trends.',
      icon: '🚀'
    },
    {
      title: 'Integrity',
      description: 'We do the right thing, even when no one is watching. Trust is the foundation of everything we do.',
      icon: '🛡️'
    },
    {
      title: 'Accessibility',
      description: 'Professional-grade tools shouldn\'t be limited to enterprise budgets. Everyone deserves the best.',
      icon: '🌍'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'The Problem',
      description: 'Frustrated with expensive, outdated rate sheet tools, our founder began developing a better solution.'
    },
    {
      year: '2021',
      title: 'First Version',
      description: 'Launched the initial version with core rate sheet functionality and basic lender integrations.'
    },
    {
      year: '2022',
      title: 'Lending Network',
      description: 'Established partnerships with major lenders and launched our exclusive lending network.'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Added AI-powered insights and market analysis tools to help users make better decisions.'
    },
    {
      year: '2024',
      title: 'Scale & Growth',
      description: 'Reached 15,000+ active users and processed over $2.8B in loan volume.'
    },
    {
      year: '2025',
      title: 'The Future',
      description: 'Expanding internationally and developing next-generation features powered by AI and machine learning.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Transforming How
              <span className="block text-blue-600">Mortgage Professionals Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              We believe every mortgage professional deserves access to professional-grade tools 
              without enterprise-level prices. That's why we built EZ Rate Sheet.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-slate-700">
            <p className="text-xl leading-relaxed mb-8">
              EZ Rate Sheet was born from frustration – the same frustration felt by thousands of 
              mortgage professionals who were tired of paying premium prices for outdated, 
              clunky software that made their jobs harder, not easier.
            </p>
            
            <p className="leading-relaxed mb-8">
              Our founder, after years in the lending industry, watched talented loan officers 
              struggle with tools that were either too expensive for small teams or too 
              complicated for daily use. The existing solutions were built for enterprises 
              with massive budgets and dedicated IT teams, leaving independent brokers and 
              smaller lending teams with subpar alternatives.
            </p>

            <p className="leading-relaxed mb-8">
              The breakthrough moment came during a client presentation that went wrong due 
              to outdated rate information in a manually-created spreadsheet. That night, 
              the first lines of EZ Rate Sheet code were written – not just another rate 
              sheet tool, but a complete platform that would level the playing field.
            </p>

            <p className="leading-relaxed mb-8">
              Today, EZ Rate Sheet powers over 15,000 mortgage professionals across the 
              United States, processing billions in loan volume monthly. But our mission 
              hasn't changed: to provide professional-grade tools at prices that make sense 
              for real businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To democratize professional-grade lending tools by making them accessible, 
                affordable, and intuitive for mortgage professionals of all sizes.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that the size of your company shouldn't determine the quality 
                of your tools. Every mortgage professional deserves the same competitive 
                advantages, regardless of their budget.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                A world where every mortgage professional has access to the tools they 
                need to succeed, regardless of company size or budget constraints.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We envision an industry where competition is based on service quality 
                and expertise, not who can afford the most expensive software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every feature we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-200">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600">
              From frustration to solution – the milestones that shaped our platform
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              By the Numbers
            </h2>
            <p className="text-xl text-blue-100">
              The impact we're making in the mortgage industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-blue-100 mb-2">
                  {stat.label}
                </div>
                <div className="text-blue-200 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Company Information
            </h2>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Legal Entity</h3>
                <div className="text-slate-600 space-y-2">
                  <p>EZ Rate Sheet LLC</p>
                  <p>DBA of Copy Machines LLC</p>
                  <p>Florida, United States</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact</h3>
                <div className="text-slate-600 space-y-2">
                  <p>Website: ezratesheet.com</p>
                  <p>App Platform: app.ezratesheet.com</p>
                  <p>Demo Booking: crm.risehub.ai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Become part of the growing community of mortgage professionals who've 
            discovered a better way to work. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://app.ezratesheet.com/register"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              Start Your Free Trial
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}