import { useState } from 'react'
import { motion } from 'motion/react'
import { MagicCard } from './ui/magic-card'

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
      'Next.js',
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
    <section id="build" className="w-full" aria-label="Skills and capabilities">
      {/* Section header */}
      <motion.div 
        className="section-header" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="label-caps text-gradient-vibrant">02 / BUILD</span>
        <h2 className="headline-lg">CAPABILITIES</h2>
        <p className="body-md max-w-xl">
          Full-stack product building — from ideation and design through engineering and growth.
        </p>
      </motion.div>

      {/* Bento box skills grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
            className="flex w-full"
          >
            <MagicCard
              className="flex-1 flex flex-col p-6 sm:p-8 md:p-10 min-h-[460px] group"
            >
              {/* Category header */}
              <div className="mb-10 z-10">
                <span className="text-xs font-bold tracking-[0.2em] text-white/30 block mb-3 group-hover:text-white/80 transition-colors">
                  0{catIdx + 1}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                  {cat.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-col gap-0 z-10 flex-1">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill}
                    className="flex items-center justify-between py-3 border-b border-white/5 group-hover:border-white/10 transition-colors last:border-0"
                    animate={{ 
                      x: hoveredCategory === catIdx ? 10 : 0,
                      opacity: hoveredCategory === catIdx ? 1 : 0.7 
                    }}
                    transition={{ 
                      duration: 0.3, 
                      delay: hoveredCategory === catIdx ? skillIdx * 0.03 : 0 
                    }}
                  >
                    <span className="text-[13px] font-medium text-white/80 group-hover:text-white">
                      {skill}
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.1em] text-white/20 group-hover:text-white/40">
                      {String(skillIdx + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                ))}
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default SkillsMatrix
