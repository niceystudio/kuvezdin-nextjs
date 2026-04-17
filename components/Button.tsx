"use client";

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";

type ButtonVariant = "primary" | "primary-sm" | "secondary";
type ButtonIconPosition = "left" | "right";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
  fullWidth?: boolean;
};

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    "btn-primary inline-flex min-w-0 items-center justify-center gap-2 px-4 py-3 text-center text-xs font-medium leading-tight tracking-wider sm:px-5",
  "primary-sm":
    "btn-primary-sm inline-flex min-w-0 items-center justify-center gap-2 px-4 py-2 text-center text-[11px] font-medium leading-tight tracking-[0.14em]",
  secondary:
    "btn-secondary inline-flex min-w-0 items-center justify-center gap-2 px-4 py-3 text-center text-xs font-medium leading-tight tracking-wider sm:px-5",
};

function joinClassNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function getButtonClassName({
  variant = "primary",
  fullWidth = false,
  className,
}: Pick<ButtonProps, "variant" | "fullWidth" | "className">) {
  return joinClassNames(
    variantClassNames[variant],
    fullWidth && "w-full",
    className,
  );
}

export default function Button({
  variant = "primary",
  icon,
  iconPosition = "left",
  fullWidth = false,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const content = (
    <>
      {icon && iconPosition === "left" ? (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span className="min-w-0 whitespace-normal">{children}</span>
      {icon && iconPosition === "right" ? (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </>
  );

  return (
    <button
      type={type}
      className={getButtonClassName({ variant, fullWidth, className })}
      {...props}
    >
      {content}
    </button>
  );
}

type ButtonLinkProps = LinkProps & {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon,
  iconPosition = "left",
  fullWidth = false,
  className,
  onClick,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={getButtonClassName({ variant, fullWidth, className })}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === "left" ? (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span className="min-w-0 whitespace-normal">{children}</span>
      {icon && iconPosition === "right" ? (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </Link>
  );
}

type ButtonAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
  fullWidth?: boolean;
};

export function ButtonAnchor({
  children,
  variant = "primary",
  icon,
  iconPosition = "left",
  fullWidth = false,
  className,
  ...props
}: ButtonAnchorProps) {
  return (
    <a
      className={getButtonClassName({ variant, fullWidth, className })}
      {...props}
    >
      {icon && iconPosition === "left" ? (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span className="min-w-0 whitespace-normal">{children}</span>
      {icon && iconPosition === "right" ? (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </a>
  );
}
