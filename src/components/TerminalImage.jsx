import { useEffect, useState } from 'react'
import { convertToAscii } from '../utils/asciiArt'

export default function TerminalImage({
  src,
  alt = '',
  asciiWidth = 100,
  mode = 'ascii',
  className = '',
}) {
  const [ascii, setAscii] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (mode !== 'ascii') return
    setLoading(true)
    setError(false)
    convertToAscii(src, { width: asciiWidth })
      .then(setAscii)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [src, asciiWidth, mode])

  if (mode === 'crt') {
    return (
      <div className={`terminal-image-container ${className}`}>
        <div className="terminal-image-crt">
          <div className="terminal-image-screen">
            <img src={src} alt={alt} className="terminal-image-crt-img" />
          </div>
          <div className="scanlines" />
          <div className="crt-vignette" />
        </div>
      </div>
    )
  }

  return (
    <div className={`terminal-image-container ${className}`}>
      <div className="terminal-image-crt">
        <div className="terminal-image-screen">
          {loading && (
            <pre className="terminal-image-ascii terminal-loading">
              {'Loading...\n\n'.repeat(4)}
            </pre>
          )}
          {error && (
            <pre className="terminal-image-ascii terminal-error">
              {'ERROR: Failed to load image\n'.repeat(6)}
            </pre>
          )}
          {!loading && !error && (
            <pre className="terminal-image-ascii">{ascii}</pre>
          )}
        </div>
        <div className="scanlines" />
        <div className="crt-vignette" />
      </div>
    </div>
  )
}
