"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import CopyButton from "@/components/CopyButton";

type DonationActionsProps = {
  accountNumber: string;
};

const SHOW_QR_LABEL = "\u041f\u0440\u0438\u043a\u0430\u0436\u0438 QR \u043a\u043e\u0434";
const QR_DIALOG_LABEL =
  "\u041d\u0411\u0421 \u0418\u041f\u0421 QR \u043a\u043e\u0434 \u0437\u0430 \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u0459\u043d\u0438 \u043f\u0440\u0438\u043b\u043e\u0433";
const CLOSE_QR_MODAL_LABEL =
  "\u0417\u0430\u0442\u0432\u043e\u0440\u0438 QR \u043c\u043e\u0434\u0430\u043b";
const CLOSE_QR_TEXT = "\u0417\u0430\u0442\u0432\u043e\u0440\u0438";
const QR_IMAGE_ALT =
  "\u041d\u0411\u0421 \u0418\u041f\u0421 QR \u043a\u043e\u0434 \u0437\u0430 \u0443\u043f\u043b\u0430\u0442\u0443 \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u0459\u043d\u043e\u0433 \u043f\u0440\u0438\u043b\u043e\u0433\u0430";
const QR_HELP_TEXT =
  "\u0421\u043a\u0435\u043d\u0438\u0440\u0430\u0458\u0442\u0435 QR \u043a\u043e\u0434 \u0443 \u043c\u043e\u0431\u0438\u043b\u043d\u043e\u0458 \u0430\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0458\u0438 \u0431\u0430\u043d\u043a\u0435.";

function QrCodeIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 122.88 122.7"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M0.18 0H44.81V44.45H0.18V0ZM111.5 111.5H122.88V122.7H111.5V111.5ZM89.63 111.48H101.01V122.15H89.63H89.62H78.25V100.33H89.27V89.27H100.48V67.22H111.86V78.06H122.7V89.26H111.86V100.46H100.65H100.48H89.63V111.48ZM55.84 89.09H66.86V77.89H56.2V66.69H66.86V55.49H56.02V66.69H44.63V55.49H55.83V22.23H67.21V55.48H78.23V66.68H89.07V55.48H100.45V66.68H89.63V77.88H78.25V99.93H67.22V122.16H55.84V89.09ZM111.31 55.48H122.69V66.68H111.31V55.48ZM22.41 55.48H33.79V66.68H22.41V55.48ZM0.18 55.48H11.56V66.68H0.18V55.48ZM55.84 0H67.22V11.2H55.84V0ZM0 78.06H44.63V122.51H0V78.06ZM10.84 88.86H33.79V111.72H10.84V88.86ZM78.06 0H122.69V44.45H78.06V0ZM88.91 10.8H111.86V33.66H88.91V10.8ZM11.02 10.8H33.97V33.66H11.02V10.8Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

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
      <div className="w-full lg:w-auto">
        <div className="flex flex-col items-stretch gap-3 sm:flex-row">
          <Button
            variant="primary"
            fullWidth
            className="sm:w-[210px]"
            icon={<QrCodeIcon />}
            aria-expanded={isQrOpen}
            aria-controls={qrModalId}
            onClick={() => setIsQrOpen(true)}
          >
            {SHOW_QR_LABEL}
          </Button>
          <CopyButton
            text={accountNumber}
            variant="secondary"
            className="w-full sm:w-[210px]"
          />
        </div>
      </div>

      {isQrOpen ? (
        <div
          id={qrModalId}
          className="fixed inset-0 z-[120] bg-[#1A0404]/70 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={QR_DIALOG_LABEL}
          onClick={() => setIsQrOpen(false)}
        >
          <div className="mx-auto flex h-full w-full max-w-lg items-center justify-center">
            <div
              className="w-full border border-[#6B1A1A]/15 bg-[#FAF7F2] p-5 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex justify-end">
                <Button
                  variant="secondary"
                  className="px-4 py-2 text-[11px] font-medium tracking-[0.14em]"
                  onClick={() => setIsQrOpen(false)}
                  aria-label={CLOSE_QR_MODAL_LABEL}
                >
                  {CLOSE_QR_TEXT}
                </Button>
              </div>
              <div className="mx-auto w-full max-w-[280px]">
                <Image
                  src="/NBSIPSQR.png"
                  alt={QR_IMAGE_ALT}
                  width={280}
                  height={280}
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-4 text-center text-sm text-[#6B5C4C]">
                {QR_HELP_TEXT}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
