/*import React from "react";
import "../DiseaseLayout.css";

const Statistics = () => {
  return (
    <div className="content-section">
      <h1>Related Statistics</h1>

      <ul>
        <li>Over 10 million people worldwide are living with Parkinson’s.</li>
        <li>Most diagnoses occur after age 60.</li>
        <li>Men are 1.5× more likely to develop the condition than women.</li>
        <li>Incidence is increasing due to aging populations.</li>
        <li>Early intervention improves long-term quality of life.</li>
      </ul>
    </div>
  );
};

export default Statistics;*/

import React from "react";
import "../DiseaseLayout.css";

const Statistics = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Statistics</h2>
      <div className="disease-section-divider"></div>
      <p className="disease-section-text">
        Parkinson’s affects over 10 million people worldwide, with cases
        increasing with age.
      </p>
    </div>
  );
};

export default Statistics;

