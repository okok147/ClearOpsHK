import { useMemo, useState } from 'react'
import {
  ArrowRight,
  CalendarClock,
  Check,
  ClipboardList,
  Eye,
  FileText,
  Mail,
  PanelsTopLeft,
  Search,
  ShieldCheck,
  Table2,
  UserCheck,
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { site } from './content/site'
import { cn } from './lib/utils'

const serviceIcons = [PanelsTopLeft, UserCheck, ClipboardList, Table2, CalendarClock, FileText]

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
      transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Label({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return (
    <p
      className={cn(
        'font-ui text-[11px] font-semibold uppercase tracking-[0.18em]',
        inverse ? 'text-white/70' : 'text-slate',
      )}
    >
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
  inverse = false,
  className,
}: {
  label: string
  title: string
  intro?: string
  inverse?: boolean
  className?: string
}) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <Label inverse={inverse}>{label}</Label>
      <h2
        className={cn(
          'mt-4 text-3xl font-semibold leading-tight md:text-5xl',
          inverse ? 'text-white' : 'text-charcoal',
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p className={cn('mt-5 max-w-2xl text-lg leading-8', inverse ? 'text-white/72' : 'text-muted')}>
          {intro}
        </p>
      ) : null}
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
  variant?: 'primary' | 'secondary' | 'light'
}) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 font-ui text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
        variant === 'primary' &&
          'bg-accent text-white shadow-soft hover:bg-accentDark focus:ring-offset-paper',
        variant === 'secondary' &&
          'border border-line bg-paper/70 text-charcoal hover:border-accent hover:text-accent focus:ring-offset-paper',
        variant === 'light' && 'bg-white text-accent hover:bg-paper focus:ring-offset-accent',
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  )
}

type Photo = (typeof site.photos.items)[number]

function CinematicImage({
  photo,
  className,
  priority = false,
}: {
  photo: Photo
  className?: string
  priority?: boolean
}) {
  return (
    <figure className={cn('group relative overflow-hidden border border-line bg-charcoal shadow-soft', className)}>
      <img
        src={photo.src}
        alt={photo.alt}
        loading={priority ? 'eager' : 'lazy'}
        className="h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-[1.025]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.02),rgba(17,17,17,0.28))]" />
      <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white md:p-5">
        <span className="font-ui text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
          {photo.meta}
        </span>
        <p className="mt-2 max-w-md text-sm leading-6 text-white/88">{photo.caption}</p>
      </figcaption>
    </figure>
  )
}

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 70])
  const photo = site.photos.items[0]

  return (
    <header className="relative isolate min-h-svh overflow-hidden bg-charcoal text-white">
      <motion.img
        src={photo.src}
        alt=""
        aria-hidden="true"
        style={{ y }}
        className="absolute inset-0 h-[115%] w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.88),rgba(17,17,17,0.56)_46%,rgba(17,17,17,0.18))]" />
      <div className="absolute inset-0 film-grain opacity-35" />
      <nav className="relative z-10 flex items-center justify-between px-5 py-5 md:px-8 lg:px-12">
        <a href="#" aria-label={site.name}>
          <BrandLockup inverse />
        </a>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/10 px-4 py-2 font-ui text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-charcoal"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email
        </a>
      </nav>

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-82px)] max-w-7xl items-end px-5 pb-10 pt-10 md:px-8 md:pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <Label inverse>{site.hero.eyebrow}</Label>
          <p className="mt-6 font-ui text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
            {site.name}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.12] sm:text-5xl md:text-7xl">
            {site.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 md:text-xl md:leading-9">
            {site.hero.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#enquiry" variant="light">
              {site.hero.primaryCta}
            </ButtonLink>
            <ButtonLink href={`mailto:${site.email}?subject=ClearOpsHK 營運查詢`} variant="secondary">
              {site.hero.secondaryCta}
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-12 hidden self-center border-l border-white/24 pl-8 lg:block"
        >
          <p className="max-w-sm text-2xl leading-9 text-white/86">
            讓人看見生意的另一面。那些平時藏在查詢、報價、訊息、文件、跟進與日常裡的另一面。
          </p>
          <div className="mt-8 grid max-w-sm grid-cols-2 gap-px overflow-hidden border border-white/18 bg-white/18">
            {['ENQUIRIES', 'QUOTES', 'FOLLOW-UP', 'HANDOVER'].map((item) => (
              <div key={item} className="bg-charcoal/55 px-4 py-4 font-ui text-xs tracking-[0.16em] text-white/72">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  )
}

function Essay() {
  return (
    <section className="section-shell border-b border-line bg-paper">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <Reveal>
          <SectionHeader label={site.essay.label} title={site.essay.title} intro={site.essay.intro} />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid gap-5 text-xl leading-9 text-charcoal md:text-2xl md:leading-10">
            {site.essay.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function HiddenLayer() {
  return (
    <section className="section-shell bg-cream">
      <Reveal>
        <SectionHeader label={site.hiddenLayer.label} title={site.hiddenLayer.title} />
      </Reveal>
      <div className="mt-12 grid overflow-hidden border border-line bg-paper shadow-soft lg:grid-cols-2">
        <Reveal>
          <div className="h-full border-b border-line p-6 md:p-8 lg:border-b-0 lg:border-r">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {site.hiddenLayer.surfaceTitle}
            </p>
            <ul className="mt-8 grid gap-5">
              {site.hiddenLayer.surface.map((item) => (
                <li key={item} className="flex gap-4 text-lg leading-8 text-muted">
                  <Eye className="mt-1 h-5 w-5 shrink-0 text-slate" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full bg-white p-6 md:p-8">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {site.hiddenLayer.hiddenTitle}
            </p>
            <ul className="mt-8 grid gap-5">
              {site.hiddenLayer.hidden.map((item) => (
                <li key={item} className="flex gap-4 text-lg font-semibold leading-8 text-charcoal">
                  <Search className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function PhotoArchive() {
  const [heroPhoto, ...supporting] = site.photos.items

  return (
    <section className="section-shell border-y border-line bg-charcoal text-white">
      <div className="grid gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-8">
          <SectionHeader label={site.photos.label} title={site.photos.title} intro={site.photos.intro} inverse />
        </Reveal>
        <div className="grid gap-5">
          <Reveal>
            <CinematicImage photo={heroPhoto} className="aspect-[4/3] md:aspect-[16/9]" priority />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {supporting.map((photo, index) => (
              <Reveal key={photo.src} delay={(index % 2) * 0.05}>
                <CinematicImage photo={photo} className="aspect-[4/3]" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatWeBuild() {
  return (
    <section className="section-shell bg-paper">
      <Reveal>
        <SectionHeader label={site.services.label} title={site.services.title} />
      </Reveal>
      <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line shadow-soft md:grid-cols-2 xl:grid-cols-3">
        {site.services.items.map((item, index) => {
          const Icon = serviceIcons[index]
          return (
            <Reveal key={item.title} delay={(index % 3) * 0.04}>
              <article className="group h-full bg-white p-6 transition duration-200 hover:bg-paper md:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-paper text-accent ring-1 ring-line">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-snug text-charcoal">{item.title}</h3>
                <dl className="mt-6 grid gap-5 text-sm leading-6">
                  <div>
                    <dt className="font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                      Hidden trace
                    </dt>
                    <dd className="mt-1 text-charcoal">{item.hidden}</dd>
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

function CaseStory() {
  return (
    <section className="section-shell bg-cream">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <CinematicImage photo={site.photos.items[4]} className="aspect-[4/3]" />
        </Reveal>
        <Reveal delay={0.08}>
          <SectionHeader label={site.caseStory.label} title={site.caseStory.title} intro={site.caseStory.intro} />
          <div className="mt-8 border-y border-line py-6">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Built into visibility
            </p>
            <ul className="mt-5 grid gap-3">
              {site.caseStory.built.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-charcoal">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-lg leading-8 text-muted">{site.caseStory.result}</p>
        </Reveal>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section-shell border-y border-line bg-paper">
      <Reveal>
        <SectionHeader label={site.process.label} title={site.process.title} />
      </Reveal>
      <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line shadow-soft md:grid-cols-2 lg:grid-cols-3">
        {site.process.steps.map((step, index) => (
          <Reveal key={step.title} delay={(index % 3) * 0.04}>
            <div className="min-h-48 bg-white p-6 md:p-7">
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Step {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-5 text-2xl font-semibold leading-snug text-charcoal">{step.title}</h3>
              <p className="mt-4 leading-7 text-muted">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section-shell bg-cream">
      <Reveal>
        <SectionHeader label={site.pricing.label} title={site.pricing.title} />
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {site.pricing.packages.map((pkg, index) => (
          <Reveal key={pkg.name} delay={index * 0.05}>
            <article className="flex h-full flex-col border border-line bg-white p-6 shadow-soft md:p-7">
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
    <section className="section-shell bg-paper">
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
            <SectionHeader label={site.enquiry.label} title={site.enquiry.title} intro={site.enquiry.intro} />
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
            <label className="grid gap-2" htmlFor="enquiry-name">
              <span className="font-ui text-sm font-semibold text-charcoal">{site.enquiry.nameLabel}</span>
              <input
                id="enquiry-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="min-h-12 border border-line bg-white px-4 text-base text-charcoal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                name="name"
                autoComplete="name"
              />
            </label>
            <label className="grid gap-2" htmlFor="enquiry-topic">
              <span className="font-ui text-sm font-semibold text-charcoal">{site.enquiry.topicLabel}</span>
              <select
                id="enquiry-topic"
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
            <label className="grid gap-2" htmlFor="enquiry-message">
              <span className="font-ui text-sm font-semibold text-charcoal">{site.enquiry.messageLabel}</span>
              <textarea
                id="enquiry-message"
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

function FinalCta() {
  return (
    <section className="section-shell bg-accent text-white">
      <Reveal>
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <BrandLockup inverse />
          </div>
          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">{site.finalCta.headline}</h2>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={`mailto:${site.email}?subject=ClearOpsHK 營運查詢`} variant="light">
              {site.finalCta.button}
            </ButtonLink>
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
        <Essay />
        <HiddenLayer />
        <PhotoArchive />
        <WhatWeBuild />
        <CaseStory />
        <Process />
        <Pricing />
        <WhyClearOps />
        <EnquiryForm />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

export default App
