import React from 'react';
import { Package, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Serendib Basket</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Premium quality Sri Lankan groceries delivered fresh to your doorstep across the island.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>24/7 Online Ordering</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Delivery Areas</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Return Policy</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h5 className="font-semibold mb-4">Categories</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Fresh Produce</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Rice & Grains</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Spices & Herbs</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Beverages</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Dairy Products</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h5 className="font-semibold mb-4">Contact Info</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@serendibbasket.lk</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Galle Road,<br />Colombo 03, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Serendib Basket. All rights reserved. Proudly serving Sri Lanka with fresh groceries.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;