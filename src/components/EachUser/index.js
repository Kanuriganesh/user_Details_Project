import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';
const EachUser = (props) => { 
  const { eachItem } = props; 
  console.log(eachItem)
  const {city} = eachItem.address;
  const { id,name, username, email } = eachItem;
  
  return (
    <Link to={`/users/${id}`}>
        <div className="eachUser-container">
      <div className="eachUser-content">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>city:</strong> {city}</p>
      </div>
    </div>
    
    </Link>
  );
};

export default EachUser;
