const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'Git', 'CSS']

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-sticky">
        <div className="sidebar-header">
          <div className="avatar">A</div>
          <h1>Atwolf</h1>
          <p className="tagline">Developer &amp; Creator</p>
        </div>

        <nav className="nav">
          <a href="#posts">Posts</a>
          <a href="#projects">Projects</a>
        </nav>

        <div className="about">
          <h2>About</h2>
          <p>
            Passionate developer who loves building things for the web. I enjoy
            working with modern technologies and exploring new ideas.
          </p>
          <p>
            When I&apos;m not coding, you can find me reading, exploring open
            source projects, or learning something new.
          </p>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <div className="skill-tags">
            {skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
