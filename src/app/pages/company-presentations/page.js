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
} from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";

const CompanyPresentations = () => {
  const [selectlanguages, setSelectLanguages] = useState(languages);
  // Loading states for each presentation card
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

  // Get the currently selected language
  const getActiveLanguage = () => {
    const activeLang = selectlanguages.find(lang => lang.active);
    return activeLang || languages[0];
  };

  // Handle download for Investor Pitch Deck
  // const handleDownloadInvestor = async () => {
  //   if (getActiveLanguage().label === 'English') {
  //     setIsDownloadingInvestor(true);
  //     // Simulate loading delay
  //     await new Promise(resolve => setTimeout(resolve, 2000));
  //     const link = document.createElement('a');
  //     link.href = 'https://app.rentelligence.ai/Rentall.pdf';
  //     link.download = 'Investor_Pitch_Deck.pdf';
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //     setIsDownloadingInvestor(false);
  //   }
  // };
  // Handle download for Investor Pitch Deck - FIXED VERSION
const handleDownloadInvestor = async () => {
  if (getActiveLanguage().label === 'English') {
    setIsDownloadingInvestor(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const link = document.createElement('a');
      link.href = '/Rental.pdf'; 
      link.download = 'Investor_Pitch_Deck.pdf'; 
      
      link.setAttribute('download', '');
      link.setAttribute('type', 'application/pdf');
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Download error:', error);
      
      const absoluteUrl = `${window.location.origin}/Rental.pdf`;
      window.open(absoluteUrl, '_blank');
      
    } finally {
      setIsDownloadingInvestor(false);
    }
  } else {
    alert('Available only in English');
  }
};

  // Handle preview for Investor Pitch Deck
  const handlePreviewInvestor = async () => {
    if (getActiveLanguage().label === 'English') {
      setIsPreviewingInvestor(true);
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      window.open('https://app.rentelligence.ai/Rentall.pdf', '_blank');
      setIsPreviewingInvestor(false);
    }
  };

  // Handle download for Company Overview
  // const handleDownloadOverview = async () => {
  //   if (getActiveLanguage().label === 'English') {
  //     setIsDownloadingOverview(true);
  //     // Simulate loading delay
  //     await new Promise(resolve => setTimeout(resolve, 2000));
  //     const link = document.createElement('a');
  //     link.href = 'http://rentelligence.world/Rentelligence_FF_PPT.pdf';
  //     link.download = 'Company_Overview.pdf';
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //     setIsDownloadingOverview(false);
  //   }
  // };
  const handleDownloadOverview = async () => {
  if (getActiveLanguage().label === 'English') {
    setIsDownloadingOverview(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const link = document.createElement('a');
      link.href = '/Rentelligence_company.pdf'; 
      link.download = 'Company_Overview.pdf'; 
      
      link.setAttribute('download', '');
      link.setAttribute('type', 'application/pdf');
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Download error:', error);
      
      const absoluteUrl = `${window.location.origin}/Rental.pdf`;
      window.open(absoluteUrl, '_blank');
      
    } finally {
      setIsDownloadingOverview(false);
    }
  } else {
    alert('Available only in English');
  }
};

  // Handle preview for Company Overview
  const handlePreviewOverview = async () => {
    if (getActiveLanguage().label === 'English') {
      setIsPreviewingOverview(true);
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      window.open('http://rentelligence.world/Rentelligence_FF_PPT.pdf', '_blank');
      setIsPreviewingOverview(false);
    }
  };

  // Handle download for Product Showcase
  const handleDownloadShowcase = async () => {
    if (getActiveLanguage().label === 'English') {
      setIsDownloadingShowcase(true);
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      const link = document.createElement('a');
      // link.href = 'https://app.rentelligence.ai/Rentall.pdf';
      link.download = 'Product_Showcase.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloadingShowcase(false);
    }
  };

  // Handle preview for Product Showcase
  const handlePreviewShowcase = async () => {
    if (getActiveLanguage().label === 'English') {
      setIsPreviewingShowcase(true);
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      // window.open('https://app.rentelligence.ai/Rentall.pdf', '_blank');
      setIsPreviewingShowcase(false);
    }
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
                className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${lang.active
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
                <button onClick={handleDownloadInvestor} disabled={isDownloadingInvestor} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                  {isDownloadingInvestor ? <RiLoader4Line className="mr-2 inline animate-spin" /> : <RiDownloadLine className="mr-2 inline" />}
                  {isDownloadingInvestor ? 'Downloading...' : `Download in ${getActiveLanguage().label}`}
                </button>
                <button onClick={handlePreviewInvestor} disabled={isPreviewingInvestor} className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                  {isPreviewingInvestor ? <RiLoader4Line className="mr-2 inline animate-spin" /> : <RiEyeLine className="mr-2 inline" />}
                  {isPreviewingInvestor ? 'Loading...' : 'Preview'}
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
                <button onClick={handleDownloadOverview} disabled={isDownloadingOverview} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                  {isDownloadingOverview ? <RiLoader4Line className="mr-2 inline animate-spin" /> : <RiDownloadLine className="mr-2 inline" />}
                  {isDownloadingOverview ? 'Downloading...' : `Download in ${getActiveLanguage().label}`}
                </button>
                <button onClick={handlePreviewOverview} disabled={isPreviewingOverview} className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                  {isPreviewingOverview ? <RiLoader4Line className="mr-2 inline animate-spin" /> : <RiEyeLine className="mr-2 inline" />}
                  {isPreviewingOverview ? 'Loading...' : 'Preview'}
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
                <button onClick={handleDownloadShowcase} disabled={isDownloadingShowcase} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                  {isDownloadingShowcase ? <RiLoader4Line className="mr-2 inline animate-spin" /> : <RiDownloadLine className="mr-2 inline" />}
                  {isDownloadingShowcase ? 'Downloading...' : `Download in ${getActiveLanguage().label}`}
                </button>
                <button onClick={handlePreviewShowcase} disabled={isPreviewingShowcase} className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                  {isPreviewingShowcase ? <RiLoader4Line className="mr-2 inline animate-spin" /> : <RiEyeLine className="mr-2 inline" />}
                  {isPreviewingShowcase ? 'Loading...' : 'Preview'}
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
