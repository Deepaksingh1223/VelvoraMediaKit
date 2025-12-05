"use client";

import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";
import Link from "next/link";
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-lg shadow-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Title */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Image
                src="/favicon.png"
                alt="Rentelligence Logo"
                width={48}
                height={48}
                className="object-contain relative z-10"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold transition-colors text-gray-900">
                Rentelligence
              </h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium transition-all hover:scale-105 cursor-pointer text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="https://rentelligence.ai/service" className="font-medium transition-all hover:scale-105 cursor-pointer text-gray-700 hover:text-blue-600">
              Resources
            </Link>
            <Link href="https://rentelligence.ai/service"className="font-medium transition-all hover:scale-105 cursor-pointer text-gray-700 hover:text-blue-600">
              Apps
            </Link>
            <Link href="https://rentelligence.ai/service" className="font-medium transition-all hover:scale-105 cursor-pointer text-gray-700 hover:text-blue-600">
              Social
            </Link>

            <div className="h-6 w-px bg-gray-300 opacity-50"></div>

            <Link href="https://app.rentelligence.ai/home/register" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer group">
              <MdAppRegistration className="inline-block mr-2 group-hover:animate-pulse text-lg" />
              Register Now
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer text-gray-700"
          >
            {isOpen ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 flex flex-col items-start">
            <button className="block w-full text-left font-medium transition-all hover:scale-105 cursor-pointer text-gray-700 hover:text-blue-600">
              Home
            </button>
            <button className="block w-full text-left font-medium transition-all hover:scale-105 cursor-pointer text-gray-700 hover:text-blue-600">
              Resources
            </button>
            <button className="block w-full text-left font-medium transition-all hover:scale-105 cursor-pointer text-gray-700 hover:text-blue-600">
              Apps
            </button>
            <button className="block w-full text-left font-medium transition-all hover:scale-105 cursor-pointer text-gray-700 hover:text-blue-600">
              Social
            </button>

            <Link
              href="https://app.rentelligence.ai/home/register"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer group"
            >
              <MdAppRegistration className="inline-block mr-2 group-hover:animate-pulse text-lg" />
              Register Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
