import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import AgentDiagram from './AgentDiagrams'
import MermaidBlock from './MermaidBlock'

function PostView({ post, onBack }) {
  return (
    <article className="mx-auto w-[min(100%,700px)]">
      <button
        className="mb-8 inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 font-mono text-[0.76rem] font-bold uppercase tracking-[0.06em] text-app-accent-2 transition-colors hover:text-app-heading"
        onClick={onBack}
      >
        <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
        Back to posts
      </button>
      <header className="mb-9">
        <span className="font-mono text-[0.76rem] font-bold uppercase tracking-[0.08em] text-app-accent-2">
          {post.date}
        </span>
        <h1 className="my-3 font-title text-[clamp(2.35rem,5vw,3.25rem)] font-[780] leading-tight text-app-heading">
          {post.title}
        </h1>
        {post.summary && (
          <p className="max-w-[40rem] text-[1.28rem] leading-snug text-app-accent">
            {post.summary}
          </p>
        )}
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
            img({ src = '', alt = '', node, ...props }) {
              if (
                src === '/diagrams/multi-agent-escalation-ladder.svg' ||
                src === '/diagrams/multi-agent-canonical-patterns.svg'
              ) {
                return <AgentDiagram src={src} />
              }

              return <img src={src} alt={alt} {...props} />
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
