import React from 'react';
import { Facebook, Youtube, Twitter, Instagram } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-12">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-sm text-gray-400">
         <div className="col-span-2"> 
            <div className="flex items-center space-x-3 mb-3 border-b border-gray-700 pb-2"> 
                <img src="src/assets/logo.png" alt="logo" className="w-10 h-10 object-contain"/> 
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
          <div>
          <h3 className="text-lg font-semibold text-white mb-3 border-b border-indigo-700 pb-1">About Hero Apps</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-indigo-300">Management</a></li>
              <li><a href="#" className="hover:text-indigo-300">Leadership</a></li>
              <li><a href="#" className="hover:text-indigo-300">Newsroom</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 border-b border-indigo-700 pb-1">More</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-indigo-300">Help & Support</a></li>
              <li><a href="#" className="hover:text-indigo-300">Security</a></li>
              <li><a href="#" className="hover:text-indigo-300">Partners</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 border-b border-indigo-700 pb-1">Social Icons</h3>
            <div className="flex space-x-3 text-2xl">
              <a href="#" className="hover:text-indigo-400 transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition"><Twitter className="w-5 h-5" /></a>
               <a href="#" className="hover:text-indigo-400 transition"><Instagram className="w-5 h-5" /></a>
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