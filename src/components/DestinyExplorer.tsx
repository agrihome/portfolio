import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import onboardingImg from '../assets/onboarding.jpg'
import homeRoutinesImg from '../assets/home routines.png'
import todosPageImg from '../assets/todos page.png'
import destinyAiImg from '../assets/destiny-ai.png'
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
    image: homeRoutinesImg,
    type: 'image' as const,
    headline: 'Cross-Platform UI & State',
    description: 'Built a rich habit management system with routines, todos, and calendar views. Real-time state sync across Flutter widgets with reactive data binding.',
    skills: ['Flutter', 'Dart', 'State Management', 'Cross-Platform', 'UI/UX Design'],
  },
  {
    id: 'ai',
    num: '03',
    label: 'AI COACHING',
    image: destinyAiImg,
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

  return (
    <section
      id="create"
      className="py-40 w-full"
      aria-label="Destiny App Explorer"
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
            01 / CREATE
          </span>
          <h2 className="headline-lg tracking-tighter">DESTINY</h2>
          <p className="body-md" style={{ color: 'var(--ink-muted)', marginTop: 8, maxWidth: 480 }}>
            A habit builder and long-term goal planning app. Structured paths, milestones, tasks, routines, and AI-powered insights.
          </p>
        </div>
      </motion.div>

      {/* Explorer grid */}
      <motion.div
        className="destiny-explorer-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1px',
          background: 'var(--color-outline-variant)',
          borderTop: '1px solid var(--color-outline-variant)',
          borderBottom: '1px solid var(--color-outline-variant)',
          marginTop: 64,
        }}
      >
        {/* Left: Phone mockup */}
        <div
          style={{
            background: 'var(--canvas)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '64px 48px',
            position: 'relative',
          }}
        >
          {/* Phone frame */}
          <div
            style={{
              width: 280,
              height: 580,
              border: '1px solid var(--ink)',
              position: 'relative',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            {/* Dynamic notch */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 120,
                height: 24,
                background: 'var(--canvas)',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                zIndex: 10,
                borderBottom: '1px solid var(--color-outline-variant)',
                borderLeft: '1px solid var(--color-outline-variant)',
                borderRight: '1px solid var(--color-outline-variant)',
              }}
            />

            <AnimatePresence mode="wait">
              {tab.type === 'video' && tab.videoSrc ? (
                <motion.video
                  key="video"
                  src={tab.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <motion.img
                  key={tab.id}
                  src={tab.image}
                  alt={tab.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Floating secondary analytics thumbnails */}
          {tab.id === 'analytics' && tab.secondaryImages && (
            <div
              style={{
                position: 'absolute',
                right: 32,
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              {tab.secondaryImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  style={{
                    width: 100,
                    height: 180,
                    border: '1px solid var(--color-outline-variant)',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={img}
                    alt="Analytics view"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Tab details */}
        <div style={{ background: 'var(--canvas)', display: 'flex', flexDirection: 'column' }}>
          {/* Tab buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderBottom: '1px solid var(--color-outline-variant)',
            }}
          >
            {TABS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '16px 32px',
                  background: activeTab === i ? 'var(--canvas-inv)' : 'transparent',
                  color: activeTab === i ? 'var(--ink-inv)' : 'var(--ink-muted)',
                  border: 'none',
                  borderBottom: i < TABS.length - 1 ? '1px solid var(--color-outline-variant)' : 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const,
                  textAlign: 'left' as const,
                  transition: 'background 200ms ease, color 200ms ease',
                  width: '100%',
                }}
              >
                <span style={{ width: 24, opacity: 0.6 }}>{t.num}</span>
                <span>{t.label}</span>
                <span style={{ marginLeft: 'auto', fontSize: 16 }}>
                  {activeTab === i ? '→' : ''}
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{ padding: '40px 32px', flex: 1 }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 28,
                  letterSpacing: '0.02em',
                  color: 'var(--ink)',
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}
              >
                {tab.headline}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  lineHeight: '22px',
                  color: 'var(--ink-muted)',
                  marginBottom: 32,
                }}
              >
                {tab.description}
              </p>

              {/* Skill chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {tab.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Responsive override for mobile */}
      <style>{`
        @media (max-width: 1024px) {
          .destiny-explorer-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .destiny-explorer-grid > div:first-child {
            padding: 40px 24px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default DestinyExplorer
