import {
  ArrowRight,
  Brain,
  Briefcase,
  Building2,
  CheckCircle2,
  Linkedin,
  Mail,
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

const differentiators = [
  "15+ years leading enterprise transformation, delivery improvement, and operating model change",
  "$500M+ cumulative digital investment portfolios supported across enterprise environments",
  "Experience improving execution across complex portfolios, cross-functional teams, and high-visibility programs",
  "Practical AI delivery perspective grounded in adoption, governance, workflow improvement, and measurable business value",
];

const impactPoints = [
  "20–30% delivery efficiency improvement through AI-enabled workflow transformation",
  "25% improvement in execution predictability across 300+ staff",
  "$15M–$20M annual OpEx savings opportunity enabled through operating model design",
  "$3M–$4M annual capacity creation through AI-driven workflow automation",
  "$8M in engineering capacity reclaimed by removing QA and release bottlenecks",
  "40% reduction in deployment lead times on a $60M modernization program",
];

const credibility = [
  {
    company: "IGM Financial",
    text: "Supported a $120M+ portfolio environment through operating model design, delivery optimization, and AI-enabled workflow transformation.",
  },
  {
    company: "Scotiabank",
    text: "Improved concept-to-cash speed and delivery efficiency across large-scale digital product and transformation initiatives.",
  },
  {
    company: "360insights / Points",
    text: "Led delivery improvement, collaboration, and execution support across complex product and technology organizations.",
  },
];

const whoIHelp = [
  "Enterprise leaders responsible for transformation, modernization, and strategic execution",
  "Organizations improving operating models, delivery systems, and cross-functional alignment",
  "Teams exploring how AI can improve execution, workflow efficiency, and decision-making",
  "Programs where delivery friction, ambiguity, or stakeholder complexity is slowing progress",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.10),transparent_25%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />

        <header className="relative border-b border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
            <div>
              <div className="text-2xl font-semibold tracking-tight">
                Cliff Oliveira
              </div>
              <div className="mt-1 text-sm uppercase tracking-[0.22em] text-white/55">
                Motapo
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
              <a href="#services" className="transition hover:text-white">
                Services
              </a>
              <a href="#impact" className="transition hover:text-white">
                Impact
              </a>
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:py-24">
          <div>
            <div className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-amber-300 opacity-90">
              Enterprise Transformation & AI Delivery Advisor
            </div>

            <h1 className="max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl">
              Helping enterprise organizations improve execution and accelerate strategic change.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300 md:text-xl">
              I work with leaders across complex enterprise environments to improve delivery performance,
              redesign operating models, and apply AI in practical ways that increase speed, alignment,
              and business value.
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

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["15+ Years", "Enterprise transformation and delivery improvement"],
                ["$500M+", "Cumulative digital portfolios supported"],
                ["100+ Practitioners", "Large-scale delivery environments influenced"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="text-sm font-medium text-white">{title}</div>
                  <div className="mt-1 text-sm leading-6 text-neutral-400">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
            <div className="p-6 md:p-8">
              <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5">
                <div className="text-sm uppercase tracking-[0.18em] text-amber-300">
                  Where I Add Value
                </div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  Senior advisory support for complex, high-stakes work.
                </div>
                <p className="mt-3 text-sm leading-7 text-neutral-200">
                  Best suited for organizations navigating transformation, portfolio complexity,
                  delivery friction, or AI adoption efforts that need practical execution support.
                </p>
              </div>

              <div className="mt-5 grid gap-4">
                {differentiators.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-neutral-900/70 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <p className="text-sm leading-6 text-neutral-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-4xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
            Services
          </div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Advisory support for transformation, AI delivery, and portfolio execution
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
            I help organizations improve execution across strategic initiatives where progress
            depends on stronger alignment, better delivery systems, and clearer decision-making.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-[26px] border border-white/10 bg-white/[0.04]"
              >
                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-300">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="impact" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
              Selected Impact
            </div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Measurable results across enterprise transformation and delivery improvement
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
              My work has focused on improving execution performance, unlocking capacity,
              reducing bottlenecks, and increasing return on large digital and transformation investments.
            </p>
          </div>

          <div className="grid gap-4">
            {impactPoints.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5"
              >
                <div className="flex items-start gap-3">
                  <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                  <p className="text-sm leading-7 text-neutral-200">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-4xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
            Who I Work With
          </div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Support for leaders navigating transformation, execution, and change
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
            Especially relevant for enterprise environments where initiatives are important,
            visible, and difficult to move forward.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {whoIHelp.map((item) => (
            <div
              key={item}
              className="rounded-[26px] border border-white/10 bg-white/[0.04]"
            >
              <div className="p-6">
                <p className="text-sm leading-7 text-neutral-300">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-4xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
            Experience
          </div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Enterprise experience in transformation, delivery, and operating model improvement
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
            Experience spans financial services, pensions, payments, digital product organizations,
            and large-scale portfolio environments where execution, governance, and business alignment directly affect outcomes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {credibility.map((item) => (
            <div
              key={item.company}
              className="rounded-[26px] border border-white/10 bg-white/[0.04]"
            >
              <div className="p-6">
                <div className="text-lg font-semibold">{item.company}</div>
                <p className="mt-3 text-sm leading-7 text-neutral-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[26px] border border-white/10 bg-white/[0.04]">
          <div className="p-8">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
              About Cliff Oliveira
            </div>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
              Enterprise Transformation & AI Delivery Advisor
            </h3>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-neutral-200">
              I help organizations improve execution across complex strategic initiatives through
              operating model redesign, delivery system improvement, AI-enabled workflow transformation,
              and stronger cross-functional alignment. My focus is on creating measurable business outcomes
              in environments where complexity, scale, and stakeholder dynamics make progress difficult.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 bg-gradient-to-br from-emerald-400/10 via-transparent to-amber-300/10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
              Contact
            </div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Let’s talk about the work that needs to move.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-200">
              Whether you are improving a delivery model, leading a transformation effort,
              or exploring how AI can accelerate execution, I’d be glad to connect.
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

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Motapo. All rights reserved.</p>
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
