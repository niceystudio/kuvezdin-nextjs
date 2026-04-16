"use client";

import { useState } from "react";

const COPY_LABEL = "\u041a\u043e\u043f\u0438\u0440\u0430\u0458 \u0431\u0440\u043e\u0458 \u0440\u0430\u0447\u0443\u043d\u0430";
const COPIED_LABEL = "\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u043a\u043e\u043f\u0438\u0440\u0430\u043d\u043e";

type CopyButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function CopyButton({
  text,
  variant = "primary",
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const buttonClassName =
    variant === "secondary"
      ? "btn-secondary inline-flex items-center justify-center gap-2 whitespace-nowrap px-5 py-3 text-xs font-medium tracking-wider"
      : "btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap px-5 py-3 text-xs font-medium tracking-wider";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      className={className ? `${buttonClassName} ${className}` : buttonClassName}
      onClick={handleCopy}
      disabled={copied}
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7L6 11L12 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{COPIED_LABEL}</span>
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect
              x="4"
              y="4"
              width="8"
              height="8"
              rx="1"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M2 10V2H10"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
          <span>{COPY_LABEL}</span>
        </>
      )}
    </button>
  );
}
