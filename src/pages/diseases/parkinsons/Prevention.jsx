/*import React from "react";
import "../DiseaseLayout.css";

const Prevention = () => {
  return (
    <div className="content-section">
      <h1>Prevention & Early Detection</h1>

      <p>
        Parkinson’s cannot be completely prevented, but certain lifestyle habits 
        and early recognition can reduce risk or delay progression.
      </p>

      <ul>
        <li>Regular aerobic exercise</li>
        <li>Balanced diet rich in antioxidants</li>
        <li>Avoiding exposure to harmful pesticides and toxins</li>
        <li>Good sleep hygiene</li>
        <li>Monitoring early signs like reduced smell or REM sleep disorder</li>
      </ul>
    </div>
  );
};

export default Prevention;*/

// import React from "react";
// import "../DiseaseLayout.css";

// const Prevention = () => {
//   return (
//     <div className="disease-section">
//       <h2 className="disease-section-title">Prevention</h2>
//       <div className="disease-section-divider"></div>
//       <p className="disease-section-text">
//         Although there is no guaranteed prevention, exercise, healthy diet,
//         and avoiding toxins may reduce risk.
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
      <h2 className="disease-section-title">Prevention / Early Detection</h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Parkinson’s disease cannot be fully prevented, as many causes remain
        unknown. However, research suggests that certain lifestyle habits—such
        as regular exercise, a healthy diet, sleep regulation, and reducing
        exposure to toxins—may lower risk or delay progression. Early detection
        allows for better treatment outcomes and quality of life.
      </p>

      {/* 1. Risk Reduction Strategies */}
      <h2 className="disease-section-subt">1. Risk Reduction Strategies</h2>

      <p className="disease-section-text">
        While no single prevention method is guaranteed, these evidence-based
        practices may help protect brain and nerve health:
      </p>

      {/* Exercise */}
      <h3
        style={{
          fontSize: "1.1rem",
          color: "#116466",
          marginTop: "1.5rem",
          marginBottom: "0.8rem",
          fontWeight: "bold",
        }}
      >
        Regular Physical Exercise
      </h3>

      <ul className="disease-section-text">
        <li>
          <b>Aerobic exercise</b> – Walking, jogging, cycling, and swimming may
          reduce risk of Parkinson’s by improving brain circulation and reducing
          inflammation.
        </li>
        <li>
          <b>High-intensity training</b> – Studies show vigorous exercise slows
          progression in high-risk individuals.
        </li>
        <li>
          <b>Balance & coordination training</b> – Yoga, tai chi, and Pilates
          improve posture and reduce fall risk.
        </li>
        <li>
          <b>Strength training</b> – Helps protect mobility and slows muscle
          deterioration.
        </li>
      </ul>

      {/* Diet */}
      <h3
        style={{
          fontSize: "1.1rem",
          color: "#116466",
          marginTop: "1.5rem",
          marginBottom: "0.8rem",
          fontWeight: "bold",
        }}
      >
        Neuroprotective Diet
      </h3>

      <ul className="disease-section-text">
        <li>
          <b>Mediterranean diet</b> – Rich in vegetables, fruits, nuts, whole
          grains, and fish. Linked with reduced neurodegeneration.
        </li>
        <li>
          <b>MIND diet</b> – Supports brain health through leafy greens, berries
          and antioxidants.
        </li>
        <li>
          <b>Green tea & caffeine</b> – Some research suggests moderate caffeine
          intake may lower the risk of Parkinson’s.
        </li>
        <li>
          <b>Limit</b> – Processed foods, excessive sugar, pesticides, and
          saturated fats.
        </li>
      </ul>

      {/* Mental Activity */}
      <h3
        style={{
          fontSize: "1.1rem",
          color: "#116466",
          marginTop: "1.5rem",
          marginBottom: "0.8rem",
          fontWeight: "bold",
        }}
      >
        Cognitive & Mental Stimulation
      </h3>

      <ul className="disease-section-text">
        <li>Reading, puzzles, and learning new skills keep neural pathways active.</li>
        <li>Play musical instruments, board games, or memory-based activities.</li>
        <li>Continuous learning strengthens cognitive reserve.</li>
      </ul>

      {/* Social Engagement */}
      <h3
        style={{
          fontSize: "1.1rem",
          color: "#116466",
          marginTop: "1.5rem",
          marginBottom: "0.8rem",
          fontWeight: "bold",
        }}
      >
        Social Engagement
      </h3>

      <ul className="disease-section-text">
        <li>Stay connected with friends and family.</li>
        <li>Join support groups, volunteer activities, or community programs.</li>
        <li>Reduced loneliness lowers the risk of neurodegenerative disorders.</li>
      </ul>

      {/* 2. Managing Health Conditions */}
      <h2 className="disease-section-subt">
        2. Managing Medical & Environmental Risk Factors
      </h2>

      <p className="disease-section-text">
        Certain medical conditions and exposures may increase Parkinson’s risk.
        Managing or reducing these can help:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Reduce exposure to toxins</b> – Avoid pesticides, herbicides,
          industrial chemicals, and well-water contamination.
        </li>
        <li>
          <b>Protect against head injuries</b> – Wear helmets and seatbelts.
        </li>
        <li>
          <b>Maintain cardiovascular health</b> – High blood pressure, diabetes,
          and vascular disease may worsen symptoms.
        </li>
        <li>
          <b>Treat sleep disorders</b> – REM sleep behavior disorder (RBD) may
          be an early sign and require treatment.
        </li>
        <li>
          <b>Avoid smoking & excessive alcohol</b> – Protects nerve health.
        </li>
      </ul>

      {/* 3. Early Warning Signs */}
      <h2 className="disease-section-subt">
        3. Early Detection: Know the Early Warning Signs
      </h2>

      <p className="disease-section-text">
        Parkinson’s starts years before motor symptoms appear. Recognizing early
        signs helps patients get treatment sooner:
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1rem",
          margin: "1.5rem 0",
        }}
      >
        {[
          { num: 1, sign: "Tremors", desc: "Shaking in hands or fingers at rest" },
          {
            num: 2,
            sign: "Loss of Smell",
            desc: "Difficulty detecting strong odors—often an early sign",
          },
          {
            num: 3,
            sign: "Sleep Disturbances",
            desc: "Acting out dreams (RBD), insomnia, or restless sleep",
          },
          {
            num: 4,
            sign: "Constipation",
            desc: "Slowed gut activity linked with early Parkinson’s changes",
          },
          {
            num: 5,
            sign: "Stiffness",
            desc: "Rigidity in arms or legs without injury",
          },
          {
            num: 6,
            sign: "Small Handwriting",
            desc: "Sudden change in handwriting size (micrographia)",
          },
          {
            num: 7,
            sign: "Facial Masking",
            desc: "Reduced facial expressions",
          },
          {
            num: 8,
            sign: "Soft Voice",
            desc: "Quieter or hoarse speech",
          },
          {
            num: 9,
            sign: "Balance Problems",
            desc: "Frequent falls or posture instability",
          },
          {
            num: 10,
            sign: "Depression / Anxiety",
            desc: "Changes in mood appear years earlier",
          },
        ].map((item) => (
          <div
            key={item.num}
            style={{
              background: "rgba(17, 100, 102, 0.05)",
              padding: "1rem",
              borderRadius: "8px",
              borderLeft: "3px solid #116466",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <div
                style={{
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
                }}
              >
                {item.num}
              </div>
              <h4
                style={{
                  margin: 0,
                  fontSize: "1rem",
                  color: "#116466",
                  fontWeight: "bold",
                }}
              >
                {item.sign}
              </h4>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "0.9rem",
                color: "#333",
                lineHeight: "1.5",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 4. Screening Tools */}
      <h2 className="disease-section-subt">4. Screening & Diagnostic Tools</h2>

      <p className="disease-section-text">
        Doctors use multiple tools to detect Parkinson’s early:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Neurological Examination</b> – Tests reflexes, coordination, and
          balance.
        </li>
        <li>
          <b>DaTscan</b> – Detects dopamine transporter levels in the brain.
        </li>
        <li>
          <b>MRI / CT</b> – Rules out stroke, tumors, or structural issues.
        </li>
        <li>
          <b>Olfactory tests</b> – Reduced smell may help with early detection.
        </li>
        <li>
          <b>Sleep studies</b> – Evaluate REM sleep behavior disorder (RBD),
          a common early sign.
        </li>
        <li>
          <b>Genetic testing</b> – LRRK2, Parkin, and other genes increase risk
          in some families.
        </li>
      </ul>

      {/* Conclusion */}
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Parkinson’s prevention focuses on protecting brain health, reducing
        toxin exposure, and recognizing early symptoms. While the disease cannot
        be fully prevented, lifestyle changes, regular medical evaluations, and
        early diagnosis can significantly improve outcomes and quality of life.
      </p>
    </div>
  );
};

export default Prevention;
