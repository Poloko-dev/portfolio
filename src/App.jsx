import { useState } from 'react'
import TerminalHeader from './components/TerminalHeader'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  const [booted, setBooted] = useState(false)

  return (
    <>
      <TerminalHeader onBooted={() => setBooted(true)} />

      {booted && (
        <>
          <main className="fade-in">
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <footer className="terminal-footer fade-in">
            <div className="footer-prompt">
              <span style={{ color: 'var(--green)' }}>visitor@portfolio:~$</span>
              <span className="cursor" />
            </div>
            <p style={{ marginTop: '0.5rem' }}>
              &copy; {new Date().getFullYear()} — Built with React + Vite
            </p>
          </footer>
        </>
      )}
    </>
  )
}
