"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type HistoryImageCard = {
  src: string;
  caption: string;
  alt: string;
  imageFit?: "cover" | "contain";
  imageClassName?: string;
  figureClassName?: string;
  aspectClassName?: string;
};

type HistoryImageGroupProps = {
  images: HistoryImageCard[];
  className: string;
};

export default function HistoryImageGroup({
  images,
  className,
}: HistoryImageGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex === null ? null : images[selectedIndex] ?? null;

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
        return;
      }

      if (images.length > 1 && event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? current : (current + 1) % images.length,
        );
      }

      if (images.length > 1 && event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null ? current : (current - 1 + images.length) % images.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, selectedIndex]);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? current : (current + 1) % images.length,
    );
  };

  return (
    <>
      <div className={className}>
        {images.map((image, index) => {
          const fitClass =
            image.imageFit === "contain" ? "object-contain p-4" : "object-cover";

          return (
            <figure
              key={image.src}
              className={`overflow-hidden border border-[#6B1A1A]/10 bg-[#FBF7EE] ${image.figureClassName ?? ""}`}
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="block w-full text-left"
              >
                <div
                  className={`relative aspect-[4/3] bg-[#F3EEE4] ${image.aspectClassName ?? ""}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={`${fitClass} ${image.imageClassName ?? ""}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </button>
              <figcaption className="border-t border-[#6B1A1A]/10 px-4 py-3 text-[11px] leading-5 tracking-[0.08em] text-[#6B5C4C] uppercase">
                {image.caption}
              </figcaption>
            </figure>
          );
        })}
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1209]/85 p-4"
          onClick={() => setSelectedIndex(null)}
          role="presentation"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden border border-[#C9A84C]/30 bg-[#FBF7EE] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.alt}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute top-3 right-3 z-10 bg-[#2C0808]/85 px-3 py-1 text-xs tracking-[0.18em] text-[#F5EDD8] uppercase"
            >
              Затвори
            </button>
            <div className="flex max-h-[90vh] flex-col">
              <div className="relative flex min-h-[320px] flex-1 items-center justify-center bg-[#F3EEE4] p-4 md:p-8">
                {images.length > 1 ? (
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="absolute left-3 top-1/2 z-10 -translate-y-1/2 bg-[#2C0808]/85 px-3 py-4 text-xl text-[#F5EDD8] transition-colors hover:bg-[#6B1A1A] md:left-5"
                    aria-label="Претходна фотографија"
                  >
                    ‹
                  </button>
                ) : null}

                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1600}
                  height={1200}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />

                {images.length > 1 ? (
                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-3 top-1/2 z-10 -translate-y-1/2 bg-[#2C0808]/85 px-3 py-4 text-xl text-[#F5EDD8] transition-colors hover:bg-[#6B1A1A] md:right-5"
                    aria-label="Следећа фотографија"
                  >
                    ›
                  </button>
                ) : null}
              </div>
              <div className="border-t border-[#6B1A1A]/10 px-5 py-4 text-xs leading-6 tracking-[0.08em] text-[#6B5C4C] uppercase">
                {selectedImage.caption}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
