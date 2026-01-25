import React from "react";
import "./App.css";

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

  const projects = [
    {
      title: "My Portfolio",
      description: "A live React site deployed on Netlify.",
    },
    {
      title: "Meta Front-End Course",
      description: "Projects coming soon from my Coursera path.",
    },
    {
      title: "New Wave City",
      description: "An event landing page featuring custom CSS grid.",
    },
  ];

  return (
    <div className="container">
      <header style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1>John Oyler</h1>
        <p>Front-End Developer in Training</p>
      </header>

      <section>
        <h2 style={{ textAlign: "center" }}>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#" style={{ color: "#0070f3", textDecoration: "none" }}>
                View Project →
              </a>
            </div>
          ))}
        </div>{" "}
        {/* This was the missing closing tag! */}
      </section>

      <footer style={{ marginTop: "80px", textAlign: "center", opacity: 0.6 }}>
        <p>© 2026 John Oyler | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
