import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import cursorFollowImg from './assets/cursor follow.jpeg'
import DestinyExplorer from './components/DestinyExplorer'
import SkillsMatrix from './components/SkillsMatrix'
import MarketingShowcase from './components/MarketingShowcase'
import Contact from './components/Contact'

const App = () => {
  const [theme] = useState<'dark'>('dark')

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



  return (
    <>
      {/* ── NAV ─────────────────────────────── */}
      <motion.nav 
        className="fixed top-0 md:top-6 left-0 md:left-1/2 md:-translate-x-1/2 z-50 flex items-center justify-between px-6 md:px-8 py-4 md:rounded-full border-b md:border border-[var(--border-glass)] backdrop-blur-2xl shadow-2xl w-full md:w-[90%] max-w-[1200px]"
        style={{ background: 'var(--nav-bg)' }}
        role="navigation" 
        aria-label="Main navigation"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        <a href="/" className="font-bold text-lg tracking-tight hover:text-[var(--accent-gold)] transition-colors">
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

          <a href="#contact" className="glass-button hidden sm:inline-flex">
            Let's Talk
          </a>
        </div>
      </motion.nav>

      {/* ── HERO ────────────────────────────── */}
      <section id="home" className="w-full flex flex-col justify-center items-center relative overflow-hidden px-6 md:px-12 bg-black pt-32 pb-16 lg:h-screen lg:py-0" aria-label="Hero section" style={{ perspective: '1200px' }}>
        
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
            width: '380px',
            height: 'auto',
            transformStyle: 'preserve-3d',
            zIndex: 5,
          }}
        >
          <img 
            src={cursorFollowImg} 
            alt="" 
            className="w-full h-auto rounded-3xl border-[4px] border-white/20 shadow-2xl" 
          />
        </motion.div>

        <div className="text-center relative z-10 w-full flex flex-col items-center">
          <div className="text-[clamp(40px,10vw,140px)] font-extrabold leading-[1.05] tracking-tight flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              I DESIGN
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
            >
              <span className="text-gradient-vibrant">BUILD</span>, &
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            >
              MARKET
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
            >
              PRODUCTS.
            </motion.div>
          </div>

          <motion.p
            className="mt-10 text-lg md:text-xl text-[var(--text-secondary)] max-w-lg mx-auto font-medium"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Elevating ideas into premium digital experiences through deep engineering and striking design.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="mt-12 lg:absolute lg:bottom-12 lg:mt-0 left-1/2 lg:-translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-[var(--accent-gold)] to-transparent"
          />
        </motion.div>

      </section>

      {/* ── SECTIONS ─────────────────────────── */}
      <div className="flex flex-col gap-24 md:gap-32 pt-24 lg:pt-32 pb-40 px-4 md:px-[var(--spacing-margin-desktop)] max-w-[1920px] mx-auto w-full">
        <DestinyExplorer />
        <SkillsMatrix />
        <MarketingShowcase />
        <Contact />
      </div>

    </>
  )
}

export default App
