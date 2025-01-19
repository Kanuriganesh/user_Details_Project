import React from 'react';
import "./index.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About This Project</h1>
      <p className="about-description">
        This project is a user management system that fetches and displays user details from an external API. 
        It uses React for building the UI, React Router for navigation, and Tailwind CSS for styling. 
        The project demonstrates core concepts of React such as component reusability, hooks (`useState` and `useEffect`), and responsive design.
      </p>
      <div className="about-features">
        <h2 className="features-title">Key Features</h2>
        <ul className="features-list">
          <li>Fetches user details from an external API.</li>
          <li>Responsive design for different screen sizes.</li>
          <li>Uses reusable components for better modularity.</li>
          <li>Implemented navigation using React Router.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
