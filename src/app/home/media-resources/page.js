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
  const [activeTab, setActiveTab] = useState("social");
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "social") setActiveTab("social");
  }, [searchParams]);

  const filteredResources =
    filter === "All"
      ? resourcesData
      : resourcesData.filter((r) => r.category === filter);

  return (
    <>
      <style jsx>{`
        @keyframes orb1 {
          0%,
          100% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, 18px);
          }
        }
        @keyframes orb2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-16px, -20px);
          }
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .mr-tab:hover {
          background: rgba(255, 255, 255, 0.09) !important;
          color: rgba(255, 255, 255, 0.9) !important;
        }
        .mr-link-card {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .mr-link-card:hover {
          transform: translateY(-2px) scale(1.01);
        }
        .mr-dl-card {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .mr-dl-card:hover {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 8px 32px rgba(37, 99, 235, 0.3);
        }
        .mr-filter-btn {
          transition: all 0.2s;
        }
        .mr-filter-btn:hover {
          opacity: 0.85;
        }
      `}</style>

      <div className="relative bg-[#030712] min-h-screen py-16 px-6 pb-20 overflow-hidden">
        {/* Ambient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-[6%] left-1/2 w-[900px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(37,99,235,0.22) 0%, transparent 68%)",
              animation: "orb1 16s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-[30%] -left-[15%] w-[560px] h-[560px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)",
              animation: "orb2 20s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-[5%] -right-[10%] w-[480px] h-[480px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Main Content Wrapper */}
        <div className="relative max-w-[1280px] mx-auto">
          {/* Page Heading */}
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[rgba(147,197,253,0.78)] mb-3">
              Velvora Platform
            </p>
            <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold tracking-[-1.5px] text-white leading-[1.1]">
              Media Resources
            </h1>
            <p className="text-base text-white/45 mt-3 max-w-[480px] mx-auto">
              Comprehensive collection of digital assets for partners &amp;
              affiliates
            </p>
          </div>

          {/* Grid: Sidebar + Main */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
            {/* Sidebar */}
            <div
              className="overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderRadius: 24,
              }}
            >
              {/* Sidebar Header */}
              <div className="p-6 pb-5 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]">
                <h2 className="text-lg font-bold text-white mb-4 tracking-[-0.3px]">
                  Quick Access Hub
                </h2>

                {/* Tab Buttons */}
                <div className="flex flex-col gap-2">
                  {[
                    { key: "social", Icon: FaShareAlt, label: "Social Media" },
                    {
                      key: "downloads",
                      Icon: FaCloudDownloadAlt,
                      label: "Quick Downloads",
                    },
                    { key: "apps", Icon: FaMobileAlt, label: "Mobile Apps" },
                  ].map(({ key, Icon, label }) => (
                    <button
                      key={key}
                      className={`mr-tab flex items-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold border-none transition-all duration-200 ${
                        activeTab === key
                          ? "bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#0ea5e9] text-white shadow-[0_4px_18px_rgba(37,99,235,0.40)]"
                          : "bg-white/5 text-white/60 hover:bg-white/9 hover:text-white/90"
                      }`}
                      onClick={() => setActiveTab(key)}
                    >
                      <Icon size={15} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-5">
                {/* Social Tab */}
                {activeTab === "social" && (
                  <div>
                    <p className="text-sm text-white/42 mb-4">
                      Connect with us on social platforms
                    </p>
                    <div className="flex flex-col gap-2.5">
                      {links.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          target={item.target}
                          rel={item.rel}
                          className="mr-link-card flex items-center gap-3.5 border border-white/10 rounded-xl p-3.5 no-underline"
                          style={{
                            background: item.gradient
                              ? `linear-gradient(135deg, ${item.gradient})`
                              : "rgba(255,255,255,0.06)",
                          }}
                        >
                          <div className="w-10 h-10 bg-white/18 rounded-xl flex items-center justify-center flex-shrink-0">
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-white">
                              {item.name}
                            </div>
                            <div className="text-xs text-white/60 mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                          <FiExternalLink className="text-white/55 flex-shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Downloads Tab */}
                {activeTab === "downloads" && (
                  <div className="flex flex-col gap-3">
                    {/* Promotional Flyer */}
                    <a
                      href="/"
                      download="Rental_Promotional_Flyer.pdf"
                      className="mr-dl-card block bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#0ea5e9] rounded-2xl p-5 no-underline overflow-hidden relative"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/8 translate-x-[30px] -translate-y-[30px]" />
                      <div className="w-11 h-11 bg-white/18 rounded-xl mb-3 flex items-center justify-center">
                        <FaRegImage className="text-white text-xl" />
                      </div>
                      <div className="text-[15px] font-bold text-white mb-1.5">
                        Promotional Flyer
                      </div>
                      <div className="text-xs text-white/70 leading-relaxed mb-2.5">
                        Professional marketing flyer showcasing Velvora AI
                        solutions.
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-[11px] font-semibold bg-white/15 text-white rounded-full px-2.5 py-0.5">
                          Ready for print &amp; digital
                        </span>
                        <span className="text-[11px] text-white/55">
                          PDF · 4.4 MB
                        </span>
                      </div>
                    </a>

                    {/* Legal Certificate */}
                    <a
                      href="/pages/legal-certificate"
                      className="mr-dl-card block bg-white/5 border border-white/10 rounded-2xl p-5 no-underline overflow-hidden relative"
                    >
                      <div className="w-11 h-11 bg-gradient-to-br from-[#059669] to-[#10b981] rounded-xl mb-3 flex items-center justify-center">
                        <PiCertificate className="text-white text-[22px]" />
                      </div>
                      <div className="text-[15px] font-bold text-white mb-1.5">
                        Legal Certificate
                      </div>
                      <div className="text-xs text-white/50 leading-relaxed mb-2.5">
                        Official business registration and certification
                        documents.
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-[11px] font-semibold bg-[rgba(16,185,129,0.18)] text-[#34d399] rounded-full px-2.5 py-0.5">
                          Verified &amp; Authentic
                        </span>
                        <span className="text-[11px] text-white/35">
                          JPG · 1.8 MB
                        </span>
                      </div>
                    </a>
                  </div>
                )}

                {/* Apps Tab */}
                {activeTab === "apps" && (
                  <div>
                    <p className="text-sm text-white/42 mb-4">
                      Download our mobile apps for the best experience
                    </p>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.tayerkarex.Rentelligence_Mobile&pcampaignid=web_share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-dl-card flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl p-6 no-underline"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-[#1d4ed8] to-[#0ea5e9] rounded-2xl mb-3.5 flex items-center justify-center">
                        <FaGooglePlay className="text-white text-2xl" />
                      </div>
                      <div className="text-[15px] font-bold text-white mb-1">
                        Google Play
                      </div>
                      <div className="text-xs text-white/48 mb-3">
                        Download for Android
                      </div>
                      <div className="flex gap-0.5 justify-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <AiFillStar key={i} className="text-[#fbbf24] text-xs" />
                        ))}
                      </div>
                      <div className="text-[11px] text-white/35">4.9 rating</div>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Main Content */}
            <main
              className="p-8 overflow-hidden relative"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderRadius: 24,
              }}
            >
              {/* Subtle Top-Right Glow */}
              <div
                className="absolute -top-[10%] -right-[8%] w-[320px] h-[320px] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                {/* Header Row */}
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <h2 className="text-[32px] font-extrabold text-white tracking-[-1px] mb-1.5">
                      Media Resources
                    </h2>
                    <p className="text-[15px] text-white/48">
                      Comprehensive collection of digital assets
                    </p>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex gap-1.5 bg-white/5 border border-white/10 rounded-full p-1">
                    {["All", "Videos", "Documents"].map((f) => (
                      <button
                        key={f}
                        className="mr-filter-btn text-[13px] font-semibold px-[18px] py-2 rounded-full border-none cursor-pointer transition-all duration-200 hover:opacity-85"
                        style={{
                          background:
                            filter === f
                              ? "linear-gradient(135deg, #1d4ed8, #0ea5e9)"
                              : "transparent",
                          color:
                            filter === f ? "#fff" : "rgba(255,255,255,0.50)",
                          boxShadow:
                            filter === f
                              ? "0 2px 12px rgba(37,99,235,.35)"
                              : "none",
                        }}
                        onClick={() => setFilter(f)}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Meta Row */}
                <div className="flex items-center gap-2 text-[13px] text-white/35 mb-6">
                  <RiDatabase2Line
                    size={15}
                    className="text-white/40 flex-shrink-0"
                  />
                  <span>6 Resources Available</span>
                  <span className="opacity-40">•</span>
                  <span>Updated Recently</span>
                </div>

                {/* Resources Grid */}
                <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
                  {filteredResources.map((res, i) => (
                    <ResourceCard key={i} resource={res} />
                  ))}
                </div>

                {/* CTA Banner */}
                <div
                  className="mt-12 border border-white/10 rounded-2xl p-9 text-center relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(37,99,235,0.18) 0%, rgba(109,40,217,0.14) 100%)",
                  }}
                >
                  {/* Top Edge Line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                  <h3 className="text-[22px] font-bold text-white mb-2.5 tracking-[-0.4px]">
                    Need Something Specific?
                  </h3>
                  <p className="text-sm text-white/48 mb-6 max-w-[380px] mx-auto">
                    Can&apos;t find what you&apos;re looking for? Contact our
                    team for custom resources.
                  </p>
                  <Link
                    href="https://velvora.ai/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#0ea5e9] text-white text-sm font-semibold rounded-xl no-underline shadow-[0_6px_24px_rgba(37,99,235,0.40)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(37,99,235,0.55)]"
                  >
                    <RiCustomerService2Line size={16} />
                    Request Custom Resource
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default function MediaResources() {
  return (
    <Suspense
      fallback={
        <div className="bg-[#030712] min-h-screen flex items-center justify-center">
          <div
            className="p-12 text-center max-w-[480px]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 24,
            }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#0ea5e9] mx-auto mb-5 animate-spin" />
            <div className="text-base text-white/50">Loading resources…</div>
          </div>
        </div>
      }
    >
      <MediaResourcesContent />
    </Suspense>
  );
}