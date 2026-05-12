import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import cursorFollowImg from './assets/cursor follow.jpeg'
import Text3DFlip from './components/ui/text-3d-flip'
import Work from './components/Work'
import Services from './components/Services'
import Contact from './components/Contact'


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
          {['Home', 'Work', 'Services', 'Contact'].map((item, i) => (
            <motion.li 
              key={item}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              <a href={`#${item.toLowerCase()}`} className={item === 'Home' ? 'active' : ''}>
                <Text3DFlip secondaryChildren={
                  item === 'Home' ? 'Start' : 
                  item === 'Work' ? 'Projects' : 
                  item === 'Services' ? 'Products' : 
                  item === 'Contact' ? 'Reach Out' : 
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

      <Work />
      <Services />
      
      <Contact />

    </>
  )
}

export default App
