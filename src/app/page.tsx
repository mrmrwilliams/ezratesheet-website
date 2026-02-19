import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const features = [
    {
      name: 'Professional Rate Sheets',
      description: 'Create stunning, customizable rate sheets that impress clients and close deals faster.',
      icon: '📊'
    },
    {
      name: 'Lending Network Access',
      description: 'Connect with our vetted network of 500+ lenders and find the best rates for your clients.',
      icon: '🏦'
    },
    {
      name: 'Deal Comparison Tools', 
      description: 'Comprehensive analysis tools to compare deals side-by-side and optimize client outcomes.',
      icon: '⚖️'
    },
    {
      name: 'Client Management',
      description: 'Streamlined communication and document management in one centralized platform.',
      icon: '👥'
    },
    {
      name: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and market insights to stay ahead of the competition.',
      icon: '🤖'
    },
    {
      name: 'Mobile Ready',
      description: 'Access your rate sheets and tools anywhere, anytime with our mobile-optimized platform.',
      icon: '📱'
    }
  ];

  const testimonials = [
    {
      name: 'Luis Rodriguez',
      role: 'Senior Loan Officer',
      company: 'Pinnacle Lending',
      quote: "Switched from expensive legacy tools and never looked back. EZ Rate Sheet saves me $2,000+ monthly while delivering better results for my clients.",
      rating: 5
    },
    {
      name: 'Damien Martinez',
      role: 'Mortgage Broker',
      company: 'Elite Mortgage Group',
      quote: "The ease of use is incredible. What used to take me hours now takes minutes. My team adopted it instantly and our productivity skyrocketed.",
      rating: 5
    },
    {
      name: 'Rick Morrison', 
      role: 'Branch Manager',
      company: 'First Choice Mortgage',
      quote: "The professional term sheets have transformed how we present to clients. Our close rate improved by 30% in the first quarter alone.",
      rating: 5
    },
    {
      name: 'Derek Chen',
      role: 'Independent Broker',
      company: 'Chen Mortgage Solutions',
      quote: "Cost savings are massive. Between the software efficiency and lending network access, I'm saving over $5,000 per month in operational costs.",
      rating: 5
    }
  ];

  const stats = [
    { label: 'Active Users', value: '15,000+' },
    { label: 'Deals Processed', value: '$2.8B+' },
    { label: 'Partner Lenders', value: '500+' },
    { label: 'Average Time Saved', value: '15hrs/week' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Professional Rate Sheets
              <span className="block text-blue-600">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The complete rate sheet platform trusted by thousands of mortgage professionals. 
              Create stunning presentations, access our lending network, and close more deals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="https://app.ezratesheet.com/register"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your 5-Day Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="https://crm.risehub.ai"
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Schedule Live Demo
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-600 mb-8">
              <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
              <span>No credit card required</span>
              <span className="mx-2">•</span>
              <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
              <span>Setup in under 5 minutes</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Everything You Need to Win More Deals
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stop juggling multiple tools. EZ Rate Sheet combines everything you need into one powerful platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {feature.name}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              Explore All Features
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lending Network Callout */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Access Our Exclusive Lending Network
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Connect with 500+ vetted lenders and access rates your competitors can't match. 
            Our lending network is the secret weapon that sets top performers apart.
          </p>
          <Link
            href="/lending-network"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Discover the Network
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Trusted by Top Performers
            </h2>
            <p className="text-xl text-slate-600">
              See why thousands of mortgage professionals choose EZ Rate Sheet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-slate-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of mortgage professionals who've already made the switch. 
            Start your free trial today and see the difference in 5 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://app.ezratesheet.com/register"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your 5-Day Free Trial
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://crm.risehub.ai"
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
            >
              Schedule Live Demo
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-600 mt-6">
            <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
            <span>5-day free trial</span>
            <span className="mx-2">•</span>
            <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
            <span>No credit card required</span>
            <span className="mx-2">•</span>
            <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>
    </div>
  );
}