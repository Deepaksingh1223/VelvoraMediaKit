// "use client";

// import { useState,useEffect } from "react";
// import { RiCustomerService2Line, RiDatabase2Line } from "react-icons/ri";
// import {
//   FaShareAlt,
//   FaRegImage,
//   FaCloudDownloadAlt,
//   FaMobileAlt,
//   FaGooglePlay,
//   FaApple,
// } from "react-icons/fa";
// import { FiExternalLink } from "react-icons/fi";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { PiCertificate } from "react-icons/pi";
// import { AiFillStar } from "react-icons/ai";
// import ResourceCard from "./resource-card/page";
// import { resourcesData } from "@/app/constant/constant";
// import { links } from "@/app/constant/constant";


// export default function MediaResources() {
//   const [filter, setFilter] = useState("All");
//   const [activeTab, setActiveTab] = useState("apps");
//   const searchParams = useSearchParams()

//   useEffect(() => {
//     const tab = searchParams.get('tab');
//     if (tab === 'social') {
//       setActiveTab('social');
//     }
//   }, [searchParams]);



//   const filteredResources =
//     filter === "All"
//       ? resourcesData
//       : resourcesData.filter((r) => r.category === filter);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative overflow-hidden" id="social">
//       {/* Background Blobs */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full transform -translate-x-36 -translate-y-36"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100/30 to-transparent rounded-full transform translate-x-48 translate-y-48"></div>

//       <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-8">
//         {/* Sidebar */}
//         <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">
//               Quick Access Hub
//             </h2>

//             {/* Tabs */}
//             <div className="flex flex-col  space-x-1 bg-white rounded-xl p-1 shadow-inner">
//               <button
//                 onClick={() => setActiveTab("social")}
//                 className={`flex-1 flex items-center gap-1 space-x-2 py-3 px-4 rounded-lg transition-all cursor-pointer ${activeTab === "social"
//                     ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
//                     : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
//                   }`}
//               >
//                 <FaShareAlt className="text-lg" />
//                 <span className="font-medium text-sm whitespace-nowrap">
//                   Social Media
//                 </span>
//               </button>

//               <button
//                 onClick={() => setActiveTab("downloads")}
//                 className={`flex-1 flex items-center gap-1 space-x-2 py-3 px-4 rounded-lg transition-all cursor-pointer ${activeTab === "downloads"
//                     ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
//                     : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
//                   }`}
//               >
//                 <FaCloudDownloadAlt className="text-lg" />
//                 <span className="font-medium text-sm whitespace-nowrap">
//                   Quick Downloads
//                 </span>
//               </button>

//               <button
//                 onClick={() => setActiveTab("apps")}
//                 className={`flex-1 flex items-center gap-1 space-x-2 py-3 px-4 rounded-lg transition-all cursor-pointer ${activeTab === "apps"
//                     ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
//                     : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
//                   }`}
//               >
//                 <FaMobileAlt className="text-lg" />
//                 <span className="font-medium text-sm whitespace-nowrap">
//                   Mobile Apps
//                 </span>
//               </button>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-1">
//             {activeTab === "social" && (
//               <div className="p-6">
//                 <div>
//                   <div className="mb-6">
//                     <p className="text-gray-600 text-sm">
//                       Connect with us on social platforms
//                     </p>
//                   </div>
//                   <div className="grid grid-cols-1 gap-4">
//                     {links.map((item, i) => (
//                       <a
//                         key={i}
//                         href={item.href}
//                         className={`group flex items-center space-x-4 bg-gradient-to-r ${item.gradient} rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
//                       >
//                         <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
//                           {item.icon}
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="text-white font-semibold">
//                             {item.name}
//                           </h4>
//                           <p className={`${item.textColor} text-sm`}>
//                             {item.desc}
//                           </p>
//                         </div>
//                         <FiExternalLink className="text-white/70 group-hover:text-white" />
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "downloads" && (
//               <div className="p-3">
//                 <div className="space-y-4">
//                   {/* Promotional Flyer Card */}
//                   <div className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] relative overflow-hidden">
//                     <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-10 -translate-y-10"></div>
//                     <div className="mb-3 w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors group-hover:scale-110 duration-300">
//                       <FaRegImage className="text-white text-2xl" />
//                     </div>
//                     <div className="relative flex items-start space-x-4">

//                       <div className="flex-1">
//                         <h3 className="text-lg font-bold text-white mb-2">
//                           Promotional Flyer
//                         </h3>
//                         <p className="text-blue-100 text-sm leading-relaxed mb-3">
//                           Professional marketing flyer showcasing Rentelligence
//                           AI solutions and services.
//                         </p>
//                         <div className=" items-center space-x-4">
//                           <span className="text-blue-200 text-xs font-medium bg-white/10 px-3 py-1 rounded-full">
//                             Ready for print &amp; digital
//                           </span>
//                           <span className="text-blue-200 text-xs">
//                             PDF • 2.4 MB
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Legal Certificate Card */}
//                   <div className="group bg-white border-2 border-gray-200 hover:border-emerald-300 hover:shadow-xl rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
//                     <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-50 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
//                     <div className="mb-3 w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                       <PiCertificate className="text-white text-2xl" />
//                     </div>
//                     <div className="relative flex items-start space-x-4">

//                       <div className="flex-1">
//                         <h3 className="text-lg font-bold text-gray-900 mb-2">
//                           Legal Certificate
//                         </h3>
//                         <p className="text-gray-600 text-sm leading-relaxed mb-3">
//                           Official business registration and certification
//                           documents.
//                         </p>
//                         <div className=" items-center space-x-4">
//                           <span className="text-emerald-600 text-xs font-medium bg-emerald-50 px-3 py-1 rounded-full">
//                             Verified &amp; Authentic
//                           </span>
//                           <span className="text-gray-500 text-xs">
//                             JPG • 1.8 MB
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "apps" && (
//               <div className="p-3">
//                 <div className="mb-6">
//                   <p className="text-gray-600 text-sm">
//                     Download our mobile apps for the best experience
//                   </p>
//                 </div>

//                 <div className="space-y-4">
//                   {/* Google Play */}
//                   <a
//                     href="https://play.google.com/store/apps/details?id=com.tayerkarex.Rentelligence_Mobile&pcampaignid=web_share
// "
//                     className="group flex flex-col items-center text-center bg-black hover:bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
//                   >
//                     {/* Icon on Top */}
//                     <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4">
//                       <FaGooglePlay className="text-white text-3xl" />
//                     </div>

//                     {/* Text Content */}
//                     <h4 className="text-white font-semibold mb-1">Google Play</h4>
//                     <p className="text-gray-300 text-sm mb-3">Download for Android</p>

//                     {/* Rating Section */}
//                     <div className="flex flex-col items-center">
//                       <div className="flex items-center space-x-1 text-yellow-400 mb-1">
//                         {[...Array(5)].map((_, i) => (
//                           <AiFillStar key={i} className="text-xs" />
//                         ))}
//                       </div>
//                       <p className="text-gray-400 text-xs">4.9 rating</p>
//                     </div>
//                   </a>
//                   {/* App Store */}
//                   <a
//                     href="#"
//                     className="group flex flex-col items-center text-center bg-black hover:bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
//                   >
//                     {/* Icon on Top */}
//                     <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4">
//                       <FaApple className="text-white text-3xl" />
//                     </div>

//                     {/* Text Content */}
//                     <h4 className="text-white font-semibold mb-1">App Store</h4>
//                     <p className="text-gray-300 text-sm mb-3">Download for iOS</p>

//                     {/* Rating Section */}
//                     <div className="flex flex-col items-center">
//                       <div className="flex items-center space-x-1 text-yellow-400 mb-1">
//                         {[...Array(5)].map((_, i) => (
//                           <AiFillStar key={i} className="text-xs" />
//                         ))}
//                       </div>
//                       <p className="text-gray-400 text-xs">4.8 rating</p>
//                     </div>
//                   </a>

//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//         {/* Main Content */}
//         <main className="lg:col-span-3 order-1 lg:order-2 bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
//           <div className="relative">
//             <div className="flex items-center justify-between mb-6 flex-wrap">
//               <div>
//                 <h2 className="text-4xl font-bold text-gray-900 mb-3">
//                   Media Resources
//                 </h2>
//                 <p className="text-gray-600 text-lg mb-3">
//                   Comprehensive collection of digital assets
//                 </p>
//               </div>

//               {/* Filter */}
//               <div className="md:flex items-center space-x-2 bg-gray-100 rounded-full p-1">
//                 {["All", "Videos", "Documents"].map((f) => (
//                   <button
//                     key={f}
//                     onClick={() => setFilter(f)}
//                     className={`px-4 py-2 cursor-pointer text-sm font-medium rounded-full ${filter === f
//                         ? "bg-white shadow-sm text-gray-900"
//                         : "text-gray-600 hover:text-gray-900"
//                       }`}
//                   >
//                     {f}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="flex items-center space-x-2 mb-4 text-sm text-gray-500">
//               <RiDatabase2Line className="w-4 h-4" />
//               <span>6 Resources Available</span>
//               <span>•</span>
//               <span>Updated Recently</span>
//             </div>

//             {/* Resources Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//               {filteredResources.map((res, i) => (
//                 <ResourceCard key={i} resource={res} />
//               ))}
//             </div>

//             {/* CTA */}
//             <div className="mt-12 text-center">
//               <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                   Need Something Specific?
//                 </h3>
//                 <p className="text-gray-600 mb-6">
//                   Can&apos;t find what you&apos;re looking for? Contact our team for
//                   custom resources.
//                 </p>
//                 <Link href= "https://rentelligence.ai/contact" className="bg-gradient-to-r  from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105 ">
//                   <RiCustomerService2Line className="inline mr-2" />
//                   Request Custom Resource
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, Suspense } from "react";
import { RiCustomerService2Line, RiDatabase2Line } from "react-icons/ri";
import {
  FaShareAlt,
  FaRegImage,
  FaCloudDownloadAlt,
  FaMobileAlt,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PiCertificate } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";
import ResourceCard from "./resource-card/page";
import { resourcesData } from "@/app/constant/constant";
import { links } from "@/app/constant/constant";

function MediaResourcesContent() {
  const [filter, setFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("apps");
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'social') {
      setActiveTab('social');
    }
  }, [searchParams]);

  const filteredResources =
    filter === "All"
      ? resourcesData
      : resourcesData.filter((r) => r.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative overflow-hidden" id="social">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full transform -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100/30 to-transparent rounded-full transform translate-x-48 translate-y-48"></div>

      <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Quick Access Hub
            </h2>

            {/* Tabs */}
            <div className="flex flex-col  space-x-1 bg-white rounded-xl p-1 shadow-inner">
              <button
                onClick={() => setActiveTab("social")}
                className={`flex-1 flex items-center gap-1 space-x-2 py-3 px-4 rounded-lg transition-all cursor-pointer ${activeTab === "social"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
              >
                <FaShareAlt className="text-lg" />
                <span className="font-medium text-sm whitespace-nowrap">
                  Social Media
                </span>
              </button>

              <button
                onClick={() => setActiveTab("downloads")}
                className={`flex-1 flex items-center gap-1 space-x-2 py-3 px-4 rounded-lg transition-all cursor-pointer ${activeTab === "downloads"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
              >
                <FaCloudDownloadAlt className="text-lg" />
                <span className="font-medium text-sm whitespace-nowrap">
                  Quick Downloads
                </span>
              </button>

              <button
                onClick={() => setActiveTab("apps")}
                className={`flex-1 flex items-center gap-1 space-x-2 py-3 px-4 rounded-lg transition-all cursor-pointer ${activeTab === "apps"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
              >
                <FaMobileAlt className="text-lg" />
                <span className="font-medium text-sm whitespace-nowrap">
                  Mobile Apps
                </span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-1">
            {activeTab === "social" && (
              <div className="p-6">
                <div>
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm">
                      Connect with us on social platforms
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {links.map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className={`group flex items-center space-x-4 bg-gradient-to-r ${item.gradient} rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
                      >
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">
                            {item.name}
                          </h4>
                          <p className={`${item.textColor} text-sm`}>
                            {item.desc}
                          </p>
                        </div>
                        <FiExternalLink className="text-white/70 group-hover:text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "downloads" && (
              <div className="p-3">
                <div className="space-y-4">
                  {/* Promotional Flyer Card */}
                  <div className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-10 -translate-y-10"></div>
                    <div className="mb-3 w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors group-hover:scale-110 duration-300">
                      <FaRegImage className="text-white text-2xl" />
                    </div>
                    <div className="relative flex items-start space-x-4">

                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">
                          Promotional Flyer
                        </h3>
                        <p className="text-blue-100 text-sm leading-relaxed mb-3">
                          Professional marketing flyer showcasing Rentelligence
                          AI solutions and services.
                        </p>
                        <div className=" items-center space-x-4">
                          <span className="text-blue-200 text-xs font-medium bg-white/10 px-3 py-1 rounded-full">
                            Ready for print &amp; digital
                          </span>
                          <span className="text-blue-200 text-xs">
                            PDF • 2.4 MB
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Legal Certificate Card */}
                  <div className="group bg-white border-2 border-gray-200 hover:border-emerald-300 hover:shadow-xl rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-50 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="mb-3 w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <PiCertificate className="text-white text-2xl" />
                    </div>
                    <div className="relative flex items-start space-x-4">

                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Legal Certificate
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          Official business registration and certification
                          documents.
                        </p>
                        <div className=" items-center space-x-4">
                          <span className="text-emerald-600 text-xs font-medium bg-emerald-50 px-3 py-1 rounded-full">
                            Verified &amp; Authentic
                          </span>
                          <span className="text-gray-500 text-xs">
                            JPG • 1.8 MB
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "apps" && (
              <div className="p-3">
                <div className="mb-6">
                  <p className="text-gray-600 text-sm">
                    Download our mobile apps for the best experience
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Google Play */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.tayerkarex.Rentelligence_Mobile&pcampaignid=web_share
"
                    className="group flex flex-col items-center text-center bg-black hover:bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    {/* Icon on Top */}
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <FaGooglePlay className="text-white text-3xl" />
                    </div>

                    {/* Text Content */}
                    <h4 className="text-white font-semibold mb-1">Google Play</h4>
                    <p className="text-gray-300 text-sm mb-3">Download for Android</p>

                    {/* Rating Section */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-center space-x-1 text-yellow-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <AiFillStar key={i} className="text-xs" />
                        ))}
                      </div>
                      <p className="text-gray-400 text-xs">4.9 rating</p>
                    </div>
                  </a>
                  {/* App Store */}
                  <a
                    href="#"
                    className="group flex flex-col items-center text-center bg-black hover:bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    {/* Icon on Top */}
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <FaApple className="text-white text-3xl" />
                    </div>

                    {/* Text Content */}
                    <h4 className="text-white font-semibold mb-1">App Store</h4>
                    <p className="text-gray-300 text-sm mb-3">Download for iOS</p>

                    {/* Rating Section */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-center space-x-1 text-yellow-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <AiFillStar key={i} className="text-xs" />
                        ))}
                      </div>
                      <p className="text-gray-400 text-xs">4.8 rating</p>
                    </div>
                  </a>

                </div>
              </div>
            )}
          </div>
        </div>
        {/* Main Content */}
        <main className="lg:col-span-3 order-1 lg:order-2 bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-6 flex-wrap">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Media Resources
                </h2>
                <p className="text-gray-600 text-lg mb-3">
                  Comprehensive collection of digital assets
                </p>
              </div>

              {/* Filter */}
              <div className="md:flex items-center space-x-2 bg-gray-100 rounded-full p-1">
                {["All", "Videos", "Documents"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 cursor-pointer text-sm font-medium rounded-full ${filter === f
                        ? "bg-white shadow-sm text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                      }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-4 text-sm text-gray-500">
              <RiDatabase2Line className="w-4 h-4" />
              <span>6 Resources Available</span>
              <span>•</span>
              <span>Updated Recently</span>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredResources.map((res, i) => (
                <ResourceCard key={i} resource={res} />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Need Something Specific?
                </h3>
                <p className="text-gray-600 mb-6">
                  Can&apos;t find what you&apos;re looking for? Contact our team for
                  custom resources.
                </p>
                <Link href= "https://rentelligence.ai/contact" className="bg-gradient-to-r  from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105 ">
                  <RiCustomerService2Line className="inline mr-2" />
                  Request Custom Resource
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function MediaResources() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 h-64 bg-gray-100 rounded-xl"></div>
              <div className="lg:col-span-3 h-96 bg-gray-100 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    }>
      <MediaResourcesContent />
    </Suspense>
  );
}