// import React from "react";
// import "../DiseaseLayout.css";

// const Prevention = () => {
//   return (
//     <div className="disease-section">
//       <h2 className="disease-section-title">Prevention & Early Management</h2>
//       <div className="disease-section-divider"></div>

//       <ul className="disease-section-text">
//         <li>Maintain a consistent sleep schedule</li>
//         <li>Avoid alcohol and substance use</li>
//         <li>Early therapy intervention</li>
//         <li>Regular medical follow-ups</li>
//         <li>Stress-management routines</li>
//       </ul>
//     </div>
//   );
// };

// export default Prevention;
import React from "react";
import "../DiseaseLayout.css";

const BipolarPrevention = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Prevention / Early Management of Bipolar Disorder
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        While bipolar disorder (BD) cannot be fully prevented due to its strong genetic component, early identification, lifestyle management, and proactive interventions can significantly reduce the severity of episodes, improve quality of life, and lower the risk of complications. Early detection and consistent care are crucial.
      </p>

      {/* 1. Lifestyle and Daily Routine */}
      <h2 className="disease-section-subt">
        1. Maintaining a Stable Lifestyle
      </h2>
      <p className="disease-section-text">
        Research shows that regular routines and healthy habits can stabilize mood and reduce the frequency of manic or depressive episodes.
      </p>

      <h3 style={{fontSize: '1.1rem', color: '#116466', marginTop: '1.5rem', marginBottom: '0.8rem', fontWeight: 'bold'}}>
        Sleep Hygiene
      </h3>
      <ul className="disease-section-text">
        <li><b>Consistent sleep schedule</b> – Go to bed and wake up at the same time every day; irregular sleep can trigger mood episodes.</li>
        <li><b>Sleep environment</b> – Keep the bedroom dark, cool, and quiet to promote restful sleep.</li>
        <li><b>Avoid stimulants</b> – Limit caffeine, nicotine, and screen time before bed.</li>
      </ul>

      <h3 style={{fontSize: '1.1rem', color: '#116466', marginTop: '1.5rem', marginBottom: '0.8rem', fontWeight: 'bold'}}>
        Daily Routine and Structure
      </h3>
      <ul className="disease-section-text">
        <li><b>Regular meals and exercise</b> – Balanced nutrition and physical activity improve mood and energy regulation.</li>
        <li><b>Time management</b> – Structured daily activities help reduce stress and prevent mood destabilization.</li>
        <li><b>Mindful transitions</b> – Avoid sudden, high-stress changes in work or life schedules.</li>
      </ul>

      {/* 2. Stress Management and Mental Health */}
      <h2 className="disease-section-subt">
        2. Stress Reduction and Emotional Regulation
      </h2>
      <p className="disease-section-text">
        Stress and emotional upheaval can trigger mood episodes in bipolar disorder. Learning to manage stress effectively is essential.
      </p>

      <ul className="disease-section-text">
        <li><b>Mindfulness and meditation</b> – Techniques like deep breathing, yoga, or guided meditation help maintain emotional balance.</li>
        <li><b>Cognitive-behavioral therapy (CBT)</b> – Helps identify and change negative thinking patterns, and teaches coping strategies for mood swings.</li>
        <li><b>Support groups</b> – Sharing experiences with others who have bipolar disorder reduces isolation and provides practical coping tips.</li>
        <li><b>Relaxation techniques</b> – Journaling, listening to music, or hobbies can help reduce stress.</li>
      </ul>

      {/* 3. Early Warning Signs and Mood Tracking */}
      <h2 className="disease-section-subt">
        3. Monitoring and Early Detection
      </h2>
      <p className="disease-section-text">
        Recognizing early signs of manic or depressive episodes allows timely intervention to prevent full-blown episodes.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem',
        margin: '1.5rem 0'
      }}>
        {[
          {num: '1', sign: 'Sleep Changes', desc: 'Sleeping very little during mania or excessively during depression.'},
          {num: '2', sign: 'Mood Shifts', desc: 'Rapid changes in mood, irritability, or unusually elevated mood.'},
          {num: '3', sign: 'Energy Levels', desc: 'Sudden increase or decrease in activity and energy.'},
          {num: '4', sign: 'Risky Behavior', desc: 'Impulsive spending, unsafe sexual activity, or reckless decisions.'},
          {num: '5', sign: 'Concentration Problems', desc: 'Difficulty focusing, racing thoughts, or indecision.'},
          {num: '6', sign: 'Social Withdrawal', desc: 'Pulling away from friends, family, or work responsibilities.'},
          {num: '7', sign: 'Appetite Changes', desc: 'Significant increase or decrease in eating patterns.'},
          {num: '8', sign: 'Mood Diary Alerts', desc: 'Tracking daily mood changes helps detect early patterns.'}
        ].map(item => (
          <div key={item.num} style={{
            background: 'rgba(17, 100, 102, 0.05)',
            padding: '1rem',
            borderRadius: '8px',
            borderLeft: '3px solid #116466'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
              <div style={{
                background: '#116466',
                color: 'white',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '0.9rem'
              }}>{item.num}</div>
              <h4 style={{margin: 0, fontSize: '1rem', color: '#116466', fontWeight: 'bold'}}>{item.sign}</h4>
            </div>
            <p style={{margin: 0, fontSize: '0.9rem', color: '#333', lineHeight: '1.5'}}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 4. Medication Adherence and Professional Support */}
      <h2 className="disease-section-subt">
        4. Medication and Professional Support
      </h2>
      <p className="disease-section-text">
        For individuals diagnosed with bipolar disorder, consistent treatment and professional guidance are essential to prevent relapse.
      </p>

      <ul className="disease-section-text">
        <li><b>Adherence to prescribed medications</b> – Mood stabilizers, antipsychotics, or antidepressants as directed by a healthcare provider.</li>
        <li><b>Regular psychiatric follow-up</b> – Frequent consultations to adjust medications and monitor symptoms.</li>
        <li><b>Therapeutic interventions</b> – Cognitive-behavioral therapy, interpersonal therapy, and psychoeducation improve coping and relapse prevention.</li>
        <li><b>Family and caregiver involvement</b> – Support networks help ensure adherence to treatment and early detection of mood changes.</li>
      </ul>

      {/* 5. Creating Your Personal Prevention Plan */}
      <h2 className="disease-section-subt">
        5. Creating Your Personal Plan
      </h2>
      <p className="disease-section-text">
        Begin with small, achievable changes and monitor your progress:
      </p>

      <div style={{
        background: 'rgba(17, 100, 102, 0.05)',
        padding: '1.5rem',
        borderRadius: '8px',
        margin: '1rem 0'
      }}>
        <ol className="disease-section-text" style={{margin: 0}}>
          <li><b>Track moods daily</b> – Use diaries or apps to log sleep, energy, and mood patterns.</li>
          <li><b>Maintain a structured daily routine</b> – Regular sleep, meals, and activities stabilize mood.</li>
          <li><b>Identify triggers</b> – Recognize stressors, sleep disruption, or lifestyle changes that precede episodes.</li>
          <li><b>Build a support network</b> – Family, friends, or support groups provide guidance and accountability.</li>
          <li><b>Consult professionals early</b> – Seek help at first signs of mood changes to prevent escalation.</li>
          <li><b>Practice stress reduction</b> – Meditation, mindfulness, and physical activity are key protective strategies.</li>
          <li><b>Adhere to treatment</b> – Follow your psychiatrist’s recommendations for medications and therapy consistently.</li>
        </ol>
      </div>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        While bipolar disorder cannot be fully prevented, these proactive strategies significantly reduce the severity and frequency of mood episodes. Early recognition, lifestyle management, and consistent professional care empower individuals to lead stable, fulfilling lives. Prevention and early management are ongoing processes, and it’s never too late to start.
      </p>
    </div>
  );
};

export default BipolarPrevention;

