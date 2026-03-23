import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(10, 15, 46, 0.9)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(99, 102, 241, 0.2)',
      padding: '40px 24px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center', gap: 20 }}>
        {[
          { icon: <FaGithub />, href: 'https://github.com/Rajdeep0110', label: 'GitHub' },
          { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/raj-deep2', label: 'LinkedIn' },
          { icon: <FaEnvelope />, href: 'mailto:rajdeep7488@gmail.com', label: 'Email' },
        ].map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              width: 44, height: 44,
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.3)',
              color: '#94a3b8',
              fontSize: '1.1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(99,102,241,0.2)'
              e.currentTarget.style.color = '#6366f1'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(99,102,241,0.1)'
              e.currentTarget.style.color = '#94a3b8'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {icon}
          </a>
        ))}
      </div>

      <p style={{ color: '#475569', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
        Built with <FaHeart style={{ color: '#6366f1', fontSize: '0.85rem' }} /> by{' '}
        <span style={{ color: '#6366f1', fontWeight: 600 }}>Rajdeep</span> · {new Date().getFullYear()}
      </p>
      <p style={{ color: '#334155', fontSize: '0.8rem', marginTop: 8, fontFamily: 'Fira Code, monospace' }}>
        React · Vite · GSAP · Framer Motion
      </p>
    </footer>
  )
}
