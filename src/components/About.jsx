import { RevealDiv } from '../hooks/useReveal.jsx'

const counters = [
  { num: '10+', label: 'Technologies' },
  { num: '3+', label: 'Major Projects' },
  { num: '2', label: 'Internships' },
  { num: '500+', label: 'Dev Hours' },
]

export default function About() {
  return (
    <section id="about" className="section-container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

        {/* Left: Avatar + Counters */}
        <RevealDiv>
          <div
            style={{
              width: '100%',
              aspectRatio: '1',
              borderRadius: 24,
              background: 'linear-gradient(135deg, var(--bg3), var(--bg4))',
              border: '1px solid var(--border2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            🧑‍💻
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent) 15%, transparent), transparent 60%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                right: '1rem',
                background: 'color-mix(in srgb, var(--bg4) 90%, transparent)',
                border: '1px solid var(--border2)',
                borderRadius: 12,
                padding: '0.75rem',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>Swayam Patel</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text3)', marginBottom: '0.4rem' }}>Full Stack Developer</div>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {['React', 'Python', 'Node.js'].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
            {counters.map(({ num, label }, i) => (
              <RevealDiv key={label} delay={i * 0.05}>
                <div className="card" style={{ padding: '1.2rem', textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, var(--accent), var(--accent3))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {num}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text3)', marginTop: '0.25rem' }}>{label}</div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </RevealDiv>

        {/* Right: Text */}
        <RevealDiv delay={0.15}>
          <div className="section-label">Who am I?</div>
          <h2 className="section-title">Turning ideas into<br />powerful digital products</h2>
          <p style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: '1.2rem', fontSize: '0.95rem' }}>
            I'm Swayam Patel, a passionate Full Stack Developer pursuing a Master of Computer Applications
            at Dr. D.Y Patil School of Science and Technology. I enjoy transforming ideas into powerful
            digital products using modern web technologies.
          </p>
          <p style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: '1.2rem', fontSize: '0.95rem' }}>
            My expertise spans React.js, Node.js, Python, MySQL, REST APIs, and cloud-ready applications.
            Alongside development, I have experience in AI-driven projects and IT support environments where
            I learned practical problem-solving, system monitoring, and teamwork.
          </p>
          <p style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            I am continuously exploring emerging technologies and building projects that solve real-world
            problems — combining strong fundamentals with a builder's mindset.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { icon: '📍', text: 'Pune, Maharashtra' },
              { icon: '🎓', text: 'MCA – 8.14 CGPA' },
              { icon: '💼', text: '2 Internships' },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text2)' }}>
                {icon} {text}
              </div>
            ))}
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}
