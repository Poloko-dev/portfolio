import data from '../data/portfolio.json'
import summary from '../data/worksummary.json'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-header">
        <span className="prompt">$</span>
        <span className="command">cat experience.log</span>
        <span className="divider" />
        <span className="timestamp">experience</span>
      </div>

      <div className="timeline">
        {data.experience.map((job, i) => (
          <div className="timeline-item" key={i}>
            <span className="period">{job.period}</span>
            <h3>{job.role}</h3>
            <div className="company">{job.company} — {job.location}</div>
            <ul>
              {job.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
            {i === 0 && summary.skillsDemonstrated && (
              <div style={{ marginTop: '0.75rem' }}>
                <div style={{ color: 'var(--gray)', fontSize: '0.78rem', marginBottom: '0.4rem' }}># work summary</div>
                <div className="skill-items">
                  {summary.skillsDemonstrated.map((s) => (
                    <span className="skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
