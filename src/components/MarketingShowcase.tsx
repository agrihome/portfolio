import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import youtubeMockup from '../assets/YouTube.jpg'
import evWebsiteMockup from '../assets/website.png'
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
      { label: 'Instagram', href: 'https://www.instagram.com/everyday.standards/', icon: 'insta' },
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
      { label: 'Watch Shorts', href: 'https://www.youtube.com/@everyday.standards/shorts', icon: 'yt' },
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
      { label: 'View Profile', href: '#', icon: 'x' },
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
      { label: 'Visit Site', href: 'https://everydaystandards.in', icon: 'link' },
    ],
  },
]

const MarketingShowcase = () => {
  const [activeProject, setActiveProject] = useState(0)
  const project = PROJECTS[activeProject]

  return (
    <section id="market" className="w-full" aria-label="Marketing and branding showcase">
      {/* Section header */}
      <motion.div 
        className="section-header" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="label-caps text-gradient-vibrant">03 / MARKET</span>
        <h2 className="headline-lg">GROWTH</h2>
        <p className="body-md max-w-xl">
          Branding, content creation, and web experiences that drive engagement and conversion.
        </p>
      </motion.div>

      {/* Glass card container */}
      <motion.div
        className="glass-panel overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left: Image panel */}
          <div className="relative overflow-hidden bg-black/40 p-8 lg:p-16 flex items-center justify-center min-h-[400px]">
            <AnimatePresence mode="wait">
              {/* Parallax Image */}
              <motion.img
                key={project.image}
                src={project.image}
                alt={project.title}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.1, opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 1, ease: [0.19, 1.0, 0.22, 1.0] }}
                className="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-2xl border border-white/10 relative z-10"
              />
            </AnimatePresence>
            
            {/* Floating Tag */}
            <AnimatePresence mode="wait">
              <motion.div
                key={project.tag}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
                className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-xl border border-white/20 text-white text-[10px] font-bold tracking-widest px-4 py-2 rounded-full uppercase shadow-2xl z-20"
              >
                {project.tag}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Tab buttons & details */}
          <div className="flex flex-col border-t lg:border-t-0 lg:border-l border-[var(--border-glass)]">
            
            {/* Tab buttons */}
            <div className="flex flex-col border-b border-[var(--border-glass)]">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProject(i)}
                  className={`flex items-center gap-4 px-8 py-5 text-left transition-colors duration-300 ${
                    activeProject === i 
                      ? 'bg-white/10 text-white' 
                      : 'text-white/40 hover:bg-white/5 hover:text-white/80'
                  } ${i < PROJECTS.length - 1 ? 'border-b border-[var(--border-glass)]' : ''}`}
                >
                  <span className="w-6 opacity-50 text-xs font-bold">{p.num}</span>
                  <span className="text-xs font-bold tracking-widest">{p.title}</span>
                  {activeProject === i && (
                    <motion.span 
                      layoutId="marketingTabIndicator"
                      className="ml-auto w-2 h-2 rounded-full bg-[var(--accent-gold)] shadow-[0_0_10px_var(--accent-gold)]" 
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Info panel */}
            <div className="p-8 lg:p-12 flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="body-md mb-8">{project.description}</p>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.skills.map((skill, i) => (
                      <motion.span 
                        key={skill} 
                        className="chip"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + (i * 0.05), type: "spring" }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex gap-4 flex-wrap">
                    {project.links.map((link) => (
                      <motion.a 
                        key={link.label} 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="glass-button"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {link.label}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default MarketingShowcase
