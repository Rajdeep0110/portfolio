import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'

const projectsData = [
  {
    id: 1,
    title: 'Chatbot',
    description: 'AI-based clothing recommendation chatbot using Flask and Google Generative AI (Gemini) to generate personalized outfit suggestions and styling tips with a responsive UI.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Flask'],
    github: 'https://github.com/Rajdeep0110',
    live: '#',
    category: 'Full Stack',
    featured: true,
    emoji: '🤖',
  },
  {
    id: 2,
    title: 'Academic Trends Analysis',
    description: 'Academic performance analysis on VIT Vellore data to identify trends across branches and years using CGPA patterns and visual analytics.',
    tags: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/Rajdeep0110',
    live: '#',
    category: 'Data Science',
    featured: true,
    emoji: '📊',
  },
]

const categories = ['All', 'Full Stack', 'Data Science']

const tagColors = {
  React: '#61DAFB', 'Node.js': '#339933', MongoDB: '#47A248',
  Python: '#3776AB', 'Next.js': '#ffffff', GraphQL: '#E10098',
  Redux: '#764ABC', TensorFlow: '#FF6F00', Flask: '#ffffff',
  default: '#6366f1',
}

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <AnimatedSection>
          <div className="section-line">
            <span className="badge">03. Projects</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A curated selection of work I'm proud of</p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '8px 20px', borderRadius: 50,
                border: filter === cat ? '1px solid #6366f1' : '1px solid rgba(99,102,241,0.3)',
                background: filter === cat ? 'rgba(99,102,241,0.2)' : 'transparent',
                color: filter === cat ? '#6366f1' : '#94a3b8',
                fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer',
                transition: 'all 0.25s', fontFamily: 'Fira Code, monospace',
              }}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="glow-card"
              style={{ padding: 28, display: 'flex', flexDirection: 'column', position: 'relative' }}
            >
              {project.featured && (
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                  color: 'white', fontSize: '0.68rem', fontWeight: 700,
                  padding: '3px 10px', borderRadius: 50, textTransform: 'uppercase', letterSpacing: 1,
                }}>
                  ⭐ Featured
                </div>
              )}

              <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{project.emoji}</div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 10, color: '#f1f5f9' }}>
                {project.title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.7, flex: 1, marginBottom: 20 }}>
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '3px 10px',
                    background: `${tagColors[tag] || tagColors.default}15`,
                    border: `1px solid ${tagColors[tag] || tagColors.default}40`,
                    borderRadius: 6,
                    fontSize: '0.75rem',
                    color: tagColors[tag] || tagColors.default,
                    fontFamily: 'Fira Code, monospace',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  color: '#94a3b8', fontSize: '0.85rem', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#6366f1'}
                  onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                >
                  <FaGithub /> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  color: '#94a3b8', fontSize: '0.85rem', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#06b6d4'}
                  onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4, color: '#f59e0b', fontSize: '0.8rem' }}>
                  <FaStar /> {project.stars}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <AnimatedSection style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <FaGithub /> View All Projects on GitHub
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
