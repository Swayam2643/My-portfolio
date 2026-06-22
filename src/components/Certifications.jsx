import { RevealDiv } from '../hooks/useReveal.jsx'

const certs = [
  { icon: '🏆', name: 'TCS iON Career Edge', issuer: 'Tata Consultancy Services' },
  { icon: '🤖', name: 'Artificial Intelligence Internship', issuer: 'AICTE – Codec Technologies' },
  { icon: '💡', name: 'AI & Employability Skills Program', issuer: 'Magic Bus India' },
  { icon: '⚛️', name: 'React JS & PHP Training', issuer: 'Karon InfoTech (6 months)' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      <RevealDiv><div className="section-label">Credentials</div></RevealDiv>
      <RevealDiv delay={0.05}><h2 className="section-title">Certifications</h2></RevealDiv>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {certs.map((cert, i) => (
          <RevealDiv key={cert.name} delay={i * 0.07}>
            <div
              className="card"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--bg4)'
                e.currentTarget.style.borderColor = 'var(--border2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--bg3)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent) 20%, transparent), color-mix(in srgb, var(--accent2) 20%, transparent))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  flexShrink: 0,
                }}
              >
                {cert.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.25rem', lineHeight: 1.3 }}>{cert.name}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text3)' }}>{cert.issuer}</div>
              </div>
            </div>
          </RevealDiv>
        ))}
      </div>
    </section>
  )
}
