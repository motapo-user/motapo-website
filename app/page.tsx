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
      "Reshape delivery models, improve operating cadence, and align leaders, teams, and stakeholders around execution that actually moves the business.",
  },
  {
    icon: Brain,
    title: "AI Delivery & Enablement",
    description:
      "Turn AI ambition into practical business execution with governance, prioritization, adoption planning, and implementation support leaders can use.",
  },
  {
    icon: Target,
    title: "Strategic Execution",
    description:
      "Bridge strategy and delivery across complex initiatives so priorities are clear, decision-making is faster, and outcomes are easier to achieve.",
  },
];

const differentiators = [
  "Executive-ready communication that connects strategy to delivery",
  "Enterprise experience across modernization, transformation, and cross-functional change",
  "A practical AI lens grounded in adoption, governance, and real business value",
  "Strong facilitation and stakeholder alignment in complex environments",
];

const credibility = [
  {
    company: "IGM Financial",
    text: "Enterprise modernization, stakeholder alignment, and delivery leadership in highly visible transformation environments.",
  },
  {
    company: "360insights",
    text: "Scaled delivery improvement and helped leaders connect execution, team performance, and business priorities.",
  },
  {
    company: "Points",
    text: "Supported fast-moving digital teams with stronger collaboration, delivery rhythm, and organizational change.",
  },
];

const engagements = [
  "Transformation advisory for leaders navigating delivery friction and operating model change",
  "AI strategy-to-execution support for organizations that need structure, readiness, and adoption plans",
  "Workshop facilitation, alignment sessions, and executive-level problem solving",
  "Fractional leadership support for strategic initiatives that need momentum and clarity",
];

export default function HomePage() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="section-shell flex h-16 items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight">
            Motapo
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#who-i-help" className="hover:text-white">
              Who I Help
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
              Motapo • Enterprise Transformation & AI Delivery
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Helping leaders turn transformation and AI strategy into real
              delivery momentum.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              Motapo partners with organizations that need stronger execution
              across enterprise transformation, product delivery, and practical
              AI adoption — especially where the work is cross-functional,
              politically complex, and high stakes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
              >
                Book a strategy call
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                View services
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Enterprise Focus", "Modernization, delivery, operating model"],
                ["AI Lens", "Practical adoption, governance, execution"],
                ["Executive Presence", "Clear, credible, outcome-oriented"],
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
                Positioning
              </div>
              <div className="mt-2 text-2xl font-semibold">
                Not just agile coaching.
              </div>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Motapo should feel like a premium advisory brand for
                transformation, AI delivery, and enterprise execution — not a
                generic coaching site.
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
        <div className="max-w-3xl">
          <div className="eyebrow">Services</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            What Motapo should be known for
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            The site should speak to senior leaders who need clarity, execution,
            and strategic traction — not just teams looking for ceremonies or
            coaching basics.
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

      <section id="who-i-help" className="border-y border-white/10 bg-white/[0.03]">
        <div className="section-shell grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">Why clients hire you</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              You operate well where the work is messy.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Your resume and LinkedIn point to a stronger story than the
              current site tells: executive alignment, transformation
              leadership, AI-fluent delivery, and the ability to create forward
              motion in ambiguous enterprise environments.
            </p>
          </div>

          <div className="grid gap-4">
            {engagements.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="flex items-start gap-3">
                  <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-motapo-gold" />
                  <p className="text-sm leading-7 text-white/85">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-shell py-20">
        <div className="max-w-3xl">
          <div className="eyebrow">Credibility</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Grounded in enterprise experience
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Instead of a generic “about us,” the site should establish trust
            quickly with recognizable enterprise context and a concise founder
            story.
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
          <div className="eyebrow">Founder</div>
          <h3 className="mt-3 text-3xl font-semibold">Cliff Oliveira</h3>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
            Enterprise transformation advisor focused on strategic execution,
            AI delivery, and cross-functional alignment. Experienced in helping
            leaders and teams navigate complexity, accelerate outcomes, and
            create delivery systems that support real business change.
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
              Let’s talk about what needs to move.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Whether you’re navigating enterprise transformation, evaluating AI
              initiatives, or trying to unblock strategic delivery, Motapo can
              help create clarity and momentum.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@motapo.com"
              className="inline-flex items-center rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Motapo
            </a>
            <a
              href="https://www.linkedin.com/"
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
