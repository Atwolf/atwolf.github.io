import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  themeVariables: {
    darkMode: true,
    background: '#1e293b',
    primaryColor: '#38bdf8',
    primaryTextColor: '#e2e8f0',
    lineColor: '#94a3b8',
    secondaryColor: '#818cf8',
    tertiaryColor: '#334155',
  },
})

let counter = 0

function MermaidBlock({ code }) {
  const containerRef = useRef(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const id = `mermaid-${counter++}`
    let cancelled = false

    mermaid
      .render(id, code)
      .then(({ svg }) => {
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg
        }
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
    }
  }, [code])

  if (error) {
    return (
      <pre className="code-block">
        <code>{code}</code>
      </pre>
    )
  }

  return <div ref={containerRef} className="mermaid-diagram" />
}

export default MermaidBlock
