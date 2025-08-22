"use client";
import React, { useState } from "react";
import {
  RiArrowLeftLine,
  RiPlayLine,
  RiPlayFill,
  RiDownloadLine,
} from "react-icons/ri";
import VideoPopUp from "@/app/components/VideoPopUp";

import { businessVideos, businessLanguages, features } from "@/app/constant/constant";
import Link from "next/link";
import Image from "next/image";

const BusinessPlanVideos = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredVideos = selectedLang
    ? businessVideos.filter((video) => video?.lang?.includes(selectedLang))
    : businessVideos;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-6"
        >
          <RiArrowLeftLine className="mr-2" /> Back to Media Kit
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Business Plan Videos
        </h1>
        <p className="text-xl text-gray-600">
          Comprehensive business plan explanation videos in multiple languages
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Select Language
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {businessLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLang(lang.code)}
              className={`p-4 rounded-lg border-2 transition-all cursor-pointer text-center ${
                selectedLang === lang.code
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <div className="text-2xl mb-2">{lang.flag}</div>
              <p className="font-medium text-sm text-gray-900">{lang.name}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredVideos.map((video, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative">
              <Image
                src={video.img}
                width={400}
                height={200}
                alt={video.title}
                className="w-full h-48 object-cover object-top"
              />

              {selectedLang && video.lang.includes(selectedLang) && (
                <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {businessLanguages.find((l) => l.code === selectedLang)?.flag}{" "}
                  {businessLanguages.find((l) => l.code === selectedLang)?.name}
                </span>
              )}

              {/* Duration */}
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                <span className="text-white text-sm font-medium">
                  {video.duration}
                </span>
              </div>

              <div
                onClick={() => setSelectedVideo(video)}
                className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <RiPlayFill className="text-white text-2xl ml-1" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {video.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {video.desc}
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedVideo(video)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all text-sm whitespace-nowrap cursor-pointer"
                >
                  <RiPlayLine className="inline-block mr-1" /> Watch Video
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <RiDownloadLine className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Video Features</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {f.icon}
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{f.title}</h4>
              <p className="text-gray-600 text-sm">{f.desc}</p>
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
  );
};

export default BusinessPlanVideos;
