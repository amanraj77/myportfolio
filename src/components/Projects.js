import React from 'react';

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="project-item">
        <h3>Real Estate Website | MERN Stack</h3>
        <p className="project-duration">April 2023 - July 2023</p>
        <ul className="project-details">
          <li>Developed a full-stack application for browsing, listing, and managing real estate properties.</li>
          <li>The application includes features for user authentication, property management, real-time chat, and more.</li>
          <li>Implemented user authentication and session management with JWT stored in cookies, ensuring secure access.</li>
          <li>Technologies: React.js, Express.js, Prisma, MongoDB, JWT, Socket.io</li>
        </ul>
      </div>
      <div className="project-item">
        <h3>File Zipper | Huffman Coding</h3>
        <p className="project-duration">August 2023 - December 2023</p>
        <ul className="project-details">
          <li>Developed a "File Zipper" application using C++ that compresses and decompresses files efficiently.</li>
          <li>Implemented data structures and algorithms like Huffman Coding for optimal file compression.</li>
          <li>Ensured the program's scalability and performance by optimizing algorithmic complexity.</li>
          <li>Demonstrated proficiency in C++ and DSA concepts through practical application in file management.</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;