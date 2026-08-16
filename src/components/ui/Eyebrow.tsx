"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "numbered" | "category";
  number?: string;
}

export function Eyebrow({
  children,
  className,
  variant = "default",
  number,
}: EyebrowProps) {
  const variantStyles = {
    default:
      "font-mono text-xs sm:text-sm uppercase tracking-widest text-moss",
    numbered:
      "font-mono text-xs sm:text-sm uppercase tracking-widest text-moss flex items-center gap-2",
category:
      "font-mono text-xs uppercase tracking-widest text-sage-400 bg-jungle-900/50 px-3 py-1.5 premium-border-subtle",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center",
        variantStyles[variant],
        className
      )}
    >
      {number && variant === "numbered" && (
        <span className="font-display text-lg sm:text-xl font-bold text-forest tracking-tight-display">
          {number}
        </span>
      )}
      {children}
    </span>
  );
}
