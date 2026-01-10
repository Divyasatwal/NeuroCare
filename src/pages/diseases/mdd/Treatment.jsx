import React from "react";
import "../DiseaseLayout.css";

const Treatment = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Treatment for MDD</h2>
      <div className="disease-section-divider"></div>

      <ul className="disease-section-list">
        <li>Antidepressant medications (SSRIs, SNRIs, TCAs)</li>
        <li>Cognitive Behavioral Therapy (CBT)</li>
        <li>Psychotherapy and counseling</li>
        <li>Lifestyle improvements (sleep, diet, exercise)</li>
        <li>Support groups and mental health programs</li>
        <li>Severe cases: ECT or TMS</li>
      </ul>
    </div>
  );
};

export default Treatment;
