import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Analytics from './components/Analytics'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProcessFlow from './components/ProcessFlow'
import { profile } from './data'

export default function App() {
  return (
    <>
      <div className="crt" aria-hidden="true" />
      <Navbar />
      <div className="process-flow-dock">
        <ProcessFlow name={profile.name} />
      </div>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Analytics />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
