import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const socialLinks = [
    { icon: <FiGithub size={16} />, href: 'https://github.com/Swayam2643', label: 'GitHub' },
    { icon: <FiLinkedin size={16} />, href: 'https://linkedin.com/in/swayam-patel-30148b363', label: 'LinkedIn' },
    { icon: <FiMail size={16} />, href: 'mailto:swayampatel71@gmail.com', label: 'Email' },
  ]

  return (
    <footer
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div style={{ color: 'var(--text3)', fontSize: '0.82rem' }}>
        Designed & Developed by{' '}
        <span style={{ color: 'var(--text2)', fontWeight: 500 }}>Swayam Patel</span>
        {' '}© 2026
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '0.75rem' }}>
        {socialLinks.map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: '1px solid var(--border)',
              background: 'var(--bg3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text2)',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
              e.currentTarget.style.background = 'color-mix(in srgb, var(--accent) 8%, transparent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text2)'
              e.currentTarget.style.background = 'var(--bg3)'
            }}
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  )
}
