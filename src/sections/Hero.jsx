import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { FaGithub, FaLinkedin, FaDownload, FaCode } from 'react-icons/fa'
import { Link } from 'react-scroll'

const roles = ['Data Science Enthusiast', 'Software Developer', 'Tech Explorer']

export default function Hero() {
  const headingRef = useRef(null)
  const subtitleRef = useRef(null)
  const roleRef = useRef(null)
  let roleIdx = 0

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(headingRef.current, { opacity: 0, y: 60, duration: 1, ease: 'power4.out' })
      .from(subtitleRef.current, { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .from(roleRef.current, { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.3')

    const el = roleRef.current
    const cycle = () => {
      gsap.to(el, {
        opacity: 0, y: -20, duration: 0.4, onComplete: () => {
          roleIdx = (roleIdx + 1) % roles.length
          el.textContent = roles[roleIdx]
          gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 })
        }
      })
    }

    const interval = setInterval(cycle, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '100px 24px 60px',
      position: 'relative',
    }}>

      <div style={{
        position: 'absolute', top: '20%', left: '10%', width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute', bottom: '20%', right: '10%', width: 300, height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="badge"
        style={{ marginBottom: 28 }}
      >
        <FaCode style={{ color: '#10b981' }} />
        Available for Opportunities
      </motion.div>

      <h1 ref={headingRef} style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
        Hi, I'm{' '}
        <span style={{
          background: 'linear-gradient(to right, #00f2fe, #4facfe, #8b5cf6, #f472b6, #00f2fe)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          backgroundSize: '200% auto',
          animation: 'gradientShift 3s linear infinite',
          filter: 'drop-shadow(0 0 12px rgba(139, 92, 246, 0.6))',
        }}>
          RAJDEEP
        </span>
      </h1>

      <div ref={subtitleRef} style={{ marginBottom: 12 }}>
        <p style={{ color: '#94a3b8', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', marginBottom: 8 }}>
          I'm a passionate
        </p>

        <div style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
          fontWeight: 700,
          fontFamily: 'Fira Code, monospace',
          height: '2.2rem',
          overflow: 'hidden',
        }}>
          <span ref={roleRef} style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {roles[0]}
          </span>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          maxWidth: 640, color: '#94a3b8', fontSize: '1.05rem',
          lineHeight: 1.8, marginBottom: 40
        }}
      >
        B.Tech CSE student passionate about building impactful software, solving complex problems,
        and contributing to the developer community through open source and competitive programming.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}
      >
        <Link to="projects" smooth duration={600} offset={-70}>
          <button className="btn-primary" style={{ cursor: 'pointer' }}>
            View My Work →
          </button>
        </Link>

        {/* Update resume link if Rajdeep provides one, for now linking to nowhere */}
        <a href="/RajdeepCv.pdf" download className="btn-outline">
          <FaDownload style={{ fontSize: '0.85rem' }} /> Download Resume
        </a>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{ display: 'flex', gap: 16 }}
      >
        {[
          { Icon: FaGithub, href: 'https://github.com/Rajdeep0110', color: '#f1f5f9' },
          { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/raj-deep2', color: '#0ea5e9' },
        ].map(({ Icon, href, color }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 48, height: 48, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.25)',
              color: '#94a3b8', fontSize: '1.2rem',
              transition: 'all 0.3s ease', textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <Icon />
          </a>
        ))}
      </motion.div>

      <style>{`
        @keyframes gradientShift {
          0%,100% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
        }
      `}</style>

    </section>
  )
}