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
        While there is currently no cure for Alzheimer's disease, several treatment approaches can help manage symptoms and improve quality of life. The goal of treatment is to slow cognitive decline, manage behavioral symptoms, and support both patients and caregivers.
      </p>

      {/* 1. Medications */}
      <h2 className="disease-section-subt">
        1. Medications
      </h2>
      <p className="disease-section-text">
        Certain drugs can help manage memory loss and cognitive symptoms:
      </p>
      
      <ul className="disease-section-text">
        <li>
          <b>Cholinesterase inhibitors</b> (e.g., Donepezil, Rivastigmine, Galantamine) – help increase communication between nerve cells by preventing the breakdown of acetylcholine, a chemical messenger important for memory and learning.
        </li>
        <li>
          <b>Memantine</b> – regulates glutamate activity to support memory and learning. It works differently from cholinesterase inhibitors and is often used in moderate to severe Alzheimer's.
        </li>
        <li>
          <b>Aducanumab and Lecanemab</b> – newer medications that target amyloid plaques in the brain. These are the first drugs approved to address an underlying cause of Alzheimer's rather than just symptoms.
        </li>
        <li>
          <b>Antidepressants or antipsychotics</b> – used for mood and behavior management when necessary, to address symptoms like depression, anxiety, agitation, or aggression.
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
          <b>Important Note:</b> All medications have potential side effects and varying effectiveness. It's crucial to work closely with a healthcare provider to find the right treatment plan for each individual.
        </p>
      </div>

      {/* 2. Lifestyle and Supportive Therapies */}
      <h2 className="disease-section-subt">
        2. Lifestyle and Supportive Therapies
      </h2>
      <p className="disease-section-text">
        Non-drug approaches are equally important in managing Alzheimer's:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Maintaining a structured routine</b> to reduce confusion and provide a sense of security and predictability.
        </li>
        <li>
          <b>Engaging in mental exercises</b> such as puzzles, reading, music therapy, or reminiscence therapy to stimulate cognitive function.
        </li>
        <li>
          <b>Encouraging physical activity</b> and a balanced diet. Regular exercise improves cardiovascular health, mood, and may slow cognitive decline.
        </li>
        <li>
          <b>Creating a safe home environment</b> to prevent accidents by removing hazards, improving lighting, and using safety devices.
        </li>
        <li>
          <b>Social engagement</b> – maintaining connections with family, friends, and community to reduce isolation and depression.
        </li>
      </ul>

      {/* Treatment by Stage Table */}
      <h2 className="disease-section-subt">
        3. Treatment Approaches by Stage
      </h2>
      <p className="disease-section-text">
        Treatment strategies often vary depending on the stage of Alzheimer's disease:
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
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Maintain independence and quality of life</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Medications (cholinesterase inhibitors), cognitive stimulation, exercise, future planning</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>Middle Stage (Moderate)</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Manage symptoms and behavioral changes</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Combination medications, structured routines, behavioral therapy, caregiver support</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>Late Stage (Severe)</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Comfort care and quality of life</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Pain management, nutrition support, hospice care, emotional support for family</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 4. Caregiver Support */}
      <h2 className="disease-section-subt">
        4. Caregiver Support
      </h2>
      <p className="disease-section-text">
        Alzheimer's also affects family and caregivers. Support groups, respite care, and counseling can greatly assist those providing daily care. Caregiver health and wellbeing are essential components of effective Alzheimer's management.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Join support groups</b> – Connect with others who understand the challenges through local or online communities.
        </li>
        <li>
          <b>Respite care services</b> – Take breaks to prevent caregiver burnout by using adult day programs or in-home care services.
        </li>
        <li>
          <b>Education and training</b> – Learn about the disease, communication strategies, and care techniques from healthcare professionals.
        </li>
        <li>
          <b>Self-care</b> – Maintain your own physical and mental health through exercise, adequate sleep, and stress management.
        </li>
        <li>
          <b>Legal and financial planning</b> – Work with professionals to establish power of attorney, healthcare directives, and plan for long-term care costs.
        </li>
      </ul>

      {/* 5. Emerging Therapies */}
      <h2 className="disease-section-subt">
        5. Emerging Therapies and Research
      </h2>
      <p className="disease-section-text">
        Research continues to advance our understanding of Alzheimer's disease. Current areas of investigation include:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Immunotherapy</b> – Targeting amyloid plaques and tau tangles using antibodies.
        </li>
        <li>
          <b>Gene therapy</b> – Addressing genetic risk factors, particularly for early-onset Alzheimer's.
        </li>
        <li>
          <b>Lifestyle interventions</b> – Studies examining the role of diet (Mediterranean diet, MIND diet), exercise, and cognitive training in prevention and management.
        </li>
        <li>
          <b>Biomarker development</b> – Improving early detection through blood tests and brain imaging.
        </li>
        <li>
          <b>Combination therapies</b> – Using multiple approaches simultaneously to address different aspects of the disease.
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
          <b>Clinical Trials:</b> Participating in clinical trials can provide access to cutting-edge treatments and contribute to advancing Alzheimer's research. Talk to your healthcare provider about available studies in your area.
        </p>
      </div>

      {/* 6. Managing Behavioral Symptoms */}
      <h2 className="disease-section-subt">
        6. Managing Behavioral Symptoms
      </h2>
      <p className="disease-section-text">
        Behavioral changes such as agitation, aggression, wandering, and sleep disturbances are common in Alzheimer's. Non-pharmacological strategies are typically tried first:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Identify triggers</b> – Keep a journal to track when behavioral symptoms occur and what might be causing them (pain, hunger, overstimulation).
        </li>
        <li>
          <b>Maintain calm communication</b> – Use simple sentences, maintain eye contact, and speak in a gentle, reassuring tone.
        </li>
        <li>
          <b>Redirect attention</b> – Gently guide the person to a different activity or topic when they become upset.
        </li>
        <li>
          <b>Ensure comfort</b> – Address basic needs like toileting, hunger, thirst, and comfortable temperature.
        </li>
        <li>
          <b>Create a soothing environment</b> – Reduce noise, clutter, and overstimulation. Use calming music or aromatherapy.
        </li>
      </ul>

      <div className="disease-section-divider"></div>
      
      <p className="disease-section-text">
        Remember that Alzheimer's treatment is highly individualized. What works for one person may not work for another. Regular communication with healthcare providers, patience, and flexibility in trying different approaches are key to finding the most effective management strategies. The combination of medical treatments, lifestyle modifications, and strong support systems provides the best outcomes for both patients and caregivers.
      </p>
    </div>
  );
};

export default Treatment;