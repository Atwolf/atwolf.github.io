import { useState, useEffect } from 'react'

const GITHUB_USERNAME = 'Atwolf'
const PORTFOLIO_TOPIC = 'portfolio'

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
    <section id="projects" className="section">
      <h2>Projects</h2>

      {loading && <p className="status-text">Loading projects&hellip;</p>}

      {error && (
        <p className="status-text">
          Could not load projects. Please try again later.
        </p>
      )}

      {!loading && !error && projects.length === 0 && (
        <p className="status-text">
          No projects tagged yet. Add the <code>{PORTFOLIO_TOPIC}</code> topic
          to a GitHub repo to feature it here.
        </p>
      )}

      <div className="projects-grid">
        {projects.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>{repo.name}</h3>
            <p>{repo.description || 'No description provided.'}</p>
            <div className="project-meta">
              {repo.language && <span className="project-lang">{repo.language}</span>}
              {repo.stargazers_count > 0 && (
                <span className="project-stars">&#9733; {repo.stargazers_count}</span>
              )}
            </div>
            <div className="project-tech">
              {repo.topics
                .filter((t) => t !== PORTFOLIO_TOPIC)
                .map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
