/*import React from "react";
import "../DiseaseLayout.css";

const Treatment = () => {
  return (
    <div className="content-section">
      <h1>Treatment & Management</h1>
      <p>
        Although Parkinson’s has no cure, various treatments can help manage 
        symptoms and improve daily functioning.
      </p>

      <h3>Medications</h3>
      <ul>
        <li><strong>Levodopa:</strong> Most effective drug for movement symptoms.</li>
        <li><strong>Dopamine agonists:</strong> Mimic dopamine in the brain.</li>
        <li><strong>MAO-B inhibitors:</strong> Slow dopamine breakdown.</li>
        <li>Drugs for tremor, sleep, constipation, or mood.</li>
      </ul>

      <h3>Therapies</h3>
      <ul>
        <li>Physiotherapy for balance & mobility</li>
        <li>Speech therapy</li>
        <li>Occupational therapy</li>
      </ul>

      <h3>Surgical Options</h3>
      <ul>
        <li><strong>Deep Brain Stimulation (DBS):</strong> Reduces tremors & rigidity in advanced cases.</li>
      </ul>
    </div>
  );
};

export default Treatment;*/

import React from "react";
import "../DiseaseLayout.css";

const Treatment = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Treatment for Parkinson’s Disease</h2>
      <div className="disease-section-divider"></div>
      <p className="disease-section-text">
        Treatment may include medications that increase dopamine levels,
        physical therapy, and in some cases, deep brain stimulation (DBS).
      </p>
    </div>
  );
};

export default Treatment;

