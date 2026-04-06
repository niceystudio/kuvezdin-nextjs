"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
  sectionId: string;
  sectionTitle: string;
};

type GallerySection = {
  id: string;
  title: string;
  images: GalleryImage[];
};

type GalleryBrowserProps = {
  sections: GallerySection[];
};

export default function GalleryBrowser({ sections }: GalleryBrowserProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const flatImages = useMemo(
    () => sections.flatMap((section) => section.images),
    [sections],
  );

  const selectedImage =
    selectedIndex === null ? null : flatImages[selectedIndex] ?? null;
  const currentIndex = selectedIndex ?? 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
        return;
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? current : (current + 1) % flatImages.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? current
            : (current - 1 + flatImages.length) % flatImages.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [flatImages.length, selectedIndex]);

  return (
    <>
      <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="border-l border-[#C9A84C]/30 pl-5">
            <p className="text-[10px] tracking-[0.24em] text-[#8D6A2B] uppercase">
              Раздобља
            </p>
            <nav className="mt-5 space-y-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`relative block px-4 py-3 text-sm leading-6 transition-colors ${
                    activeSection === section.id
                      ? "bg-[#6B1A1A] text-[#F5EDD8]"
                      : "text-[#4A3C2A] hover:bg-[#FBF7EE] hover:text-[#6B1A1A]"
                  }`}
                >
                  {activeSection === section.id ? (
                    <span className="absolute left-0 top-0 h-full w-1 bg-[#C9A84C]" />
                  ) : null}
                  <span className="block font-serif text-lg leading-6">
                    {section.title}
                  </span>
                  <span className="block text-[11px] tracking-[0.16em] uppercase opacity-70">
                    {section.images.length} фотографија
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-14">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-b border-[#6B1A1A]/10 pb-14 last:border-b-0"
            >
              <div className="mb-8 flex items-baseline gap-4">
                <span className="font-serif text-5xl leading-none text-[#C9A84C]/50">
                  {section.title.match(/^\d/) ? section.title.slice(0, 4) : "I"}
                </span>
                <div>
                  <h2 className="font-serif text-4xl text-[#6B1A1A]">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-[11px] tracking-[0.18em] text-[#8D6A2B] uppercase">
                    {section.images.length} фотографија
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                {section.images.map((image) => {
                  const flatIndex = flatImages.findIndex(
                    (flatImage) => flatImage.src === image.src,
                  );

                  return (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setSelectedIndex(flatIndex)}
                      className="group overflow-hidden border border-[#6B1A1A]/10 bg-[#FBF7EE] text-left"
                    >
                      <div className="relative aspect-[4/3] bg-[#F3EEE4]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1209]/90 p-4"
          onClick={() => setSelectedIndex(null)}
          role="presentation"
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-7xl flex-col overflow-hidden border border-[#C9A84C]/30 bg-[#FBF7EE] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.alt}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute top-3 right-3 z-20 bg-[#2C0808]/90 px-3 py-1 text-xs tracking-[0.18em] text-[#F5EDD8] uppercase"
            >
              Затвори
            </button>

            <div className="relative flex min-h-[60vh] items-center justify-center bg-[#F3EEE4] p-6 md:p-10">
              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(
                    (currentIndex - 1 + flatImages.length) % flatImages.length,
                  )
                }
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 bg-[#2C0808]/85 px-3 py-4 text-xl text-[#F5EDD8] transition-colors hover:bg-[#6B1A1A] md:left-5"
                aria-label="Претходна фотографија"
              >
                ‹
              </button>

              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1800}
                height={1200}
                className="max-h-[76vh] w-auto max-w-full object-contain"
              />

              <button
                type="button"
                onClick={() =>
                  setSelectedIndex((currentIndex + 1) % flatImages.length)
                }
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 bg-[#2C0808]/85 px-3 py-4 text-xl text-[#F5EDD8] transition-colors hover:bg-[#6B1A1A] md:right-5"
                aria-label="Следећа фотографија"
              >
                ›
              </button>
            </div>

            <div className="border-t border-[#6B1A1A]/10 px-5 py-4">
              <p className="text-[10px] tracking-[0.22em] text-[#8D6A2B] uppercase">
                {selectedImage.sectionTitle}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#4A3C2A]">
                {selectedImage.label}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
