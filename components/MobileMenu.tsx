"use client";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [downloadsOpen, setDownloadsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden w-10 h-10 flex items-center justify-center text-[#F5EDD8] hover:text-[#C9A84C] transition-colors"
        onClick={() => setOpen(true)}
        aria-label="Отвори мени"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h18M3 6h18M3 18h18"/>
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 bg-black/60 z-50 lg:hidden" onClick={() => setOpen(false)}></div>
          <div className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#4A0E0E] z-50 lg:hidden shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-[#C9A84C]/20">
              <span className="text-sm text-[#C9A84C] tracking-wider uppercase">Мени</span>
              <button
                className="w-8 h-8 flex items-center justify-center text-[#F5EDD8] hover:text-[#C9A84C] transition-colors"
                onClick={() => setOpen(false)}
                aria-label="Затвори мени"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 5L5 15M5 5l10 10"/>
                </svg>
              </button>
            </div>
            <nav className="p-6 space-y-1">
              {[
                { href: "#pocetna", label: "Почетна" },
                { href: "#ispovest", label: "О исповести" },
                { href: "#psaltir", label: "О псалтиру" },
                { href: "#istorijat", label: "Историјат" },
                { href: "#galerija", label: "Галерија" },
                { href: "#zakon", label: "Закон Божији" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-4 text-sm text-white/90 hover:bg-[#C9A84C]/10 hover:text-[#C9A84C] transition-colors tracking-wide uppercase"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div>
                <button
                  className="w-full flex items-center justify-between py-3 px-4 text-sm text-white/90 hover:bg-[#C9A84C]/10 hover:text-[#C9A84C] transition-colors tracking-wide uppercase"
                  onClick={() => setDownloadsOpen(!downloadsOpen)}
                >
                  Преузимања
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${downloadsOpen ? "rotate-180" : ""}`}>
                    <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {downloadsOpen && (
                  <div className="bg-[#2C0808] ml-4 mt-1 mb-2 rounded-sm overflow-hidden">
                    <a href="#pomocnik-ispovest" className="block py-2 px-4 text-sm text-white/80 hover:bg-[#C9A84C]/10 hover:text-[#C9A84C] transition-colors" onClick={() => setOpen(false)}>
                      Помоћник за исповест
                    </a>
                    <a href="#uputstvo-psaltir" className="block py-2 px-4 text-sm text-white/80 hover:bg-[#C9A84C]/10 hover:text-[#C9A84C] transition-colors" onClick={() => setOpen(false)}>
                      Упутство читање псалтира
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#zaduzbinastvo"
                className="block mt-4 py-3 px-4 bg-[#C9A84C] text-[#1A1209] text-sm text-center tracking-wider uppercase hover:bg-[#E8C96A] transition-colors font-medium"
                onClick={() => setOpen(false)}
              >
                Задужбинарство
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
