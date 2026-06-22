import { RevealDiv } from '../hooks/useReveal.jsx'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', pct: 90 },
      { name: 'JavaScript', pct: 88 },
      { name: 'HTML5 / CSS3', pct: 92 },
      { name: 'Tailwind CSS', pct: 80 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', pct: 82 },
      { name: 'Python', pct: 85 },
      { name: 'Django', pct: 65 },
      { name: 'REST APIs', pct: 84 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', pct: 86 },
      { name: 'MongoDB', pct: 75 },
      { name: 'PostgreSQL', pct: 65 },
    ],
  },
  {
    title: 'Tools & Concepts',
    skills: [
      { name: 'Git / GitHub', pct: 88 },
      { name: 'Postman', pct: 80 },
      { name: 'OOP / DSA', pct: 78 },
      { name: 'Auth & Security', pct: 80 },
    ],
  },
]

function SkillCard({ category, delay }) {
  return (
    <RevealDiv delay={delay}>
      <div
        className="card"
        style={{ padding: '1.5rem', height: '100%', cursor: 'default' }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.background = 'var(--bg4)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'none'
          e.currentTarget.style.background = 'var(--bg3)'
        }}
      >
        <div
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '1rem',
          }}
        >
          {category.title}
        </div>
        {category.skills.map(({ name, pct }) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text2)', minWidth: 110 }}>{name}</span>
            <div
              style={{
                flex: 1,
                height: 3,
                background: 'var(--border2)',
                borderRadius: 999,
                overflow: 'hidden',
              }}
            >
              <div
                className="skill-fill"
                style={{
                  height: '100%',
                  width: `${pct}%`,
                  borderRadius: 999,
                  background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
                }}
              />
            </div>
            <span style={{ fontSize: '0.7rem', color: 'var(--text3)', minWidth: 28, textAlign: 'right', fontFamily: 'JetBrains Mono, monospace' }}>
              {pct}%
            </span>
          </div>
        ))}
      </div>
    </RevealDiv>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <RevealDiv><div className="section-label">Capabilities</div></RevealDiv>
      <RevealDiv delay={0.05}><h2 className="section-title">Technical Skills</h2></RevealDiv>
      <RevealDiv delay={0.1}><p className="section-sub">A diverse toolkit built through real-world projects and continuous learning.</p></RevealDiv>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        {skillCategories.map((cat, i) => (
          <SkillCard key={cat.title} category={cat} delay={i * 0.07} />
        ))}
      </div>
    </section>
  )
}
