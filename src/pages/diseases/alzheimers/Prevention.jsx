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
        While Alzheimer's disease cannot be completely prevented, healthy lifestyle habits such as regular exercise, balanced diet, mental stimulation, and social engagement can help lower the risk or delay the onset of symptoms. Early detection is crucial for better management and planning.
      </p>

      {/* 1. Risk Reduction Strategies */}
      <h2 className="disease-section-subt">
        1. Risk Reduction Strategies
      </h2>
      <p className="disease-section-text">
        Research suggests that certain lifestyle modifications may help reduce the risk of developing Alzheimer's disease:
      </p>

      <h3 style={{fontSize: '1.1rem', color: '#116466', marginTop: '1.5rem', marginBottom: '0.8rem', fontWeight: 'bold'}}>
        Physical Exercise
      </h3>
      <ul className="disease-section-text">
        <li>
          <b>Regular aerobic exercise</b> – At least 150 minutes of moderate-intensity exercise per week (walking, swimming, cycling) improves blood flow to the brain and may reduce dementia risk by up to 30%.
        </li>
        <li>
          <b>Strength training</b> – Include resistance exercises 2-3 times per week to maintain muscle mass and overall health.
        </li>
        <li>
          <b>Balance and flexibility</b> – Activities like yoga and tai chi reduce fall risk and promote overall wellbeing.
        </li>
      </ul>

      <h3 style={{fontSize: '1.1rem', color: '#116466', marginTop: '1.5rem', marginBottom: '0.8rem', fontWeight: 'bold'}}>
        Brain-Healthy Diet
      </h3>
      <ul className="disease-section-text">
        <li>
          <b>Mediterranean Diet</b> – Rich in fruits, vegetables, whole grains, fish, olive oil, and nuts. Studies show it may reduce Alzheimer's risk by 35-40%.
        </li>
        <li>
          <b>MIND Diet</b> – Combination of Mediterranean and DASH diets, specifically designed for brain health. Emphasizes leafy greens, berries, nuts, and fish while limiting red meat and sweets.
        </li>
        <li>
          <b>Key nutrients:</b> Omega-3 fatty acids, antioxidants, vitamins E and B12, folate, and vitamin D.
        </li>
        <li>
          <b>Limit:</b> Processed foods, excessive sugar, saturated fats, and alcohol.
        </li>
      </ul>

      <h3 style={{fontSize: '1.1rem', color: '#116466', marginTop: '1.5rem', marginBottom: '0.8rem', fontWeight: 'bold'}}>
        Mental Stimulation
      </h3>
      <ul className="disease-section-text">
        <li>
          <b>Lifelong learning</b> – Take classes, learn new skills, or pursue hobbies that challenge your brain.
        </li>
        <li>
          <b>Cognitive activities</b> – Reading, puzzles, board games, musical instruments, and learning new languages.
        </li>
        <li>
          <b>Brain training programs</b> – While debated, some computerized cognitive training may help maintain mental sharpness.
        </li>
        <li>
          <b>Work complexity</b> – Jobs requiring complex thinking and problem-solving may build cognitive reserve.
        </li>
      </ul>

      <h3 style={{fontSize: '1.1rem', color: '#116466', marginTop: '1.5rem', marginBottom: '0.8rem', fontWeight: 'bold'}}>
        Social Engagement
      </h3>
      <ul className="disease-section-text">
        <li>
          <b>Stay connected</b> – Maintain relationships with family and friends through regular visits, calls, or video chats.
        </li>
        <li>
          <b>Join groups</b> – Participate in clubs, volunteer organizations, religious communities, or hobby groups.
        </li>
        <li>
          <b>Combat loneliness</b> – Social isolation is a significant risk factor for cognitive decline.
        </li>
      </ul>

      {/* 2. Managing Health Conditions */}
      <h2 className="disease-section-subt">
        2. Managing Cardiovascular and Metabolic Health
      </h2>
      <p className="disease-section-text">
        Many chronic conditions increase Alzheimer's risk. Managing these conditions is crucial for brain health:
      </p>

      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Condition</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Impact on Brain</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Prevention Strategy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>High Blood Pressure</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Damages blood vessels, reducing blood flow to brain</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Regular monitoring, medications, low-sodium diet, stress reduction</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>Diabetes</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>High blood sugar damages neurons and blood vessels</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Blood sugar control, healthy diet, regular exercise, medications</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>High Cholesterol</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Plaque buildup restricts blood flow</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Heart-healthy diet, exercise, statins if prescribed</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>Obesity</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Increases inflammation and metabolic problems</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Weight management through diet and physical activity</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>Sleep Disorders</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Poor sleep prevents brain from clearing toxins</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Treat sleep apnea, maintain sleep hygiene, aim for 7-9 hours</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>Depression</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>May increase risk or be early symptom</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Therapy, medications, social support, stress management</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. Additional Risk Factors to Address */}
      <h2 className="disease-section-subt">
        3. Additional Risk Factors to Address
      </h2>
      <ul className="disease-section-text">
        <li>
          <b>Head injuries</b> – Protect your head during sports and activities. Wear helmets and seatbelts. Repeated head trauma increases dementia risk.
        </li>
        <li>
          <b>Smoking</b> – Quit smoking to reduce risk by up to 30-40%. Smoking damages blood vessels and increases inflammation.
        </li>
        <li>
          <b>Excessive alcohol</b> – Limit alcohol consumption. Heavy drinking can lead to brain damage and increase dementia risk.
        </li>
        <li>
          <b>Hearing loss</b> – Treat hearing problems early. Untreated hearing loss is linked to faster cognitive decline.
        </li>
        <li>
          <b>Air pollution</b> – Minimize exposure to air pollution when possible, as it may contribute to brain inflammation.
        </li>
      </ul>

      {/* 4. Early Detection and Warning Signs */}
      <h2 className="disease-section-subt">
        4. Early Detection: Know the Warning Signs
      </h2>
      <p className="disease-section-text">
        Early detection allows for better planning, access to treatments, and participation in clinical trials. Recognize these 10 warning signs:
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem',
        margin: '1.5rem 0'
      }}>
        {[
          {num: '1', sign: 'Memory Loss', desc: 'Forgetting recently learned information, important dates, or asking the same questions repeatedly'},
          {num: '2', sign: 'Planning Difficulties', desc: 'Trouble developing and following plans, working with numbers, or following recipes'},
          {num: '3', sign: 'Task Completion', desc: 'Difficulty completing familiar tasks at home, work, or leisure'},
          {num: '4', sign: 'Confusion', desc: 'Losing track of dates, seasons, or passage of time'},
          {num: '5', sign: 'Visual/Spatial Issues', desc: 'Trouble reading, judging distance, or determining color contrast'},
          {num: '6', sign: 'Communication Problems', desc: 'Trouble following or joining conversations, struggling with vocabulary'},
          {num: '7', sign: 'Misplacing Things', desc: 'Putting items in unusual places and unable to retrace steps'},
          {num: '8', sign: 'Poor Judgment', desc: 'Changes in decision-making, especially regarding money or personal care'},
          {num: '9', sign: 'Social Withdrawal', desc: 'Removing themselves from hobbies, social activities, or work projects'},
          {num: '10', sign: 'Mood Changes', desc: 'Becoming confused, suspicious, depressed, fearful, or anxious'}
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

      <div style={{
        background: 'rgba(212, 93, 0, 0.08)',
        padding: '1.5rem',
        borderRadius: '8px',
        borderLeft: '4px solid #d45d00',
        margin: '1.5rem 0'
      }}>
        <p className="disease-section-text" style={{margin: 0}}>
          <b>When to See a Doctor:</b> If you or a loved one experiences several of these warning signs, schedule an appointment with a healthcare provider immediately. Early diagnosis provides more treatment options and better outcomes.
        </p>
      </div>

      {/* 5. Screening and Diagnostic Tools */}
      <h2 className="disease-section-subt">
        5. Screening and Diagnostic Tools
      </h2>
      <p className="disease-section-text">
        Several tools and tests can help with early detection:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Cognitive assessments</b> – Brief tests like MMSE (Mini-Mental State Examination) or MoCA (Montreal Cognitive Assessment) evaluate memory, attention, and language.
        </li>
        <li>
          <b>Neuropsychological testing</b> – Comprehensive evaluation of cognitive abilities by specialists.
        </li>
        <li>
          <b>Brain imaging</b> – MRI or CT scans show brain structure changes; PET scans can detect amyloid plaques.
        </li>
        <li>
          <b>Biomarker tests</b> – Blood tests and cerebrospinal fluid analysis can detect Alzheimer's-related proteins.
        </li>
        <li>
          <b>Genetic testing</b> – For those with family history, testing for APOE-e4 gene and other genetic markers.
        </li>
      </ul>

      {/* 6. The POINTER Study Framework */}
      <h2 className="disease-section-subt">
        6. Evidence-Based Prevention: The POINTER Study
      </h2>
      <p className="disease-section-text">
        The U.S. POINTER (U.S. Study to Protect Brain Health Through Lifestyle Intervention to Reduce Risk) is investigating whether lifestyle interventions can protect cognitive function in older adults at increased risk. The study focuses on four key areas:
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.5rem',
        margin: '1.5rem 0'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.05))',
          padding: '1.5rem',
          borderRadius: '12px',
          border: '2px solid rgba(17, 100, 102, 0.2)'
        }}>
          <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>🏃</div>
          <h4 style={{color: '#116466', marginBottom: '0.5rem', fontSize: '1.1rem'}}>Physical Activity</h4>
          <p style={{margin: 0, fontSize: '0.9rem', color: '#333'}}>Regular exercise and movement throughout the day</p>
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.05))',
          padding: '1.5rem',
          borderRadius: '12px',
          border: '2px solid rgba(17, 100, 102, 0.2)'
        }}>
          <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>🥗</div>
          <h4 style={{color: '#116466', marginBottom: '0.5rem', fontSize: '1.1rem'}}>Nutritional Counseling</h4>
          <p style={{margin: 0, fontSize: '0.9rem', color: '#333'}}>Heart-healthy eating patterns and dietary guidance</p>
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.05))',
          padding: '1.5rem',
          borderRadius: '12px',
          border: '2px solid rgba(17, 100, 102, 0.2)'
        }}>
          <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>🧠</div>
          <h4 style={{color: '#116466', marginBottom: '0.5rem', fontSize: '1.1rem'}}>Cognitive Training</h4>
          <p style={{margin: 0, fontSize: '0.9rem', color: '#333'}}>Activities to challenge and stimulate the brain</p>
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.05))',
          padding: '1.5rem',
          borderRadius: '12px',
          border: '2px solid rgba(17, 100, 102, 0.2)'
        }}>
          <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>❤️</div>
          <h4 style={{color: '#116466', marginBottom: '0.5rem', fontSize: '1.1rem'}}>Cardiovascular Risk</h4>
          <p style={{margin: 0, fontSize: '0.9rem', color: '#333'}}>Managing blood pressure, diabetes, and heart health</p>
        </div>
      </div>

      {/* 7. Creating Your Prevention Plan */}
      <h2 className="disease-section-subt">
        7. Creating Your Personal Prevention Plan
      </h2>
      <p className="disease-section-text">
        Start with small, achievable changes and build from there:
      </p>

      <div style={{
        background: 'rgba(17, 100, 102, 0.05)',
        padding: '1.5rem',
        borderRadius: '8px',
        margin: '1rem 0'
      }}>
        <ol className="disease-section-text" style={{margin: 0}}>
          <li><b>Assess your current lifestyle</b> – Identify areas for improvement in diet, exercise, social engagement, and health management.</li>
          <li><b>Set realistic goals</b> – Start with one or two changes and gradually add more over time.</li>
          <li><b>Schedule regular check-ups</b> – Monitor cognitive health and manage chronic conditions.</li>
          <li><b>Stay informed</b> – Keep up with the latest research on brain health and prevention strategies.</li>
          <li><b>Build a support system</b> – Involve family and friends in your brain-healthy lifestyle changes.</li>
          <li><b>Track your progress</b> – Keep a journal or use apps to monitor your activities and health metrics.</li>
          <li><b>Be patient and persistent</b> – Brain health is a long-term investment. Consistency matters more than perfection.</li>
        </ol>
      </div>

      <div className="disease-section-divider"></div>
      
      <p className="disease-section-text">
        While we cannot guarantee prevention of Alzheimer's disease, adopting a brain-healthy lifestyle significantly reduces risk and promotes overall wellbeing at any age. The earlier you start, the better—but it's never too late to make positive changes. Remember, what's good for your heart is good for your brain. By taking proactive steps today, you're investing in your cognitive health for tomorrow.
      </p>
    </div>
  );
};

export default Prevention;