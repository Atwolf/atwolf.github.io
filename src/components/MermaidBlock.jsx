import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

let counter = 0

function readThemeVariable(styles, name) {
  return styles.getPropertyValue(name).trim()
}

function getMermaidConfig() {
  const root = document.documentElement
  const styles = getComputedStyle(root)

  return {
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
      background: readThemeVariable(styles, '--theme-surface'),
      darkMode: root.dataset.theme === 'dark',
      lineColor: readThemeVariable(styles, '--theme-text-muted'),
      primaryColor: readThemeVariable(styles, '--theme-accent'),
      primaryTextColor: readThemeVariable(styles, '--theme-heading'),
      secondaryColor: readThemeVariable(styles, '--theme-surface-muted'),
      tertiaryColor: readThemeVariable(styles, '--theme-bg'),
    },
  }
}

function MermaidBlock({ code }) {
  const containerRef = useRef(null)
  const [error, setError] = useState(null)
  const [themeVersion, setThemeVersion] = useState(0)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setThemeVersion((version) => version + 1)
    })

    observer.observe(document.documentElement, {
      attributeFilter: ['data-theme'],
      attributes: true,
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const id = `mermaid-${counter++}`
    let cancelled = false
    setError(null)
    mermaid.initialize(getMermaidConfig())

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
  }, [code, themeVersion])

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
