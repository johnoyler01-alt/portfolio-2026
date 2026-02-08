import React from "react";
import "./App.css";
import calculatorImg from "./assets/calculator-ss.png";
import newWaveImg from "./assets/new-wave-ss.png";
import Success from "./Success";

function App() {
  // 1. Only show the success page if the URL actually contains "/success"
  if (window.location.pathname.includes("/success")) {
    return <Success />;
  }

  // 2. Otherwise, load the full portfolio
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "Git",
    "Netlify",
    "Vite",
    "Gemini AI API", // New Skill
    "CI/CD", // New Skill
  ];

  const projects = [
    {
      title: "AI Writing Assistant",
      description:
        "A professional writing tool powered by Gemini 2.5 Flash. Features secure CI/CD deployment and real-time text optimization.",
      link: "https://ai-writing-assistant-final.netlify.app", // Use the FULL https:// address
      isNew: true,
    },
    {
      title: "My Portfolio",
      description:
        "A live React site showcasing my journey, built with Vite and hosted on Netlify.",
      link: "https://john-oyler-portfolio.netlify.app",
    },
    {
      title: "Neon Calculator",
      description:
        "A sleek, dark-themed mobile app built with React Native and Expo, deployed for web use.",
      link: "https://john-oyler-calculator.netlify.app",
      image: calculatorImg,
    },
    {
      title: "New Wave City",
      description:
        "A high-fidelity landing page exploring responsive design and CSS Grid layouts using Vanilla JavaScript.",
      link: "https://john-oyler-new-wave-city.netlify.app",
      image: newWaveImg,
    },
    {
      title: "Meta Front-End Course",
      description:
        "A collection of advanced projects and certifications from my professional Coursera path.",
      link: "https://github.com/johnoyler01-alt",
    },
  ];

  return (
    <div className="container">
      <header style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1>John Oyler</h1>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 20px auto",
            color: "#666",
          }}
        >
          I am a passionate Front-End Developer dedicated to building clean,
          user-friendly web applications. With a strong foundation in React and
          modern CSS, I love turning complex problems into simple, beautiful
          digital experiences.
        </p>
        <p style={{ fontSize: "1.2rem", color: "#4f46e5", fontWeight: "600" }}>
          Front-End Developer
        </p>
        <a
          href="/john_oyler_front_end_resume.pdf"
          download
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4f46e5",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Download Resume
        </a>
      </header>

      {/* ABOUT SECTION */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ textAlign: "center" }}>About Me</h2>
        <p
          style={{
            lineHeight: "1.6",
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          I am a Front-End Developer with a passion for building clean,
          interactive web applications. I enjoy exploring the intersection of
          traditional web development and AI, recently focusing on integrating
          LLMs like Gemini into user-friendly React interfaces. I'm committed to
          writing scalable code and learning the modern practices that keep the
          web moving.
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ textAlign: "center" }}>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ textAlign: "center" }}>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={
                project.isNew
                  ? { position: "relative", border: "2px solid #4f46e5" }
                  : {}
              }
            >
              {/* Conditional Badge for AI Project */}
              {project.isNew && (
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: "#4f46e5",
                    color: "white",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "0.7rem",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  NEW / AI
                </span>
              )}

              {project.image && <img src={project.image} alt={project.title} />}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#4f46e5",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{
          padding: "40px 20px",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
          marginTop: "60px",
        }}
      >
        <h2>Get In Touch</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success.html"
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              minHeight: "100px",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Send Message
          </button>
        </form>
      </section>

      <footer
        style={{
          marginTop: "80px",
          paddingBottom: "40px",
          textAlign: "center",
          opacity: 0.6,
        }}
      >
        <p>© 2026 John Oyler | Built with React & Vite</p>
        <p>Deployed via Netlify</p>
      </footer>
    </div>
  );
}

export default App;
