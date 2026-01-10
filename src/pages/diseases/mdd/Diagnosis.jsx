import React from "react";
import "../DiseaseLayout.css";

const Diagnosis = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Diagnosis of MDD</h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        MDD is diagnosed using clinical evaluation and standardized psychiatric
        assessments.
      </p>

      <ul className="disease-section-list">
        <li>Clinical interviews</li>
        <li>DSM-5 criteria</li>
        <li>Physical examination to rule out medical causes</li>
        <li>Mental health questionnaires (PHQ-9, HAM-D)</li>
      </ul>
    </div>
  );
};

export default Diagnosis;
