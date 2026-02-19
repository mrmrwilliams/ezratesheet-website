import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon, BanknotesIcon, ClockIcon, ShieldCheckIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Exclusive Lending Network - Access 500+ Vetted Lenders',
  description: 'Unlock competitive rates and exclusive lending programs through our network of 500+ vetted lenders. The secret weapon of top-performing mortgage professionals.',
};

export default function LendingNetwork() {
  const networkStats = [
    { label: 'Vetted Lenders', value: '500+', icon: '🏦' },
    { label: 'Loan Programs', value: '2,500+', icon: '📋' },
    { label: 'Daily Rate Updates', value: '50,000+', icon: '⚡' },
    { label: 'Avg. Rate Advantage', value: '0.25%', icon: '📉' }
  ];

  const lenderCategories = [
    {
      name: 'National Banks',
      count: '25+',
      description: 'Major national lenders with comprehensive programs',
      programs: ['Conventional', 'FHA', 'VA', 'USDA', 'Jumbo'],
      icon: '🏛️'
    },
    {
      name: 'Regional Banks',
      count: '100+',
      description: 'Regional institutions with competitive portfolio products',
      programs: ['Portfolio loans', 'Local programs', 'Construction', 'Commercial'],
      icon: '🏪'
    },
    {
      name: 'Credit Unions',
      count: '150+',
      description: 'Member-focused institutions with great rates',
      programs: ['Member specials', 'First-time buyer', 'Low down payment'],
      icon: '🤝'
    },
    {
      name: 'Non-Bank Lenders',
      count: '125+',
      description: 'Specialized lenders for unique scenarios',
      programs: ['Non-QM', 'Bank statement', 'Asset-based', 'Hard money'],
      icon: '💼'
    },
    {
      name: 'Wholesale Partners',
      count: '75+',
      description: 'Exclusive wholesale channels',
      programs: ['Broker exclusive', 'Correspondent', 'Bulk pricing'],
      icon: '📦'
    },
    {
      name: 'Private Lenders',
      count: '25+',
      description: 'High-net-worth private lending',
      programs: ['Private money', 'Fix & flip', 'Investment', 'Bridge loans'],
      icon: '💎'
    }
  ];

  const benefits = [
    {
      title: 'Exclusive Wholesale Rates',
      description: 'Access rates and pricing not available to the general public through our wholesale partnerships.',
      icon: <BanknotesIcon className="w-8 h-8" />
    },
    {
      title: 'Real-Time Updates',
      description: 'Rates and guidelines update automatically throughout the day, ensuring you always have current information.',
      icon: <ClockIcon className="w-8 h-8" />
    },
    {
      title: 'Vetted & Verified',
      description: 'Every lender is thoroughly vetted for reliability, competitive rates, and exceptional service.',
      icon: <ShieldCheckIcon className="w-8 h-8" />
    },
    {
      title: 'Performance Analytics',
      description: 'Track which lenders perform best for your clients and optimize your referral patterns.',
      icon: <ChartBarIcon className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Loan Officer',
      company: 'Premier Mortgage Group',
      quote: "The lending network alone is worth the subscription. I've found lenders for deals that would have been impossible otherwise.",
      result: "Closed 15% more deals last quarter"
    },
    {
      name: 'Marcus Williams',
      role: 'Branch Manager',
      company: 'Atlantic Lending Solutions',
      quote: "Our team's close rate improved dramatically once we had access to these exclusive lender relationships.",
      result: "Close rate increased from 65% to 82%"
    },
    {
      name: 'Jennifer Rodriguez',
      role: 'Independent Broker',
      company: 'Rodriguez Mortgage',
      quote: "The non-QM and private lenders in this network have been game-changers for my self-employed clients.",
      result: "Expanded market by 40%"
    }
  ];

  const comparisonFeatures = [
    {
      feature: 'Number of Lenders',
      ezratesheet: '500+',
      competitor1: '25-50',
      competitor2: '10-25',
      advantage: '10x more options'
    },
    {
      feature: 'Wholesale Access',
      ezratesheet: 'Yes',
      competitor1: 'Limited',
      competitor2: 'No',
      advantage: 'Exclusive pricing'
    },
    {
      feature: 'Real-time Updates',
      ezratesheet: 'Every 30 minutes',
      competitor1: 'Daily',
      competitor2: 'Manual',
      advantage: 'Always current'
    },
    {
      feature: 'Non-QM Programs',
      ezratesheet: '500+ programs',
      competitor1: '50 programs',
      competitor2: '10 programs',
      advantage: '10x more programs'
    },
    {
      feature: 'Private Lenders',
      ezratesheet: '25+ active',
      competitor1: '2-5',
      competitor2: 'None',
      advantage: 'Unique access'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              The Exclusive Lending Network
              <span className="block text-blue-600">Your Competition Can't Access</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
              Connect with 500+ vetted lenders, access wholesale rates, and close deals 
              your competitors can't. This is the secret weapon of top-performing mortgage professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="https://app.ezratesheet.com/register"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Network Access Now
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="https://crm.risehub.ai"
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                See Network Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {networkStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Network Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              500+ Lenders Across Every Category
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From traditional banks to private lenders, we've assembled the most comprehensive 
              lending network in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lenderCategories.map((category, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-200">
                <div className="text-4xl mb-4">{category.icon}</div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {category.name}
                  </h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {category.count}
                  </span>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.programs.map((program, programIndex) => (
                    <span key={programIndex} className="bg-white text-slate-700 px-3 py-1 rounded-full text-sm border">
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Our Network is Different
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              It's not just about quantity – it's about access, quality, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="inline-flex p-4 rounded-full bg-white/20 text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Real Results from Real Users
            </h2>
            <p className="text-xl text-slate-600">
              See how access to our lending network transforms businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <blockquote className="text-slate-700 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-slate-600">{testimonial.role}</div>
                    <div className="text-slate-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>
                <div className="bg-success-50 border border-success-200 rounded-lg p-4">
                  <div className="text-success-700 font-semibold text-sm">RESULT</div>
                  <div className="text-success-800 font-medium">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Network Comparison
            </h2>
            <p className="text-xl text-slate-600">
              See how our network stacks up against the competition
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">EZ Rate Sheet</th>
                  <th className="px-6 py-4 text-center font-semibold">Competitor A</th>
                  <th className="px-6 py-4 text-center font-semibold">Competitor B</th>
                  <th className="px-6 py-4 text-center font-semibold">Our Advantage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center font-semibold text-blue-600">{row.ezratesheet}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{row.competitor1}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{row.competitor2}</td>
                    <td className="px-6 py-4 text-center font-medium text-emerald-600">{row.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Getting Started is Simple
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Sign Up for Any Plan
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Start your free trial with any EZ Rate Sheet plan. Network access is included with Team and Pro plans, or add it to Starter for just $29/month.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Instant Network Access
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Your account is immediately provisioned with access to our full network of 500+ lenders and their current rates and programs.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Start Closing More Deals
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Begin finding better rates, unique programs, and solutions for previously impossible deals. Watch your close rate and client satisfaction soar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Access the Network?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of mortgage professionals who are already leveraging our exclusive 
            lending network to close more deals and grow their business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="https://app.ezratesheet.com/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Start Your Free Trial
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://crm.risehub.ai"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Network Demo
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-blue-100">
            <CheckIcon className="w-5 h-5" />
            <span>5-day free trial</span>
            <span className="mx-2">•</span>
            <CheckIcon className="w-5 h-5" />
            <span>No credit card required</span>
            <span className="mx-2">•</span>
            <CheckIcon className="w-5 h-5" />
            <span>Instant network access</span>
          </div>
        </div>
      </section>
    </div>
  );
}