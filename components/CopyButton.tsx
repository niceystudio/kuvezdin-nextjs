"use client";
import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      className="inline-flex items-center gap-2 px-5 py-3 border border-[#6B1A1A]/30 bg-transparent text-[#6B1A1A] text-xs tracking-wider hover:bg-[#6B1A1A] hover:text-[#F5EDD8] hover:border-[#6B1A1A] transition-colors whitespace-nowrap uppercase"
      onClick={handleCopy}
      disabled={copied}
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7L6 11L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Успешно копирано</span>
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="4" y="4" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1"/>
            <path d="M2 10V2H10" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          Копирај број рачуна
        </>
      )}
    </button>
  );
}
