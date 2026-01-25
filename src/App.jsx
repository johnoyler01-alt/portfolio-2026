import React from "react";

// Basic CSS-in-JS for quick styling
const styles = {
  container: {
    fontSans: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
  },
  header: {
    textAlign: "center",
    padding: "50px 0",
    borderBottom: "1px solid #eee",
  },
  section: { padding: "40px 0" },
  projectCard: {
    border: "1px solid #ddddddff",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "10px",
  },
};

function App() {
  const projects = [
    {
      title: "My First React App",
      description: "Learning the basics of components.",
    },
    {
      title: "Future Project",
      description: "Coming soon to a GitHub near you!",
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Hi, I'm John Oyler 👋</h1>
        <p>Aspiring Developer & Tech Enthusiast</p>
      </header>

      <section style={styles.section}>
        <h2>My Projects</h2>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      <footer style={styles.header}>
        <p>Let's connect!</p>
        <a href="https://github.com/your-username">GitHub</a> |{" "}
        <a href="mailto:email@example.com">Email</a>
      </footer>
    </div>
  );
}

export default App;
