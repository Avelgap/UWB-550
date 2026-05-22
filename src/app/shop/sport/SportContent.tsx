"use client";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import SportLogo from "@/components/SportLogo";

const NAVY = "#05274C";

function ONWordmark({ fill = NAVY }: { fill?: string }) {
  return (
    <svg width="138" height="22" viewBox="0 0 138 22" fill="none">
      <path fillRule="nonzero" d="M 12.987 11.001 C 12.987 14.860 11.749 17.065 9.575 17.065 C 7.401 17.065 6.135 14.860 6.135 11.001 C 6.135 7.141 7.374 4.935 9.548 4.935 C 11.721 4.935 12.987 7.140 12.987 11.001 Z M 19.124 11.001 C 19.124 4.328 15.355 0 9.604 0 C 3.853 0 0 4.383 0 11.001 C 0 17.618 3.769 22 9.520 22 C 15.271 22 19.124 17.617 19.124 11.001 Z M 21.821 21.752 L 34.369 21.752 L 34.369 16.790 L 27.599 16.790 L 27.599 0.248 L 21.821 0.248 L 21.821 21.752 Z M 48.485 11.028 C 48.485 14.943 46.807 16.900 43.422 16.900 L 42.707 16.900 L 42.707 5.100 L 43.312 5.100 C 46.780 5.100 48.485 7.085 48.485 11.027 M 54.622 10.973 C 54.622 4.219 50.576 0.249 43.642 0.249 L 36.927 0.249 L 36.927 21.752 L 43.201 21.752 C 50.246 21.752 54.620 17.617 54.620 10.973 M 74.241 21.752 L 80.680 21.752 L 80.680 0.248 L 75.535 0.248 L 75.535 12.875 L 70.390 0.248 L 63.455 0.248 L 63.455 21.751 L 68.600 21.751 L 68.600 7.883 L 74.241 21.751 L 74.241 21.752 Z M 94.055 13.840 L 90.174 13.840 L 92.128 3.723 L 94.055 13.840 Z M 101.567 21.752 L 96.916 0.248 L 87.643 0.248 L 82.993 21.751 L 88.633 21.751 L 89.239 18.553 L 94.990 18.553 L 95.595 21.751 L 101.566 21.751 L 101.567 21.752 Z M 114.473 21.752 L 119.151 0.248 L 113.565 0.248 L 110.428 16.569 L 107.291 0.248 L 101.430 0.248 L 106.136 21.751 L 114.473 21.751 L 114.473 21.752 Z M 131.974 15.604 L 138 0.248 L 132.387 0.248 L 129.305 9.428 L 126.085 0.248 L 120.058 0.248 L 126.195 15.659 L 126.195 21.752 L 131.973 21.752 L 131.973 15.604 L 131.974 15.604 Z" fill={fill} />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function BarcodeIcon() {
  return (
    <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
      <rect x="0" y="0" width="2" height="18" fill={NAVY} />
      <rect x="3.5" y="0" width="1" height="18" fill={NAVY} />
      <rect x="6" y="0" width="2.5" height="18" fill={NAVY} />
      <rect x="10" y="0" width="1" height="18" fill={NAVY} />
      <rect x="12.5" y="0" width="2" height="18" fill={NAVY} />
      <rect x="16" y="0" width="1" height="18" fill={NAVY} />
      <rect x="18.5" y="0" width="2.5" height="18" fill={NAVY} />
      <rect x="22.5" y="0" width="1" height="18" fill={NAVY} />
      <rect x="24.5" y="0" width="1.5" height="18" fill={NAVY} />
    </svg>
  );
}

function ShirtIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.7813 4.45996C17.8711 4.45996 17.951 4.49983 18.0011 4.55957L23.8311 11.0498C23.9211 11.1498 23.9316 11.3099 23.8516 11.4199L20.6817 15.9102C20.5817 16.0601 20.3713 16.0799 20.2413 15.96L17.9112 13.8896V23.7002C17.9111 23.8701 17.7813 24 17.6114 24H6.52156C6.35164 24 6.22188 23.8701 6.22176 23.7002V13.9004L3.89168 15.9697C3.76168 16.0897 3.55125 16.0699 3.45125 15.9199L0.151446 11.4199C0.0714919 11.2999 0.0719728 11.14 0.171953 11.04L6.13191 4.55957C6.19187 4.49978 6.27181 4.45996 6.35164 4.45996H7.27352C7.49875 6.80909 9.43159 8.66381 11.8243 8.78418L12.0723 8.79004C14.5781 8.78988 16.6373 6.88951 16.8702 4.45996H17.7813ZM15.8624 4.45996C15.6338 6.33156 14.03 7.78988 12.0723 7.79004C10.1145 7.79004 8.51003 6.33166 8.28133 4.45996H15.8624Z" fill={NAVY} />
    </svg>
  );
}

function DealsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8 8a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828z" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="7" r="1.5" fill={NAVY} />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="3" y1="6" x2="21" y2="6" stroke={NAVY} strokeWidth="1.5" />
      <path d="M16 10a4 4 0 0 1-8 0" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="12" y="19" textAnchor="middle" fontSize="8" fontWeight="700" fill={NAVY} fontFamily="sans-serif">1</text>
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ONCircleLogo() {
  return (
    <div style={{ width: 40, height: 40, borderRadius: "50%", background: NAVY, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="34" height="10" viewBox="0 0 138 22" fill="none">
        <path fillRule="nonzero" d="M 12.987 11.001 C 12.987 14.860 11.749 17.065 9.575 17.065 C 7.401 17.065 6.135 14.860 6.135 11.001 C 6.135 7.141 7.374 4.935 9.548 4.935 C 11.721 4.935 12.987 7.140 12.987 11.001 Z M 19.124 11.001 C 19.124 4.328 15.355 0 9.604 0 C 3.853 0 0 4.383 0 11.001 C 0 17.618 3.769 22 9.520 22 C 15.271 22 19.124 17.617 19.124 11.001 Z M 21.821 21.752 L 34.369 21.752 L 34.369 16.790 L 27.599 16.790 L 27.599 0.248 L 21.821 0.248 L 21.821 21.752 Z M 48.485 11.028 C 48.485 14.943 46.807 16.900 43.422 16.900 L 42.707 16.900 L 42.707 5.100 L 43.312 5.100 C 46.780 5.100 48.485 7.085 48.485 11.027 M 54.622 10.973 C 54.622 4.219 50.576 0.249 43.642 0.249 L 36.927 0.249 L 36.927 21.752 L 43.201 21.752 C 50.246 21.752 54.620 17.617 54.620 10.973 M 74.241 21.752 L 80.680 21.752 L 80.680 0.248 L 75.535 0.248 L 75.535 12.875 L 70.390 0.248 L 63.455 0.248 L 63.455 21.751 L 68.600 21.751 L 68.600 7.883 L 74.241 21.751 L 74.241 21.752 Z M 94.055 13.840 L 90.174 13.840 L 92.128 3.723 L 94.055 13.840 Z M 101.567 21.752 L 96.916 0.248 L 87.643 0.248 L 82.993 21.751 L 88.633 21.751 L 89.239 18.553 L 94.990 18.553 L 95.595 21.751 L 101.566 21.751 L 101.567 21.752 Z M 114.473 21.752 L 119.151 0.248 L 113.565 0.248 L 110.428 16.569 L 107.291 0.248 L 101.430 0.248 L 106.136 21.751 L 114.473 21.751 L 114.473 21.752 Z M 131.974 15.604 L 138 0.248 L 132.387 0.248 L 129.305 9.428 L 126.085 0.248 L 120.058 0.248 L 126.195 15.659 L 126.195 21.752 L 131.973 21.752 L 131.973 15.604 L 131.974 15.604 Z" fill="white" />
      </svg>
    </div>
  );
}

const HERO_CARDS = [
  { src: "/images/sport/workout_training.png", label: "Workout & Training" },
  { src: "/images/sport/running.png",          label: "Running" },
  { src: "/images/sport/yoga_studio.png",      label: "Yoga & Studio" },
  { src: "/images/sport/outdoor_travel.png",   label: "Outdoor & Travel" },
  { src: "/images/sport/sports_bras_tops.png", label: "Sports Bras & Tops" },
];

const CATEGORY_CARDS = [
  { src: "/images/sport/shop_all.png", label: "Shop All" },
  { src: "/images/sport/women.png",    label: "Women" },
  { src: "/images/sport/men.png",      label: "Men" },
  { src: "/images/sport/kids.png",     label: "Kids" },
];

function SearchBar() {
  return (
    <div style={{ height: 56, display: "flex", alignItems: "center", paddingLeft: 16, paddingRight: 8, background: "#fff" }}>
      <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid #cecece", borderRadius: 24, paddingLeft: 16, paddingRight: 12, height: 40 }}>
          <span style={{ fontSize: 14, color: "#4a4a4a", letterSpacing: 0.14 }}>Search for your new fav</span>
          <SearchIcon />
        </div>
        <button style={{ width: 48, height: 48, background: "none", border: "none", cursor: "default", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <BarcodeIcon />
        </button>
      </div>
    </div>
  );
}

function SportBrandSwitcher({ onONClick }: { onONClick?: () => void }) {
  return (
    <div style={{ height: 56, display: "flex", borderBottom: "1px solid #f0f0f0", background: "#fff" }}>
      <button onClick={onONClick} style={{ width: 195, height: 56, background: "none", border: "none", borderBottom: "3px solid transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: 16, paddingRight: 16 }}>
        <ONWordmark fill="#4a4a4a" />
      </button>
      <button style={{ width: 195, height: 56, background: "none", border: "none", borderBottom: `4px solid ${NAVY}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: 16, paddingRight: 16 }}>
        <SportLogo color={NAVY} />
      </button>
    </div>
  );
}

export default function SportContent({
  onShopAllClick,
  onONClick,
}: {
  onShopAllClick?: () => void;
  onONClick?: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [inlineVisible, setInlineVisible] = useState(true);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInlineVisible(entry.isIntersecting),
      { root: scrollRef.current, threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setScrollingUp(el.scrollTop < lastScrollY.current);
    lastScrollY.current = el.scrollTop;
  }, []);

  const overlayVisible = scrollingUp && !inlineVisible;

  return (
    <>
      {/* Top nav */}
      <div style={{ position: "absolute", top: 55, left: 0, width: 390, height: 48, zIndex: 20, background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 16, paddingRight: 8 }}>
        <span style={{ fontSize: 24, fontWeight: 400, color: NAVY, letterSpacing: -0.3, lineHeight: 1 }}>Shop</span>
        <button style={{ width: 40, height: 40, background: "none", border: "none", cursor: "default", display: "flex", alignItems: "center", justifyContent: "center", padding: 8 }}>
          <HeartIcon />
        </button>
      </div>

      {/* Overlay: search + brand switcher on scroll-up */}
      <div style={{
        position: "absolute", top: 103, left: 0, width: 390, zIndex: 15,
        transform: overlayVisible ? "translateY(0)" : "translateY(-112px)",
        transition: overlayVisible ? "transform 0.28s ease-out" : "none",
        pointerEvents: overlayVisible ? "auto" : "none",
      }}>
        <SearchBar />
        <SportBrandSwitcher onONClick={onONClick} />
      </div>

      {/* Scrollable area */}
      <div ref={scrollRef} onScroll={handleScroll} style={{
        position: "absolute", top: 103, left: 0, right: 0, bottom: 85,
        overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none",
      }}>
        <div ref={sentinelRef} style={{ height: 1 }} />
        <SearchBar />
        <SportBrandSwitcher onONClick={onONClick} />
        <div style={{ paddingTop: 8, paddingBottom: 8, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ overflowX: "auto", overflowY: "hidden", display: "flex", gap: 8, paddingLeft: 16, paddingRight: 16, paddingBottom: 16, scrollbarWidth: "none", flexShrink: 0 }}>
            {HERO_CARDS.map((card) => (
              <div key={card.label} style={{ flexShrink: 0, width: 140, cursor: "default", display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ width: 140, height: 186, overflow: "hidden", position: "relative" }}>
                  <Image src={card.src} alt={card.label} fill style={{ objectFit: "cover", objectPosition: "center top" }} sizes="140px" />
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, color: NAVY, lineHeight: "14px", letterSpacing: 0.1, display: "block" }}>{card.label}</span>
              </div>
            ))}
          </div>
          <div style={{ paddingLeft: 16, paddingRight: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 8px", flexShrink: 0 }}>
            {CATEGORY_CARDS.map((card) => (
              <div key={card.label} onClick={card.label === "Shop All" ? onShopAllClick : undefined} style={{ cursor: card.label === "Shop All" ? "pointer" : "default", display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ width: "100%", aspectRatio: "155/155", position: "relative", overflow: "hidden" }}>
                  <Image src={card.src} alt={card.label} fill style={{ objectFit: "cover", objectPosition: "center top" }} sizes="175px" />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: NAVY, lineHeight: "16px", letterSpacing: 0.12, display: "block" }}>{card.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 390, height: 85, background: "#fff", borderTop: "1px solid #cecece", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ height: 51, width: 390, display: "flex", alignItems: "center", paddingTop: 4, paddingBottom: 4 }}>
          <button style={{ width: 70, height: 43, background: "none", border: "none", cursor: "default", display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: 20 }}><ONCircleLogo /></button>
          <button style={{ width: 80, height: 43, background: "none", border: "none", cursor: "default", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}><ShirtIcon /><span style={{ fontSize: 10, color: NAVY, fontWeight: 400, lineHeight: 1.1 }}>Shop</span></button>
          <button style={{ width: 80, height: 43, background: "none", border: "none", cursor: "default", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}><DealsIcon /><span style={{ fontSize: 10, color: NAVY, fontWeight: 400, lineHeight: 1.1 }}>Deals</span></button>
          <button style={{ width: 80, height: 43, background: "none", border: "none", cursor: "default", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}><BagIcon /><span style={{ fontSize: 10, color: NAVY, fontWeight: 400, lineHeight: 1.1 }}>Bag</span></button>
          <button style={{ width: 80, height: 43, background: "none", border: "none", cursor: "default", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}><AccountIcon /><span style={{ fontSize: 10, color: NAVY, fontWeight: 400, lineHeight: 1.1 }}>Account</span></button>
        </div>
        <div style={{ height: 34, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 16 }}>
          <div style={{ width: 134, height: 5, background: "#000", borderRadius: 100 }} />
        </div>
      </div>
    </>
  );
}
