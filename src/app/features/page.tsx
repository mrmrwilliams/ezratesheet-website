import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Features - Complete Rate Sheet Solution',
  description: 'Discover all the powerful features that make EZ Rate Sheet the #1 choice for mortgage professionals. Compare with competitors and see why we win.',
};

export default function Features() {
  const features = [
    {
      id: 'rate-sheets',
      name: 'Professional Rate Sheets',
      description: 'Create stunning, branded rate sheets that convert prospects into clients.',
      icon: '📊',
      details: [
        'Fully customizable templates with your branding',
        'Real-time rate updates from multiple lenders',
        'Professional PDF export and sharing',
        'Mobile-responsive client viewing',
        'Advanced formatting and styling options',
        'Bulk rate sheet generation'
      ]
    },
    {
      id: 'lending-network',
      name: 'Exclusive Lending Network',
      description: 'Access our network of 500+ vetted lenders with competitive rates.',
      icon: '🏦',
      details: [
        'Direct API connections to major lenders',
        'Real-time rate feeds and updates', 
        'Exclusive wholesale pricing tiers',
        'Lender-specific program matrices',
        'Automated compliance checking',
        'Preferred partner relationships'
      ]
    },
    {
      id: 'deal-analysis',
      name: 'Advanced Deal Analysis',
      description: 'Compare multiple scenarios side-by-side to find optimal solutions.',
      icon: '⚖️',
      details: [
        'Side-by-side loan comparison tools',
        'Break-even analysis calculations',
        'Total cost of ownership projections',
        'Payment scenario modeling',
        'Cash-out refinance analyzers',
        'Investment property calculators'
      ]
    },
    {
      id: 'client-management',
      name: 'Client Management System',
      description: 'Streamline communication and track every interaction.',
      icon: '👥',
      details: [
        'Centralized client contact database',
        'Automated follow-up sequences',
        'Document sharing and storage',
        'Communication history tracking',
        'Pipeline management tools',
        'Client portal access'
      ]
    },
    {
      id: 'ai-insights',
      name: 'AI-Powered Market Insights',
      description: 'Get intelligent recommendations based on market data.',
      icon: '🤖',
      details: [
        'Market trend analysis and predictions',
        'Optimal pricing recommendations',
        'Client matching algorithms',
        'Risk assessment tools',
        'Competitive analysis insights',
        'Performance optimization suggestions'
      ]
    },
    {
      id: 'mobile-platform',
      name: 'Mobile-First Platform',
      description: 'Access everything on-the-go with our mobile-optimized platform.',
      icon: '📱',
      details: [
        'Responsive web application',
        'Native mobile app (iOS/Android)',
        'Offline rate sheet viewing',
        'Mobile document capture',
        'Push notifications',
        'GPS-based meeting scheduling'
      ]
    }
  ];

  const comparison = {
    headers: ['Feature', 'EZ Rate Sheet', 'Mortgage Automator', 'Excel Sheets'],
    rows: [
      {
        feature: 'Professional Templates',
        ezrate: true,
        competitor: 'Limited',
        excel: false
      },
      {
        feature: 'Real-time Rate Updates',
        ezrate: true,
        competitor: 'Manual',
        excel: false
      },
      {
        feature: 'Lending Network Access',
        ezrate: '500+ Lenders',
        competitor: '50+ Lenders',
        excel: 'None'
      },
      {
        feature: 'Mobile Optimization',
        ezrate: true,
        competitor: 'Basic',
        excel: false
      },
      {
        feature: 'Client Management',
        ezrate: 'Full CRM',
        competitor: 'Basic',
        excel: 'None'
      },
      {
        feature: 'AI-Powered Insights',
        ezrate: true,
        competitor: false,
        excel: false
      },
      {
        feature: 'Automated Compliance',
        ezrate: true,
        competitor: 'Limited',
        excel: false
      },
      {
        feature: 'Custom Branding',
        ezrate: true,
        competitor: 'Limited',
        excel: 'Manual'
      },
      {
        feature: 'API Integrations',
        ezrate: '50+ APIs',
        competitor: '10+ APIs',
        excel: 'None'
      },
      {
        feature: 'Support Quality',
        ezrate: '24/7 Live Chat',
        competitor: 'Email Only',
        excel: 'None'
      }
    ]
  };

  const renderComparisonValue = (value: any) => {
    if (value === true) {
      return <CheckIcon className="w-5 h-5 text-emerald-500 mx-auto" />;
    } else if (value === false) {
      return <XMarkIcon className="w-5 h-5 text-red-500 mx-auto" />;
    } else if (typeof value === 'string') {
      return <span className="text-sm">{value}</span>;
    }
    return value;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Every Feature You Need to 
            <span className="block text-blue-600">Dominate Your Market</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Stop settling for basic tools. EZ Rate Sheet delivers enterprise-grade features 
            at a fraction of the cost of legacy solutions.
          </p>
          <Link
            href="https://app.ezratesheet.com/register"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 inline-flex items-center gap-2"
          >
            Try All Features Free
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={feature.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    {feature.name}
                  </h2>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 h-64 flex items-center justify-center">
                    <div className="text-6xl opacity-50">{feature.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How We Stack Up Against the Competition
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See why mortgage professionals are making the switch from outdated tools to EZ Rate Sheet.
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    {comparison.headers.map((header, index) => (
                      <th key={index} className="px-6 py-4 text-left font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-slate-900">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          {renderComparisonValue(row.ezrate)}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          {renderComparisonValue(row.competitor)}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          {renderComparisonValue(row.excel)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience All These Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't just read about them – try every feature risk-free for 5 days. 
            No credit card required, no setup fees, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}