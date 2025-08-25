import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, Award, Download } from 'lucide-react';

const Home = () => {
  const testimonials = [
    {
      name: "Nseobot Peter",
      role: "CEO Mon Info services",
      content: "Her content strategy increased our organic traffic by 300% in just 6 months. Her expertise in SEO and storytelling is unmatched.",
      rating: 5
    },
    {
      name: "Oche Writes",
      role: "Lead, Ultra Africa",
      content: "Mbuotidem’s exceptional organisational skills kept events on track, tasks in order, and communication flowing in the community.",
      rating: 5
    },
    {
      name: "Chisom Okorie",
      role: "COO, ULE Homes",
      content: "Mbuotidem doesn't just write content she creates experiences. Our brand voice has never been stronger and more consistent.",
      rating: 5
    }
  ];

  // const stats = [
  //   { number: "8+", label: "Years Experience" },
  //   { number: "200+", label: "Projects Completed" },
  //   { number: "50+", label: "Happy Clients" },
  //   { number: "300%", label: "Avg. Traffic Increase" }
  // ];

  const clients = [
    "Mon Info services", "Ultra Africa", "ULE Homes", "Ankara Grid Africa"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Strategic Content Marketing That 
                <span className="text-yellow-400"> Drives Results</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                I help businesses tell their story, engage their audience, and grow their revenue through compelling, conversion-focused content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* <Link
                  to="/contact"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center group"
                >
                  Get Your Free Content Audit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors text-center"
                >
                  View My Work
                </Link> */}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-md">
                <div className="text-center">
                  {/* <div className="w-32 h-32 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-blue-900 font-bold text-2xl">MC</span>
                  </div> */}
                  <img src="/profile.jpg" alt="Mbuotidem Cosmas" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" />
                  <h3 className="text-xl font-bold mb-2">Mbuotidem Cosmas</h3>
                  <p className="text-blue-100">Content Marketing Strategist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 */}
      {/* Services Preview */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Content Marketing Services That Convert
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, I provide comprehensive content marketing solutions that drive engagement, traffic, and revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8 text-yellow-400" />,
                title: "Content Strategy",
                description: "Data-driven content strategies that align with your business goals and audience needs."
              },
              {
                icon: <Users className="h-8 w-8 text-yellow-400" />,
                title: "SEO Content",
                description: "Search-optimized content that ranks well and drives organic traffic to your site."
              },
              {
                icon: <Award className="h-8 w-8 text-yellow-400" />,
                title: "Email Marketing",
                description: "Engaging email campaigns that nurture leads and drive conversions."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What My Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-gray-600 mb-8">Trusted by Leading Companies</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {clients.map((client, index) => (
                <div key={index} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
            <Download className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Free Content Strategy Template
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Download my proven content strategy framework that's helped 50+ businesses increase their traffic by 300%
            </p>
            <Link
              to="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center"
            >
              Download Free Guide
              <Download className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;