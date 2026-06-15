import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Posts from './components/Posts'
import Projects from './components/Projects'
import PostView from './components/PostView'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialTheme() {
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return getSystemTheme()
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

function App() {
  const [activePost, setActivePost] = useState(null)
  const [theme, setTheme] = useState(getInitialTheme)
  const isReading = Boolean(activePost)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemTheme = () => {
      const stored = window.localStorage.getItem('theme')
      if (stored !== 'light' && stored !== 'dark') {
        setTheme(getSystemTheme())
      }
    }

    query.addEventListener('change', handleSystemTheme)
    return () => query.removeEventListener('change', handleSystemTheme)
  }, [])

  function handleThemeToggle() {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem('theme', next)
      return next
    })
  }

  function scrollToSection(id) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const primary = document.getElementById(id)
        const fallback = document.getElementById(`${id}-inline`)
        const target =
          primary && primary.offsetParent !== null
            ? primary
            : fallback || primary

        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 84
          window.scrollTo({ top, behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      })
    })
  }

  function handleNavigate(id) {
    return (event) => {
      event.preventDefault()
      setActivePost(null)

      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      scrollToSection(id)
    }
  }

  return (
    <div className="min-h-screen bg-[image:var(--theme-shell-bg)] text-app-text">
      <header className="sticky top-0 z-20 flex h-[var(--header-height)] items-center justify-between border-b border-app-border bg-[var(--theme-header)] px-10 backdrop-blur-xl max-[880px]:px-6 max-[640px]:h-auto max-[640px]:min-h-[var(--header-height)] max-[640px]:items-center max-[640px]:px-5 max-[640px]:py-4">
        <a
          href="#home"
          className="inline-flex rounded-lg px-3 py-2 leading-none transition-colors"
          onClick={handleNavigate('home')}
        >
          <span className="flex flex-col gap-1">
            <span className="font-brand text-[1.45rem] font-[650] text-app-heading">
              Aakash Tammana
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-app-accent-2">
              <span>Software Engineer</span>
              <span aria-hidden="true">|</span>
              <span>Creator</span>
            </span>
          </span>
        </a>
        <ThemeToggle theme={theme} onToggle={handleThemeToggle} />
      </header>

      <div className="flex min-h-[calc(100vh-var(--header-height))] items-start max-[880px]:block">
        <Sidebar onNavigate={handleNavigate} />
        <div className="flex flex-1 items-start justify-center gap-[clamp(2rem,4vw,3rem)] px-10 py-12 pb-28 max-[1180px]:mx-auto max-[1180px]:max-w-[820px] max-[1180px]:flex-col max-[1180px]:gap-9 max-[880px]:px-6 max-[880px]:py-9 max-[880px]:pb-20 max-[640px]:gap-8 max-[640px]:px-5 max-[640px]:py-8 max-[640px]:pb-16">
          <main
            className={`min-w-0 flex-1 basis-[684px] max-[1180px]:w-full max-[1180px]:max-w-none max-[1180px]:basis-auto max-[1180px]:flex-none ${
              isReading ? 'max-w-[760px]' : 'max-w-[704px]'
            }`}
          >
            {activePost ? (
              <PostView
                post={activePost}
                onBack={() => setActivePost(null)}
              />
            ) : (
              <>
                <section id="about" className="mb-8 border-b border-app-border pb-8">
                  <h2 className="mb-3 font-title text-[clamp(1.75rem,3vw,2.12rem)] font-[780] leading-[1.1] text-app-heading">
                    About
                  </h2>
                  <p className="max-w-[43rem] text-[clamp(1.03rem,1.7vw,1.18rem)] leading-[1.62] text-app-text-soft">
                    I build AI-powered systems across application, orchestration,
                    and infrastructure layers. My work focuses on clean service
                    boundaries, pragmatic abstraction layers, and interfaces that
                    make complex agent workflows easier to reason about.
                  </p>
                </section>

                <Posts variant="inline" onSelectPost={setActivePost} />
              </>
            )}
          </main>

          {!activePost && (
            <Projects />
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
