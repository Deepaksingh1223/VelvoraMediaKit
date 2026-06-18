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

  const getYouTubeUrl = (video) => {
    if (video?.youtubeId) {
      return `https://www.youtube.com/watch?v=${video.youtubeId}`;
    }
    return video?.videoUrl || video?.url || window.location.href;
  };

  const handleShare = (video, platform) => {
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
        window.open(youtubeUrl, "_blank", "noopener,noreferrer");
        return;
      default:
        return;
    }

    if (shareLink) {
      window.open(shareLink, "_blank", "noopener,noreferrer");
    }

    setShareMenu({ isOpen: false, video: null });
  };

  const openShareMenu = (video) => {
    setShareMenu({
      isOpen: true,
      video: video
    });
  };

  const closeShareMenu = () => {
    setShareMenu({
      isOpen: false,
      video: null
    });
  };

  const filteredVideos =
    activeTab === "all"
      ? videos
      : videos.filter((video) => video.category === activeTab);

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
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/42 no-underline px-3.5 py-1.75 rounded-lg border border-white/8 bg-white/4 transition-all duration-200 hover:text-[#60a5fa] hover:border-[rgba(96,165,250,0.35)] hover:bg-[rgba(37,99,235,0.10)] mb-7 w-fit"
          >
            <RiArrowLeftLine /> Back to Media Kit
          </Link>

          {/* Header */}
          <h1 className="text-[clamp(26px,4vw,40px)] font-extrabold tracking-[-1px] text-white mb-2">
            Promotional Videos
          </h1>
          <p className="text-base text-white/42 mb-9">
            Engaging promotional content showcasing Rentelligence AI solutions
          </p>

          {/* Tabs */}
          <div className="bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 tracking-[-0.3px]">
              Video Categories
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveTab(cat.key)}
                  className={`px-6 py-3 rounded-full border transition-all cursor-pointer ${
                    activeTab === cat.key
                      ? "bg-gradient-to-r from-red-600 to-orange-600 text-white border-transparent shadow-[0_4px_20px_rgba(220,38,38,0.35)]"
                      : "border-white/10 text-white/60 hover:border-red-500/50 hover:text-red-400 hover:bg-white/5"
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
                className="bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-2xl overflow-hidden hover:shadow-[0_8px_32px_rgba(220,38,38,0.2)] transition-all duration-300 group"
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
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {video.desc}
                  </p>
                  <div className="flex space-x-2">
                    <button
                      className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-4 rounded-xl hover:shadow-lg transition-all text-sm whitespace-nowrap cursor-pointer"
                      onClick={() => {
                        setSelectedVideo(video);
                      }}
                    >
                      <RiPlayLine className="mr-1 inline" /> Watch Now
                    </button>
                    <button 
                      className="px-3 py-2 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer text-white/60 hover:text-white"
                      onClick={() => openShareMenu(video)}
                    >
                      <RiShareLine />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Performance */}
          <div className="bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-[-0.3px]">
              Video Performance
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">150K+</div>
                <p className="text-white/60">Total Views</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">95%</div>
                <p className="text-white/60">Engagement Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">12</div>
                <p className="text-white/60">Video Collection</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  4.8★
                </div>
                <p className="text-white/60">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Menu Modal */}
      {shareMenu.isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={closeShareMenu}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-[rgba(3,7,18,0.96)] border border-white/12 rounded-2xl shadow-2xl w-full max-w-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Share Video</h3>
                <button 
                  onClick={closeShareMenu}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white/60 hover:text-white"
                >
                  <RiCloseLine className="text-xl" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-white/5 border border-white/5 rounded-xl">
                <h4 className="font-semibold text-white mb-1">{shareMenu.video?.title}</h4>
                <p className="text-sm text-white/60 line-clamp-2">{shareMenu.video?.desc}</p>
                <div className="mt-2 flex items-center text-xs text-white/40">
                  <RiYoutubeFill className="text-red-500 mr-1" />
                  YouTube link will be shared
                </div>
                {shareMenu.video?.youtubeId && (
                  <div className="mt-1 text-xs text-blue-400">
                    https://youtube.com/watch?v={shareMenu.video.youtubeId}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => handleShare(shareMenu.video, "whatsapp")}
                  className="flex flex-col items-center justify-center p-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 rounded-xl transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <RiWhatsappFill className="text-green-500 text-2xl" />
                  </div>
                  <span className="font-medium text-white">WhatsApp</span>
                </button>

                <button
                  onClick={() => handleShare(shareMenu.video, "instagram")}
                  className="flex flex-col items-center justify-center p-4 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/20 rounded-xl transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <RiInstagramFill className="text-pink-500 text-2xl" />
                  </div>
                  <span className="font-medium text-white">Instagram</span>
                </button>

                <button
                  onClick={() => handleShare(shareMenu.video, "twitter")}
                  className="flex flex-col items-center justify-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <RiTwitterXFill className="text-white text-2xl" />
                  </div>
                  <span className="font-medium text-white">Twitter</span>
                </button>

                <button
                  onClick={() => handleShare(shareMenu.video, "copy")}
                  className="flex flex-col items-center justify-center p-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-xl transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <RiLinksLine className="text-blue-500 text-2xl" />
                  </div>
                  <span className="font-medium text-white">Copy Link</span>
                </button>
              </div>

              <div className="text-center text-sm text-white/40">
                Share video link with your network
              </div>
            </div>
          </div>
        </>
      )}

      {/* Promotional Video Popup */}
      {selectedVideo && (
        <PromotionalVideoPopUp
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}