import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={onToggle}
      className="relative inline-flex h-8 w-16 shrink-0 items-center rounded-full border border-app-border bg-app-surface-muted p-1 text-app-muted transition-colors hover:border-app-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-app-accent/55"
    >
      <span
        aria-hidden="true"
        className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full bg-app-panel text-[0.7rem] text-app-accent shadow-sm transition-transform duration-300 ease-out ${
          isDark ? 'translate-x-8' : 'translate-x-0'
        }`}
      >
        <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
      </span>
      <span className="sr-only">{isDark ? 'Dark mode enabled' : 'Light mode enabled'}</span>
    </button>
  )
}

export default ThemeToggle
