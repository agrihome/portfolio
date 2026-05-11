import { motion } from 'motion/react'
import Text3DFlip from './ui/text-3d-flip'

const SERVICES = [
  { num: '01', name: 'Mobile app development' },
  { num: '02', name: 'Website development' },
  { num: '03', name: 'Content Creation' },
  { num: '04', name: 'Social Media Management' },
  { num: '05', name: 'Video Editing' },
]

const Services = () => {
  return (
    <section id="services" className="py-48 flex flex-col items-center w-full" aria-label="Services">
      <span className="self-start ml-24 mb-24 text-lg font-bold uppercase tracking-widest text-[var(--ink-muted)]">What I do?</span>
      
      <div className="services-list w-full flex flex-col items-center">
        {SERVICES.map((s) => (
          <div 
            key={s.num} 
            className="service-item w-full flex items-center justify-center py-10 md:py-16 cursor-pointer"
          >
            <div className="flex items-center gap-6 md:gap-16 relative z-10">
              <span className="service-name font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter">
                {s.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
