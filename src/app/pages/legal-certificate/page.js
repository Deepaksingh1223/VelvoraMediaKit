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
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleOpenModal = () => {
    setImageError(false);
    setZoom(1);
    setRotation(0);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => setIsModalOpen(false);

  const handleImageError = () => {
    setImageError(true);
    console.error("Certificate image failed to load");
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleRotate = () => {
    setRotation(prev => prev + 90);
  };

  const handleReset = () => {
    setZoom(1);
    setRotation(0);
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

      {isModalOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={handleCloseModal}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:px-6 sm:py-4 border-b border-gray-200 bg-white">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <FiAward className="text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      Official Certificate
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      View and interact with the certificate
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={handleCloseModal}
                  className="w-10 h-10 flex items-center justify-center bg-black hover:bg-black text-white rounded-full transition-colors"
                  aria-label="Close"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* Modal Body - Certificate Display Area */}
              <div className="flex-1 overflow-auto p-2 sm:p-4 bg-white">
                <div className="w-full h-full flex items-center justify-center">
                  {!imageError ? (
                    <div className="relative">
                      {/* Certificate Container */}
                      <div className="relative overflow-auto max-h-[calc(95vh-120px)] bg-gray-800 rounded-lg p-4">
                        {/* Certificate Image with Transform */}
                        <div
                          style={{
                            transform: `scale(${zoom}) rotate(${rotation}deg)`,
                            transition: 'transform 0.3s ease',
                            transformOrigin: 'center center'
                          }}
                          className="relative"
                        >
                          <img
                            src={certificateImageUrl}
                            alt="Official Business Certificate"
                            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                            onError={handleImageError}
                            crossOrigin="anonymous"
                            draggable="false"
                          />
                          
                          {/* Certificate Border Effect */}
                          <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-lg pointer-events-none"></div>
                          
                          {/* Watermark/Overlay Effects */}
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Error State */
                    <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-xl max-w-md">
                      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                        <FiAlertCircle className="text-3xl text-red-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">
                        Certificate Not Available
                      </h4>
                      <p className="text-gray-600 mb-6">
                        The certificate image could not be loaded. Please try again or use alternative options.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => {
                            setImageError(false);
                            const timestamp = new Date().getTime();
                            const img = new Image();
                            img.src = `${certificateImageUrl}?t=${timestamp}`;
                            img.onload = () => setImageError(false);
                            img.onerror = () => setImageError(true);
                          }}
                          className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                        >
                          Retry Loading
                        </button>
                        <button
                          onClick={handleCloseModal}
                          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
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