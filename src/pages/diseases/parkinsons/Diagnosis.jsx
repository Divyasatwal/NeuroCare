/*import React from "react";
import "../DiseaseLayout.css";

const Diagnosis = () => {
  return (
    <div className="content-section">
      <h1>Diagnosis of Parkinson's Disease</h1>

      <p>
        Parkinson’s disease is diagnosed clinically, meaning there is no single 
        test that confirms it. A neurologist evaluates symptoms, medical history, 
        and response to medications.
      </p>

      <h3>Common Diagnostic Methods</h3>
      <ul>
        <li>Neurological examination and movement assessment</li>
        <li>Review of symptom progression</li>
        <li>DaTscan imaging to assess dopamine activity (optional)</li>
        <li>Blood tests or MRI to rule out other conditions</li>
        <li>Trial of dopaminergic medication</li>
      </ul>
    </div>
  );
};

export default Diagnosis;*/

import React from "react";
import "../DiseaseLayout.css";

const Diagnosis = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Diagnosis</h2>
      <div className="disease-section-divider"></div>
      <p className="disease-section-text">
        Diagnosis is based on neurological evaluation, medical history, and
        symptom progression. Imaging tests like MRI or DaTscan may assist.
      </p>
    </div>
  );
};

export default Diagnosis;

