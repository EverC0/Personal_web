"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Project, projectCategories, projects } from "@/lib/portfolio-data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card reveal" style={{ animationDelay: `${index * 80}ms` }}>
      <div className="project-visual" aria-hidden={!project.image}>
        {project.image ? (
          <Image src={project.image} alt="" fill sizes="(max-width: 900px) 100vw, 45vw" />
        ) : (
          <div className="private-visual">
            <span>Project preview</span>
          </div>
        )}
      </div>
      <div className="project-body">
        <div className="project-topline">
          <span>{project.eyebrow}</span>
          {project.private ? <em>Case study available in conversation</em> : null}
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <p className="impact">{project.impact}</p>
        <div className="chips" aria-label={`${project.title} tech stack`}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="project-actions">
          {project.links.length > 0 ? (
            project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))
          ) : (
            <span className="muted-link">Private repository</span>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const filteredProjects = useMemo(() => {
    if (activeCategory === "Featured") {
      return projects.filter((project) => project.title.includes("Pantry") || project.title.includes("MyFlash"));
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <span className="eyebrow">Selected work</span>
        <h2>Projects that show product sense, code range, and momentum.</h2>
        <p>
          I tightened the descriptions so each project reads like an engineering story: what it solves,
          what it uses, and why it matters.
        </p>
      </div>

      <div className="filter-bar" aria-label="Filter projects by category">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
