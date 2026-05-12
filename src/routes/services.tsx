import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CTAButton } from "@/components/CTAButton";
import { Check, MessageSquare, Globe, Zap, Sparkles } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Content, Website & Automation for Realtors | SalesMoso" },
      { name: "description", content: "Three pillars, one system. Strategic content, a high-converting website, and automated follow-up — engineered to win listings." },
      { property: "og:title", content: "Services — SalesMoso" },
      { property: "og:description", content: "Content attracts. Website converts. Automation closes." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: MessageSquare,
    title: "Content That Pre-Sells You",
    lead: "Strategic, on-brand content that positions you as the local authority — every single day.",
    deliverables: [
      "Weekly content calendar tailored to your market",
      "Reels, carousels & long-form posts done-for-you",
      "Seller education that warms leads automatically",
      "Monthly performance review & optimization",
    ],
  },
  {
    icon: Globe,
    title: "A Website That Wins Listings",
    lead: "A clean, high-converting personal site where prospects make their decision before the first call.",
    deliverables: [
      "Custom personal-brand website",
      "Listings, results & testimonials front and center",
      "Mobile-first, lightning-fast, SEO-ready",
      "Lead capture wired into your CRM",
    ],
  },
  {
    icon: Zap,
    title: "Automated Follow-Up",
    lead: "Where most deals are lost. We make sure you stay top-of-mind until they're ready to sign.",
    deliverables: [
      "Instant SMS + email response to new leads",
      "Smart drip nurture sequences",
      "Booking links & calendar reminders",
      "Re-engagement for cold prospects",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full brand-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand">
            <Sparkles size={12} /> Our Services
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl">Three Pillars. <span className="gradient-text">One System.</span></h1>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">Content attracts. Website converts. Automation closes. Together they remove the gaps where deals quietly slip away.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 space-y-10">
        {services.map(({ icon: Icon, title, lead, deliverables }, i) => (
          <article key={title} className={`grid md:grid-cols-12 gap-8 items-center rounded-3xl bg-card border border-border p-8 md:p-12 shadow-card ${i % 2 ? "md:[direction:rtl]" : ""}`}>
            <div className="md:col-span-5 [direction:ltr]">
              <div className="h-16 w-16 rounded-2xl bg-brand/10 brand-border flex items-center justify-center text-brand">
                <Icon size={28} />
              </div>
              <h2 className="mt-6 text-3xl md:text-4xl">{title}</h2>
              <p className="mt-3 text-muted-foreground">{lead}</p>
            </div>
            <div className="md:col-span-7 [direction:ltr]">
              <ul className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 rounded-xl bg-background/40 border border-border p-4 text-sm">
                    <Check size={18} className="text-brand mt-0.5 shrink-0" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20 text-center">
        <h2 className="text-4xl md:text-5xl">Stop juggling tools.<br /><span className="gradient-text">Start closing listings.</span></h2>
        <p className="mt-4 text-muted-foreground">Without chasing, guessing, or piecing together half-systems.</p>
        <div className="mt-8 flex justify-center"><CTAButton>Get a Free Deal Audit</CTAButton></div>
      </section>
      <SiteFooter />
    </div>
  );
}
