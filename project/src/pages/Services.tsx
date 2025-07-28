import React from 'react';
import { Check, ArrowRight, PenTool, Search, Mail, BarChart, FileText, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BarChart className="h-8 w-8 text-yellow-400" />,
      title: "Content Strategy Development",
      price: "Starting at $2,500",
      description: "Comprehensive content strategy aligned with your business goals and audience needs.",
      features: [
        "Content audit and competitor analysis",
        "Audience persona development",
        "Content calendar and roadmap",
        "KPI definition and tracking setup",
        "Brand voice and tone guidelines"
      ]
    },
    {
      icon: <PenTool className="h-8 w-8 text-yellow-400" />,
      title: "Blog Writing & Content Creation",
      price: "Starting at $300/post",
      description: "High-quality, engaging blog posts that drive traffic and conversions.",
      features: [
        "SEO-optimized blog posts",
        "Industry research and insights",
        "Compelling headlines and hooks",
        "Internal linking strategy",
        "Meta descriptions and tags"
      ]
    },
    {
      icon: <Search className="h-8 w-8 text-yellow-400" />,
      title: "SEO Content Optimization",
      price: "Starting at $1,800/month",
      description: "Search-optimized content that ranks well and drives organic traffic.",
      features: [
        "Keyword research and analysis",
        "On-page SEO optimization",
        "Content gap analysis",
        "Technical SEO recommendations",
        "Performance tracking and reporting"
      ]
    },
    {
      icon: <Mail className="h-8 w-8 text-yellow-400" />,
      title: "Email Marketing Campaigns",
      price: "Starting at $1,200/month",
      description: "Engaging email campaigns that nurture leads and drive conversions.",
      features: [
        "Email sequence development",
        "List segmentation strategy",
        "A/B testing and optimization",
        "Automation setup",
        "Performance analytics"
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-yellow-400" />,
      title: "Copywriting & Sales Pages",
      price: "Starting at $800/page",
      description: "Persuasive copy that converts visitors into customers.",
      features: [
        "Landing page copy",
        "Product descriptions",
        "Sales page optimization",
        "Call-to-action optimization",
        "Conversion rate testing"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-400" />,
      title: "Content Marketing Consulting",
      price: "Starting at $200/hour",
      description: "Strategic guidance to optimize your content marketing efforts.",
      features: [
        "Content strategy review",
        "Team training and workshops",
        "Process optimization",
        "Tool recommendations",
        "Performance improvement plans"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We'll discuss your goals, challenges, and current content situation."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "I'll create a custom content strategy tailored to your business needs."
    },
    {
      step: "03",
      title: "Content Creation",
      description: "High-quality content creation begins based on the approved strategy."
    },
    {
      step: "04",
      title: "Performance Review",
      description: "Regular analysis and optimization to ensure maximum results."
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$2,500",
      duration: "one-time",
      description: "Perfect for businesses just starting their content marketing journey",
      features: [
        "Content strategy development",
        "4 blog posts per month",
        "Basic SEO optimization",
        "Monthly performance report"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "$4,500",
      duration: "per month",
      description: "Comprehensive content marketing for growing businesses",
      features: [
        "Everything in Starter",
        "8 blog posts per month",
        "Email marketing campaigns",
        "Social media content",
        "Quarterly strategy review"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "pricing",
      description: "Full-service content marketing for large organizations",
      features: [
        "Everything in Growth",
        "Unlimited content creation",
        "Dedicated account manager",
        "Custom reporting dashboard",
        "24/7 support"
      ],
      popular: false
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Content Marketing Services
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive content marketing solutions to help your business grow, engage your audience, and drive conversions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-blue-600 font-semibold">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How I Work
            </h2>
            <p className="text-xl text-gray-600">
              A proven process for content marketing success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing options to fit your needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 ${pkg.popular ? 'ring-4 ring-yellow-400 shadow-xl' : 'border border-gray-200'}`}>
                {pkg.popular && (
                  <div className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg text-sm font-bold text-center mb-4">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-800 mb-2">
                    {pkg.price}
                    <span className="text-lg text-gray-600 font-normal">/{pkg.duration}</span>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  pkg.popular 
                    ? 'bg-yellow-400 text-blue-900 hover:bg-yellow-300' 
                    : 'bg-blue-800 text-white hover:bg-blue-900'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your content marketing needs and create a strategy that works for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/portfolio"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;