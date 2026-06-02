import { motion } from 'motion/react'
import { FlickeringGrid } from './ui/flickering-grid'
import { BorderBeam } from './ui/border-beam'

const Contact = () => {
  return (
    <section id="contact" className="w-full" aria-label="Contact">
      <motion.div
        className="glass-panel hover:!border-sky-500/50 hover:!shadow-[0_16px_48px_rgba(0,0,0,0.3),0_0_24px_rgba(56,189,248,0.2)] flex flex-col items-center justify-center text-center p-8 md:p-16 lg:p-32 overflow-hidden relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      >
        <BorderBeam size={250} duration={12} delay={9} colorFrom="#38bdf8" colorTo="#0ea5e9" borderWidth={1.5} />

        {/* Flickering Grid Background */}
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={4}
          gridGap={6}
          color="#38bdf8"
          maxOpacity={0.2}
          flickerChance={0.4}
        />

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none z-0" />

        <motion.h2
          className="text-[clamp(32px,8vw,80px)] font-extrabold leading-[1.1] tracking-tight mb-12 z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have an <span className="text-gradient-vibrant">Idea?</span><br />
          Let's Build It.
        </motion.h2>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="mailto:rmadhithan20012002@gmail.com" className="glass-button text-lg px-8 py-4 bg-white text-black hover:bg-white/90 flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/adhithan-rm-a16600217/" target="_blank" rel="noreferrer" className="glass-button text-lg px-8 py-4 flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a href="https://www.instagram.com/everyday.standards/" target="_blank" rel="noreferrer" className="glass-button text-lg px-8 py-4 flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Instagram
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
