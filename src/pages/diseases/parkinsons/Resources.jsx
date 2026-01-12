/*import React from "react";
import "../DiseaseLayout.css";

const Resources = () => {
  return (
    <div className="content-section">
      <h1>Support & Resources</h1>

      <ul>
        <li>Parkinson’s Foundation</li>
        <li>Michael J. Fox Foundation</li>
        <li>World Parkinson Coalition</li>
        <li>Local neurology clinics and rehabilitation centers</li>
        <li>Support groups for patients and caregivers</li>
        <li>Exercise programs (yoga, tai chi, physiotherapy)</li>
      </ul>
    </div>
  );
};

export default Resources;*/

// import React from "react";
// import "../DiseaseLayout.css";

// const Resources = () => {
//   return (
//     <div className="disease-section">
//       <h2 className="disease-section-title">Helpful Resources</h2>
//       <div className="disease-section-divider"></div>
//       <p className="disease-section-text">
//         Support groups, therapy options, and Parkinson’s associations can help
//         patients and caregivers manage the condition.
//       </p>
//     </div>
//   );
// };

// export default Resources;

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
        Living with Parkinson’s disease affects individuals physically, emotionally, and socially. Access to trusted information, support services, and community resources can significantly improve quality of life for patients, families, and caregivers. This section provides reliable organizations, helplines, online communities, and educational tools dedicated to Parkinson’s disease.
      </p>

      {/* 1. National Organizations */}
      <h2 className="disease-section-subt">
        1. National Organizations & Advocacy Groups
      </h2>
      <p className="disease-section-text">
        These major organizations lead efforts in Parkinson’s research, education, and patient support:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Parkinson’s Foundation:</b> Offers education, support lines, local resources, and research funding.
          <br />Website: <a href="https://www.parkinson.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.parkinson.org</a>
        </li>
        <li>
          <b>Michael J. Fox Foundation (MJFF):</b> The world’s largest nonprofit funder of Parkinson’s research; provides extensive educational materials and tools.
          <br />Website: <a href="https://www.michaeljfox.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.michaeljfox.org</a>
        </li>
        <li>
          <b>American Parkinson Disease Association (APDA):</b> Offers nationwide support groups, educational programs, and a helpline.
          <br />Website: <a href="https://www.apdaparkinson.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.apdaparkinson.org</a>
        </li>
        <li>
          <b>National Institute of Neurological Disorders and Stroke (NINDS):</b> Provides research updates, treatment guidelines, and scientific resources.
          <br />Website: <a href="https://www.ninds.nih.gov" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.ninds.nih.gov</a>
        </li>
      </ul>

      {/* 2. Caregiver Support */}
      <h2 className="disease-section-subt">
        2. Caregiver Support Resources
      </h2>
      <p className="disease-section-text">
        Caregivers play a crucial role in Parkinson’s management. These resources are designed to support their emotional, physical, and practical needs:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Parkinson’s Foundation Care Partner Program:</b> Workshops, training, and caregiver-specific educational guides.
        </li>
        <li>
          <b>APDA Caregiver Support:</b> Nationwide groups, webinars, and counseling resources.
          <br />Website: <a href="https://www.apdaparkinson.org/support/caregiver-resources" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>APDA Caregiver Resources</a>
        </li>
        <li>
          <b>Family Caregiver Alliance:</b> Support groups, fact sheets, and care techniques for neurological conditions.
          <br />Website: <a href="https://www.caregiver.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.caregiver.org</a>
        </li>
        <li>
          <b>Respite Care Locator (ARCH):</b> Helps families find temporary caregiving relief.
          <br />Website: <a href="https://www.archrespite.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.archrespite.org</a>
        </li>
      </ul>

      {/* 3. Online Communities */}
      <h2 className="disease-section-subt">
        3. Online Communities & Forums
      </h2>
      <p className="disease-section-text">
        These communities provide spaces for patients and caregivers to share experiences and emotional support:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Parkinson’s Foundation Forums:</b> Active discussions on symptoms, treatments, and daily challenges.
        </li>
        <li>
          <b>PatientsLikeMe – Parkinson’s:</b> Share symptoms progression, medication experiences, and connect with others.
          <br />Website: <a href="https://www.patientslikeme.com" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.patientslikeme.com</a>
        </li>
        <li>
          <b>Reddit r/Parkinsons:</b> Community-led support group for sharing tips, questions, and lived experiences.
          <br />Website: <a href="https://www.reddit.com/r/Parkinsons" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.reddit.com/r/Parkinsons</a>
        </li>
      </ul>

      {/* 4. Educational Materials */}
      <h2 className="disease-section-subt">
        4. Educational Materials & Publications
      </h2>
      <p className="disease-section-text">
        These resources help patients and families understand Parkinson’s symptoms, treatments, and lifestyle strategies:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Parkinson’s Foundation Educational Library:</b> Free fact sheets, videos, and guides on symptoms and care.
        </li>
        <li>
          <b>Michael J. Fox Foundation Resources:</b> In-depth articles, webinars, and scientific briefings.
          <br />Website: <a href="https://www.michaeljfox.org/news" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>MJFF Resources</a>
        </li>
        <li>
          <b>Mayo Clinic – Parkinson’s Disease:</b> Medical explanations, treatments, and lifestyle advice.
          <br />Website: <a href="https://www.mayoclinic.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.mayoclinic.org</a>
        </li>
        <li>
          <b>NINDS Parkinson’s Information:</b> Research-based material about Parkinson’s and related disorders.
        </li>
      </ul>

      {/* 5. Financial & Legal Assistance */}
      <h2 className="disease-section-subt">
        5. Financial & Legal Resources
      </h2>
      <p className="disease-section-text">
        Parkinson’s may involve long-term care needs. These resources help manage financial and legal planning:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Medicare.gov:</b> Information on coverage for Parkinson’s treatments, therapy, and hospital care.
          <br />Website: <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.medicare.gov</a>
        </li>
        <li>
          <b>Social Security Disability Insurance (SSDI):</b> Many Parkinson’s patients qualify for SSDI benefits.
        </li>
        <li>
          <b>National Academy of Elder Law Attorneys (NAELA):</b> For help with estate planning, long-term care, and disability law.
          <br />Website: <a href="https://www.naela.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.naela.org</a>
        </li>
      </ul>

      {/* 6. Research & Clinical Trials */}
      <h2 className="disease-section-subt">
        6. Research Participation & Clinical Trials
      </h2>
      <p className="disease-section-text">
        Clinical trials help advance new treatments such as stem cell therapy, gene therapy, and neuroprotective drugs:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>ClinicalTrials.gov – Parkinson’s Studies:</b> See current ongoing trials worldwide.
          <br />Website: <a href="https://www.clinicaltrials.gov" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.clinicaltrials.gov</a>
        </li>
        <li>
          <b>Fox Trial Finder:</b> A clinical trial matching tool by the Michael J. Fox Foundation.
          <br />Website: <a href="https://foxtrialfinder.michaeljfox.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>Fox Trial Finder</a>
        </li>
        <li>
          <b>Parkinson’s Progression Markers Initiative (PPMI):</b> A landmark study to understand Parkinson’s before symptoms appear.
        </li>
      </ul>

      {/* 7. Helplines */}
      <h2 className="disease-section-subt">
        7. 24/7 Helplines & Crisis Support
      </h2>
      <p className="disease-section-text">
        These helplines offer immediate assistance to patients and caregivers:
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
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Parkinson’s Foundation Helpline</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>1-800-4PD-INFO</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Expert information, support, and resources</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>APDA Helpline</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>1-800-223-2732</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Support and referrals to local services</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>National Suicide Prevention Lifeline</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>988</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Crisis support for individuals and caregivers</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 8. Mobile Apps */}
      <h2 className="disease-section-subt">
        8. Mobile Apps & Digital Tools
      </h2>
      <p className="disease-section-text">
        Apps that help track symptoms, medication schedules, and exercise routines:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Parkinson mPower:</b> Research-based app for tracking symptoms using smartphone sensors.
        </li>
        <li>
          <b>StrivePD:</b> Tracks tremors, medication timing, and motor fluctuations using Apple Health.
        </li>
        <li>
          <b>MyParkinsonsTeam:</b> A social network for patients and caregivers.
        </li>
        <li>
          <b>Medisafe:</b> Medication reminder app for managing complex prescriptions.
        </li>
      </ul>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Remember, no one faces Parkinson’s alone. These resources are available to guide, support, and empower you. Reaching out for help is a sign of strength, and connecting with a community can make a meaningful difference in managing Parkinson’s disease with resilience and dignity.
      </p>
    </div>
  );
};

export default Resources;
