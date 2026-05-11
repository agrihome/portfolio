import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Text3DFlip from './ui/text-3d-flip'
import youtubeMockup from '../assets/youtube.png'
import instaMockup from '../assets/insta.png'
import appWebsiteMockup from '../assets/app-website.png'
import evWebsiteMockup from '../assets/ev-website.png'

const PROJECTS = [
  {
    id: 'p1',
    name: 'Destiny',
    year: '2025',
    tag: 'Habit Tracker',
  },
  {
    id: 'p2',
    name: 'Vault',
    year: '2024',
    tag: 'Finance App',
  },
  {
    id: 'p3',
    name: 'Vision',
    year: '2024',
    tag: 'AI Design Tool',
  },
  {
    id: 'p4',
    name: 'Nexus',
    year: '2023',
    tag: 'Social Platform',
  },
]

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slideSets = [
    [youtubeMockup, instaMockup],
    [appWebsiteMockup, evWebsiteMockup],
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2) // Assuming both sets have 2 slides
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="work" className="section py-48 px-10 md:px-40 flex flex-col items-center" aria-label="Selected work">
      <div className="max-w-[1600px] w-full">
        <motion.div 
          className="mb-48 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Text3DFlip className="headline-lg tracking-tighter inline-block" secondaryChildren="PROJECTS">
            SELECTED WORK
          </Text3DFlip>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.id}
              className="group relative flex flex-col gap-4 w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="aspect-square w-full bg-[var(--canvas)] overflow-hidden relative border border-[var(--ink)]/20">
                {i < slideSets.length ? (
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide}
                      src={slideSets[i][currentSlide]}
                      alt="Project slideshow"
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                    />
                  </AnimatePresence>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="text-8xl font-display uppercase">{p.name[0]}</span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-6 pointer-events-none group-hover:pointer-events-auto">
                   {i === 0 ? (
                     <div className="flex gap-8">
                       <a 
                         href="https://www.instagram.com/everyday.standards/" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-white hover:text-pink-500 transition-colors duration-300"
                         aria-label="Instagram"
                       >
                         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                       </a>
                       <a 
                         href="https://www.youtube.com/@everyday.standards/shorts" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-white hover:text-red-500 transition-colors duration-300"
                         aria-label="YouTube"
                       >
                         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 2.78 2.78 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                       </a>
                     </div>
                   ) : (
                     <a 
                       href={i === 1 ? "https://everydaystandards.in" : "#"} 
                       target={i === 1 ? "_blank" : "_self"}
                       rel="noopener noreferrer"
                       className="cursor-pointer"
                     >
                       <Text3DFlip className="text-white text-2xl font-bold tracking-widest justify-center" rotateDirection="top">
                         VIEW CASE
                       </Text3DFlip>
                     </a>
                   )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
