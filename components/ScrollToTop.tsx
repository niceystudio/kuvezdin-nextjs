"use client";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="fixed bottom-6 right-6 w-12 h-12 bg-[#6B1A1A] text-[#F5EDD8] hover:bg-[#8A2222] transition-all shadow-lg rounded-sm flex items-center justify-center z-50"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Врати се на врх"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 15V5M10 5L5 10M10 5L15 10" />
      </svg>
    </button>
  );
}
