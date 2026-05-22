"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import SportContent from "./SportContent";
import ShopAllContent from "./shop-all/ShopAllContent";

const NAVY = "#05274C";

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
      <path d="M8 9.5C8.83 9.5 9.5 10.17 9.5 11C9.5 11.83 8.83 12.5 8 12.5C7.17 12.5 6.5 11.83 6.5 11C6.5 10.17 7.17 9.5 8 9.5Z" fill="black" />
      <path d="M8 6C9.78 6 11.39 6.72 12.57 7.9L13.99 6.48C12.43 4.92 10.33 4 8 4C5.67 4 3.57 4.92 2.01 6.48L3.43 7.9C4.61 6.72 6.22 6 8 6Z" fill="black" />
      <path d="M8 2C11.09 2 13.87 3.22 15.9 5.25L17 4.15C14.68 1.82 11.51 0.35 8 0.35C4.49 0.35 1.32 1.82 -0.99 4.15L0.1 5.25C2.13 3.22 4.91 2 8 2Z" fill="black" />
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

export default function SportPage() {
  const router = useRouter();
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);

  const goToON = useCallback(() => router.push("/shop"), [router]);
  const goToShopAll = useCallback(() => {
    setShowOverlay(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setOverlayActive(true)));
    setTimeout(() => router.push("/shop/sport/shop-all"), 280);
  }, [router]);

  return (
    <div style={{
      width: 390,
      height: 844,
      margin: "0 auto",
      background: "#fff",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'ON Sans Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    }}>
      {/* Status bar — fixed above all transitions */}
      <div style={{ position: "absolute", top: 0, left: 0, width: 390, height: 55, background: "#fff", zIndex: 30 }}>
        <span style={{ position: "absolute", left: 34, top: "50%", transform: "translateY(-50%)", fontSize: 15, fontWeight: 600, letterSpacing: -0.3, fontFamily: "SF Pro Display, -apple-system, sans-serif" }}>
          9:41
        </span>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 14, width: 126, height: 34, background: "#000", borderRadius: 20 }} />
        <div style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", gap: 6 }}>
          <SignalIcon /><WifiIcon /><BatteryIcon />
        </div>
      </div>

      {/* Sport page content */}
      <SportContent onShopAllClick={goToShopAll} onONClick={goToON} />

      {/* Shop All slides in from right on forward navigation */}
      {showOverlay && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 25,
          transform: overlayActive ? "translateX(0)" : "translateX(100%)",
          transition: overlayActive ? "transform 0.28s ease-in" : "none",
        }}>
          <ShopAllContent />
        </div>
      )}
    </div>
  );
}
