import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import MermaidBlock from './MermaidBlock'

function PostView({ post, onBack }) {
  return (
    <article className="post-view">
      <button className="back-link" onClick={onBack}>
        &larr; Back to posts
      </button>
      <header className="post-view-header">
        <span className="post-date">{post.date}</span>
        <h1>{post.title}</h1>
        {post.summary && <p className="post-view-summary">{post.summary}</p>}
      </header>
      <div className="prose">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ className, children, ...props }) {
              const lang = /language-(\w+)/.exec(className || '')
              if (lang && lang[1] === 'mermaid') {
                return (
                  <MermaidBlock
                    code={String(children).replace(/\n$/, '')}
                  />
                )
              }
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  )
}

export default PostView
