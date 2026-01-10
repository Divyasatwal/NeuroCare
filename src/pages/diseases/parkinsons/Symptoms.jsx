/*import React from "react";
import "../DiseaseLayout.css";

const Symptoms = () => {
  return (
    <div className="content-section">
      <h1>Symptoms of Parkinson's Disease</h1>

      <p>Symptoms vary by individual but generally fall into motor and non-motor categories.</p>

      <h3>Motor Symptoms</h3>
      <ul>
        <li>Resting tremor (shaking hands or legs)</li>
        <li>Bradykinesia (slowness of movement)</li>
        <li>Rigid or stiff muscles</li>
        <li>Postural instability and balance problems</li>
        <li>Shuffling gait or freezing episodes</li>
      </ul>

      <h3>Non-Motor Symptoms</h3>
      <ul>
        <li>Sleep disturbances</li>
        <li>Loss of smell (anosmia)</li>
        <li>Constipation</li>
        <li>Anxiety or depression</li>
        <li>Cognitive decline or memory issues in later stages</li>
      </ul>
    </div>
  );
};

export default Symptoms;*/

import React from "react";
import "../DiseaseLayout.css";

const Symptoms = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Symptoms of Parkinson’s Disease</h2>
      <div className="disease-section-divider"></div>
      <p className="disease-section-text">
        Common symptoms include tremors, stiffness, slowness of movement,
        balance issues, and difficulty with coordination.
      </p>
    </div>
  );
};

export default Symptoms;

