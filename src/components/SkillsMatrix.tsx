import { useState } from 'react'
import { motion } from 'motion/react'

const CATEGORIES = [
  {
    title: 'PRODUCT & DESIGN',
    skills: [
      'Product Ideation',
      'Product Strategy',
      'MVP Development',
      'Feature Planning',
      'User Flow Design',
      'Design Systems',
      'Wireframing',
      'Prototyping',
      'Interaction Design',
      'Information Architecture',
    ],
  },
  {
    title: 'ENGINEERING',
    skills: [
      'Flutter & Dart',
      'Django & Python',
      'Django REST Framework',
      'React & TypeScript',
      'PostgreSQL',
      'Firebase & Supabase',
      'JWT Authentication',
      'REST API Design',
      'State Management',
      'Cross-Platform Dev',
    ],
  },
  {
    title: 'GROWTH & INTELLIGENCE',
    skills: [
      'AI Feature Integration',
      'Prompt Engineering',
      'LLM-Powered Apps',
      'Data Analytics (Pandas)',
      'Product Branding',
      'Content Strategy',
      'Social Media Marketing',
      'YouTube & Instagram',
      'Motion Graphics',
      'Video Editing',
    ],
  },
]

const SkillsMatrix = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  return (
    <section
      id="build"
      className="py-40 w-full"
      aria-label="Skills and capabilities"
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
            02 / BUILD
          </span>
          <h2 className="headline-lg tracking-tighter">CAPABILITIES</h2>
          <p className="body-md" style={{ color: 'var(--ink-muted)', marginTop: 8, maxWidth: 480 }}>
            Full-stack product building — from ideation and design through engineering and growth.
          </p>
        </div>
      </motion.div>

      {/* Skills grid */}
      <motion.div
        className="skills-matrix-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--color-outline-variant)',
          borderTop: '1px solid var(--color-outline-variant)',
          borderBottom: '1px solid var(--color-outline-variant)',
          marginTop: 64,
        }}
      >
        {CATEGORIES.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            onMouseEnter={() => setHoveredCategory(catIdx)}
            onMouseLeave={() => setHoveredCategory(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            style={{
              background: hoveredCategory === catIdx ? 'var(--canvas-inv)' : 'var(--canvas)',
              padding: '48px 32px',
              cursor: 'default',
              transition: 'background 400ms ease, color 400ms ease',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 420,
            }}
          >
            {/* Category number */}
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: hoveredCategory === catIdx ? 'var(--ink-inv)' : 'var(--ink-muted)',
                marginBottom: 8,
                transition: 'color 400ms ease',
              }}
            >
              0{catIdx + 1}
            </span>

            {/* Category title */}
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 24,
                letterSpacing: '0.03em',
                color: hoveredCategory === catIdx ? 'var(--ink-inv)' : 'var(--ink)',
                textTransform: 'uppercase',
                marginBottom: 32,
                transition: 'color 400ms ease',
              }}
            >
              {cat.title}
            </h3>

            {/* Skills list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {cat.skills.map((skill, skillIdx) => (
                <div
                  key={skill}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 0',
                    borderBottom: skillIdx < cat.skills.length - 1 ? '1px solid' : 'none',
                    borderColor: hoveredCategory === catIdx
                      ? 'rgba(17, 17, 17, 0.18)'
                      : 'var(--color-outline-variant)',
                    transition: 'border-color 400ms ease',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 12,
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                      color: hoveredCategory === catIdx ? 'var(--ink-inv)' : 'var(--ink)',
                      transition: 'color 400ms ease',
                    }}
                  >
                    {skill}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      color: hoveredCategory === catIdx
                        ? 'rgba(17, 17, 17, 0.45)'
                        : 'var(--ink-muted)',
                      transition: 'color 400ms ease',
                    }}
                  >
                    {String(skillIdx + 1).padStart(2, '0')}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Responsive override for mobile */}
      <style>{`
        @media (max-width: 1024px) {
          .skills-matrix-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default SkillsMatrix
