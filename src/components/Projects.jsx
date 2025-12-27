function Projects() {
  const projects = [
    {
      title: "Task Tracker – Micro SaaS",
      description:
        "Lightweight task management system with prioritization, PDF reporting, and CI/CD deployment.",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Actions"],
      link: "#",
    },
    {
      title: "Student360 – AI Behavior Detection System",
      description:
        "AI-based system for detecting and analyzing student behavior using computer vision and academic data.",
      tech: ["Python", "YOLO", "Computer Vision"],
      link: "#",
    },
    {
      title: "Knowly – Mobile Learning App",
      description:
        "Android learning application aligned with UN SDG 4, focused on improving learning accessibility.",
      tech: ["Java", "Firebase", "Android"],
      link: "#",
    },
    {
      title: "Toy-Selling E-Commerce Website",
      description:
        "Full-stack e-commerce platform with authentication, cart, checkout, and admin management.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Selected work demonstrating practical development experience</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Details →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
