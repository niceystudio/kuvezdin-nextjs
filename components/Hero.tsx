"use client";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import DesktopDropdown from "./DesktopDropdown";
import RussianOrthodoxCross from "./RussianOrthodoxCross";

export default function Hero() {
  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-[#C9A84C]/20 bg-[#4A0E0E]">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            <a href="#pocetna" className="flex items-center gap-3">
              <Image
                src="/spc-logo.svg"
                alt="Српска Православна Црква"
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
            </a>

            <div className="hidden items-center gap-4 lg:flex">
              {[
                { href: "#pocetna", label: "Почетна" },
                { href: "/ispovest", label: "О исповести" },
                { href: "/psaltir", label: "О псалтиру" },
                { href: "/istorijat", label: "Историјат" },
                { href: "/galerija", label: "Галерија" },
                { href: "/zakon-boziji", label: "Закон Божији" },
              ].map((item, i) => (
                <span key={item.href} className="flex items-center gap-4">
                  {i > 0 && <div className="h-3 w-px bg-[#C9A84C]/30" />}
                  <a
                    href={item.href}
                    className="text-sm tracking-wide text-white/90 uppercase transition-colors hover:text-[#C9A84C]"
                  >
                    {item.label}
                  </a>
                </span>
              ))}
              <div className="h-3 w-px bg-[#C9A84C]/30" />
              <DesktopDropdown variant="dark" />
              <div className="h-3 w-px bg-[#C9A84C]/30" />
              <a
                href="/zaduzbinarstvo"
                className="ml-2 bg-[#C9A84C] px-5 py-2 text-xs tracking-wider text-[#1A1209] uppercase transition-colors hover:bg-[#E8C96A]"
              >
                Задужбинарство
              </a>
            </div>

            <MobileMenu />
          </div>
        </div>
      </nav>

      <section className="grid min-h-[70vh] max-h-[750px] md:grid-cols-2">
        <div className="relative flex flex-col justify-center overflow-hidden bg-[#F5EDD8] px-8 py-16 md:px-12 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "url(/ornament-2.svg)",
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute top-[15%] right-0 bottom-[15%] z-10 hidden w-px md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #C9A84C 30%, #C9A84C 70%, transparent)",
            }}
          />
          <div className="relative z-10 max-w-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <RussianOrthodoxCross size={24} />
              <div className="h-px w-8 bg-[#C9A84C]" />
            </div>
            <h1 className="mb-6 font-serif text-5xl leading-none text-[#6B1A1A] md:text-6xl lg:text-7xl">
              Манастир
              <br />
              Кувеждин
            </h1>
            <div className="mb-7 flex items-center gap-3">
              <div className="h-px max-w-[420px] flex-1 bg-[#C9A84C]/30" />
            </div>
            <p className="mb-10 text-base leading-relaxed text-[#4A3C2A]">
              Драга браћо и сестре, на овој страници налазе се информације о
              распореду богослужења и упутство онима који желе да присуствују
              молитвама у нашој светој обитељи.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="bg-[#C9A84C] px-6 py-3 text-sm tracking-wider text-[#1A1209] uppercase transition-colors hover:bg-[#E8C96A]"
              >
                Контакт
              </a>
              <a
                href="/istorijat"
                className="border border-[#6B1A1A] bg-transparent px-6 py-3 text-sm tracking-wider text-[#6B1A1A] uppercase transition-colors hover:bg-[#6B1A1A]/5"
              >
                Историјат
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[400px] md:min-h-0">
          <Image
            src="/monastery-1.svg"
            alt="Манастир Кувеждин"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-[#140404]/80 to-transparent px-6 py-5">
            <p className="text-xs tracking-[0.15em] text-[#F5EDD8] uppercase">
              Манастир Кувеждин · Фрушка Гора
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
