const techs = [
  { name: 'React.js', color: '#61dafb' },
  { name: 'Node.js', color: '#68a063' },
  { name: 'Python', color: '#3776ab' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'MongoDB', color: '#47a248' },
  { name: 'MySQL', color: '#00758f' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Git', color: '#f05032' },
  { name: 'GitHub', color: '#ffffff' },
  { name: 'Tailwind CSS', color: '#06b6d4' },
  { name: 'Django', color: '#44b78b' },
  { name: 'Postman', color: '#ff6c37' },
]

const doubled = [...techs, ...techs]

export default function TechMarquee() {
  return (
    <div
      style={{
        padding: '2.5rem 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
        background: 'var(--bg2)',
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          gap: '1.5rem',
          width: 'max-content',
        }}
      >
        {doubled.map((tech, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.1rem',
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              borderRadius: 999,
              fontSize: '0.82rem',
              fontWeight: 500,
              color: 'var(--text2)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: tech.color, display: 'inline-block', flexShrink: 0 }} />
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  )
}
