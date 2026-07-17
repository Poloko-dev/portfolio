import data from '../data/portfolio.json'
import TerminalImage from './TerminalImage'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <span className="prompt">$</span>
        <span className="command">ls -la /projects/</span>
        <span className="divider" />
        <span className="timestamp">projects</span>
      </div>

      <div className="projects-grid">
        {data.projects.map((project, i) => (
          <div className="project-card" key={i}>
            {project.image && (
              <TerminalImage
                src={project.image}
                alt={project.title}
                asciiWidth={60}
                className="project-image"
              />
            )}
            <h3>{project.title}</h3>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p>{project.description}</p>
            <a
              href={project.url}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View project
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
