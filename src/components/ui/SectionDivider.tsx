"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface SectionDividerProps {
  className?: string;
  variant?: "light" | "dark" | "clay";
  thickness?: "hairline" | "rule" | "bold";
  length?: "full" | "half" | "quarter" | "short";
  align?: "left" | "center" | "right";
}

export function SectionDivider({
  className,
  variant = "light",
  thickness = "hairline",
  length = "full",
  align = "left",
}: SectionDividerProps) {
  const variantStyles = {
    light: "bg-gradient-to-r from-transparent via-sage/30 to-transparent",
    dark: "bg-gradient-to-r from-transparent via-white/20 to-transparent",
    clay: "bg-gradient-to-r from-transparent via-clay to-transparent",
  };

  const thicknessStyles = {
    hairline: "h-[1px]",
    rule: "h-[2px]",
    bold: "h-[4px]",
  };

  const lengthStyles = {
    full: "w-full",
    half: "w-1/2",
    quarter: "w-1/4",
    short: "w-24 sm:w-32",
  };

  const alignStyles = {
    left: "mx-0",
    center: "mx-auto",
    right: "ml-auto mr-0",
  };

  return (
    <hr
      className={cn(
        "border-none",
        variantStyles[variant],
        thicknessStyles[thickness],
        lengthStyles[length],
        alignStyles[align],
        className
      )}
      aria-hidden="true"
    />
  );
}
