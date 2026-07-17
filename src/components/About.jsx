import { useRef, useEffect, useState } from 'react'
import data from '../data/portfolio.json'
import TerminalImage from './TerminalImage'

function useContainerWidth(ref) {
  const [width, setWidth] = useState(240)
  useEffect(() => {
    if (!ref.current) return
    const update = () => setWidth(ref.current.clientWidth)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return width
}

export default function About() {
  const { personal, about } = data
  const imgRef = useRef(null)
  const containerWidth = useContainerWidth(imgRef)

  const asciiWidth = Math.max(30, Math.floor(containerWidth / 3.2))
  const maxHeight = Math.floor(asciiWidth * 1.1)

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
          <div className="about-image" ref={imgRef}>
            <TerminalImage
              src={about.image}
              alt={`${personal.name} profile`}
              asciiWidth={asciiWidth}
              maxHeight={maxHeight}
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
