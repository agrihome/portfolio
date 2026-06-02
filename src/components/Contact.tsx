import { motion } from 'motion/react'

const Contact = () => {
  return (
    <section id="contact" className="w-full" aria-label="Contact">
      <motion.div
        className="glass-panel flex flex-col items-center justify-center text-center p-16 md:p-32 overflow-hidden relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

        <motion.h2
          className="text-[clamp(40px,8vw,80px)] font-extrabold leading-[1.1] tracking-tight mb-12 z-10"
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
          <a href="mailto:rmadhithan20012002@gmail.com" className="glass-button text-lg px-8 py-4 bg-white text-black hover:bg-white/90">
            Send an Email
          </a>
          <a href="https://www.instagram.com/everyday.standards/" target="_blank" rel="noreferrer" className="glass-button text-lg px-8 py-4">
            Instagram DM
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
