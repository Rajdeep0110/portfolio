import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(5, 8, 22, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(99,102,241,0.15)' : '1px solid transparent',
    }}>
      {/* Logo */}
      <div style={{ fontFamily: 'Fira Code, monospace', fontWeight: 700, fontSize: '1.3rem' }}>
        <span style={{ color: '#6366f1' }}>&lt;</span>
        <span style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Rajdeep</span>
        <span style={{ color: '#6366f1' }}>/&gt;</span>
      </div>

      {/* Desktop Links */}
      <div className="nav-links-desktop" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        {navLinks.map(link => (
          <Link
            key={link.id}
            to={link.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            onSetActive={() => setActive(link.id)}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 500,
              cursor: 'pointer',
              color: active === link.id ? '#6366f1' : '#94a3b8',
              background: active === link.id ? 'rgba(99,102,241,0.1)' : 'transparent',
              border: active === link.id ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent',
              transition: 'all 0.25s ease',
            }}
          >
            {link.label}
          </Link>
        ))}

        <a
          href="/RajdeepCv.pdf"
          download
          className="btn-primary"
          style={{ marginLeft: 8, padding: '8px 18px', fontSize: '0.82rem' }}
        >
          Resume ↓
        </a>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="hamburger-btn"
        aria-label="Toggle menu"
        style={{
          display: 'none',
          background: 'none', border: 'none', cursor: 'pointer', padding: 8
        }}
      >
        <div style={{ width: 24, height: 2, background: '#6366f1', marginBottom: 5, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <div style={{ width: 24, height: 2, background: '#6366f1', marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
        <div style={{ width: 24, height: 2, background: '#6366f1', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 64, left: 0, right: 0,
          background: 'rgba(5, 8, 22, 0.97)',
          backdropFilter: 'blur(20px)',
          padding: '24px',
          borderBottom: '1px solid rgba(99,102,241,0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}>
          {navLinks.map(link => (
            <Link
              key={link.id}
              to={link.id}
              spy smooth
              offset={-70}
              duration={600}
              onClick={() => setMenuOpen(false)}
              style={{ color: '#94a3b8', fontSize: '1rem', cursor: 'pointer', padding: '8px 0' }}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="/RajdeepCv.pdf"
            download
            className="btn-primary"
            style={{ textAlign: 'center', marginTop: 8 }}
          >
            Download Resume
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}