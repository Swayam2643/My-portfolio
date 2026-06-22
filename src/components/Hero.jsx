import { useEffect, useRef } from 'react'
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Hero() {
  const particlesRef = useRef(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      p.style.cssText = `
        left:${Math.random() * 100}%;
        animation-delay:${Math.random() * 8}s;
        animation-duration:${6 + Math.random() * 6}s;
        width:${1 + Math.random() * 2}px;
        height:${1 + Math.random() * 2}px;
      `
      container.appendChild(p)
    }
    return () => { while (container.firstChild) container.removeChild(container.firstChild) }
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '6rem 2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="grid-bg" />
      <div ref={particlesRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }} />

      {/* Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'var(--bg3)',
          border: '1px solid var(--border2)',
          borderRadius: 999,
          padding: '0.35rem 1rem',
          fontSize: '0.78rem',
          color: 'var(--text2)',
          marginBottom: '2rem',
          animation: 'fadeInDown 0.6s ease forwards',
        }}
      >
        <span
          className="pulse-dot"
          style={{ width: 7, height: 7, background: 'var(--green)', borderRadius: '50%', display: 'inline-block' }}
        />
        Available for opportunities
      </div>

      {/* Heading */}
      <h1
        style={{
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          marginBottom: '1.5rem',
          maxWidth: 900,
          animation: 'fadeInUp 0.7s 0.1s ease both',
        }}
      >
        Building{' '}
        <span className="grad-text">
          Intelligent
          <br />
          Digital Experiences
        </span>
      </h1>

      {/* Sub */}
      <p
        style={{
          fontSize: '1.1rem',
          color: 'var(--text2)',
          maxWidth: 600,
          lineHeight: 1.7,
          marginBottom: '2.5rem',
          animation: 'fadeInUp 0.7s 0.2s ease both',
        }}
      >
        MCA student, Full Stack Developer, and AI Enthusiast passionate about creating
        scalable web applications, modern user interfaces, and innovative technology solutions.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          animation: 'fadeInUp 0.7s 0.3s ease both',
        }}
      >
        <button
          className="btn-primary"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Projects
        </button>
        <a
          href="/resume.pdf"
          download
          className="btn-ghost"
          style={{ textDecoration: 'none' }}
        >
          Download Resume
        </a>
        <button
          className="btn-ghost"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contact Me
        </button>
      </div>

      {/* Social quick links */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', animation: 'fadeInUp 0.7s 0.4s ease both' }}>
        <a
          href="https://github.com/Swayam2643"
          target="_blank"
          rel="noreferrer"
          style={{ color: 'var(--text3)', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}
        >
          <FiGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/swayam-patel-30148b363"
          target="_blank"
          rel="noreferrer"
          style={{ color: 'var(--text3)', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}
        >
          <FiLinkedin size={20} />
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text3)',
          fontSize: '0.72rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        <div
          className="scroll-line"
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
          }}
        />
        <FiArrowDown size={12} />
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  )
}
