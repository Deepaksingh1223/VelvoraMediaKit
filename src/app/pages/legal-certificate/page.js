"use client"
import React, { useState } from "react";
import {
  FiArrowLeft,
  FiAward,
  FiCheck,
  FiFileText,
  FiDownload,
  FiInfo,
  FiX,
  FiAlertCircle,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

// Certificate details data
const certificateDetails = [
  {
    title: "Company Registration",
    desc: "Official business registration certificate",
  },
  {
    title: "Legal Compliance",
    desc: "Fully compliant with regulatory requirements",
  },
  {
    title: "Verification Status",
    desc: "Verified and authenticated by authorities",
  },
];

const LegalCertificate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleOpenModal = () => {
    setImageError(false);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => setIsModalOpen(false);

  const handleImageError = () => {
    setImageError(true);
    console.error("Certificate image failed to load");
  };

  const certificateImageUrl = "https://imagedelivery.net/nq9qT5FHZv9Sg48UUnD1-A/7c0ff889-b337-42bf-9635-00125d9b8d00/public";

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-emerald-600 transition-colors mb-4 sm:mb-6 text-sm sm:text-base"
          >
            <FiArrowLeft className="mr-2" /> Back to Media Kit
          </Link>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Legal Certificate
          </h1>
          <p className="text-base sm:text-xl text-gray-600">
            Official business registration and certification documents
          </p>
        </div>

        {/* Certificate Card */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-emerald-500 to-green-500">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative h-full flex items-center justify-center p-4">
              <div className="text-center text-white">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FiAward className="text-3xl sm:text-4xl lg:text-5xl" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                  Official Business Certificate
                </h2>
                <p className="text-sm sm:text-base lg:text-xl text-emerald-100">
                  Verified and Authenticated Documentation
                </p>
              </div>
            </div>
          </div>

          {/* Body Section */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Certificate Details */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Certificate Details
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {certificateDetails.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                        <FiCheck className="text-emerald-600 text-xs sm:text-sm" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 text-sm sm:text-base">
                          {item.title}
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm truncate">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate Preview */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Certificate Preview
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <FiFileText className="text-3xl sm:text-4xl text-gray-400 mb-3 sm:mb-4 mx-auto" />
                    <button
                      onClick={handleOpenModal}
                      className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer flex items-center justify-center mx-auto text-sm sm:text-base w-full max-w-xs"
                    >
                      <FiDownload className="mr-2" /> View Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Authenticity Section */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="mb-3 w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                <FiInfo className="text-white text-lg sm:text-xl" />
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="min-w-0">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    Certificate Authenticity
                  </h4>
                  <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                    This certificate serves as official proof of
                    Rentelligence&apos;s legal business status and regulatory
                    compliance. It can be used for verification purposes with
                    partners, clients, and regulatory bodies.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {["Verified", "Authentic", "Official"].map((tag, i) => (
                      <span
                        key={i}
                        className="bg-emerald-100 text-emerald-800 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal/Popup for Certificate */}
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={handleCloseModal}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            <div className="bg-gray-200 rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-2 sm:px-6 sm:pb-3 sm:pt-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
                    Certificate Preview
                  </h3>

                
                <button
                  onClick={handleCloseModal}
                  className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 ml-2"
                >
                  <FiX className="text-xl sm:text-2xl text-gray-600" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="px-4 pb-2 pt-2 sm:px-6 sm:pb-3 sm:pt-2 overflow-y-auto max-h-[calc(100vh-100px)]">
                {/* Certificate Image */}
                <div className="border-2 border-gray-200 rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                  <div className="relative w-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] bg-gray-200 flex items-center justify-center px-3 pb-3 pt-0 sm:px-4 sm:pb-4 sm:pt-0">
                    {!imageError ? (
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <img
                          src={certificateImageUrl}
                          alt="Official Business Certificate"
                          className="max-w-full max-h-[400px] sm:max-h-[450px] lg:max-h-[500px] object-contain rounded-lg shadow-lg"
                          onError={handleImageError}
                          crossOrigin="anonymous"
                        />
                      </div>
                    ) : (
                      /* Error State with fallback options */
                      <div className="flex flex-col items-center justify-center p-4 sm:p-8 text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                          <FiAlertCircle className="text-2xl sm:text-3xl text-red-600" />
                        </div>
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
                          Certificate Preview Not Available
                        </h4>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-md">
                          The certificate image could not be loaded. Please try one of the following options:
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                          <button
                            onClick={() => {
                              setImageError(false);
                              // Force reload image
                              const timestamp = new Date().getTime();
                              const img = new Image();
                              img.src = `${certificateImageUrl}?t=${timestamp}`;
                              img.onload = () => setImageError(false);
                              img.onerror = () => setImageError(true);
                            }}
                            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm"
                          >
                            Try Loading Again
                          </button>
                          <button
                            onClick={() => {
                              // Alternative: Use a placeholder or mock certificate
                              window.open('/api/certificate', '_blank');
                            }}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                          >
                            Download Certificate PDF
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>

              
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LegalCertificate;