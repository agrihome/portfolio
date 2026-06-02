import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import cursorFollowImg from './assets/cursor follow.jpeg'
import DestinyExplorer from './components/DestinyExplorer'
import SkillsMatrix from './components/SkillsMatrix'
import MarketingShowcase from './components/MarketingShowcase'
import Contact from './components/Contact'

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // 3D Tilt Effect
  const rotateX = useSpring(useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-15, 15]), springConfig)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [theme, mouseX, mouseY])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <>
      {/* ── NAV ─────────────────────────────── */}
      <motion.nav 
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 py-4 rounded-full border border-[var(--border-glass)] backdrop-blur-2xl shadow-2xl"
        style={{ width: '90%', maxWidth: '1200px', background: 'var(--nav-bg)' }}
        role="navigation" 
        aria-label="Main navigation"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        <a href="/" className="font-bold text-lg tracking-tight hover:text-[var(--accent-purple)] transition-colors">
          ADHITHAN
        </a>
        <ul className="hidden md:flex items-center gap-8 list-none">
          {['Home', 'Create', 'Build', 'Market'].map((item, i) => (
            <motion.li 
              key={item}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <a href={`#${item.toLowerCase()}`} className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <button
            className="w-8 h-8 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </motion.div>
          </button>
          <a href="#contact" className="glass-button">
            Let's Talk
          </a>
        </div>
      </motion.nav>

      {/* ── HERO ────────────────────────────── */}
      <section id="home" className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden px-6 md:px-12" aria-label="Hero section" style={{ perspective: '1200px' }}>
        
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Cursor Following Image */}
        <motion.div
          className="absolute pointer-events-none z-0 hidden md:block"
          style={{
            x: smoothX,
            y: smoothY,
            rotateX,
            rotateY,
            translateX: '-50%',
            translateY: '-50%',
            width: '340px',
            height: 'auto',
            opacity: 0.6,
            transformStyle: 'preserve-3d',
          }}
        >
          <img 
            src={cursorFollowImg} 
            alt="" 
            className="w-full h-auto rounded-3xl shadow-[0_0_60px_rgba(147,51,234,0.3)] border border-white/10" 
          />
        </motion.div>

        <div className="text-center relative z-10">
          <motion.h1
            className="text-[clamp(60px,12vw,140px)] font-extrabold leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          >
            I DESIGN <br />
            <span className="text-gradient-vibrant">BUILD</span>, & <br />
            MARKET <br />
            PRODUCTS.
          </motion.h1>
          <motion.p
            className="mt-8 text-lg text-[var(--text-secondary)] max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Elevating ideas into premium digital experiences through deep engineering and striking design.
          </motion.p>
        </div>

      </section>

      {/* ── SECTIONS ─────────────────────────── */}
      <div className="flex flex-col gap-32 pb-40 px-6 md:px-[var(--spacing-margin-desktop)] max-w-[1600px] mx-auto">
        <DestinyExplorer />
        <SkillsMatrix />
        <MarketingShowcase />
        <Contact />
      </div>

    </>
  )
}

export default App
