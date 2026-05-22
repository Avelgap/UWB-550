"use client";
import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import SportLogo from "@/components/SportLogo";

const NAVY = "#05274C";

// ─── SVG LOGOS (paths extracted from Figma) ────────────────────────────────

function ONWordmark({ fill = NAVY }: { fill?: string }) {
  return (
    <svg width="138" height="22" viewBox="0 0 138 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="nonzero" d="M 12.987 11.001 C 12.987 14.860 11.749 17.065 9.575 17.065 C 7.401 17.065 6.135 14.860 6.135 11.001 C 6.135 7.141 7.374 4.935 9.548 4.935 C 11.721 4.935 12.987 7.140 12.987 11.001 Z M 19.124 11.001 C 19.124 4.328 15.355 0 9.604 0 C 3.853 0 0 4.383 0 11.001 C 0 17.618 3.769 22 9.520 22 C 15.271 22 19.124 17.617 19.124 11.001 Z M 21.821 21.752 L 34.369 21.752 L 34.369 16.790 L 27.599 16.790 L 27.599 0.248 L 21.821 0.248 L 21.821 21.752 Z M 48.485 11.028 C 48.485 14.943 46.807 16.900 43.422 16.900 L 42.707 16.900 L 42.707 5.100 L 43.312 5.100 C 46.780 5.100 48.485 7.085 48.485 11.027 M 54.622 10.973 C 54.622 4.219 50.576 0.249 43.642 0.249 L 36.927 0.249 L 36.927 21.752 L 43.201 21.752 C 50.246 21.752 54.620 17.617 54.620 10.973 M 74.241 21.752 L 80.680 21.752 L 80.680 0.248 L 75.535 0.248 L 75.535 12.875 L 70.390 0.248 L 63.455 0.248 L 63.455 21.751 L 68.600 21.751 L 68.600 7.883 L 74.241 21.751 L 74.241 21.752 Z M 94.055 13.840 L 90.174 13.840 L 92.128 3.723 L 94.055 13.840 Z M 101.567 21.752 L 96.916 0.248 L 87.643 0.248 L 82.993 21.751 L 88.633 21.751 L 89.239 18.553 L 94.990 18.553 L 95.595 21.751 L 101.566 21.751 L 101.567 21.752 Z M 114.473 21.752 L 119.151 0.248 L 113.565 0.248 L 110.428 16.569 L 107.291 0.248 L 101.430 0.248 L 106.136 21.751 L 114.473 21.751 L 114.473 21.752 Z M 131.974 15.604 L 138 0.248 L 132.387 0.248 L 129.305 9.428 L 126.085 0.248 L 120.058 0.248 L 126.195 15.659 L 126.195 21.752 L 131.973 21.752 L 131.973 15.604 L 131.974 15.604 Z" fill={fill} />
    </svg>
  );
}

const ICON_SUBTLE = "#4a4a4a";

function SportWordmark({ active = false }: { active?: boolean }) {
  return <SportLogo color={active ? NAVY : ICON_SUBTLE} />;
}

// ─── STATUS BAR ICONS ──────────────────────────────────────────────────────

function SignalIcon() {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
      <rect x="0" y="8" width="3" height="4" rx="0.5" fill="black" />
      <rect x="4.5" y="6" width="3" height="6" rx="0.5" fill="black" />
      <rect x="9" y="3.5" width="3" height="8.5" rx="0.5" fill="black" />
      <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="black" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
      <path d="M8 9.5C8.83 9.5 9.5 10.17 9.5 11C9.5 11.83 8.83 12.5 8 12.5C7.17 12.5 6.5 11.83 6.5 11C6.5 10.17 7.17 9.5 8 9.5Z" fill="black"/>
      <path d="M8 6C9.78 6 11.39 6.72 12.57 7.9L13.99 6.48C12.43 4.92 10.33 4 8 4C5.67 4 3.57 4.92 2.01 6.48L3.43 7.9C4.61 6.72 6.22 6 8 6Z" fill="black"/>
      <path d="M8 2C11.09 2 13.87 3.22 15.9 5.25L17 4.15C14.68 1.82 11.51 0.35 8 0.35C4.49 0.35 1.32 1.82 -0.99 4.15L0.1 5.25C2.13 3.22 4.91 2 8 2Z" fill="black"/>
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
      <rect x="0" y="0.5" width="21" height="11" rx="3" stroke="black" strokeWidth="1" fill="none" />
      <rect x="1.5" y="2" width="17" height="8" rx="1.5" fill="black" />
      <path d="M22.5 4.5C23.33 4.5 24 5.17 24 6C24 6.83 23.33 7.5 22.5 7.5V4.5Z" fill="black" />
    </svg>
  );
}

// ─── NAV ICONS ──────────────────────────────────────────────────────────────

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

function HeartIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
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
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8 8a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828z" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="7" cy="7" r="1.5" fill={NAVY}/>
    </svg>
  );
}

function BagIcon({ count = "1" }: { count?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="3" y1="6" x2="21" y2="6" stroke={NAVY} strokeWidth="1.5" />
      <path d="M16 10a4 4 0 0 1-8 0" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="12" y="19" textAnchor="middle" fontSize="8" fontWeight="700" fill={NAVY} fontFamily="sans-serif">{count}</text>
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
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: NAVY,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 4,
      }}
    >
      <svg width="34" height="10" viewBox="0 0 138 22" fill="none">
        <path fillRule="nonzero" d="M 12.987 11.001 C 12.987 14.860 11.749 17.065 9.575 17.065 C 7.401 17.065 6.135 14.860 6.135 11.001 C 6.135 7.141 7.374 4.935 9.548 4.935 C 11.721 4.935 12.987 7.140 12.987 11.001 Z M 19.124 11.001 C 19.124 4.328 15.355 0 9.604 0 C 3.853 0 0 4.383 0 11.001 C 0 17.618 3.769 22 9.520 22 C 15.271 22 19.124 17.617 19.124 11.001 Z M 21.821 21.752 L 34.369 21.752 L 34.369 16.790 L 27.599 16.790 L 27.599 0.248 L 21.821 0.248 L 21.821 21.752 Z M 48.485 11.028 C 48.485 14.943 46.807 16.900 43.422 16.900 L 42.707 16.900 L 42.707 5.100 L 43.312 5.100 C 46.780 5.100 48.485 7.085 48.485 11.027 M 54.622 10.973 C 54.622 4.219 50.576 0.249 43.642 0.249 L 36.927 0.249 L 36.927 21.752 L 43.201 21.752 C 50.246 21.752 54.620 17.617 54.620 10.973 M 74.241 21.752 L 80.680 21.752 L 80.680 0.248 L 75.535 0.248 L 75.535 12.875 L 70.390 0.248 L 63.455 0.248 L 63.455 21.751 L 68.600 21.751 L 68.600 7.883 L 74.241 21.751 L 74.241 21.752 Z M 94.055 13.840 L 90.174 13.840 L 92.128 3.723 L 94.055 13.840 Z M 101.567 21.752 L 96.916 0.248 L 87.643 0.248 L 82.993 21.751 L 88.633 21.751 L 89.239 18.553 L 94.990 18.553 L 95.595 21.751 L 101.566 21.751 L 101.567 21.752 Z M 114.473 21.752 L 119.151 0.248 L 113.565 0.248 L 110.428 16.569 L 107.291 0.248 L 101.430 0.248 L 106.136 21.751 L 114.473 21.751 L 114.473 21.752 Z M 131.974 15.604 L 138 0.248 L 132.387 0.248 L 129.305 9.428 L 126.085 0.248 L 120.058 0.248 L 126.195 15.659 L 126.195 21.752 L 131.973 21.752 L 131.973 15.604 L 131.974 15.604 Z" fill="white" />
      </svg>
    </div>
  );
}

// ─── WAYFINDING CARDS ──────────────────────────────────────────────────────

const HERO_CARDS = [
  { src: "/images/todays_deals.png", label: "Today's Deals" },
  { src: "/images/new_trending.png", label: "New & Trending" },
  { src: "/images/clearance.png",    label: "Clearance" },
];

const CATEGORY_CARDS = [
  { src: "/images/women.jpg",       label: "Women" },
  { src: "/images/men.jpg",         label: "Men" },
  { src: "/images/girls.jpg",       label: "Girls" },
  { src: "/images/activewear.jpg",  label: "Activewear" },
  { src: "/images/toddler.jpg",     label: "Toddler" },
  { src: "/images/boys.jpg",        label: "Boys" },
  { src: "/images/new_arrivals.jpg",label: "New Arrivals" },
  { src: "/images/baby.jpg",        label: "Baby" },
  { src: "/images/disney.jpg",      label: "Old Navy x Disney" },
];

// ─── PAGE ──────────────────────────────────────────────────────────────────

// ─── BRAND SWITCHER (shared between inline + overlay) ──────────────────────

function BrandSwitcherTabs({
  active,
  onSportClick,
}: {
  active: "on" | "sport";
  onSportClick: () => void;
}) {
  return (
    <div style={{ height: 60, display: "flex", borderBottom: "1px solid #f0f0f0", background: "#fff" }}>
      <button
        style={{
          width: 195, height: 60, background: "none", border: "none",
          borderBottom: active === "on" ? `3px solid ${NAVY}` : "3px solid transparent",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: "4px 0",
        }}
      >
        <ONWordmark fill={active === "on" ? NAVY : ICON_SUBTLE} />
      </button>
      <button
        onClick={onSportClick}
        style={{
          width: 195, height: 60, background: "none", border: "none",
          borderBottom: active === "sport" ? `3px solid ${NAVY}` : "3px solid transparent",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: "4px 0",
        }}
      >
        <SportWordmark active={active === "sport"} />
      </button>
    </div>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────

export default function ShopPage() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [inlineVisible, setInlineVisible] = useState(true);

  // Fires the instant the inline brand switcher enters/leaves the scroll viewport
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
  const goToSport = useCallback(() => router.push("/shop/sport"), [router]);

  return (
    <div
      style={{
        width: 390,
        height: 844,
        margin: "0 auto",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'ON Sans Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      {/* ── STATUS BAR + TOP NAV (always on top, 103px) ── */}
      <div style={{ position: "absolute", top: 0, left: 0, width: 390, zIndex: 20, background: "#fff" }}>

        {/* Status Bar — 55px */}
        <div style={{ height: 55, position: "relative", display: "flex", alignItems: "center" }}>
          <span style={{ position: "absolute", left: 34, top: "50%", transform: "translateY(-50%)", fontSize: 15, fontWeight: 600, letterSpacing: -0.3 }}>
            9:41
          </span>
          <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 14, width: 126, height: 34, background: "#000", borderRadius: 20 }} />
          <div style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", gap: 6 }}>
            <SignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>

        {/* Top Nav — 48px */}
        <div style={{ height: 48, display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 16, paddingRight: 8 }}>
          <span style={{ fontSize: 24, fontWeight: 400, color: NAVY, letterSpacing: -0.3, lineHeight: 1 }}>
            Shop
          </span>
          <button style={{ width: 40, height: 40, background: "none", border: "none", cursor: "default", display: "flex", alignItems: "center", justifyContent: "center", padding: 8 }}>
            <HeartIcon />
          </button>
        </div>
      </div>

      {/* ── BRAND SWITCHER OVERLAY (eases in on scroll-up, zIndex 15) ── */}
      <div
        style={{
          position: "absolute",
          top: 103,
          left: 0,
          width: 390,
          zIndex: 15,
          transform: overlayVisible ? "translateY(0)" : "translateY(-116px)",
          transition: overlayVisible ? "transform 0.28s ease-out" : "none",
          pointerEvents: overlayVisible ? "auto" : "none",
        }}
      >
        <SearchBar />
        <BrandSwitcherTabs active="on" onSportClick={goToSport} />
      </div>

      {/* ── SCROLLABLE AREA (starts at 103px, brand switcher is first child) ── */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          position: "absolute",
          top: 103,
          left: 0,
          right: 0,
          bottom: 85,
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarWidth: "none",
        }}
      >
        {/* Sentinel: observer watches this to know when inline switcher is in view */}
        <div ref={sentinelRef} style={{ height: 1 }} />

        {/* Inline search + brand switcher — scroll away naturally on scroll-down */}
        <SearchBar />
        <BrandSwitcherTabs active="on" onSportClick={goToSport} />

        {/* Content */}
        <div style={{ paddingTop: 8, paddingBottom: 8, display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Row 1 — horizontal scroll hero cards */}
        <div
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            paddingLeft: 16,
            paddingRight: 16,
            scrollbarWidth: "none",
            flexShrink: 0,
          }}
        >
          {HERO_CARDS.map((card) => (
            <div
              key={card.label}
              style={{ flexShrink: 0, width: 140, cursor: "default" }}
            >
              <div style={{ width: 140, height: 186, overflow: "hidden", position: "relative" }}>
                <Image
                  src={card.src}
                  alt={card.label}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="140px"
                />
              </div>
              <div style={{ height: 4 }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: NAVY, lineHeight: 1.4, display: "block" }}>
                {card.label}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 — 2-column category grid */}
        <div
          style={{
            paddingLeft: 16,
            paddingRight: 16,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px 4px",
          }}
        >
          {CATEGORY_CARDS.map((card) => (
            <div key={card.label} style={{ cursor: "default" }}>
              <div style={{ width: "100%", aspectRatio: "177/177", position: "relative", overflow: "hidden" }}>
                <Image
                  src={card.src}
                  alt={card.label}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="177px"
                />
              </div>
              <div style={{ height: 4 }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: NAVY, lineHeight: 1.33, display: "block" }}>
                {card.label}
              </span>
            </div>
          ))}
        </div>
        </div> {/* end content wrapper */}
      </div> {/* end scrollable area */}

      {/* ── FOOTER (85px, fixed at bottom) ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 390,
          height: 85,
          background: "#fff",
          borderTop: "1px solid #e8e8e8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Bottom Nav — 51px */}
        <div style={{ height: 51, width: 390, display: "flex", alignItems: "center", paddingTop: 4, paddingBottom: 4 }}>

          {/* Home — 70px wide */}
          <button style={{ width: 70, height: 43, background: "none", border: "none", cursor: "default", display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: 20 }}>
            <ONCircleLogo />
          </button>

          {/* Shop — 80px wide */}
          <button style={{ width: 80, height: 43, background: "none", border: "none", cursor: "default", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, paddingTop: 2, paddingBottom: 2 }}>
            <ShirtIcon />
            <span style={{ fontSize: 10, color: NAVY, fontWeight: 500, lineHeight: 1 }}>Shop</span>
          </button>

          {/* Deals — 80px wide */}
          <button style={{ width: 80, height: 43, background: "none", border: "none", cursor: "default", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, paddingTop: 2, paddingBottom: 2 }}>
            <DealsIcon />
            <span style={{ fontSize: 10, color: NAVY, fontWeight: 500, lineHeight: 1 }}>Deals</span>
          </button>

          {/* Bag — 80px wide */}
          <button style={{ width: 80, height: 43, background: "none", border: "none", cursor: "default", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, paddingTop: 2, paddingBottom: 2 }}>
            <BagIcon count="1" />
            <span style={{ fontSize: 10, color: NAVY, fontWeight: 500, lineHeight: 1 }}>Bag</span>
          </button>

          {/* Account — 80px wide */}
          <button style={{ width: 80, height: 43, background: "none", border: "none", cursor: "default", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, paddingTop: 2, paddingBottom: 2 }}>
            <AccountIcon />
            <span style={{ fontSize: 10, color: NAVY, fontWeight: 500, lineHeight: 1 }}>Account</span>
          </button>
        </div>

        {/* Home Indicator — 34px */}
        <div style={{ height: 34, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 16 }}>
          <div style={{ width: 134, height: 5, background: "#000", borderRadius: 100 }} />
        </div>
      </div>
    </div>
  );
}
