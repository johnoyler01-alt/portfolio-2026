import React from "react";
import "./App.css";
// 1. This is the new line that brings your screenshot into the code
import calculatorImg from "./assets/calculator-ss.png";

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "React Native", "Git"];

  const projects = [
    {
      title: "My Portfolio",
      description: "A live React site deployed on Netlify.",
      link: "https://john-oyler-portfolio.netlify.app",
    },
    {
      title: "Neon Calculator",
      description:
        "A sleek, dark-themed mobile app built with React Native and Expo.",
      // Use your new custom Netlify link here:
      link: "https://john-oyler-calculator.netlify.app",
      image: calculatorImg,
    },
    {
      title: "Meta Front-End Course",
      description: "Projects coming soon from my Coursera path.",
      link: "https://github.com/johnoyler01-alt",
    },
    {
      title: "New Wave City",
      description:
        "A responsive landing page built with Vanilla JS and CSS Grid.",
      link: "https://john-oyler-new-wave-city.netlify.app",
    },
  ];

  return (
    <div className="container">
      <header style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1>John Oyler</h1>
        <p>Front-End Developer in Training</p>
        <a
          href="/john_oyler_front_end_resume.pdf"
          download
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Download Resume
        </a>
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
              {/* 3. This new block displays the image if the project has one */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "15px",
                    border: "1px solid #333",
                  }}
                />
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0070f3", textDecoration: "none" }}
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: "80px", textAlign: "center", opacity: 0.6 }}>
        <p>© 2026 John Oyler | Built with React</p>
        <p>Last Updated: Jan 2026</p>
      </footer>
    </div>
  );
}

export default App;
