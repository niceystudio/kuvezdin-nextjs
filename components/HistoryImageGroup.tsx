"use client";

import { useState } from "react";
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
  const [selectedImage, setSelectedImage] = useState<HistoryImageCard | null>(null);

  return (
    <>
      <div className={className}>
        {images.map((image) => {
          const fitClass =
            image.imageFit === "contain"
              ? "object-contain p-4"
              : "object-cover";

          return (
            <figure
              key={image.src}
              className={`overflow-hidden border border-[#6B1A1A]/10 bg-[#FBF7EE] ${image.figureClassName ?? ""}`}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(image)}
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
          onClick={() => setSelectedImage(null)}
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
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 bg-[#2C0808]/85 px-3 py-1 text-xs tracking-[0.18em] text-[#F5EDD8] uppercase"
            >
              Затвори
            </button>
            <div className="flex max-h-[90vh] flex-col">
              <div className="relative flex min-h-[320px] flex-1 items-center justify-center bg-[#F3EEE4] p-4 md:p-8">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1600}
                  height={1200}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
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
