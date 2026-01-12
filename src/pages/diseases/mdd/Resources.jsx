import React from "react";
import "../DiseaseLayout.css";

const Resources = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Support & Resources
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Major Depressive Disorder (MDD) affects millions of people, and having access to reliable resources and support systems is crucial. The following list focuses on Indian mental health helplines, organizations, and online support, with a few global resources included for reference.
      </p>

      {/* 1. Indian Mental Health Helplines */}
      <h2 className="disease-section-subt">
        1. Mental Health Helplines
      </h2>
      <ul className="disease-section-text">
        <li>
          <b>Tele-MANAS (Government of India):</b> 24×7 psychological support, counselling, and crisis intervention for depression, anxiety, stress, and suicidal thoughts.
          <br />Call: <b>14416 / 1800-891-4416</b>
        </li>
        <li>
          <b>KIRAN Mental Health Helpline:</b> Nationwide mental health support for emotional distress, counselling, and guidance.
          <br />Call: <b>9152987821</b>
        </li>
        <li>
          <b>Vandrevala Foundation Free Counselling:</b> 24×7 free counselling via phone or WhatsApp for depression, stress, and emotional support.
          <br />Phone/WhatsApp: <b>+91 9999 666 555</b>
          <br />Website: <a href="https://www.vandrevalafoundation.com/free-counseling" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>vandrevalafoundation.com</a>
        </li>
        <li>
          <b>Befrienders India:</b> Confidential support for individuals in distress, emotional support, and suicide prevention.
          <br />Website: <a href="https://befriendersindia.net/" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>befriendersindia.net</a>
        </li>
        <li>
          <b>EEF Trust Mental Health Helpline:</b> Free support for anxiety, depression, and emotional distress.
          <br />Call: <b>+91 94683 73424</b>
          <br />Website: <a href="https://eeftrust.org/mental-health-helpline/" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>eeftrust.org</a>
        </li>
        <li>
          <b>AASRA Helpline (Mumbai):</b> 24-hour support for people experiencing distress or suicidal thoughts.
          <br />Call: <b>+91 9820466726</b>
          <br />Website: <a href="https://www.aasra.info/" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>aasra.info</a>
        </li>
        <li>
          <b>iCall (TISS Counselling Service):</b> Provides phone/email counselling for mental health and emotional support.
          <br />Website: <a href="https://icallhelpline.org/" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>icallhelpline.org</a>
        </li>
       
          <li>
          <b>Depression and Bipolar Support Alliance (DBSA):</b> Peer-led support groups and educational materials for people living with depression and bipolar disorder.
          <br />Website: <a href="https://www.dbsalliance.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.dbsalliance.org</a>
        </li>
       
           <li>
          <b>National Alliance on Mental Illness (NAMI):</b> Offers support groups, educational resources, advocacy, and a helpline for individuals and families affected by mental illness.
          <br />Website: <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.nami.org</a>
        </li>
        <li>
          <b>Connecting Trust Distress Helpline:</b> Emotional support for individuals experiencing mental health issues.
          <br />Website: <a href="https://sthirindia.com/helplines/" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>sthirindia.com</a>
        </li>
      </ul>

      {/* 2. Indian Online Communities */}
      <h2 className="disease-section-subt">
        2. Online Communities & Peer Support
      </h2>
      <ul className="disease-section-text">
        <li>
          <b>Mind.fit Community:</b> Online community and resources for mental health support in India.
          <br />Website: <a href="https://www.mind.fit/" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>mind.fit</a>
        </li>
        <li>
          <b>7 Cups of Tea:</b> Global online platform offering peer support and trained listeners for emotional support (available in India too).
          <br />Website: <a href="https://www.7cups.com" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>7cups.com</a>
        </li>
      </ul>

      {/* 3. Educational Resources */}
      <h2 className="disease-section-subt">
        3. Educational Resources
      </h2>
       <p className="disease-section-text">
        Learning about depression helps in understanding, coping, and supporting treatment:
      </p>
      <ul className="disease-section-text">
        <li>
          <b>National Institute of Mental Health and Neurosciences (NIMHANS, India):</b> Provides research-backed information on depression, treatment options, and awareness programs.
          <br />Website: <a href="https://nimhans.ac.in/" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>nimhans.ac.in</a>
        </li>
        <li>
          <b>iCall (TISS):</b> Offers online resources and articles on managing depression and mental health challenges.
        </li>
        <li>
          <b>Mental Health Foundation India:</b> Guides, publications, and awareness materials on depression and anxiety.
          <br />Website: <a href="https://www.mentalhealthfoundation.in/" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>mentalhealthfoundation.in</a>
        </li>
         <li>
          <b>Mental Health America (MHA) Publications:</b> Fact sheets, toolkits, and guides on depression, treatment options, and self-help strategies.
          <br />Website: <a href="https://www.mhanational.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.mhanational.org</a>
        </li>
         <li>
          <b>National Institute of Mental Health (NIMH):</b> Evidence-based information on symptoms, treatment, and research in depression.
          <br />Website: <a href="https://www.nimh.nih.gov/health/topics/depression" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.nimh.nih.gov/health/topics/depression</a>
        </li>
      </ul>

      {/* 4. Crisis & 24/7 Support Table */}
      <h2 className="disease-section-subt">
        4. Crisis & 24/7 Support
      </h2>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Service</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Contact</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Region / Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Tele-MANAS</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>14416 / 1800-891-4416</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>India 24×7 mental health helpline</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>KIRAN Mental Health Helpline</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>9152987821</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>India 24×7 counselling support</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Vandrevala Foundation</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>+91 9999 666 555</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>India free counselling support</td>
            </tr>
              <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>SAMHSA Helpline</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>1-800-662-4357</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Referral to mental health treatment services</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>National Suicide & Crisis Lifeline</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>988</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Global / USA crisis support</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="disease-section-divider"></div>
{/* 6. Mobile Apps & Digital Tools */}
      <h2 className="disease-section-subt">
        6. Mobile Apps & Digital Tools
      </h2>
      <p className="disease-section-text">
        Technology can assist in symptom tracking, mindfulness, and connecting to support:
      </p>
      
      <ul className="disease-section-text">
        <li><b>Headspace:</b> Guided meditation and mindfulness exercises to reduce stress and improve mood.</li>
        <li><b>Calm:</b> Meditation, sleep aids, and relaxation techniques to manage anxiety and depressive symptoms.</li>
        <li><b>Happify:</b> Evidence-based activities and games to improve emotional wellbeing and resilience.</li>
        <li><b>MoodTools:</b> Tools for tracking mood, self-help resources, and CBT-based exercises.</li>
        <li><b>Woebot:</b> AI-powered chatbot providing daily mental health support using cognitive-behavioral techniques.</li>
      </ul>

      <div className="disease-section-divider"></div>

         
      <p className="disease-section-text">
        Remember, you are not alone in dealing with depression. Reaching out for support from trusted organizations, professionals, and peers is a crucial step toward recovery. These resources are here to provide guidance, coping strategies, and hope for both individuals living with MDD and their families.
      </p>
    </div>
  );
};

export default Resources;
