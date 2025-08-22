import React from "react";
import { RiCloseLine, RiPlayFill } from "react-icons/ri";

const VideoPopUp = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-semibold text-gray-900">{video.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors"
          >
            <RiCloseLine className="text-2xl" />
          </button>
        </div>
        <div className="p-6">
          <div className="bg-gray-900 rounded-lg aspect-video mb-4 overflow-hidden relative">
            {video.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                title={video.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-white text-center p-8">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  <RiPlayFill className="text-white text-3xl ml-1" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Training Video</h4>
                <p className="text-gray-300 mb-4">This training content will be available soon</p>
                {video.img && (
                  <img
                    src={video.img}
                    alt={video.title}
                    className="w-48 h-32 object-cover rounded-lg opacity-70"
                  />
                )}
              </div>
            )}
          </div>
          <div className="space-y-3">
            <p className="text-gray-600">{video.desc}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Duration: {video.duration}</span>
              {video.views && <span>Views: {video.views}</span>}
              {video.category && <span className="capitalize">Category: {video.category}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPopUp;
