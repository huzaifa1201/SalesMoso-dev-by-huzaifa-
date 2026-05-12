import { Link } from "@tanstack/react-router";
import { Building2 } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.68_0.17_240)] to-[oklch(0.5_0.2_255)] text-white">
              <Building2 size={16} />
            </span>
            <span className="font-semibold">Sales<span className="text-brand">Moso</span></span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            The Real Estate Growth Suite — a dedicated partner for high-performance agents.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-brand">Home</Link></li>
            <li><Link to="/services" className="hover:text-brand">Services</Link></li>
            <li><Link to="/partners" className="hover:text-brand">Partners</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Get Started</h4>
          <a href="#audit" className="inline-flex rounded-full bg-gradient-to-r from-[oklch(0.68_0.17_240)] to-[oklch(0.5_0.2_255)] text-white px-5 py-2.5 text-sm font-semibold shadow-brand">
            Book Free Strategy Call
          </a>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SalesMoso. Built for agents who close.
      </div>
    </footer>
  );
}
