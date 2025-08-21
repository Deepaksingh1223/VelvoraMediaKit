"use client"
import { useState } from "react";
import {
  RiArrowLeftLine,
  RiPlayFill,
  RiPlayLine,
  RiShareLine,
  RiDownloadLine,
} from "react-icons/ri";
import Link from "next/link";

export default function PromotionalVideos() {
  const categories = [
    { name: "All Videos", key: "all" },
    { name: "Product Demos", key: "demos" },
    { name: "Testimonials", key: "testimonials" },
    { name: "Company Culture", key: "culture" },
    { name: "Brand Stories", key: "stories" },
  ];

  const videos = [
    {
      title: "AI Revolution with Rentelligence",
      desc: "Discover how Rentelligence is revolutionizing industries with cutting-edge AI technology.",
      img: "https://readdy.ai/api/search-image?query=Dynamic%20promotional%20video%20about%20AI%20revolution%2C%20futuristic%20artificial%20intelligence%20graphics%20with%20glowing%20neural%20networks%2C%20modern%20tech%20promotional%20content%20with%20blue%20and%20purple%20neon%20effects%2C%20revolutionary%20technology%20showcase&width=400&height=225&seq=ai-revolution&orientation=landscape",
      duration: "2:30",
      views: "15.2K",
      category: "demos",
    },
    {
      title: "Client Success Story - TechCorp",
      desc: "See how TechCorp transformed their operations with Rentelligence AI solutions.",
      img: "https://readdy.ai/api/search-image?query=Professional%20client%20testimonial%20video%20thumbnail%20with%20happy%20business%20executive%20in%20modern%20office%2C%20success%20story%20promotional%20content%2C%20corporate%20client%20interview%20setup%20with%20professional%20lighting&width=400&height=225&seq=client-success&orientation=landscape",
      duration: "3:15",
      views: "8.7K",
      category: "testimonials",
    },
    {
      title: "Our Innovation Journey",
      desc: "From startup to industry leader - the Rentelligence innovation story.",
      img: "https://readdy.ai/api/search-image?query=Innovation%20journey%20video%20thumbnail%20with%20timeline%20graphics%20and%20milestone%20achievements%2C%20corporate%20growth%20story%20presentation%2C%20business%20evolution%20video%20with%20progress%20indicators%20and%20success%20metrics&width=400&height=225&seq=innovation&orientation=landscape",
      duration: "4:45",
      views: "22.1K",
      category: "stories",
    },
    {
      title: "Product Showcase 2024",
      desc: "Complete overview of our latest AI products and features for 2024.",
      img: "https://readdy.ai/api/search-image?query=Product%20showcase%20video%20thumbnail%20with%20modern%20AI%20interface%20mockups%2C%20sleek%20product%20demonstration%20visuals%2C%20high-tech%20product%20presentation%20with%20interactive%20elements%20and%20feature%20highlights&width=400&height=225&seq=product-showcase&orientation=landscape",
      duration: "5:20",
      views: "31.5K",
      category: "demos",
    },
    {
      title: "Life at Rentelligence",
      desc: "Get an inside look at our company culture and what makes our team special.",
      img: "https://readdy.ai/api/search-image?query=Company%20culture%20video%20thumbnail%20with%20diverse%20team%20members%20collaborating%20in%20modern%20office%2C%20workplace%20culture%20presentation%2C%20happy%20employees%20working%20together%20in%20contemporary%20workspace%20environment&width=400&height=225&seq=team-culture&orientation=landscape",
      duration: "3:30",
      views: "12.8K",
      category: "culture",
    },
    {
      title: "Vision for the Future",
      desc: "Our bold vision for the future of AI and how we plan to get there.",
      img: "https://readdy.ai/api/search-image?query=Future%20vision%20video%20thumbnail%20with%20futuristic%20cityscape%20and%20AI%20technology%20concepts%2C%20visionary%20corporate%20presentation%20about%20future%20technology%2C%20inspiring%20business%20vision%20video%20with%20innovative%20graphics&width=400&height=225&seq=future-vision&orientation=landscape",
      duration: "2:45",
      views: "18.9K",
      category: "stories",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

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
                <img
                  src={video.img}
                  alt={video.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <RiPlayFill className="text-white text-2xl ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <div className="bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                    <span className="text-white text-sm font-medium">
                      {video.duration}
                    </span>
                  </div>
                  <div className="bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                    <span className="text-white text-sm">{video.views} views</span>
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
                  <button className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all text-sm whitespace-nowrap cursor-pointer">
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
              <div className="text-3xl font-bold text-orange-600 mb-2">4.8★</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
