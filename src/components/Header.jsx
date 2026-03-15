import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const toCapitalizeCase = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/all-apps" },
    { name: "Installation", path: "/installed-apps" },
  ];

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
            <h3 className="text-lg font-semibold text-white">
              <span className="text-gray-100">HERO</span>.IO
            </h3>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition duration-300
                  ${
                    isActive
                      ? "bg-indigo-700 text-white shadow-lg border-b-2 border-pink-500"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {toCapitalizeCase(link.name)}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Button */}
          <a
            href="https://github.com/Fahmida0010"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <button className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Contribute
            </button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium
                  ${
                    isActive
                      ? "bg-indigo-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {toCapitalizeCase(link.name)}
                </Link>
              );
            })}

            <a
              href="https://github.com/Fahmida0010"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Contribute
              </button>
            </a>

          </div>
        )}

      </div>
    </header>
  );
};

export default Header;