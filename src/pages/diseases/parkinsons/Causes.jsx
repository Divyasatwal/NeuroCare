/*import React from "react";
import "../DiseaseLayout.css";


const Causes = () => {
  return (
    <div className="content-section">
      <h1>Causes of Parkinson's Disease</h1>
      <p>
        While the exact cause remains unknown, research suggests that Parkinson’s 
        disease develops due to a combination of genetic, environmental, and 
        biological factors.
      </p>

      <ul>
        <li><strong>Genetic Mutations:</strong> Some rare gene variants can increase risk.</li>
        <li><strong>Environmental Triggers:</strong> Exposure to pesticides, toxins, or pollution.</li>
        <li><strong>Age-related Degeneration:</strong> Risk increases significantly after age 60.</li>
        <li><strong>Lewy Bodies:</strong> Abnormal protein clumps (alpha-synuclein) in brain cells.</li>
        <li><strong>Inflammatory Processes:</strong> Chronic brain inflammation may contribute.</li>
      </ul>
    </div>
  );
};

export default Causes;*/

import React from "react";
import "../DiseaseLayout.css";

const Causes = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Causes of Parkinson’s Disease</h2>
      <div className="disease-section-divider"></div>
      <p className="disease-section-text">
        Parkinson’s is linked to a combination of genetic and environmental
        factors. The degeneration of dopamine-producing neurons in the substantia nigra
        is the primary cause.
      </p>
    </div>
  );
};

export default Causes;

