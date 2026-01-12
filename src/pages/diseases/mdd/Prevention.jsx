// import React from "react";
// import "../DiseaseLayout.css";

// const Prevention = () => {
//   return (
//     <div className="disease-section">
//       <h2 className="disease-section-title">Prevention</h2>
//       <div className="disease-section-divider"></div>

//       <ul className="disease-section-list">
//         <li>Stress management</li>
//         <li>Strong social support</li>
//         <li>Regular exercise</li>
//         <li>Healthy sleep habits</li>
//         <li>Avoiding substance abuse</li>
//       </ul>
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
        While Major Depressive Disorder (MDD) cannot always be prevented, many
        evidence-based strategies can significantly reduce risk, strengthen
        emotional resilience, and promote long-term mental wellbeing. Early
        detection is especially important as timely support improves recovery,
        reduces relapse, and helps individuals maintain daily functioning.
      </p>

      {/* 1. Risk Reduction Strategies */}
      <h2 className="disease-section-subt">1. Risk Reduction Strategies</h2>
      <p className="disease-section-text">
        Research shows that certain lifestyle habits and psychological practices
        can lower the likelihood of developing depression or experiencing
        recurrent episodes:
      </p>

      {/* Physical Activity */}
      <h3
        style={{
          fontSize: "1.1rem",
          color: "#116466",
          marginTop: "1.5rem",
          marginBottom: "0.8rem",
          fontWeight: "bold",
        }}
      >
        Regular Physical Activity
      </h3>
      <ul className="disease-section-text">
        <li>
          <b>Aerobic exercise</b> – 30 minutes of walking, jogging, or cycling
          4–5 days a week reduces depressive symptoms by improving endorphins and
          brain chemistry.
        </li>
        <li>
          <b>Strength training</b> – Enhances mood, sleep quality, and body
          confidence.
        </li>
        <li>
          <b>Mind–body exercises</b> – Yoga, tai chi, and breathing practices
          regulate stress and reduce emotional reactivity.
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
        Mental-Health-Friendly Diet
      </h3>
      <ul className="disease-section-text">
        <li>
          <b>Mediterranean-style diet</b> – Rich in fruits, vegetables, nuts,
          whole grains, legumes, and fish; shown to reduce depression risk.
        </li>
        <li>
          <b>Omega-3 fatty acids</b> – Found in fish, flaxseed, and walnuts;
          beneficial for mood regulation.
        </li>
        <li>
          <b>Reduce</b> – Processed foods, excessive sugar, trans fats, and high
          caffeine or alcohol intake that worsen mood and sleep.
        </li>
      </ul>

      {/* Stress Management */}
      <h3
        style={{
          fontSize: "1.1rem",
          color: "#116466",
          marginTop: "1.5rem",
          marginBottom: "0.8rem",
          fontWeight: "bold",
        }}
      >
        Stress & Emotional Regulation
      </h3>
      <ul className="disease-section-text">
        <li>
          <b>Mindfulness and meditation</b> – Reduce rumination and negative
          thinking patterns.
        </li>
        <li>
          <b>Healthy coping skills</b> – Deep breathing, journaling, grounding
          techniques, or structured problem-solving.
        </li>
        <li>
          <b>Good sleep habits</b> – Maintain consistent sleep routines and
          avoid screens before bedtime.
        </li>
      </ul>

      {/* Social Connections */}
      <h3
        style={{
          fontSize: "1.1rem",
          color: "#116466",
          marginTop: "1.5rem",
          marginBottom: "0.8rem",
          fontWeight: "bold",
        }}
      >
        Social Support & Meaningful Connections
      </h3>
      <ul className="disease-section-text">
        <li>
          <b>Stay socially active</b> – Strong relationships reduce loneliness
          and emotional vulnerability.
        </li>
        <li>
          <b>Join groups</b> – Clubs, hobby groups, volunteering, or community
          activities.
        </li>
        <li>
          <b>Talk openly</b> – Sharing stressors with trusted people improves
          emotional wellbeing.
        </li>
      </ul>

      {/* 2. Managing Health Conditions */}
      <h2 className="disease-section-subt">
        2. Managing Physical & Mental Health Conditions
      </h2>
      <p className="disease-section-text">
        Several medical and psychological factors increase the risk of MDD.
        Managing them early protects long-term mental health:
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
            <tr
              style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}
            >
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
                Condition / Factor
              </th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
                Why It Increases Risk
              </th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
                Prevention Strategy
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <b>Chronic Stress</b>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Prolonged stress disrupts brain chemistry and emotional
                regulation.
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Stress management, therapy, meditation, boundaries.
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <b>Hormonal Changes</b>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Thyroid imbalance, PCOS, postpartum shifts affect mood and
                energy.
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Medical treatment, regular screenings.
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <b>Anxiety Disorders</b>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Anxiety and depression frequently co-occur and influence each
                other.
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Therapy (CBT), relaxation techniques, early intervention.
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <b>Sleep Disorders</b>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Poor sleep impacts mood regulation and increases depressive risk.
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Treat insomnia, create routine, limit caffeine and screens.
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <b>Substance Use</b>
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Alcohol/drugs disrupt brain chemicals and coping ability.
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Avoid excessive use, seek help for dependency.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. Additional Risk Factors */}
      <h2 className="disease-section-subt">
        3. Additional Risk Factors to Address
      </h2>
      <ul className="disease-section-text">
        <li>
          <b>Trauma or past abuse</b> – Seek trauma-informed therapy to prevent
          long-term emotional effects.
        </li>
        <li>
          <b>Loneliness</b> – Build strong social networks; isolation increases
          vulnerability.
        </li>
        <li>
          <b>Financial/academic pressure</b> – Develop coping routines and time
          management skills.
        </li>
        <li>
          <b>Family history of MDD</b> – Increased vigilance and early
          intervention can reduce severity.
        </li>
      </ul>

      {/* 4. Early Detection */}
      <h2 className="disease-section-subt">
        4. Early Detection: Recognize the Warning Signs
      </h2>
      <p className="disease-section-text">
        Early recognition of symptoms allows for faster treatment and helps
        prevent the disorder from worsening. Look out for these early warning
        signs:
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1rem",
          margin: "1.5rem 0",
        }}
      >
        {[
          {
            num: "1",
            sign: "Persistent Low Mood",
            desc: "Feeling sad, empty, or hopeless most days.",
          },
          {
            num: "2",
            sign: "Loss of Interest",
            desc: "Losing interest in hobbies, work, or social activities.",
          },
          {
            num: "3",
            sign: "Fatigue",
            desc: "Low energy, tiredness, or feeling drained for no clear reason.",
          },
          {
            num: "4",
            sign: "Sleep Changes",
            desc: "Insomnia or excessive sleeping.",
          },
          {
            num: "5",
            sign: "Appetite Changes",
            desc: "Significant weight loss or gain.",
          },
          {
            num: "6",
            sign: "Difficulty Concentrating",
            desc: "Trouble focusing, remembering, or making decisions.",
          },
          {
            num: "7",
            sign: "Feelings of Worthlessness",
            desc: "Excessive guilt or harsh self-criticism.",
          },
          {
            num: "8",
            sign: "Irritability",
            desc: "Increased frustration or agitation.",
          },
          {
            num: "9",
            sign: "Social Withdrawal",
            desc: "Avoiding friends, family, or work.",
          },
          {
            num: "10",
            sign: "Thoughts of Self-Harm",
            desc: "Any suicidal thoughts require immediate help.",
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

      <div
        style={{
          background: "rgba(212, 0, 0, 0.08)",
          padding: "1.5rem",
          borderRadius: "8px",
          borderLeft: "4px solid #d40000",
          margin: "1.5rem 0",
        }}
      >
        <p className="disease-section-text" style={{ margin: 0 }}>
          <b>When to See a Doctor:</b> If you or someone you know experiences
          several of these symptoms for more than two weeks, seek professional
          help immediately. Early treatment greatly improves recovery and reduces
          relapse.
        </p>
      </div>

      {/* 5. Screening Tools */}
      <h2 className="disease-section-subt">5. Screening and Self-Assessment Tools</h2>
      <p className="disease-section-text">
        Several tools help with early detection and monitoring:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>PHQ-9 (Patient Health Questionnaire)</b> – Widely used screening
          tool to measure the severity of depressive symptoms.
        </li>
        <li>
          <b>GAD-7</b> – Screens for anxiety, which often co-occurs with MDD.
        </li>
        <li>
          <b>Mood tracking apps</b> – Help monitor patterns, triggers, and early
          changes in mood.
        </li>
        <li>
          <b>Clinical interviews</b> – Conducted by psychologists or
          psychiatrists for accurate diagnosis.
        </li>
      </ul>

      {/* 6. Evidence-based Prevention */}
      <h2 className="disease-section-subt">6. Evidence-Based Prevention Models</h2>
      <p className="disease-section-text">
        Research-supported programs show that targeted interventions help
        prevent depression, especially in high-risk individuals:
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
          margin: "1.5rem 0",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.05))",
            padding: "1.5rem",
            borderRadius: "12px",
            border: "2px solid rgba(17, 100, 102, 0.2)",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🧘</div>
          <h4
            style={{
              color: "#116466",
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
            }}
          >
            Mindfulness-Based CBT
          </h4>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#333" }}>
            Helps prevent relapse through awareness and cognitive reframing.
          </p>
        </div>

        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.05))",
            padding: "1.5rem",
            borderRadius: "12px",
            border: "2px solid rgba(17, 100, 102, 0.2)",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🤝</div>
          <h4
            style={{
              color: "#116466",
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
            }}
          >
            Interpersonal Therapy (IPT)
          </h4>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#333" }}>
            Improves relationships and reduces emotional stressors.
          </p>
        </div>

        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.05))",
            padding: "1.5rem",
            borderRadius: "12px",
            border: "2px solid rgba(17, 100, 102, 0.2)",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>📘</div>
          <h4
            style={{
              color: "#116466",
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
            }}
          >
            Resilience Training
          </h4>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#333" }}>
            Builds coping skills and emotional strength.
          </p>
        </div>

        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.05))",
            padding: "1.5rem",
            borderRadius: "12px",
            border: "2px solid rgba(17, 100, 102, 0.2)",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>👪</div>
          <h4
            style={{
              color: "#116466",
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
            }}
          >
            Family & Social Support Programs
          </h4>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#333" }}>
            Reduces isolation and enhances emotional safety.
          </p>
        </div>
      </div>

      {/* 7. Prevention Plan */}
      <h2 className="disease-section-subt">
        7. Creating Your Personal Prevention Plan
      </h2>
      <p className="disease-section-text">
        Small, consistent steps can significantly reduce the likelihood of
        developing depression or experiencing relapse:
      </p>

      <div
        style={{
          background: "rgba(17, 100, 102, 0.05)",
          padding: "1.5rem",
          borderRadius: "8px",
          margin: "1rem 0",
        }}
      >
        <ol className="disease-section-text" style={{ margin: 0 }}>
          <li>
            <b>Monitor your emotional health</b> – Pay attention to early mood
            changes.
          </li>
          <li>
            <b>Build routine</b> – Regular sleep, meals, exercise, and work
            rhythms.
          </li>
          <li>
            <b>Stay connected</b> – Maintain supportive social relationships.
          </li>
          <li>
            <b>Seek support early</b> – Don’t wait for symptoms to worsen before
            reaching out.
          </li>
          <li>
            <b>Identify triggers</b> – Stress, overwork, conflict, or major life
            changes.
          </li>
          <li>
            <b>Practice healthy coping</b> – Journaling, mindfulness, relaxation
            techniques.
          </li>
          <li>
            <b>Limit alcohol and avoid drugs</b> – Reduces mood instability and
            relapse.
          </li>
        </ol>
      </div>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        While we cannot completely prevent Major Depressive Disorder, a
        combination of healthy habits, emotional awareness, and timely support
        can greatly reduce the risk and severity. Early action leads to better
        outcomes—protecting mental health is an investment in lifelong
        wellbeing.
      </p>
    </div>
  );
};

export default Prevention;
