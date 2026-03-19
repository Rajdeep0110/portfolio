import React from 'react'
import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'

import AnimatedSection from '../components/AnimatedSection'

const certifications = [
  {
    title: 'Computational Theory: Language Principle & Finite Automata Theory',
    issuer: 'INFOSYS',
    date: 'Recent',
    emoji: '🧠',
    color: '#0056D2',
    verify: 'https://drive.google.com/file/d/1TFUi7zDAgMFwwLLzeFgu6xL-AIs1WaAp/view?usp=sharing',
    tags: ['Theory', 'Automata'],
  },
  {
    title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative Al & LLM',
    issuer: 'INFOSYS',
    date: 'Recent',
    emoji: '🤖',
    color: '#FF9900',
    verify: 'https://drive.google.com/file/d/1bynj5N6THQ4gJauwMU3bSzyGlihFsX-p/view?usp=drive_link',
    tags: ['AI', 'Prompt Engineering'],
  },
  {
    title: 'Master DSA with Java/C++',
    issuer: 'W3GRADS',
    date: 'Jul 2025',
    emoji: '💻',
    color: '#0081FB',
    verify: 'https://drive.google.com/file/d/1qPrvL8YJEjMeUUqJL0AH0WZLbm_01Ek5/view?usp=drive_link',
    tags: ['DSA', 'Java', 'C++'],
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Coursera',
    date: 'Recent',
    emoji: '🌐',
    color: '#0056D2',
    verify: 'https://coursera.org/verify/IDWFLVABJDT8',
    tags: ['Networking'],
  },
  {
    title: 'Introduction to Hardware and Operating Systems',
    issuer: 'Coursera',
    date: 'Recent',
    emoji: '🖥️',
    color: '#0056D2',
    verify: 'https://coursera.org/verify/G7MQQ1R8X7OW',
    tags: ['Hardware', 'OS'],
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'Recent',
    emoji: '☁️',
    color: '#FF9900',
    verify: 'https://drive.google.com/file/d/1xgqbT3rWR2pAFD-lbIBazAmVl1QvFHqL/view?usp=drive_link',
    tags: ['Cloud Computing'],
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ background: 'rgba(10, 15, 46, 0.4)' }}>
      <div className="container">
        <AnimatedSection>
          <div className="section-line">
            <span className="badge">04. Certifications</span>
          </div>
          <h2 className="section-title">Certifications & Courses</h2>
          <p className="section-subtitle">Recognized credentials validating my continuous learning journey</p>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="glow-card"
              style={{ padding: 24 }}
            >
              {/* Header */}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 14 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: `${cert.color}20`,
                  border: `1px solid ${cert.color}50`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', flexShrink: 0,
                }}>
                  {cert.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 4, lineHeight: 1.4 }}>
                    {cert.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{cert.issuer}</p>
                </div>
              </div>

              {/* Credential ID */}
              {cert.credentialId && (
                <div style={{
                  background: 'rgba(99,102,241,0.06)',
                  border: '1px solid rgba(99,102,241,0.15)',
                  borderRadius: 8, padding: '8px 12px',
                  marginBottom: 14, display: 'flex', gap: 8, alignItems: 'center'
                }}>
                  <FaCheckCircle style={{ color: '#10b981', fontSize: '0.8rem', flexShrink: 0 }} />
                  <span style={{ color: '#6366f1', fontSize: '0.72rem', fontFamily: 'Fira Code, monospace' }}>
                    {cert.credentialId}
                  </span>
                </div>
              )}

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                {cert.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '3px 10px', borderRadius: 6,
                    background: 'rgba(99,102,241,0.08)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    fontSize: '0.72rem', color: '#6366f1', fontFamily: 'Fira Code, monospace',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#475569', fontSize: '0.8rem' }}>{cert.date}</span>
                <a href={cert.verify} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', gap: 6, alignItems: 'center',
                  color: '#94a3b8', fontSize: '0.8rem', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#6366f1'}
                  onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                >
                  <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} /> Verify
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
