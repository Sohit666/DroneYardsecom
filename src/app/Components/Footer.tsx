// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between mb-12">
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-6">
            <h5 className="text-xl font-semibold mb-4">About DroneYards</h5>
            <p className="text-gray-400 leading-relaxed">
              At DroneYards, we offer flexible gym memberships on a daily, weekly, or monthly basis. Discover gyms in your area, book sessions, and take your fitness journey to the next level with ease.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 md:px-10">
            <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/pages/about" className="text-gray-400 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pages/products/drones" className="text-gray-400 hover:text-white transition duration-300">
                  Buy Drones
                </Link>
              </li>
              <li>
                <Link href="/pages/services/train" className="text-gray-400 hover:text-white transition duration-300">
                  Training Plans
                </Link>
              </li>
              <li>
                <Link href="/pages/contactus" className="text-gray-400 hover:text-white transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 md:px-10">
            <h5 className="text-xl font-semibold mb-4">Policies</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/pages/policies/privacy-policy" className="text-gray-400 hover:text-white transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/pages/policies/refund-policy" className="text-gray-400 hover:text-white transition duration-300">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/pages/policies/terms-and-conditions" className="text-gray-400 hover:text-white transition duration-300">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pl-6">
            <h5 className="text-xl font-semibold mb-4">Contact Us</h5>
            <p className="text-gray-400 mb-2">
              <a
                href="https://maps.app.goo.gl/aqRArbUHHjio6j5P7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                Metro Station, D-53, Kaushambi Central Park,<br />
                near Kaushambi,<br /> Anand Vihar, Kaushambi, Ghaziabad, Uttar Pradesh 201010
              </a>
            </p>
            <p className="text-gray-400 mb-2">
              <a href="mailto:info@DroneYards.com" className="hover:text-white transition duration-300">
                Email: info@DroneYards.com
              </a>
            </p>
            <p className="text-gray-400">
              <a href="tel:+919868980710" className="hover:text-white transition duration-300">
                Contact: (+91) 98689-80710
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/droneyards/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaLinkedinIn size={24} />
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} DroneYards. All rights reserved.
            </p>  
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
