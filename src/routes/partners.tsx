import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CTAButton } from "@/components/CTAButton";
import { Award, Handshake, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Brokerages & Tech Powering SalesMoso" },
      { name: "description", content: "We partner with leading brokerages, MLS platforms, and CRMs to give agents an unfair advantage online." },
      { property: "og:title", content: "Partners — SalesMoso" },
      { property: "og:description", content: "Trusted by brokerages and integrated with the tools agents already use." },
    ],
  }),
  component: PartnersPage,
});

const partners = ["Realty Co.", "HomePro", "Luxe Estates", "MetroHomes", "Apex Realty", "BlueDoor", "Northstar", "Skyline Group"];
const integrations = ["Follow Up Boss", "kvCORE", "Chime", "BoomTown", "Salesforce", "HubSpot", "Mailchimp", "Calendly"];

function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full brand-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand">
            <Sparkles size={12} /> Trusted Partners
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl">Built With The Best.<br /><span className="gradient-text">Trusted by Top Brokerages.</span></h1>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">We work alongside leading brokerages, marketing platforms, and CRMs — so agents get a system that fits seamlessly into how they already work.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-2xl">Brokerage Partners</h2>
        <p className="text-muted-foreground text-sm">Powering agents at agencies of every size.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div key={p} className="rounded-xl border border-border bg-card py-8 text-center text-sm tracking-widest uppercase text-muted-foreground hover:text-brand hover:border-brand/40 transition">
              {p}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl">CRM & Tool Integrations</h2>
          <p className="text-muted-foreground text-sm">Plug into the stack you already use — no rip-and-replace.</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {integrations.map((p) => (
              <div key={p} className="rounded-xl border border-border bg-card py-6 text-center text-sm font-medium">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-6">
        {[
          { icon: Award, title: "Award-Winning Design", body: "Recognized for the highest-converting agent websites in 2024-25." },
          { icon: ShieldCheck, title: "Compliance First", body: "MLS, IDX, and fair-housing aware on every build." },
          { icon: Handshake, title: "Done-With-You", body: "A real team — not a template. Strategists assigned to every account." },
        ].map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl bg-card border border-border p-7">
            <Icon size={24} className="text-brand" />
            <h3 className="mt-4 text-xl">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="text-4xl md:text-5xl">Become a <span className="gradient-text">Partner Brokerage</span></h2>
        <p className="mt-4 text-muted-foreground">Equip every agent on your team with the system top producers are already winning with.</p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <CTAButton>Talk to Partnerships</CTAButton>
          <CTAButton variant="ghost" href="/services">Explore Services</CTAButton>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
