import data from '../data/portfolio.json'

export default function Contact() {
  const { personal } = data

  return (
    <section className="section" id="contact">
      <div className="section-header">
        <span className="prompt">$</span>
        <span className="command">cat contact.txt</span>
        <span className="divider" />
        <span className="timestamp">contact</span>
      </div>

      <div className="contact-links">
        <a href={`mailto:${personal.email}`}>{personal.email}</a>
        <a href={personal.github} target="_blank" rel="noopener noreferrer">
          {personal.github}
        </a>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
          {personal.linkedin}
        </a>
        
        {personal.phone?.map((num) => (
          <a key={num} href={`tel:${num.replace(/\s/g, '')}`}>{num}</a>
        ))}
      </div>
    </section>
  )
}
