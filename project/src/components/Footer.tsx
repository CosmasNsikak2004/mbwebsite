import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">Mbuotidem Cosmas</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Strategic content marketing that drives results. I help businesses tell their story, 
              engage their audience, and grow their revenue through compelling content.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              {/* <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li> */}
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              {/* <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Content Strategy</span></li>
              {/* <li><span className="text-gray-400">Blog Writing</span></li> */}
              <li><span className="text-gray-400">SEO Content</span></li>
              <li><span className="text-gray-400">Email Marketing</span></li>
              {/* <li><span className="text-gray-400">Copywriting</span></li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Mbuotidem Cosmas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;