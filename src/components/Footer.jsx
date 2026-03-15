import React from 'react';
import { Facebook, Youtube, Twitter, Instagram } from 'lucide-react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-12">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-sm text-gray-400">

          <div className="col-span-2"> 
            <div className="flex items-center space-x-3 mb-3 border-b border-gray-700 pb-2"> 
                <img src={logo} alt="logo" className="w-10 h-10 object-contain"/> 
                <h3 className="text-lg font-semibold text-white"> 
                    Hero Apps
                </h3>
            </div>

            <p className="text-xs leading-relaxed max-w-xs">
                Building apps designed for productivity, fun, and everyday impact.
                We craft digital experiences that help people stay organized, creative, and inspired.
                Each project is built with passion, precision, and user-centered design.
                From powerful productivity tools to delightful entertainment apps,
                our mission is to make technology meaningful in everyday life.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 border-b border-indigo-700 pb-1">
              About Hero Apps
            </h3>

            <ul className="space-y-1">
              <li><Link to="/management" className="hover:text-indigo-300">Management</Link></li>
              <li><Link to="/leadership" className="hover:text-indigo-300">Leadership</Link></li>
              <li><Link to="/newsroom" className="hover:text-indigo-300">Newsroom</Link></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 border-b border-indigo-700 pb-1">
              More
            </h3>

            <ul className="space-y-1">
              <li><Link to="/support" className="hover:text-indigo-300">Help & Support</Link></li>
              <li><Link to="/security" className="hover:text-indigo-300">Security</Link></li>
              <li><Link to="/partners" className="hover:text-indigo-300">Partners</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 border-b border-indigo-700 pb-1">
              Social Icons
            </h3>

            <div className="flex space-x-3 text-2xl">
              <Link to="/facebook" className="hover:text-indigo-400 transition">
                <Facebook className="w-5 h-5" />
              </Link>

              <Link to="/youtube" className="hover:text-indigo-400 transition">
                <Youtube className="w-5 h-5" />
              </Link>

              <Link to="/twitter" className="hover:text-indigo-400 transition">
                <Twitter className="w-5 h-5" />
              </Link>

              <Link to="/instagram" className="hover:text-indigo-400 transition">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-6">
          <p>© 2025 Hero.IO. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;