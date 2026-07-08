import { useEffect, useState } from 'react'
import data from '../data/portfolio.json'

const BOOT_DELAY = 0.6
const ANIM_DURATION = 0.4
const BOOT_SETTLE = 0.6

const bootLines = [
  { label: 'BOOT', text: data.terminal.bootMessage, status: 'boot' },
  { label: 'OK', text: 'Kernel loaded — v1.0.0', status: 'ok' },
  { label: 'OK', text: 'Network: 100Mbps | ETH0', status: 'ok' },
  { label: 'OK', text: 'Session initialized', status: 'ok' },
  { label: 'READY', text: data.terminal.readyMessage, status: 'ready' },
]

export default function TerminalHeader({ onBooted }) {
  const { personal, terminal } = data
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const total = (bootLines.length - 1) * BOOT_DELAY + ANIM_DURATION + BOOT_SETTLE
    const timer = setTimeout(() => {
      setShowContent(true)
      onBooted()
    }, total * 1000)
    return () => clearTimeout(timer)
  }, [onBooted])

  return (
    <header className="terminal-header">
      <div className="terminal-boot">
        {bootLines.map((line, i) => (
          <div
            key={i}
            className="boot-line"
            style={{ animationDelay: `${i * BOOT_DELAY}s` }}
            data-status={line.status}
          >
            <span>[{line.label}]</span>
            <span>{line.text}</span>
          </div>
        ))}
      </div>

      {showContent && (
        <div className="post-boot fade-in">
          <div className="greeting">
            <div className="line">
              <span className="prompt-symbol">{terminal.prompt}</span>
              <span className="cmd">whoami</span>
            </div>
            <div className="line" style={{ paddingLeft: '1.5rem' }}>
              <span className="output">{personal.name}</span>
            </div>
            <div className="line" style={{ marginTop: '0.5rem' }}>
              <span className="prompt-symbol">{terminal.prompt}</span>
              <span className="cmd">cat about.md</span>
            </div>
          </div>

          <div className="name-title">
            <h1>{personal.name}</h1>
            <div className="title-sub">{personal.title}</div>
          </div>

          <div className="tagline">{personal.tagline}</div>

          <div className="cta-links">
            <a href={`mailto:${personal.email}`}>Email</a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#projects">Projects</a>
          </div>
        </div>
      )}
    </header>
  )
}
