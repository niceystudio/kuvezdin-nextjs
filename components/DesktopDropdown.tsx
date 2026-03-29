"use client";
import { useState } from "react";

export default function DesktopDropdown({ variant }: { variant: "dark" | "gold" }) {
  const [open, setOpen] = useState(false);

  const buttonClass = variant === "dark"
    ? "text-sm text-white/90 hover:text-[#C9A84C] transition-colors tracking-wide uppercase flex items-center gap-1"
    : "text-xs whitespace-nowrap transition-colors tracking-wide text-[#6B1A1A] hover:text-[#2C0808] flex items-center gap-1";

  const dropdownClass = variant === "dark"
    ? "absolute top-full left-0 mt-2 w-56 bg-[#4A0E0E] border border-[#C9A84C]/20 shadow-lg py-2"
    : "absolute top-full left-0 mt-2 w-56 bg-[#F5EDD8] border border-[#6B1A1A]/20 shadow-lg py-2";

  const linkClass = variant === "dark"
    ? "block px-4 py-2 text-sm text-white/90 hover:bg-[#C9A84C]/10 hover:text-[#C9A84C] transition-colors"
    : "block px-4 py-2 text-sm text-[#6B1A1A] hover:bg-[#C9A84C]/20 hover:text-[#2C0808] transition-colors";

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={buttonClass}>
        Преузимања
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className={dropdownClass}>
          <a href="#pomocnik-ispovest" className={linkClass}>Помоћник за исповест</a>
          <a href="#uputstvo-psaltir" className={linkClass}>Упутство читање псалтира</a>
        </div>
      )}
    </div>
  );
}
