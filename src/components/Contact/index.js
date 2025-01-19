import React from 'react';
import "./index.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Information</h1>
      <div className="contact-details">
        <p><strong>Name:</strong> Ganesh</p>
        <p><strong>Phone Number:</strong> <a href="tel:9392523431">9392523431</a></p>
        <p><strong>Email:</strong> <a href="mailto:kanuriganesh05@gmail.com">kanuriganesh05@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Contact;
