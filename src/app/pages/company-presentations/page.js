"use client";

import { languages } from "@/app/constant/constant";
import React from "react";
import {
  RiArrowLeftLine,
  RiPresentationLine,
  RiBuildingLine,
  RiRocketLine,
  RiDownloadLine,
  RiEyeLine,
  RiInformationLine,
  RiLoader4Line,
  RiTranslate2,
} from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";

const CompanyPresentations = () => {
  const [selectlanguages, setSelectLanguages] = useState(languages);
  
  const [isDownloadingInvestor, setIsDownloadingInvestor] = useState(false);
  const [isPreviewingInvestor, setIsPreviewingInvestor] = useState(false);
  const [isDownloadingOverview, setIsDownloadingOverview] = useState(false);
  const [isPreviewingOverview, setIsPreviewingOverview] = useState(false);
  const [isDownloadingShowcase, setIsDownloadingShowcase] = useState(false);
  const [isPreviewingShowcase, setIsPreviewingShowcase] = useState(false);

  const handleLanguageClick = (index) => {
    setSelectLanguages((prev) =>
      prev.map((lang, idx) => ({
        ...lang,
        active: idx === index,
      }))
    );
  };

  const getActiveLanguage = () => {
    const activeLang = selectlanguages.find((lang) => lang.active);
    return activeLang || languages[0];
  };

  const isEnglishSelected = () => {
    return getActiveLanguage().label === "English";
  };

  const handleDownloadInvestor = async () => {
    setIsDownloadingInvestor(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const link = document.createElement("a");
      link.href = "/";
      link.download = "Investor_Pitch_Deck.pdf";
      link.setAttribute("download", "");
      link.setAttribute("type", "application/pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download error:", error);
      const absoluteUrl = `${window.location.origin}/`;
      window.open(absoluteUrl, "_blank");
    } finally {
      setIsDownloadingInvestor(false);
    }
  };

  const handlePreviewInvestor = async () => {
    setIsPreviewingInvestor(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    window.open("https://velvora.ai/Rentall.pdf", "_blank");
    setIsPreviewingInvestor(false);
  };

  const handleDownloadOverview = async () => {
    setIsDownloadingOverview(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const link = document.createElement("a");
      link.href = "/Rentelligence_company.pdf";
      link.download = "Company_Overview.pdf";
      link.setAttribute("download", "");
      link.setAttribute("type", "application/pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download error:", error);
      const absoluteUrl = `${window.location.origin}/`;
      window.open(absoluteUrl, "_blank");
    } finally {
      setIsDownloadingOverview(false);
    }
  };

  const handlePreviewOverview = async () => {
    setIsPreviewingOverview(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    window.open("https://rentelligence.biz/Rentelligence_company.pdf", "_blank");
    setIsPreviewingOverview(false);
  };

  const handleDownloadShowcase = async () => {
    setIsDownloadingShowcase(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Product Showcase presentation will be available soon!");
    setIsDownloadingShowcase(false);
  };

  const handlePreviewShowcase = async () => {
    setIsPreviewingShowcase(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Product Showcase preview will be available soon!");
    setIsPreviewingShowcase(false);
  };

  return (
    <>
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
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
            Company Presentations
          </h1>
          <p className="text-base text-white/42 mb-9">
            Investor pitches and company presentations
          </p>

          {/* Language Selector */}
          <div className="bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-3xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white tracking-[-0.3px]">
                Select Language
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {selectlanguages.map((lang, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLanguageClick(idx)}
                  disabled={lang.label !== "English"}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    lang.active
                      ? lang.label === "English"
                        ? "border-purple-500 bg-purple-500/20"
                        : "border-gray-300 bg-gray-100/10"
                      : lang.label === "English"
                      ? "border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/10"
                      : "border-gray-200/20 bg-gray-50/5 cursor-not-allowed"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{lang.flag}</div>
                    <p className={`font-medium text-sm ${
                      lang.label === "English" ? "text-white" : "text-white/50"
                    }`}>
                      {lang.label}
                    </p>
                    {lang.label !== "English" && (
                      <p className="text-xs text-white/30 mt-1">Coming soon</p>
                    )}
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-6 p-4 bg-purple-500/20 border border-purple-500/30 rounded-xl">
              <p className="text-sm text-purple-300">
                <span className="font-semibold">Note:</span> All company presentations are currently available only in English. Presentations in other languages will be added in the future.
              </p>
            </div>
          </div>

          {/* Main Content */}
          {isEnglishSelected() ? (
            <>
              {/* Presentations Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Investor Pitch Deck */}
                <div className="bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-2xl overflow-hidden hover:shadow-[0_8px_32px_rgba(37,99,235,0.3)] transition-all duration-300">
                  <div className="relative h-48 bg-gradient-to-r from-purple-500 to-pink-500">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative h-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <RiPresentationLine className="text-white text-3xl" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm font-medium">27 pages</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Investor Pitch Deck
                    </h3>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">
                      Comprehensive presentation for investors showcasing market
                      opportunity, business model, and growth projections.
                    </p>
                    <div className="space-y-3">
                      <button
                        onClick={handleDownloadInvestor}
                        disabled={isDownloadingInvestor}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl hover:shadow-lg transition-all whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isDownloadingInvestor ? (
                          <RiLoader4Line className="mr-2 inline animate-spin" />
                        ) : (
                          <RiDownloadLine className="mr-2 inline" />
                        )}
                        {isDownloadingInvestor
                          ? "Downloading..."
                          : "Download in English"}
                      </button>
                      <button
                        onClick={handlePreviewInvestor}
                        disabled={isPreviewingInvestor}
                        className="w-full border border-white/20 text-white/70 py-3 rounded-xl hover:bg-white/10 transition-all whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isPreviewingInvestor ? (
                          <RiLoader4Line className="mr-2 inline animate-spin" />
                        ) : (
                          <RiEyeLine className="mr-2 inline" />
                        )}
                        {isPreviewingInvestor ? "Loading..." : "Preview"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Company Overview */}
                <div className="bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-2xl overflow-hidden hover:shadow-[0_8px_32px_rgba(37,99,235,0.3)] transition-all duration-300">
                  <div className="relative h-48 bg-gradient-to-r from-purple-500 to-pink-500">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative h-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <RiBuildingLine className="text-white text-3xl" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm font-medium">30 pages</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Company Overview
                    </h3>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">
                      Detailed company presentation covering our mission, vision,
                      services, and achievements.
                    </p>
                    <div className="space-y-3">
                      <button
                        onClick={handleDownloadOverview}
                        disabled={isDownloadingOverview}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl hover:shadow-lg transition-all whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isDownloadingOverview ? (
                          <RiLoader4Line className="mr-2 inline animate-spin" />
                        ) : (
                          <RiDownloadLine className="mr-2 inline" />
                        )}
                        {isDownloadingOverview
                          ? "Downloading..."
                          : "Download in English"}
                      </button>
                      <button
                        onClick={handlePreviewOverview}
                        disabled={isPreviewingOverview}
                        className="w-full border border-white/20 text-white/70 py-3 rounded-xl hover:bg-white/10 transition-all whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isPreviewingOverview ? (
                          <RiLoader4Line className="mr-2 inline animate-spin" />
                        ) : (
                          <RiEyeLine className="mr-2 inline" />
                        )}
                        {isPreviewingOverview ? "Loading..." : "Preview"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Showcase */}
                <div className="bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-2xl overflow-hidden hover:shadow-[0_8px_32px_rgba(37,99,235,0.3)] transition-all duration-300">
                  <div className="relative h-48 bg-gradient-to-r from-purple-500 to-pink-500">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative h-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <RiRocketLine className="text-white text-3xl" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm font-medium">22 pages</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Product Showcase
                    </h3>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">
                      In-depth presentation of our AI solutions, features, and
                      competitive advantages.
                    </p>
                    <div className="space-y-3">
                      <button
                        onClick={handleDownloadShowcase}
                        disabled={isDownloadingShowcase}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl hover:shadow-lg transition-all whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isDownloadingShowcase ? (
                          <RiLoader4Line className="mr-2 inline animate-spin" />
                        ) : (
                          <RiDownloadLine className="mr-2 inline" />
                        )}
                        {isDownloadingShowcase
                          ? "Downloading..."
                          : "Download in English"}
                      </button>
                      <button
                        onClick={handlePreviewShowcase}
                        disabled={isPreviewingShowcase}
                        className="w-full border border-white/20 text-white/70 py-3 rounded-xl hover:bg-white/10 transition-all whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isPreviewingShowcase ? (
                          <RiLoader4Line className="mr-2 inline animate-spin" />
                        ) : (
                          <RiEyeLine className="mr-2 inline" />
                        )}
                        {isPreviewingShowcase ? "Loading..." : "Preview"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guidelines */}
              <div className="bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-3xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <RiInformationLine className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Presentation Guidelines
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-white mb-2">
                          Language Availability
                        </h4>
                        <ul className="text-white/60 text-sm space-y-1">
                          <li>• Available only in English</li>
                          <li>• Other languages coming soon</li>
                          <li>• Check back for updates</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">File Formats</h4>
                        <ul className="text-white/60 text-sm space-y-1">
                          <li>• PowerPoint (.pptx)</li>
                          <li>• PDF version available</li>
                          <li>• High-resolution images included</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Non-English Language Message */
            <div className="bg-white/4 border border-white/10 backdrop-blur-[14px] rounded-3xl p-12 text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <RiTranslate2 className="text-purple-400 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Presentations Available Only in English
              </h3>
              <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                Company presentations are currently available only in English. 
                To view and download presentations, please select the English language option.
              </p>
              <button
                onClick={() => handleLanguageClick(0)}
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all"
              >
                Switch to English
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompanyPresentations;