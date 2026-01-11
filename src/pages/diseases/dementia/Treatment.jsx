// import React from "react";
// import "../DiseaseLayout.css";

// const Treatment = () => {
//   return (
//     <div>
//       <h2 className="disease-section-title">Treatment</h2>
//       <div className="disease-section-divider"></div>
//       <p className="disease-section-text">
//         While there is no cure for dementia, treatments can help manage symptoms
//         and improve quality of life. Medications such as cholinesterase inhibitors
//         and memantine may slow cognitive decline in some cases.  
//         Non-drug therapies, including cognitive training, physical activity,
//         and social engagement, are also important for maintaining function
//         and emotional well-being.
//       </p>
//     </div>
//   );
// };

// export default Treatment;

import React from "react";
import "../DiseaseLayout.css";

const Treatment = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Treatment and Management
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Dementia treatment focuses on managing symptoms, slowing progression (when possible), and improving quality of life. Since dementia can have multiple causes—such as Alzheimer’s disease, vascular dementia, Lewy body dementia, and frontotemporal dementia—treatment plans are highly individualized and depend on the underlying type.
      </p>

      {/* 1. Medications */}
      <h2 className="disease-section-subt">
        1. Medications
      </h2>
      <p className="disease-section-text">
        Medications may help slow cognitive decline, reduce behavioral symptoms, and enhance daily functioning:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Cholinesterase inhibitors</b> (Donepezil, Rivastigmine, Galantamine) – commonly used for Alzheimer’s-type dementia and Lewy body dementia to support memory and cognition.
        </li>
        <li>
          <b>Memantine</b> – used for moderate to severe dementia to help regulate glutamate activity and support cognitive function.
        </li>
        <li>
          <b>Parkinson’s medications</b> – sometimes used in Lewy body dementia to improve movement symptoms.
        </li>
        <li>
          <b>Antidepressants</b> – to manage depression and anxiety, which are common in dementia patients.
        </li>
        <li>
          <b>Antipsychotics (used with caution)</b> – may be prescribed for severe agitation or hallucinations, especially in Lewy body and Alzheimer’s dementia.
        </li>
      </ul>

      <div style={{
        background: 'rgba(17, 100, 102, 0.08)',
        padding: '1.5rem',
        borderRadius: '8px',
        borderLeft: '4px solid #116466',
        margin: '1.5rem 0'
      }}>
        <p className="disease-section-text" style={{margin: 0}}>
          <b>Important Note:</b> Medications do not cure dementia but can help manage symptoms. They must be prescribed and monitored carefully, especially since side effects vary depending on the dementia type.
        </p>
      </div>

      {/* 2. Lifestyle and Supportive Therapies */}
      <h2 className="disease-section-subt">
        2. Lifestyle and Supportive Therapies
      </h2>
      <p className="disease-section-text">
        Non-medical approaches are essential in dementia management and help maintain independence and wellbeing:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Structured routines</b> – reduce confusion and help patients feel more secure.
        </li>
        <li>
          <b>Cognitive stimulation activities</b> such as puzzles, memory games, music therapy, and storytelling to strengthen thinking skills.
        </li>
        <li>
          <b>Physical exercise</b> – improves mood, mobility, sleep quality, and slows cognitive decline.
        </li>
        <li>
          <b>Healthy diet</b> – following the MIND or Mediterranean diet supports brain health.
        </li>
        <li>
          <b>Safe living environment</b> – reduce hazards, install grab bars, improve lighting, and simplify home spaces.
        </li>
        <li>
          <b>Social interaction</b> – reduces depression, enhances emotional wellbeing, and slows decline.
        </li>
      </ul>

      {/* 3. Treatment Approaches by Stage */}
      <h2 className="disease-section-subt">
        3. Treatment Approaches by Stage
      </h2>
      <p className="disease-section-text">
        Treatment strategies change depending on the stage and type of dementia:
      </p>

      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Stage</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Primary Treatment Focus</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Key Interventions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>Early Stage (Mild)</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Maintain independence and cognitive health</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Cognitive exercises, lifestyle changes, medications (if applicable), future planning</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>Middle Stage (Moderate)</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Manage behavioral and cognitive symptoms</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Medication adjustments, structured routines, behavioral strategies, caregiver support</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>Late Stage (Severe)</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Comfort care and safety</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>24/7 supervision, pain and comfort management, nutrition support, hospice care</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 4. Caregiver Support */}
      <h2 className="disease-section-subt">
        4. Caregiver Support
      </h2>
      <p className="disease-section-text">
        Dementia significantly impacts caregivers. Emotional, physical, and practical support helps prevent burnout and improves quality of care.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Support groups</b> – connect with others facing similar challenges.
        </li>
        <li>
          <b>Respite care</b> – temporary relief through adult day centers, trained professionals, or short-term residential care.
        </li>
        <li>
          <b>Caregiver education</b> – learn communication techniques, safety measures, and ways to manage difficult behaviors.
        </li>
        <li>
          <b>Mental and physical self-care</b> – exercise, sleep, and stress management for the caregiver.
        </li>
        <li>
          <b>Legal and financial planning</b> – plan early for long-term care needs, decision-making, and budgeting.
        </li>
      </ul>

      {/* 5. Emerging Therapies */}
      <h2 className="disease-section-subt">
        5. Emerging Therapies and Research
      </h2>
      <p className="disease-section-text">
        Research is ongoing to better understand dementia and develop new treatments:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Targeted therapies</b> – for specific dementia types, such as drugs affecting tau proteins, alpha-synuclein, or vascular health.
        </li>
        <li>
          <b>Immunotherapy</b> – similar to Alzheimer’s research, focusing on removing abnormal brain proteins.
        </li>
        <li>
          <b>Digital cognitive training</b> – computer-based programs designed to strengthen memory and attention.
        </li>
        <li>
          <b>Lifestyle research</b> – exploring how diet, exercise, and sleep influence dementia progression.
        </li>
        <li>
          <b>Biomarker and blood test development</b> – improving early detection and accurate diagnosis.
        </li>
      </ul>

      <div style={{
        background: 'rgba(212, 93, 0, 0.08)',
        padding: '1.5rem',
        borderRadius: '8px',
        borderLeft: '4px solid #d45d00',
        margin: '1.5rem 0'
      }}>
        <p className="disease-section-text" style={{margin: 0}}>
          <b>Clinical Trials:</b> Participating in clinical trials offers access to emerging therapies and plays a crucial role in advancing dementia research. Speak with your healthcare provider to learn about available clinical studies.
        </p>
      </div>

      {/* 6. Managing Behavioral Symptoms */}
      <h2 className="disease-section-subt">
        6. Managing Behavioral Symptoms
      </h2>
      <p className="disease-section-text">
        Behavioral symptoms vary depending on the dementia type. Non-drug approaches are preferred initially:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Identify triggers</b> – observe patterns related to agitation, confusion, or aggression.
        </li>
        <li>
          <b>Use calm communication</b> – short sentences, reassurance, and patience.
        </li>
        <li>
          <b>Redirect attention</b> – shift to a different, soothing activity when distress occurs.
        </li>
        <li>
          <b>Ensure comfort</b> – address hunger, pain, thirst, fatigue, and temperature discomfort.
        </li>
        <li>
          <b>Create a peaceful environment</b> – reduce noise, clutter, and unnecessary stimulation.
        </li>
      </ul>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Dementia treatment is personalized and requires a combination of medications, supportive therapies, environmental adjustments, and strong caregiver involvement. With early diagnosis and consistent care, patients can maintain quality of life and function for a longer period.
      </p>
    </div>
  );
};

export default Treatment;

