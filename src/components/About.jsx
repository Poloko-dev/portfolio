import data from '../data/portfolio.json'

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

      <div className="about-content">
        <p>{about.summary}</p>
        <p style={{ marginTop: '1rem', color: 'var(--gray)' }}>
          {personal.location}
        </p>
      </div>
    </section>
  )
}
