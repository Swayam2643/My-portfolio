import { RevealDiv } from '../hooks/useReveal.jsx'

const reasons = [
  { icon: '⚡', title: 'Full Stack Expertise', desc: 'End-to-end development from React frontends to Node.js backends and MySQL databases.' },
  { icon: '🧠', title: 'AI & Emerging Tech', desc: 'Hands-on AI internship experience with Python-based tools, model evaluation, and automation.' },
  { icon: '🏢', title: 'Real Internship Experience', desc: 'Proven track record in both AI development and IT operations environments.' },
  { icon: '🔧', title: 'Problem-Solving Mindset', desc: 'Analytical approach to debugging, optimization, and building reliable systems.' },
  { icon: '📈', title: 'Fast Learner', desc: 'Continuously exploring new technologies and applying them to real-world projects.' },
  { icon: '🤝', title: 'Collaborative Team Player', desc: 'Experience in cross-functional teams with strong communication and documentation skills.' },
]

export default function WhyHireMe() {
  return (
    <section className="section-container">
      <RevealDiv><div className="section-label">Value Proposition</div></RevealDiv>
      <RevealDiv delay={0.05}><h2 className="section-title">Why Hire Me?</h2></RevealDiv>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {reasons.map((r, i) => (
          <RevealDiv key={r.title} delay={i * 0.06}>
            <div
              className="why-card card"
              style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden', transition: 'all 0.3s' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.querySelector('.why-card-bar').style.transform = 'scaleX(1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.querySelector('.why-card-bar').style.transform = 'scaleX(0)'
              }}
            >
              <div
                className="why-card-bar"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease',
                }}
              />
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{r.icon}</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>{r.title}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.6 }}>{r.desc}</div>
            </div>
          </RevealDiv>
        ))}
      </div>
    </section>
  )
}
