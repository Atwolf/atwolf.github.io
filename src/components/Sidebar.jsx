import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCodeBranch,
  faEnvelope,
  faHouse,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const navItems = [
  {
    id: 'home',
    label: 'Home',
    icon: faHouse,
  },
  {
    href: 'mailto:aakashtammana@gmail.com',
    label: 'Contact',
    icon: faEnvelope,
  },
]

const externalLinks = [
  {
    href: 'https://github.com/Atwolf',
    label: 'GitHub',
    icon: faGithub,
  },
  {
    href: 'https://github.com/Atwolf/atwolf.github.io',
    label: 'Source',
    icon: faCodeBranch,
  },
  {
    href: 'mailto:aakashtammana@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    href: 'https://www.linkedin.com/in/aakashtammana/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
]

const currentWork = [
  'Publishing a practical breakdown of multi-agent patterns.',
  'Refining the post workflow, diagrams, and editorial voice.',
]

function Sidebar({ onNavigate }) {
  return (
    <aside className="sticky top-[var(--header-height)] min-h-[calc(100vh-var(--header-height))] flex-[0_0_clamp(13.5rem,16vw,15rem)] self-start border-r border-app-border px-7 py-11 pl-10 max-[880px]:hidden">
      <div className="sticky top-[calc(var(--header-height)+24px)] flex min-h-[calc(100vh-var(--header-height)-5.5rem)] flex-col">
        <nav className="flex flex-col gap-0.5" aria-label="Section navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href || `#${item.id}`}
              onClick={item.id ? onNavigate(item.id) : undefined}
              className="flex items-center gap-3 py-2 text-[0.92rem] font-semibold text-app-nav transition-colors hover:text-app-accent-2"
            >
              <FontAwesomeIcon icon={item.icon} className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <section className="mt-7 border-t border-app-border pt-5" aria-labelledby="currently-working-title">
          <h2 id="currently-working-title" className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-app-text-muted">
            Currently
          </h2>
          <div className="mt-3 space-y-2.5">
            {currentWork.map((item) => (
              <p key={item} className="text-[0.82rem] font-medium leading-snug text-app-text-soft">
                {item}
              </p>
            ))}
          </div>
        </section>

        <div className="mt-auto border-t border-app-border pt-5">
          <div className="grid grid-cols-4 gap-1.5" aria-label="External links">
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border border-app-border bg-app-panel/60 text-[0.84rem] text-app-accent transition-colors hover:border-app-accent-2/40 hover:bg-app-accent-soft hover:text-app-accent-2"
                aria-label={link.label}
                title={link.label}
              >
                <FontAwesomeIcon icon={link.icon} aria-hidden="true" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
