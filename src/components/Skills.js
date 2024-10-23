import React from 'react';

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-content">
        <div className="skill-category">
          <h3>Languages</h3>
          <ul className="skill-list">
            <li>C</li>
            <li>C++</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>NodeJs</li>
            <li>MongoDB</li>
            <li>ExpressJs</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools</h3>
          <ul className="skill-list">
            <li>VS Code</li>
            <li>Sublime Text Editor</li>
            <li>CodeBlocks</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Technologies/Operating Systems</h3>
          <ul className="skill-list">
            <li>Windows</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Coding Profiles</h3>
          <ul className="skill-list">
            <li>Codeforces</li>
            <li>GFG</li>
            <li>LeetCode</li>
            <li>CN</li>
          </ul>
        </div>
      </div>
      <div className="certifications">
        <h3>Certifications</h3>
        <ul className="certification-list">
          <li>ServiceNow Certified System Administrator (CSA) - Certification No. 25574001</li>
          <li>ServiceNow Certified Application Developer (CAD) - Certification No. 25550038</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;