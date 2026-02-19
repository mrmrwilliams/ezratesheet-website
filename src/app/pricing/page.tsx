'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRightIcon, CheckIcon, XMarkIcon, StarIcon } from '@heroicons/react/24/outline';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [roiInputs, setRoiInputs] = useState({
    monthlyDeals: 10,
    avgCommission: 3000,
    timeSpentPerDeal: 2
  });

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individual loan officers getting started',
      monthlyPrice: 89,
      annualPrice: 89 * 10, // 2 months free
      popular: false,
      features: [
        'Up to 3 users',
        'Core rate sheet tools',
        'Basic client management',
        'Email support',
        'Mobile access'
      ],
      addOns: [
        { name: 'Lending Network', price: 29 },
        { name: 'AI Insights', price: 20 },
        { name: 'Deal Packs', price: 25, note: 'per pack' }
      ],
      ctaText: 'Start Free Trial',
      ctaLink: 'https://app.ezratesheet.com/register'
    },
    {
      name: 'Team', 
      description: 'Most popular choice for growing teams',
      monthlyPrice: 149,
      annualPrice: 149 * 10, // 2 months free
      popular: true,
      features: [
        'Up to 10 users',
        'All core features',
        'Lending network included',
        'Team collaboration tools',
        'Priority support',
        'Advanced reporting',
        'Custom branding'
      ],
      addOns: [
        { name: 'AI Insights', price: 20 },
        { name: 'Deal Packs', price: 25, note: 'per pack' }
      ],
      ctaText: 'Start Free Trial',
      ctaLink: 'https://app.ezratesheet.com/register'
    },
    {
      name: 'Pro',
      description: 'Everything included for unlimited growth',
      monthlyPrice: 249,
      annualPrice: 249 * 10, // 2 months free
      popular: false,
      bestValue: true,
      features: [
        'Unlimited users',
        'All features included',
        'Lending network included',
        'AI insights included',
        'Unlimited deal packs',
        'White-label options',
        '24/7 phone support',
        'Dedicated success manager',
        'API access'
      ],
      addOns: [],
      ctaText: 'Start Free Trial',
      ctaLink: 'https://app.ezratesheet.com/register'
    }
  ];

  const competitorComparison = [
    {
      feature: 'Professional Software',
      ezrateStarter: '$89/mo',
      ezrateTeam: '$149/mo',
      ezratePro: '$249/mo',
      competitor1: '$299/mo',
      competitor2: '$450/mo'
    },
    {
      feature: 'Legacy Enterprise Solution', 
      ezrateStarter: '$89/mo',
      ezrateTeam: '$149/mo',
      ezratePro: '$249/mo',
      competitor1: '$500+/mo',
      competitor2: '$800+/mo'
    }
  ];

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'Start with full access to all features for 5 days. No credit card required, no setup fees. Cancel anytime during the trial with no charges.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes! Upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle, and we prorate any differences.'
    },
    {
      question: 'What\'s included in the lending network?',
      answer: 'Access to 500+ vetted lenders with real-time rates, exclusive wholesale pricing, and direct API integrations for instant updates.'
    },
    {
      question: 'Do you offer custom enterprise solutions?',
      answer: 'Absolutely. For teams over 50 users or organizations with specific needs, we provide custom enterprise packages with dedicated support.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees, no hidden charges. What you see is what you pay. We even include free onboarding and training for all plans.'
    },
    {
      question: 'What if I need more users?',
      answer: 'Additional users can be added to Starter ($29/user/month) and Team ($19/user/month) plans. Pro includes unlimited users.'
    }
  ];

  const calculateROI = () => {
    const currentMonthlyIncome = roiInputs.monthlyDeals * roiInputs.avgCommission;
    const timeSpentPerMonth = roiInputs.monthlyDeals * roiInputs.timeSpentPerDeal;
    const timeSavingsPerMonth = timeSpentPerMonth * 0.6; // 60% time savings
    const additionalDealsFromTimeSavings = Math.floor(timeSavingsPerMonth / roiInputs.timeSpentPerDeal);
    const additionalIncome = additionalDealsFromTimeSavings * roiInputs.avgCommission;
    const teamPlanCost = 149;
    const monthlyROI = additionalIncome - teamPlanCost;
    const annualROI = monthlyROI * 12;

    return {
      currentMonthlyIncome,
      timeSavingsHours: timeSavingsPerMonth,
      additionalDeals: additionalDealsFromTimeSavings,
      additionalIncome,
      monthlyROI,
      annualROI,
      roiPercentage: ((monthlyROI / teamPlanCost) * 100).toFixed(0)
    };
  };

  const roiResults = calculateROI();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6">
            Simple, Transparent Pricing
            <span className="block text-primary-600">That Scales With You</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            No hidden fees, no surprise charges. Choose the plan that fits your business 
            and upgrade as you grow.
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-medium ${!isAnnual ? 'text-primary-600' : 'text-secondary-600'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-primary-600' : 'bg-secondary-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-primary-600' : 'text-secondary-600'}`}>
              Annual
            </span>
            <span className="bg-success-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Save 2 months
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-8 ${
                  plan.popular
                    ? 'border-primary-600 shadow-xl scale-105'
                    : plan.bestValue
                    ? 'border-success-500 shadow-xl'
                    : 'border-secondary-200 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <StarIcon className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                {plan.bestValue && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-success-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Best Value
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-secondary-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary-600">
                      ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                    </span>
                    <span className="text-secondary-600">/month</span>
                    {isAnnual && (
                      <div className="text-sm text-success-600 font-medium">
                        Billed annually (${plan.annualPrice}/year)
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.addOns.length > 0 && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-secondary-900 mb-3">Add-ons available:</h4>
                    <div className="space-y-2">
                      {plan.addOns.map((addOn, addOnIndex) => (
                        <div key={addOnIndex} className="flex justify-between items-center text-sm text-secondary-600">
                          <span>{addOn.name}</span>
                          <span>+${addOn.price}/mo {addOn.note && `(${addOn.note})`}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Link
                  href={plan.ctaLink}
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular || plan.bestValue
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200'
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-secondary-600">
              See how much EZ Rate Sheet can increase your revenue
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">Your Current Business</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Deals per month
                    </label>
                    <input
                      type="number"
                      value={roiInputs.monthlyDeals}
                      onChange={(e) => setRoiInputs({ ...roiInputs, monthlyDeals: parseInt(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Average commission per deal ($)
                    </label>
                    <input
                      type="number"
                      value={roiInputs.avgCommission}
                      onChange={(e) => setRoiInputs({ ...roiInputs, avgCommission: parseInt(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Hours spent on rate sheets per deal
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={roiInputs.timeSpentPerDeal}
                      onChange={(e) => setRoiInputs({ ...roiInputs, timeSpentPerDeal: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-6">Your ROI with EZ Rate Sheet</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Current monthly income:</span>
                    <span className="font-semibold">${roiResults.currentMonthlyIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Time saved per month:</span>
                    <span className="font-semibold text-success-600">{roiResults.timeSavingsHours.toFixed(1)} hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Additional deals possible:</span>
                    <span className="font-semibold text-success-600">+{roiResults.additionalDeals} deals</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Additional monthly income:</span>
                    <span className="font-semibold text-success-600">+${roiResults.additionalIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Team plan cost:</span>
                    <span className="font-semibold text-error-600">-$149</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold">Monthly ROI:</span>
                      <span className="font-bold text-success-600">+${roiResults.monthlyROI.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xl mt-2">
                      <span className="font-semibold">Annual ROI:</span>
                      <span className="font-bold text-success-600">+${roiResults.annualROI.toLocaleString()}</span>
                    </div>
                    <div className="text-center mt-4 p-4 bg-success-50 rounded-lg">
                      <span className="text-2xl font-bold text-success-600">{roiResults.roiPercentage}% ROI</span>
                      <p className="text-sm text-success-700 mt-1">Return on investment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Why Pay More for Less?
            </h2>
            <p className="text-xl text-secondary-600">
              Compare our pricing with legacy solutions and see the savings
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border">
            <table className="w-full">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Solution Type</th>
                  <th className="px-6 py-4 text-center font-semibold">EZ Rate Sheet Starter</th>
                  <th className="px-6 py-4 text-center font-semibold">EZ Rate Sheet Team</th>
                  <th className="px-6 py-4 text-center font-semibold">EZ Rate Sheet Pro</th>
                  <th className="px-6 py-4 text-center font-semibold">Competitor A</th>
                  <th className="px-6 py-4 text-center font-semibold">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                {competitorComparison.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-secondary-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-secondary-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center font-semibold text-primary-600">{row.ezrateStarter}</td>
                    <td className="px-6 py-4 text-center font-semibold text-primary-600">{row.ezrateTeam}</td>
                    <td className="px-6 py-4 text-center font-semibold text-primary-600">{row.ezratePro}</td>
                    <td className="px-6 py-4 text-center text-error-600">{row.competitor1}</td>
                    <td className="px-6 py-4 text-center text-error-600">{row.competitor2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-secondary-600 mb-6">
              Save thousands annually while getting more features and better support
            </p>
            <Link
              href="https://app.ezratesheet.com/register"
              className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2"
            >
              Start Your Free Trial
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of mortgage professionals already using EZ Rate Sheet. 
            Start your free trial today – no credit card required.
          </p>
          <Link
            href="https://app.ezratesheet.com/register"
            className="bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center gap-2"
          >
            Start Your 5-Day Free Trial
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}