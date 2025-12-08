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
      // For standard YouTube URLs like https://www.youtube.com/watch?v=VIDEO_ID
      if (url.includes("youtube.com/watch")) {
        const urlObj = new URL(url);
        return urlObj.searchParams.get("v");
      }

      // For shortened YouTube URLs like https://youtu.be/VIDEO_ID
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Back Link + Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-cyan-600 transition-colors mb-6"
          >
            <RiArrowLeftLine className="mr-2" /> Back to Media Kit
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CRM Training Videos
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive tutorials for CRM operations and system management
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Training Modules
              </h2>
              <div className="space-y-3">
                {modules.map((mod) => (
                  <button
                    key={mod.id}
                    className={`w-full text-left p-4 rounded-lg transition-all cursor-pointer flex items-center space-x-3 ${activeModule.id === mod.id
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                        : "hover:bg-gray-50 text-gray-700"
                      }`}
                    onClick={() => setActiveModule(mod)}
                  >
                    {mod.icon}
                    <div>
                      <p className="font-medium text-sm">{mod.title}</p>
                      <p
                        className={`text-xs ${activeModule.id === mod.id
                            ? "text-white/80"
                            : "text-gray-500"
                          }`}
                      >
                        {mod.videos.length} videos
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Progress Bar */}
              {/* <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Progress
                  </span>
                  <span className="text-sm text-gray-500">0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {activeModule.title}
                </h2>
                <p className="text-gray-600">
                  Learn all about {activeModule.title.toLowerCase()} in CRM
                </p>
              </div>

              {/* Videos Grid */}
              <div className="mx-auto max-w-md">
                {activeModule.videos.map((video, idx) => (
                  <div
                    key={idx}
                    className="relative group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
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
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-1000 transition-opacity cursor-pointer"
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
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {video.desc}
                      </p>
                      <button
                        className="w-full py-2 px-4 rounded-lg transition-all text-sm whitespace-nowrap cursor-pointer bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-lg flex items-center justify-center"
                        onClick={() => handleVideoClick(video)}>

                        <RiPlayLine className="mr-1" /> Start Learning
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Path */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Recommended Learning Path
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Registration & Login
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Start with user management basics
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Funds & Agents
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Master core business operations
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Reports & Analytics
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Advanced data analysis skills
                  </p>
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
    </div>
  );
};

export default CRMTraining;
