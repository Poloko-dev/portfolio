import data from '../data/portfolio.json'
import TerminalImage from './TerminalImage'

export default function About() {
  const { personal, about } = data

  return (
    <section className="section" id="about">
      <div className="section-header">
        <span className="prompt">$</span>
        <span className="command">cat about.md</span>
        <span className="divider" />
        <span className="timestamp">about</span>
      </div>

      <div className="about-layout">
        {about.image && (
          <div className="about-image">
            <TerminalImage
              src={about.image}
              alt={`${personal.name} profile`}
              asciiWidth={80}
            />
          </div>
        )}
        <div className="about-content">
          <p>{about.summary}</p>
          <p style={{ marginTop: '1rem', color: 'var(--gray)' }}>
            {personal.location}
          </p>
        </div>
      </div>
    </section>
  )
}
