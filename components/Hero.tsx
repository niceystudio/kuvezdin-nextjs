"use client";
import Image from "next/image";
import SiteNav from "./SiteNav";
import RussianOrthodoxCross from "./RussianOrthodoxCross";

export default function Hero() {
  return (
    <>
      <SiteNav />

      <section className="grid min-h-[70vh] md:max-h-[750px] md:grid-cols-2">
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
            <h1 className="mb-6 font-serif text-[#6B1A1A]">
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
          </div>
        </div>

        <div className="relative min-h-[400px] md:min-h-0">
          <Image
            src="/P1010068.webp"
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
