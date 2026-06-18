"use client";
import React, { useState } from "react";
import {
  RiArrowLeftLine,
  RiPlayLine,
  RiPlayFill,
  RiCloseLine,
} from "react-icons/ri";
import VideoPopUp from "@/app/components/VideoPopUp";
import { businessVideos, businessLanguages, features } from "@/app/constant/constant";
import Link from "next/link";
import Image from "next/image";

const BusinessPlanVideos = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const availableLanguages = ["en", "hi","mr","bn","ta","ru","zh","th"];

  const filteredVideos = selectedLang
    ? businessVideos.filter((video) => video?.lang?.includes(selectedLang))
    : businessVideos;

  const getVideoData = (video, lang) => {
    const langData = video.languages?.[lang] || {};
    return {
      title: langData.title || video.title,
      desc: langData.desc || video.desc,
      duration: langData.duration || video.duration,
      img: langData.img || video.img,
      youtubeId: langData.youtubeId || video.youtubeId,
      originalVideo: video
    };
  };

  const handleVideoSelect = (video) => {
    const videoData = getVideoData(video, selectedLang);
    if (video.languages?.[selectedLang]?.youtubeId) {
      setSelectedVideo(videoData);
    } else {
      alert(`This video is not available in ${businessLanguages.find(l => l.code === selectedLang)?.name} yet.`);
    }
  };

  const handleLanguageSelect = (langCode) => {
    if (availableLanguages.includes(langCode)) {
      setSelectedLang(langCode);
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="min-h-screen bg-[#030712] relative overflow-hidden py-12 px-6 pb-20">
        {/* Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Ambient Blobs */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.18)_0%,transparent_68%)] pointer-events-none" />
        <div className="absolute bottom-0 -right-[100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-[40%] -left-[80px] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(109,40,217,0.09)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-[896px] mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/42 no-underline px-3.5 py-1.75 rounded-lg border border-white/8 bg-white/4 transition-all duration-200 hover:text-[#60a5fa] hover:border-[rgba(96,165,250,0.35)] hover:bg-[rgba(37,99,235,0.10)] mb-7 w-fit"
          >
            <RiArrowLeftLine /> Back to Media Kit
          </Link>

          {/* Header */}
          <h1 className="text-[clamp(26px,4vw,40px)] font-extrabold tracking-[-1px] text-white mb-2">
            Business Plan Videos
          </h1>
          <p className="text-base text-white/42 mb-9">
            Comprehensive business plan explanation videos in multiple languages
          </p>

          {/* Language Selection */}
          <div className="bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 tracking-[-0.3px]">
              Select Language
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {businessLanguages.map((lang) => {
                const isAvailable = availableLanguages.includes(lang.code);
                const isSelected = selectedLang === lang.code;
                
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`p-4 rounded-xl border-2 transition-all text-center relative group ${
                      isSelected
                        ? isAvailable
                          ? "border-blue-500 bg-blue-500/20"
                          : "border-gray-300 bg-gray-100/10"
                        : isAvailable
                        ? "border-white/10 hover:border-blue-500/50 hover:bg-white/5 cursor-pointer"
                        : "border-white/5 bg-white/5 cursor-not-allowed"
                    }`}
                  >
                    <div className="text-2xl mb-2">{lang.flag}</div>
                    <p className={`font-medium text-sm ${
                      isAvailable ? "text-white" : "text-white/50"
                    }`}>
                      {lang.name}
                    </p>
                    
                    {!isAvailable && (
                      <div className="mt-1">
                        <span className="inline-flex items-center text-xs text-white/40">
                          Coming soon
                        </span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredVideos.map((video, idx) => {
              const videoData = getVideoData(video, selectedLang);
              const isAvailableInSelectedLang = video.languages?.[selectedLang]?.youtubeId;
              
              return (
                <div
                  key={idx}
                  className={`bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-2xl overflow-hidden hover:shadow-[0_8px_32px_rgba(37,99,235,0.3)] transition-all duration-300 ${
                    !isAvailableInSelectedLang ? "opacity-70" : ""
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={videoData.img}
                      width={400}
                      height={200}
                      alt={videoData.title}
                      className="w-full h-48 object-cover object-top"
                    />

                    {/* Language Badge */}
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-medium ${
                      isAvailableInSelectedLang 
                        ? "bg-blue-600 text-white" 
                        : "bg-gray-500/80 text-white"
                    }`}>
                      {businessLanguages.find((l) => l.code === selectedLang)?.flag}{" "}
                      {businessLanguages.find((l) => l.code === selectedLang)?.name}
                    </span>

                    {/* Duration */}
                    <div className={`absolute bottom-3 right-3 backdrop-blur-sm rounded px-2 py-1 ${
                      isAvailableInSelectedLang ? "bg-black/70" : "bg-gray-500/80"
                    }`}>
                      <span className="text-sm font-medium text-white">
                        {videoData.duration}
                      </span>
                    </div>

                    {/* Play Overlay */}
                    {isAvailableInSelectedLang && (
                      <div
                        onClick={() => handleVideoSelect(video)}
                        className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                      >
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <RiPlayFill className="text-white text-2xl ml-1" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {videoData.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 leading-relaxed">
                      {videoData.desc}
                    </p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleVideoSelect(video)}
                        className={`flex-1 py-2 px-4 rounded-xl transition-all text-sm whitespace-nowrap cursor-pointer flex items-center justify-center ${
                          isAvailableInSelectedLang
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg"
                            : "bg-gray-500/30 text-white/40 cursor-not-allowed"
                        }`}
                        disabled={!isAvailableInSelectedLang}
                      >
                        {isAvailableInSelectedLang ? (
                          <>
                            <RiPlayLine className="inline-block mr-1" /> Watch Video
                          </>
                        ) : (
                          <>
                            <RiCloseLine className="inline-block mr-1" /> Not Available
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Features */}
          <div className="bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-[-0.3px]">
              Video Features
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((f, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {f.icon}
                  </div>
                  <h4 className="font-semibold text-white mb-2">{f.title}</h4>
                  <p className="text-white/60 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video Popup */}
          <VideoPopUp
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        </div>
      </div>
    </>
  );
};

export default BusinessPlanVideos;