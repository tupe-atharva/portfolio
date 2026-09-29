import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  profile, about, education, skills, experience, projects, leadership, certifications,
} from './data.js'

/* ---------- helpers ---------- */

function readTheme() {
  try { return localStorage.getItem('theme') } catch { return null }
}
function saveTheme(t) {
  try { localStorage.setItem('theme', t) } catch { /* storage unavailable */ }
}

function useTheme() {
  const [theme, setTheme] = useState(() => readTheme() || 'system')
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'system') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', theme)
  }, [theme])
  const toggle = useCallback(() => {
    setTheme((t) => {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const isDark = t === 'dark' || (t === 'system' && systemDark)
      const next = isDark ? 'light' : 'dark'
      saveTheme(next)
      return next
    })
  }, [])
  return toggle
}

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

const Chevron = () => (
  <svg className="chev" viewBox="0 0 8 14" aria-hidden="true"><path d="M1 1l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
)
const Arrow = () => (
  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 9l6-6M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

const YEAR = new Date().getFullYear()

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
]

/* ---------- nav ---------- */

function Nav({ onOpenPalette, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)
  const go = (id) => { setOpen(false); scrollToId(id) }
  return (
    <header className={`nav ${open ? 'is-open' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="brand" onClick={(e) => { e.preventDefault(); go('top') }}>Atharva Tupe</a>
        <nav className="nav-links" aria-label="Sections">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={(e) => { e.preventDefault(); go(s.id) }}>{s.label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="kbd-btn" onClick={onOpenPalette} aria-label="Open command menu">
            <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            <kbd>{isMac ? '⌘' : 'Ctrl'} K</kbd>
          </button>
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle light and dark mode">
            <svg className="sun" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="3.6" fill="currentColor" /><g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M10 1.8v2M10 16.2v2M1.8 10h2M16.2 10h2M4.2 4.2l1.4 1.4M14.4 14.4l1.4 1.4M4.2 15.8l1.4-1.4M14.4 5.6l1.4-1.4" /></g></svg>
            <svg className="moon" viewBox="0 0 20 20" aria-hidden="true"><path d="M16.5 12.2A7 7 0 017.8 3.5a7 7 0 108.7 8.7z" fill="currentColor" /></svg>
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Menu">
            <span /><span />
          </button>
        </div>
      </div>
      <div className="nav-sheet" hidden={!open}>
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} onClick={(e) => { e.preventDefault(); go(s.id) }}>{s.label}</a>
        ))}
      </div>
    </header>
  )
}

/* ---------- hero ---------- */

const BARS = 48
function Waveform() {
  // A stylised call waveform: speech, a short silence, the endpoint marker, then the agent replies.
  const bars = useMemo(() => Array.from({ length: BARS }, (_, i) => {
    const speech = i < 20
    const gap = i >= 20 && i < 24
    const base = speech ? 0.35 + 0.6 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.45))
      : gap ? 0.06 : 0.3 + 0.55 * Math.abs(Math.sin(i * 1.1 + 2) * Math.cos(i * 0.3))
    return { h: Math.max(0.06, base), who: speech ? 'caller' : gap ? 'gap' : 'agent', d: (i % 7) * 0.12 }
  }), [])
  return (
    <div className="wave" aria-hidden="true">
      <div className="wave-bars">
        {bars.map((b, i) => (
          <span key={i} className={`bar ${b.who}`} style={{ '--h': b.h, '--d': `${b.d}s` }} />
        ))}
        <span className="endpoint" style={{ left: `${(20 / BARS) * 100}%` }}>
          <em>endpoint · 0.05s</em>
        </span>
      </div>
      <div className="wave-legend">
        <span><i className="dot caller" />Caller</span>
        <span><i className="dot agent" />Voice agent</span>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow">{profile.role}</p>
      <h1 className="hero-name">{profile.name}.</h1>
      <p className="hero-headline">{profile.headline}</p>
      <p className="hero-intro">{profile.intro}</p>
      <div className="hero-ctas">
        <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noreferrer">Download résumé</a>
        <a className="link" href="#contact" onClick={(e) => { e.preventDefault(); scrollToId('contact') }}>Get in touch <Chevron /></a>
      </div>
      <p className="hero-status"><span className="live" />{profile.availability}</p>

      <div className="hero-tile">
        <div className="hero-tile-copy">
          <p className="eyebrow small">Now shipping</p>
          <h2>Real-time voice agents at EasyBee AI.</h2>
          <p>A native speech-to-speech pipeline on LiveKit, Deepgram and LangGraph, taking live calls for self-storage businesses in the US and UK.</p>
          <a className="link" href="#experience" onClick={(e) => { e.preventDefault(); scrollToId('experience') }}>See the work <Chevron /></a>
        </div>
        <Waveform />
      </div>
    </section>
  )
}

/* ---------- section header ---------- */

function SectionHead({ title, tail, id }) {
  return (
    <h2 className="section-title" id={id ? `${id}-title` : undefined}>
      {title} <span>{tail}</span>
    </h2>
  )
}

/* ---------- about ---------- */

function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <SectionHead id="about" title="About." tail="Research to production." />
        <div className="about-grid">
          <div className="about-copy">
            <p className="lead">{about.lead}</p>
            <p>{about.body}</p>
          </div>
          <div className="edu">
            {education.map((e) => (
              <article className="edu-card" key={e.school}>
                <p className="edu-period">{e.period}</p>
                <h3>{e.school}</h3>
                <p className="edu-degree">{e.degree}</p>
                <p className="edu-detail">{e.detail}</p>
                {e.coursework && <p className="edu-course">{e.coursework}</p>}
              </article>
            ))}
          </div>
        </div>

        <div className="toolkit">
          {skills.map((s) => (
            <div className="tool-group" key={s.group}>
              <h3>{s.group}</h3>
              <ul className="chips">
                {s.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- experience ---------- */

function Experience() {
  return (
    <section className="section alt" id="experience" aria-labelledby="experience-title">
      <div className="wrap">
        <SectionHead id="experience" title="Experience." tail="Built for live traffic." />
        <div className="xp-list">
          {experience.map((x) => (
            <article className="xp" key={x.company}>
              <header className="xp-head">
                <div>
                  <p className="xp-dates">
                    {x.start} – {x.end}
                    {x.current && <span className="pill">Current</span>}
                  </p>
                  <h3>{x.company}</h3>
                  <p className="xp-role">{x.role} · {x.location}</p>
                </div>
                <div className="xp-stat">
                  <strong>{x.highlight.value}</strong>
                  <span>{x.highlight.label}</span>
                </div>
              </header>
              <ul className="xp-bullets">
                {x.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <ul className="tags">
                {x.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- work + modal ---------- */

function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)
  useEffect(() => {
    if (!project) return
    const prev = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prev?.focus?.()
    }
  }, [project, onClose])
  if (!project) return null
  return (
    <div className="overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
        <button ref={closeRef} className="sheet-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>
        <p className="eyebrow small">{project.kind}</p>
        <h2 id="sheet-title">{project.title}</h2>
        <p className="sheet-blurb">{project.blurb}</p>

        <div className="sheet-block">
          <h3>The problem</h3>
          <p>{project.problem}</p>
        </div>
        <div className="sheet-block">
          <h3>How it’s built</h3>
          <ul className="checks">
            {project.approach.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
        {project.outcome && (
          <div className="sheet-block">
            <h3>Outcome</h3>
            <p>{project.outcome}</p>
          </div>
        )}
        <div className="sheet-block">
          <h3>Stack</h3>
          <ul className="tags">{project.stack.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
        <div className="sheet-links">
          {project.links.map((l, i) => (
            <a key={l.href} className={i === 0 ? 'btn btn-primary' : 'link'} href={l.href} target="_blank" rel="noreferrer">
              {l.label} {i === 0 ? null : <Arrow />}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function Work({ onOpen }) {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <SectionHead id="work" title="Selected work." tail="Tap a project to go deeper." />
        <div className="tiles">
          {projects.map((p) => (
            <button className={`tile tile-${p.id}`} key={p.id} onClick={() => onOpen(p.id)} aria-haspopup="dialog">
              <p className="eyebrow small">{p.kind}</p>
              <h3>{p.title}</h3>
              <p className="tile-blurb">{p.blurb}</p>
              <ul className="tile-stack">
                {p.stack.slice(0, 5).map((s) => <li key={s}>{s}</li>)}
              </ul>
              <span className="tile-plus" aria-hidden="true">
                <svg viewBox="0 0 14 14"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- leadership ---------- */

function Leadership() {
  return (
    <section className="section alt" id="leadership" aria-labelledby="leadership-title">
      <div className="wrap">
        <SectionHead id="leadership" title="Leadership." tail="Beyond the codebase." />
        <div className="lead-grid">
          {leadership.map((l) => (
            <article className="lead-card" key={l.org}>
              <p className="eyebrow small">{l.title}</p>
              <h3>{l.org}</h3>
              <p>{l.text}</p>
            </article>
          ))}
        </div>
        <h3 className="sub-title">Certifications</h3>
        <ul className="certs">
          {certifications.map((c) => (
            <li key={c.name}>
              <span className="cert-seal" aria-hidden="true">
                <svg viewBox="0 0 20 20"><path d="M5 10.5l3.2 3L15 6.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <div>
                <strong>{c.name}</strong>
                <span>{c.level} · {c.issuer}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- contact ---------- */

function Contact() {
  const [copied, setCopied] = useState(false)
  const emailRef = useRef(null)
  const onCopy = async () => {
    const ok = await copyText(profile.email)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } else if (emailRef.current) {
      const r = document.createRange()
      r.selectNodeContents(emailRef.current)
      const sel = window.getSelection()
      sel.removeAllRanges(); sel.addRange(r)
    }
  }
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap narrow">
        <h2 className="contact-title" id="contact-title">Let’s build something.</h2>
        <p className="contact-sub">Open to Software, AI and ML engineering roles, especially where latency and reliability matter.</p>
        <div className="email-row">
          <span className="email" ref={emailRef}>{profile.email}</span>
          <button className="btn btn-primary" onClick={onCopy}>{copied ? 'Copied' : 'Copy email'}</button>
        </div>
        <div className="contact-links">
          <a className="link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a className="link" href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a className="link" href={profile.resume} target="_blank" rel="noreferrer">Résumé (PDF) <Arrow /></a>
        </div>
      </div>
    </section>
  )
}

/* ---------- command palette ---------- */

function CommandPalette({ onClose, onToggleTheme, onOpenProject }) {
  const [q, setQ] = useState('')
  const [idx, setIdx] = useState(0)
  const inputRef = useRef(null)
  const [toast, setToast] = useState('')

  const commands = useMemo(() => [
    ...SECTIONS.map((s) => ({ group: 'Go to', label: s.label, run: () => scrollToId(s.id) })),
    ...projects.map((p) => ({ group: 'Projects', label: `Open ${p.title}`, run: () => onOpenProject(p.id) })),
    { group: 'Links', label: 'Open LinkedIn', run: () => window.open(profile.linkedin, '_blank', 'noopener') },
    { group: 'Links', label: 'Open GitHub', run: () => window.open(profile.github, '_blank', 'noopener') },
    { group: 'Links', label: 'Open résumé (PDF)', run: () => window.open(profile.resume, '_blank', 'noopener') },
    { group: 'Actions', label: 'Copy email address', keep: true, run: async () => { const ok = await copyText(profile.email); setToast(ok ? 'Email copied' : profile.email) } },
    { group: 'Actions', label: 'Toggle light / dark mode', run: onToggleTheme },
  ], [onToggleTheme, onOpenProject])

  const results = useMemo(() => {
    const s = q.trim().toLowerCase()
    return s ? commands.filter((c) => (c.label + ' ' + c.group).toLowerCase().includes(s)) : commands
  }, [q, commands])

  useEffect(() => { inputRef.current?.focus() }, [])

  const run = (c) => {
    if (!c) return
    if (c.keep) { c.run(); return }
    onClose()
    setTimeout(c.run, 10)
  }
  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((i) => Math.min(i + 1, results.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)) }
    else if (e.key === 'Enter') { e.preventDefault(); run(results[idx]) }
    else if (e.key === 'Escape') { e.preventDefault(); onClose() }
  }

  let lastGroup = null
  return (
    <div className="overlay palette-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Command menu">
        <div className="palette-search">
          <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
          <input
            id="palette-input"
            ref={inputRef}
            value={q}
            onChange={(e) => { setQ(e.target.value); setIdx(0) }}
            onKeyDown={onKey}
            placeholder="Search sections, projects, links"
            aria-label="Search commands"
            autoComplete="off"
          />
          <kbd>esc</kbd>
        </div>
        <ul className="palette-list" role="listbox">
          {results.length === 0 && <li className="palette-empty">No matches for “{q}”</li>}
          {results.map((c, i) => {
            const head = c.group !== lastGroup ? c.group : null
            lastGroup = c.group
            return (
              <li key={c.group + c.label} role="presentation">
                {head && <p className="palette-group">{head}</p>}
                <button
                  role="option"
                  aria-selected={i === idx}
                  className={i === idx ? 'is-active' : ''}
                  onMouseEnter={() => setIdx(i)}
                  onClick={() => run(c)}
                >
                  {c.label}
                  <span aria-hidden="true">↵</span>
                </button>
              </li>
            )
          })}
        </ul>
        {toast && <p className="palette-toast" role="status">{toast}</p>}
      </div>
    </div>
  )
}

/* ---------- app ---------- */

export default function App() {
  const toggleTheme = useTheme()
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [projectId, setProjectId] = useState(null)
  const project = projects.find((p) => p.id === projectId) || null
  const closeProject = useCallback(() => setProjectId(null), [])
  const openProject = useCallback((id) => setProjectId(id), [])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <Nav onOpenPalette={() => setPaletteOpen(true)} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work onOpen={openProject} />
        <Leadership />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap footer-inner">
          <p>© {YEAR} {profile.name}. Built with React.</p>
          <p>{profile.location}</p>
        </div>
      </footer>
      <ProjectModal project={project} onClose={closeProject} />
      {paletteOpen && <CommandPalette
        onClose={() => setPaletteOpen(false)}
        onToggleTheme={toggleTheme}
        onOpenProject={openProject}
      />}
    </>
  )
}
