import React from "react";
import "../DiseaseLayout.css";

const Overview = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Overview: Understanding Alzheimer's Disease
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Alzheimer’s disease (AD) is a disorder that causes degeneration of the cells in the brain and it is the main cause of dementia, which is characterized by a decline in thinking and independence in personal daily activities. AD is considered a multifactorial disease: two main hypotheses were proposed as a cause for AD, cholinergic and amyloid hypotheses. Additionally, several risk factors such as increasing age, genetic factors, head injuries, vascular diseases, infections, and environmental factors play a role in the disease. Currently, there are only two classes of approved drugs to treat AD, including inhibitors to cholinesterase enzyme and antagonists to N-methyl d-aspartate (NMDA), which are effective only in treating the symptoms of AD, but do not cure or prevent the disease. Nowadays, the research is focusing on understanding AD pathology by targeting several mechanisms, such as abnormal tau protein metabolism, β-amyloid, inflammatory response, and cholinergic and free radical damage, aiming to develop successful treatments that are capable of stopping or modifying the course of AD. This review discusses currently available drugs and future theories for the development of new therapies for AD, such as disease-modifying therapeutics (DMT), chaperones, and natural compounds.
      </p>

      <p className="disease-section-text">
        <b>Keywords:</b> Alzheimer’s disease, neurodegeneration, β-amyloid peptide, tau protein, risk factors, disease-modifying therapy, chaperons, heat shock proteins
      </p>

      <h2 className="disease-section-title">  
       Introduction
      </h2>
      <div className="disease-section-divider"></div>

      {/* 1. Introduction */}
      <p className="disease-section-text">
        Alzheimer’s disease (AD) is a slowly progressive brain disorder and is the most common form of dementia. It involves the physical deterioration of nerve cells (neurons) in the brain, leading to memory loss, confusion, and changes in behavior.
      </p>

      {/* 2. Normal Aging vs Alzheimer's Table */}
      <h2 className="disease-section-subt">
       1. Normal Aging vs. Alzheimer’s: What is the Difference?
      </h2>
      <p className="disease-section-text">
        Many people worry that forgetfulness is a sign of Alzheimer's, but some memory changes are a normal part of aging.
      </p>
      
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Sign of Normal Aging</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Sign of Alzheimer's Disease</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Making a bad decision once in a while.</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Poor judgment and decision-making most of the time.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Missing a monthly payment.</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Inability to manage a budget or track bills.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Forgetting which day it is and remembering later.</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Losing track of the date or the season.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Sometimes forgetting a word.</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Trouble having a conversation.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Losing things from time to time.</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Misplacing things and being unable to retrace steps to find them.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. What Happens in the Brain */}
      <h2 className="disease-section-subt">
       2. What happens in the brain?
      </h2>
      <p className="disease-section-text">
        The disease is characterized by specific biological changes in the brain, primarily located in the medial temporal lobe (vital for memory) and the neocortex (responsible for sensory perception and conscious thought).
      </p>
      <p className="disease-section-text">
        Three key changes occur that prevent brain cells from functioning:
      </p>
      <ol className="disease-section-text">
        <li>
          <b>Neuritic Plaques:</b> Toxic clusters formed by the accumulation of a protein called amyloid-beta (Aβ). These block signals between cells.
        </li>
        <li>
          <b>Neurofibrillary Tangles:</b> Twisted fibers of tau protein found inside brain cells that cause the transport system to collapse.
        </li>
        <li>
          <b>Brain Atrophy (Shrinkage):</b> As neurons die, the brain tissue physically shrinks. This typically starts in the hippocampus (memory center).
        </li>
      </ol>

      {/* 4. Progression Stages */}
      <h2 className="disease-section-subt">
       3. The Three Stages of Progression
      </h2>
      <ul className="disease-section-text">
        <li>
          <b>Early-stage (Mild):</b> The person may still function independently but feels they are having memory lapses, such as forgetting familiar words or the location of everyday objects.
        </li>
        <li>
          <b>Middle-stage (Moderate):</b> This is typically the longest stage. Symptoms become more pronounced. The person may confuse words, get frustrated or angry, and act in unexpected ways.
        </li>
        <li>
          <b>Late-stage (Severe):</b> Individuals lose the ability to respond to their environment, carry on a conversation, and, eventually, control movement.
        </li>
      </ul>

      {/* 5. Types of Alzheimer's */}
      <h2 className="disease-section-subt">
        4. Types of Alzheimer's
      </h2>
      <ul className="disease-section-text">
        <li>
          <b>Early-Onset Alzheimer's:</b> Occurs in people younger than age 65. This form is much rarer and is often linked to specific genes (familial).
        </li>
        <li>
          <b>Late-Onset Alzheimer's:</b> The most common form of the disease, which happens to people age 65 and older.
        </li>
      </ul>

      {/* 6. Differential Diagnosis */}
      <h2 className="disease-section-subt">
       5. Is it always Alzheimer's?
      </h2>
      <p className="disease-section-text">
        Not all memory loss is Alzheimer's. "Dementia" is an umbrella term for symptoms of cognitive decline. It is vital to get a proper diagnosis because some causes are <b>reversible</b>.
      </p>
      <p className="disease-section-text">
        <b>Common "Mimics" (Treatable Conditions):</b>
      </p>
      <ul className="disease-section-text">
        <li><b>Vitamin B12 Deficiency:</b> Can cause confusion and memory loss.</li>
        <li><b>Thyroid Problems:</b> An underactive thyroid can slow down brain function.</li>
        <li><b>Medication Side Effects:</b> Interactions between drugs can cause cognitive symptoms.</li>
        <li><b>Depression:</b> Severe depression ("pseudodementia") can cause brain fog and apathy.</li>
        <li><b>Infections:</b> Specifically Urinary Tract Infections (UTIs) in older adults.</li>
      </ul>

      {/* 7. History (Moved to bottom) */}
      <h2 className="disease-section-subt">
       6. A Brief History
      </h2>
      <p className="disease-section-text">
        The disease is named after <b>Alois Alzheimer</b>, a German psychiatrist.
      </p>
      <ul className="disease-section-text">
        <li>
          <b>The Discovery:</b> While examining the brain of a patient who had suffered from severe memory loss and personality changes before death, Dr. Alzheimer noticed the massive loss of neurons and the presence of strange plaques.
        </li>
        <li>
          <b>The Name:</b> He described it as a "serious disease of the cerebral cortex." Later, his colleague Emil Kraepelin officially named the condition "Alzheimer’s disease" in the 8th edition of his psychiatry handbook.
        </li>
      </ul>

      <div className="disease-section-divider"></div>
      
      <p className="disease-section-text">
        While there is currently no cure for Alzheimer's disease, research continues to advance our understanding of the condition. Scientists are working on developing new treatments that may slow or stop the progression of the disease. Early diagnosis remains crucial for managing symptoms and maintaining quality of life.
      </p>
    </div>
  );
};

export default Overview;