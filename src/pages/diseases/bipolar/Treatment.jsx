import React from "react";
import "../DiseaseLayout.css";

const Treatment = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Treatment for Bipolar Disorder</h2>
      <div className="disease-section-divider"></div>

      <ul className="disease-section-text">
        <li>Medication (Mood stabilizers, antipsychotics, antidepressants)</li>
        <li>Psychotherapy (CBT, interpersonal therapy)</li>
        <li>Lifestyle changes (sleep routine, stress management)</li>
        <li>Family counseling</li>
        <li>Hospitalization during severe episodes</li>
      </ul>
    </div>
  );
};

export default Treatment;
