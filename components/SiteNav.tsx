"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Почетна" },
  { href: "/ispovest", label: "О исповести" },
  { href: "/psaltir", label: "О псалтиру" },
  { href: "/istorijat", label: "Историјат" },
  { href: "/galerija", label: "Галерија" },
  { href: "/zakon-boziji", label: "Закон Божији" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // On home page the logo / "Почетна" scrolls to top section
  const isHome = pathname === "/";
  const homeHref = isHome ? "#pocetna" : "/";

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-[#C9A84C]/20 bg-[#4A0E0E]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <a href={homeHref} className="flex items-center gap-3">
              <Image
                src="/Грб_СПЦ.png"
                alt="Грб Српске православне цркве на сајту Манастира Кувеждин"
                width={56}
                height={56}
                className="h-10 w-auto object-contain sm:h-14"
              />
              <div className="border-l border-[#C9A84C]/30 py-1.5 pl-3 sm:py-2">
                <p className="text-xs leading-tight tracking-[0.15em] text-[#F5EDD8] uppercase">
                  Српска Православна Црква
                </p>
                <p className="mt-0.5 text-[10px] tracking-wider text-[#C9A84C] uppercase">
                  Епархија Сремска
                </p>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden items-center gap-4 lg:flex">
              {navItems.map((item, i) => {
                const href = item.href === "/" ? homeHref : item.href;
                const isActive = item.href === "/" ? isHome : pathname === item.href;
                return (
                  <span key={item.href} className="flex items-center gap-4">
                    {i > 0 && <div className="h-3 w-px bg-[#C9A84C]/30" />}
                    <a
                      href={href}
                      className={`text-sm tracking-wide uppercase transition-colors ${
                        isActive ? "text-[#C9A84C]" : "text-white/90 hover:text-[#C9A84C]"
                      }`}
                    >
                      {item.label}
                    </a>
                  </span>
                );
              })}
              <div className="h-3 w-px bg-[#C9A84C]/30" />
              <Link
                href="/zaduzbinarstvo"
                className="ml-2 bg-[#C9A84C] px-5 py-2 text-xs font-medium tracking-wider text-[#1A1209] uppercase transition-colors hover:bg-[#E8C96A]"
              >
                Задужбинарство
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-[#F5EDD8] transition-colors hover:text-[#C9A84C] lg:hidden"
              aria-label="Отвори мени"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/60 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 z-50 w-[280px] overflow-y-auto bg-[#4A0E0E] shadow-2xl lg:hidden">
            <div className="flex items-center justify-between border-b border-[#C9A84C]/20 p-6">
              <span className="text-base tracking-wider text-[#C9A84C] uppercase">Мени</span>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center text-[#F5EDD8] transition-colors hover:text-[#C9A84C]"
                onClick={() => setOpen(false)}
                aria-label="Затвори мени"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 5L5 15M5 5l10 10" />
                </svg>
              </button>
            </div>
            <nav className="space-y-1 p-6">
              {navItems.map((item) => {
                const href = item.href === "/" ? homeHref : item.href;
                const isActive = item.href === "/" ? isHome : pathname === item.href;
                return (
                  <a
                    key={item.href}
                    href={href}
                    className={`block px-4 py-3 text-sm tracking-wide uppercase transition-colors hover:bg-[#C9A84C]/10 hover:text-[#C9A84C] ${
                      isActive ? "text-[#C9A84C]" : "text-white/90"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
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
