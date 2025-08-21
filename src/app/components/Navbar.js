"use client";

import { useState } from "react";
import { FiMenu, FiPhone } from "react-icons/fi"; 
import Image from "next/image"; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-lg shadow-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <img
                src="/favicon.png"
                alt="Rentelligence Logo"
                className="w-12 h-12 object-contain relative z-10"
              />
              {/* If Next.js: 
              <Image
                src="https://rentelligence.ai/static/media/logo.ebca9e1d11d02e0c95f5.png"
                alt="Rentelligence Logo"
                width={48}
                height={48}
                className="relative z-10"
              /> */}
            </div>
            <div>
              <h1 className="text-2xl font-bold transition-colors text-gray-900">
                Rentelligence
              </h1>
              <p className="text-sm transition-colors text-gray-600">Media Kit</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button className="font-medium transition-all hover:scale-105 cursor-pointer text-gray-700 hover:text-blue-600">
              Home
            </button>
            <button className="font-medium transition-all hover:scale-105 cursor-pointer text-gray-700 hover:text-blue-600">
              Resources
            </button>
            <button className="font-medium transition-all hover:scale-105 cursor-pointer text-gray-700 hover:text-blue-600">
              Apps
            </button>
            <button className="font-medium transition-all hover:scale-105 cursor-pointer text-gray-700 hover:text-blue-600">
              Social
            </button>
            <div className="h-6 w-px bg-gray-300 opacity-50"></div>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer group">
              <FiPhone className="inline mr-2 group-hover:animate-pulse" />
              Contact Us
            </button>
          </nav>

         
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer text-gray-700"
          >
            <FiMenu className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
}
