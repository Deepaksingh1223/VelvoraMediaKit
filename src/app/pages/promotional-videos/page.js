"use client";
import { useState } from "react";
import {
  RiArrowLeftLine,
  RiPlayFill,
  RiPlayLine,
  RiShareLine,
  RiDownloadLine,
} from "react-icons/ri";
import Link from "next/link";
import { videos } from "@/app/constant/constant";
import { categories } from "@/app/constant/constant";
import PromotionalVideoPopUp from "@/app/components/VideoPopUp";
import Image from "next/image";

export default function PromotionalVideos() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState(null);
  console.log("Selected", selectedVideo);

  // Filter videos
  const filteredVideos =
    activeTab === "all"
      ? videos
      : videos.filter((video) => video.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Back Button + Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors mb-6"
          >
            <RiArrowLeftLine className="mr-2" />
            Back to Media Kit
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Promotional Videos
          </h1>
          <p className="text-xl text-gray-600">
            Engaging promotional content showcasing Rentelligence AI solutions
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Video Categories
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-6 py-3 rounded-full border transition-all cursor-pointer ${
                  activeTab === cat.key
                    ? "bg-gradient-to-r from-red-600 to-orange-600 text-white border-transparent"
                    : "border-gray-200 text-gray-700 hover:border-red-300 hover:text-red-600"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredVideos.map((video, idx) => (
            // console.log("video--->", video)
            <div
              key={idx}
              className="bg-white rounded-xl   shadow-lg overflow-hidden hover:shadow-xl transition-all group"
            >
              <div className="relative">
                <Image
                  src={video.img}
                  alt={video.title}
                  width={200}
                  height={200}
                  className="w-full h-48  object-cover object-top group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => {
                    setSelectedVideo(video);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => {
                      setSelectedVideo(video);
                    }}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <RiPlayFill className="text-white text-2xl ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {video.desc}
                </p>
                <div className="flex space-x-2">
                  <button
                    className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all text-sm whitespace-nowrap cursor-pointer"
                    onClick={() => {
                      setSelectedVideo(video);
                    }}
                  >
                    <RiPlayLine className="mr-1 inline" /> Watch Now
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <RiShareLine className="text-gray-600" />
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <RiDownloadLine className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Performance */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Video Performance
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">150K+</div>
              <p className="text-gray-600">Total Views</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <p className="text-gray-600">Engagement Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">12</div>
              <p className="text-gray-600">Video Collection</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                4.8★
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional Video Popup */}
      {selectedVideo && (
        <PromotionalVideoPopUp
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}
