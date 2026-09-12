import { useEffect, useState, type SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const ArrowUpRight = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <path d="M5 19 19 5M9 5h10v10" />
  </svg>
)

const GitHub = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <path d="M15 22v-3.9c.04-1.01-.3-2-.98-2.76 3.27-.36 6.71-1.61 6.71-7.3a5.73 5.73 0 0 0-1.52-3.98A5.34 5.34 0 0 0 19.07.1S17.86-.29 15 1.62a14.1 14.1 0 0 0-6 0C6.14-.29 4.93.1 4.93.1a5.34 5.34 0 0 0-.14 3.96A5.72 5.72 0 0 0 3.27 8c0 5.68 3.43 6.95 6.7 7.31A3.08 3.08 0 0 0 9.05 17.7V22" />
    <path d="M9.05 19.24c-2.77.85-3.36-1.2-3.36-1.2-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.52 1.02 1.52 1.02.89 1.51 2.32 1.08 2.89.82" />
  </svg>
)

const LinkedIn = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <path d="M6.5 8.5v9M6.5 5.5v.1M10.5 17.5v-5.1c0-2.7 3-2.9 3-2.9s3 0 3 2.9v5.1M10.5 11.4V9.5" />
    <rect x="3" y="3" width="18" height="18" rx="1.5" />
  </svg>
)

const Menu = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

const Close = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <path d="m5 5 14 14M19 5 5 19" />
  </svg>
)

const projects = [
  {
    number: '01',
    name: 'Security Headers Scanner',
    summary: 'A security-first web tool that examines HTTP headers and turns them into a clear, actionable security grade.',
    summaryPt: 'Uma ferramenta de segurança que analisa cabeçalhos HTTP e os transforma em uma classificação clara e acionável.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express'],
    href: 'https://header-scanner-three.vercel.app/',
    repository: 'https://github.com/Nemhh25/header-scanner',
    visual: 'scanner',
  },
  {
    number: '02',
    name: 'Task Manager',
    summary: 'A focused task management platform with secure authentication and ownership-aware access from API to interface.',
    summaryPt: 'Uma plataforma objetiva de tarefas com autenticação segura e controle de acesso por proprietário, da API à interface.',
    tags: ['React', 'PostgreSQL', 'Prisma', 'JWT'],
    href: 'https://task-manager-nelson-2862.vercel.app/',
    visual: 'tasks',
  },
  {
    number: '03',
    name: 'GitHub Analytics',
    summary: 'A responsive dashboard that makes GitHub profile and repository data easier to explore at a glance.',
    summaryPt: 'Um dashboard responsivo que torna os dados de perfil e repositórios do GitHub fáceis de explorar.',
    tags: ['React', 'GitHub API', 'TypeScript'],
    href: 'https://github-dashboard-wine.vercel.app/',
    repository: 'https://github.com/Nemhh25/github-dashboard',
    visual: 'analytics',
  },
]

function ProjectVisual({ kind, pt }: { kind: string; pt: boolean }) {
  if (kind === 'scanner') {
    return <div className="project-visual scanner-visual" aria-hidden="true">
      <div className="browser-dot-row"><i /><i /><i /><span>header-scan</span></div>
      <div className="scan-url"><span>https://</span>example.com <b>Scan</b></div>
      <div className="scan-result"><span>{pt ? 'Nota de segurança' : 'Security grade'}</span><strong>A</strong><small>{pt ? 'Postura de segurança forte' : 'Strong security posture'}</small></div>
      <div className="header-lines"><i /><i /><i /><i /></div>
    </div>
  }
  if (kind === 'tasks') {
    return <div className="project-visual task-visual" aria-hidden="true">
      <div className="task-topline"><span>{pt ? 'Bom dia, Nelson' : 'Good morning, Nelson'}</span><i /></div>
      <div className="task-date">{pt ? 'Terça-feira, 16 de abril' : 'Tuesday, April 16'}</div>
      <div className="task-card complete"><i /> {pt ? 'Finalizar documentação da API' : 'Finish API documentation'} <b>{pt ? 'Feito' : 'Done'}</b></div>
      <div className="task-card"><i /> {pt ? 'Revisar estados do dashboard' : 'Review dashboard states'} <em>{pt ? 'Hoje' : 'Today'}</em></div>
      <div className="task-card"><i /> {pt ? 'Publicar portfólio' : 'Deploy portfolio'} <em>{pt ? 'Amanhã' : 'Tomorrow'}</em></div>
    </div>
  }
  return <div className="project-visual analytics-visual" aria-hidden="true">
    <div className="chart-head"><span>{pt ? 'Atividade de contribuições' : 'Contribution activity'}</span><b>2024</b></div>
    <div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
    <div className="chart-bottom"><span>{pt ? 'Repositórios' : 'Repositories'} <b>28</b></span><span>{pt ? 'Seguidores' : 'Followers'} <b>14</b></span></div>
    <div className="mini-chart"><i /><i /><i /><i /><i /><i /><i /></div>
  </div>
}

function App() {
  const [language, setLanguage] = useState<'en' | 'pt'>('en')
  const pt = language === 'pt'
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnResize = () => { if (window.innerWidth > 720) setMenuOpen(false) }
    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">{pt ? 'Ir para o conteúdo' : 'Skip to content'}</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Nelson Lisboa home">NL<span>.</span></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label={pt ? 'Navegação principal' : 'Main navigation'}>
          {(pt ? [['Sobre', 'about'], ['Projetos', 'work'], ['Skills', 'skills'], ['Contato', 'contact']] : [['About', 'about'], ['Work', 'work'], ['Skills', 'skills'], ['Contact', 'contact']]).map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <a className="header-github" href="https://github.com/Nemhh25" target="_blank" rel="noreferrer"><GitHub /> <span>GitHub</span></a>
        <button className="language-toggle" type="button" onClick={() => setLanguage(pt ? 'en' : 'pt')} aria-label={pt ? 'Mudar para inglês' : 'Switch to Portuguese'}><span className={!pt ? 'active' : ''}>EN</span><i /> <span className={pt ? 'active' : ''}>PT</span></button>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <Close /> : <Menu />}
        </button>
      </header>

      <main id="main" lang={pt ? 'pt-BR' : 'en'}>
        <section className="hero" id="top">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> {pt ? 'Desenvolvedor Full Stack' : 'Full Stack Developer'}</p>
            <h1>{pt ? <>Construindo o lado <em>cuidadoso</em> da web.</> : <>Building the <em>thoughtful</em> side of the web.</>}</h1>
            <p className="hero-intro">{pt ? 'Sou Nelson Lisboa, desenvolvedor com mentalidade de engenharia e uma abordagem orientada à segurança para criar produtos digitais confiáveis.' : 'I’m Nelson Lisboa, a developer with an engineering mindset and a security-aware approach to creating reliable digital products.'}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">{pt ? 'Ver projetos selecionados' : 'View selected work'} <ArrowUpRight /></a>
              <a className="text-link" href="#contact">{pt ? 'Vamos conversar' : 'Let’s work together'} <span>↓</span></a>
            </div>
          </div>
          <div className="hero-side reveal delay-1">
            <div className="hero-line" />
            <p>{pt ? 'Baseado no Brasil' : 'Based in Brazil'}<br />{pt ? 'Aberto a oportunidades' : 'Available for opportunities'}</p>
            <div className="scroll-note"><span>{pt ? 'Role para explorar' : 'Scroll to explore'}</span><i /></div>
          </div>
        </section>

        <section className="intro-section section-pad" id="about">
          <p className="section-label">01 — {pt ? 'Sobre' : 'About'}</p>
          <div className="about-grid">
            <h2>{pt ? <>Eu cuido dos detalhes que fazem o software <em>durar.</em></> : <>I care about the details that make software <em>last.</em></>}</h2>
            <div className="about-copy">
              <p>{pt ? 'Sou desenvolvedor Full Stack e construo aplicações web claras e duráveis. Minha formação em Desenvolvimento de Sistemas e Segurança da Informação orienta meu raciocínio: toda interface merece uma base confiável.' : 'I’m a Full Stack Developer building clear, durable web applications. My background in Systems Development and Information Security informs how I think: every interface deserves a dependable foundation.'}</p>
              <p>{pt ? 'Gosto de transformar requisitos complexos em produtos práticos, especialmente quando um frontend bem pensado encontra APIs seguras e dados bem estruturados.' : 'I enjoy turning complex requirements into practical products, especially where thoughtful frontend work meets secure APIs and well-structured data.'}</p>
              <a className="text-link arrow-link" href="#trajectory">{pt ? 'Mais sobre minha trajetória' : 'More about my path'} <ArrowUpRight /></a>
            </div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading">
            <p className="section-label">02 — {pt ? 'Projetos selecionados' : 'Selected Work'}</p>
            <p>{pt ? 'Projetos com propósito, da primeira interação aos sistemas que os sustentam.' : 'Purposeful projects, from the first interaction to the systems behind them.'}</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-meta"><span>{project.number}</span><span>{pt ? 'Projeto' : 'Case study'}</span></div>
                <ProjectVisual kind={project.visual} pt={pt} />
                <div className="project-content">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{pt ? project.summaryPt : project.summary}</p>
                  </div>
                  <div className="project-footer">
                    <ul aria-label={`${project.name} technologies`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    <div className="project-links">
                      <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight /></a>
                      {project.repository && <a href={project.repository} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`}><GitHub /></a>}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="other-work">
            <div><p className="section-label">{pt ? 'Outro trabalho' : 'Other work'}</p><h3>POP Balloon</h3></div>
            <p>{pt ? 'Um projeto de jogo em Godot com mecânicas originais, identidade visual e uma direção sonora arcade própria.' : 'A playful Godot game project with original mechanics, visual identity and a custom arcade sound direction.'}</p>
            <a href="https://github.com/Nemhh25" target="_blank" rel="noreferrer" aria-label={pt ? 'Explorar POP Balloon no GitHub' : 'Explore POP Balloon on GitHub'}><ArrowUpRight /></a>
          </div>
        </section>

        <section className="skills-section section-pad" id="skills">
          <p className="section-label">03 — {pt ? 'Ferramentas' : 'Toolkit'}</p>
          <div className="skills-heading"><h2>{pt ? <>Tecnologia só é útil quando serve à <em>ideia.</em></> : <>Technology is only useful when it serves the <em>idea.</em></>}</h2><p>{pt ? 'Um conjunto focado de ferramentas para entregar produtos confiáveis em toda a stack.' : 'A focused toolkit for shipping dependable products across the stack.'}</p></div>
          <div className="skills-grid">
            <div><span>Frontend</span><p>React · TypeScript · JavaScript · CSS · HTML</p></div>
            <div><span>Backend</span><p>Node.js · Express · REST APIs · JWT · bcrypt</p></div>
            <div><span>{pt ? 'Dados' : 'Data'}</span><p>PostgreSQL · Prisma · SQL · {pt ? 'Modelagem de dados' : 'Data modeling'}</p></div>
            <div><span>{pt ? 'Prática' : 'Practice'}</span><p>{pt ? 'Segurança Web · Git · Design responsivo · Acessibilidade' : 'Web Security · Git · Responsive design · Accessibility'}</p></div>
          </div>
        </section>

        <section className="trajectory-section section-pad" id="trajectory">
          <p className="section-label">04 — {pt ? 'Trajetória' : 'Trajectory'}</p>
          <div className="trajectory-grid">
            <h2>{pt ? <>Aprendendo o ofício de dentro <em>para fora.</em></> : <>Learning the craft from the inside <em>out.</em></>}</h2>
            <ol className="timeline">
              <li><span>{pt ? 'Agora' : 'Now'}</span><div><h3>{pt ? 'Desenvolvimento Full Stack' : 'Full Stack Development'}</h3><p>{pt ? 'Construindo produtos web com React, TypeScript, Node.js e PostgreSQL.' : 'Building web products with React, TypeScript, Node.js and PostgreSQL.'}</p></div></li>
              <li><span>{pt ? 'Base' : 'Foundation'}</span><div><h3>{pt ? 'Desenvolvimento de Sistemas' : 'Systems Development'}</h3><p>{pt ? 'Formação técnica baseada na construção de software e resolução de problemas.' : 'Technical education grounded in software construction and problem-solving.'}</p></div></li>
              <li><span>{pt ? 'Perspectiva' : 'Perspective'}</span><div><h3>{pt ? 'Segurança da Informação' : 'Information Security'}</h3><p>{pt ? 'Pensamento de segurança aplicado à arquitetura, APIs e decisões do dia a dia.' : 'Security thinking applied to architecture, APIs and everyday implementation choices.'}</p></div></li>
            </ol>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-label">05 — {pt ? 'Contato' : 'Contact'}</p>
          <h2>{pt ? <>Tem algo significativo<br />em mente?</> : <>Have something meaningful<br />in mind?</>}</h2>
          <a className="contact-email" href="https://www.linkedin.com/in/nelsonlisboa/" target="_blank" rel="noreferrer">{pt ? 'Vamos nos conectar' : 'Let’s connect'} <ArrowUpRight /></a>
          <div className="contact-bottom"><span>© {new Date().getFullYear()} Nelson Lisboa</span><div><a href="https://github.com/Nemhh25" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/nelsonlisboa/" target="_blank" rel="noreferrer"><LinkedIn /> LinkedIn</a></div></div>
        </section>
      </main>
    </>
  )
}

export default App
