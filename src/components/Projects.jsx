const projects = [
  {
    id: 1,
    name: 'Portfolio Site',
    description:
      'A personal portfolio website built with React and hosted on GitHub Pages.',
    tech: ['React', 'Vite', 'CSS'],
    link: '#',
  },
  {
    id: 2,
    name: 'Task Tracker',
    description:
      'A simple task management app with drag-and-drop support and local storage persistence.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: '#',
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    description:
      'A weather dashboard that fetches real-time data and displays forecasts with charts.',
    tech: ['React', 'API', 'Chart.js'],
    link: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <a href={project.link} className="project-link">
              View Project &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
