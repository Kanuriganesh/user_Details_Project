import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import './index.css';

const UserDetails = () => {
  const { id } = useParams();      
  const [userData, setUserData] = useState(null); 
  const [loading, setLoading] = useState(true);   

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, [id]);

  return (
    <div className="user-details-container">
      {loading ? (
        <div className="loader-container">
          <ThreeDots color="#0b69ff" height={50} width={50} />
        </div>
      ) : (
        userData && (
          <div className="user-details-card">
  <h2 className="user-name">{userData.name}</h2>
  <div className="user-info">
    <p><strong>Email:</strong> {userData.email}</p>
    <p><strong>Phone:</strong> {userData.phone}</p>
    <p><strong>Company:</strong> {userData.company.name}</p>
    <p><strong>Website:</strong> <a href={`https://${userData.website}`} target="_blank" rel="noopener noreferrer">{userData.website}</a></p>
    <p><strong>Address:</strong> {`${userData.address.street}, ${userData.address.suite}, ${userData.address.city}, ${userData.address.zipcode}`}</p>
  </div>
</div>
        )
      )}
    </div>
  );
};

export default UserDetails;
