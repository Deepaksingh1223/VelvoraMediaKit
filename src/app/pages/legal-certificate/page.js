"use client";

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
  FiZoomIn,
  FiZoomOut,
  FiRotateCw,
  FiRefreshCw,
} from "react-icons/fi";
import Link from "next/link";

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
  const handleImageError = () => setImageError(true);
  const handleZoomIn = () => setZoom((p) => Math.min(p + 0.25, 3));
  const handleZoomOut = () => setZoom((p) => Math.max(p - 0.25, 0.5));
  const handleRotate = () => setRotation((p) => p + 90);
  const handleReset = () => { setZoom(1); setRotation(0); };

  const certificateImageUrl =
    "https://imagedelivery.net/nq9qT5FHZv9Sg48UUnD1-A/7c0ff889-b337-42bf-9635-00125d9b8d00/public";

  return (
    <>
      <style jsx>{`
        .lc-cert-img {
          transition: transform 0.3s ease;
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
          {/* Back Link */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-white/42 no-underline px-3.5 py-1.75 rounded-lg border border-white/8 bg-white/4 transition-all duration-200 hover:text-[#60a5fa] hover:border-[rgba(96,165,250,0.35)] hover:bg-[rgba(37,99,235,0.10)] mb-7 w-fit"
          >
            <FiArrowLeft /> Back to Media Kit
          </Link>

          {/* Page Heading */}
          <h1 className="text-[clamp(26px,4vw,40px)] font-extrabold tracking-[-1px] text-white mb-2">
            Legal Certificate
          </h1>
          <p className="text-base text-white/42 mb-9">
            Official business registration and certification documents
          </p>

          {/* Card */}
          <div className="bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-3xl overflow-hidden">
            {/* Hero */}
            <div className="relative h-[280px] bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#0ea5e9] flex items-center justify-center overflow-hidden">
              {/* Top Shimmer Line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              {/* Hero Orb */}
              <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10)_0%,transparent_70%)]" />
              
              <div className="relative z-[1] text-center text-white">
                <div className="w-[72px] h-[72px] bg-white/15 border border-white/25 rounded-full flex items-center justify-center mx-auto mb-5 text-[32px]">
                  <FiAward />
                </div>
                <div className="text-[26px] font-extrabold tracking-[-0.5px] mb-2">
                  Official Business Certificate
                </div>
                <div className="text-sm text-white/65">
                  Verified and Authenticated Documentation
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-9 max-sm:p-6 max-sm:px-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-sm:gap-6">
                {/* Details */}
                <div>
                  <div className="text-lg font-bold text-white mb-5 tracking-[-0.3px]">
                    Certificate Details
                  </div>
                  {certificateDetails.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 mb-4">
                      <div className="w-6 h-6 flex-shrink-0 bg-[rgba(37,99,235,0.20)] border border-[rgba(37,99,235,0.35)] rounded-full flex items-center justify-center mt-0.5">
                        <FiCheck className="text-[#60a5fa] text-xs" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white mb-0.5">
                          {item.title}
                        </div>
                        <div className="text-[13px] text-white/42">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Preview */}
                <div>
                  <div className="text-lg font-bold text-white mb-5 tracking-[-0.3px]">
                    Certificate Preview
                  </div>
                  <div className="bg-white/3 border border-dashed border-white/14 rounded-xl p-8 flex flex-col items-center justify-center gap-4 text-center">
                    <FiFileText className="text-4xl text-white/20" />
                    <button 
                      className="inline-flex items-center gap-2 px-6 py-2.75 rounded-full text-sm font-semibold text-white cursor-pointer bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#0ea5e9] border border-white/15 shadow-[0_4px_20px_rgba(37,99,235,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-102 hover:shadow-[0_8px_28px_rgba(37,99,235,0.55)] hover:brightness-108"
                      onClick={handleOpenModal}
                    >
                      <FiDownload /> View Certificate
                    </button>
                  </div>
                </div>
              </div>

              {/* Authenticity Banner */}
              <div className="mt-8 bg-gradient-to-br from-[rgba(37,99,235,0.14)] to-[rgba(109,40,217,0.10)] border border-white/10 rounded-2xl p-7 relative overflow-hidden">
                {/* Top Line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(96,165,250,0.5)] to-transparent" />
                
                <div className="w-11 h-11 bg-gradient-to-br from-[#1d4ed8] to-[#0ea5e9] rounded-xl flex items-center justify-center text-xl text-white mb-4 shadow-[0_4px_16px_rgba(37,99,235,0.35)]">
                  <FiInfo />
                </div>
                <div className="text-base font-bold text-white mb-2.5">
                  Certificate Authenticity
                </div>
                <p className="text-sm leading-relaxed text-white/50 mb-4">
                  This certificate serves as official proof of Rentelligence&apos;s legal business
                  status and regulatory compliance. It can be used for verification purposes with
                  partners, clients, and regulatory bodies.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Verified", "Authentic", "Official"].map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-[rgba(37,99,235,0.18)] border border-[rgba(37,99,235,0.30)] text-[#93c5fd]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-[8px]"
            onClick={handleCloseModal}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-[rgba(3,7,18,0.96)] border border-white/12 rounded-2xl w-full max-w-[900px] max-h-[95vh] flex flex-col overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.7)]">
              {/* Modal Top Shimmer */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#2563eb] via-[#0ea5e9] to-transparent opacity-80 flex-shrink-0" />
              
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-[18px] border-b border-white/8 flex-shrink-0">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-[rgba(37,99,235,0.20)] border border-[rgba(37,99,235,0.35)] rounded-xl flex items-center justify-center text-lg text-[#60a5fa]">
                    <FiAward />
                  </div>
                  <div>
                    <div className="text-base font-bold text-white">
                      Official Certificate
                    </div>
                    <div className="text-xs text-white/35">
                      View and interact with the certificate
                    </div>
                  </div>
                </div>
                <button 
                  className="w-9 h-9 rounded-full bg-white/8 border border-white/12 text-white/65 flex items-center justify-center cursor-pointer text-lg transition-all duration-200 hover:bg-[rgba(239,68,68,0.20)] hover:text-[#f87171] hover:border-[rgba(239,68,68,0.30)]"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <FiX />
                </button>
              </div>

              {/* Toolbar */}
              {!imageError && (
                <div className="flex items-center gap-1.5 px-6 py-3 border-b border-white/7 bg-white/2 flex-shrink-0 flex-wrap">
                  <button 
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.75 rounded-lg text-[13px] font-medium text-white/55 bg-white/6 border border-white/10 cursor-pointer transition-all duration-200 hover:text-white hover:bg-white/10 hover:border-white/18 disabled:opacity-35 disabled:cursor-not-allowed"
                    onClick={handleZoomOut} 
                    disabled={zoom <= 0.5}
                  >
                    <FiZoomOut /> Zoom out
                  </button>
                  <span className="text-[13px] font-semibold text-white/40 px-2 min-w-[50px] text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button 
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.75 rounded-lg text-[13px] font-medium text-white/55 bg-white/6 border border-white/10 cursor-pointer transition-all duration-200 hover:text-white hover:bg-white/10 hover:border-white/18 disabled:opacity-35 disabled:cursor-not-allowed"
                    onClick={handleZoomIn} 
                    disabled={zoom >= 3}
                  >
                    <FiZoomIn /> Zoom in
                  </button>
                  <button 
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.75 rounded-lg text-[13px] font-medium text-white/55 bg-white/6 border border-white/10 cursor-pointer transition-all duration-200 hover:text-white hover:bg-white/10 hover:border-white/18"
                    onClick={handleRotate}
                  >
                    <FiRotateCw /> Rotate
                  </button>
                  <button 
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.75 rounded-lg text-[13px] font-medium text-white/55 bg-white/6 border border-white/10 cursor-pointer transition-all duration-200 hover:text-white hover:bg-white/10 hover:border-white/18"
                    onClick={handleReset}
                  >
                    <FiRefreshCw /> Reset
                  </button>
                </div>
              )}

              {/* Modal Body */}
              <div className="flex-1 overflow-auto p-6 flex items-center justify-center bg-black/30">
                {!imageError ? (
                  <div className="bg-white/3 border border-white/8 rounded-xl p-5 inline-block">
                    <img
                      src={certificateImageUrl}
                      alt="Official Business Certificate"
                      className="lc-cert-img max-w-full max-h-[62vh] object-contain rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.6)] block"
                      style={{
                        transform: `scale(${zoom}) rotate(${rotation}deg)`,
                      }}
                      onError={handleImageError}
                      crossOrigin="anonymous"
                      draggable="false"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-12 px-8">
                    <div className="w-[72px] h-[72px] bg-[rgba(239,68,68,0.15)] border border-[rgba(239,68,68,0.25)] rounded-full flex items-center justify-center text-[28px] text-[#f87171] mb-5">
                      <FiAlertCircle />
                    </div>
                    <div className="text-lg font-bold text-white mb-2.5">
                      Certificate Not Available
                    </div>
                    <p className="text-sm text-white/42 mb-6 max-w-[320px]">
                      The certificate image could not be loaded. Please try again or contact support.
                    </p>
                    <div className="flex gap-3 flex-wrap justify-center">
                      <button
                        className="px-[22px] py-2.5 rounded-xl text-sm font-semibold cursor-pointer bg-gradient-to-br from-[#1d4ed8] to-[#0ea5e9] text-white border-none shadow-[0_4px_16px_rgba(37,99,235,0.35)] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                        onClick={() => {
                          setImageError(false);
                          const img = new window.Image();
                          img.src = `${certificateImageUrl}?t=${Date.now()}`;
                          img.onload = () => setImageError(false);
                          img.onerror = () => setImageError(true);
                        }}
                      >
                        Retry Loading
                      </button>
                      <button 
                        className="px-[22px] py-2.5 rounded-xl text-sm font-semibold cursor-pointer bg-white/7 text-white/65 border border-white/12 transition-all duration-200 hover:bg-white/12 hover:text-white"
                        onClick={handleCloseModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LegalCertificate;