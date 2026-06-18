"use client";

import { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSocialClick = () => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById("social");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.history.pushState(null, "", "#social");
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
    }, 50);
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#social") {
        setTimeout(() => {
          document.getElementById("social")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { label: "Home",    href: "https://velvora.ai/",            external: true  },
    { label: "Careers", href: "https://velvora.ai/Career",      external: true  },
    { label: "Apps",    href: "https://play.google.com/store/apps/details?id=com.tayerkarex.Rentelligence_Mobile&pcampaignid=web_share", external: true },
  ];

  return (
    <>
      <style jsx>{`
        .hdr-nav-link::after {
          content: '';
          position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%);
          width: 0; height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, #2563eb, #0ea5e9);
          transition: width .25s;
        }
        .hdr-nav-link:hover::after { width: 20px; }
        .hdr-logo-ring::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform .4s;
        }
        .hdr-logo:hover .hdr-logo-ring::after { transform: translateX(100%); }
        @media (max-width: 768px) {
          .hdr-nav { display: none; }
          .hdr-ham { display: flex; }
        }
      `}</style>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-[0_8px_40px_rgba(0,0,0,0.55)]' : ''}`}>
        <div className="relative bg-[rgba(3,7,18,0.72)] backdrop-blur-[18px] border-b border-white/8">
          {/* Top Edge Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563eb] via-[#0ea5e9] to-transparent opacity-70" />

          <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 no-underline group">
           
                <Image 
                  src="/Home-Logo.png"
                  alt="Velvora Logo"
                  width={200}
                  height={200}
                  className="relative z-[1] object-contain"
                />  
            </Link>

            {/* Desktop Nav */}
            <nav className="hdr-nav flex items-center gap-1">
              {navLinks.map(({ label, href, external }) => (
                <Link
                  key={label}
                  href={href}
                  className="hdr-nav-link relative px-3.5 py-2 rounded-lg text-sm font-medium text-white/58 no-underline bg-none border-none cursor-pointer transition-all duration-200 hover:text-white hover:bg-white/7"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {label}
                </Link>
              ))}

              <button 
                className="hdr-nav-link relative px-3.5 py-2 rounded-lg text-sm font-medium text-white/58 no-underline bg-none border-none cursor-pointer transition-all duration-200 hover:text-white hover:bg-white/7"
                onClick={handleSocialClick}
              >
                Social
              </button>

              <div className="w-px h-5 bg-white/12 mx-2" />

              <Link
                href="https://velvora.ai/home/register"
                className="inline-flex items-center gap-2 px-5 py-2.25 rounded-full text-sm font-semibold text-white no-underline bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#0ea5e9] border border-white/15 shadow-[0_4px_20px_rgba(37,99,235,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-102 hover:shadow-[0_8px_28px_rgba(37,99,235,0.55)] hover:brightness-108 active:scale-98 whitespace-nowrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdAppRegistration className="text-base flex-shrink-0" />
                Register Now
              </Link>
            </nav>

            {/* Hamburger */}
            <button 
              className="hdr-ham hidden w-[38px] h-[38px] rounded-xl items-center justify-center bg-white/6 border border-white/10 text-white/75 cursor-pointer transition-all duration-200 hover:bg-white/11 hover:text-white"
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
            >
              {isOpen ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
            </button>
          </div>

          {/* Mobile Drawer */}
          {isOpen && (
            <div className="border-t border-white/7 px-6 py-4 pb-5 flex flex-col gap-1 bg-[rgba(3,7,18,0.85)]">
              {navLinks.map(({ label, href, external }) => (
                <Link
                  key={label}
                  href={href}
                  className="hdr-nav-link relative px-3.5 py-3 rounded-lg text-sm font-medium text-white/58 no-underline bg-none border-none cursor-pointer transition-all duration-200 hover:text-white hover:bg-white/7 w-full text-left"
                  onClick={() => setIsOpen(false)}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {label}
                </Link>
              ))}
              <button 
                className="hdr-nav-link relative px-3.5 py-3 rounded-lg text-sm font-medium text-white/58 no-underline bg-none border-none cursor-pointer transition-all duration-200 hover:text-white hover:bg-white/7 w-full text-left"
                onClick={handleSocialClick}
              >
                Social
              </button>
              <Link
                href="https://velvora.ai/home/register"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-semibold text-white no-underline bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#0ea5e9] border border-white/15 shadow-[0_4px_20px_rgba(37,99,235,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-102 hover:shadow-[0_8px_28px_rgba(37,99,235,0.55)] hover:brightness-108 active:scale-98 mt-2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <MdAppRegistration className="text-base flex-shrink-0" />
                Register Now
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}