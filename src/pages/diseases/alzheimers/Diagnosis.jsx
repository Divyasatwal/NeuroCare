import React from "react";
import "../DiseaseLayout.css";

const Diagnosis = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Diagnosis Methods: How Alzheimer's is Identified
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        There is no single definitive test for Alzheimer's disease. A diagnosis is made through a comprehensive medical workup that involves ruling out other causes of memory loss and dementia, followed by identifying specific cognitive and biological markers associated with Alzheimer's.
      </p>

      {/* 1. Clinical and Medical Assessment */}
      <h2 className="disease-section-subt">
        1. Clinical and Medical Assessment
      </h2>
      <p className="disease-section-text">
        The first step involves a thorough clinical assessment to gather information about the patient's health and medical history, and to rule out reversible causes of cognitive decline.
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Patient History:</b> The doctor will ask about general health, past illnesses, head trauma, and current medications.
        </li>
        <li>
          <b>Family History:</b> Information on whether Alzheimer's or other forms of dementia run in the family.
        </li>
        <li>
          <b>Neurological Exam:</b> Checking reflexes, coordination, balance, and sight/hearing to rule out conditions like stroke or Parkinson's disease.
        </li>
        <li>
          <b>Laboratory Tests:</b> Blood and urine tests are performed to screen for treatable conditions that mimic dementia, such as Vitamin B12 deficiency, thyroid disorders, and infections.
        </li>
      </ul>

      {/* 2. Cognitive and Neuropsychological Tests */}
      <h2 className="disease-section-subt">
        2. Cognitive and Neuropsychological Tests
      </h2>
      <p className="disease-section-text">
        These tests measure different aspects of memory, thinking, and reasoning. They are quick, common, and crucial for assessing the extent of cognitive impairment.
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Mini-Mental State Examination (MMSE):</b> A short test that measures orientation, registration (memory), attention and calculation, recall, and language.
        </li>
        <li>
          <b>Montreal Cognitive Assessment (MoCA):</b> Often used as a more sensitive screening tool than the MMSE, it assesses higher-level functions like executive function and visuospatial skills.
        </li>
        <li>
          <b>Neuropsychological Batteries:</b> Longer, in-depth tests administered by a psychologist to determine specific areas of brain function that are impaired (e.g., word fluency, complex problem-solving).
        </li>
      </ul>

      {/* 3. Brain Imaging */}
      <h2 className="disease-section-subt">
        3. Brain Imaging Techniques
      </h2>
      <p className="disease-section-text">
        Imaging is primarily used to rule out other problems (like tumors, stroke, or bleeding) and to look for patterns of brain shrinkage (atrophy) characteristic of Alzheimer's.
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Magnetic Resonance Imaging (MRI) or Computed Tomography (CT):</b> Provides detailed structural images of the brain. Doctors look for generalized shrinkage, especially in the hippocampus (the memory center), and evidence of vascular issues.
        </li>
        <li>
          <b>Positron Emission Tomography (PET) Scans:</b>
          <ul className="disease-section-text mt-2 ml-4">
            <li>
              <b>FDG-PET:</b> Measures glucose metabolism (sugar use) in the brain. A pattern of reduced glucose metabolism in specific areas is highly suggestive of Alzheimer's.
            </li>
            <li>
              <b>Amyloid-PET:</b> Uses a tracer that binds to amyloid plaques, allowing doctors to visualize the presence of these plaques in the living brain.
            </li>
            <li>
              <b>Tau-PET:</b> Uses a tracer to visualize the location and density of tau tangles, providing insight into the disease's progression.
            </li>
          </ul>
        </li>
      </ul>

      {/* 4. Biological Biomarkers */}
      <h2 className="disease-section-subt">
        4. Biological Biomarkers
      </h2>
      <p className="disease-section-text">
        Biomarkers are measurable indicators of a biological state. These tests can confirm the presence of Alzheimer's pathology even before symptoms are severe.
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Cerebrospinal Fluid (CSF) Analysis:</b> A lumbar puncture (spinal tap) is used to measure levels of beta-amyloid and tau protein in the fluid surrounding the brain and spinal cord. In Alzheimer's, amyloid levels are usually low, and tau levels are high.
        </li>
        <li>
          <b>Blood Tests (Emerging):</b> New blood tests are being developed to measure circulating levels of specific amyloid and tau proteins, offering a less invasive way to screen for the disease.
        </li>
        <li>
          <b>Genetic Testing:</b> Used primarily in early-onset cases (PSEN1, APP, PSEN2 genes) or to check for the APOE ε4 risk factor gene, though this is usually for research purposes rather than definitive diagnosis.
        </li>
      </ul>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        A diagnosis of Alzheimer's disease is generally reached by integrating the findings from the medical history, cognitive tests, and imaging results. Early and accurate diagnosis is essential for beginning appropriate treatments and planning future care.
      </p>
    </div>
  );
};

export default Diagnosis;