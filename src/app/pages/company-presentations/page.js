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
} from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";

const CompanyPresentations = () => {
  const [selectlanguages, setSelectLanguages] = useState(languages);

  const handleLanguageClick = (index) => {
    setSelectLanguages((prev) =>
      prev.map((lang, idx) => ({
        ...lang,
        active: idx === index, 
      }))
    );
  };

  // Get the currently selected language
  const getActiveLanguage = () => {
    const activeLang = selectlanguages.find(lang => lang.active);
    return activeLang || languages[0]; 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Back Button + Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors mb-6"
          >
            <RiArrowLeftLine className="mr-2" /> Back to Media Kit
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Company Presentations
          </h1>
          <p className="text-xl text-gray-600">
            Multilingual investor pitches and company presentations
          </p>
        </div>

        {/* Language Selector */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Select Language
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {selectlanguages.map((lang, idx) => (
              <button
                key={idx}
                onClick={() => handleLanguageClick(idx)}
                className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  lang.active
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

        {/* Presentations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Investor Pitch Deck */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48 bg-gradient-to-r from-purple-500 to-pink-500">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <RiPresentationLine className="text-white text-3xl" />
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-white text-sm font-medium">25 pages</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Investor Pitch Deck
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Comprehensive presentation for investors showcasing market
                opportunity, business model, and growth projections.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer">
                  <RiDownloadLine className="mr-2 inline" />
                  Download in {getActiveLanguage().label}
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap cursor-pointer">
                  <RiEyeLine className="mr-2 inline" />
                  Preview
                </button>
              </div>
            </div>
          </div>

          {/* Company Overview */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48 bg-gradient-to-r from-purple-500 to-pink-500">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <RiBuildingLine className="text-white text-3xl" />
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-white text-sm font-medium">18 pages</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Company Overview
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Detailed company presentation covering our mission, vision,
                services, and achievements.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer">
                  <RiDownloadLine className="mr-2 inline" />
                  Download in {getActiveLanguage().label}
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap cursor-pointer">
                  <RiEyeLine className="mr-2 inline" />
                  Preview
                </button>
              </div>
            </div>
          </div>

          {/* Product Showcase */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Product Showcase
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                In-depth presentation of our AI solutions, features, and
                competitive advantages.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer">
                  <RiDownloadLine className="mr-2 inline" />
                  Download in {getActiveLanguage().label}
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap cursor-pointer">
                  <RiEyeLine className="mr-2 inline" />
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Presentation Guidelines */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <RiInformationLine className="text-white text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Presentation Guidelines
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Usage Rights</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Internal business use permitted</li>
                    <li>• Partner and client sharing allowed</li>
                    <li>• Attribution required for external use</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">File Formats</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• PowerPoint (.pptx)</li>
                    <li>• PDF version available</li>
                    <li>• High-resolution images included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPresentations;
