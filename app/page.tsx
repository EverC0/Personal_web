import { ProjectGallery } from "@/components/project-gallery";
import { experience, profile, skillGroups, stats } from "@/lib/portfolio-data";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ever Campos home">
          <span>EC</span>
          Ever Campos
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="hero section">
        <div className="hero-copy reveal">
          <span className="eyebrow">{profile.role} / {profile.location}</span>
          <h1>{profile.headline}</h1>
          <p>
            I’m a software developer working with TypeScript, Next.js, React, and Node. I enjoy
            building things end to end, working through complex problems, and getting a feature to the
            point where it feels solid, useful, and ready for people to use.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Explore projects
            </a>
            <a className="button secondary" href={profile.resume} target="_blank" rel="noreferrer">
              View resume
            </a>
          </div>
        </div>

        <aside className="hero-card reveal" style={{ animationDelay: "120ms" }}>
          <div className="availability-card">
            <span>Full-stack focus</span>
            <strong>Interfaces, APIs, and product workflows</strong>
            <p>Experience across responsive UI, APIs, authentication, and data-backed features.</p>
          </div>
        </aside>
      </section>

      <section className="stats-strip" aria-label="Portfolio highlights">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section id="story" className="section story-section">
        <div className="section-heading compact">
          <span className="eyebrow">About</span>
          <h2>A developer who likes making complicated systems easier to use.</h2>
        </div>
        <div className="story-panel reveal">
          <p>
            My work sits between the interface people click and the systems that make it reliable:
            auth, APIs, database-backed state, and AI-assisted features. I care about the small details
            that make a tool feel understandable, especially when the workflow itself is complex.
          </p>
          <p>
            I started by building full-stack projects with React, Next.js, Firebase, Flask, Node, and Python.
            Now I’m applying that foundation in production codebases, where clear communication, maintainable
            implementation, and steady debugging matter just as much as the first version of a feature.
          </p>
        </div>
      </section>

      <ProjectGallery />

      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <span className="eyebrow">Toolkit</span>
          <h2>Tools I use to build, ship, and keep improving.</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card reveal" key={group.title} style={{ animationDelay: `${index * 70}ms` }}>
              <h3>{group.title}</h3>
              <div className="chips">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section timeline-section">
        <div className="section-heading compact">
          <span className="eyebrow">Experience</span>
          <h2>What I want recruiters to see quickly.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.title} className="timeline-item reveal">
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div>
          <span className="eyebrow">Next step</span>
          <h2>Let’s build something useful.</h2>
          <p>
            I’m looking for software development roles where I can contribute to frontend, backend, AI-enabled,
            or data-informed products. If the work helps people move faster or think clearer, I’m interested.
          </p>
        </div>
        <div className="contact-card">
          <a href={`mailto:${profile.email}`}>Email me</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <details className="github-menu">
            <summary>GitHub</summary>
            <div>
              {profile.githubProfiles.map((githubProfile) => (
                <a key={githubProfile.href} href={githubProfile.href} target="_blank" rel="noreferrer">
                  {githubProfile.label}
                </a>
              ))}
            </div>
          </details>
          <a href={profile.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </section>
    </main>
  );
}
