import React from "react";
import "../DiseaseLayout.css";

const Causes = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Causes of MDD</h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Major Depressive Disorder develops due to a combination of genetic,
        biological, environmental, and psychological factors.
      </p>

      <ul className="disease-section-list">
        <li>Imbalance of neurotransmitters (serotonin, dopamine, norepinephrine)</li>
        <li>Family history of depression</li>
        <li>Chronic stress or trauma</li>
        <li>Medical conditions such as thyroid disorders or chronic pain</li>
        <li>Substance abuse</li>
        <li>Hormonal changes</li>
      </ul>
    </div>
  );
};

export default Causes;
