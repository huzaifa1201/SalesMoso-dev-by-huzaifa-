import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function CTAButton({
  children = "Book Your Free Strategy Call",
  href = "#audit",
  variant = "primary",
}: {
  children?: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "white";
}) {
  if (variant === "ghost") {
    return (
      <a href={href} className="inline-flex items-center gap-2 rounded-full brand-border px-6 py-3 text-sm font-semibold text-brand-deep hover:bg-secondary transition">
        {children} <ArrowRight size={16} />
      </a>
    );
  }
  if (variant === "white") {
    return (
      <a href={href} className="group inline-flex items-center gap-2 rounded-full bg-white text-brand-deep px-7 py-3.5 text-sm font-semibold shadow-card hover:shadow-elegant transition-all">
        {children}
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </a>
    );
  }
  return (
    <a href={href} className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.68_0.17_240)] to-[oklch(0.5_0.2_255)] text-white px-7 py-3.5 text-sm font-semibold shadow-brand hover:opacity-95 transition-all">
      {children}
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </a>
  );
}
