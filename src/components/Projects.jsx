import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const GITHUB_USERNAME = 'Atwolf'
const PORTFOLIO_TOPIC = 'portfolio'
const PROJECT_ACCENTS = [
  'var(--theme-accent)',
  'var(--theme-accent-2)',
  'var(--theme-highlight)',
  'var(--theme-text-muted)',
]

function toTitle(name) {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function getYear(date) {
  const parsed = new Date(date)
  return Number.isNaN(parsed.getTime()) ? 'Recent' : parsed.getFullYear()
}

function getDemoUrl(repo) {
  const homepage = repo.homepage?.trim()
  if (!homepage) return null

  const candidate = /^https?:\/\//i.test(homepage) ? homepage : `https://${homepage}`

  try {
    const demo = new URL(candidate).href
    return demo === repo.html_url ? null : demo
  } catch {
    return null
  }
}

function getTagline(topics, language) {
  if (topics.length > 0) return topics.slice(0, 2).join(' + ')
  if (language) return `${language} project`
  return 'selected system'
}

function getSkillTags(repo, topics) {
  const tags = [
    repo.language,
    ...topics,
  ]
    .filter(Boolean)
    .map((skill) => skill.toLowerCase())

  return [...new Set(tags)].slice(0, 5)
}

function normalizeProject(repo, index) {
  const topics = (repo.topics || []).filter((topic) => topic !== PORTFOLIO_TOPIC)
  const source = repo.html_url
  const demo = getDemoUrl(repo)

  return {
    id: repo.id,
    accent: PROJECT_ACCENTS[index % PROJECT_ACCENTS.length],
    demo,
    description: repo.description || 'No description provided.',
    skills: getSkillTags(repo, topics),
    source,
    tagline: getTagline(topics, repo.language),
    title: toTitle(repo.name),
    year: getYear(repo.updated_at),
  }
}

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
          {
            headers: { Accept: 'application/vnd.github.mercy-preview+json' },
          },
        )
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`)
        const repos = await res.json()
        const tagged = repos.filter(
          (repo) => repo.topics && repo.topics.includes(PORTFOLIO_TOPIC),
        )
        setProjects(tagged)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <aside
      id="work"
      className="project-rail sticky top-[90px] w-[min(25vw,340px)] min-w-[280px] shrink-0 self-start pl-9 max-[1180px]:static max-[1180px]:w-full max-[1180px]:min-w-0 max-[1180px]:pl-0"
      aria-labelledby="project-rail-title"
    >
      <div className="mb-5">
        <h2 id="project-rail-title" className="project-rail-title">
          Projects
        </h2>
        <p className="mt-1 text-[0.82rem] text-app-text-muted">
          Selected systems, tools, and interfaces
        </p>
      </div>

      {loading && <p className="mt-5 text-[0.94rem] text-app-text-soft">Loading projects&hellip;</p>}

      {error && (
        <p className="mt-5 text-[0.94rem] text-app-text-soft">
          Could not load projects. Please try again later.
        </p>
      )}

      {!loading && !error && projects.length === 0 && (
        <p className="mt-5 text-[0.94rem] text-app-text-soft">
          No projects tagged yet. Add the <code className="rounded border border-app-border bg-app-accent/10 px-1.5 py-0.5 text-[0.85rem] text-app-heading">{PORTFOLIO_TOPIC}</code> topic
          to a GitHub repo to feature it here.
        </p>
      )}

      <div className="grid gap-4 max-[1180px]:grid-cols-2 max-[640px]:grid-cols-1">
        {projects.map((repo, index) => {
          const project = normalizeProject(repo, index)
          return (
            <article
              key={project.id}
              className="group block rounded-lg border border-app-border bg-app-panel p-3.5 text-app-text transition-colors hover:border-app-accent-2/50"
              style={{ '--project-accent': project.accent }}
            >
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full overflow-hidden rounded-lg border border-app-border bg-app-surface"
                  aria-label={`${project.title} live demo`}
                >
                  <div className="flex items-center gap-1 border-b border-app-border bg-app-surface-muted px-2 py-1.5" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-app-highlight" />
                    <span className="h-1.5 w-1.5 rounded-full bg-app-accent-2" />
                    <span className="h-1.5 w-1.5 rounded-full bg-app-accent" />
                  </div>
                  <div className="relative flex min-h-24 items-center justify-center bg-[color:var(--theme-preview-bg)] bg-[image:var(--theme-preview-pattern)] px-3 text-center before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-[var(--project-accent)]" aria-hidden="true">
                    <span className="font-serif text-[0.78rem] italic leading-tight text-app-text-muted">{project.tagline}</span>
                  </div>
                </a>
              )}

              <div className={project.demo ? 'mt-3' : ''}>
                <span className="mb-1 inline-flex font-mono text-[0.7rem] font-bold text-app-text-muted">
                  {project.year}
                </span>
                <h3 className="font-title text-[1.08rem] font-[760] leading-tight text-app-heading transition-colors group-hover:text-app-accent-2">
                  {project.title}
                </h3>
                <p className="mt-2 text-[0.86rem] leading-normal text-app-text-soft">{project.description}</p>
              </div>

              {project.skills.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2" aria-label={`${project.title} skills`}>
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex min-h-6 items-center rounded-full bg-app-accent/10 px-2.5 text-[0.72rem] font-semibold text-app-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-3 flex items-center justify-end gap-3 border-t border-app-border/80 pt-3 font-mono text-[0.72rem] leading-normal text-app-accent">
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border border-app-border bg-app-accent/10 text-[0.88rem] text-app-accent transition-colors hover:border-app-accent-2/40 hover:bg-app-accent-soft hover:text-app-accent-2"
                    aria-label={`${project.title} source code`}
                    title="Source code"
                  >
                    <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border border-app-border bg-app-accent/10 text-[0.88rem] text-app-accent transition-colors hover:border-app-accent-2/40 hover:bg-app-accent-soft hover:text-app-accent-2"
                      aria-label={`${project.title} live demo`}
                      title="Live demo"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </aside>
  )
}

export default Projects
