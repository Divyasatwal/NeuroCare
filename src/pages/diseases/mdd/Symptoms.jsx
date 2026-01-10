import React from "react";
import "../DiseaseLayout.css";

const Symptoms = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Symptoms of MDD</h2>
      <div className="disease-section-divider"></div>

      <ul className="disease-section-list">
        <li>Persistent sadness or emptiness</li>
        <li>Loss of interest in activities</li>
        <li>Fatigue and low energy</li>
        <li>Sleep disturbances</li>
        <li>Difficulty concentrating</li>
        <li>Feelings of worthlessness or guilt</li>
        <li>Changes in appetite or weight</li>
        <li>Suicidal thoughts in severe cases</li>
      </ul>
    </div>
  );
};

export default Symptoms;
