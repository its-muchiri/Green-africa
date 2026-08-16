"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "brutalist" | "brutalist-forest";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  loading?: boolean;
  asChild?: boolean;
}

const buttonOnlyProps = new Set([
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "type",
]);

function filterButtonProps(props: Record<string, unknown>): Record<string, unknown> {
  const filtered: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props)) {
    if (!buttonOnlyProps.has(key)) {
      filtered[key] = value;
    }
  }
  return filtered;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  asChild = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-clay text-cream hover:bg-clay/90 active:bg-clay/100 brutalist-border",
    secondary:
      "bg-transparent text-forest border-2 border-forest hover:bg-forest hover:text-cream brutalist-border-forest",
    ghost: "bg-transparent text-forest hover:bg-forest/10",
    brutalist: "bg-ink text-cream hover:bg-ink/90 brutalist-border",
    "brutalist-forest": "bg-forest text-cream hover:bg-forest/90 brutalist-border-forest",
  };

  const sizeStyles = {
    sm: "px-4 py-2 gap-2",
    md: "px-6 py-3 gap-2",
    lg: "px-8 py-4 gap-3 text-base",
    xl: "px-10 py-5 gap-3 text-lg",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    widthStyles,
    className
  );

  if (asChild && React.isValidElement(children)) {
    const childProps = filterButtonProps(props as Record<string, unknown>);
    return React.cloneElement(children as React.ReactElement<any>, {
      className: cn(combinedClassName, (children as React.ReactElement<any>).props.className),
      disabled: disabled || loading,
      ...childProps,
    });
  }

  return (
    <button
      className={combinedClassName}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "brutalist" | "brutalist-forest";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  target?: string;
  rel?: string;
}

export function LinkButton({
  children,
  href,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  target,
  rel,
}: LinkButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

  const variantStyles = {
    primary:
      "bg-clay text-cream hover:bg-clay/90 active:bg-clay/100 brutalist-border",
    secondary:
      "bg-transparent text-forest border-2 border-forest hover:bg-forest hover:text-cream brutalist-border-forest",
    ghost: "bg-transparent text-forest hover:bg-forest/10",
    brutalist: "bg-ink text-cream hover:bg-ink/90 brutalist-border",
    "brutalist-forest": "bg-forest text-cream hover:bg-forest/90 brutalist-border-forest",
  };

  const sizeStyles = {
    sm: "px-4 py-2 gap-2",
    md: "px-6 py-3 gap-2",
    lg: "px-8 py-4 gap-3 text-base",
    xl: "px-10 py-5 gap-3 text-lg",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyles,
        className
      )}
    >
      {children}
    </a>
  );
}