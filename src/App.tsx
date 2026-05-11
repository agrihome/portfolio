import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import './index.css'
import cursorFollowImg from './assets/cursor follow.jpeg'
import Text3DFlip from './components/ui/text-3d-flip'
import Work from './components/Work'
import Services from './components/Services'

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


const STATS = [
  { number: '12+', label: 'Apps Shipped' },
  { number: '2M+', label: 'Total Downloads' },
  { number: '4.8★', label: 'Avg App Rating' },
  { number: '8', label: 'Active Products' },
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

const App = () => {
  const [time, setTime] = useState(new Date())
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // 3D Tilt Effect
  const rotateX = useSpring(useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [20, -20]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-20, 20]), springConfig)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    const timer = setInterval(() => setTime(new Date()), 1000)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      clearInterval(timer)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [theme, mouseX, mouseY])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  }

  return (
    <>
      {/* ── NAV ─────────────────────────────── */}
      <motion.nav 
        className="fixed top-0 left-10 right-10 z-50 flex items-center justify-between px-10 pt-10 pb-6 bg-[var(--nav-bg)] backdrop-blur-md"
        role="navigation" 
        aria-label="Main navigation"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a href="/" className="nav-logo" aria-label="Home">
          <Text3DFlip secondaryChildren="ALLINALL">ADHITHAN</Text3DFlip>
        </a>
        <ul className="nav-links hidden md:flex items-center gap-10 list-none">
          {['Work', 'Services', 'About', 'Process'].map((item, i) => (
            <motion.li 
              key={item}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              <a href={`#${item.toLowerCase()}`} className={item === 'Work' ? 'active' : ''}>
                <Text3DFlip secondaryChildren={
                  item === 'Services' ? 'Products' : 
                  item === 'About' ? 'Story' : 
                  item === 'Process' ? 'Methods' : 
                  undefined
                }>
                  {item}
                </Text3DFlip>
              </a>
            </motion.li>
          ))}
        </ul>
        <div className="nav-right flex items-center gap-5">
          <button
            id="theme-toggle-btn"
            className="theme-toggle flex items-center justify-center w-8 h-8 cursor-pointer bg-transparent text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </motion.div>
          </button>
          <a href="#contact" className="nav-cta" id="nav-cta-link">
            <Text3DFlip>Let's Talk</Text3DFlip>
          </a>
        </div>
      </motion.nav>

      {/* ── HERO ────────────────────────────── */}
      <section id="home" className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden px-6 md:px-12" aria-label="Hero section" style={{ perspective: '1200px' }}>
        {/* Cursor Following Image */}
        <motion.div
          className="absolute pointer-events-none z-50 hidden md:block"
          style={{
            x: smoothX,
            y: smoothY,
            rotateX,
            rotateY,
            translateX: '-50%',
            translateY: '-50%',
            width: '300px',
            height: 'auto',
            opacity: 1,
            transformStyle: 'preserve-3d',
          }}
        >
          <img 
            src={cursorFollowImg} 
            alt="" 
            className="w-full h-auto shadow-2xl rounded-2xl" 
          />
        </motion.div>

        <div className="hero-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
          >
            I THINK<br />
            CREATE,<br />
            MARKET
          </motion.h1>
        </div>

        <motion.div 
          className="nominee-badge"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="nominee-logo">w.</span>
          <span className="nominee-text">Nominee</span>
        </motion.div>

        <motion.div 
          className="hero-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="hero-footer-left label-caps">
            I BUILD, SCALE & MARKET APPS THAT PEOPLE LOVE.
          </div>
          <div className="hero-footer-right label-caps">
            TAMIL NADU, IN &nbsp; {formatTime(time)}
          </div>
        </motion.div>
      </section>

      {/* ── WORK ────────────────────────────── */}
      <Work />

      {/* ── SERVICES ────────────────────────── */}
      <Services />

      {/* ── ABOUT ───────────────────────────── */}
      <section id="about" className="section" aria-label="About">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="headline-lg">The Builder</h2>
          <span className="section-header-right">About</span>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>

          <motion.div 
            className="about-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────── */}
      <section id="process" className="section" aria-label="Process">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="headline-lg">How I Work</h2>
          <span className="section-header-right">Process</span>
        </motion.div>

        <motion.div 
          className="process-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
        >
          {PROCESS.map((step) => (
            <motion.div 
              key={step.num} 
              className="process-step" 
              id={`process-${step.num}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="process-step-num label-caps">{step.num}</div>
              <div className="process-step-title">{step.title}</div>
              <p className="process-step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section id="contact" className="cta-section" aria-label="Contact">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Have an <em>Idea?</em><br />
          Let's Build It.
        </motion.h2>
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
