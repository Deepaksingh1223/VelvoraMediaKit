"use client";

import Image from "next/image";
import Link from "next/link";
import { MdAppRegistration } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <style jsx>{`
        @keyframes ftr-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .ftr-logo:hover .ftr-logo-box {
          border-color: rgba(37,99,235,0.55);
          background: rgba(37,99,235,0.12);
        }
        .ftr-logo-box::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.16) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform .4s;
        }
        .ftr-logo:hover .ftr-logo-box::after { transform: translateX(100%); }
        .ftr-nav-link::after {
          content: '';
          position: absolute; bottom: 3px; left: 50%;
          transform: translateX(-50%);
          width: 0; height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, #2563eb, #0ea5e9);
          transition: width .25s;
        }
        .ftr-nav-link:hover::after { width: 18px; }
      `}</style>

      <footer className="relative bg-[rgba(3,7,18,0.95)] border-t border-white/8 overflow-hidden">
        {/* Top Edge Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563eb] via-[#0ea5e9] to-transparent opacity-70" />
        
        {/* Ambient Glow Blobs */}
        <div className="absolute -bottom-[60px] -left-[80px] w-[320px] h-[320px] rounded-full bg-gradient-radial from-[rgba(37,99,235,0.10)] to-transparent pointer-events-none" />
        <div className="absolute -top-[40px] -right-[60px] w-[260px] h-[260px] rounded-full bg-gradient-radial from-[rgba(6,182,212,0.07)] to-transparent pointer-events-none" />
        
        {/* Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-6 py-10 pb-8">
          {/* Top Row: Logo + CTA */}
          <div className="flex items-center justify-between flex-wrap gap-6 pb-7 border-b border-white/7">
            <Link href="/" className="flex items-center gap-3 no-underline group">
          <Link href="/" className="flex items-center gap-3 no-underline group">
           
                <Image 
                  src="/Home-Logo.png"
                  alt="Velvora Logo"
                  width={200}
                  height={200}
                  className="relative z-[1] object-contain"
                />  
            </Link>
            </Link>

            <Link
              href="https://velvora.ai/home/register"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold text-white no-underline bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#0ea5e9] border border-white/15 shadow-[0_4px_20px_rgba(37,99,235,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-102 hover:shadow-[0_8px_28px_rgba(37,99,235,0.52)] hover:brightness-108 whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdAppRegistration className="text-base flex-shrink-0" />
              Register Now
            </Link>
          </div>

          {/* Nav Links */}
          <div className="flex items-center flex-wrap gap-1 py-5 border-b border-white/7">
            {[
              { label: "Home", href: "https://velvora.ai/" },
              { label: "Careers", href: "https://velvora.ai/Career" },
              { label: "Apps", href: "https://play.google.com/store/apps/details?id=com.tayerkarex.Rentelligence_Mobile&pcampaignid=web_share" },
              { label: "Contact", href: "https://velvora.ai/contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="ftr-nav-link relative px-3.5 py-1.5 rounded-lg text-[13px] font-medium text-white/48 no-underline bg-none border-none cursor-pointer transition-all duration-200 hover:text-white hover:bg-white/7"
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Bottom Row: Copyright + Badge */}
          <div className="flex items-center justify-between flex-wrap gap-3 pt-5">
            <div className="text-[13px] text-white/30 leading-relaxed">
              © 2025 <span className="bg-gradient-to-r from-[#60a5fa] to-[#22d3ee] bg-clip-text text-transparent font-semibold">Velvora</span>. Empowering the future with AI Agents.
              <br />
              <span className="text-[11px] text-white/22 font-normal">
                All resources are official and regularly updated.
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.25 rounded-full text-[11px] font-semibold text-white/38 bg-white/5 border border-white/8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_6px_rgba(16,185,129,0.7)] animate-[ftr-pulse_2s_ease-in-out_infinite]" />
              All systems operational
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}