import React from "react";
import "../DiseaseLayout.css";

const Symptoms = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Symptoms of Bipolar Disorder</h2>
      <div className="disease-section-divider"></div>

      <h3>Manic Symptoms</h3>
      <ul>
        <li>High energy or abnormal excitement</li>
        <li>Decreased need for sleep</li>
        <li>Racing thoughts</li>
        <li>Impulsive decisions</li>
      </ul>

      <h3>Depressive Symptoms</h3>
      <ul>
        <li>Low mood</li>
        <li>Fatigue</li>
        <li>Loss of interest</li>
        <li>Sleep and appetite changes</li>
      </ul>
    </div>
  );
};

export default Symptoms;
