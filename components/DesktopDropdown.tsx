"use client";
import { useState } from "react";

export default function DesktopDropdown({
  variant,
}: {
  variant: "dark" | "gold";
}) {
  const [open, setOpen] = useState(false);

  const buttonClass =
    variant === "dark"
      ? "flex items-center gap-1 text-sm tracking-wide uppercase text-white/90 transition-colors hover:text-[#C9A84C]"
      : "flex items-center gap-1 text-xs whitespace-nowrap tracking-wide text-[#6B1A1A] transition-colors hover:text-[#2C0808]";

  const dropdownClass =
    variant === "dark"
      ? "absolute top-full left-0 mt-2 w-64 border border-[#C9A84C]/20 bg-[#4A0E0E] py-2 shadow-lg"
      : "absolute top-full left-0 mt-2 w-64 border border-[#6B1A1A]/20 bg-[#F5EDD8] py-2 shadow-lg";

  const linkClass =
    variant === "dark"
      ? "block px-4 py-2 text-sm text-white/90 transition-colors hover:bg-[#C9A84C]/10 hover:text-[#C9A84C]"
      : "block px-4 py-2 text-sm text-[#6B1A1A] transition-colors hover:bg-[#C9A84C]/20 hover:text-[#2C0808]";

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={buttonClass}>
        Преузимања
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M3 5L6 8L9 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div className={dropdownClass}>
          <a
            href="/preuzimanja/pomocnik-za-ispovest-mitarstva-blazene-teodore.pdf"
            className={linkClass}
          >
            Помоћник за исповест
          </a>
          <a
            href="/preuzimanja/uputstvo-za-citanje-psaltira.pdf"
            className={linkClass}
          >
            Упутство за читање псалтира
          </a>
        </div>
      )}
    </div>
  );
}
