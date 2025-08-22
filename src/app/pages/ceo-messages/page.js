"use client";

import React, { useState } from "react";
import {
  RiArrowLeftLine,
  RiUserStarLine,
  RiAwardLine,
  RiLightbulbLine,
  RiTeamLine,
  RiVideoLine,
  RiArticleLine,
  RiPlayFill,
  RiPlayLine,
} from "react-icons/ri";
import { ceoVideos } from "@/app/constant/constant";
import VideoPopUp from "@/app/components/VideoPopUp";
import Link from "next/link";
import Image from "next/image";

const CeoMessage = () => {
  const [activeTab, setActiveTab] = useState("written");
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Button + Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors mb-6"
        >
          <RiArrowLeftLine className="mr-2" />
          Back to Media Kit
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">CEO Message</h1>
        <p className="text-xl text-gray-600">
          Personal insights from our leadership on vision, innovation, and
          excellence
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
        <div className="relative h-64 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <RiUserStarLine className="text-5xl" />
              </div>
              <h2 className="text-3xl font-bold mb-2">CEO Message Center</h2>
              <p className="text-indigo-100">
                Leadership insights and company vision
              </p>
            </div>
          </div>
        </div>

        {/* About + Key Messages */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                About Our Leadership
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <RiAwardLine className="text-indigo-600 text-sm" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Visionary Leadership
                    </p>
                    <p className="text-gray-600 text-sm">
                      Pioneering the future of AI technology
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <RiLightbulbLine className="text-indigo-600 text-sm" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Innovation Focus
                    </p>
                    <p className="text-gray-600 text-sm">
                      Commitment to breakthrough solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <RiTeamLine className="text-indigo-600 text-sm" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">People-Centric</p>
                    <p className="text-gray-600 text-sm">
                      Empowering teams and communities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Message Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Key Messages
              </h3>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
                <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                  &quot;At Rentelligence, we believe in empowering the future through
                  AI innovation. Our mission is to make artificial intelligence
                  accessible, practical, and transformative for businesses
                  worldwide.&quot;
                </blockquote>
                <div className="mt-4 text-right">
                  <p className="text-indigo-600 font-semibold">
                    — CEO, Rentelligence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab("video")}
              className={`px-6 py-4 text-sm font-medium transition-colors cursor-pointer flex items-center ${
                activeTab === "video"
                  ? "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <RiVideoLine className="mr-2" /> Video Messages
            </button>
            <button
              onClick={() => setActiveTab("written")}
              className={`px-6 py-4 text-sm font-medium transition-colors cursor-pointer flex items-center ${
                activeTab === "written"
                  ? "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <RiArticleLine className="mr-2" /> Written Messages
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {activeTab === "video" && (
            <div className="p-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ceoVideos.map((video, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group"
                  >
                    {/* Thumbnail */}
                    <div className="relative">
                      <Image
                        src={video.img}
                        alt={video.title}
                        width={50}
                        height={50}
                        className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Hover Overlay with Play Icon */}
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <RiPlayFill className="text-white text-2xl ml-1" />
                        </div>
                      </div>

                      {/* Video Duration */}
                      <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                        <span className="text-white text-sm font-medium">
                          {video.duration}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-lg  font-medium  text-gray-900 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{video.desc}</p>
                      <button 
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all text-sm whitespace-nowrap cursor-pointer"
                        onClick={() => setSelectedVideo(video)}
                      >
                        <RiPlayLine className="inline-block mr-1" />
                        Watch Message
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "written" && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Vision Statement
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our vision is to create a world where artificial intelligence
                  serves as a catalyst for human potential. We envision AI not
                  as a replacement for human intelligence, but as an amplifier
                  that enables individuals and organizations to achieve
                  unprecedented levels of productivity and innovation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Through Rentelligence, we are building the foundation for a
                  future where AI agents work seamlessly alongside humans,
                  making complex tasks simple and opening new possibilities for
                  growth and success.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Leadership Philosophy
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Leadership in the AI era requires a delicate balance of
                  innovation and responsibility. We believe in leading by
                  example, fostering a culture of continuous learning, and
                  maintaining the highest ethical standards in everything we do.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our approach centers on empowering our team members to think
                  creatively, challenge conventional wisdom, and develop
                  solutions that truly make a difference in people`&apos;s lives.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Commitment to Excellence
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Excellence is not a destination but a journey of continuous
                  improvement. At Rentelligence, we are committed to delivering
                  solutions that exceed expectations and set new industry
                  standards.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This commitment extends beyond our products to encompass our
                  relationships with clients, partners, and the broader
                  community we serve.
                </p>
              </div>
            </div>
          )}
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

export default CeoMessage;
