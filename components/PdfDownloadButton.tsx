"use client";

import { useEffect, useState } from "react";

interface PdfDownloadButtonProps {
  href: string;
  label: string;
  title: string;
}

export default function PdfDownloadButton({ href, label, title }: PdfDownloadButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={href}
      download
      aria-label={`Преузми PDF: ${title}`}
      className={`fixed bottom-6 left-6 z-50 inline-flex h-12 items-center gap-2 border border-[#C9A84C]/35 bg-[#2C0808]/95 px-3 text-[#F5EDD8] shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#451010] hover:shadow-xl md:h-auto md:gap-3 md:px-4 md:py-3 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#C9A84C]/40 text-[10px] font-semibold tracking-normal text-[#C9A84C] md:h-9 md:w-9">
        ПДФ
      </span>
      <span className="text-left">
        <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#C9A84C] md:text-[10px] md:tracking-[0.18em]">
          {label}
        </span>
        <span className="hidden text-sm font-medium leading-tight md:block">
          {title}
        </span>
      </span>
    </a>
  );
}
