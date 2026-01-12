// import React from "react";
// import "../DiseaseLayout.css";

// const Diagnosis = () => {
//   return (
//     <div>
//       <h2 className="disease-section-title">Diagnosis</h2>
//       <div className="disease-section-divider"></div>
//       <p className="disease-section-text">
//         Diagnosing dementia involves evaluating symptoms, reviewing medical history,
//         performing cognitive tests, and conducting brain scans such as MRI or CT.
//         Laboratory tests may also be done to rule out reversible causes.
//       </p>
//     </div>
//   );
// };

// export default Diagnosis;

import React from "react";
import "../DiseaseLayout.css";

const Diagnosis = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Diagnosis Methods: How Dementia is Identified
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Dementia is diagnosed through a detailed clinical evaluation that includes assessing cognitive abilities, understanding the patient’s symptoms, and ruling out medical conditions that may mimic dementia. Since dementia is a syndrome with multiple possible causes, accurate diagnosis helps determine the type (e.g., Alzheimer's, vascular dementia, Lewy body dementia, frontotemporal dementia) and the appropriate treatment approach.
      </p>

      {/* 1. Clinical and Medical Assessment */}
      <h2 className="disease-section-subt">
        1. Clinical and Medical Assessment
      </h2>
      <p className="disease-section-text">
        The diagnostic process begins with an in-depth clinical assessment conducted by a neurologist or psychiatrist. This helps identify the pattern of symptoms and rule out reversible causes of memory and behavioral changes.
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Patient History:</b> Review of symptoms such as forgetfulness, mood changes, behavioral issues, confusion, or difficulty performing daily tasks.
        </li>
        <li>
          <b>Family History:</b> To identify whether dementia or related cognitive disorders run in the family.
        </li>
        <li>
          <b>Neurological Examination:</b> Evaluation of reflexes, movement, coordination, and sensory functions to detect conditions like Parkinsonism or stroke.
        </li>
        <li>
          <b>Laboratory Tests:</b> Blood tests to rule out conditions that may resemble dementia symptoms, including anemia, thyroid problems, vitamin deficiencies, liver or kidney disorders, and infections.
        </li>
      </ul>

      {/* 2. Cognitive and Neuropsychological Tests */}
      <h2 className="disease-section-subt">
        2. Cognitive and Neuropsychological Tests
      </h2>
      <p className="disease-section-text">
        These tests are used to assess memory, attention, reasoning, language, and problem-solving skills. They help determine the extent and pattern of cognitive impairment.
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Mini-Mental State Examination (MMSE):</b> A widely used screening tool to quickly measure memory, orientation, and basic thinking skills.
        </li>
        <li>
          <b>Montreal Cognitive Assessment (MoCA):</b> A more sensitive test that detects mild cognitive impairment and evaluates executive function, which is often affected early in dementia.
        </li>
        <li>
          <b>Neuropsychological Evaluation:</b> A detailed set of tests conducted by a psychologist to identify specific cognitive weaknesses and strengths across multiple domains.
        </li>
      </ul>

      {/* 3. Brain Imaging */}
      <h2 className="disease-section-subt">
        3. Brain Imaging Techniques
      </h2>
      <p className="disease-section-text">
        Imaging helps identify structural or functional changes in the brain, rule out tumors or strokes, and differentiate between types of dementia.
      </p>
      <ul className="disease-section-text">
        <li>
          <b>MRI / CT Scans:</b> Used to detect brain shrinkage, vascular damage, tumors, bleeding, or structural abnormalities.  
          <ul className="disease-section-text mt-2 ml-4">
            <li>
              <b>MRI:</b> Provides detailed images helpful in diagnosing vascular dementia, frontotemporal dementia, or abnormalities in specific lobes.
            </li>
            <li>
              <b>CT:</b> Often used when MRI is not available, to look for strokes or significant structural damage.
            </li>
          </ul>
        </li>
        <li>
          <b>PET Scans:</b>
          <ul className="disease-section-text mt-2 ml-4">
            <li>
              <b>FDG-PET:</b> Shows regions of reduced glucose metabolism, which differ among dementia types.
            </li>
            <li>
              <b>Amyloid-PET:</b> Helps detect amyloid buildup when Alzheimer’s disease is suspected.
            </li>
            <li>
              <b>Dopamine Transporter (DaT) Scan:</b> Used in diagnosing Lewy body dementia and differentiating it from Parkinson’s disease.
            </li>
          </ul>
        </li>
      </ul>

      {/* 4. Biological Biomarkers */}
      <h2 className="disease-section-subt">
        4. Biological Biomarkers
      </h2>
      <p className="disease-section-text">
        Biomarkers help identify underlying diseases causing dementia. While some biomarkers are specific to Alzheimer’s, others guide the diagnosis of different dementia types.
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Cerebrospinal Fluid (CSF) Analysis:</b> Measures levels of amyloid and tau proteins to distinguish Alzheimer’s-related dementia from other forms.
        </li>
        <li>
          <b>Blood Tests (Emerging Tools):</b> New tests can detect proteins linked to Alzheimer’s pathology and may soon help differentiate dementia types.
        </li>
        <li>
          <b>Genetic Testing:</b> Used in rare early-onset dementia cases or when there is a strong family history. Specific gene tests help identify frontotemporal dementia and familial Alzheimer’s.
        </li>
      </ul>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Diagnosing dementia involves integrating medical history, cognitive testing, imaging results, and biomarker findings. Because dementia has multiple causes, accurate diagnosis is essential for personalized treatment, safety planning, and improving the patient’s quality of life.
      </p>
    </div>
  );
};

export default Diagnosis;

