"use client";

import {
  RiDownloadCloudLine,
  RiPlayCircleLine,
} from "react-icons/ri";

export default function WelcomeSection() {
  return (
    <section id="welcome" className="relative py-20 mt-4 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%239C92AC fill-opacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Overlay Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=Advanced%20AI%20neural%20network%20visualization%20with%20glowing%20nodes%20and%20connections%2C%20futuristic%20artificial%20intelligence%20brain%20structure%2C%20digital%20transformation%20technology%20background%20with%20flowing%20data%20streams%20and%20holographic%20elements%20in%20blue%20and%20purple%20tones&width=1200&height=600&seq=ai-neural-bg&orientation=landscape')",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Rentelligence
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-medium text-blue-200">
                Media Kit
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-4 leading-relaxed font-medium">
              Empowering the Future with AI Agents
            </p>
            <p className="text-lg text-blue-200 mb-8 leading-relaxed">
              Rent, Lease, Own, and Evolve — Your comprehensive resource hub for
              everything Rentelligence
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
              <p className="text-lg text-white leading-relaxed">
                Welcome to Rentelligence Media Kit – Your complete resource
                center featuring legal certificates, multilingual presentations,
                training videos, promotional materials, and mobile apps.
                Discover our AI-powered solutions and company journey all in one
                place.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl whitespace-nowrap cursor-pointer flex items-center">
                <RiDownloadCloudLine className="mr-2" /> Quick Download Pack
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border border-white/30 transition-all hover:scale-105 whitespace-nowrap cursor-pointer flex items-center">
                <RiPlayCircleLine className="mr-2" /> Watch Demo
              </button>
            </div>
          </div>

          {/*  Company Highlights */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Company Highlights
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded mx-auto"></div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl transition-all duration-500 bg-white/20 scale-105 border border-white/30">
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-blue-200">
                    AI Agents Deployed
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl transition-all duration-500 bg-white/5 hover:bg-white/10">
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-blue-200">Global Partners</div>
                </div>
                <div className="text-center p-4 rounded-xl transition-all duration-500 bg-white/5 hover:bg-white/10">
                  <div className="text-2xl font-bold text-white mb-1">
                    99.9%
                  </div>
                  <div className="text-sm text-blue-200">
                    Uptime Reliability
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl transition-all duration-500 bg-white/5 hover:bg-white/10">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-blue-200">Support Available</div>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="mt-6 flex justify-center space-x-2">
                <div className="w-6 h-2 rounded-full transition-all bg-blue-400"></div>
                <div className="w-2 h-2 rounded-full transition-all bg-white/30"></div>
                <div className="w-2 h-2 rounded-full transition-all bg-white/30"></div>
                <div className="w-2 h-2 rounded-full transition-all bg-white/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
