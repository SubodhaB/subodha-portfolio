function Skills() {
  const skillGroups = [
    {
      title: "Networking & Systems",
      skills: [
        "LAN / WAN",
        "Network Troubleshooting",
        "Server & Firewall Management",
        "System Support",
      ],
    },
    {
      title: "Programming & Databases",
      skills: [
        "JavaScript",
        "Python",
        "Java",
        "PHP",
        "HTML & CSS",
        "MySQL",
      ],
    },
    {
      title: "DevOps & Tools",
      skills: ["GitHub", "CI/CD Pipelines", "Version Control"],
    },
    {
      title: "Software & Platforms",
      skills: ["Windows", "Linux (Basic)", "Adobe Photoshop", "MS Office"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2>Skills</h2>
        <p>Technical competencies across development, networking, and systems</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div key={index} className="skill-card">
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
