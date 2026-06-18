"use client";

import { useEffect, useState } from "react";
import { RiDownloadCloudLine, RiPlayCircleLine, RiCloseLine } from "react-icons/ri";

// Exact Velvora marquee items
const MARQUEE_ITEMS = [
  "AI Research", "Robotics", "Robo Cafe", "Smart Factory",
  "Driverless Taxi", "AI Tutor", "AI Coding", "AI Design",
  "AI Health", "Auto Logistics", "Video AI", "AI Call Center",
];

export default function WelcomeSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const pdfDownloadUrl = "/";
  const handlePdfDownload = () => {
    const link = document.createElement("a");
    link.href = pdfDownloadUrl;
    link.download = "Velvora.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const youtubeUrl = "https://youtu.be/MsodtSGYKBk?si=PPHz0vEf5tF_RBLM";
  const videoId = youtubeUrl.includes("youtu.be/")
    ? youtubeUrl.split("youtu.be/")[1].split("?")[0]
    : "MsodtSGYKBk";

  useEffect(() => {
    document.body.style.overflow = showVideoModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showVideoModal]);

  const Pill = ({ name }) => (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "7px 20px", marginRight: 10,
      borderRadius: 100,
      border: "1px solid rgba(255,255,255,0.13)",
      background: "rgba(255,255,255,0.04)",
      fontSize: 13, fontWeight: 500,
      color: "rgba(255,255,255,0.75)",
      whiteSpace: "nowrap", backdropFilter: "blur(4px)", flexShrink: 0,
    }}>
      {name}
    </span>
  );

  return (
    <>
      <style>{`
        @keyframes vw-mq-left  { 0%{transform:translateX(0)}    100%{transform:translateX(-50%)} }
        @keyframes vw-mq-right { 0%{transform:translateX(-50%)} 100%{transform:translateX(0)}   }
        @keyframes vw-bounce   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        @keyframes vw-orb1     { 0%,100%{transform:translate(-50%,0)} 50%{transform:translate(-50%,22px)} }
        @keyframes vw-orb2     { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,-25px)} }
        @keyframes vw-glow     { 0%,100%{opacity:.85} 50%{opacity:1} }

        .vw-mq-left  { display:flex; width:max-content; animation:vw-mq-left  32s linear infinite; }
        .vw-mq-right { display:flex; width:max-content; animation:vw-mq-right 28s linear infinite; }
        .vw-mq-left:hover, .vw-mq-right:hover { animation-play-state:paused; }

        .vw-btn-primary {
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 30px;
          background:linear-gradient(135deg,#1d4ed8,#2563eb 60%,#0ea5e9);
          color:#fff; font-size:15px; font-weight:600;
          border:none; border-radius:8px; cursor:pointer;
          transition:transform .2s, box-shadow .2s, opacity .2s;
          white-space:nowrap; letter-spacing:.01em;
        }
        .vw-btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 32px rgba(37,99,235,.5); opacity:.93; }

        .vw-btn-ghost {
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 30px;
          background:rgba(255,255,255,0.06);
          color:#fff; font-size:15px; font-weight:600;
          border:1px solid rgba(255,255,255,0.18); border-radius:8px;
          cursor:pointer; backdrop-filter:blur(10px);
          transition:background .2s, transform .2s;
          white-space:nowrap; letter-spacing:.01em;
        }
        .vw-btn-ghost:hover { background:rgba(255,255,255,0.12); transform:translateY(-2px); }
      `}</style>

      <section
        id="welcome"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#030712",
        }}
      >
        {/* Background orbs + dot grid */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{
            position: "absolute", top: "-8%", left: "50%",
            width: 1000, height: 650, borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(37,99,235,0.30) 0%, transparent 68%)",
            animation: "vw-orb1 16s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", top: "18%", left: "-18%",
            width: 640, height: 640, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(109,40,217,0.16) 0%, transparent 70%)",
            animation: "vw-orb2 20s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", bottom: "8%", right: "-12%",
            width: 520, height: 520, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.11) 0%, transparent 70%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
        </div>

        {/* Centred content */}
        <div style={{
          position: "relative",
          width: "100%",
          maxWidth: 860,
          padding: "120px 24px 56px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>

          {/* Eyebrow */}
          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase",
            color: "rgba(147,197,253,0.78)", marginBottom: 22, marginTop: 0,
          }}>
            AI Agent Marketplace
          </p>

          {/* Headline — Velvora split */}
          <h1 style={{
            fontSize: "clamp(50px,9.5vw,104px)",
            fontWeight: 800, lineHeight: 0.98, letterSpacing: "-3.5px",
            color: "#ffffff", margin: "0 0 26px",
          }}>
            <span style={{ display: "block" }}>The Future</span>
            <span style={{ display: "block", color: "rgba(255,255,255,0.87)" }}>Workforce Is AI</span>
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: 17, color: "rgba(255,255,255,0.48)",
            lineHeight: 1.65, maxWidth: 520, margin: "0 0 44px",
          }}>
            Deploy intelligent AI agents that work 24/7, automate entire
            operations, cut costs dramatically, and accelerate your business growth.
          </p>

          {/* Dual marquee strip */}
          <div style={{
            width: "100vw", maxWidth: "100vw",
            marginBottom: 44,
            display: "flex", flexDirection: "column", gap: 10,
            maskImage: "linear-gradient(90deg,transparent 0%,black 8%,black 92%,transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg,transparent 0%,black 8%,black 92%,transparent 100%)",
          }}>
            <div style={{ overflow: "hidden" }}>
              <div className="vw-mq-left">
                {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((n, i) => <Pill key={i} name={n} />)}
              </div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <div className="vw-mq-right">
                {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((n, i) => <Pill key={i} name={n} />)}
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginBottom: 56 }}>
            <button className="vw-btn-primary" onClick={handlePdfDownload}>
              <RiDownloadCloudLine size={18} />
              Quick Download Pack
            </button>
            <button className="vw-btn-ghost" onClick={() => setShowVideoModal(true)}>
              <RiPlayCircleLine size={18} />
              Watch Demo
            </button>
          </div>

          {/* Stats row */}
          <div style={{
            display: "flex", alignItems: "stretch", justifyContent: "center",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 30, width: "100%", maxWidth: 520,
          }}>
            {[
              { num: "500+", label: "AI Agents" },
              { num: "24/7", label: "Always Active" },
              { num: "99.9%", label: "Uptime" },
            ].map((s, i, arr) => (
              <div key={i} style={{
                flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
                padding: "0 20px",
                borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}>
                <span style={{
                  fontSize: 26, fontWeight: 800, color: "#ffffff",
                  letterSpacing: "-1px", lineHeight: 1.15,
                  animation: "vw-glow 3s ease-in-out infinite",
                  animationDelay: `${i * 0.5}s`,
                }}>{s.num}</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", marginTop: 5, letterSpacing: "0.06em" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 34, right: 44,
          display: "flex", flexDirection: "column", alignItems: "center",
          gap: 5, opacity: 0.38, userSelect: "none",
        }}>
          <span style={{ fontSize: 10, color: "#fff", letterSpacing: "0.16em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div style={{ animation: "vw-bounce 1.7s ease-in-out infinite" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M3.5 8l3.5 4 3.5-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 90,
          background: "linear-gradient(to bottom,transparent,#030712)",
          pointerEvents: "none",
        }} />
      </section>

      {/* Video modal */}
      {showVideoModal && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.88)", backdropFilter: "blur(18px)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowVideoModal(false); }}
        >
          <div style={{
            width: "100%", maxWidth: 900,
            background: "linear-gradient(135deg,#0d1b3e,#030712)",
            borderRadius: 18, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 40px 100px rgba(37,99,235,.25)",
          }}>
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "14px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.03)",
            }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>Velvora Demo Video</span>
              <button
                onClick={() => setShowVideoModal(false)}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 8, padding: "5px 8px",
                  cursor: "pointer", color: "rgba(255,255,255,0.7)",
                  display: "flex", alignItems: "center",
                }}
              >
                <RiCloseLine size={20} />
              </button>
            </div>
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Velvora Demo"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
