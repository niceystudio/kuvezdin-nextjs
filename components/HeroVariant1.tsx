"use client";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import DesktopDropdown from "./DesktopDropdown";
import RussianOrthodoxCross from "./RussianOrthodoxCross";

interface Props {
  selected: 1 | 2;
  setSelected: (v: 1 | 2) => void;
}

export default function HeroVariant1({ selected, setSelected }: Props) {
  return (
    <>
      {/* Top Navigation */}
      <nav className="sticky top-0 z-40 bg-[#4A0E0E] border-b border-[#C9A84C]/20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3">
              <Image src="/spc-logo.svg" alt="Српска Православна Црква" width={56} height={56} className="h-14 w-auto object-contain" />
              <div className="border-l border-[#C9A84C]/30 pl-3 py-2">
                <p className="text-xs text-[#F5EDD8] tracking-[0.15em] uppercase leading-tight">Српска Православна Црква</p>
                <p className="text-[10px] text-[#C9A84C] tracking-wider uppercase mt-0.5">Епархија Сремска</p>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-4">
              {[
                { href: "#pocetna", label: "Почетна" },
                { href: "#ispovest", label: "О исповести" },
                { href: "#psaltir", label: "О псалтиру" },
                { href: "#istorijat", label: "Историјат" },
                { href: "#galerija", label: "Галерија" },
                { href: "#zakon", label: "Закон Божији" },
              ].map((item, i) => (
                <span key={item.href} className="flex items-center gap-4">
                  {i > 0 && <div className="h-3 w-px bg-[#C9A84C]/30"></div>}
                  <a href={item.href} className="text-sm text-white/90 hover:text-[#C9A84C] transition-colors tracking-wide uppercase">{item.label}</a>
                </span>
              ))}
              <div className="h-3 w-px bg-[#C9A84C]/30"></div>
              <DesktopDropdown variant="dark" />
              <div className="h-3 w-px bg-[#C9A84C]/30"></div>
              <a href="#zaduzbinastvo" className="ml-2 px-5 py-2 bg-[#C9A84C] text-[#1A1209] text-xs tracking-wider uppercase hover:bg-[#E8C96A] transition-colors font-medium">
                Задужбинарство
              </a>
            </div>

            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Screen */}
      <section className="grid md:grid-cols-2 min-h-[70vh] max-h-[750px]">
        {/* Left Side */}
        <div className="bg-[#F5EDD8] flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `url(/ornament-2.svg)`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="hidden md:block absolute right-0 top-[15%] bottom-[15%] w-px z-10"
            style={{ background: "linear-gradient(to bottom, transparent, #C9A84C 30%, #C9A84C 70%, transparent)" }}
          ></div>
          <div className="max-w-xl relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A84C]"></div>
              <RussianOrthodoxCross size={24} />
              <div className="h-px w-8 bg-[#C9A84C]"></div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#6B1A1A] font-serif leading-none mb-6">
              Манастир<br />Кувеждин
            </h1>
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px flex-1 max-w-[420px] bg-[#C9A84C]/30"></div>
            </div>
            <p className="text-base text-[#4A3C2A] leading-relaxed mb-10">
              Драга браћо и сестре, на овој страници налазе се информације о распореду богослужења и упутство онима који желе да присуствују молитвама у нашој светој обитељи.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#kontakt" className="px-6 py-3 bg-[#C9A84C] text-[#1A1209] text-sm tracking-wider uppercase hover:bg-[#E8C96A] transition-colors">Контакт</a>
              <a href="#istorijat" className="px-6 py-3 bg-transparent text-[#6B1A1A] text-sm tracking-wider uppercase border border-[#6B1A1A] hover:bg-[#6B1A1A]/5 transition-colors">Историјат</a>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative min-h-[400px] md:min-h-0">
          <Image src="/monastery-1.svg" alt="Манастир Кувеждин" fill className="object-cover" priority />
          <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-[#140404]/80 to-transparent">
            <p className="text-xs text-[#F5EDD8] tracking-[0.15em] uppercase">Манастир Кувеждин · Фрушка Гора</p>
          </div>
          <div className="absolute bottom-6 right-6 flex gap-2 z-20">
            <button onClick={() => setSelected(1)} className={`px-4 py-2 text-xs font-medium rounded transition-all ${selected === 1 ? "bg-[#6B1A1A] text-[#F5EDD8]" : "bg-white/90 text-[#6B1A1A] border border-[#6B1A1A]/20 hover:bg-white"}`}>Варијанта 1</button>
            <button onClick={() => setSelected(2)} className={`px-4 py-2 text-xs font-medium rounded transition-all ${selected === 2 ? "bg-[#6B1A1A] text-[#F5EDD8]" : "bg-white/90 text-[#6B1A1A] border border-[#6B1A1A]/20 hover:bg-white"}`}>Варијанта 2</button>
          </div>
        </div>
      </section>
    </>
  );
}
