import { useState, useEffect } from 'react'
import './index.css'
import appMockup from './assets/hero.png'

const MARQUEE_ITEMS = [
  'Mobile App Development',
  'App Store Optimization',
  'Growth Marketing',
  'iOS & Android',
  'Product Strategy',
  'User Acquisition',
  'React Native',
  'Swift & Kotlin',
]

const PROJECTS = [
  {
    id: 'p1',
    name: 'Destiny',
    year: '2025',
    tag: 'Habit Tracker',
  },
  {
    id: 'p2',
    name: 'Vault',
    year: '2024',
    tag: 'Finance App',
  },
]

const STATS = [
  { number: '12+', label: 'Apps Shipped' },
  { number: '2M+', label: 'Total Downloads' },
  { number: '4.8★', label: 'Avg App Rating' },
  { number: '8', label: 'Active Products' },
]

const SERVICES = [
  { num: '01', name: 'App Design & Development' },
  { num: '02', name: 'Growth & User Acquisition' },
  { num: '03', name: 'App Store Optimization' },
  { num: '04', name: 'Product Strategy' },
  { num: '05', name: 'Marketing & Launch' },
]

const PROCESS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Deep research into the problem space, target users, and competitive landscape. No assumptions.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Architecture, wireframes, and pixel-perfect UI. Every interaction is intentional.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Clean, performant native or cross-platform code. Ship fast without cutting corners.',
  },
  {
    num: '04',
    title: 'Grow',
    desc: 'ASO, paid acquisition, organic content, and analytics. Growth is a system, not luck.',
  },
]

const TAGS = [
  'iOS', 'Android', 'React Native', 'Swift', 'Kotlin', 'Flutter',
  'Firebase', 'Growth', 'ASO', 'Product Design',
]

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <>
      {/* ── NAV ─────────────────────────────── */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <a href="/" className="nav-logo" aria-label="Home">STUDIO</a>
        <ul className="nav-links">
          <li><a href="#work" className="active">Work</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#process">Process</a></li>
        </ul>
        <div className="nav-right">
          <button
            id="theme-toggle-btn"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
          <a href="#contact" className="nav-cta" id="nav-cta-link">Let's Talk</a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────── */}
      <section id="home" className="hero" aria-label="Hero section" style={{ paddingTop: '80px' }}>
        <div className="hero-meta-row">
          <div className="hero-meta-left">
            <span className="label-caps">Est. 2021</span>
            <span className="label-caps" style={{ color: 'var(--ink-muted)' }}>Mobile Apps & Marketing</span>
          </div>
          <div className="hero-meta-right">
            <span className="hero-index label-caps">Available for projects</span>
          </div>
        </div>

        <div className="hero-headline">
          <h1>
            I Build<br />
            Apps <em>People</em><br />
            Actually Use
          </h1>
        </div>

        <div className="hero-sub-row">
          <p className="hero-sub-desc">
            From zero to the App Store — I design, develop, and market mobile apps that acquire users and retain them.
          </p>
          <div className="hero-sub-actions">
            <a href="#work" className="btn-primary" id="hero-view-work-btn">View Work</a>
            <a href="#contact" className="btn-secondary" id="hero-contact-btn">Start a Project</a>
          </div>
          <div className="scroll-indicator" aria-hidden="true">
            <div className="scroll-line" />
            <span>Scroll</span>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────── */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-inner">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} className="marquee-item">
              <div className="marquee-dot" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── WORK ────────────────────────────── */}
      <section id="work" className="section" aria-label="Selected work">
        <div className="section-header">
          <h2 className="headline-lg">Selected Work</h2>
          <span className="section-header-right">2021 — 2025</span>
        </div>

        <div className="projects-grid">
          {/* Large featured card */}
          <article className="project-card project-card-large" id="project-destiny">
            <div className="project-card-img-wrap">
              <img
                src={appMockup}
                alt="Destiny and Vault app mockups on dark background"
                loading="lazy"
              />
            </div>
            <div className="project-card-meta">
              <span className="project-card-name">Destiny — Habit OS</span>
              <div className="project-card-right">
                <span className="project-card-year">2025</span>
                <span className="project-card-tag">Productivity · iOS</span>
              </div>
            </div>
          </article>

          {/* Smaller cards */}
          {PROJECTS.map((p) => (
            <article
              key={p.id}
              className="project-card"
              id={`project-${p.id}`}
            >
              <div className="project-card-img-wrap project-card-placeholder">
                <span className="project-card-initial">
                  {p.name[0]}
                </span>
              </div>
              <div className="project-card-meta">
                <span className="project-card-name">{p.name}</span>
                <div className="project-card-right">
                  <span className="project-card-year">{p.year}</span>
                  <span className="project-card-tag">{p.tag}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── STATS ───────────────────────────── */}
      <div className="stats-row" aria-label="Key statistics">
        {STATS.map((s, i) => (
          <div key={i} className="stat-item">
            <span className="stat-number">{s.number}</span>
            <span className="stat-label label-caps">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── SERVICES ────────────────────────── */}
      <section id="services" className="section" aria-label="Services">
        <div className="section-header">
          <h2 className="headline-lg">What I Do</h2>
          <span className="section-header-right">Services</span>
        </div>

        <div className="services-list">
          {SERVICES.map((s) => (
            <div key={s.num} className="service-item" id={`service-${s.num}`}>
              <div className="service-item-left">
                <span className="service-num label-caps">{s.num}</span>
                <span className="service-name">{s.name}</span>
              </div>
              <span className="service-arrow" aria-hidden="true">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────── */}
      <section id="about" className="section" aria-label="About">
        <div className="section-header">
          <h2 className="headline-lg">The Builder</h2>
          <span className="section-header-right">About</span>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="about-big-text">I Ship.<br />I Scale.<br />I Repeat.</div>
            <p className="about-body">
              I'm a solo indie developer and marketer who has taken apps from idea to millions of downloads. I don't hand off — I own the full stack: product, design, engineering, and growth.
            </p>
            <p className="about-body" style={{ marginTop: '16px' }}>
              My apps are used by people in 40+ countries. I care deeply about the craft — every pixel, every animation, every ASO keyword.
            </p>
            <div className="about-tags">
              {TAGS.map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="about-right-top">
              <span className="label-caps" style={{ display: 'block', marginBottom: '20px' }}>
                Philosophy
              </span>
              <p>
                Most apps fail not because of bad code — but because of bad decisions. I obsess over the problem before writing a single line.
              </p>
              <p style={{ marginTop: '16px' }}>
                Marketing is not a phase that comes after launch. It starts on day one. Distribution is part of the product.
              </p>
            </div>

            <div className="about-right-bottom">
              <span className="label-caps" style={{ display: 'block', marginBottom: '20px' }}>
                Currently
              </span>
              <p>Building in public · Open to consulting · Based in India</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────── */}
      <section id="process" className="section" aria-label="Process">
        <div className="section-header">
          <h2 className="headline-lg">How I Work</h2>
          <span className="section-header-right">Process</span>
        </div>

        <div className="process-row">
          {PROCESS.map((step) => (
            <div key={step.num} className="process-step" id={`process-${step.num}`}>
              <div className="process-step-num label-caps">{step.num}</div>
              <div className="process-step-title">{step.title}</div>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section id="contact" className="cta-section" aria-label="Contact">
        <h2>
          Have an <em>Idea?</em><br />
          Let's Build It.
        </h2>
        <div className="cta-actions">
          <a href="mailto:hello@studio.com" className="btn-primary" id="cta-email-btn">
            hello@studio.com
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="btn-secondary" id="cta-twitter-btn">
            Follow on X
          </a>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────── */}
      <footer className="footer" role="contentinfo">
        <span className="footer-logo">STUDIO</span>
        <ul className="footer-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <span className="footer-copy">© 2025</span>
      </footer>
    </>
  )
}

export default App
