/*import React from "react";
import "../DiseaseLayout.css";

const Treatment = () => {
  return (
    <div className="content-section">
      <h1>Treatment & Management</h1>
      <p>
        Although Parkinson’s has no cure, various treatments can help manage 
        symptoms and improve daily functioning.
      </p>

      <h3>Medications</h3>
      <ul>
        <li><strong>Levodopa:</strong> Most effective drug for movement symptoms.</li>
        <li><strong>Dopamine agonists:</strong> Mimic dopamine in the brain.</li>
        <li><strong>MAO-B inhibitors:</strong> Slow dopamine breakdown.</li>
        <li>Drugs for tremor, sleep, constipation, or mood.</li>
      </ul>

      <h3>Therapies</h3>
      <ul>
        <li>Physiotherapy for balance & mobility</li>
        <li>Speech therapy</li>
        <li>Occupational therapy</li>
      </ul>

      <h3>Surgical Options</h3>
      <ul>
        <li><strong>Deep Brain Stimulation (DBS):</strong> Reduces tremors & rigidity in advanced cases.</li>
      </ul>
    </div>
  );
};

export default Treatment;*/

// import React from "react";
// import "../DiseaseLayout.css";

// const Treatment = () => {
//   return (
//     <div className="disease-section">
//       <h2 className="disease-section-title">Treatment for Parkinson’s Disease</h2>
//       <div className="disease-section-divider"></div>
//       <p className="disease-section-text">
//         Treatment may include medications that increase dopamine levels,
//         physical therapy, and in some cases, deep brain stimulation (DBS).
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
      <h2 className="disease-section-title">Treatment and Management</h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        While there is currently no cure for Parkinson’s disease, several treatment
        approaches can effectively manage symptoms, improve mobility, and enhance
        quality of life. Treatment aims to restore dopamine balance, reduce motor
        complications, and support both patients and caregivers throughout disease
        progression.
      </p>

      {/* 1. Medications */}
      <h2 className="disease-section-subt">1. Medications</h2>
      <p className="disease-section-text">
        Medications are the cornerstone of Parkinson’s treatment. They help control tremors,
        stiffness, slowness, and other motor symptoms.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Levodopa (L-DOPA) with Carbidopa</b> – The most effective treatment.
          Levodopa converts into dopamine in the brain, while carbidopa prevents nausea.
        </li>
        <li>
          <b>Dopamine agonists</b> (e.g., Pramipexole, Ropinirole, Rotigotine) –
          Mimic dopamine’s action and help reduce motor fluctuations.
        </li>
        <li>
          <b>MAO-B inhibitors</b> (e.g., Rasagiline, Selegiline) – Slow the breakdown of dopamine.
        </li>
        <li>
          <b>COMT inhibitors</b> (e.g., Entacapone) – Extend the effect of Levodopa.
        </li>
        <li>
          <b>Anticholinergics</b> – Help control tremor, especially in younger patients.
        </li>
        <li>
          <b>Amantadine</b> – Used for dyskinesia (involuntary movements) caused by long-term Levodopa use.
        </li>
      </ul>

      <div
        style={{
          background: "rgba(17,100,102,0.08)",
          padding: "1.5rem",
          borderRadius: "8px",
          borderLeft: "4px solid #116466",
          margin: "1.5rem 0",
        }}
      >
        <p className="disease-section-text" style={{ margin: 0 }}>
          <b>Important Note:</b> Parkinson’s medications may require adjustments over time.
          Close coordination with a neurologist or movement disorder specialist is essential.
        </p>
      </div>

      {/* 2. Lifestyle and Supportive Therapies */}
      <h2 className="disease-section-subt">2. Lifestyle and Supportive Therapies</h2>
      <p className="disease-section-text">
        Non-medication approaches are equally important for managing Parkinson’s symptoms
        and maintaining independence.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Physical therapy</b> – Improves balance, flexibility, and gait.
        </li>
        <li>
          <b>Occupational therapy</b> – Helps with daily activities like dressing and writing.
        </li>
        <li>
          <b>Speech therapy</b> (LSVT LOUD) – Enhances speech volume and clarity.
        </li>
        <li>
          <b>Regular exercise</b> – Walking, yoga, tai chi, and cycling improve mobility
          and reduce stiffness.
        </li>
        <li>
          <b>Healthy diet</b> – High-fiber foods help ease constipation; antioxidants may support brain health.
        </li>
        <li>
          <b>Structured daily routine</b> – Helps manage fatigue and mood.
        </li>
      </ul>

      {/* 3. Treatment Approaches by Stage */}
      <h2 className="disease-section-subt">3. Treatment Approaches by Stage</h2>
      <p className="disease-section-text">
        Treatment needs evolve as Parkinson’s progresses. Below is a simplified overview.
      </p>

      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #ddd",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
                Stage
              </th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
                Primary Treatment Focus
              </th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
                Key Interventions
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <b>Early Stage (Mild)</b>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Manage mild symptoms, maintain function
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Low-dose Levodopa or dopamine agonists, exercise, physical therapy
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <b>Middle Stage (Moderate)</b>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Control motor fluctuations and daily limitations
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Levodopa adjustments, COMT/MAO-B inhibitors, therapy, mobility aids
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <b>Advanced Stage (Severe)</b>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Reduce complications and provide supportive care
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                DBS surgery, continuous medication infusions, palliative care
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 4. Caregiver Support */}
      <h2 className="disease-section-subt">4. Caregiver Support</h2>
      <p className="disease-section-text">
        Parkinson’s affects families as much as individuals. Proper support helps prevent
        burnout and improves the quality of care.
      </p>

      <ul className="disease-section-text">
        <li><b>Join support groups</b> – Share experiences and learn coping skills.</li>
        <li>
          <b>Respite care</b> – Temporary breaks for caregivers through day-care centers
          or in-home services.
        </li>
        <li>
          <b>Caregiver training</b> – Learn safe mobility support, communication, and medication handling.
        </li>
        <li>
          <b>Self-care</b> – Ensuring proper rest, nutrition, and stress management.
        </li>
        <li>
          <b>Legal and financial preparation</b> – Plan ahead for long-term care and decision-making.
        </li>
      </ul>

      {/* 5. Emerging Therapies */}
      <h2 className="disease-section-subt">5. Emerging Therapies and Research</h2>
      <p className="disease-section-text">
        Parkinson’s research is rapidly evolving, with new treatments focusing on slowing
        disease progression and improving quality of life.
      </p>

      <ul className="disease-section-text">
        <li><b>Stem cell therapy</b> – Exploring ways to regenerate dopamine-producing neurons.</li>
        <li><b>Gene therapy</b> – Aiming to enhance dopamine production or protect neurons.</li>
        <li><b>Immunotherapy</b> – Targeting alpha-synuclein protein buildup.</li>
        <li>
          <b>Neuroprotective drugs</b> – Aiming to slow or halt disease progression (still under study).
        </li>
        <li><b>Advances in DBS</b> – Adaptive deep brain stimulation adjusts electrically in real-time.</li>
      </ul>

      <div
        style={{
          background: "rgba(212, 93, 0, 0.08)",
          padding: "1.5rem",
          borderRadius: "8px",
          borderLeft: "4px solid #d45d00",
          margin: "1.5rem 0",
        }}
      >
        <p className="disease-section-text" style={{ margin: 0 }}>
          <b>Clinical Trials:</b> Many patients benefit from participating in
          clinical trials exploring new therapies, surgical techniques, and
          neuroprotective strategies.
        </p>
      </div>

      {/* 6. Managing Behavioral and Non-Motor Symptoms */}
      <h2 className="disease-section-subt">6. Managing Behavioral & Non-Motor Symptoms</h2>
      <p className="disease-section-text">
        Parkinson’s also causes many non-motor symptoms that require targeted management.
      </p>

      <ul className="disease-section-text">
        <li><b>Identify triggers</b> – Track sleep, stress, medications, and mood changes.</li>
        <li><b>Treat depression/anxiety</b> – Therapy or medications when required.</li>
        <li><b>Address sleep problems</b> – Improve sleep hygiene; medications only if necessary.</li>
        <li><b>Manage hallucinations</b> – Adjust medications; use antipsychotics only when needed.</li>
        <li><b>Control autonomic symptoms</b> – Hydration, fiber-rich diet, and lifestyle changes.</li>
      </ul>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Parkinson’s treatment is highly individualized. Optimal results come from combining
        medications, lifestyle modifications, therapy, and emotional support. Regular follow-ups
        with healthcare professionals ensure the treatment plan evolves with changing needs.
      </p>
    </div>
  );
};

export default Treatment;
