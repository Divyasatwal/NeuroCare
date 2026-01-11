// import React from "react";
// import "../DiseaseLayout.css";

// const Causes = () => {
//   return (
//     <div>
//       <h2 className="disease-section-title">Causes</h2>
//       <div className="disease-section-divider"></div>
//       <p className="disease-section-text">
//         Dementia’s disease is caused by abnormal buildups of proteins in and around brain cells,
//         particularly amyloid plaques and tau tangles, leading to brain cell damage and loss of communication.
//       </p>
//     </div>
//   );
// };

// export default Causes;

import React from "react";
import "../DiseaseLayout.css";

const Causes = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Causes: What Leads to Dementia?
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Dementia is not a single disease but a <b>syndrome</b> .It is a group of symptoms that affect memory, thinking, behavior, and the ability to perform everyday activities. The causes of dementia vary depending on the underlying disorder, but most forms result from <b>damage to brain cells</b>. Once these cells are damaged, they can no longer communicate effectively, leading to cognitive decline.
      </p>

      {/* 1. How Dementia Develops */}
      <h2 className="disease-section-subt">
        1. How Dementia Develops in the Brain
      </h2>
      <p className="disease-section-text">
        Dementia occurs when nerve cells (neurons) in specific brain regions become damaged. Each type of dementia affects different parts of the brain, which is why symptoms vary. In general, the cognitive problems arise from:
      </p>

      <ul className="disease-section-text">
        <li><b>Loss of neurons and connections</b> between brain cells.</li>
        <li><b>Reduced blood flow</b> to the brain.</li>
        <li><b>Protein buildup</b> inside or outside neurons.</li>
        <li><b>Inflammation</b> that damages brain tissue.</li>
      </ul>

      {/* 2. Major Types and Their Causes */}
      <h2 className="disease-section-subt">
        2. Major Types of Dementia and Their Causes
      </h2>
      <p className="disease-section-text">
        Different diseases can lead to dementia. Below are the most common causes:
      </p>

      {/* Alzheimer's Dementia */}
      <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginTop: "10px", color: "#2c3e50" }}>
        Alzheimer’s Dementia
      </h3>
      <p className="disease-section-text">
        The most common cause of dementia. It results from the abnormal buildup of <b>beta-amyloid plaques</b> and <b>tau tangles</b> that disrupt cell communication and cause brain shrinkage.
      </p>

      {/* Vascular Dementia */}
      <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginTop: "10px", color: "#2c3e50" }}>
        Vascular Dementia
      </h3>
      <p className="disease-section-text">
        Caused by reduced blood flow to the brain, often due to strokes, mini-strokes, or damage to blood vessels. When brain cells do not get enough oxygen, they die.
      </p>

      {/* Lewy Body Dementia */}
      <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginTop: "10px", color: "#2c3e50" }}>
        Lewy Body Dementia
      </h3>
      <p className="disease-section-text">
        Caused by abnormal deposits of a protein called <b>alpha-synuclein</b> (Lewy bodies) in brain regions responsible for thinking, movement, and behavior.
      </p>

      {/* Frontotemporal Dementia */}
      <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginTop: "10px", color: "#2c3e50" }}>
        Frontotemporal Dementia (FTD)
      </h3>
      <p className="disease-section-text">
        Results from degeneration of the frontal and temporal lobes — areas controlling personality, language, and decision-making. The cause may involve genetic mutations.
      </p>

      {/* Mixed Dementia */}
      <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginTop: "10px", color: "#2c3e50" }}>
        Mixed Dementia
      </h3>
      <p className="disease-section-text">
        A combination of two or more types (e.g., Alzheimer’s + vascular dementia). Mixed dementia is common in older adults.
      </p>

      {/* 3. Risk Factors */}
      <h2 className="disease-section-subt">
        3. Major Risk Factors
      </h2>
      <p className="disease-section-text">
        Dementia typically results from a mixture of genetic, medical, and lifestyle factors. These risk factors can increase the likelihood of brain cell damage.
      </p>

      <ul className="disease-section-text">
        <li><b>Age:</b> Risk increases significantly after age 65.</li>
        <li><b>Genetics:</b> Family history of dementia increases risk but does not guarantee its development.</li>
        <li><b>Cardiovascular Diseases:</b> High blood pressure, diabetes, high cholesterol, and stroke contribute to vascular dementia.</li>
        <li><b>Head Injuries:</b> Past traumatic brain injuries raise the risk.</li>
        <li><b>Lifestyle Factors:</b> Smoking, alcohol overuse, poor diet, physical inactivity, and social isolation accelerate cognitive decline.</li>
        <li><b>Chronic Conditions:</b> Thyroid disorders, liver/kidney disease, and sleep apnea can impair brain function.</li>
      </ul>

      {/* 4. Reversible Causes */}
      <h2 className="disease-section-subt">
        4. Reversible Causes of Dementia-Like Symptoms
      </h2>
      <p className="disease-section-text">
        Not all memory loss indicates permanent dementia. Some conditions can cause symptoms that mimic dementia but are <b>treatable</b> if diagnosed early.
      </p>

      <ul className="disease-section-text">
        <li><b>Vitamin B12 Deficiency</b></li>
        <li><b>Thyroid Imbalance</b></li>
        <li><b>Chronic Alcohol Use</b></li>
        <li><b>Medication Side Effects</b></li>
        <li><b>Severe Depression or Anxiety</b></li>
        <li><b>Infections</b> (e.g., UTIs in older adults)</li>
        <li><b>Normal Pressure Hydrocephalus</b> (fluid buildup in the brain)</li>
      </ul>

      {/* 5. How Lifestyle Affects Dementia Risk */}
      <h2 className="disease-section-subt">
        5. How Lifestyle Plays a Role
      </h2>
      <p className="disease-section-text">
        Research suggests that up to <b>40% of dementia cases</b> may be influenced by modifiable lifestyle factors. Protecting the brain early in life can reduce risk later.
      </p>

      <ul className="disease-section-text">
        <li>Regular physical exercise</li>
        <li>A balanced diet (Mediterranean or DASH diets)</li>
        <li>Mental stimulation (learning, reading, puzzles)</li>
        <li>Quality sleep</li>
        <li>Social engagement</li>
        <li>Managing stress and chronic illness</li>
      </ul>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Dementia has many possible causes, and understanding these helps in early diagnosis, better care, and prevention. While some risk factors cannot be changed, adopting a healthy lifestyle can significantly reduce the likelihood of developing dementia.
      </p>
    </div>
  );
};

export default Causes;

