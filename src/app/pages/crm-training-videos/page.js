"use client";

import React, { useState } from "react";
import {
  RiArrowLeftLine,
  RiPlayLine,
  RiPlayFill,
} from "react-icons/ri";

import { modules } from "@/app/constant/constant";
import Link from "next/link";
import VideoPopUp from "@/app/components/VideoPopUp";
import Image from "next/image";

const CRMTraining = () => {
  const [activeModule, setActiveModule] = useState(modules[0]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    const videoWithYoutubeId = {
      ...video,
      youtubeId: extractYouTubeId(video.videoUrl)
    };
    setSelectedVideo(videoWithYoutubeId);
  };

  const extractYouTubeId = (url) => {
    if (!url) return null;

    try {
      if (url.includes("youtube.com/watch")) {
        const urlObj = new URL(url);
        return urlObj.searchParams.get("v");
      }

      if (url.includes("youtu.be/")) {
        const parts = url.split("/");
        return parts[parts.length - 1]?.split("?")[0];
      }

      return null;
    } catch (error) {
      console.error("Error extracting YouTube ID:", error);
      return null;
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
            CRM Training Videos
          </h1>
          <p className="text-base text-white/42 mb-9">
            Comprehensive tutorials for CRM operations and system management
          </p>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-3xl p-6 sticky top-6">
                <h2 className="text-xl font-bold text-white mb-6 tracking-[-0.3px]">
                  Training Modules
                </h2>
                <div className="space-y-3">
                  {modules.map((mod) => (
                    <button
                      key={mod.id}
                      className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer flex items-center space-x-3 ${
                        activeModule.id === mod.id
                          ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_4px_20px_rgba(6,182,212,0.3)]"
                          : "hover:bg-white/5 text-white/70 hover:text-white"
                      }`}
                      onClick={() => setActiveModule(mod)}
                    >
                      {mod.icon}
                      <div>
                        <p className="font-medium text-sm">{mod.title}</p>
                        <p
                          className={`text-xs ${
                            activeModule.id === mod.id
                              ? "text-white/80"
                              : "text-white/40"
                          }`}
                        >
                          {mod.videos.length} videos
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-3xl p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-3 tracking-[-0.3px]">
                    {activeModule.title}
                  </h2>
                  <p className="text-white/60">
                    Learn all about {activeModule.title.toLowerCase()} in CRM
                  </p>
                </div>

                {/* Videos Grid */}
                <div className="mx-auto max-w-md">
                  {activeModule.videos.map((video, idx) => (
                    <div
                      key={idx}
                      className="relative group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_8px_32px_rgba(6,182,212,0.15)] transition-all duration-300"
                    >
                      <div className="relative flex-shrink-0">
                        <Image
                          src={video.img}
                          width={400}
                          height={192}
                          alt={video.title}
                          className="w-full h-48 object-cover object-top"
                        />
                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          onClick={() => handleVideoClick(video)}>
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <RiPlayFill className="text-white text-2xl ml-1" />
                          </div>
                        </div>
                        {/* Duration */}
                        <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                          <span className="text-white text-sm font-medium">
                            {video.duration}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {video.title}
                        </h3>
                        <p className="text-white/60 text-sm mb-4">
                          {video.desc}
                        </p>
                        <button
                          className="w-full py-2 px-4 rounded-xl transition-all text-sm whitespace-nowrap cursor-pointer bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-lg flex items-center justify-center"
                          onClick={() => handleVideoClick(video)}
                        >
                          <RiPlayLine className="mr-1" /> Start Learning
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Path */}
              <div className="bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-3xl p-8 mt-8">
                <h3 className="text-xl font-bold text-white mb-6 tracking-[-0.3px]">
                  Recommended Learning Path
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-400 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Registration & Login
                    </h4>
                    <p className="text-white/60 text-sm">
                      Start with user management basics
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-400 font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Funds & Agents
                    </h4>
                    <p className="text-white/60 text-sm">
                      Master core business operations
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-400 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Reports & Analytics
                    </h4>
                    <p className="text-white/60 text-sm">
                      Advanced data analysis skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup */}
      <VideoPopUp
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  );
};

export default CRMTraining;