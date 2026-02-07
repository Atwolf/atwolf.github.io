const posts = [
  {
    id: 1,
    title: 'Getting Started with React',
    date: '2026-01-15',
    summary:
      'A beginner-friendly guide to building your first React application from scratch.',
  },
  {
    id: 2,
    title: 'Understanding JavaScript Closures',
    date: '2026-01-28',
    summary:
      'Deep dive into closures and how they work under the hood in JavaScript.',
  },
  {
    id: 3,
    title: 'CSS Grid vs Flexbox',
    date: '2026-02-05',
    summary:
      'When to use CSS Grid and when Flexbox is the better choice for your layout.',
  },
]

function Posts() {
  return (
    <section id="posts" className="section posts">
      <h2>Posts</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <article key={post.id} className="post-card">
            <span className="post-date">{post.date}</span>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Posts
