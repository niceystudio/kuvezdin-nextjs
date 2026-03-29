"use client";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import DesktopDropdown from "./DesktopDropdown";

interface Props {
  selected: 1 | 2;
  setSelected: (v: 1 | 2) => void;
}

export default function HeroVariant2({ selected, setSelected }: Props) {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[800px] flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/monastery-2.svg" alt="Манастир Кувеждин" fill className="object-cover" style={{ objectPosition: "60% center" }} priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
      </div>

      {/* Mobile Top Bar */}
      <div className="lg:hidden relative z-20 bg-[#4A0E0E]/95 backdrop-blur-sm border-b border-[#C9A84C]/20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3">
              <Image src="/spc-logo.svg" alt="СПЦ" width={48} height={48} className="h-12 w-auto object-contain" />
              <div className="border-l border-[#C9A84C]/30 pl-3 py-2">
                <p className="text-xs text-[#F5EDD8] tracking-[0.15em] uppercase leading-tight">СПЦ</p>
                <p className="text-[10px] text-[#C9A84C] tracking-wider uppercase mt-0.5">Сремска</p>
              </div>
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#C9A84C]"></div>
                <span className="text-xs text-[#C9A84C] tracking-[0.2em] uppercase">Српска Православна Црква · Епархија Сремска</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif mb-8 leading-tight">
                Манастир<br />Кувеждин
              </h1>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
                Драга браћо и сестре, на овој страници налазе се информације о распореду богослужења и упутство онима који желе да присуствују молитвама у нашој светој обитељи.
              </p>
              <div className="flex flex-wrap items-start gap-3">
                <a href="#kontakt" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-[#1A1209] text-sm tracking-wider uppercase hover:bg-[#E8C96A] transition-colors">
                  <span>Контакт</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l6-6M11 11V6H6" /></svg>
                </a>
                <a href="#istorijat" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white text-sm tracking-wider uppercase border border-white/50 hover:bg-white/10 hover:border-white transition-colors">
                  <span>Историјат</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gold Navigation Bar - Desktop */}
        <div className="hidden lg:block bg-[#C9A84C]/95 backdrop-blur-sm border-t border-[#6B1A1A]/20">
          <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
            <nav className="flex items-center justify-center h-16 overflow-x-auto">
              <div className="flex items-center gap-6">
                {[
                  { href: "#pocetna", label: "ПОЧЕТНА", active: true },
                  { href: "#ispovest", label: "О ИСПОВЕСТИ" },
                  { href: "#psaltir", label: "О ПСАЛТИРУ" },
                  { href: "#istorijat", label: "ИСТОРИЈАТ" },
                  { href: "#galerija", label: "ГАЛЕРИЈА" },
                  { href: "#zakon", label: "ЗАКОН БОЖИЈИ" },
                ].map((item) => (
                  <a key={item.href} href={item.href} className={`text-xs whitespace-nowrap transition-colors tracking-wide ${item.active ? "text-[#2C0808] font-semibold" : "text-[#6B1A1A] hover:text-[#2C0808]"}`}>
                    {item.label}
                  </a>
                ))}
                <DesktopDropdown variant="gold" />
                <a href="#zaduzbinastvo" className="ml-4 px-6 py-2.5 bg-[#6B1A1A] text-[#F5EDD8] text-xs tracking-wider uppercase hover:bg-[#8A2222] transition-colors font-medium rounded-sm">
                  ЗАДУЖБИНАРСТВО
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Variant Toggle */}
        <div className="absolute bottom-6 right-6 flex gap-2 z-20">
          <button onClick={() => setSelected(1)} className={`px-4 py-2 text-xs font-medium rounded transition-all ${selected === 1 ? "bg-[#6B1A1A] text-[#F5EDD8]" : "bg-white/90 text-[#6B1A1A] border border-[#6B1A1A]/20 hover:bg-white"}`}>Варијанта 1</button>
          <button onClick={() => setSelected(2)} className={`px-4 py-2 text-xs font-medium rounded transition-all ${selected === 2 ? "bg-[#6B1A1A] text-[#F5EDD8]" : "bg-white/90 text-[#6B1A1A] border border-[#6B1A1A]/20 hover:bg-white"}`}>Варијанта 2</button>
        </div>
      </div>
    </section>
  );
}
