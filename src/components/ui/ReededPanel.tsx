"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ReededPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

export function ReededPanel({
  children,
  className,
  variant = "light",
  padding = "md",
}: ReededPanelProps) {
  const paddingClasses = {
    none: "",
    sm: "p-4 sm:p-6",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-12",
    xl: "p-12 sm:p-16",
  };

  const variantClasses = {
    light: "bg-cream/35 border-white/40",
    dark: "bg-forest/35 border-white/20",
  };

  return (
    <div
      className={cn(
        "reeded-glass relative overflow-hidden",
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
