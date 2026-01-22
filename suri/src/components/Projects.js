import React from 'react';

const Projects = () => {
  const projects = [
    { name: "Portfolio Website", description: "A personal portfolio built with React." },
    { name: "E-commerce App", description: "A simple online store with cart functionality." },
    { name: "Todo App", description: "Task management app using React and local storage." }
  ];

  return (
    <section className="projects">
      <h1>Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
