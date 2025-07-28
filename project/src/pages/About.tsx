import React from 'react';
import { Award, Users, TrendingUp, Target, BookOpen, Coffee } from 'lucide-react';

const About = () => {
  const industries = [
    "Technology & SaaS",
    "Healthcare",
    "Financial Services",
    "E-commerce",
    "Education",
    "Real Estate",
    "Manufacturing",
    "Professional Services"
  ];

  // const achievements = [
  //   {
  //     icon: <Award className="h-8 w-8 text-yellow-400" />,
  //     title: "Content Marketing Institute Certification",
  //     description: "Advanced certification in content marketing strategy and implementation"
  //   },
  //   {
  //     icon: <TrendingUp className="h-8 w-8 text-yellow-400" />,
  //     title: "Top 1% SEO Content Writer",
  //     description: "Recognized for exceptional organic traffic growth across multiple industries"
  //   },
  //   {
  //     icon: <Users className="h-8 w-8 text-yellow-400" />,
  //     title: "50+ Successful Projects",
  //     description: "Delivered results for businesses ranging from startups to Fortune 500 companies"
  //   }
  // ];

  const approach = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Deep dive into your business, audience, and goals to create a custom content strategy."
    },
    {
      step: "02",
      title: "Content Creation",
      description: "Develop high-quality, engaging content that resonates with your target audience."
    },
    {
      step: "03",
      title: "Optimization & Growth",
      description: "Continuously analyze performance and optimize content for maximum impact."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Meet Mbuotidem Cosmas
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Strategic Content Marketing Expert with 3+ Years of Driving Results
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-yellow-400" />
                  <span>Published Author</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="h-5 w-5 text-yellow-400" />
                  <span>Coffee Enthusiast</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img src="/profile.jpg" alt="About page image" className="w-80 h-80 rounded-full object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
            <p className="text-gray-700 mb-6">
              I help brands clarify their message and build content strategies that make their value impossible to ignore. Whether it’s a SaaS product, a tech support service, or a growing personal brand, I focus on understanding what the business wants to achieve and what’s getting in the way. 
            </p>
            <p className="text-gray-700 mb-6">
              From there, I shape content that brings the brand’s strengths to the surface in a way that connects with the right audience  clearly, confidently, and consistently. 
            </p>
            <p className="text-gray-700 mb-6">
              This goes beyond just “creating posts.” I pay close attention to how content performs, spot what’s being missed, and adjust the strategy so the brand isn’t just seen its remembered and trusted.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Achievements & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Building expertise through continuous learning and proven results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Industries Served */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industries I Serve
            </h2>
            <p className="text-xl text-gray-600">
              Deep expertise across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors">
                <p className="font-semibold text-blue-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* My Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              My Approach
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology for content marketing success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-blue-800 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < approach.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Target className="h-8 w-8 text-yellow-400" />
                  </div>
                )}
              </div>
            ))}
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
            Let's discuss how I can help you achieve your content marketing goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
            >
              Schedule a Consultation
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

export default About;