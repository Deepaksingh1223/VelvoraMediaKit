
"use client";

import React, { useState, useEffect } from "react";
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
import { Languages } from "@/app/constant/constant";
import Image from "next/image";

const CeoMessage = () => {
  const [activeTab, setActiveTab] = useState("video");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectlanguages, setSelectLanguages] = useState(Languages);
  const [currentVideos, setCurrentVideos] = useState([]);

  const getActiveLanguage = () => {
    const activeLang = selectlanguages.find(lang => lang.active);
    return activeLang || Languages[0];
  };

  const getLanguageCode = (label) => {
    const langMap = {
      "English": "en",
      "Hindi": "hi",
      "German": "de",
      "Russian": "ru",
      "Arabic": "ar",
      "Spanish": "es",
      "French": "FR",
      "Vietnamese": "VN",
    };
    return langMap[label] || "en";
  };

  // Extract YouTube ID from URL
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

  const handleLanguageClick = (index) => {
    const updatedLanguages = selectlanguages.map((lang, idx) => ({
      ...lang,
      active: idx === index,
    }));
    setSelectLanguages(updatedLanguages);
  };

  // Update videos when language changes
  useEffect(() => {
    const activeLang = getActiveLanguage();
    const langCode = getLanguageCode(activeLang.label);

    if (ceoVideos[langCode]) {
      setCurrentVideos(ceoVideos[langCode]);
    } else {
      // Fallback to English if language videos not available
      setCurrentVideos(ceoVideos.en || []);
    }
  }, [selectlanguages]);

  // Initialize videos on component mount
  useEffect(() => {
    const activeLang = getActiveLanguage();
    const langCode = getLanguageCode(activeLang.label);

    if (ceoVideos[langCode]) {
      setCurrentVideos(ceoVideos[langCode]);
    } else {
      setCurrentVideos(ceoVideos.en || []);
    }
  }, []);

  // Handle video click - add youtubeId to video object
  const handleVideoClick = (video) => {
    const videoWithYoutubeId = {
      ...video,
      youtubeId: extractYouTubeId(video.videoUrl)
    };
    setSelectedVideo(videoWithYoutubeId);
  };

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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Pace</h1>
        <p className="text-xl text-gray-600">
          Empowering innovation through AI-driven productivity solutions
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
              <h2 className="text-3xl font-bold mb-2">Pace Leadership Center</h2>
              <p className="text-indigo-100">
                Insights on productivity, innovation, and AI transformation
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
                About Pace Leadership
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <RiAwardLine className="text-indigo-600 text-sm" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Productivity Excellence
                    </p>
                    <p className="text-gray-600 text-sm">
                      Revolutionizing work efficiency through AI
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <RiLightbulbLine className="text-indigo-600 text-sm" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      AI Innovation
                    </p>
                    <p className="text-gray-600 text-sm">
                      Creating intelligent workflow solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <RiTeamLine className="text-indigo-600 text-sm" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Future of Work</p>
                    <p className="text-gray-600 text-sm">
                      Shaping how teams collaborate and succeed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Message Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Leadership Vision
              </h3>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
                <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                  &quot;At Pace, we are dedicated to transforming productivity through AI-powered solutions. Our mission is to make intelligent workflow automation accessible to every team, enabling unprecedented levels of efficiency and innovation.&quot;
                </blockquote>
                <div className="mt-4 text-right">
                  <p className="text-indigo-600 font-semibold">
                    — Leadership Team, Pace
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
              className={`px-6 py-4 text-sm font-medium transition-colors cursor-pointer flex items-center ${activeTab === "video"
                  ? "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50"
                  : "text-gray-500 hover:text-gray-700"
                }`}
            >
              <RiVideoLine className="mr-2" /> Video Messages
            </button>
            <button
              onClick={() => setActiveTab("written")}
              className={`px-6 py-4 text-sm font-medium transition-colors cursor-pointer flex items-center ${activeTab === "written"
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
            <div className="space-y-8">
              {/* Language Selection */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Select Language
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {selectlanguages.map((lang, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleLanguageClick(idx)}
                      className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${lang.active
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                        }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">{lang.flag}</div>
                        <p className="font-medium text-sm text-gray-900">
                          {lang.label}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Video Grid */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Pace Video Messages in {getActiveLanguage().label}
                </h3>

                {currentVideos.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {currentVideos.map((video, index) => (
                      <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group h-full flex flex-col min-h-[400px]"
                      >
                        <div className="relative flex-shrink-0">
                          <Image
                            src={video.img}
                            alt={video.title}
                            width={450}
                            height={300}
                            className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                          />

                          {/* Hover Overlay with Play Icon */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          onClick={() => handleVideoClick(video)}>
                            <div className="w-20 h-20 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <RiPlayFill className="text-white text-3xl ml-1.5" />
                            </div>
                          </div>

                          {/* Video Duration */}
                          <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-sm rounded-lg px-3 py-1.5">
                            <span className="text-white text-sm font-semibold">
                              {video.duration}
                            </span>
                          </div>
                        </div>

                        <div className="p-6 flex flex-col justify-between h-full">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 leading-tight mb-2">
                              {video.title}
                            </h3>
                            <p className="text-gray-600 text-sm line-clamp-3">
                              {video.desc}
                            </p>
                          </div>

                          <div className="mt-6">
                            <button
                              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-4 rounded-lg hover:shadow-xl transition-all text-sm font-medium whitespace-nowrap cursor-pointer"
                              onClick={() => handleVideoClick(video)}
                            >
                              <RiPlayLine className="inline-block mr-2 text-base" />
                              Watch in {getActiveLanguage().label}
                            </button>
                          </div>
                        </div>
                      </div>

                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-lg">
                      No videos available in {getActiveLanguage().label} at the moment.
                    </p>
                    <p className="text-gray-400 mt-2">
                      Please select another language or check back later.
                    </p>
                  </div>
                )}
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