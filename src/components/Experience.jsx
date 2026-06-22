import { RevealDiv } from '../hooks/useReveal.jsx'

const experiences = [
  {
    role: 'AI Intern',
    company: 'Edunet Foundation',
    period: '2024',
    bullets: [
      'Developed and tested AI-driven applications, contributing to backend functionality and data processing workflows',
      'Utilized Python-based tools for data validation, debugging, and performance optimization to improve system efficiency',
      'Collaborated with team members on model evaluation, workflow automation, and documentation to support project delivery',
      'Contributed to optimizing system performance through targeted technical improvements',
    ],
    tags: ['Python', 'AI/ML', 'Data Processing', 'Automation'],
  },
  {
    role: 'IT Support Intern / IT Assistant',
    company: 'Rander Peoples Co-Operative Bank',
    period: 'December 2023 – April 2024',
    bullets: [
      'Resolved 15+ technical issues weekly, improving banking staff workflow efficiency significantly',
      'Collaborated with teams to maintain uninterrupted day-to-day banking operations',
      'Assisted in database management and system monitoring to ensure reliable performance',
      'Supported network troubleshooting, account management, and security checks',
      'Developed professional communication and problem-solving skills in a fast-paced environment',
    ],
    tags: ['IT Support', 'Database Management', 'Networking', 'Security'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <RevealDiv><div className="section-label">Work History</div></RevealDiv>
      <RevealDiv delay={0.05}><h2 className="section-title">Experience</h2></RevealDiv>
      <RevealDiv delay={0.1}>
        <p className="section-sub">Real-world exposure across AI development and IT operations environments.</p>
      </RevealDiv>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        <div className="timeline-line" />
        {experiences.map((exp, i) => (
          <RevealDiv key={exp.company} delay={i * 0.1} style={{ position: 'relative', marginBottom: '2.5rem' }}>
            <div className="timeline-dot" />
            <div
              className="card"
              style={{ padding: '1.5rem', marginLeft: '0.5rem', transition: 'all 0.3s' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateX(4px)'
                e.currentTarget.style.borderColor = 'var(--border2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem' }}>{exp.role}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.4rem' }}>{exp.company}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text3)', marginBottom: '0.75rem', fontFamily: 'JetBrains Mono, monospace' }}>
                {exp.period}
              </div>
              <ul style={{ listStyle: 'none', marginBottom: '1rem' }}>
                {exp.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text2)',
                      padding: '0.3rem 0',
                      paddingLeft: '1.2rem',
                      position: 'relative',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: '0.75rem', top: '0.4rem' }}>→</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </RevealDiv>
        ))}
      </div>
    </section>
  )
}
