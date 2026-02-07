import parseFrontmatter from '../utils/parseFrontmatter'

const postModules = import.meta.glob('/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const posts = Object.entries(postModules)
  .map(([path, raw]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '')
    const { meta, content } = parseFrontmatter(raw)
    return { slug, content, ...meta }
  })
  .sort((a, b) => (b.date || '').localeCompare(a.date || ''))

function Posts({ onSelectPost }) {
  return (
    <section id="posts" className="section">
      <h2>Posts</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="post-card"
            onClick={() => onSelectPost(post)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onSelectPost(post)
              }
            }}
          >
            <span className="post-date">{post.date}</span>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export { posts }
export default Posts
