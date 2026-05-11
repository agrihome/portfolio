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
        <a href="mailto:rmadhithan20012002@gmail.com" className="btn-primary" id="cta-email-btn">
          Mail Me
        </a>
        <a href="https://www.instagram.com/everyday.standards/" target="_blank" rel="noreferrer" className="btn-secondary" id="cta-insta-btn">
          Insta DM
        </a>
      </div>
    </section>
  )
}

export default Contact
