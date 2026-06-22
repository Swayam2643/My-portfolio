import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { RevealDiv } from '../hooks/useReveal.jsx'

const projects = [
  {
    title: 'ALACTO – Smart Real Estate Platform',
    desc: 'Full-stack real estate management platform with property listings, CRUD operations, secure authentication, admin dashboard, and optimized client-server communication.',
    tags: ['React.js', 'Node.js', 'MySQL', 'REST API', 'HTML5', 'CSS3'],
    mockupColor: 'linear-gradient(135deg, #1a1030, #0d1a30)',
    accentColor: '#6366f1',
    emoji: '🏠',
    github: 'https://github.com/Swayam2643',
    demo: '#',
  },
  {
    title: 'TASTY TAB – Digital Restaurant Menu',
    desc: 'Responsive digital menu application with interactive category filtering, mobile-first design, RESTful API integration, and dynamic content loading via MongoDB.',
    tags: ['React.js', 'MongoDB', 'JavaScript', 'REST API'],
    mockupColor: 'linear-gradient(135deg, #1a1a0a, #2a1a0a)',
    accentColor: '#f59e0b',
    emoji: '🍽️',
    github: 'https://github.com/Swayam2643',
    demo: '#',
  },
  {
    title: 'Online Jewellery Store',
    desc: 'Dynamic e-commerce platform with user authentication, product catalog, shopping cart, checkout workflow, and MySQL backend powered by Python.',
    tags: ['Python', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    mockupColor: 'linear-gradient(135deg, #1a0a1a, #1a1505)',
    accentColor: '#d4af37',
    emoji: '💎',
    github: 'https://github.com/Swayam2643',
    demo: '#',
  },
]

function ProjectCard({ project, delay }) {
  return (
    <RevealDiv delay={delay}>
      <div
        className="card"
        style={{
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          cursor: 'pointer',
          transition: 'all 0.3s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-6px)'
          e.currentTarget.style.borderColor = project.accentColor
          e.currentTarget.style.boxShadow = `0 24px 60px color-mix(in srgb, ${project.accentColor} 15%, transparent)`
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'none'
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Mockup */}
        <div
          style={{
            height: 200,
            background: project.mockupColor,
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              background: 'var(--bg4)',
              border: '1px solid var(--border2)',
              borderRadius: 12,
              padding: '1rem',
              minWidth: 200,
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div style={{ fontSize: '0.55rem', color: project.accentColor, fontWeight: 700, marginBottom: '0.4rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}>
              {project.title.split('–')[0].trim().toUpperCase()}
            </div>
            <div style={{ height: 3, background: project.accentColor, borderRadius: 2, width: '70%', marginBottom: '0.3rem' }} />
            <div style={{ height: 3, background: 'var(--border2)', borderRadius: 2, width: '50%', marginBottom: '0.4rem' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.3rem' }}>
              <div style={{ background: `${project.accentColor}20`, border: `1px solid ${project.accentColor}30`, borderRadius: 4, height: 28 }} />
              <div style={{ background: `${project.accentColor}20`, border: `1px solid ${project.accentColor}30`, borderRadius: 4, height: 28 }} />
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--bg3), transparent)',
            }}
          />
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '1.5rem' }}>{project.emoji}</div>
        </div>

        {/* Body */}
        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text)' }}>{project.title}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.6, marginBottom: '1rem', flex: 1 }}>{project.desc}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
            {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}
            >
              <FiGithub size={14} /> Code
            </a>
            <a
              href={project.demo}
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}
            >
              <FiExternalLink size={14} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </RevealDiv>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <RevealDiv><div className="section-label">Portfolio</div></RevealDiv>
      <RevealDiv delay={0.05}><h2 className="section-title">Featured Projects</h2></RevealDiv>
      <RevealDiv delay={0.1}>
        <p className="section-sub">Full-stack applications built with modern technologies and production-quality architecture.</p>
      </RevealDiv>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {projects.map((p, i) => <ProjectCard key={p.title} project={p} delay={i * 0.1} />)}
      </div>
    </section>
  )
}
