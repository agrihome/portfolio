import { motion } from 'motion/react'
import Text3DFlip from './ui/text-3d-flip'

const SERVICES = [
  { num: '01', name: 'App Design & Development' },
  { num: '02', name: 'Growth & User Acquisition' },
  { num: '03', name: 'App Store Optimization' },
  { num: '04', name: 'Product Strategy' },
  { num: '05', name: 'Marketing & Launch' },
]

const Services = () => {
  return (
    <section id="services" className="section py-48 px-10 md:px-40 flex flex-col items-center" aria-label="Services">
      <div className="max-w-[1600px] w-full">
        <div className="pb-24 text-center">
          <Text3DFlip className="pb-12 tracking-tighter mx-auto headline-lg" secondaryChildren="SERVICES">
            WHAT I DO
          </Text3DFlip>
        </div>

        <div className="services-list w-full flex flex-col">
          {SERVICES.map((s) => (
            <div key={s.num} className="service-item w-full flex items-center justify-center py-10 md:py-16 border-t border-[var(--color-outline-variant)] group cursor-pointer" id={`service-${s.num}`}>
              <div className="flex items-center justify-center gap-6 md:gap-12">
                <span className="service-num label-caps font-body text-xs md:text-sm font-bold uppercase tracking-[0.1em] text-[var(--ink-muted)] hidden md:block">{s.num}</span>
                <span className="service-name font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[var(--ink)] group-hover:text-pink-500 transition-colors text-center">{s.name}</span>
                <span className="service-arrow text-3xl md:text-5xl text-[var(--ink-muted)] group-hover:text-[var(--ink)] group-hover:translate-x-4 transition-all duration-300 hidden md:block" aria-hidden="true">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
