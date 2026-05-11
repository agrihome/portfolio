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
    <section id="services" className="py-24 flex flex-col items-center w-full" aria-label="Services">
      <div className="">
        <div className="pb-24 text-center">
          <Text3DFlip className="pb-12 tracking-tighter mx-auto headline-lg" secondaryChildren="WHAT I DO">
            WHAT I DO
          </Text3DFlip>
        </div>

        <div className="services-list w-full flex flex-col items-center">
          {SERVICES.map((s) => (
            <div key={s.num} className="service-item flex items-center justify-center py-10 md:py-16 border-t border-[var(--color-outline-variant)] group cursor-pointer" id={`service-${s.num}`}>
              <div className="flex items-center gap-6 md:gap-16">
                <span className="service-name font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[var(--ink)] group-hover:text-pink-500 transition-colors text-center">{s.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
