import React from 'react';
import './profile.css';

const Profile = (props) => {
  return (
    <div className="profile">
      <img className="profile_image" src='https://cdn.worldvectorlogo.com/logos/react.svg' alt="Profile Pic"/>
      <h4>Richard Reis</h4>
      <p>Lambda student</p>
      <button>Connect</button>
    </div>
  )
};

export default Profile;
