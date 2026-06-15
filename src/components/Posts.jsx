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

function Posts({ onSelectPost, variant = 'inline' }) {
  const isRail = variant === 'rail'
  const Root = isRail ? 'aside' : 'section'
  const rootClassName = isRail
    ? 'sticky top-[90px] w-[min(25vw,340px)] min-w-[280px] shrink-0 self-start border-l border-app-border pl-9 max-[1180px]:static max-[1180px]:w-full max-[1180px]:min-w-0 max-[1180px]:border-l-0 max-[1180px]:pl-0'
    : 'mb-16'
  const accessibilityProps = isRail
    ? { 'aria-labelledby': 'writing-rail-title' }
    : { 'aria-label': 'Writing' }

  return (
    <Root
      id={isRail ? 'writing-rail' : 'writing'}
      className={rootClassName}
      {...accessibilityProps}
    >
      {isRail && (
        <div className="mb-5">
          <h2 id="writing-rail-title" className="font-title text-base font-[780] text-app-heading">
            Recent Writing
          </h2>
          <p className="mt-1 text-[0.82rem] text-app-text-muted">
            Notes on AI systems, code, and engineering judgment
          </p>
        </div>
      )}

      <div className={isRail ? 'flex flex-col gap-5' : 'flex flex-col'}>
        {posts.map((post) => (
          <button
            type="button"
            key={post.slug}
            className={
              isRail
                ? 'group block w-full cursor-pointer border-0 bg-transparent text-left'
                : 'group w-full cursor-pointer border-0 border-t border-app-border bg-transparent py-5 text-left first:border-t-0 first:pt-0'
            }
            onClick={() => onSelectPost(post)}
          >
            <span className="inline-flex max-w-full items-center gap-2 text-[0.84rem] font-semibold text-app-text-muted">
              <span className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-app-accent text-[0.58rem] font-extrabold tracking-[0.03em] text-app-bg">
                AT
              </span>
              <span>Aakash Tammana</span>
              <span aria-hidden="true">&middot;</span>
              <span>{post.date}</span>
            </span>
            <h3
              className={
                isRail
                  ? 'my-2 font-title text-[1.05rem] font-semibold leading-tight text-app-heading transition-colors group-hover:text-app-accent-2'
                  : 'my-2.5 font-title text-[1.38rem] font-semibold leading-[1.28] text-app-heading transition-colors group-hover:text-app-accent-2'
              }
            >
              {post.title}
            </h3>
            {!isRail && <p className="text-[0.94rem] leading-normal text-app-text-soft">{post.summary}</p>}
            {isRail && post.summary && (
              <span className="block text-[0.78rem] leading-normal text-app-text-muted">{post.summary}</span>
            )}
          </button>
        ))}
      </div>
    </Root>
  )
}

export { posts }
export default Posts
