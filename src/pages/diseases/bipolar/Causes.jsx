import React from "react";
import "../DiseaseLayout.css";

const Causes = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Causes of Bipolar Disorder</h2>
      <div className="disease-section-divider"></div>

      <ul className="disease-section-text">
        <li><strong>Genetics:</strong> Bipolar disorder is highly hereditary.</li>
        <li><strong>Brain Chemistry:</strong> Imbalance in neurotransmitters like dopamine.</li>
        <li><strong>Trauma:</strong> Major stress or childhood trauma.</li>
        <li><strong>Hormonal Changes:</strong> Can trigger or worsen mood episodes.</li>
        <li><strong>Environmental Factors:</strong> Sleep disturbances, substance use, stress.</li>
      </ul>
    </div>
  );
};

export default Causes;
