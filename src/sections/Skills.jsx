import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import {
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaJava, FaAws,
  FaHtml5, FaCss3Alt, FaDatabase, FaCode
} from 'react-icons/fa'
import {
  SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiTailwindcss,
  SiNextdotjs, SiExpress, SiFirebase, SiGraphql, SiKubernetes,
  SiCplusplus, SiJavascript, SiFlask, SiTensorflow, SiLinux, SiGithub, SiVite
} from 'react-icons/si'

const categories = ['All', 'Languages', 'Database', 'Frameworks', 'Tools']

const skills = [
  // Languages
  { name: 'C++', icon: <SiCplusplus />, level: 90, color: '#00599C', category: 'Languages' },
  { name: 'Python', icon: <FaPython />, level: 88, color: '#3776AB', category: 'Languages' },
  { name: 'Java', icon: <FaJava />, level: 85, color: '#ED8B00', category: 'Languages' },
  { name: 'C', icon: <FaCode />, level: 80, color: '#A8B9CC', category: 'Languages' },
  { name: 'JavaScript', icon: <SiJavascript />, level: 85, color: '#F7DF1E', category: 'Languages' },

  // Database
  { name: 'MySQL', icon: <FaDatabase />, level: 85, color: '#4479A1', category: 'Database' },

  // Frameworks & Libraries
  { name: 'HTML5', icon: <FaHtml5 />, level: 90, color: '#E34F26', category: 'Frameworks' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 88, color: '#1572B6', category: 'Frameworks' },
  { name: 'NumPy', icon: <FaPython />, level: 85, color: '#013243', category: 'Frameworks' },
  // { name: 'Pandas', icon: <FaPython />, level: 85, color: '#150458', category: 'Frameworks' },
  // { name: 'Matplotlib', icon: <FaPython />, level: 80, color: '#11557c', category: 'Frameworks' },
  // { name: 'Seaborn', icon: <FaPython />, level: 80, color: '#4C72B0', category: 'Frameworks' },

  // Tools
  { name: 'VS Code', icon: <FaCode />, level: 90, color: '#007ACC', category: 'Tools' },
  { name: 'Excel', icon: <FaDatabase />, level: 85, color: '#217346', category: 'Tools' },
  { name: 'Power BI', icon: <FaDatabase />, level: 80, color: '#F2C811', category: 'Tools' },
  // { name: 'Linux', icon: <SiLinux />, level: 85, color: '#FCC624', category: 'Tools' },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? skills : skills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="section" style={{ background: 'rgba(10, 15, 46, 0.4)' }}>
      <div className="container">
        <AnimatedSection>
          <div className="section-line">
            <span className="badge">02. Skills</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I use to bring ideas to life</p>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 48 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px', borderRadius: 50,
                border: activeCategory === cat ? '1px solid #6366f1' : '1px solid rgba(99,102,241,0.3)',
                background: activeCategory === cat ? 'rgba(99,102,241,0.2)' : 'transparent',
                color: activeCategory === cat ? '#6366f1' : '#94a3b8',
                fontSize: '0.85rem', fontWeight: 500,
                cursor: 'pointer', transition: 'all 0.25s ease',
                fontFamily: 'Fira Code, monospace',
              }}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: 16,
        }}>
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="glow-card"
              style={{ padding: '20px 16px', textAlign: 'center', cursor: 'default' }}
            >
              <div style={{ fontSize: '2.2rem', color: skill.color, marginBottom: 10, filter: 'drop-shadow(0 0 8px currentColor)' }}>
                {skill.icon}
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#f1f5f9', marginBottom: 10 }}>
                {skill.name}
              </div>
              {/* Progress Bar */}
              <div style={{ height: 4, background: 'rgba(99,102,241,0.15)', borderRadius: 2, overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ height: '100%', background: `linear-gradient(90deg, #6366f1, ${skill.color})`, borderRadius: 2 }}
                />
              </div>
              <div style={{ fontSize: '0.72rem', color: '#475569', marginTop: 6, fontFamily: 'Fira Code, monospace' }}>
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
