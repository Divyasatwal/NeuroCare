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

// import React from "react";
// import "../DiseaseLayout.css";

// const Diagnosis = () => {
//   return (
//     <div className="disease-section">
//       <h2 className="disease-section-title">Diagnosis</h2>
//       <div className="disease-section-divider"></div>
//       <p className="disease-section-text">
//         Diagnosis is based on neurological evaluation, medical history, and
//         symptom progression. Imaging tests like MRI or DaTscan may assist.
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
        Diagnosis Methods: How Parkinson’s Disease is Identified
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        There is no single test that can diagnose Parkinson’s disease (PD). 
        Diagnosis is mainly clinical—based on symptoms, medical examination, 
        and ruling out other neurological conditions. Imaging and lab tests 
        support the diagnosis but cannot confirm PD alone. An experienced 
        neurologist or movement disorder specialist is essential for accurate evaluation.
      </p>

      {/* 1. Clinical and Medical Assessment */}
      <h2 className="disease-section-subt">
        1. Clinical and Medical Assessment
      </h2>
      <p className="disease-section-text">
        The first and most important step is a thorough clinical evaluation 
        that focuses on motor and non-motor symptoms, medical history, and 
        neurological examination.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Patient History:</b> Doctors ask about symptoms such as tremor, 
          slowness, stiffness, sleep issues, constipation, loss of smell, and 
          changes in walking or balance.
        </li>
        <li>
          <b>Family History:</b> Although most PD cases are not inherited, 
          having a close relative with Parkinson’s may increase risk.
        </li>
        <li>
          <b>Neurological Exam:</b> This includes assessment of:
          <ul className="disease-section-text mt-2 ml-4">
            <li>Tremor at rest</li>
            <li>Bradykinesia (slowness of movement)</li>
            <li>Muscle rigidity</li>
            <li>Postural instability</li>
            <li>Gait and balance abnormalities</li>
          </ul>
        </li>
        <li>
          <b>Medication Response Test (Levodopa Challenge):</b> A strong improvement 
          after taking levodopa is highly suggestive of Parkinson’s disease.
        </li>
      </ul>

      {/* 2. Cognitive, Motor & Psychological Tests */}
      <h2 className="disease-section-subt">
        2. Cognitive, Motor, and Psychological Tests
      </h2>

      <p className="disease-section-text">
        While Parkinson’s is primarily a movement disorder, cognitive and 
        psychological assessments help identify related symptoms and differentiate 
        PD from other conditions.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Unified Parkinson’s Disease Rating Scale (UPDRS):</b> The most widely 
          used clinical tool to measure severity of motor and non-motor symptoms.
        </li>
        <li>
          <b>Timed Motor Tasks:</b> Such as finger tapping or hand movement speed tests.
        </li>
        <li>
          <b>Cognitive Screening (MoCA):</b> Because mild cognitive impairment can 
          occur, the Montreal Cognitive Assessment is often used.
        </li>
        <li>
          <b>Psychiatric Assessments:</b> To screen for depression, anxiety, or 
          hallucinations, which may occur in advanced PD.
        </li>
      </ul>

      {/* 3. Brain Imaging */}
      <h2 className="disease-section-subt">
        3. Brain Imaging Techniques
      </h2>
      <p className="disease-section-text">
        Imaging cannot confirm Parkinson’s but helps rule out other neurological 
        disorders such as stroke, tumors, normal-pressure hydrocephalus, or 
        atypical parkinsonism.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>MRI or CT Scan:</b> Used to exclude structural abnormalities in the brain. 
          Typical Parkinson’s patients often have normal scans.
        </li>

        <li>
          <b>DaTscan (Dopamine Transporter Scan):</b> 
          A specialized imaging test that shows dopamine transporter activity.
          <ul className="disease-section-text mt-2 ml-4">
            <li>Reduced dopamine activity strongly supports a PD diagnosis.</li>
            <li>Helps differentiate Parkinson’s from essential tremor.</li>
          </ul>
        </li>

        <li>
          <b>FDG-PET or SPECT:</b> Measures metabolic patterns in the brain and 
          may help differentiate Parkinson’s from atypical parkinsonian disorders.
        </li>
      </ul>

      {/* 4. Laboratory and Biomarker Tests */}
      <h2 className="disease-section-subt">
        4. Laboratory and Biomarker Tests
      </h2>

      <p className="disease-section-text">
        There are currently no standard blood or CSF tests that can definitively 
        diagnose Parkinson’s, but they play a role in excluding other conditions 
        and emerging biomarker research shows promise.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Blood Tests:</b> Used mainly to rule out thyroid disorders, Wilson’s disease, 
          B12 deficiency, or infections that can cause similar symptoms.
        </li>

        <li>
          <b>Cerebrospinal Fluid (CSF) Biomarkers:</b> Researchers are studying 
          alpha-synuclein levels and other markers, but these tests are not yet 
          routinely used in diagnosis.
        </li>

        <li>
          <b>Genetic Testing:</b> Recommended only when there is:
          <ul className="disease-section-text mt-2 ml-4">
            <li>Early-onset Parkinson’s (before age 40)</li>
            <li>Strong family history</li>
            <li>Suspicion of known gene mutations (LRRK2, PARK7, PINK1, PRKN, SNCA)</li>
          </ul>
        </li>
      </ul>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Parkinson’s disease is diagnosed by combining clinical symptoms, physical 
        examination findings, and supportive imaging results. Early and accurate 
        diagnosis helps ensure appropriate treatment, slow progression, and 
        improve quality of life.
      </p>
    </div>
  );
};

export default Diagnosis;
