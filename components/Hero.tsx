"use client";
import Image from "next/image";
import SiteNav from "./SiteNav";
import RussianOrthodoxCross from "./RussianOrthodoxCross";

export default function Hero() {
  return (
    <>
      <SiteNav />

      <section id="pocetna" className="md:hidden">
        <div className="relative flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-[#2C0808] px-5 pb-8 pt-12">
          <Image
            src="/P1010068.webp"
            alt="Манастир Кувеждин, поглед на манастирски комплекс"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#140404]/35 via-[#140404]/20 to-[#140404]/88" />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-[0.08]"
            style={{
              backgroundImage: "url(/ornament-2.svg)",
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
              backgroundPosition: "center top",
            }}
          />

          <div className="relative z-10 w-full">
            <div className="mb-5 flex items-center gap-3 text-[#C9A84C]">
              <div className="h-px w-7 bg-current" />
              <RussianOrthodoxCross size={20} />
              <div className="h-px w-7 bg-current" />
            </div>

            <h1 className="mb-4 font-serif text-[#F5EDD8]">
              Манастир
              <br />
              Кувеждин
            </h1>

            <div className="mb-5 h-px w-full max-w-[220px] bg-[#C9A84C]/40" />

            <p className="max-w-md text-base leading-relaxed text-[#F5EDD8]/92">
              Драга браћо и сестре, овде се налазе информације о распореду
              богослужења и упутства за оне који желе да присуствују молитвама
              у нашој светој обитељи.
            </p>

            <div className="mt-6 flex justify-center">
              <span
                aria-hidden="true"
                className="scroll-hint inline-flex items-center justify-center text-[#F5EDD8]/60"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6.5L8 10.5L12 6.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden min-h-[70vh] md:grid md:max-h-[750px] md:grid-cols-2">
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
            alt="Манастир Кувеждин, поглед на манастирски комплекс"
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
