import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { restaurantData } from '@/data/mockData';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">{restaurantData.name}</h3>
            <p className="text-gray-300 mb-4">
              {restaurantData.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5" />
                <span className="text-gray-300">{restaurantData.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">{restaurantData.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">{restaurantData.email}</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">Mon - Thu: 11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">Fri - Sat: 11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">Sun: 11:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 {restaurantData.name}. All rights reserved. | 
            <Link href="/privacy" className="text-orange-400 hover:text-orange-300 ml-1">
              Privacy Policy
            </Link> | 
            <Link href="/terms" className="text-orange-400 hover:text-orange-300 ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
