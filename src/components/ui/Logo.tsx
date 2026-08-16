import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "light" | "dark" | "inline";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  asChild?: boolean;
}

export function Logo({ variant = "default", size = "md", className, asChild = false, ...props }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
    xl: "text-3xl sm:text-4xl",
  };

  const variantClasses = {
    default: "text-jungle-100",
    light: "text-jungle-100",
    dark: "text-jungle-900",
    inline: "text-clay-400",
  };

  const inlineVariant = variant === "inline" ? "inline-flex items-center gap-1" : "flex items-center gap-2";

  const logoContent = (
    <span className={cn(
      inlineVariant,
      "premium-border-jungle px-2 py-1 glass-card",
      sizeClasses[size],
      variantClasses[variant],
      className
    )} {...props}>
      <span className="font-display font-bold tracking-tight-display">GA</span>
      {size !== "sm" && (
        <span className="font-mono text-xs uppercase tracking-widest text-sage-400 hidden sm:inline-block">
          Agri Solutions
        </span>
      )}
    </span>
  );

  if (asChild) {
    return <Link href="/" className="flex items-center" aria-label="Green Africa Agri Solutions - Home">{logoContent}</Link>;
  }

  return logoContent;
}
