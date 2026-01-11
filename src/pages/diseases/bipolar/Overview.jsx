// import React from "react";
// import "../DiseaseLayout.css";

// const Overview = () => {
//   return (
//     <div className="disease-section">
//       <h2 className="disease-section-title">Overview: Understanding Bipolar Disorder</h2>
//       <div className="disease-section-divider"></div>

//       <p className="disease-section-text">
//         Bipolar disorder is a chronic mental health condition characterized by
//         extreme mood shifts, ranging from emotional highs (mania or hypomania)
//         to intense lows (depression). These episodes can affect sleep, energy,
//         activity levels, judgment, and behavior.
//       </p>
//     </div>
//   );
// };

// export default Overview;

import React from "react";
import "../DiseaseLayout.css";

const BipolarOverview = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Overview: Understanding Bipolar Disorder
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Bipolar disorder (BD) is a complex mental health condition characterized by extreme and often unpredictable mood swings, including emotional highs (mania or hypomania) and lows (depression). These mood changes can affect energy, activity levels, judgment, sleep, and the ability to carry out everyday tasks. The disorder is considered multifactorial, with contributions from genetic, neurobiological, and environmental factors. Early recognition, diagnosis, and treatment are crucial to managing symptoms, preventing severe episodes, and improving long-term outcomes. Treatments include medication, psychotherapy, and lifestyle management strategies tailored to each individual.
      </p>

      <p className="disease-section-text">
        <b>Keywords:</b> Bipolar disorder, mood swings, mania, hypomania, depression, mood stabilizers, psychotherapy, mental health, neurobiology, risk factors
      </p>

      <h2 className="disease-section-title">  
        Introduction
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Bipolar disorder is a chronic and recurring mental health condition that disrupts normal emotional states. Unlike typical mood changes, bipolar episodes are intense, prolonged, and can significantly impact daily functioning, relationships, and work. Individuals with bipolar disorder often struggle to maintain stability without proper treatment and support.
      </p>

      {/* 1. Types of Bipolar Disorder */}
      <h2 className="disease-section-subt">
        1. Types of Bipolar Disorder
      </h2>
      <ul className="disease-section-text">
        <li>
          <b>Bipolar I Disorder:</b> Involves at least one severe manic episode, often accompanied by depressive episodes. Manic episodes can lead to risky behaviors or require hospitalization.
        </li>
        <li>
          <b>Bipolar II Disorder:</b> Characterized by hypomanic episodes (less severe than mania) and major depressive episodes. Hypomania may improve productivity but still disrupts daily life.
        </li>
        <li>
          <b>Cyclothymic Disorder:</b> Milder, long-term mood fluctuations with periods of hypomania and mild depression, lasting at least two years. It can affect work performance and relationships if untreated.
        </li>
        <li>
          <b>Other Specified Bipolar Disorders:</b> Includes atypical presentations where mood symptoms do not fit the classic patterns of Bipolar I, II, or Cyclothymia.
        </li>
      </ul>

      {/* 2. Symptoms */}
      <h2 className="disease-section-subt">
        2. Symptoms: Mania vs Depression
      </h2>
      <p className="disease-section-text">
        Bipolar disorder involves alternating episodes of mania/hypomania and depression. Recognizing the differences is critical for diagnosis and management.
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Manic/Hypomanic Episode</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Depressive Episode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Elevated, irritable, or euphoric mood</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Persistent sadness, emptiness, or hopelessness</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Increased energy and activity, often restless</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Low energy, fatigue, and lack of motivation</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Rapid speech, racing thoughts, distractibility</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Difficulty concentrating, indecisiveness</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Impulsive or risky behaviors, poor judgment</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Withdrawal from social activities, loss of interest in hobbies</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Decreased need for sleep without fatigue</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Oversleeping or insomnia, changes in appetite</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Inflated self-esteem or grandiosity</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Feelings of worthlessness or guilt</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. Causes & Risk Factors */}
      <h2 className="disease-section-subt">
        3. Causes & Risk Factors
      </h2>
      <ul className="disease-section-text">
        <li><b>Genetic Factors:</b> Family history of bipolar disorder or other mood disorders increases susceptibility.</li>
        <li><b>Neurobiological Factors:</b> Imbalances in neurotransmitters such as dopamine, serotonin, and norepinephrine.</li>
        <li><b>Environmental Factors:</b> Stressful life events, trauma, and major life changes can trigger episodes.</li>
        <li><b>Medical Conditions & Substance Use:</b> Thyroid disorders, neurological illnesses, and misuse of alcohol or drugs can worsen symptoms.</li>
      </ul>

      {/* 4. Diagnosis */}
      <h2 className="disease-section-subt">
        4. Diagnosis
      </h2>
      <p className="disease-section-text">
        Diagnosis requires a comprehensive psychiatric evaluation, including a detailed personal and family history, symptom assessment, and ruling out other medical or psychiatric conditions. Clinicians often use the DSM-5 criteria and mood-tracking methods to ensure accurate diagnosis. Early diagnosis and ongoing monitoring are key to reducing episode severity and improving daily functioning.
      </p>

      {/* 5. Treatment & Management */}
      <h2 className="disease-section-subt">
        5. Treatment & Management
      </h2>
      <p className="disease-section-text">
        Effective management typically combines medication, therapy, and lifestyle adjustments:
      </p>
      <ul className="disease-section-text">
        <li><b>Medications:</b> Mood stabilizers (lithium), antipsychotics, and sometimes antidepressants (carefully monitored).</li>
        <li><b>Psychotherapy:</b> Cognitive Behavioral Therapy (CBT), interpersonal therapy, and family-focused therapy improve coping skills.</li>
        <li><b>Lifestyle & Self-Care:</b> Consistent sleep, exercise, stress management, and avoiding substances help stabilize mood.</li>
        <li><b>Monitoring & Support:</b> Regular follow-ups, mood diaries, and support networks improve adherence and reduce relapse risk.</li>
      </ul>

      {/* 6. Impact on Life */}
      <h2 className="disease-section-subt">
        6. Impact on Daily Life
      </h2>
      <p className="disease-section-text">
        Bipolar disorder can affect work, education, and relationships. During manic episodes, individuals may take risks or make impulsive decisions. Depressive episodes can impair productivity and motivation. Early intervention, treatment adherence, and support systems are essential for maintaining stability and improving quality of life.
      </p>

      {/* 7. Importance of Early Intervention */}
      <h2 className="disease-section-subt">
        7. Why Early Intervention Matters
      </h2>
      <p className="disease-section-text">
        Early diagnosis and treatment reduce the frequency and severity of mood episodes, prevent hospitalizations, and minimize long-term complications. Education, awareness, and mental health support help individuals manage symptoms effectively and lead fulfilling lives.
      </p>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Bipolar disorder is a lifelong condition, but with timely and consistent treatment, individuals can achieve mood stability and maintain personal, social, and professional functioning. Ongoing research continues to advance understanding of this complex disorder and improve treatment options.
      </p>
    </div>
  );
};

export default BipolarOverview;
