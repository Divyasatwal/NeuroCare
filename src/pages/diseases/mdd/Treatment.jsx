

import React from "react";
import "../DiseaseLayout.css";

const Treatment = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Treatment and Management</h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Major Depressive Disorder (MDD) is highly treatable, and early
        intervention significantly improves outcomes. Treatment focuses on
        reducing symptoms, preventing relapse, restoring daily functioning, and
        improving emotional well-being. A combination of medication,
        psychotherapy, and lifestyle changes is often the most effective
        approach.
      </p>

      {/* 1. Medications */}
      <h2 className="disease-section-subt">1. Medications</h2>
      <p className="disease-section-text">
        Medications are commonly used to correct chemical imbalances and
        stabilize mood. They are prescribed based on the severity of symptoms,
        response to previous treatment, and patient history.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>SSRIs (Selective Serotonin Reuptake Inhibitors)</b> – First-line
          treatment options such as Sertraline, Fluoxetine, Escitalopram, and
          Paroxetine. They increase serotonin levels and have fewer side
          effects.
        </li>

        <li>
          <b>SNRIs (Serotonin–Norepinephrine Reuptake Inhibitors)</b> – Include
          Venlafaxine and Duloxetine. Useful for patients with significant
          fatigue, chronic pain, or poor response to SSRIs.
        </li>

        <li>
          <b>Atypical Antidepressants</b> – Bupropion (helps with low energy),
          Mirtazapine (helps with sleep/appetite), and Vortioxetine (improves
          cognition).
        </li>

        <li>
          <b>TCAs (Tricyclic Antidepressants)</b> – Older medications like
          Amitriptyline or Nortriptyline, used when newer drugs fail or for
          severe depression, though with more side effects.
        </li>

        <li>
          <b>MAOIs</b> – Rarely used today due to dietary restrictions but
          effective for treatment-resistant depression.
        </li>

        <li>
          <b>Antipsychotics (Adjunct Therapy)</b> – Medications such as
          Aripiprazole or Quetiapine may be added in resistant cases.
        </li>
      </ul>

      <div
        style={{
          background: "rgba(17, 100, 102, 0.08)",
          padding: "1.5rem",
          borderRadius: "8px",
          borderLeft: "4px solid #116466",
          margin: "1.5rem 0",
        }}
      >
        <p className="disease-section-text" style={{ margin: 0 }}>
          <b>Important Note:</b> Antidepressants typically take 2–6 weeks to show
          improvement. Medication choice should be tailored by a healthcare
          provider, considering benefits, side effects, and safety.
        </p>
      </div>

      {/* 2. Psychotherapy */}
      <h2 className="disease-section-subt">2. Psychotherapy</h2>
      <p className="disease-section-text">
        Psychotherapy is one of the most effective treatments for MDD and is often
        used alone in mild cases or combined with medication in moderate to severe
        cases.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Cognitive Behavioral Therapy (CBT):</b> A structured, goal-oriented therapy that helps patients identify and challenge negative thought patterns and cognitive distortions.
          CBT teaches practical strategies to replace unhelpful thoughts with realistic ones, improve problem-solving skills, and develop healthier coping mechanisms.
          It also reduces the risk of relapse by building long-term mental resilience.
        </li>
        <li>
          <b>Interpersonal Therapy (IPT):</b>  Focuses on improving interpersonal relationships and social functioning. IPT addresses role transitions (e.g., job changes, divorce), grief, or interpersonal conflicts that contribute to depressive symptoms. Strengthening communication and relationship skills can alleviate emotional distress and enhance social support networks.
        </li>
        <li>
          <b>Behavioral Activation:</b>  Targets inactivity and withdrawal, which are common in depression. Patients are encouraged to engage in structured, rewarding activities that align with personal values, gradually increasing motivation and positive experiences. This approach helps break the cycle of avoidance and low mood.
        </li>
        <li>
          <b>Psychodynamic Therapy:</b> Explores unresolved emotional conflicts, unconscious patterns, and past experiences that influence current behavior and mood. By increasing insight into these patterns, patients can better understand the roots of their depression and develop healthier ways of relating to themselves and others.
        </li>


        <li>
          <b>Family or Couples Therapy:</b> Addresses relational stress or dysfunction that may contribute to depressive symptoms. Therapy sessions involve partners or family members to improve communication, resolve conflicts, and build supportive environments, which can significantly enhance recovery and prevent relapse.
        </li>
      </ul>

      {/* 3. Lifestyle and Supportive Therapies */}
      <h2 className="disease-section-subt">3. Lifestyle and Supportive Therapies</h2>
      <p className="disease-section-text">
        Lifestyle modifications play a crucial role in stabilizing mood and
        preventing relapse.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Regular exercise</b> – Improves mood through endorphins; 30 minutes
          daily is highly beneficial.
        </li>
        <li>
          <b>Healthy sleep routine</b> – Helps regulate mood and energy levels.
        </li>
        <li>
          <b>Balanced nutrition</b> – Diets rich in omega-3, fruits, and whole
          grains support brain health.
        </li>
        <li>
          <b>Mindfulness and relaxation techniques</b> – Meditation, yoga, and
          breathing exercises reduce stress.
        </li>
        <li>
          <b>Social support</b> – Support groups and healthy relationships reduce
          isolation and improve recovery.
        </li>
      </ul>

      {/* 4. Treatment Approaches by Severity */}
      <h2 className="disease-section-subt">4. Treatment Approaches by Severity</h2>
      <p className="disease-section-text">
        Treatment strategies vary depending on the severity and impact of symptoms.
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
                Severity
              </th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
                Treatment Focus
              </th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
                Key Interventions
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <b>Mild Depression</b>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Improve coping and daily functioning
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Psychotherapy, lifestyle changes, guided self-help, exercise
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <b>Moderate Depression</b>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Reduce symptoms and prevent relapse
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Combination of medication + psychotherapy
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <b>Severe Depression</b>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Stabilize mood and ensure safety
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Medication combinations, hospitalization (if risk present),
                neuromodulation (ECT, rTMS)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 5. Advanced and Emerging Treatments */}
      <h2 className="disease-section-subt">5. Advanced and Emerging Treatments</h2>
      <p className="disease-section-text">
        For individuals who do not respond to standard treatments, newer options
        may be considered.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Electroconvulsive Therapy (ECT):</b> Highly effective for severe,
          suicidal, or treatment-resistant depression.
        </li>
        <li>
          <b>rTMS (Repetitive Transcranial Magnetic Stimulation):</b> A
          noninvasive brain-stimulation therapy with minimal side effects.
        </li>
        <li>
          <b>Ketamine / Esketamine Therapy:</b> Fast-acting treatment for
          resistant depression, reducing suicidal ideation within hours.
        </li>
        <li>
          <b>Vagus Nerve Stimulation (VNS):</b> Implanted device to improve mood
          regulation in chronic cases.
        </li>
        <li>
          <b>Psychobiotics & Nutritional Psychiatry:</b> Research exploring gut–
          brain interactions in mood disorders.
        </li>
      </ul>

      {/* 6. Relapse Prevention */}
      <h2 className="disease-section-subt">6. Relapse Prevention</h2>
      <p className="disease-section-text">
        Long-term management is essential because MDD often recurs. A relapse
        prevention plan includes:
      </p>

      <ul className="disease-section-text">
        <li>Regular follow-ups with a mental health professional</li>
        <li>Continued therapy even after improvement</li>
        <li>Maintaining sleep, exercise, and social routines</li>
        <li>Monitoring early warning signs (low energy, withdrawal, irritability)</li>
        <li>Stress-management techniques and mindfulness practices</li>
      </ul>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        MDD is highly treatable, and most individuals experience significant
        improvement with the right combination of therapy, medication, and
        lifestyle support. Recovery is not linear, but with early treatment,
        consistent follow-up, and strong support systems, long-term remission is
        achievable.
      </p>
    </div>
  );
};

export default Treatment;
