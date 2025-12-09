"use client";

import { useEffect, useState } from "react";
import { RiDownloadCloudLine, RiPlayCircleLine, RiCloseLine } from "react-icons/ri";

export default function WelcomeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const cards = [
    { number: "500+", text: "AI Agents Deployed" },
    { number: "50+", text: "Global Partners" },
    { number: "99.9%", text: "Uptime Reliability" },
    { number: "24/7", text: "Support Available" },
  ];

   const pdfDownloadUrl = "/Rental.pdf"; 
  const handlePdfDownload = () => {
    const link = document.createElement('a');
    link.href = pdfDownloadUrl;
    link.download = 'Rental.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, [cards.length]);

  const youtubeUrl = "https://youtu.be/MsodtSGYKBk?si=PPHz0vEf5tF_RBLM";
  const videoId = youtubeUrl.includes("youtu.be/") 
    ? youtubeUrl.split("youtu.be/")[1].split("?")[0]
    : youtubeUrl.includes("youtube.com/watch?v=")
    ? youtubeUrl.split("v=")[1].split("&")[0]
    : "MsodtSGYKBk";

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showVideoModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showVideoModal]);

  return (
    <>
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
              "url('https://react.mediacity.co.in/pylon/static/media/main-slider-1-1.080073f2792f5ce85406.jpg')",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div className="max-w-2xl space-y-6">
              <h3 className="text-5xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent animate-text">
                  Rentelligence
                </span>
              </h3>
              <span className="text-3xl md:text-4xl font-semibold text-blue-200 tracking-wide">
                Media Kit
              </span>
              <p className="text-xl md:text-2xl text-blue-100 font-medium">
                Empowering the Future with AI Agents
              </p>
              <p className="text-lg text-blue-200">
                Rent, Lease, Own, and Evolve — Your comprehensive resource hub for
                everything Rentelligence
              </p>

              {/* Highlight Box */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-blue-500/20 transition-all">
                <p className="text-lg text-white leading-relaxed">
                  Welcome to Rentelligence Media Kit – Your complete resource
                  center featuring legal certificates, multilingual presentations,
                  training videos, promotional materials, and mobile apps.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                onClick={handlePdfDownload}
                className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl whitespace-nowrap cursor-pointer flex items-center group">
                  <RiDownloadCloudLine className="mr-2 text-xl group-hover:translate-y-[-3px] transition-transform" />
                  Quick Download Pack
                </button>
                <button 
                  onClick={() => setShowVideoModal(true)}
                  className="relative bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border border-white/30 transition-all hover:scale-105 whitespace-nowrap cursor-pointer flex items-center group"
                >
                  <RiPlayCircleLine className="mr-2 text-xl group-hover:translate-y-[-3px] transition-transform" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Section - Company Highlights */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-blue-500/10 transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Company Highlights
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded mx-auto"></div>
                </div>

                {/* Highlight Cards */}
                <div className="grid grid-cols-2 gap-6">
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className={`text-center p-6 rounded-xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-lg ${
                        activeIndex === index
                          ? "bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-400/50 shadow-blue-500/30"
                          : "bg-white/5 hover:bg-white/10"
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className="text-3xl font-extrabold text-white mb-1 drop-shadow">
                        {card.number}
                      </div>
                      <div className="text-sm text-blue-200">{card.text}</div>
                    </div>
                  ))}
                </div>

                {/* Pagination Dots */}
                <div className="mt-6 flex justify-center space-x-3">
                  {cards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`transition-all rounded-full ${
                        activeIndex === index
                          ? "w-6 h-2 bg-gradient-to-r from-blue-400 to-cyan-400"
                          : "w-2 h-2 bg-white/30 hover:bg-white/50"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal/Popup */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-900 to-purple-900">
              <h3 className="text-xl font-semibold text-white">Rentelligence Demo Video</h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <RiCloseLine className="text-2xl text-white" />
              </button>
            </div>

            {/* YouTube Video Embed */}
            <div className="relative pt-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Rentelligence Demo"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}