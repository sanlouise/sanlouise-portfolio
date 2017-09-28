import React from 'react';
import profileImage from '../../assets/images/profile-image.jpeg';
const InfoCard = () => (
  <div className="card card-user">
    <div className="image">
      <img src="https://static.pexels.com/photos/249798/pexels-photo-249798.png" alt="..." />
    </div>
    <div className="content">
      <div className="author">
        <img className="avatar" src={profileImage} alt="Sandra Hallie" />
        <h4 className="title">
          Sandra Hallie<br />
          <small>sanlouise</small>
        </h4>
      </div>
      <p className="description text-center">
        I am a React developer with a true love for Javascript, currently interested in 100% remote positions.
      </p>
    </div>
  </div>
);

export default InfoCard;
