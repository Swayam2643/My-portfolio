import { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: 'blur(20px)',
        background: scrolled ? 'color-mix(in srgb, var(--bg) 90%, transparent)' : 'transparent',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: '1.15rem',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        SP
      </div>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem' }} className="nav-links-desktop">
        {links.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text2)',
              fontSize: '0.85rem',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              transition: 'color 0.2s',
              padding: '0.25rem 0',
            }}
            onMouseEnter={e => (e.target.style.color = 'var(--text)')}
            onMouseLeave={e => (e.target.style.color = 'var(--text2)')}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          onClick={() => setDark(!dark)}
          style={{
            background: 'var(--bg3)',
            border: '1px solid var(--border)',
            color: 'var(--text2)',
            padding: '0.4rem 0.75rem',
            borderRadius: 8,
            cursor: 'pointer',
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'Inter, sans-serif',
            transition: 'all 0.2s',
          }}
        >
          {dark ? <FiSun size={14} /> : <FiMoon size={14} />}
          {dark ? 'Light' : 'Dark'}
        </button>
        <a
          href="mailto:swayampatel71@gmail.com"
          className="btn-primary"
          style={{ padding: '0.45rem 1rem', fontSize: '0.8rem', borderRadius: 8, textDecoration: 'none' }}
        >
          Hire me
        </a>
        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 64,
            left: 0,
            right: 0,
            background: 'var(--bg2)',
            borderBottom: '1px solid var(--border)',
            padding: '1rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text2)',
                fontSize: '1rem',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                textAlign: 'left',
                padding: '0.5rem 0',
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
