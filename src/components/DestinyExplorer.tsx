import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { StarsBackground } from './animate-ui/components/backgrounds/stars'
import { BorderBeam } from './ui/border-beam'

import onboardingImg from '../assets/onboarding.jpg'
import routineListImg from '../assets/routine list.png'
import todosPageImg from '../assets/todos page.png'
import aiAssistantImg from '../assets/ai assistant.png'
import habitAnalyticsImg from '../assets/habit analytics.png'
import pathAnalyticsImg from '../assets/path analytics.png'
import routineAnalyticsImg from '../assets/routine analytics.png'
import appRunningVideo from '../assets/app running.mp4'

const TABS = [
  {
    id: 'onboarding',
    num: '01',
    label: 'ONBOARDING',
    image: onboardingImg,
    type: 'image' as const,
    headline: 'Product Strategy & User Flows',
    description: 'Designed a frictionless onboarding funnel with Google Auth and progressive disclosure. Every screen is intentional — guiding users from zero to first habit in under 60 seconds.',
    skills: ['Product Ideation', 'User Flow Design', 'MVP Strategy', 'Firebase Auth'],
  },
  {
    id: 'routines',
    num: '02',
    label: 'HABITS & ROUTINES',
    image: routineListImg,
    type: 'image' as const,
    headline: 'Cross-Platform UI & State',
    description: 'Built a rich habit management system with routines, todos, and calendar views. Real-time state sync across Flutter widgets with reactive data binding.',
    skills: ['Flutter', 'Dart', 'State Management', 'Cross-Platform', 'UI/UX Design'],
  },
  {
    id: 'ai',
    num: '03',
    label: 'AI COACHING',
    image: aiAssistantImg,
    type: 'image' as const,
    headline: 'Intelligent Coaching Engine',
    description: 'Integrated an LLM-powered AI coaching assistant trained on performance psychology. Delivers personalized habit optimization through natural conversation.',
    skills: ['Prompt Engineering', 'LLM Integration', 'API Design', 'AI Systems'],
  },
  {
    id: 'analytics',
    num: '04',
    label: 'DEEP ANALYTICS',
    image: habitAnalyticsImg,
    type: 'image' as const,
    secondaryImages: [pathAnalyticsImg, routineAnalyticsImg],
    headline: 'Data-Driven Insights',
    description: 'Engineered a full analytics pipeline — completion rings, weekly patterns, streak tracking, and path progress visualization powered by PostgreSQL aggregations and Pandas.',
    skills: ['PostgreSQL', 'Django REST', 'Pandas', 'Data Visualization', 'Reporting'],
  },
  {
    id: 'live',
    num: '05',
    label: 'LIVE DEMO',
    image: todosPageImg,
    type: 'video' as const,
    videoSrc: appRunningVideo,
    headline: 'Fluid Execution',
    description: 'See Destiny in action — smooth 60fps animations, responsive gestures, and real-time data updates. Built with performance-first architecture across iOS and Android.',
    skills: ['Performance', 'Animation', 'Gesture Systems', 'Real-time Sync'],
  },
]

const DestinyExplorer = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tab = TABS[activeTab]

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % TABS.length)
    }, 10000)
    return () => clearTimeout(timer)
  }, [activeTab])

  return (
    <section id="create" className="w-full" aria-label="Destiny App Explorer">
      {/* Section header */}
      <motion.div 
        className="section-header" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="label-caps text-gradient-vibrant">01 / CREATE</span>
        <h2 className="headline-lg">DESTINY</h2>
        <p className="body-md max-w-xl">
          A habit builder and long-term goal planning app. Structured paths, milestones, tasks, routines, and AI-powered insights.
        </p>
      </motion.div>

      {/* Explorer glass card */}
      <motion.div
        className="glass-panel overflow-hidden relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
      >
        <div className="absolute inset-0 z-30 pointer-events-none rounded-[inherit]">
          <BorderBeam size={400} duration={10} delay={0} colorFrom="#f59e0b" colorTo="#facc15" borderWidth={1.5} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-20">
          
          {/* Left: Phone mockup */}
          <div className="relative flex items-center justify-center p-6 md:p-12 lg:p-20 w-full overflow-hidden">
            <StarsBackground className="absolute inset-0 z-0" />
            
            {/* Phone frame */}
            <motion.div
              className="relative w-[240px] h-[497px] sm:w-[280px] sm:h-[580px] rounded-[30px] sm:rounded-[40px] border-[6px] border-white/10 shadow-2xl bg-black overflow-hidden z-10 shrink-0"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >

              <AnimatePresence mode="wait">
                {tab.type === 'video' && tab.videoSrc ? (
                  <motion.video
                    key="video"
                    src={tab.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <motion.img
                    key={tab.id}
                    src={tab.image}
                    alt={tab.label}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                )}
              </AnimatePresence>
            </motion.div>

            {/* Floating secondary analytics thumbnails */}
            {tab.id === 'analytics' && tab.secondaryImages && (
              <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 hidden md:flex">
                {tab.secondaryImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20, rotate: i === 0 ? 5 : -5 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ delay: 0.4 + i * 0.15, type: "spring", bounce: 0.4 }}
                    className="w-[100px] h-[180px] rounded-xl border border-white/10 overflow-hidden shadow-2xl"
                  >
                    <img src={img} alt="Analytics view" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Tab details */}
          <div className="flex flex-col border-t lg:border-t-0 lg:border-l border-[var(--border-glass)] relative">
            
            {/* Tab buttons */}
            <div className="flex flex-col border-b border-[var(--border-glass)]">
              {TABS.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-4 px-8 py-5 text-left transition-colors duration-300 ${
                    activeTab === i 
                      ? 'bg-white/10 text-white' 
                      : 'text-white/40 hover:bg-white/5 hover:text-white/80'
                  } ${i < TABS.length - 1 ? 'border-b border-[var(--border-glass)]' : ''}`}
                >
                  <span className="w-6 opacity-50 text-xs font-bold">{t.num}</span>
                  <span className="text-xs font-bold tracking-widest">{t.label}</span>
                  {activeTab === i && (
                    <motion.span 
                      layoutId="activeTabIndicator"
                      className="ml-auto w-2 h-2 rounded-full bg-[var(--accent-gold)] shadow-[0_0_10px_var(--accent-gold)]" 
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="p-6 md:p-8 lg:p-12 flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{tab.headline}</h3>
                  <p className="body-md mb-8">{tab.description}</p>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-2">
                    {tab.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
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

export default DestinyExplorer
