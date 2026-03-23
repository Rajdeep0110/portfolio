import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FaGithub, FaLinkedin, FaEnvelope,
  FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle
} from 'react-icons/fa'

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'rajdeep7488@gmail.com',
    href: 'mailto:rajdeep7488@gmail.com',
    color: '#6366f1',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/Rajdeep0110',
    href: 'https://github.com/Rajdeep0110',
    color: '#f1f5f9',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/raj-deep2',
    href: 'https://www.linkedin.com/in/raj-deep2',
    color: '#0ea5e9',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'India 🇮🇳',
    href: null,
    color: '#10b981',
  },
]

const inputStyle = {
  width: '100%',
  padding: '14px 18px',
  background: 'rgba(10, 15, 46, 0.8)',
  border: '1px solid rgba(99, 102, 241, 0.25)',
  borderRadius: 12,
  color: '#f1f5f9',
  fontSize: '0.95rem',
  fontFamily: 'Inter, sans-serif',
  outline: 'none',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
}

export default function Contact() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',   // 🔧 Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',  // 🔧 Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY'    // 🔧 Replace with your EmailJS public key
      )
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (_) {
      setStatus('error')
    }
  }

  const getFocusStyle = (field) =>
    focused === field
      ? { ...inputStyle, borderColor: '#6366f1', boxShadow: '0 0 0 3px rgba(99,102,241,0.15)' }
      : inputStyle

  return (
    <section
      id="contact"
      style={{ padding: '100px 0', position: 'relative' }}
    >
      {/* Background Orbs */}
      <div style={{
        position: 'absolute', top: '15%', right: '5%', width: 350, height: 350,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', left: '5%', width: 300, height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="section-line">
            <span
              className="badge"
              style={{ fontSize: '0.75rem' }}
            >
              <FaEnvelope /> Get In Touch
            </span>
          </div>
          <h2 className="section-title" style={{ marginTop: 16 }}>Contact Me</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? My inbox is always open — let's build something great together.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 40,
          alignItems: 'start',
        }}>
          {/* Left: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <div style={{
              background: 'rgba(10,15,46,0.7)',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: 20,
              padding: '32px 28px',
              backdropFilter: 'blur(12px)',
              marginBottom: 8,
            }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 8 }}>Let's Talk</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.7 }}>
                I'm currently open to internship and full-time opportunities. Whether you have a question, a collaboration idea, or just want to connect — feel free to reach out!
              </p>
            </div>

            {contactInfo.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glow-card"
                style={{ padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 16 }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: `${color}18`,
                  border: `1px solid ${color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color, fontSize: '1.1rem', flexShrink: 0,
                }}>
                  <Icon />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#f1f5f9', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500 }}
                      onMouseEnter={e => e.currentTarget.style.color = color}
                      onMouseLeave={e => e.currentTarget.style.color = '#f1f5f9'}
                    >
                      {value}
                    </a>
                  ) : (
                    <span style={{ color: '#f1f5f9', fontSize: '0.9rem', fontWeight: 500 }}>{value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              background: 'rgba(10,15,46,0.7)',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: 20,
              padding: '36px 32px',
              backdropFilter: 'blur(12px)',
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 24 }}>Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* Name & Email Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: 6, fontWeight: 500 }}>Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Rajdeep"
                      style={getFocusStyle('name')}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: 6, fontWeight: 500 }}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="rajdeep7488@gmail.com"
                      style={getFocusStyle('email')}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: 6, fontWeight: 500 }}>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Collaboration / Internship..."
                    style={getFocusStyle('subject')}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: 6, fontWeight: 500 }}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    style={{
                      ...getFocusStyle('message'),
                      resize: 'vertical',
                      minHeight: 130,
                    }}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '12px 18px',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: 10, color: '#10b981', fontSize: '0.88rem',
                    }}
                  >
                    <FaCheckCircle /> Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '12px 18px',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: 10, color: '#ef4444', fontSize: '0.88rem',
                    }}
                  >
                    <FaExclamationCircle /> Something went wrong. Please email me directly.
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '14px 28px',
                    fontSize: '0.95rem',
                    marginTop: 4,
                    opacity: status === 'sending' ? 0.7 : 1,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <span style={{
                        width: 16, height: 16, border: '2px solid #fff',
                        borderTopColor: 'transparent', borderRadius: '50%',
                        display: 'inline-block',
                        animation: 'spin 0.7s linear infinite',
                      }} />
                      Sending...
                    </>
                  ) : (
                    <><FaPaperPlane /> Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 640px) {
          form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
