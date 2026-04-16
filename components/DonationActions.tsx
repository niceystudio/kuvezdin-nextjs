"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import CopyButton from "@/components/CopyButton";

type DonationActionsProps = {
  accountNumber: string;
};

export default function DonationActions({
  accountNumber,
}: DonationActionsProps) {
  const [isQrOpen, setIsQrOpen] = useState(false);
  const qrModalId = useId();

  useEffect(() => {
    if (!isQrOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsQrOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isQrOpen]);

  return (
    <>
      <div className="w-full max-w-sm">
        <div className="flex flex-nowrap gap-3">
        <button
          type="button"
          className="btn-primary min-w-0 flex-1 text-center text-xs font-medium tracking-wider"
          aria-expanded={isQrOpen}
          aria-controls={qrModalId}
          onClick={() => setIsQrOpen(true)}
        >
          Прикажи QR код
        </button>
        <CopyButton
          text={accountNumber}
          variant="secondary"
          className="min-w-0 flex-1"
        />
      </div>
      </div>

      {isQrOpen ? (
        <div
          id={qrModalId}
          className="fixed inset-0 z-[120] bg-[#1A0404]/70 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="NBS IPS QR kod za dobrovoljni prilog"
          onClick={() => setIsQrOpen(false)}
        >
          <div className="mx-auto flex h-full w-full max-w-lg items-center justify-center">
            <div
              className="w-full border border-[#6B1A1A]/15 bg-[#FAF7F2] p-5 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsQrOpen(false)}
                  className="btn-secondary px-4 py-2 text-[11px] font-medium tracking-[0.14em]"
                  aria-label="Zatvori QR modal"
                >
                  Затвори
                </button>
              </div>
              <div className="mx-auto w-full max-w-[280px]">
                <Image
                  src="/NBSIPSQR.png"
                  alt="NBS IPS QR kod za uplatu dobrovoljnog priloga"
                  width={280}
                  height={280}
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-4 text-center text-sm text-[#6B5C4C]">
                Скенирајте QR код у мобилној апликацији банке.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
