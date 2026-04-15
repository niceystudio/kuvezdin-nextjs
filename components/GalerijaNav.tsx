"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Почетна" },
  { href: "/ispovest", label: "О исповести" },
  { href: "/psaltir", label: "О псалтиру" },
  { href: "/istorijat", label: "Историјат" },
  { href: "/galerija", label: "Галерија" },
  { href: "/zakon-boziji", label: "Закон Божији" },
];

export default function GalerijaNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-[#C9A84C]/20 bg-[#4A0E0E]">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/spc-logo.svg"
                alt="Грб Српске православне цркве на сајту Манастира Кувеждин"
                width={56}
                height={56}
                className="h-14 w-auto object-contain"
              />
              <div className="border-l border-[#C9A84C]/30 py-2 pl-3">
                <p className="text-xs leading-tight tracking-[0.15em] text-[#F5EDD8] uppercase">
                  Српска Православна Црква
                </p>
                <p className="mt-0.5 text-[10px] tracking-wider text-[#C9A84C] uppercase">
                  Епархија Сремска
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-4 lg:flex">
              {navItems.map((item, index) => (
                <span key={item.href} className="flex items-center gap-4">
                  {index > 0 && <div className="h-3 w-px bg-[#C9A84C]/30" />}
                  <Link
                    href={item.href}
                    className={`text-sm tracking-wide uppercase transition-colors ${
                      item.href === "/galerija"
                        ? "text-[#C9A84C]"
                        : "text-white/90 hover:text-[#C9A84C]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
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
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-label="Отвори мени"
            >
              <span className="block h-0.5 w-6 bg-[#F5EDD8]" />
              <span className="block h-0.5 w-6 bg-[#F5EDD8]" />
              <span className="block h-0.5 w-4 bg-[#F5EDD8]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#2C0808]">
          {/* Header row */}
          <div className="flex h-20 items-center justify-between border-b border-[#C9A84C]/20 px-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <Image
                src="/spc-logo.svg"
                alt="Грб Српске православне цркве на сајту Манастира Кувеждин"
                width={48}
                height={48}
                className="h-12 w-auto object-contain"
              />
              <div className="border-l border-[#C9A84C]/30 py-2 pl-3">
                <p className="text-xs leading-tight tracking-[0.15em] text-[#F5EDD8] uppercase">
                  Српска Православна Црква
                </p>
                <p className="mt-0.5 text-[10px] tracking-wider text-[#C9A84C] uppercase">
                  Епархија Сремска
                </p>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Затвори мени"
              className="flex h-10 w-10 items-center justify-center text-[#F5EDD8]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col justify-center px-8">
            <div className="h-px w-full bg-[#C9A84C]/20 mb-8" />
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-[#C9A84C]/10 py-5 font-serif text-3xl transition-colors ${
                  item.href === "/galerija"
                    ? "text-[#C9A84C]"
                    : "text-[#F5EDD8] hover:text-[#C9A84C]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/zaduzbinarstvo"
              onClick={() => setOpen(false)}
              className="mt-8 inline-block self-start bg-[#C9A84C] px-8 py-4 text-sm font-medium tracking-wider text-[#1A1209] uppercase transition-colors hover:bg-[#E8C96A]"
            >
              Задужбинарство
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
