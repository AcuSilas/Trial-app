import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-serif mb-4">FEBASHI LIMITED</h3>
            <p className="text-gray-400">
              Empowering Eco-friendly Energy Choices
            </p>
          </div>
          <div>
            <h4 className="text-lg font-serif mb-4">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                123-456-7890
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@mysite.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Nairobi, Kenya
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-serif mb-4">Quick Links</h4>
            <div className="space-y-2">
              <p><a href="#" className="text-gray-400 hover:text-white">Products</a></p>
              <p><a href="#" className="text-gray-400 hover:text-white">Services</a></p>
              <p><a href="#" className="text-gray-400 hover:text-white">About Us</a></p>
              <p><a href="#" className="text-gray-400 hover:text-white">Contact</a></p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-serif mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full bg-white/10 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}