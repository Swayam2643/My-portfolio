import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { RevealDiv } from '../hooks/useReveal.jsx'

const contactLinks = [
  { icon: <FiMail />, label: 'Email', value: 'swayampatel71@gmail.com', href: 'mailto:swayampatel71@gmail.com' },
  { icon: <FiGithub />, label: 'GitHub', value: 'github.com/Swayam2643', href: 'https://github.com/Swayam2643' },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'swayam-patel-30148b363', href: 'https://linkedin.com/in/swayam-patel-30148b363' },
  { icon: <FiMapPin />, label: 'Location', value: 'Pune, Maharashtra, India', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, connect to a form service like Formspree or EmailJS
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section-container">
      <RevealDiv><div className="section-label">Let's Talk</div></RevealDiv>
      <RevealDiv delay={0.05}><h2 className="section-title">Get In Touch</h2></RevealDiv>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', marginTop: '2rem', alignItems: 'start' }}>

        {/* Info */}
        <RevealDiv>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text)' }}>Open to opportunities</h3>
          <p style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Whether you have a project in mind, a job opportunity, or just want to connect — I'd love to hear from you.
            Available for full-time roles, freelance work, and internships.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {contactLinks.map(({ icon, label, value, href }) => {
              const inner = (
                <>
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 8,
                      background: 'var(--bg4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      color: 'var(--text2)',
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: '0.82rem', color: 'var(--text)' }}>{label}</div>
                    <div style={{ fontSize: '0.73rem', color: 'var(--text3)' }}>{value}</div>
                  </div>
                </>
              )
              const style = {
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                border: '1px solid var(--border)',
                borderRadius: 12,
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s',
                background: 'transparent',
              }
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={style}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'color-mix(in srgb, var(--accent) 5%, transparent)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}
                >
                  {inner}
                </a>
              ) : (
                <div key={label} style={style}>{inner}</div>
              )
            })}
          </div>
        </RevealDiv>

        {/* Form */}
        <RevealDiv delay={0.15}>
          <form
            onSubmit={handleSubmit}
            style={{
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: '2rem',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text2)', marginBottom: '0.4rem', fontWeight: 500 }}>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text2)', marginBottom: '0.4rem', fontWeight: 500 }}>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text2)', marginBottom: '0.4rem', fontWeight: 500 }}>Subject</label>
              <input
                type="text"
                placeholder="What's this about?"
                required
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text2)', marginBottom: '0.4rem', fontWeight: 500 }}>Message</label>
              <textarea
                placeholder="Tell me about your project or opportunity..."
                required
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {sent ? '✓ Message sent!' : <><FiSend size={14} /> Send Message</>}
            </button>
          </form>
        </RevealDiv>
      </div>
    </section>
  )
}
