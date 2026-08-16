"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ServiceIndexProps {
  number: string;
  title: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  align?: "left" | "center" | "right";
}

export function ServiceIndex({
  number,
  title,
  className,
  size = "lg",
  align = "left",
}: ServiceIndexProps) {
  const sizeStyles = {
    sm: "text-4xl sm:text-5xl",
    md: "text-6xl sm:text-7xl",
    lg: "text-7xl sm:text-8xl md:text-9xl",
    xl: "text-8xl sm:text-9xl md:text-[120px] lg:text-[140px]",
  };

  const titleStyles = {
    sm: "text-lg sm:text-xl",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl md:text-4xl",
    xl: "text-3xl sm:text-4xl md:text-5xl",
  };

  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={cn("flex flex-col gap-1", alignStyles[align], className)}>
      <span
        className={cn(
          "font-display font-bold tracking-tight-display text-forest line-height-tight select-none",
          sizeStyles[size]
        )}
        aria-hidden="true"
      >
        {number}
      </span>
      <h3
        className={cn(
          "font-display font-semibold tracking-tight-display-sm text-ink line-height-snug max-w-prose",
          titleStyles[size]
        )}
      >
        {title}
      </h3>
    </div>
  );
}
