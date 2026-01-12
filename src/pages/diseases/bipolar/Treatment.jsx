// import React from "react";
// import "../DiseaseLayout.css";

// const Treatment = () => {
//   return (
//     <div className="disease-section">
//       <h2 className="disease-section-title">Treatment for Bipolar Disorder</h2>
//       <div className="disease-section-divider"></div>

//       <ul className="disease-section-text">
//         <li>Medication (Mood stabilizers, antipsychotics, antidepressants)</li>
//         <li>Psychotherapy (CBT, interpersonal therapy)</li>
//         <li>Lifestyle changes (sleep routine, stress management)</li>
//         <li>Family counseling</li>
//         <li>Hospitalization during severe episodes</li>
//       </ul>
//     </div>
//   );
// };

// export default Treatment;
import React from "react";
import "../DiseaseLayout.css";

const BipolarTreatment = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Treatment and Management of Bipolar Disorder
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Bipolar disorder is a lifelong condition, but with proper treatment, individuals can manage mood episodes, reduce relapse, and lead fulfilling lives. Treatment typically involves a combination of medications, psychotherapy, lifestyle management, and ongoing support.
      </p>

      {/* 1. Medications */}
      <h2 className="disease-section-subt">
        1. Medications
      </h2>
      <p className="disease-section-text">
        Medications are the cornerstone of bipolar disorder treatment. They help stabilize mood, prevent relapse, and manage acute episodes.
      </p>
      
      <ul className="disease-section-text">
        <li>
          <b>Mood stabilizers</b> (e.g., Lithium, Valproate, Lamotrigine) – Reduce the frequency and intensity of manic and depressive episodes.
        </li>
        <li>
          <b>Antipsychotics</b> (e.g., Olanzapine, Quetiapine, Risperidone) – Used to manage mania, mixed episodes, or severe depression; some can be used long-term for maintenance.
        </li>
        <li>
          <b>Antidepressants</b> – Used cautiously in bipolar depression, often combined with mood stabilizers to prevent triggering mania.
        </li>
        <li>
          <b>Anxiolytics or sedative-hypnotics</b> (e.g., Benzodiazepines) – Short-term use for severe agitation or insomnia during acute episodes.
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
          <b>Important Note:</b> Medication selection and dosing are individualized. Regular monitoring for side effects, blood levels (for lithium), and adherence is essential for effective management.
        </p>
      </div>

      {/* 2. Psychotherapy and Counseling */}
      <h2 className="disease-section-subt">
        2. Psychotherapy and Counseling
      </h2>
      <p className="disease-section-text">
        Psychotherapy complements medication by helping individuals understand their condition, develop coping strategies, and maintain stability.
      </p>

      <ul className="disease-section-text">
        <li><b>Cognitive Behavioral Therapy (CBT)</b> – Helps identify and change negative thought patterns, manage stress, and recognize early warning signs of mood episodes.</li>
        <li><b>Interpersonal and Social Rhythm Therapy (IPSRT)</b> – Focuses on stabilizing daily routines and sleep schedules to prevent relapse.</li>
        <li><b>Family-Focused Therapy</b> – Educates families about bipolar disorder, improves communication, and enhances support systems.</li>
        <li><b>Psychoeducation</b> – Helps patients recognize triggers, warning signs, and the importance of medication adherence.</li>
      </ul>

      {/* 3. Lifestyle and Daily Management */}
      <h2 className="disease-section-subt">
        3. Lifestyle and Daily Management
      </h2>
      <p className="disease-section-text">
        Lifestyle interventions play a vital role in mood stabilization and relapse prevention.
      </p>

      <ul className="disease-section-text">
        <li><b>Consistent sleep schedule</b> – Irregular sleep can trigger mood episodes.</li>
        <li><b>Structured daily routine</b> – Regular meals, work, exercise, and leisure activities provide stability.</li>
        <li><b>Stress management</b> – Mindfulness, yoga, meditation, or relaxation techniques reduce triggers for mood swings.</li>
        <li><b>Regular physical activity</b> – Exercise improves mood, energy, and overall health.</li>
        <li><b>Limiting alcohol and avoiding recreational drugs</b> – Substance use can worsen symptoms or interfere with medications.</li>
      </ul>

      {/* 4. Treatment Approaches by Episode */}
      <h2 className="disease-section-subt">
        4. Treatment Approaches by Episode Type
      </h2>
      <p className="disease-section-text">
        Treatment strategies vary depending on whether the patient is experiencing mania, depression, or maintenance:
      </p>

      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Episode Type</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Primary Focus</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Key Interventions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>Manic Episode</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Rapid mood stabilization</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Antipsychotics, mood stabilizers, short-term benzodiazepines, supportive therapy, sleep regulation</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>Depressive Episode</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Alleviate depressive symptoms safely</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Mood stabilizers, cautious use of antidepressants, psychotherapy, exercise, social support</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>Maintenance / Prevention</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Prevent relapse and maintain daily functioning</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Long-term mood stabilizers or antipsychotics, lifestyle management, therapy, monitoring early warning signs</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 5. Caregiver and Social Support */}
      <h2 className="disease-section-subt">
        5. Caregiver and Social Support
      </h2>
      <p className="disease-section-text">
        Support from family, friends, and mental health professionals is critical to effective bipolar disorder management.
      </p>

      <ul className="disease-section-text">
        <li><b>Family education</b> – Helps caregivers recognize early warning signs and provide appropriate support.</li>
        <li><b>Support groups</b> – Connect with others living with bipolar disorder or caregivers to share experiences and coping strategies.</li>
        <li><b>Workplace and school accommodations</b> – Adjusting schedules and expectations can reduce stress and improve functioning.</li>
      </ul>

      {/* 6. Emerging Therapies */}
      <h2 className="disease-section-subt">
        6. Emerging Therapies and Research
      </h2>
      <p className="disease-section-text">
        Research is ongoing to improve treatment options for bipolar disorder:
      </p>

      <ul className="disease-section-text">
        <li><b>Novel mood stabilizers and antipsychotics</b> – Development of medications with fewer side effects and better efficacy.</li>
        <li><b>Neurostimulation therapies</b> – Transcranial magnetic stimulation (TMS) or electroconvulsive therapy (ECT) for treatment-resistant episodes.</li>
        <li><b>Digital interventions</b> – Apps for mood tracking, adherence reminders, and teletherapy support.</li>
        <li><b>Genetic and biomarker research</b> – Understanding individual response to treatments for personalized care.</li>
      </ul>

      <div style={{
        background: 'rgba(212, 93, 0, 0.08)',
        padding: '1.5rem',
        borderRadius: '8px',
        borderLeft: '4px solid #d45d00',
        margin: '1.5rem 0'
      }}>
        <p className="disease-section-text" style={{margin: 0}}>
          <b>Clinical Trials:</b> Participating in research studies may provide access to cutting-edge therapies and contribute to advancing bipolar disorder treatment. Consult your psychiatrist for information on available studies.
        </p>
      </div>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Effective management of bipolar disorder is highly individualized. Combining medications, therapy, lifestyle interventions, and strong support systems offers the best chance for stability, improved quality of life, and reduced risk of relapse. Early intervention and ongoing monitoring are key to long-term success.
      </p>
    </div>
  );
};

export default BipolarTreatment;
