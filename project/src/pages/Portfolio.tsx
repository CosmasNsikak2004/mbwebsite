import React from 'react';
import { ExternalLink, TrendingUp, Users, Target, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "ULE Homes (B2C Rent Financing Service)",
      client: "ULE Homes",
      industry: "Finance",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive blog strategy and content creation for a B2B SaaS company looking to establish thought leadership.",
      results: [
        { metric: "Organic Traffic", value: "+300%" },
        { metric: "Lead Generation", value: "+250%" },
        { metric: "Time on Page", value: "+180%" }
      ],
      challenge: "Despite offering a valuable rent-financing service, ULE Homes was struggling with visibility. The service wasn’t widely known among its MSME audience, and product adoption was low due to a lack of awareness and brand memorability.",
      solution: "To address this, I crafted a content strategy focused on the emotional and financial realities of Nigerian renters educating on credit and rent finance, sharing real user stories, highlighting renter successes, and reviving the blog with relatable, context-driven content.",
      link: "#"
    },
    {
      title: "Ultra Africa Content Marketing Overhaul",
      client: "Ultra Africa",
      industry: "Marketing",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete content marketing transformation including blog content, email campaigns, and lead magnets.",
      results: [
        { metric: "Email Subscribers", value: "+400%" },
        { metric: "Conversion Rate", value: "+150%" },
        { metric: "Brand Awareness", value: "+200%" }
      ],
      challenge: "Ultra Africa had inconsistent content and low engagement rates across all channels.",
      solution: "Created a unified content strategy, redesigned email campaigns, and developed high-converting lead magnets that aligned with their sales funnel.",
      link: "#"
    },
    // {
    //   title: "CreativeSpace E-commerce Content",
    //   client: "CreativeSpace",
    //   industry: "E-commerce",
    //   image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   description: "Product descriptions, category pages, and blog content for a creative supplies e-commerce platform.",
    //   results: [
    //     { metric: "Product Page Views", value: "+220%" },
    //     { metric: "Sales Conversion", value: "+130%" },
    //     { metric: "Average Order Value", value: "+85%" }
    //   ],
    //   challenge: "CreativeSpace needed compelling product content that would drive sales and improve SEO rankings.",
    //   solution: "Rewrote all product descriptions with SEO optimization, created buying guides, and developed content that highlighted product benefits and use cases.",
    //   link: "#"
    // },
    {
      title: "Mon Info Services Tech Startup",
      client: "Mon Info services",
      industry: "Technology",
      image: "https://images.pexels.com/photos/3184465/pexels-pho-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Thought leadership content strategy for a healthcare technology company targeting decision-makers.",
      results: [
        { metric: "Industry Recognition", value: "+300%" },
        { metric: "Speaking Opportunities", value: "+250%" },
        { metric: "Partnership Inquiries", value: "+180%" }
      ],
      challenge: "Mon Info Services had been operating for 6 months without a single product signup. Although the service was useful, it had no visibility, no leads, and no positioning in the mind of its target audience. The brand was unknown, and there was no trust bridge between the product and decision-makers in its ideal market.",
      solution: "As the Content Marketer and Brand Strategist, I crafted a founder-led strategy that amplified the CEO’s voice to build authority. I repositioned the founder’s LinkedIn with empathy-driven storytelling and cybersecurity insights, built a warm outreach system, and used AI tools to simplify and edit educational video content.",
      link: "#"
    }
  ];

  const caseStudies = [
    {
      title: "How I Helped ULE Homes Increase Organic Traffic by 300%",
      excerpt: "A deep dive into the content strategy that transformed Ule Homes online presence.",
      readTime: "8 min read",
      image: "/portfolio-image-1.jpg"
    },
    {
      title: "Email Marketing Success: Mon info Services",
      excerpt: "Learn how strategic email campaigns increased conversions by 150%.",
      readTime: "6 min read",
      image: "/portfolio-img-2.jpeg"
    },
    {
      title: "E-commerce Content That Converts: CreativeSpace Success",
      excerpt: "The content strategy that boosted sales conversion by 130%.",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Portfolio & Results
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how I've helped businesses transform their content marketing and achieve measurable results.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses
            </p>
          </div>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.industry}
                      </span>
                      <span className="text-gray-500">{project.client}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6">{project.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-2xl font-bold text-blue-800">{result.value}</div>
                        <div className="text-sm text-gray-600">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{project.solution}</p>
                    </div>
                  </div>
                  
                  <a
                    href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Full Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
                
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-20 rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Detailed Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Deep dives into successful content marketing strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{study.readTime}</span>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success by the Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Consistent results across all projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <TrendingUp className="h-8 w-8 text-yellow-400" />, metric: "Average Traffic Increase", value: "280%" },
              { icon: <Users className="h-8 w-8 text-yellow-400" />, metric: "Lead Generation Boost", value: "220%" },
              { icon: <Target className="h-8 w-8 text-yellow-400" />, metric: "Conversion Rate Improvement", value: "150%" },
              { icon: <ExternalLink className="h-8 w-8 text-yellow-400" />, metric: "Client Satisfaction Rate", value: "100%" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-blue-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to See Similar Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how I can help you achieve your content marketing goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/services"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;