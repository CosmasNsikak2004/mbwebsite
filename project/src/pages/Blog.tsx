import React, { useState } from 'react';
import { Calendar, Clock, Tag, ArrowRight, TrendingUp, Search, Users, Eye } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredPost = {
    title: "The Future of Content Marketing: AI, Personalization, and Beyond",
    excerpt: "Explore how emerging technologies are reshaping content marketing strategies and what it means for businesses in 2024.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "Strategy",
    featured: true
  };

  const blogPosts = [
    {
      title: "10 SEO Content Writing Tips That Actually Work in 2024",
      excerpt: "Master the art of SEO content writing with these proven strategies that drive organic traffic and engagement.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "SEO"
    },
    {
      title: "How to Create a Content Calendar That Actually Gets Results",
      excerpt: "Stop struggling with content planning. Learn how to create a content calendar that drives consistent growth.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Planning"
    },
    {
      title: "The Psychology of Persuasive Copywriting: What Really Works",
      excerpt: "Discover the psychological principles that make copy convert and how to apply them to your content.",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 28, 2024",
      readTime: "10 min read",
      category: "Copywriting"
    },
    {
      title: "Email Marketing Automation: A Step-by-Step Guide",
      excerpt: "Set up automated email sequences that nurture leads and drive conversions without constant manual work.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "Email Marketing"
    },
    {
      title: "Content Distribution Strategy: Beyond Your Own Blog",
      excerpt: "Maximize your content's reach with strategic distribution across multiple channels and platforms.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 15, 2024",
      readTime: "7 min read",
      category: "Distribution"
    },
    {
      title: "Building Brand Authority Through Thought Leadership Content",
      excerpt: "Transform your executives into industry thought leaders with strategic content marketing.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 10, 2024",
      readTime: "11 min read",
      category: "Strategy"
    }
  ];

  const categories = [
    { name: "All", count: 24 },
    { name: "Strategy", count: 8 },
    { name: "SEO", count: 6 },
    { name: "Copywriting", count: 5 },
    { name: "Email Marketing", count: 3 },
    { name: "Analytics", count: 2 }
  ];

  const popularPosts = [
    {
      title: "The Complete Guide to Content Marketing ROI",
      readTime: "15 min read",
      views: "12.5K"
    },
    {
      title: "Why Your Content Isn't Converting (And How to Fix It)",
      readTime: "8 min read",
      views: "9.2K"
    },
    {
      title: "Content Marketing Trends That Will Dominate 2024",
      readTime: "10 min read",
      views: "7.8K"
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Content Marketing Insights
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Strategic insights, practical tips, and industry trends to help you master content marketing.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </span>
                  <span className="text-blue-600 font-medium">{featuredPost.category}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <a
                  href="#"
                  className="bg-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition-colors inline-flex items-center"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-10 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Categories Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedCategory === category.name
                          ? 'bg-blue-800 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Newsletter Signup */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Subscribe to Newsletter
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Get the latest content marketing insights delivered to your inbox weekly.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>

                {/* Popular Posts */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 text-yellow-400 mr-2" />
                    Popular Posts
                  </h3>
                  <div className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <a href="#" className="block hover:text-blue-800 transition-colors">
                          <h4 className="font-medium text-gray-900 mb-2">{post.title}</h4>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                            <span className="mx-2">•</span>
                            <Eye className="h-3 w-3 mr-1" />
                            {post.views}
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Search */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Search className="h-5 w-5 text-yellow-400 mr-2" />
                    Search
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600">
                      <Search className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how strategic content marketing can drive your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              Schedule Consultation
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

export default Blog;