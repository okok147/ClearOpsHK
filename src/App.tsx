import { useMemo, useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardList,
  FileText,
  Mail,
  MessageCircle,
  PanelsTopLeft,
  ShieldCheck,
  Table2,
  UserCheck,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { site } from './content/site'
import { cn } from './lib/utils'

const iconMap = {
  whatsapp: MessageCircle,
  excel: Table2,
  vip: UserCheck,
  handover: ClipboardList,
  dashboard: PanelsTopLeft,
  customer: UserCheck,
  task: CheckCircle2,
  intake: ArrowDownRight,
  sop: FileText,
}

const serviceIcons = [
  iconMap.dashboard,
  iconMap.customer,
  iconMap.task,
  iconMap.intake,
  iconMap.sop,
]

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-slate">
      {children}
    </p>
  )
}

function BrandLockup({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        className={cn(
          'flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-white shadow-sm',
          inverse ? 'border-white/20' : 'border-line',
        )}
      >
        <img src={site.brand.logo} alt="" className="h-full w-full object-cover" aria-hidden="true" />
      </span>
      <span
        className={cn(
          'font-ui text-sm font-semibold uppercase tracking-[0.16em]',
          inverse ? 'text-white' : 'text-charcoal',
        )}
      >
        {site.name}
      </span>
    </span>
  )
}

function SectionHeader({
  label,
  title,
  intro,
  className,
}: {
  label: string
  title: string
  intro?: string
  className?: string
}) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <Label>{label}</Label>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-charcoal md:text-5xl">
        {title}
      </h2>
      {intro ? <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{intro}</p> : null}
    </div>
  )
}

function ButtonLink({
  href,
  children,
  variant = 'primary',
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 font-ui text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-paper',
        variant === 'primary'
          ? 'bg-accent text-white shadow-soft hover:bg-accentDark'
          : 'border border-line bg-paper/75 text-charcoal hover:border-accent hover:text-accent',
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  )
}

function HeroVisual() {
  const messyNotes = [
    { text: '客人週五前要覆', style: 'left-3 top-6 rotate-[-3deg]' },
    { text: 'Excel v7 final?', style: 'left-10 top-28 rotate-[2deg]' },
    { text: '客人語音 2:14', style: 'left-1 top-52 rotate-[-1deg]' },
  ]

  const systemCards = [
    { label: 'FOLLOW-UP', title: '未跟進', meta: '4 items', status: 'Next: Tue' },
    { label: 'VIP CLIENTS', title: 'VIP 客戶', meta: '12 active', status: '2 due' },
    { label: 'TASK BOARD', title: '已完成', meta: '18 this week', status: 'Clear' },
    { label: 'WEEKLY VIEW', title: '今週重點', meta: '3 blockers', status: 'Boss view' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="relative hidden min-h-[500px] overflow-hidden rounded-none border-y border-line bg-paper/70 md:block md:min-h-[600px] md:border"
      aria-label="由零散營運筆記整理成清晰系統圖的抽象示意"
    >
      <div className="absolute inset-0 blueprint-grid opacity-80" />
      <div className="absolute left-5 top-5 flex items-center gap-2 font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
        <span className="h-2 w-2 rounded-full bg-accent" />
        Live operation map
      </div>

      <div className="absolute left-4 top-16 h-[390px] w-[42%] md:left-8 md:top-24">
        {messyNotes.map((note) => (
          <motion.div
            key={note.text}
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className={cn(
              'absolute w-32 border border-line bg-white/85 px-3 py-3 text-sm leading-6 text-muted shadow-note md:w-44 md:px-4',
              note.style,
            )}
          >
            <span className="mb-2 block h-1 w-9 bg-amber" />
            {note.text}
          </motion.div>
        ))}
      </div>

      <svg
        className="absolute left-[33%] top-[26%] h-[260px] w-[34%] text-accent/55"
        viewBox="0 0 220 260"
        role="presentation"
        aria-hidden="true"
      >
        <path
          d="M10 20 C80 35 90 70 160 78"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 7"
        />
        <path
          d="M8 130 C78 128 95 118 165 118"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 7"
        />
        <path
          d="M20 230 C92 205 108 178 175 168"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 7"
        />
        <circle cx="174" cy="78" r="4" fill="currentColor" />
        <circle cx="170" cy="118" r="4" fill="currentColor" />
        <circle cx="180" cy="168" r="4" fill="currentColor" />
      </svg>

      <div className="absolute right-3 top-20 grid w-[47%] gap-2 md:right-8 md:top-28 md:w-[48%] md:gap-4">
        {systemCards.map((card, index) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.26 + index * 0.08 }}
            className="border border-line bg-white/95 px-3 py-3 shadow-soft backdrop-blur md:px-4 md:py-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                  {card.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-charcoal md:text-xl">{card.title}</p>
              </div>
              <span className="hidden rounded-full border border-line px-2 py-1 font-ui text-[10px] text-muted sm:inline-flex">
                {card.status}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-1.5 flex-1 bg-line" />
              <span className="h-1.5 flex-[1.7] bg-accent" />
              <span className="font-ui text-xs text-muted">{card.meta}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-line pt-4 font-ui text-xs text-muted">
        <span>MESSY INPUTS</span>
        <span className="text-accent">TRACEABLE SYSTEM</span>
      </div>
    </motion.div>
  )
}

function Hero() {
  return (
    <header className="relative isolate overflow-hidden border-b border-line bg-paper">
      <div className="absolute inset-0 blueprint-grid opacity-45" />
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#" aria-label={site.name}>
          <BrandLockup />
        </a>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 font-ui text-sm font-semibold text-charcoal transition hover:border-accent hover:text-accent"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email
        </a>
      </nav>

      <div className="relative grid grid-cols-1 items-center gap-10 px-5 pb-10 pt-5 md:min-h-[calc(100svh-73px)] md:grid-cols-[0.9fr_1.1fr] md:px-8 md:pb-16 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-xl md:ml-auto md:mr-0"
        >
          <Label>{site.hero.eyebrow}</Label>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.12] text-charcoal sm:text-5xl md:text-6xl lg:text-7xl">
            {site.hero.headline}
          </h1>
          <p className="mt-5 text-base leading-7 text-muted md:text-xl md:leading-9">
            {site.hero.subheadline}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#enquiry">
              {site.hero.primaryCta}
            </ButtonLink>
            <ButtonLink href={`mailto:${site.email}?subject=ClearOpsHK 營運查詢`} variant="secondary">
              {site.hero.secondaryCta}
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-muted">
            回覆信箱：<a className="font-semibold text-accent" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </motion.div>
        <HeroVisual />
      </div>
    </header>
  )
}

function ProblemScene() {
  const icons = [iconMap.whatsapp, iconMap.task, iconMap.sop]

  return (
    <section className="section-shell">
      <Reveal>
        <SectionHeader
          label={site.problem.label}
          title={site.problem.title}
          intro={site.problem.intro}
        />
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {site.problem.scenes.map((scene, index) => {
          const Icon = icons[index]
          return (
            <Reveal key={scene.title} delay={index * 0.04}>
              <article className="h-full border border-line bg-white px-5 py-6 shadow-soft">
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-semibold leading-snug text-charcoal">{scene.title}</h3>
                <p className="mt-4 leading-7 text-muted">{scene.scene}</p>
                <p className="mt-5 border-t border-line pt-4 text-sm font-semibold leading-6 text-charcoal">
                  {scene.consequence}
                </p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function WhatWeBuild() {
  return (
    <section className="section-shell">
      <Reveal>
        <SectionHeader label={site.services.label} title={site.services.title} />
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {site.services.items.map((item, index) => {
          const Icon = serviceIcons[index]
          return (
            <Reveal key={item.title} delay={(index % 3) * 0.04}>
              <article className="group h-full border border-line bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent/60">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-paper text-accent ring-1 ring-line">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-charcoal">{item.title}</h3>
                <dl className="mt-5 grid gap-4 text-sm leading-6">
                  <div>
                    <dt className="font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                      Problem
                    </dt>
                    <dd className="mt-1 text-charcoal">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                      System built
                    </dt>
                    <dd className="mt-1 text-charcoal">{item.system}</dd>
                  </div>
                  <div>
                    <dt className="font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                      Result
                    </dt>
                    <dd className="mt-1 text-charcoal">{item.result}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section-shell">
      <Reveal>
        <SectionHeader label={site.process.label} title={site.process.title} />
      </Reveal>
      <div className="mt-10 grid gap-0 border border-line bg-white shadow-soft md:grid-cols-2 lg:grid-cols-4">
        {site.process.steps.map((step, index) => (
          <Reveal key={step} delay={(index % 3) * 0.04}>
            <div className="min-h-32 border-b border-line p-6 md:border-r lg:border-b-0">
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Step {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-5 text-xl font-semibold leading-snug text-charcoal">{step}</h3>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function EnquiryForm() {
  const [name, setName] = useState('')
  const [topic, setTopic] = useState(site.enquiry.topics[0])
  const [message, setMessage] = useState('')

  const mailtoHref = useMemo(() => {
    const subject = `ClearOpsHK 查詢：${topic}`
    const body = [
      name ? `姓名 / 公司：${name}` : '姓名 / 公司：',
      `查詢主題：${topic}`,
      '',
      '留言內容：',
      message,
    ].join('\n')

    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }, [message, name, topic])

  return (
    <section id="enquiry" className="section-shell border-y border-line bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <div className="max-w-xl">
            <SectionHeader
              label={site.enquiry.label}
              title={site.enquiry.title}
              intro={site.enquiry.intro}
            />
            <p className="mt-6 text-base leading-7 text-muted">
              {site.enquiry.directEmail}{' '}
              <a className="font-semibold text-accent" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <form
            className="grid gap-5 border border-line bg-paper p-5 shadow-soft md:p-7"
            onSubmit={(event) => {
              event.preventDefault()
              window.location.href = mailtoHref
            }}
          >
            <label className="grid gap-2">
              <span className="font-ui text-sm font-semibold text-charcoal">{site.enquiry.nameLabel}</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="min-h-12 border border-line bg-white px-4 text-base text-charcoal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                name="name"
                autoComplete="name"
              />
            </label>
            <label className="grid gap-2">
              <span className="font-ui text-sm font-semibold text-charcoal">{site.enquiry.topicLabel}</span>
              <select
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                className="min-h-12 border border-line bg-white px-4 text-base text-charcoal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                name="topic"
              >
                {site.enquiry.topics.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2">
              <span className="font-ui text-sm font-semibold text-charcoal">{site.enquiry.messageLabel}</span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="min-h-36 resize-y border border-line bg-white px-4 py-3 text-base leading-7 text-charcoal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                name="message"
                placeholder={site.enquiry.messagePlaceholder}
              />
            </label>
            <a
              href={mailtoHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-ui text-sm font-semibold text-white transition hover:bg-accentDark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-paper"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {site.enquiry.button}
            </a>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section-shell border-y border-line bg-cream">
      <Reveal>
        <SectionHeader label={site.pricing.label} title={site.pricing.title} />
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {site.pricing.packages.map((pkg, index) => (
          <Reveal key={pkg.name} delay={index * 0.05}>
            <article className="flex h-full flex-col border border-line bg-white p-6 shadow-soft">
              <h3 className="text-2xl font-semibold text-charcoal">{pkg.name}</h3>
              <p className="mt-4 font-ui text-xl font-semibold text-accent">{pkg.price}</p>
              <p className="mt-4 leading-7 text-muted">{pkg.description}</p>
              <ul className="mt-7 grid gap-3 border-t border-line pt-6">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-charcoal">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function WhyClearOps() {
  return (
    <section className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeader label={site.why.label} title={site.why.title} />
        </Reveal>
        <div className="grid gap-4">
          {site.why.reasons.map((reason, index) => (
            <Reveal key={reason} delay={index * 0.04}>
              <div className="flex gap-4 border-t border-line py-6">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <p className="text-xl leading-8 text-charcoal">{reason}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="section-shell bg-accent text-white">
      <Reveal>
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <BrandLockup inverse />
          </div>
          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            {site.finalCta.headline}
          </h2>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#enquiry"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-ui text-sm font-semibold text-accent transition hover:bg-paper"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {site.finalCta.button}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal px-5 py-10 text-stone-300 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <BrandLockup inverse />
          <p className="mt-3 text-sm">{site.email}</p>
          <p className="mt-1 text-sm">Hong Kong</p>
        </div>
        <div className="flex flex-wrap gap-4 font-ui text-sm">
          <a className="transition hover:text-white" href={site.threadsUrl}>
            Threads
          </a>
          <a className="transition hover:text-white" href={`mailto:${site.email}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Hero />
      <main>
        <EnquiryForm />
        <ProblemScene />
        <WhatWeBuild />
        <Process />
        <Pricing />
        <WhyClearOps />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

export default App
