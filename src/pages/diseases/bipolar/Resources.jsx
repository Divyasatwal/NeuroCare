import React from "react";
import "../DiseaseLayout.css";

const BipolarResources = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Support & Resources for Bipolar Disorder
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Living with bipolar disorder affects not only the individual diagnosed but also their families, caregivers, and communities. Access to reliable resources, support networks, and educational materials is essential for managing mood episodes, treatment adherence, and overall wellbeing. This section provides comprehensive information about organizations, hotlines, online communities, and tools designed to help individuals and caregivers navigate the challenges of bipolar disorder.
      </p>

      {/* 1. National Organizations */}
      <h2 className="disease-section-subt">
        1. National Organizations & Advocacy Groups
      </h2>
      <p className="disease-section-text">
        These organizations provide education, advocacy, support groups, and resources for individuals living with bipolar disorder and their families:
      </p>
      <ul className="disease-section-text">
        <li>
          <b>National Alliance on Mental Illness (NAMI):</b> Provides support groups, educational programs, and advocacy for all mental health conditions, including bipolar disorder.
          <br />Website: <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.nami.org</a>
        </li>
        <li>
          <b>Depression and Bipolar Support Alliance (DBSA):</b> Focused on providing peer-led support groups, educational materials, and wellness tools.
          <br />Website: <a href="https://www.dbsalliance.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.dbsalliance.org</a>
        </li>
        <li>
          <b>Mental Health America (MHA):</b> Offers information, advocacy, and screening tools for mental health conditions including bipolar disorder.
          <br />Website: <a href="https://www.mhanational.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.mhanational.org</a>
        </li>
        <li>
          <b>International Bipolar Foundation:</b> Provides educational resources, research updates, and support for patients and families globally.
          <br />Website: <a href="https://ibpf.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.ibpf.org</a>
        </li>
      </ul>

      {/* 2. Caregiver Support */}
      <h2 className="disease-section-subt">
        2. Caregiver & Family Support Resources
      </h2>
      <p className="disease-section-text">
        Caring for someone with bipolar disorder can be challenging. These resources provide guidance, support networks, and educational materials to help families and caregivers:
      </p>
      <ul className="disease-section-text">
        <li>
          <b>NAMI Family Support Programs:</b> Offers educational workshops and support groups specifically for families of individuals with mental health conditions.
          <br />Website: <a href="https://www.nami.org/Support-Education/Mental-Health-Education/NAMI-Family-to-Family" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>Family-to-Family Program</a>
        </li>
        <li>
          <b>DBSA Family & Friends:</b> Provides resources, educational webinars, and community forums for caregivers of people living with bipolar disorder.
          <br />Website: <a href="https://www.dbsalliance.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.dbsalliance.org</a>
        </li>
        <li>
          <b>MHA Caregiver Resources:</b> Guidance on supporting loved ones, managing stress, and accessing services.
          <br />Website: <a href="https://www.mhanational.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.mhanational.org</a>
        </li>
      </ul>

      {/* 3. Online Communities */}
      <h2 className="disease-section-subt">
        3. Online Communities & Peer Support
      </h2>
      <p className="disease-section-text">
        Online communities allow individuals and caregivers to share experiences, ask questions, and receive emotional support from others who understand the challenges of bipolar disorder:
      </p>
      <ul className="disease-section-text">
        <li>
          <b>DBSA Online Support Groups:</b> Peer-led discussion forums and online meetings for people with bipolar disorder and their families.
          <br />Website: <a href="https://www.dbsalliance.org/peer-support-programs/" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>DBSA Peer Support</a>
        </li>
        <li>
          <b>Reddit r/Bipolar:</b> A supportive community to share stories, tips, and resources with others experiencing bipolar disorder.
          <br />Website: <a href="https://www.reddit.com/r/bipolar/" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.reddit.com/r/bipolar</a>
        </li>
        <li>
          <b>HealthUnlocked Bipolar Community:</b> A moderated online platform where patients and caregivers exchange advice and support.
          <br />Website: <a href="https://healthunlocked.com" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.healthunlocked.com</a>
        </li>
      </ul>

      {/* 4. Educational Materials */}
      <h2 className="disease-section-subt">
        4. Educational Materials & Publications
      </h2>
      <p className="disease-section-text">
        Learning about bipolar disorder is key for self-management, early intervention, and reducing stigma. The following resources provide evidence-based information:
      </p>
      <ul className="disease-section-text">
        <li>
          <b>DBSA Educational Booklets:</b> Detailed guides on understanding bipolar disorder, treatment options, coping strategies, and wellness planning.
        </li>
        <li>
          <b>NAMI Resource Library:</b> Free guides, videos, and toolkits on bipolar disorder and mental health management.
          <br />Website: <a href="https://www.nami.org/Learn-More/Mental-Health-Conditions/Bipolar-Disorder" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>Bipolar Disorder Info</a>
        </li>
        <li>
          <b>MHA Fact Sheets:</b> Evidence-based publications covering symptoms, treatments, and support options.
          <br />Website: <a href="https://www.mhanational.org/conditions/bipolar-disorder" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>MHA Bipolar Disorder</a>
        </li>
      </ul>

      {/* 5. Financial & Legal Support */}
      <h2 className="disease-section-subt">
        5. Financial & Legal Resources
      </h2>
      <p className="disease-section-text">
        Managing the financial and legal aspects of mental health care is important for patients and caregivers:
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Social Security Disability Benefits:</b> Guidance on applying for SSDI or SSI for individuals whose symptoms impact employment.
          <br />Website: <a href="https://www.ssa.gov/disability/" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.ssa.gov/disability</a>
        </li>
        <li>
          <b>Mental Health America – Financial Assistance:</b> Information about state-specific programs, grants, and insurance options for mental health care.
          <br />Website: <a href="https://www.mhanational.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.mhanational.org</a>
        </li>
      </ul>

      {/* 6. Crisis Helplines */}
      <h2 className="disease-section-subt">
        6. 24/7 Helplines & Crisis Support
      </h2>
      <p className="disease-section-text">
        Immediate support is available if you or a loved one experiences severe mood episodes, thoughts of self-harm, or emotional distress:
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Organization</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Phone Number</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Service</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>National Suicide & Crisis Lifeline</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>988</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>24/7 confidential crisis support for individuals in emotional distress</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>NAMI HelpLine</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>1-800-950-6264</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Information, referral, and support for mental health conditions</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Crisis Text Line</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>Text HOME to 741741</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Free, 24/7 text support for those in crisis</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 7. Digital Tools */}
      <h2 className="disease-section-subt">
        7. Mobile Apps & Digital Tools
      </h2>
      <p className="disease-section-text">
        Digital tools can help with symptom tracking, medication reminders, and mood management:
      </p>
      <ul className="disease-section-text">
        <li><b>Moodfit:</b> Tracks mood, sleep, medication adherence, and provides coping tools for mental health management.</li>
        <li><b>DBSA Wellness Tracker:</b> Allows users to monitor mood episodes, triggers, and recovery patterns.</li>
        <li><b>Pacifica (now Sanvello):</b> Offers guided mindfulness, cognitive behavioral therapy exercises, and mood tracking.</li>
        <li><b>7 Cups:</b> Provides online chat support with trained listeners and therapists for mental health concerns.</li>
      </ul>

      <div className="disease-section-divider"></div>
      <p className="disease-section-text">
        Remember, bipolar disorder can be challenging, but you are not alone. Leveraging these resources, seeking professional help, and connecting with support communities can improve coping, treatment adherence, and overall quality of life. Support is available for both individuals with bipolar disorder and their caregivers—reach out whenever needed.
      </p>
    </div>
  );
};

export default BipolarResources;
