/*import React from "react";
import "../DiseaseLayout.css";

const Overview = () => {
  return (
    <div className="content-section">
      <h1>Overview: Understanding Parkinson's Disease</h1>
      <p>
        Parkinson’s disease is a chronic, progressive neurological disorder that 
        primarily affects movement. It occurs when dopamine-producing neurons 
        in a region of the brain called the substantia nigra gradually degenerate.
      </p>
      <p>
        Dopamine plays a crucial role in smooth, coordinated muscle movements. 
        As dopamine levels drop, individuals experience motor symptoms such as 
        tremors, stiffness, slow movement, and balance difficulties.
      </p>
      <p>
        Parkinson’s is not curable, but early diagnosis and proper treatment can 
        significantly improve quality of life.
      </p>
    </div>
  );
};

export default Overview;*/

import React from "react";
import "../DiseaseLayout.css";

const Overview = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Overview: Understanding Parkinson’s Disease</h2>
      <div className="disease-section-divider"></div>
      <p className="disease-section-text">
        Parkinson’s disease is a progressive neurological disorder that affects
        movement, muscle control, and balance. It develops due to the loss of
        dopamine-producing neurons in the brain.
      </p>
    </div>
  );
};

export default Overview;

