import { motion } from 'motion/react'

const Contact = () => {
  return (
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
  )
}

export default Contact
