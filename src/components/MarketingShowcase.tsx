import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import youtubeMockup from '../assets/YouTube.jpg'
import evWebsiteMockup from '../assets/ev-website.png'
import instaMockup from '../assets/Instagram.jpg'
import xMockup from '../assets/X.jpg'

const PROJECTS = [
  {
    id: 'brand',
    num: '01',
    title: 'INSTAGRAM GROWTH',
    tag: 'BRAND IDENTITY',
    description: 'Built a content brand from zero — defined the visual identity, tone of voice, and content pillars. Created a cohesive presence across Instagram with consistent design language.',
    image: instaMockup,
    skills: ['Brand Strategy', 'Visual Identity', 'Content Pillars', 'Audience Targeting'],
    links: [
      { label: 'INSTAGRAM', href: 'https://www.instagram.com/everyday.standards/', icon: 'insta' },
    ],
  },
  {
    id: 'youtube',
    num: '02',
    title: 'YOUTUBE SHORTS',
    tag: 'CONTENT CREATION',
    description: 'Produced and edited short-form content optimized for retention and engagement. Motion graphics, hook-driven scripting, and data-informed iteration on every piece.',
    image: youtubeMockup,
    skills: ['Video Editing', 'Motion Graphics', 'Content Strategy', 'Scripting'],
    links: [
      { label: 'WATCH SHORTS', href: 'https://www.youtube.com/@everyday.standards/shorts', icon: 'yt' },
    ],
  },
  {
    id: 'x',
    num: '03',
    title: 'X (TWITTER) STRATEGY',
    tag: 'AUDIENCE BUILDING',
    description: 'Engaged with the developer and design community, sharing insights, build-in-public updates, and thought leadership to grow an organic following.',
    image: xMockup,
    skills: ['Copywriting', 'Community Building', 'Networking', 'Thought Leadership'],
    links: [
      { label: 'VIEW PROFILE', href: '#', icon: 'x' },
    ],
  },
  {
    id: 'website',
    num: '04',
    title: 'EV PLATFORM',
    tag: 'WEB DEVELOPMENT',
    description: 'Designed and developed the everydaystandards.in web platform. Clean, responsive interface built with React and TypeScript — showcasing products and driving conversion.',
    image: evWebsiteMockup,
    skills: ['React', 'TypeScript', 'Responsive Design', 'SEO', 'Performance'],
    links: [
      { label: 'VISIT SITE', href: 'https://everydaystandards.in', icon: 'link' },
    ],
  },
]

const MarketingShowcase = () => {
  const [activeProject, setActiveProject] = useState(0)
  const project = PROJECTS[activeProject]

  return (
    <section
      id="market"
      className="py-40 w-full"
      aria-label="Marketing and branding showcase"
    >
      {/* Section header */}
      <motion.div 
        className="section-header" 
        style={{ padding: '0 var(--spacing-margin-desktop)' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <span className="label-caps" style={{ display: 'block', marginBottom: 12 }}>
            03 / MARKET
          </span>
          <h2 className="headline-lg tracking-tighter">GROWTH</h2>
          <p className="body-md" style={{ color: 'var(--ink-muted)', marginTop: 8, maxWidth: 480 }}>
            Branding, content creation, and web experiences that drive engagement and conversion.
          </p>
        </div>
      </motion.div>

      {/* Project selector tabs */}
      <div
        style={{
          display: 'flex',
          borderTop: '1px solid var(--color-outline-variant)',
          borderBottom: '1px solid var(--color-outline-variant)',
          marginTop: 64,
        }}
      >
        {PROJECTS.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => setActiveProject(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            style={{
              flex: 1,
              padding: '20px 24px',
              background: activeProject === i ? 'var(--canvas-inv)' : 'transparent',
              color: activeProject === i ? 'var(--ink-inv)' : 'var(--ink-muted)',
              border: 'none',
              borderRight: i < PROJECTS.length - 1 ? '1px solid var(--color-outline-variant)' : 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              transition: 'background 300ms ease, color 300ms ease, transform 200ms ease',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              justifyContent: 'center',
            }}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <span style={{ opacity: 0.5 }}>{p.num}</span>
            <span>{p.title}</span>
          </motion.button>
        ))}
      </div>

      {/* Project detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="marketing-detail-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: 'var(--color-outline-variant)',
            borderBottom: '1px solid var(--color-outline-variant)',
          }}
        >
          {/* Image panel */}
          <div
            style={{
              background: 'var(--canvas)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <motion.img
              key={project.image}
              src={project.image}
              alt={project.title}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                minHeight: 400,
              }}
            />
            {/* Tag overlay */}
            <motion.span
              className="label-caps"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              style={{
                position: 'absolute',
                bottom: 24,
                left: 24,
                background: 'var(--canvas-inv)',
                color: 'var(--ink-inv)',
                padding: '6px 12px',
              }}
            >
              {project.tag}
            </motion.span>
          </div>

          {/* Info panel */}
          <div
            style={{
              background: 'var(--canvas)',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 32,
                  letterSpacing: '0.02em',
                  color: 'var(--ink)',
                  textTransform: 'uppercase',
                  marginBottom: 20,
                }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  lineHeight: '24px',
                  color: 'var(--ink-muted)',
                  marginBottom: 32,
                }}
              >
                {project.description}
              </motion.p>

              {/* Skill chips */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}
              >
                {project.skills.map((skill, i) => (
                  <motion.span 
                    key={skill} 
                    className="chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + (i * 0.05), duration: 0.3 }}
                    whileHover={{ scale: 1.05, borderColor: 'var(--ink)', color: 'var(--ink)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Action links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
            >
              {project.links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '14px 28px', fontSize: 11 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label} ↗
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 1024px) {
          .marketing-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .marketing-detail-grid > div:last-child {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default MarketingShowcase
