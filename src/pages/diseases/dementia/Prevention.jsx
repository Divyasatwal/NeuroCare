// import React from "react";
// import "../DiseaseLayout.css";

// const Prevention = () => {
//   return (
//     <div>
//       <h2 className="disease-section-title">Prevention</h2>
//       <div className="disease-section-divider"></div>
//       <p className="disease-section-text">
//         While dementia cannot always be prevented, maintaining a healthy lifestyle helps reduce risk.
//         Regular exercise, balanced nutrition, mental stimulation, and controlling blood pressure
//         can contribute to better brain health.
//       </p>
//     </div>
//   );
// };

// export default Prevention;

import React from "react";
import "../DiseaseLayout.css";

const Prevention = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Prevention / Early Detection
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Dementia cannot be entirely prevented, but adopting healthy lifestyle habits can
        significantly reduce risk, slow cognitive decline, and support long-term brain
        health. Early detection plays an important role in managing symptoms, planning
        care, and improving quality of life.
      </p>

      {/* 1. Risk Reduction Strategies */}
      <h2 className="disease-section-subt">
        1. Risk Reduction Strategies
      </h2>
      <p className="disease-section-text">
        Research shows that up to 40% of dementia cases may be influenced by modifiable
        lifestyle factors. The following strategies support brain health:
      </p>

      <h3 style={headingStyle}>Physical Exercise</h3>
      <ul className="disease-section-text">
        <li><b>Aerobic activity</b> – 150 minutes per week improves blood circulation and reduces cognitive decline risk.</li>
        <li><b>Strength training</b> – 2–3 sessions weekly improve metabolism and brain-body connection.</li>
        <li><b>Balance & flexibility</b> – Yoga, tai chi, and stretching reduce fall risks and boost overall wellness.</li>
      </ul>

      <h3 style={headingStyle}>Brain-Healthy Diet</h3>
      <ul className="disease-section-text">
        <li><b>Mediterranean diet</b> – Proven to support cognitive longevity with plant-based and heart-healthy foods.</li>
        <li><b>MIND diet</b> – Focuses on leafy greens, berries, nuts, and fish to support memory and thinking.</li>
        <li><b>Key nutrients:</b> Omega-3, antioxidants, B vitamins, vitamin D, and folate.</li>
        <li><b>Limit:</b> Sugary foods, processed meals, saturated fats, and alcohol.</li>
      </ul>

      <h3 style={headingStyle}>Mental Stimulation</h3>
      <ul className="disease-section-text">
        <li><b>Skill learning</b> – New hobbies, languages, or music strengthen neural pathways.</li>
        <li><b>Brain games</b> – Puzzles, reading, and strategy games improve cognitive flexibility.</li>
        <li><b>Cognitive training apps</b> – Some computerized programs help maintain processing speed.</li>
        <li><b>Challenging work & tasks</b> – Build “cognitive reserve” to delay dementia symptoms.</li>
      </ul>

      <h3 style={headingStyle}>Social Engagement</h3>
      <ul className="disease-section-text">
        <li><b>Stay connected</b> – Regular communication protects emotional and mental health.</li>
        <li><b>Community participation</b> – Groups, clubs, and volunteering support brain resilience.</li>
        <li><b>Avoid isolation</b> – Loneliness significantly increases dementia risk.</li>
      </ul>

      {/* 2. Cardiovascular & Metabolic Health */}
      <h2 className="disease-section-subt">
        2. Managing Cardiovascular and Metabolic Health
      </h2>
      <p className="disease-section-text">
        Conditions that affect the heart and blood vessels also affect the brain.
        Managing them reduces dementia risk and supports cognitive function:
      </p>

      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={tableStyle}>
          <thead>
            <tr style={theadStyle}>
              <th style={thStyle}>Condition</th>
              <th style={thStyle}>Impact on Brain</th>
              <th style={thStyle}>Prevention Strategy</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}><b>{row.condition}</b></td>
                <td style={tdStyle}>{row.impact}</td>
                <td style={tdStyle}>{row.strategy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 3. Additional Risk Factors */}
      <h2 className="disease-section-subt">
        3. Additional Risk Factors to Address
      </h2>
      <ul className="disease-section-text">
        <li><b>Head injuries</b> – Traumatic brain injuries increase dementia risk. Wear helmets, use seatbelts.</li>
        <li><b>Smoking</b> – Damages blood vessels and accelerates cognitive decline.</li>
        <li><b>Excessive alcohol use</b> – Heavy drinking may cause alcohol-related dementia.</li>
        <li><b>Hearing loss</b> – Treat early; untreated hearing loss increases cognitive strain.</li>
        <li><b>Air pollution</b> – Linked to inflammation and cognitive decline; limit exposure when possible.</li>
      </ul>

      {/* 4. Early Detection */}
      <h2 className="disease-section-subt">
        4. Early Detection: Know the Warning Signs
      </h2>
      <p className="disease-section-text">
        Identifying dementia early allows better treatment outcomes and care planning.
        Common early signs include:
      </p>

      <div style={warningGridStyle}>
        {warningSigns.map(item => (
          <div key={item.num} style={warningBoxStyle}>
            <div style={warningNumStyle}>{item.num}</div>
            <h4 style={warningTitleStyle}>{item.sign}</h4>
            <p style={warningDescStyle}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div style={doctorNoteStyle}>
        <p className="disease-section-text" style={{ margin: 0 }}>
          <b>When to See a Doctor:</b> If several early symptoms are present, seek a
          medical evaluation. Early assessment provides more treatment options,
          supports planning, and improves long-term outcomes.
        </p>
      </div>

      {/* 5. Screening Tools */}
      <h2 className="disease-section-subt">
        5. Screening and Diagnostic Tools
      </h2>
      <p className="disease-section-text">
        Tools used to evaluate dementia include:
      </p>

      <ul className="disease-section-text">
        <li><b>Cognitive tests</b> – MMSE, MoCA assess memory, attention, and reasoning.</li>
        <li><b>Neuropsychological exams</b> – In-depth cognitive evaluation by specialists.</li>
        <li><b>Brain imaging</b> – MRI & CT help rule out structural causes; PET shows brain activity and protein buildup.</li>
        <li><b>Blood biomarkers</b> – Tests for proteins linked to dementia (tau, amyloid, neurofilament light).</li>
        <li><b>Genetic testing</b> – Useful for inherited forms of dementia (frontotemporal dementia, rare familial cases).</li>
      </ul>

      {/* 6. Evidence-Based Framework */}
      <h2 className="disease-section-subt">
        6. Evidence-Based Prevention Framework
      </h2>
      <p className="disease-section-text">
        Studies like FINGER, MAPT, and several WHO-supported programs show that
        multidomain interventions reduce dementia risk. These include:
      </p>

      <div style={pointerGridStyle}>
        {pointerItems.map((item, index) => (
          <div key={index} style={pointerBoxStyle}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
            <h4 style={pointerTitleStyle}>{item.title}</h4>
            <p style={pointerDescStyle}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 7. Prevention Plan */}
      <h2 className="disease-section-subt">
        7. Creating Your Personal Prevention Plan
      </h2>
      <p className="disease-section-text">
        A personalized prevention plan helps maintain brain health:
      </p>

      <div style={planBoxStyle}>
        <ol className="disease-section-text" style={{ margin: 0 }}>
          <li><b>Review lifestyle factors</b> – Diet, exercise, sleep, stress, and social activity.</li>
          <li><b>Set small goals</b> – Gradually build long-term habits.</li>
          <li><b>Monitor health</b> – Regular check-ups for blood pressure, diabetes, cholesterol, and cognition.</li>
          <li><b>Reduce stress</b> – Practice mindfulness or relaxation techniques.</li>
          <li><b>Stay informed</b> – Follow dementia research and recommendations.</li>
          <li><b>Build support</b> – Involve loved ones and caregivers in your plan.</li>
          <li><b>Track progress</b> – Use journals or apps to track routines and improvements.</li>
        </ol>
      </div>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        While dementia cannot be completely prevented, a proactive and healthy lifestyle
        can significantly reduce risk and improve long-term cognitive wellbeing. Small,
        consistent steps taken today can help protect brain health for the future.
      </p>
    </div>
  );
};

/* ---------- INLINE STYLES & DATA (same style as your code) ---------- */

const headingStyle = {
  fontSize: "1.1rem",
  color: "#116466",
  marginTop: "1.5rem",
  marginBottom: "0.8rem",
  fontWeight: "bold",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  border: "1px solid #ddd",
};

const theadStyle = {
  backgroundColor: "#f4f4f4",
  textAlign: "left",
};

const thStyle = {
  padding: "12px",
  borderBottom: "2px solid #ddd",
};

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
};

const tableRows = [
  {
    condition: "High Blood Pressure",
    impact: "Damages blood vessels, reducing oxygen supply to the brain",
    strategy: "Medication, heart-healthy diet, exercise, stress management",
  },
  {
    condition: "Diabetes",
    impact: "Affects blood flow and increases inflammation, harming neurons",
    strategy: "Blood sugar control, regular activity, balanced diet",
  },
  {
    condition: "High Cholesterol",
    impact: "Leads to plaque buildup that affects brain blood flow",
    strategy: "Healthy diet, medications if needed, exercise",
  },
  {
    condition: "Obesity",
    impact: "Increases inflammation and raises dementia risk",
    strategy: "Weight control through diet and activity",
  },
  {
    condition: "Sleep Disorders",
    impact: "Poor sleep interferes with waste clearance in the brain",
    strategy: "Treat sleep apnea, maintain sleep hygiene",
  },
  {
    condition: "Depression",
    impact: "Associated with increased dementia risk",
    strategy: "Therapy, support systems, healthy routines",
  },
];

const warningSigns = [
  { num: "1", sign: "Memory Loss", desc: "Trouble remembering new information or recent events" },
  { num: "2", sign: "Difficulty Planning", desc: "Struggling with tasks requiring concentration or organization" },
  { num: "3", sign: "Trouble Completing Tasks", desc: "Difficulty performing everyday routines" },
  { num: "4", sign: "Confusion", desc: "Disorientation regarding time or familiar places" },
  { num: "5", sign: "Visual Problems", desc: "Issues with judging distance or recognizing objects" },
  { num: "6", sign: "Communication Issues", desc: "Difficulty finding words or following conversations" },
  { num: "7", sign: "Misplacing Items", desc: "Putting things in odd places; unable to retrace steps" },
  { num: "8", sign: "Poor Judgment", desc: "Difficulty making decisions or managing finances" },
  { num: "9", sign: "Withdrawal", desc: "Reduced interest in hobbies or social interactions" },
  { num: "10", sign: "Mood Changes", desc: "Increased anxiety, depression, or irritability" },
];

const warningGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1rem",
  margin: "1.5rem 0",
};

const warningBoxStyle = {
  background: "rgba(17, 100, 102, 0.05)",
  padding: "1rem",
  borderRadius: "8px",
  borderLeft: "3px solid #116466",
};

const warningNumStyle = {
  background: "#116466",
  color: "white",
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "0.9rem",
  marginBottom: "0.5rem",
};

const warningTitleStyle = {
  margin: 0,
  fontSize: "1rem",
  color: "#116466",
  fontWeight: "bold",
};

const warningDescStyle = {
  margin: 0,
  fontSize: "0.9rem",
  color: "#333",
  lineHeight: "1.5",
};

const doctorNoteStyle = {
  background: "rgba(212, 93, 0, 0.08)",
  padding: "1.5rem",
  borderRadius: "8px",
  borderLeft: "4px solid #d45d00",
  margin: "1.5rem 0",
};

const pointerGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "1.5rem",
  margin: "1.5rem 0",
};

const pointerBoxStyle = {
  background: "linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.05))",
  padding: "1.5rem",
  borderRadius: "12px",
  border: "2px solid rgba(17, 100, 102, 0.2)",
};

const pointerTitleStyle = {
  color: "#116466",
  marginBottom: "0.5rem",
  fontSize: "1.1rem",
};

const pointerDescStyle = {
  margin: 0,
  fontSize: "0.9rem",
  color: "#333",
};

const pointerItems = [
  { icon: "🏃", title: "Physical Activity", desc: "Movement and aerobic exercise for brain vitality" },
  { icon: "🥗", title: "Nutrition", desc: "Diet plans that support heart and brain function" },
  { icon: "🧠", title: "Cognitive Training", desc: "Activities that strengthen thinking skills" },
  { icon: "❤️", title: "Heart Health", desc: "Managing blood pressure, cholesterol, and diabetes" },
];

const planBoxStyle = {
  background: "rgba(17, 100, 102, 0.05)",
  padding: "1.5rem",
  borderRadius: "8px",
  margin: "1rem 0",
};

export default Prevention;

