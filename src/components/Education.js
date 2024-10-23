import React from 'react';

function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-item">
        <h3>Bachelor of Technology in Electronics and Communication Engineering</h3>
        <p className="institution">Indian Institute of Information Technology, Bhagalpur</p>
        <p className="duration">December 2021 – July 2025</p>
        <p className="grade">CGPA: 7.49 (Absolute)</p>
      </div>
      <div className="relevant-coursework">
        <h3>Relevant Coursework</h3>
        <ul className="coursework-list">
          <li>Data Structure</li>
          <li>IOT</li>
          <li>Control System</li>
          <li>Microprocessor</li>
          <li>OOPs (C++)</li>
          <li>Computer Vision</li>
          <li>VLSI</li>
          <li>Machine Learning</li>
        </ul>
      </div>
    </section>
  );
}

export default Education;