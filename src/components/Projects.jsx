import taskTrackerImg from "../assets/projects/task-tracker.png";
import knowlyImg from "../assets/projects/knowly.png";
import student360Img from "../assets/projects/student360.png";
import ecmsImg from "../assets/projects/ecms.png";
import bakeryImg from "../assets/projects/bakery.png";

function Projects() {
  const projects = [
    {
      title: "Task Tracker – Micro SaaS",
      description:
        "Lightweight task management system with prioritization, PDF reporting, and CI/CD deployment.",
      image: taskTrackerImg,
      tech: ["HTML", "CSS", "JavaScript", "GitHub Actions"],
      github: "https://github.com/SubodhaB/task-tracker",
    },
    {
      title: "Student360 – AI Behavior Detection System",
      description:
        "AI-based system for detecting and analyzing student behavior using computer vision and academic data.",
      image: student360Img,
      tech: ["Python", "YOLO", "Computer Vision"],
      github: "https://github.com/SubodhaB/Student360.git",
    },
    {
      title: "Knowly – Mobile Learning App",
      description:
        "Android learning application aligned with UN SDG 4, focused on improving learning accessibility.",
      image: knowlyImg,
      tech: ["Java", "Firebase", "Android"],
      github: "https://github.com/Dasunwee/Knowly.git",
    },
    {
      title: "Toy-Selling E-Commerce Website",
      description:
        "Full-stack e-commerce platform with authentication, cart, checkout, and admin management.",
      image: ecmsImg,
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/SubodhaB/E-commerce-Web-Site.git",
    },
     {
      title: "Bakery Management System",
      description:
        "Bake Zone is a Java-based bakery management system that streamlines daily operations including secure login, inventory management, pricing updates, and automated billing through an easy-to-use desktop application.",
      image: bakeryImg,
      tech: ["Java", "NetBeans", "Desktop App"],
      github: "https://github.com/SubodhaB/Bakery-management-system.git",
    },
  ];

    return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Selected projects demonstrating my practical experience</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((techItem, i) => (
                  <span key={i} className="tech-badge">
                    {techItem}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

