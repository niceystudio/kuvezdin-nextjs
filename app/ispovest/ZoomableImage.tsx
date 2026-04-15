"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";

type ZoomableImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
  fill?: boolean;
  width?: number;
  height?: number;
  modalWidth: number;
  modalHeight: number;
  mobileOnly?: boolean;
};

export default function ZoomableImage({
  src,
  alt,
  className,
  imageClassName,
  children,
  fill = false,
  width,
  height,
  modalWidth,
  modalHeight,
  mobileOnly = false,
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const handleOpen = () => {
    if (mobileOnly && typeof window !== "undefined" && window.innerWidth >= 768) {
      return;
    }

    setIsOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={`block w-full border-0 bg-transparent p-0 ${className ?? ""}`}
        aria-label={`Uvećaj fotografiju: ${alt}`}
      >
        {fill ? (
          <Image src={src} alt={alt} fill className={imageClassName} />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width ?? modalWidth}
            height={height ?? modalHeight}
            className={imageClassName}
          />
        )}
        {children}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[120] bg-[#1A0404]/95 px-4 py-6">
          <div className="mx-auto flex h-full w-full max-w-5xl flex-col">
            <div className="mb-4 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-11 min-w-11 items-center justify-center border border-[#F5EDD8]/30 bg-[#2C0808]/70 px-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#F5EDD8]"
                aria-label="Zatvori uvećanu fotografiju"
              >
                Zatvori
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <Image
                src={src}
                alt={alt}
                width={modalWidth}
                height={modalHeight}
                className="h-auto max-h-[80vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
