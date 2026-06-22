import { RevealDiv } from '../hooks/useReveal.jsx'

const milestones = [
  { year: '2021', text: 'Started programming – fundamentals & logic building' },
  { year: '2022', text: 'Built first web development projects with HTML, CSS, JS' },
  { year: '2023', text: 'IT Internship – banking operations & system support' },
  { year: '2024', text: 'AI Internship at Edunet – Python, data workflows & automation' },
  { year: '2025', text: 'Advanced full-stack development – ALACTO, Tasty Tab & more' },
  { year: '2026', text: 'MCA Graduate – ready to build impactful software at scale' },
]

export function Journey() {
  return (
    <section className="section-container">
      <RevealDiv><div className="section-label">Timeline</div></RevealDiv>
      <RevealDiv delay={0.05}><h2 className="section-title">Development Journey</h2></RevealDiv>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {milestones.map((m, i) => (
          <RevealDiv key={m.year} delay={i * 0.07}>
            <div
              className="card"
              style={{ padding: '1.2rem', textAlign: 'center', transition: 'all 0.3s' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              <div
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {m.year}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text2)', marginTop: '0.4rem', lineHeight: 1.5 }}>{m.text}</div>
            </div>
          </RevealDiv>
        ))}
      </div>
    </section>
  )
}

const testimonials = [
  {
    text: 'Highly motivated developer with excellent technical skills and a genuine problem-solving ability. Swayam brings both depth of knowledge and a collaborative attitude to every project.',
    name: 'Anuj Patel',
    role: 'Senior Developer · Edunet Foundation',
    initials: 'AP',
  },
  {
    text: 'Strong understanding of modern web technologies and project execution. Swayam consistently delivers well-structured code and communicates clearly throughout the development cycle.',
    name: 'Ravi Desai',
    role: 'IT Manager · Rander Peoples Bank',
    initials: 'RD',
  },
]

export function Testimonials() {
  return (
    <section className="section-container">
      <RevealDiv><div className="section-label">Social Proof</div></RevealDiv>
      <RevealDiv delay={0.05}><h2 className="section-title">Testimonials</h2></RevealDiv>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {testimonials.map((t, i) => (
          <RevealDiv key={t.name} delay={i * 0.1}>
            <div
              className="card"
              style={{ padding: '1.75rem', transition: 'all 0.3s' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'var(--border2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              <div style={{ fontSize: '2.5rem', lineHeight: 1, color: 'var(--accent)', opacity: 0.5, marginBottom: '0.5rem', fontFamily: 'Georgia, serif' }}>"</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.25rem' }}>{t.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text3)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          </RevealDiv>
        ))}
      </div>
    </section>
  )
}
