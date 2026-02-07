function About() {
  return (
    <section id="about" className="section about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          Welcome to my profile! I'm a passionate developer who loves building
          things for the web. I enjoy working with modern technologies and
          exploring new ideas.
        </p>
        <p>
          When I'm not coding, you can find me reading, exploring open source
          projects, or learning something new.
        </p>
        <div className="skills">
          <h3>Skills</h3>
          <div className="skill-tags">
            <span className="tag">JavaScript</span>
            <span className="tag">React</span>
            <span className="tag">Node.js</span>
            <span className="tag">Python</span>
            <span className="tag">Git</span>
            <span className="tag">CSS</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
