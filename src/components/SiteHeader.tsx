import { Link } from "@tanstack/react-router";
import { Building2 } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.68_0.17_240)] to-[oklch(0.5_0.2_255)] text-white shadow-brand">
            <Building2 size={16} />
          </span>
          <span className="font-semibold tracking-tight">Sales<span className="text-brand">Moso</span></span>
        </Link>
        <a href="#audit" className="inline-flex items-center rounded-full bg-gradient-to-r from-[oklch(0.68_0.17_240)] to-[oklch(0.5_0.2_255)] text-white px-4 py-2 text-xs sm:text-sm font-semibold shadow-brand hover:opacity-95 transition">
          Book Strategy Call
        </a>
      </div>
    </header>
  );
}
