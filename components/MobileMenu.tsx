"use client";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [downloadsOpen, setDownloadsOpen] = useState(false);

  return (
    <>
      <button
        className="flex h-10 w-10 items-center justify-center text-[#F5EDD8] transition-colors hover:text-[#C9A84C] lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="Отвори мени"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/60 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 z-50 w-[280px] overflow-y-auto bg-[#4A0E0E] shadow-2xl lg:hidden">
            <div className="flex items-center justify-between border-b border-[#C9A84C]/20 p-6">
              <span className="text-sm tracking-wider text-[#C9A84C] uppercase">
                Мени
              </span>
              <button
                className="flex h-8 w-8 items-center justify-center text-[#F5EDD8] transition-colors hover:text-[#C9A84C]"
                onClick={() => setOpen(false)}
                aria-label="Затвори мени"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 5L5 15M5 5l10 10" />
                </svg>
              </button>
            </div>
            <nav className="space-y-1 p-6">
              {[
                { href: "#pocetna", label: "Почетна" },
                { href: "/ispovest", label: "О исповести" },
                { href: "/psaltir", label: "О псалтиру" },
                { href: "/istorijat", label: "Историјат" },
                { href: "/galerija", label: "Галерија" },
                { href: "/zakon-boziji", label: "Закон Божији" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm tracking-wide text-white/90 uppercase transition-colors hover:bg-[#C9A84C]/10 hover:text-[#C9A84C]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div>
                <button
                  className="flex w-full items-center justify-between px-4 py-3 text-sm tracking-wide text-white/90 uppercase transition-colors hover:bg-[#C9A84C]/10 hover:text-[#C9A84C]"
                  onClick={() => setDownloadsOpen(!downloadsOpen)}
                >
                  Преузимања
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`transition-transform ${
                      downloadsOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M3 5L6 8L9 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {downloadsOpen && (
                  <div className="mt-1 mb-2 ml-4 overflow-hidden rounded-sm bg-[#2C0808]">
                    <a
                      href="/preuzimanja/pomocnik-za-ispovest-mitarstva-blazene-teodore.pdf"
                      className="block px-4 py-2 text-sm text-white/80 transition-colors hover:bg-[#C9A84C]/10 hover:text-[#C9A84C]"
                      onClick={() => setOpen(false)}
                    >
                      Помоћник за исповест
                    </a>
                    <a
                      href="/preuzimanja/uputstvo-za-citanje-psaltira.pdf"
                      className="block px-4 py-2 text-sm text-white/80 transition-colors hover:bg-[#C9A84C]/10 hover:text-[#C9A84C]"
                      onClick={() => setOpen(false)}
                    >
                      Упутство за читање псалтира
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/zaduzbinarstvo"
                className="mt-4 block bg-[#C9A84C] px-4 py-3 text-center text-sm font-medium tracking-wider text-[#1A1209] uppercase transition-colors hover:bg-[#E8C96A]"
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
