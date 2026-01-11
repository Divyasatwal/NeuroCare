/*import React from "react";
import "../DiseaseLayout.css";

const Overview = () => {
  return (
    <div className="content-section">
      <h1>Overview: Understanding Parkinson's Disease</h1>
      <p>
        Parkinson’s disease is a chronic, progressive neurological disorder that 
        primarily affects movement. It occurs when dopamine-producing neurons 
        in a region of the brain called the substantia nigra gradually degenerate.
      </p>
      <p>
        Dopamine plays a crucial role in smooth, coordinated muscle movements. 
        As dopamine levels drop, individuals experience motor symptoms such as 
        tremors, stiffness, slow movement, and balance difficulties.
      </p>
      <p>
        Parkinson’s is not curable, but early diagnosis and proper treatment can 
        significantly improve quality of life.
      </p>
    </div>
  );
};

export default Overview;*/

// import React from "react";
// import "../DiseaseLayout.css";

// const Overview = () => {
//   return (
//     <div className="disease-section">
//       <h2 className="disease-section-title">Overview: Understanding Parkinson’s Disease</h2>
//       <div className="disease-section-divider"></div>
//       <p className="disease-section-text">
//         Parkinson’s disease is a progressive neurological disorder that affects
//         movement, muscle control, and balance. It develops due to the loss of
//         dopamine-producing neurons in the brain.
//       </p>
//     </div>
//   );
// };

// export default Overview;

import React from "react";
import "../DiseaseLayout.css";

const Overview = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Overview: Understanding Parkinson’s Disease
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Parkinson’s disease (PD) is a chronic, progressive neurodegenerative
        disorder that primarily affects movement control. It occurs when nerve
        cells in a region of the brain called the <b>substantia nigra</b> become
        impaired or die, leading to reduced production of <b>dopamine</b>, a
        chemical that helps regulate movement, mood, and coordination.
        Parkinson’s is considered a <b>multifactorial condition</b> influenced by
        genetics, aging, environmental exposures, and cellular oxidative stress.
        Although current treatments can significantly improve symptoms,
        they do not stop or reverse the underlying disease process.
      </p>

      <p className="disease-section-text">
        <b>Keywords:</b> Parkinson’s disease, motor symptoms, dopamine, substantia nigra, Lewy bodies,
        neurodegeneration, bradykinesia, tremor, deep brain stimulation
      </p>

      <h2 className="disease-section-title">  
       Introduction
      </h2>
      <div className="disease-section-divider"></div>

      {/* 1. Introduction */}
      <p className="disease-section-text">
        Parkinson’s disease is the <b>second most common neurodegenerative disorder</b> after Alzheimer’s.
        It mainly affects movement, but many individuals also develop non-motor symptoms such as sleep issues,
        mood changes, loss of smell, constipation, and cognitive decline in later stages.
      </p>

      {/* 2. Normal Aging vs Parkinson's Table */}
      <h2 className="disease-section-subt">
       1. Normal Aging vs. Parkinson’s: What is the Difference?
      </h2>
      <p className="disease-section-text">
        Normal aging causes slower movement and mild stiffness, but Parkinson’s symptoms are more severe,
        persistent, and progressively worsen.
      </p>
      
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Normal Aging</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Parkinson’s Disease</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Slight slowing of movement.
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Marked slowness (bradykinesia) affecting daily activities.
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Occasional stiffness after rest.
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Persistent muscle rigidity affecting arms, legs, or neck.
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Slight balance issues with age.
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Significant imbalance and postural instability in later stages.
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Normal facial expressions.
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Reduced facial expression (masked face).
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. What Happens in the Brain */}
      <h2 className="disease-section-subt">
       2. What happens in the brain?
      </h2>
      <p className="disease-section-text">
        Parkinson’s disease involves the gradual breakdown of dopamine-producing neurons
        in the <b>substantia nigra pars compacta</b>. Dopamine enables smooth and coordinated movement.
      </p>

      <p className="disease-section-text">Three major biological changes occur:</p>

      <ol className="disease-section-text">
        <li>
          <b>Dopamine Loss:</b> Reduced dopamine leads to difficulty initiating and controlling movement.
        </li>
        <li>
          <b>Lewy Bodies:</b> Abnormal clumps of the protein <b>alpha-synuclein</b> accumulate in neurons,
          disrupting their function.
        </li>
        <li>
          <b>Neural Circuit Dysfunction:</b> Changes in the basal ganglia alter motor control,
          resulting in tremors, rigidity, and slowed movement.
        </li>
      </ol>

      {/* 4. Progression Stages */}
      <h2 className="disease-section-subt">
       3. The Stages of Parkinson's Progression
      </h2>

      <ul className="disease-section-text">
        <li>
          <b>Stage 1:</b> Mild symptoms affecting one side of the body; tremor or stiffness may appear.
        </li>
        <li>
          <b>Stage 2:</b> Symptoms worsen and affect both sides; daily tasks become harder.
        </li>
        <li>
          <b>Stage 3:</b> Balance problems emerge; independence decreases.
        </li>
        <li>
          <b>Stage 4:</b> Severe disability; the person may require assistance walking.
        </li>
        <li>
          <b>Stage 5:</b> Most advanced stage; wheelchair dependence or full-time care is often required.
        </li>
      </ul>

      {/* 5. Types of Parkinson's */}
      <h2 className="disease-section-subt">
  4. Types of Parkinson’s & Related Disorders
</h2>

<ul className="disease-section-text">

  <li>
    <b>Idiopathic Parkinson’s Disease (PD):</b> 
    The most common form (about 85–90%). The exact cause is unknown.
  </li>

  <li>
    <b>Genetic/Familial Parkinson’s:</b> 
    Caused by inherited gene mutations such as LRRK2, PARK7, PINK1, or SNCA. 
    This form is rare (5–10% of cases).
  </li>

  <li>
    <b>Atypical Parkinsonism (Parkinson-Plus Syndromes):</b> 
    Conditions that resemble Parkinson’s but progress faster and respond poorly to levodopa.
    These are <i>not</i> types of Parkinson’s disease but related disorders:
    <ul>
      <li>Multiple System Atrophy (MSA)</li>
      <li>Progressive Supranuclear Palsy (PSP)</li>
      <li>Corticobasal Degeneration (CBD)</li>
      <li>Dementia with Lewy Bodies (DLB)</li>
    </ul>
  </li>

</ul>


      {/* 6. Differential Diagnosis */}
      <h2 className="disease-section-subt">
       5. Is it always Parkinson’s?
      </h2>
      <p className="disease-section-text">
        Several conditions mimic Parkinson’s symptoms but have different causes.
      </p>

      <ul className="disease-section-text">
        <li><b>Essential Tremor:</b> Tremors without rigidity or slowness.</li>
        <li><b>Drug-Induced Parkinsonism:</b> Caused by antipsychotics or anti-nausea drugs.</li>
        <li><b>Normal Pressure Hydrocephalus:</b> Causes gait problems and urinary issues.</li>
        <li><b>Stroke-related Parkinsonism:</b> Symptoms appear suddenly after vascular injury.</li>
      </ul>

      {/* 7. History */}
      <h2 className="disease-section-subt">
       6. A Brief History
      </h2>
      <p className="disease-section-text">
        Parkinson’s disease is named after <b>James Parkinson</b>, a British physician.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>The Discovery:</b> In 1817, James Parkinson described “shaking palsy,” 
          including symptoms like tremors and impaired movement.
        </li>
        <li>
          <b>The Name:</b> French neurologist Jean-Martin Charcot later named the condition
          “Parkinson’s disease” in honor of his work.
        </li>
      </ul>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        While there is no cure yet, treatments such as medication, physiotherapy,
        lifestyle changes, and advanced procedures like <b>Deep Brain Stimulation (DBS)</b>
        significantly improve quality of life. Ongoing research aims to discover
        disease-modifying therapies that slow or halt neuronal loss.
      </p>
    </div>
  );
};

export default Overview;


