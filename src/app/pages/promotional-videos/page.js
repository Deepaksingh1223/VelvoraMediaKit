
"use client";
import { useState } from "react";
import {
  RiArrowLeftLine,
  RiPlayFill,
  RiPlayLine,
  RiShareLine,
  RiDownloadLine,
  RiCloseLine,
  RiWhatsappFill,
  RiInstagramFill,
  RiLinksLine,
  RiTwitterXFill,
  RiYoutubeFill
} from "react-icons/ri";
import Link from "next/link";
import { videos } from "@/app/constant/constant";
import { categories } from "@/app/constant/constant";
import PromotionalVideoPopUp from "@/app/components/VideoPopUp";
import Image from "next/image";
import toast from "react-hot-toast"; 

export default function PromotionalVideos() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [shareMenu, setShareMenu] = useState({
    isOpen: false,
    video: null
  });

  // Function to create YouTube URL from youtubeId
  const getYouTubeUrl = (video) => {
    if (video?.youtubeId) {
      return `https://www.youtube.com/watch?v=${video.youtubeId}`;
    }
    return video?.videoUrl || video?.url || window.location.href;
  };

  // Share functionality with YouTube URL
  const handleShare = (video, platform) => {
    // Get YouTube URL from youtubeId
    const youtubeUrl = getYouTubeUrl(video);
    const videoTitle = video?.title || "Check out this amazing video!";
    const videoDescription = video?.desc || "Amazing promotional video from Rentelligence AI";
    const hashtags = "RentelligenceAI,PromotionalVideo,AI";
    
    let shareLink = "";

    switch(platform) {
      case "whatsapp":
        shareLink = `https://wa.me/?text=${encodeURIComponent(`🎬 ${videoTitle}\n\n${videoDescription}\n\nWatch here: ${youtubeUrl}\n\n#${hashtags}`)}`;
        break;
      case "instagram":
        // Instagram के लिए YouTube link copy करें
        const instagramText = `${youtubeUrl}`;
        navigator.clipboard.writeText(instagramText);
        toast.success("YouTube link copied to clipboard! You can now paste it on Instagram.");
        return;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`🎬 ${videoTitle}`)}&url=${encodeURIComponent(youtubeUrl)}&hashtags=${hashtags}`;
        break;
      case "copy":
        navigator.clipboard.writeText(`${youtubeUrl}`);
        toast.success("YouTube link copied to clipboard!");
        return;
      case "youtube":
        // Directly open YouTube
        window.open(youtubeUrl, "_blank", "noopener,noreferrer");
        return;
      default:
        return;
    }

    if (shareLink) {
      window.open(shareLink, "_blank", "noopener,noreferrer");
    }

    // Close share menu after sharing
    setShareMenu({ isOpen: false, video: null });
  };

  // Open share menu
  const openShareMenu = (video) => {
    setShareMenu({
      isOpen: true,
      video: video
    });
  };

  // Close share menu
  const closeShareMenu = () => {
    setShareMenu({
      isOpen: false,
      video: null
    });
  };

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
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
            >
              <div className="relative">
                <Image
                  src={video.img}
                  alt={video.title}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300 cursor-pointer"
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
                  <button 
                    className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => openShareMenu(video)}
                  >
                    <RiShareLine className="text-gray-600" />
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

      {/* Share Menu Modal */}
      {shareMenu.isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Share Video</h3>
              <button 
                onClick={closeShareMenu}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <RiCloseLine className="text-gray-500 text-xl" />
              </button>
            </div>

            <div className="mb-6 p-4 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-1">{shareMenu.video?.title}</h4>
              <p className="text-sm text-gray-600 line-clamp-2">{shareMenu.video?.desc}</p>
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <RiYoutubeFill className="text-red-600 mr-1" />
                YouTube link will be shared
              </div>
              {shareMenu.video?.youtubeId && (
                <div className="mt-1 text-xs text-blue-600">
                  https://youtube.com/watch?v={shareMenu.video.youtubeId}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* WhatsApp */}
              <button
                onClick={() => handleShare(shareMenu.video, "whatsapp")}
                className="flex flex-col items-center justify-center p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <RiWhatsappFill className="text-green-600 text-2xl" />
                </div>
                <span className="font-medium text-gray-900">WhatsApp</span>
              </button>

              {/* Instagram */}
              <button
                onClick={() => handleShare(shareMenu.video, "instagram")}
                className="flex flex-col items-center justify-center p-4 bg-pink-50 hover:bg-pink-100 rounded-xl transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <RiInstagramFill className="text-pink-600 text-2xl" />
                </div>
                <span className="font-medium text-gray-900">Instagram</span>
              </button>

              {/* Twitter */}
              <button
                onClick={() => handleShare(shareMenu.video, "twitter")}
                className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <RiTwitterXFill className="text-gray-900 text-2xl" />
                </div>
                <span className="font-medium text-gray-900">Twitter</span>
              </button>

              {/* Copy Link */}
              <button
                onClick={() => handleShare(shareMenu.video, "copy")}
                className="flex flex-col items-center justify-center p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <RiLinksLine className="text-blue-600 text-2xl" />
                </div>
                <span className="font-medium text-gray-900">Copy Link</span>
              </button>
            </div>

            <div className="text-center text-sm text-gray-500">
              Share video link with your network
            </div>
          </div>
        </div>
      )}

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