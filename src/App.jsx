import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechMarquee from './components/TechMarquee'
import Certifications from './components/Certifications'
import WhyHireMe from './components/WhyHireMe'
import Journey from './components/Journey'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('light', !dark)
  }, [dark])

  return (
    <div>
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <hr className="section-divider" />
      <About />
      <hr className="section-divider" />
      <Skills />
      <hr className="section-divider" />
      <Experience />
      <hr className="section-divider" />
      <Projects />
      <TechMarquee />
      <Certifications />
      <hr className="section-divider" />
      <WhyHireMe />
      <hr className="section-divider" />
      <Journey />
      <hr className="section-divider" />
      <Testimonials />
      <hr className="section-divider" />
      <Contact />
      <Footer />
    </div>
  )
}
