import data from '../data/portfolio.json'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header">
        <span className="prompt">$</span>
        <span className="command">ls -la /skills/</span>
        <span className="divider" />
        <span className="timestamp">skills</span>
      </div>

      <div className="skills-grid">
        {data.skills.map((group) => (
          <div className="skill-category" key={group.category}>
            <h3>{group.category}</h3>
            <div className="skill-items">
              {group.items.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
