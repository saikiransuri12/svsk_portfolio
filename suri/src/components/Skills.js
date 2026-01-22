import React from 'react';

const Skills = () => {
  const skills = ["JavaScript", "React", "HTML", "CSS", "Node.js"];

  return (
    <section className="skills">
      <h1>Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
