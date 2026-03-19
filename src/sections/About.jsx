import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendar, FaCode, FaLaptopCode, FaBrain } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import profileImg from '../assets/Profile.jpeg'
const stats = [
  { value: '3-Star', label: 'C++ HackerRank', icon: <FaCode /> },
  { value: '150+', label: 'DSA on LeetCode', icon: <FaBrain /> },
  { value: '6+', label: 'Certifications', icon: <FaGraduationCap /> },
  { value: '2+', label: 'Projects Built', icon: <FaLaptopCode /> },
]

const interests = ['Data Science', 'Problem-Solving', 'Tech']

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <AnimatedSection>
          <div className="section-line">
            <span className="badge">01. About Me</span>
          </div>
          <h2 className="section-title">Who Am I?</h2>
          <p className="section-subtitle">
            I am a Data Science enthusiast with a strong foundation in programming, analytics, and full-stack development.
            My journey in the tech world has equipped me with valuable skills in Python, Java, C++, and web technologies.
            I am enthusiastic about leveraging data to solve real-world problems and excited to explore opportunities to collaborate, learn, and build impactful models.
          </p>
        </AnimatedSection>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: 80,
            alignItems: 'center',
          }}
        >
          {/* Image + Info Card */}
          <AnimatedSection>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: 280,
                  height: 280,
                  borderRadius: '30%',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))',
                  border: '2px solid rgba(99,102,241,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 60px rgba(99,102,241,0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={profileImg}
                  alt="Profile"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    borderRadius: '30%'
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: -16,
                    borderRadius: '30%',
                    border: '1px dashed rgba(99,102,241,0.8)',
                    animation: 'spin 12s linear infinite',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>

            {/* Quick Facts */}
            <div className="glow-card" style={{ padding: 24, marginTop: 24 }}>
              {[
                { icon: <FaGraduationCap />, text: 'B.Tech CSE - LPU (CGPA: 6.6)' },
                { icon: <FaCalendar />, text: 'Expected Graduation: 2027' },
                { icon: <FaMapMarkerAlt />, text: 'India' },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'center',
                    marginBottom: 14,
                    color: '#94a3b8',
                  }}
                >
                  <span style={{ color: '#6366f1', fontSize: '1rem', flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontSize: '0.9rem' }}>{text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* About Text */}
          <AnimatedSection>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 20, color: '#f1f5f9' }}>
              Introduction & Summary
            </h3>

            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: 20, fontSize: '0.97rem' }}>
              I'm <strong style={{ color: '#6366f1' }}>Rajdeep</strong>, a student with a deep passion for solving real-world problems through data and technology.
              I specialize in Data Science and web development.
            </p>

            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: 20, fontSize: '0.97rem' }}>
              I thrive at the intersection of <em>creativity</em> and <em>logic</em> — designing elegant user interfaces while architecting robust backend systems.
              I believe in continuous learning and actively contribute to open-source projects.
            </p>

            {/* <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: 28, fontSize: '0.97rem' }}>
              <strong>Education:</strong><br />
              • B.Tech CSE, Lovely Professional University (Aug '23 - Present)<br />
              • Intermediate (66.2%), Dwarika High School (Apr '21 - Feb '23)<br />
              • Matriculation (70.8%), Mother International Academy (Apr '20 - Mar '22)
            </p> */}

            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#6366f1',
                marginBottom: 14,
                textTransform: 'uppercase',
                letterSpacing: 1,
                fontFamily: 'Fira Code, monospace',
              }}
            >
              Interests & Passions
            </h4>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {interests.map((interest) => (
                <span
                  key={interest}
                  style={{
                    padding: '6px 14px',
                    background: 'rgba(99,102,241,0.08)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: 8,
                    fontSize: '0.82rem',
                    color: '#94a3b8',
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 20,
            marginTop: 64,
          }}
        >
          {stats.map(({ value, label, icon }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05 }}
              className="glow-card"
              style={{ padding: '28px 20px', textAlign: 'center' }}
            >
              <div style={{ color: '#6366f1', fontSize: '1.5rem', marginBottom: 12 }}>{icon}</div>

              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: 6,
                }}
              >
                {value}
              </div>

              <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
      `}</style>
    </section>
  )
}