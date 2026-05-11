import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
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
      <span className="self-start ml-10 mb-24 text-lg font-bold uppercase tracking-widest text-[var(--ink-muted)]">What I do?</span>
      
      <div className="services-list w-full flex flex-col items-center">
        {SERVICES.map((s) => (
          <ServiceItem key={s.num} name={s.name} />
        ))}
      </div>
    </section>
  )
}

const ServiceItem = ({ name }: { name: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Apply a spring physics layer to the raw scroll data to make the effect buttery smooth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  })

  // A single, strictly synchronized range for all properties
  // The 'active' window is sharply defined between 0.46 and 0.54
  const range = [0, 0.45, 0.46, 0.54, 0.55, 1]
  
  const opacity = useTransform(smoothProgress, range, [0.2, 0.2, 1, 1, 0.2, 0.2])
  const scale = useTransform(smoothProgress, range, [0.9, 0.9, 1.05, 1.05, 0.9, 0.9])
  const backgroundColor = useTransform(smoothProgress, range, ["transparent", "transparent", "#ec4899", "#ec4899", "transparent", "transparent"])
  const textColor = useTransform(smoothProgress, range, ["var(--ink)", "var(--ink)", "var(--canvas)", "var(--canvas)", "var(--ink)", "var(--ink)"])

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale, backgroundColor }}
      className="service-item w-full flex items-center justify-center py-16 md:py-24 cursor-default transition-colors duration-200 rounded-2xl"
    >
      <div className="flex items-center gap-6 md:gap-16">
        <motion.span 
          style={{ color: textColor }}
          className="font-display text-5xl md:text-9xl font-bold uppercase tracking-tighter transition-colors duration-200"
        >
          {name}
        </motion.span>
      </div>
    </motion.div>
  )
}

export default Services
