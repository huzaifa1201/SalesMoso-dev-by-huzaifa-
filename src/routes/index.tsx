import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CTAButton } from "@/components/CTAButton";
import { Check, Eye, ShieldCheck, Repeat, Sparkles, TrendingUp, MessageSquare, Globe, Zap, Star, ArrowRight, X, Trophy, Rocket, Clock, ChevronDown, PlayCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import a1 from "@/assets/agent-m1.jpg";
import a2 from "@/assets/agent-m2.jpg";
import a3 from "@/assets/agent-m3.jpg";
import a4 from "@/assets/agent-m4.jpg";
import a5 from "@/assets/agent-m5.jpg";
import a6 from "@/assets/agent-m6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SalesMoso — The Real Estate Growth Suite for High-Performance Agents" },
      { name: "description", content: "Stop losing six-figure commissions to ghosted leads and dated listings. SalesMoso is the dedicated growth partner for high-performance agents who want to dominate their market — without the tech headache." },
      { property: "og:title", content: "SalesMoso — The Real Estate Growth Suite" },
      { property: "og:description", content: "A dedicated partner for high-performance agents who want to dominate their market without the tech headache." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      <SiteHeader />
      <Hero />
      <LogoStrip />
      <AnimatedStats />
      <ProblemBand />
      <ThreePillars />
      <SystemFlow />
      <BeforeAfter />
      <Outcomes />
      <Testimonials />
      <AgentSpotlight />
      <ReviewMarquee />
      <FAQ />
      <AuditCTA />
      <ClosingLine />
      <SiteFooter />
    </div>
  );
}

function UrgencyBar() {
  return (
    <div className="bg-gradient-to-r from-[oklch(0.5_0.2_255)] via-[oklch(0.62_0.18_245)] to-[oklch(0.5_0.2_255)] text-white text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-center gap-2 text-center">
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        <span className="font-semibold tracking-wide">Only 7 strategy call slots left this month</span>
        <span className="hidden sm:inline opacity-80">— claim yours before they're gone</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-soft">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full brand-border bg-white px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-deep">
            <Sparkles size={12} /> For High-Performance Agents
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
            Stop Losing <span className="gradient-text">Six-Figure Commissions</span> to Ghosted Leads and Dated Listings.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            <strong className="text-foreground">The Real Estate Growth Suite:</strong> a dedicated partner for high-performance agents who want to dominate their market — without the tech headache.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CTAButton>Book Your Free Strategy Call</CTAButton>
            <CTAButton variant="ghost" href="#system">See How It Works</CTAButton>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "230+", v: "Agents Scaled" },
              { k: "$48M", v: "Commissions Won" },
              { k: "4.9/5", v: "Agent Rating" },
            ].map((s) => (
              <div key={s.k}>
                <div className="text-2xl font-display text-brand-deep">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant brand-border">
            <img src={heroImg} alt="Luxury home represented by a SalesMoso agent" width={1600} height={1100} className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/30 via-transparent to-transparent" />
            <button aria-label="Play overview" className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/95 text-brand-deep flex items-center justify-center shadow-elegant hover:scale-105 transition animate-pulse-ring relative">
              <PlayCircle size={36} />
            </button>
          </div>
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl shadow-elegant p-4 flex items-center gap-3 max-w-xs animate-float">
            <div className="flex -space-x-2">
              {[a1, a2, a3].map((src, i) => (
                <img key={i} src={src} alt="" loading="lazy" width={40} height={40} className="h-10 w-10 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <div>
              <div className="flex text-brand">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <p className="text-xs text-muted-foreground">Loved by 230+ top producers</p>
            </div>
          </div>
          <div className="absolute -top-4 -right-2 md:-right-6 bg-white rounded-2xl shadow-elegant p-4 flex items-center gap-3 animate-float-slow">
            <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">New listing booked</p>
              <p className="text-sm font-semibold text-brand-deep">+$24,500 GCI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  const brokerages = ["KELLER WILLIAMS", "RE/MAX", "COMPASS", "COLDWELL BANKER", "EXP REALTY", "SOTHEBY'S"];
  return (
    <div className="border-y border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Trusted by agents at</span>
        {brokerages.map((b) => (
          <span key={b} className="text-sm font-semibold tracking-widest text-foreground/70">{b}</span>
        ))}
      </div>
    </div>
  );
}

function ProblemBand() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          { icon: Eye, title: "Authority", body: "Sellers Google you before they ever call. If you look invisible, you're invisible." },
          { icon: ShieldCheck, title: "Proof", body: "No results, no trust. No trust, no listing agreement." },
          { icon: Repeat, title: "Consistency", body: "Sporadic posts kill momentum. Quiet feeds lose deals — quietly." },
        ].map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex gap-4 bg-white p-6 rounded-2xl shadow-card">
            <div className="h-12 w-12 shrink-0 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <Icon size={22} />
            </div>
            <div>
              <h3 className="text-xl">{title}</h3>
              <p className="mt-1 text-muted-foreground text-sm">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const pillars = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Content That Pre-Sells You",
    lead: "Most agents post randomly. Or don't post at all.",
    points: ["Positions you as the expert", "Answers seller questions", "Builds trust daily"],
    foot: "So when leads reach out… they're already half sold.",
  },
  {
    n: "02",
    icon: Globe,
    title: "A Website That Wins You Listings",
    lead: "Right now, you probably have a basic agency profile — or nothing that stands out.",
    points: ["Showcase your listings", "Show off your results", "Build instant trust"],
    foot: "This is where decisions get made.",
  },
  {
    n: "03",
    icon: Zap,
    title: "Automated Follow-Up",
    lead: "The truth? Most agents don't lose leads. They lose follow-up.",
    points: ["Instant responses", "Smart reminders", "Ongoing nurturing"],
    foot: "Stay top of mind until they're ready.",
  },
];

function ThreePillars() {
  return (
    <section id="system" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-brand text-sm uppercase tracking-[0.2em] font-semibold">The Fix</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Fix The 3 Things <span className="gradient-text">Costing You Deals</span></h2>
        <p className="mt-4 text-muted-foreground">A growth suite built specifically for real estate agents — makes you the obvious choice, builds trust before the first conversation, and follows up automatically so no lead goes cold.</p>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {pillars.map(({ n, icon: Icon, title, lead, points, foot }) => (
          <article key={n} className="group relative rounded-2xl bg-white p-7 border border-border hover:border-brand/50 transition-all hover:-translate-y-1 shadow-card hover:shadow-elegant">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-brand tracking-widest">{n}</span>
              <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                <Icon size={18} />
              </div>
            </div>
            <h3 className="mt-5 text-2xl">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{lead}</p>
            <ul className="mt-5 space-y-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-brand mt-0.5 shrink-0" /> {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 pt-5 border-t border-border text-sm italic text-muted-foreground">{foot}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SystemFlow() {
  const steps = [
    { label: "Content", verb: "attracts" },
    { label: "Website", verb: "converts" },
    { label: "Automation", verb: "closes" },
  ];
  return (
    <section className="bg-gradient-hero text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl text-white">This Isn't 3 Tools.<br />It's 1 System.</h2>
        <div className="mt-12 flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-2">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-4 md:gap-2">
              <div className="flex-1 md:w-56 rounded-xl bg-white/10 backdrop-blur border border-white/20 p-6 text-left">
                <p className="text-xs uppercase tracking-widest text-white/70">Step {i + 1}</p>
                <p className="mt-2 text-2xl font-display text-white">{s.label}</p>
                <p className="text-sm text-white/80">{s.verb}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block text-white/80" size={22} />
              )}
            </div>
          ))}
        </div>
        <p className="mt-10 text-white/80">No gaps. No missed deals.</p>
      </div>
    </section>
  );
}

function Outcomes() {
  const items = [
    { icon: TrendingUp, title: "More inbound leads", body: "Sellers find you ready-to-trust." },
    { icon: Check, title: "More booked appointments", body: "Calendar fills with qualified calls." },
    { icon: Star, title: "More closed listings", body: "Without chasing, guessing, or juggling tools." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-4xl md:text-5xl max-w-2xl">What This <span className="gradient-text">Means For You</span></h2>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl bg-white border border-border p-7 shadow-card">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <Icon size={22} />
            </div>
            <p className="mt-4 text-xl font-display">{title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  {
    photo: a1,
    quote: "I went from 2 listings a quarter to 5 a month. The website alone closed two deals in week one.",
    name: "Marcus Reyes",
    role: "Top Producer · Miami, FL",
  },
  {
    photo: a2,
    quote: "Finally, my online presence matches the quality of work I do. Sellers say yes before we even meet.",
    name: "Liam Bennett",
    role: "Luxury Specialist · Sydney, AU",
  },
  {
    photo: a3,
    quote: "The follow-up automation paid for the system in 11 days. I just stopped losing leads, period.",
    name: "Daniel Kingsley",
    role: "Broker · Toronto, CA",
  },
  {
    photo: a4,
    quote: "SalesMoso doesn't feel like a vendor — it feels like having a real growth team in my corner.",
    name: "Jack Thompson",
    role: "Listing Agent · Melbourne, AU",
  },
  {
    photo: a5,
    quote: "I used to dread marketing. Now my content runs in the background and listings come to me.",
    name: "Kevin Tanaka",
    role: "Realtor · Seattle, WA",
  },
  {
    photo: a6,
    quote: "Three new luxury listings in six weeks — straight from inbound. This is the edge I was missing.",
    name: "Ethan Caldwell",
    role: "Broker Owner · Brisbane, AU",
  },
];

function Testimonials() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-brand text-sm uppercase tracking-[0.2em] font-semibold">Agent Reviews</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Trusted by agents who refuse <br />to <span className="gradient-text">be invisible.</span></h2>
          </div>
          <div className="flex items-center gap-1 text-brand">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            <span className="ml-2 text-sm text-muted-foreground">4.9 / 5 from 230+ agents</span>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((x) => (
            <figure key={x.name} className="rounded-2xl bg-white border border-border p-7 shadow-card flex flex-col">
              <div className="flex gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed flex-1">"{x.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <img src={x.photo} alt={x.name} loading="lazy" width={48} height={48} className="h-12 w-12 rounded-full object-cover ring-2 ring-brand/20" />
                <div>
                  <div className="font-semibold text-sm">{x.name}</div>
                  <div className="text-xs text-muted-foreground">{x.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgentSpotlight() {
  const agents = [
    { photo: a2, name: "Liam Bennett", market: "Sydney Luxury", growth: "+218% listings YoY" },
    { photo: a5, name: "Kevin Tanaka", market: "Seattle Metro", growth: "$2.4M GCI in 12 mo" },
    { photo: a4, name: "Jack Thompson", market: "Melbourne Inner", growth: "11 new listings / qtr" },
    { photo: a1, name: "Marcus Reyes", market: "Miami Beach", growth: "5x inbound seller leads" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-brand text-sm uppercase tracking-[0.2em] font-semibold">Agents on the Suite</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Real agents. <span className="gradient-text">Real results.</span></h2>
        <p className="mt-4 text-muted-foreground">A few of the high-performance agents already growing with SalesMoso.</p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {agents.map((a) => (
          <div key={a.name} className="rounded-2xl bg-white border border-border overflow-hidden shadow-card hover:shadow-elegant transition">
            <div className="aspect-[4/5] overflow-hidden bg-brand/5">
              <img src={a.photo} alt={a.name} loading="lazy" width={512} height={640} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <p className="font-display text-lg">{a.name}</p>
              <p className="text-xs text-muted-foreground">{a.market}</p>
              <p className="mt-3 inline-flex text-xs font-semibold bg-brand/10 text-brand-deep rounded-full px-3 py-1">{a.growth}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReviewMarquee() {
  const quotes = [
    "This is genius",
    "Finally a system that actually closes",
    "Best ROI I've ever had",
    "My calendar is full again",
    "Sellers say yes before we meet",
    "Goodbye, ghosted leads",
    "I just stopped losing deals",
    "The growth team I never had",
  ];
  return (
    <section className="bg-white border-y border-border overflow-hidden py-10">
      <div className="flex gap-4 animate-[scroll_40s_linear_infinite] whitespace-nowrap" style={{ animation: "marquee 40s linear infinite" }}>
        {[...quotes, ...quotes].map((q, i) => (
          <span key={i} className="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-5 py-3 text-sm text-foreground">
            <Star size={14} className="text-brand" fill="currentColor" /> {q}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

function AuditCTA() {
  return (
    <section id="audit" className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero text-white p-10 md:p-16 shadow-elegant">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-white/80 text-sm uppercase tracking-[0.2em] font-semibold">Free For A Limited Time</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-white">If You're Serious About Closing More Deals…</h2>
            <p className="mt-4 text-white/85 max-w-md">We'll show you exactly where you're losing listings, what's missing, and how to fix it fast — on a 20-minute strategy call, no pitch.</p>
            <ul className="mt-6 space-y-2 text-sm">
              {["Where you're losing listings", "What's missing from your presence", "How to fix it — fast"].map((p) => (
                <li key={p} className="flex items-center gap-2 text-white/90"><Check size={16} className="text-white" /> {p}</li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton variant="white">Book Your Free Strategy Call</CTAButton>
            </div>
          </div>
          <form className="rounded-2xl bg-white text-foreground border border-border p-6 space-y-4 shadow-elegant">
            <h3 className="text-2xl">Claim Your Free Audit</h3>
            <div className="grid gap-3">
              <input type="text" placeholder="Full Name" className="w-full rounded-lg bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input type="email" placeholder="Work Email" className="w-full rounded-lg bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input type="text" placeholder="Brokerage / City" className="w-full rounded-lg bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <button type="button" className="mt-2 inline-flex justify-center rounded-full bg-gradient-to-r from-[oklch(0.68_0.17_240)] to-[oklch(0.5_0.2_255)] text-white px-7 py-3.5 text-sm font-semibold shadow-brand">Send Me My Audit</button>
              <p className="text-xs text-muted-foreground text-center">No spam. We respond within 24 hours.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ClosingLine() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-brand font-semibold">Last Thing</p>
      <h2 className="mt-4 text-4xl md:text-5xl">Your competitors aren't better.<br /><span className="gradient-text">They just look better online.</span></h2>
      <p className="mt-4 text-muted-foreground">And in real estate… that's enough to win.</p>
      <div className="mt-8 flex justify-center"><CTAButton>Book Your Free Strategy Call</CTAButton></div>
    </section>
  );
}

function useCountUp(target: number, duration = 1600) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);
  return { ref, val };
}

function StatCard({ value, suffix, label, prefix = "" }: { value: number; suffix?: string; label: string; prefix?: string }) {
  const { ref, val } = useCountUp(value);
  return (
    <div ref={ref} className="rounded-2xl bg-white border border-border p-7 shadow-card hover-lift text-center">
      <div className="font-display text-4xl md:text-5xl gradient-text">{prefix}{val.toLocaleString()}{suffix}</div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function AnimatedStats() {
  return (
    <section className="relative bg-gradient-soft border-b border-border overflow-hidden">
      <div className="absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-brand/10 blur-3xl animate-blob" />
      <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[oklch(0.78_0.13_235)]/20 blur-3xl animate-blob" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-5">
        <StatCard value={230} suffix="+" label="Agents Scaled" />
        <StatCard value={48} prefix="$" suffix="M" label="Commissions Won" />
        <StatCard value={1240} suffix="+" label="Listings Closed" />
        <StatCard value={98} suffix="%" label="Would Refer Us" />
      </div>
    </section>
  );
}

function BeforeAfter() {
  const before = ["Random social posts (or none)", "Generic agency profile page", "Leads ghosted within 24h", "Tech stack chaos & monthly fees", "No idea what's actually working"];
  const after = ["Daily authority content on autopilot", "A site that pre-sells the listing", "Instant follow-up — every single lead", "One growth suite, one partner", "Crystal-clear pipeline & ROI"];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-brand text-sm uppercase tracking-[0.2em] font-semibold">The Shift</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Before SalesMoso vs. <span className="gradient-text">After</span></h2>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border bg-white p-7 shadow-card">
          <div className="flex items-center gap-2 text-destructive">
            <X size={18} /><span className="text-sm font-semibold uppercase tracking-widest">Before</span>
          </div>
          <ul className="mt-5 space-y-3">
            {before.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-1 h-5 w-5 rounded-full bg-destructive/10 text-destructive flex items-center justify-center shrink-0"><X size={12} /></span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-2xl border-2 border-brand/40 bg-gradient-to-br from-white to-brand/5 p-7 shadow-elegant">
          <div className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-gradient-hero text-white text-xs font-semibold px-3 py-1 shadow-brand">
            <Trophy size={12} /> The Suite
          </div>
          <div className="flex items-center gap-2 text-brand-deep">
            <Rocket size={18} /><span className="text-sm font-semibold uppercase tracking-widest">After</span>
          </div>
          <ul className="mt-5 space-y-3">
            {after.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <span className="mt-1 h-5 w-5 rounded-full bg-brand/15 text-brand flex items-center justify-center shrink-0"><Check size={12} /></span>
                <span className="text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "How fast will I see results?", a: "Most agents see new inbound conversations within the first 2–3 weeks, and booked listing appointments inside the first 60 days." },
    { q: "Do I need to be tech-savvy?", a: "No. We handle setup, content, the website, and the automations. You show up, take the calls, and close." },
    { q: "Will this work in my market?", a: "We've scaled agents across the US, Canada, Australia, and the UK — from luxury coastal to suburban resale. The system is market-agnostic." },
    { q: "What if I'm already busy?", a: "Perfect. The Suite is built to remove work, not add it. The whole point is more listings with less of your time." },
    { q: "Is there a long contract?", a: "Month-to-month after onboarding. We earn your business every month — no golden handcuffs." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-surface border-y border-border">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center">
          <p className="text-brand text-sm uppercase tracking-[0.2em] font-semibold">FAQ</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Smart questions. <span className="gradient-text">Straight answers.</span></h2>
        </div>
        <div className="mt-10 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className={`rounded-2xl border bg-white shadow-card transition ${isOpen ? "border-brand/50 shadow-elegant" : "border-border"}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base md:text-lg">{it.q}</span>
                  <ChevronDown size={20} className={`shrink-0 text-brand transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground">
          <Clock size={16} className="text-brand" />
          <span>Strategy calls usually book out 7–10 days in advance.</span>
        </div>
      </div>
    </section>
  );
}
