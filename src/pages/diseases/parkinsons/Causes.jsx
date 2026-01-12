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
      <h2 className="disease-section-title">
        Causes: What Leads to Parkinson’s Disease?
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        The exact cause of Parkinson’s disease (PD) is still not fully understood. 
        In most people, it is not due to one single factor. Instead, Parkinson’s 
        is considered a <b>multifactorial neurodegenerative disorder</b>—caused by a 
        combination of genetics, aging, biological changes in the brain, and environmental
        exposures.
      </p>

      {/* 1. What Happens in the Brain */}
      <h2 className="disease-section-subt">1. What Happens Inside the Brain?</h2>
      <p className="disease-section-text">
        Parkinson’s develops when certain nerve cells in the brain deteriorate—
        especially in the <b>substantia nigra</b>, an area responsible for movement. 
        These neurons produce <b>dopamine</b>, a chemical that helps coordinate
        smooth and controlled muscle activity.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Dopamine Loss:</b> When dopamine-producing neurons die, movements 
          become slower, stiffer, and less coordinated.
        </li>
        <li>
          <b>Lewy Bodies:</b> Abnormal protein clumps made of <i>alpha-synuclein</i> 
          accumulate in neurons. This is considered a key pathological feature of PD.
        </li>
        <li>
          <b>Mitochondrial Dysfunction:</b> The “energy factories” of neurons work 
          poorly, making them more vulnerable to damage.
        </li>
        <li>
          <b>Inflammation:</b> Chronic inflammation in the brain (neuroinflammation) 
          may accelerate neuron death.
        </li>
      </ul>

      {/* 2. The Role of Genetics */}
      <h2 className="disease-section-subt">2. The Role of Genetics</h2>

      <p className="disease-section-text">
        While Parkinson's is usually not inherited, genetics do play a role in 
        10–15% of cases. There are two types:
      </p>

      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          marginTop: "15px",
          color: "#2c3e50",
        }}
      >
        Familial (Inherited) Parkinson’s
      </h3>
      <p className="disease-section-text">
        Certain gene mutations directly increase the risk of developing PD.
        These include:
      </p>
      <ul className="disease-section-text">
        <li><b>LRRK2</b></li>
        <li><b>PARK7 (DJ-1)</b></li>
        <li><b>PINK1</b></li>
        <li><b>PRKN (Parkin)</b></li>
        <li><b>SNCA (alpha-synuclein)</b></li>
      </ul>

      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          marginTop: "15px",
          color: "#2c3e50",
        }}
      >
        Sporadic Parkinson’s
      </h3>
      <p className="disease-section-text">
        This is the most common form. It is not caused by a single gene but may 
        occur due to a combination of aging, environment, and subtle genetic 
        susceptibility.
      </p>

      {/* 3. Major Risk Factors */}
      <h2 className="disease-section-subt">3. Major Risk Factors</h2>

      <p className="disease-section-text">
        Research shows several factors can increase the likelihood of developing Parkinson’s.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Aging:</b> The biggest risk factor. Parkinson’s is most commonly diagnosed 
          after age 60.
        </li>
        <li>
          <b>Family History:</b> Having a first-degree relative with PD increases risk.
        </li>
        <li>
          <b>Environmental Toxins:</b> Long-term exposure to certain chemicals is linked to PD:
          <ul>
            <li>Pesticides (paraquat, rotenone)</li>
            <li>Herbicides</li>
            <li>Heavy metals</li>
            <li>Industrial chemicals</li>
          </ul>
        </li>
        <li>
          <b>Head Trauma:</b> Repeated head injuries (e.g., athletes, accidents) may raise the risk.
        </li>
        <li>
          <b>Rural Living & Well Water:</b> Due to increased exposure to agricultural chemicals.
        </li>
        <li>
          <b>Gender:</b> Men are slightly more likely than women to develop Parkinson’s.
        </li>
      </ul>

      {/* 4. Protective Factors */}
      <h2 className="disease-section-subt">4. Protective Factors (What Lowers Risk?)</h2>
      <p className="disease-section-text">
        Interestingly, certain lifestyle factors are associated with a <b>lower</b> risk of PD:
      </p>
      <ul className="disease-section-text">
        <li><b>Regular Physical Exercise</b></li>
        <li><b>Caffeine Consumption</b> (coffee/tea)</li>
        <li><b>Smoking</b> (not recommended — harmful overall, but data shows reduced PD risk)</li>
        <li><b>Healthy Gut Microbiome</b> (emerging research)</li>
      </ul>
      <p className="disease-section-text">
        These do not guarantee prevention but offer clues about how PD develops.
      </p>

    </div>
  );
};

export default Causes;
