import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img 
        className="not-found-image" 
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png" 
        alt="Page Not Found"
      />
      <h1 className="not-found-title">Oops! Page Not Found</h1>
      <p className="not-found-description">
        Sorry, the page you are looking for doesn't exist. It might have been removed or moved to a different location.
      </p>
      <Link to="/">
        <button className="not-found-button">Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
