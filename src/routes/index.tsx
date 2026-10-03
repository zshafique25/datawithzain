import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Award,
  Braces,
  Cloud,
  Database,
  Download,
  ExternalLink,
  Github,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Table2,
  Workflow,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
const resumeUrl = `${import.meta.env.BASE_URL}Zain-Shafique-Resume.pdf`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zain Shafique — Data Engineer & Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Zain Shafique — data engineer and analyst specializing in Azure Data Factory, Databricks, ETL/ELT pipelines, Medallion Architecture, and Power BI.",
      },
      { property: "og:title", content: "Zain Shafique — Data Engineer & Analyst" },
      {
        property: "og:description",
        content:
          "Data engineer and analyst specializing in Azure data platforms, Databricks, ETL pipelines, and Power BI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Portfolio,
});

/* ---------------------------------- data ---------------------------------- */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const ROLES = ["Data Engineer", "Data Analyst"];

const SKILLS = [
  { label: "Python (Pandas, NumPy, Scikit-learn, TensorFlow)", value: 90 },
  { label: "SQL / T-SQL", value: 90 },
  { label: "Azure Data Factory", value: 90 },
  { label: "Azure Databricks / PySpark", value: 85 },
  { label: "Power BI / DAX", value: 85 },
  { label: "Azure Synapse & SQL Server", value: 80 },
  { label: "ETL/ELT, CDC & Data Modeling", value: 90 },
  { label: "Git / GitHub", value: 85 },
];

const STATS = [
  { value: "3", label: "Medallion architecture projects" },
  { value: "6", label: "Azure services used" },
  { value: "~4.4K", label: "Survey respondents analyzed" },
  { value: "7", label: "Production ADF pipeline patterns" },
];

const EXPERIENCE = [
  {
    role: "Freelance Financial Operations Specialist",
    company: "US Restaurant Franchise Client",
    location: "Remote · USA",
    period: "01/2024 — Present",
    points: [
      "Manage accounting and financial reporting for 4 restaurant locations using QuickBooks, including bookkeeping, reconciliations, and insurance administration",
      "Prepare monthly P&L and sales reports for ownership across all locations",
    ],
  },
  {
    role: "Data Analyst",
    company: "Women in Sport × Statistics Without Borders",
    location: "Remote · USA",
    period: "09/2025 — 04/2026",
    points: [
      "Analyzed survey data from ~4, 400 youth respondents using Python, and SPSS, using cross - tabulations and visualizations to identify participation barriers by gender and ethnicity",
      "Co-authored a team report on safety, confidence, and health - related barriers(e.g., 45.7 % of Asian females did not feel safe exercising outdoors), included as an appendix to the final report delivered to Women in Sport",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "Verior",
    location: "Remote · Pakistan",
    period: "06/2025 — 08/2025",
    points: [
      "Built a Flask microservice using the Cohere API for text generation and summarization, with a modular LLM wrapper, deployed on Vercel",
      "Built a Node.js/Express translation API supporting 20 languages, with a JavaScript front end, deployed on Vercel",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Byewise Limited",
    location: "Remote · Pakistan",
    period: "06/2024 — 09/2024",
    points: [
      "Built ETL workflows for data preparation and implemented sentiment analysis and anomaly detection models in Python",
    ],
  },
];

const PROJECTS = [
  {
    title: "ADF Pipeline Patterns — CDC, REST API & File Routing",
    icon: Workflow,
    points: [
      "7 production-grade Azure Data Factory patterns: CDC incremental load with JSON & DB-based audit logging, dual REST API pagination, dynamic file routing and schema mapping",
      "Delta Lake upserts via Mapping Data Flow and multi-table orchestration driven by a SQL control table with parallel execution",
    ],
    tags: ["Azure Data Factory", "Delta Lake", "CDC", "REST API"],
  },
  {
    title: "End-to-End Azure Data Lakehouse — ADF to Power BI",
    icon: Cloud,
    points: [
      "Full Medallion Architecture (Bronze → Silver → Gold) across Azure Data Factory, Databricks, and Synapse Analytics Serverless SQL on Adventure Works data",
      "Delta Lake storage, parameterized Databricks notebooks with secret scopes, Great Expectations quality checks, and CI/CD via GitHub Actions",
      "Analytics-ready data surfaced through Power BI, with T-SQL views on Synapse OPENROWSET for schema-on-read querying",
    ],
    tags: ["Azure", "Databricks", "Synapse", "Power BI", "CI/CD"],
  },
  {
    title: "Databricks Medallion Pipeline",
    icon: Database,
    points: [
      "End-to-end lakehouse pipeline (Bronze → Silver → Gold) over e-commerce sales data using PySpark and Delta Lake",
      "Incremental watermark loading; Gold layer modeled as a Kimball-style star schema with SCD Type 1 & 2 for full historical tracking",
    ],
    tags: ["Databricks", "PySpark", "Delta Lake", "SCD"],
  },
  {
    title: "Medallion Data Warehouse — SQL Server",
    icon: Table2,
    points: [
      "End-to-end data warehouse on SQL Server implementing Medallion Architecture, integrating ERP and CRM source data via T-SQL ETL pipelines",
      "Star schema (fact & dimension tables) in the Gold layer with data cleansing and standardization in Silver for optimized analytical queries",
    ],
    tags: ["SQL Server", "T-SQL", "Star Schema", "ETL"],
  },
];

const SKILL_GROUPS = [
  {
    icon: Braces,
    title: "Languages & Libraries",
    items: ["Python (Pandas, NumPy, Scikit-learn, TensorFlow)", "SQL", "T-SQL", "PySpark"],
  },
  {
    icon: Cloud,
    title: "Cloud & Data Engineering",
    items: [
      "Azure Data Factory",
      "Azure Databricks",
      "Azure Synapse Analytics",
      "ADLS Gen2",
      "Azure SQL DB",
      "Azure Logic Apps",
      "Great Expectations",
      "SQL Server",
      "Git/GitHub",
    ],
  },
  {
    icon: Layers,
    title: "Data Modeling & BI",
    items: [
      "Medallion Architecture",
      "Kimball Star Schema",
      "SCD Type 1 & 2",
      "ETL/ELT",
      "CDC",
      "Power BI",
      "DAX",
      "REST APIs",
    ],
  },
];

/* --------------------------------- hooks ---------------------------------- */

function useTypewriter(words: string[]) {
  const [state, setState] = useState({ text: "", word: 0, deleting: false });

  useEffect(() => {
    const current = words[state.word % words.length] ?? "";
    let timeout: number | undefined;

    if (!state.deleting && state.text === current) {
      timeout = window.setTimeout(
        () => setState((s) => ({ ...s, deleting: true })),
        1600,
      );
    } else if (state.deleting && state.text === "") {
      setState({ text: "", word: (state.word + 1) % words.length, deleting: false });
    } else {
      timeout = window.setTimeout(
        () =>
          setState((s) => ({
            ...s,
            text: s.deleting
              ? current.slice(0, s.text.length - 1)
              : current.slice(0, s.text.length + 1),
          })),
        state.deleting ? 45 : 105,
      );
    }
    return () => window.clearTimeout(timeout);
  }, [state, words]);

  return state.text;
}

/* ------------------------------- primitives -------------------------------- */

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ big, title }: { big: string; title: string }) {
  return (
    <div className="relative mb-14">
      <span
        aria-hidden
        className="text-outline pointer-events-none absolute -top-10 left-0 text-[clamp(4rem,12vw,8rem)] leading-none font-extrabold uppercase"
      >
        {big}
      </span>
      <h2 className="relative pt-12 text-3xl font-bold sm:text-4xl">
        {title} <span className="text-primary">.</span>
      </h2>
    </div>
  );
}

/* --------------------------------- sections -------------------------------- */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold tracking-tight">
          Zain<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={resumeUrl}
            download="Zain-Shafique-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-strong"
          >
            <Download className="size-4" /> Resume
          </a>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              download="Zain-Shafique-Resume.pdf"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <Download className="size-4" /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 right-0 size-[500px] rounded-full bg-primary/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute bottom-0 -left-32 size-[400px] rounded-full bg-primary/5 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <p className="text-lg text-primary">Hello,</p>
        <h1 className="mt-2 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          I'm Zain Shafique
        </h1>
        <p className="typing-caret mt-4 min-h-[2.5rem] text-2xl font-semibold text-primary sm:text-3xl">
          {typed}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Data engineer and analyst who builds production-grade pipelines on Azure —
          from ADF and Databricks lakehouses to Power BI dashboards — with a track
          record of making data faster, cleaner, and decision-ready.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-strong"
          >
            View My Work
          </a>
          <a
            href={resumeUrl}
            download="Zain-Shafique-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Download className="size-4" /> Download CV
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/zain-shafique01"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="https://github.com/zshafique25"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ label, value, delay }: { label: string; value: number; delay: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-primary">{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <Bar value={value} delay={delay} />
      </div>
    </div>
  );
}

function Bar({ value, delay }: { value: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          window.setTimeout(() => setWidth(value), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div
      ref={ref}
      className="skill-fill h-full rounded-full transition-all duration-1000 ease-out"
      style={{ width: `${width}%` }}
    />
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading big="About" title="About Me" />

        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-start gap-6">
              <div className="flex size-24 shrink-0 items-center justify-center rounded-2xl bg-primary text-3xl font-extrabold text-primary-foreground">
                ZS
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Data Engineer <span className="text-primary">&</span> Analyst
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-4" /> Islamabad, Pakistan
                </p>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Software Engineering graduate from NUST who found a home in the data
              world. I design and build end-to-end data platforms on Azure:
              Medallion-architecture lakehouses, CDC pipelines, star schemas, and the
              Power BI dashboards
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Alongside engineering, I manage accounting and financial reporting for
              a multi-location restaurant client and volunteered as a data analyst on
              a research project for Women in Sport, so I care about the decision the
              data drives, not just the pipeline that moves it.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <p className="text-2xl font-extrabold text-primary">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h3 className="mb-6 text-xl font-bold">
              Technical <span className="text-primary">Skills</span>
            </h3>
            <div className="space-y-5">
              {SKILLS.map((skill, i) => (
                <SkillBar key={skill.label} label={skill.label} value={skill.value} delay={i * 80} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item }: { item: (typeof EXPERIENCE)[number] }) {
  return (
    <div className="relative border-l border-border pb-10 pl-8 last:pb-0">
      <span className="absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 border-primary bg-background" />
      <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
        {item.period}
      </span>
      <h3 className="mt-3 text-lg font-bold">{item.role}</h3>
      <p className="text-sm text-muted-foreground">
        {item.company} · {item.location}
      </p>
      <ul className="mt-3 space-y-2">
        {item.points.map((point) => (
          <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Resume() {
  return (
    <section id="resume" className="scroll-mt-20 bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading big="Resume" title="Experience & Education" />

        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h3 className="mb-8 flex items-center gap-2 text-xl font-bold">
              <Award className="size-5 text-primary" /> Experience
            </h3>
            <div>
              {EXPERIENCE.map((item) => (
                <TimelineItem key={item.role} item={item} />
              ))}
            </div>
            <h3 className="mb-4 mt-4 text-xl font-bold">Education</h3>
            <div className="relative border-l border-border pl-8">
              <span className="absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 border-primary bg-background" />
              <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                08/2019 — 06/2023
              </span>
              <h4 className="mt-3 text-lg font-bold">
                B.E. in Software Engineering
              </h4>
              <p className="text-sm text-muted-foreground">
                National University of Sciences & Technology (NUST) · Islamabad,
                Pakistan
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h3 className="mb-8 text-xl font-bold">Skill Groups</h3>
            <div className="space-y-6">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h4 className="flex items-center gap-2 font-semibold">
                    <group.icon className="size-5 text-primary" /> {group.title}
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const Icon = project.icon;
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div className="flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-secondary to-background">
        <Icon className="size-14 text-primary transition-transform duration-300 group-hover:scale-125" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
        <ul className="mt-4 space-y-2">
          {project.points.map((point) => (
            <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading big="Projects" title="Featured Projects" />
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 120}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12" delay={100}>
          <a
            href="https://github.com/zshafique25"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="size-4" /> More Projects on GitHub <ExternalLink className="size-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "zainshafique23@gmail.com",
    href: "mailto:zainshafique23@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 304 7549668",
    href: "tel:+923047549668",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "zain-shafique01",
    href: "https://www.linkedin.com/in/zain-shafique01",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "zshafique25",
    href: "https://github.com/zshafique25",
  },
];

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading big="Contact" title="Get In Touch" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACTS.map((contact, i) => (
            <Reveal key={contact.label} delay={i * 100}>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex h-full flex-col items-center rounded-xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <contact.icon className="size-7 text-primary" />
                <p className="mt-4 font-semibold">{contact.label}</p>
                <p className="mt-1 break-all text-sm text-muted-foreground">
                  {contact.value}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 text-center" delay={100}>
          <a
            href={resumeUrl}
            download="Zain-Shafique-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-strong"
          >
            <Download className="size-4" /> Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Zain Shafique
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/zain-shafique01"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="https://github.com/zshafique25"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="size-4" />
          </a>
          <a
            href="mailto:zainshafique23@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- page ----------------------------------- */

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
