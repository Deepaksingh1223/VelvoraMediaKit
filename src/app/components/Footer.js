"use client"
import { FaRobot } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img
              src="/favicon.png"
              alt="Rentelligence Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold flex items-center gap-2">
              <FaRobot className="text-blue-400" />
              Rentelligence Media Kit
            </span>
          </div>

          {/* Footer Text */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 Rentelligence. Empowering the Future with AI Agents.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              All resources are official and regularly updated.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
