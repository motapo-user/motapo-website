import Image from "next/image";
import {
  ArrowRight,
  Brain,
  Briefcase,
  Building2,
  CheckCircle2,
  Linkedin,
  Mail,
  MapPin,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Enterprise Transformation",
    description:
      "Redesign operating models, improve execution, and align business and technology teams around measurable outcomes across complex delivery environments.",
  },
  {
    icon: Brain,
    title: "AI Delivery & Enablement",
    description:
      "Apply AI to delivery systems through workflow automation, decision support, adoption planning, and practical implementation that improves speed and productivity.",
  },
  {
    icon: Target,
    title: "Portfolio Execution Improvement",
    description:
      "Increase predictability, reduce bottlenecks, strengthen governance, and improve the execution of high-priority strategic initiatives.",
  },
];

const impactPoints = [
  "$120M+ digital portfolio operating model design — enabling $15M–$20M in annual OpEx savings",
  "AI-driven workflow automation reclaiming 4+ hrs/week across 150+ staff — $3M–$4M annual capacity",
  "$8M in engineering capacity reclaimed by eliminating QA and release bottlenecks at Interac",
  "40% reduction in deployment lead times on a $60M infrastructure modernization at Ontario Teachers'",
  "$25M+ annual capacity release across a $180M+ digital portfolio at BMO",
  "25% acceleration in concept-to-cash cycles at Scotiabank, enabling $25M in early revenue",
];

const credibility = [
  {
    company: "IGM Financial / Mackenzie Investments",
    text: "Operating model design and AI-enabled delivery transformation across a $120M+ digital portfolio.",
  },
  {
    company: "Interac",
    text: "Delivery governance and Agile transformation across high-visibility payment infrastructure programs.",
  },
  {
    company: "Ontario Teachers' Pension Plan",
    text: "Operating model and portfolio execution improvement within a complex institutional investment environment.",
  },
  {
    company: "BMO",
    text: "Portfolio execution optimization across Personal & Business Banking — $180M+ digital investment.",
  },
  {
    company: "Scotiabank",
    text: "Delivery efficiency improvement and concept-to-cash acceleration across Digital Factory.",
  },
  {
    company: "360insights / Points",
    text: "Delivery improvement, collaboration, and execution support across complex product and technology organizations.",
  },
];

const clientNames = [
  "IGM Financial",
  "Interac",
  "Ontario Teachers'",
  "BMO",
  "Scotiabank",
  "ecobee",
  "360insights",
  "AudienceView",
];

const whoIHelp = [
  "Enterprise leaders responsible for transformation, modernization, and strategic execution",
  "Organizations improving operating models, delivery systems, and cross-functional alignment",
  "Teams exploring how AI can improve execution, workflow efficiency, and decision-making",
  "Programs where delivery friction, ambiguity, or stakeholder complexity is slowing progress",
];

function MotapoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
        <Image
          src="/motapo-logo.png"
          alt="Motapo logo"
          width={48}
          height={48}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div>
        <div className="text-xl font-semibold tracking-tight text-white">
          Cliff Oliveira
        </div>
        <div className="mt-0.5 text-[11px] uppercase tracking-[0.28em] text-white/45">
          Motapo
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-neutral-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <MotapoMark />
          <nav className="hidden items-center gap-8 md:flex">
            {["Services", "Impact", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-white/60 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative mx-auto max-w-7xl px-6 pt-14 pb-6 md:px-10 lg:pt-20">
        <div>
          <div className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#1CE0D6] opacity-90">
            Enterprise Transformation & AI Delivery Advisor
          </div>

          <h1 className="max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl">
            Helping enterprise organizations improve execution and accelerate
            strategic change.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300 md:text-xl">
            I work with leaders across complex enterprise environments to
            improve delivery performance, redesign operating models, and apply
            AI in practical ways that increase speed, alignment, and business
            value.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl bg-white px-6 py-3 font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              Book a conversation
            </a>
            <a
              href="#impact"
              className="inline-flex items-center rounded-2xl border border-white/20 bg-transparent px-6 py-3 font-medium text-white transition hover:bg-white/5"
            >
              View impact
            </a>
          </div>

          {/* Stat callouts */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["15+ Years", "Enterprise transformation and delivery improvement"],
              ["$500M+", "Cumulative digital portfolios supported"],
              ["100+ Practitioners", "Large-scale delivery environments influenced"],
            ].map(([stat, label]) => (
              <div
                key={stat}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="text-2xl font-semibold text-[#1CE0D6]">{stat}</div>
                <div className="mt-1 text-sm text-neutral-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT NAME STRIP ── */}
      <section className="border-y border-white/[0.06] bg-white/[0.02] px-6 py-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/35">
            Organizations I&apos;ve worked with
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {clientNames.map((name) => (
              <span key={name} className="text-sm font-medium text-white/50">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="mx-auto max-w-7xl px-6 pb-14 pt-8 md:px-10">
        <div className="max-w-4xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#1CE0D6]">
            Services
          </div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Advisory support for transformation, AI delivery, and portfolio
            execution
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
            I help organizations improve execution across strategic initiatives
            where progress depends on stronger alignment, better delivery
            systems, and clearer decision-making.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <Icon className="h-8 w-8 text-[#1CE0D6]" />
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section id="impact" className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="max-w-4xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#1CE0D6]">
            Selected Impact
          </div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Measurable results across enterprise transformation and delivery
            improvement
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
            My work has focused on improving execution performance, unlocking
            capacity, reducing bottlenecks, and increasing return on large
            digital and transformation investments.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {impactPoints.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-neutral-900/70 p-5"
            >
              <div className="flex items-start gap-3">
                <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-[#1CE0D6]" />
                <p className="text-sm leading-7 text-neutral-200">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO I WORK WITH ── */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="max-w-4xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#1CE0D6]">
            Who I Work With
          </div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Support for leaders navigating transformation, execution, and change
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
            Especially relevant for enterprise environments where initiatives
            are important, visible, and difficult to move forward.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {whoIHelp.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-neutral-900/70 p-5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1CE0D6]" />
              <p className="text-sm leading-6 text-neutral-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="max-w-4xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#1CE0D6]">
            Experience
          </div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Enterprise experience across financial services, pensions, and
            payments
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {credibility.map((item) => (
            <div
              key={item.company}
              className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="text-lg font-semibold">{item.company}</div>
              <p className="mt-3 text-sm leading-7 text-neutral-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-8">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#1CE0D6]">
            About Cliff Oliveira
          </div>
          <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
            Enterprise Transformation & AI Delivery Advisor
          </h3>
          <div className="mt-5 max-w-4xl space-y-4 text-lg leading-8 text-neutral-300">
            <p>
              I help organizations improve execution across complex strategic
              initiatives through operating model redesign, delivery system
              improvement, AI-enabled workflow transformation, and stronger
              cross-functional alignment. My focus is on creating measurable
              business outcomes in environments where complexity, scale, and
              stakeholder dynamics make progress difficult.
            </p>
            <p>
              My background starts in software development — I built systems
              before advising on them, which shapes how I engage with
              engineering and product teams. Over 15+ years I&apos;ve moved
              into transformation and delivery leadership across financial
              services, pensions, payments, and digital product organizations,
              consistently focused on outcomes over process theatre.
            </p>
            <p>
              I hold a Government of Canada Secret Clearance (Level II) and
              operate through Motapo, an independent advisory practice based in
              Oakville, ON, serving enterprise organizations across Canada and
              the United States.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="border-t border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(28,224,214,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(28,224,214,0.08),transparent_25%)]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:px-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#1CE0D6]">
              Contact
            </div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Let&apos;s talk about the work that needs to move.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
              Whether you are improving a delivery model, leading a
              transformation effort, or exploring how AI can accelerate
              execution, I&apos;d be glad to connect.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:cliff@motapo.com"
              className="inline-flex items-center rounded-2xl bg-white px-6 py-3 font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Cliff
            </a>
            <a
              href="https://www.linkedin.com/in/cliffo/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-2xl border border-white/20 bg-transparent px-6 py-3 font-medium text-white transition hover:bg-white/5"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Motapo. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-white/40">
            <MapPin className="h-3.5 w-3.5" />
            <span>Oakville, ON · Serving enterprise organizations across Canada and the U.S.</span>
          </div>
          <a
            href="#"
            className="inline-flex items-center text-white/70 transition hover:text-white"
          >
            Back to top
            <ArrowRight className="ml-2 h-4 w-4 -rotate-90" />
          </a>
        </div>
      </footer>
    </main>
  );
}
