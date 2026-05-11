import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
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

  // Calculate opacity and color based on how close the item is to the center of the viewport
  const opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.1, 1, 1, 0.1])
  const scale = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.85, 1, 1, 0.85])
  const blur = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ["blur(4px)", "blur(0px)", "blur(0px)", "blur(4px)"])
  const color = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ["var(--ink)", "#ec4899", "#ec4899", "var(--ink)"])

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale, filter: blur, color }}
      className="service-item w-full flex items-center justify-center py-12 md:py-20 cursor-default"
    >
      <div className="flex items-center gap-6 md:gap-16">
        <span className="font-display text-5xl md:text-9xl font-bold uppercase tracking-tighter transition-colors duration-500">
          {name}
        </span>
      </div>
    </motion.div>
  )
}

export default Services
