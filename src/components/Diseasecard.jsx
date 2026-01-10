/*import React from 'react';
import './DiseaseCard.css';

const DiseaseCard = ({ title, description, image, onLearnMore }) => {
  return (
    <div className="disease-card">
      <div className="disease-card-image">
        <span className="disease-card-emoji">{image}</span>
      </div>
      <div className="disease-card-content">
        <h3 className="disease-card-title">{title}</h3>
        <p className="disease-card-description">{description}</p>
        <button 
          onClick={onLearnMore}
          className="disease-card-button"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default DiseaseCard;*/

import React from "react";
import { useNavigate } from "react-router-dom";
import "./DiseaseCard.css";

const DiseaseCard = ({ title, description, image, link }) => {
  const navigate = useNavigate();

  return (
    <div className="disease-card">
       <div className="disease-img-wrapper">
        <img src={image} alt={title} className="disease-img" />
      </div>

    <h3 className="disease-title">{title}</h3>
        <div className="disease-hover-info">
        <p>{description}</p>
        <button   onClick={() => navigate(link)}className="learn-btn">Learn More</button>
      </div>
    </div>
  );
};

export default DiseaseCard;

//  onClick={() => navigate(link)}