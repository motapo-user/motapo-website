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

const impactPoints = [
  "20–30% delivery efficiency improvement through AI-enabled workflow transformation",
  "25% improvement in execution predictability across 300+ staff",
  "$15M–$20M annual OpEx savings opportunity enabled through operating model design",
  "$3M–$4M annual capacity creation through AI-driven workflow automation",
  "$8M in engineering capacity reclaimed by removing QA and release bottlenecks",
  "40% reduction in deployment lead times on a $60M modernization program",
];

const whoIHelp = [
  "Enterprise leaders responsible for transformation, modernization, and strategic execution",
  "Organizations improving operating models, delivery systems, and cross-functional alignment",
  "Teams exploring how AI can improve execution, workflow efficiency, and decision-making",
  "Programs where delivery friction, ambiguity, or stakeholder complexity is slowing progress",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="section-shell flex h-16 items-center justify-between">
          <div>
            <div className="text-xl font-semibold tracking-tight">
              Cliff Oliveira
            </div>
            <div className="hidden text-xs uppercase tracking-[0.2em] text-white/50 sm:block">
              Motapo
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#impact" className="hover:text-white">
              Impact
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="grid-overlay absolute inset-0 opacity-20" />
        <div className="section-shell relative grid gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-motapo-green/30 bg-motapo-green/10 px-4 py-2 text-sm text-white/90">
              Enterprise Transformation & AI Delivery Advisor
            </div>

            <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Helping enterprise organizations improve execution through
              operating model transformation and AI-enabled delivery systems.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
              I work with leaders across complex enterprise environments to
              improve delivery performance, redesign operating models, and
              accelerate strategic initiatives through clearer execution, better
              alignment, and practical AI adoption.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
              >
                Book a conversation
              </a>
              <a
                href="#impact"
                className="inline-flex items-center rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
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
                <div key={title} className="card p-4">
                  <div className="text-sm font-medium text-white">{title}</div>
                  <div className="mt-1 text-sm leading-6 text-white/65">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 md:p-8">
            <div className="rounded-2xl border border-motapo-gold/20 bg-motapo-gold/10 p-5">
              <div className="text-sm uppercase tracking-[0.18em] text-motapo-gold">
                Where I Add Value
              </div>
              <div className="mt-2 text-2xl font-semibold">
                Senior advisory support for complex, high-stakes work.
              </div>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Best suited for organizations navigating transformation,
                delivery friction, portfolio complexity, or AI adoption efforts
                that need practical execution support.
              </p>
            </div>

            <div className="mt-5 grid gap-4">
              {differentiators.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/40 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-motapo-gold" />
                  <p className="text-sm leading-6 text-white/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-shell py-20">
        <div className="max-w-4xl">
          <div className="eyebrow">Services</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Advisory support for transformation, AI delivery, and portfolio execution
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            I help organizations improve execution across strategic initiatives
            where progress depends on stronger alignment, better delivery
            systems, and clearer decision-making.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="impact"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="section-shell grid gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="eyebrow">Selected Impact</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Measurable results across enterprise transformation and delivery improvement
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              My work has focused on improving execution performance, unlocking
              capacity, reducing bottlenecks, and increasing return on large
              digital and transformation investments.
            </p>
          </div>

          <div className="grid gap-4">
            {impactPoints.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/40 p-5"
              >
                <div className="flex items-start gap-3">
                  <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-motapo-gold" />
                  <p className="text-sm leading-7 text-white/85">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="max-w-4xl">
          <div className="eyebrow">Who I Work With</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Support for leaders navigating transformation, execution, and change
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Especially relevant for enterprise environments where initiatives
            are important, visible, and difficult to move forward.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {whoIHelp.map((item) => (
            <div key={item} className="card p-6">
              <p className="text-sm leading-7 text-white/80">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell py-20">
        <div className="max-w-4xl">
          <div className="eyebrow">Experience</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Enterprise experience in transformation, delivery, and operating model improvement
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Experience spans financial services, pensions, payments, digital
            product organizations, and large-scale portfolio environments where
            execution, governance, and business alignment directly affect
            outcomes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {credibility.map((item) => (
            <div key={item.company} className="card p-6">
              <div className="text-lg font-semibold">{item.company}</div>
              <p className="mt-3 text-sm leading-7 text-white/70">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 card p-8">
          <div className="eyebrow">About Cliff Oliveira</div>
          <h3 className="mt-3 text-3xl font-semibold">
            Enterprise Transformation & AI Delivery Advisor
          </h3>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-white/75">
            I help organizations improve execution across complex strategic
            initiatives through operating model redesign, delivery system
            improvement, AI-enabled workflow transformation, and stronger
            cross-functional alignment. My focus is on creating measurable
            business outcomes in environments where complexity, scale, and
            stakeholder dynamics make progress difficult.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 bg-gradient-to-br from-motapo-green/10 via-transparent to-motapo-gold/10"
      >
        <div className="section-shell grid gap-10 py-20 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="eyebrow">Contact</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Let’s talk about the work that needs to move.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Whether you are improving a delivery model, leading a
              transformation effort, or exploring how AI can accelerate
              execution, I’d be glad to connect.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:cliff@motapo.com"
              className="inline-flex items-center rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Cliff
            </a>
            <a
              href="https://www.linkedin.com/in/cliffo/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-3 py-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
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
