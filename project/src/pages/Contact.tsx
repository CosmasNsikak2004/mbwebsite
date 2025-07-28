import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Download, Send, Linkedin, Twitter, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    project: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', budget: '', project: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-yellow-400" />,
      title: "Email",
      content: "cosmasmbuotidem@gmail.com",
      link: "mailto:cosmasmbuotidem@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-yellow-400" />,
      title: "Phone",
      content: "+234 8146544647",
      link: "tel:+2348146544647"
    },
    {
      icon: <MapPin className="h-6 w-6 text-yellow-400" />,
      title: "Location",
      content: "Lagos, Nigeria",
      link: null
    }
  ];

  const faqs = [
    {
      question: "How do you approach new content marketing projects?",
      answer: "I start with a comprehensive discovery phase to understand your business goals, target audience, and current content landscape. From there, I develop a custom strategy that aligns with your objectives and budget."
    },
    {
      question: "What's included in your content strategy service?",
      answer: "My content strategy service includes audience research, competitor analysis, content audit, editorial calendar development, brand voice guidelines, and KPI tracking setup."
    },
    {
      question: "How long does it take to see results?",
      answer: "While some improvements can be seen within 30-60 days, significant content marketing results typically take 3-6 months. I provide regular reporting to track progress and optimize strategies."
    },
    {
      question: "Do you work with businesses in all industries?",
      answer: "Yes, I've worked across various industries including technology, healthcare, finance, e-commerce, and professional services. My approach adapts to each industry's unique challenges and opportunities."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to transform your content marketing? I'd love to discuss your goals and how I can help you achieve them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              Schedule Free Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors inline-flex items-center justify-center"
            >
              Download Strategy Guide
              <Download className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get Your Free Content Audit
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and I'll get back to you within 24 hours with a free content audit and strategy recommendations.
              </p>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-600 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been sent successfully. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Company Inc."
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-2h">Under $200</option>
                        <option value="2h-5h">$200 - $500</option>
                        <option value="5h-1k">$500 - $1000</option>
                        <option value="1k-plus">$1000+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      <option value="content-strategy">Content Strategy</option>
                      <option value="blog-writing">Blog Writing</option>
                      <option value="seo-content">SEO Content</option>
                      <option value="email-marketing">Email Marketing</option>
                      <option value="copywriting">Copywriting</option>
                      <option value="full-service">Full-Service Marketing</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell me about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your content marketing goals and challenges..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Lead Magnet */}
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-8 text-blue-900">
                <h3 className="text-xl font-bold mb-4">Free Content Strategy Template</h3>
                <p className="mb-6">
                  Download my proven content strategy framework that's helped 50+ businesses increase their traffic by 300%.
                </p>
                <a
                  href="#"
                  className="bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors inline-flex items-center"
                >
                  Download Now
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about working with me
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
            Let's discuss your content marketing goals and create a strategy that drives results.
          </p>
          <a
            href="#contact-form"
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center"
          >
            Schedule Your Free Consultation
            <Calendar className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;