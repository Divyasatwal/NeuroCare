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
        Living with Alzheimer's disease affects not only the individual diagnosed but also their families, caregivers, and communities. Access to reliable resources, support networks, and educational materials is essential for navigating this journey. This section provides comprehensive information about organizations, hotlines, online communities, and tools designed to help patients and caregivers manage the challenges of Alzheimer's disease.
      </p>

      {/* 1. National Organizations */}
      <h2 className="disease-section-subt">
        1. National Organizations & Advocacy Groups
      </h2>
      <p className="disease-section-text">
        These organizations provide education, support, research funding, and advocacy for Alzheimer's patients and their families:
      </p>
      
      <ul className="disease-section-text">
        <li>
          <b>Alzheimer's Association:</b> The leading voluntary health organization in Alzheimer's care, support, and research. Offers a 24/7 helpline (1-800-272-3900), local chapters, support groups, and educational programs.
          <br />Website: <a href="https://www.alz.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.alz.org</a>
        </li>
        <li>
          <b>Alzheimer's Foundation of America (AFA):</b> Provides support services, educational resources, and care consultation through licensed social workers.
          <br />Website: <a href="https://www.alzfdn.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.alzfdn.org</a>
        </li>
        <li>
          <b>National Institute on Aging (NIA):</b> Part of the National Institutes of Health, conducts and supports research on aging and Alzheimer's disease.
          <br />Website: <a href="https://www.nia.nih.gov" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.nia.nih.gov</a>
        </li>
        <li>
          <b>UsAgainstAlzheimer's:</b> A patient advocacy organization focused on stopping Alzheimer's disease and promoting brain health equity.
          <br />Website: <a href="https://www.usagainstalzheimers.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.usagainstalzheimers.org</a>
        </li>
      </ul>

      {/* 2. Caregiver Support */}
      <h2 className="disease-section-subt">
        2. Caregiver Support Resources
      </h2>
      <p className="disease-section-text">
        Caregiving for someone with Alzheimer's can be emotionally and physically demanding. These resources offer guidance, respite care options, and emotional support:
      </p>
      
      <ul className="disease-section-text">
        <li>
          <b>Family Caregiver Alliance:</b> National center on caregiving offering resources, fact sheets, and online support groups.
          <br />Website: <a href="https://www.caregiver.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.caregiver.org</a>
        </li>
        <li>
          <b>AARP Caregiving Resource Center:</b> Provides tools, tips, and information for family caregivers, including legal and financial planning.
          <br />Website: <a href="https://www.aarp.org/caregiving" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.aarp.org/caregiving</a>
        </li>
        <li>
          <b>Caregiver Action Network:</b> Offers educational resources, peer support, and advocacy for family caregivers.
          <br />Website: <a href="https://www.caregiveraction.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.caregiveraction.org</a>
        </li>
        <li>
          <b>Respite Care Locator:</b> Helps find temporary relief care services in your area through ARCH National Respite Network.
          <br />Website: <a href="https://www.archrespite.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.archrespite.org</a>
        </li>
      </ul>

      {/* 3. Online Communities */}
      <h2 className="disease-section-subt">
        3. Online Communities & Forums
      </h2>
      <p className="disease-section-text">
        Connect with others who understand what you're going through. These online communities provide a safe space to share experiences, ask questions, and find emotional support:
      </p>
      
      <ul className="disease-section-text">
        <li>
          <b>ALZConnected:</b> An online community by the Alzheimer's Association where caregivers and individuals with dementia can connect and share.
          <br />Website: <a href="https://www.alzconnected.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.alzconnected.org</a>
        </li>
        <li>
          <b>DementiaCareCentral Forums:</b> Active forum for caregivers to discuss challenges, treatments, and coping strategies.
          <br />Website: <a href="https://www.dementiacarecentral.com" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.dementiacarecentral.com</a>
        </li>
        <li>
          <b>Reddit r/Alzheimers:</b> A supportive Reddit community where members share personal stories, advice, and resources.
          <br />Website: <a href="https://www.reddit.com/r/Alzheimers" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.reddit.com/r/Alzheimers</a>
        </li>
      </ul>

      {/* 4. Educational Materials */}
      <h2 className="disease-section-subt">
        4. Educational Materials & Publications
      </h2>
      <p className="disease-section-text">
        Understanding the disease is crucial for effective management. These resources provide comprehensive educational materials:
      </p>
      
      <ul className="disease-section-text">
        <li>
          <b>Understanding Alzheimer's and Dementia (Alzheimer's Association):</b> Free educational booklets covering symptoms, diagnosis, treatment, and care planning.
        </li>
        <li>
          <b>BrightFocus Foundation:</b> Offers free publications, webinars, and research updates on Alzheimer's disease.
          <br />Website: <a href="https://www.brightfocus.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.brightfocus.org</a>
        </li>
        <li>
          <b>Mayo Clinic Alzheimer's Disease Center:</b> Comprehensive medical information, treatment options, and lifestyle recommendations.
          <br />Website: <a href="https://www.mayoclinic.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.mayoclinic.org</a>
        </li>
        <li>
          <b>NIH Alzheimer's Disease Education and Referral Center:</b> Science-based information about Alzheimer's disease and related dementias.
          <br />Website: <a href="https://www.nia.nih.gov/health/alzheimers" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.nia.nih.gov/health/alzheimers</a>
        </li>
      </ul>

      {/* 5. Financial & Legal Assistance */}
      <h2 className="disease-section-subt">
        5. Financial & Legal Resources
      </h2>
      <p className="disease-section-text">
        Managing the financial and legal aspects of Alzheimer's care is essential. These resources can help:
      </p>
      
      <ul className="disease-section-text">
        <li>
          <b>Medicare.gov:</b> Information about Medicare coverage for Alzheimer's care, including hospital stays, doctor visits, and hospice care.
          <br />Website: <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.medicare.gov</a>
        </li>
        <li>
          <b>Medicaid:</b> State-specific programs that may cover long-term care costs. Contact your state Medicaid office for eligibility information.
        </li>
        <li>
          <b>National Academy of Elder Law Attorneys (NAELA):</b> Find attorneys specializing in elder law, estate planning, and long-term care planning.
          <br />Website: <a href="https://www.naela.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.naela.org</a>
        </li>
        <li>
          <b>Benefits Checkup (NCOA):</b> A free service to help identify federal, state, and private benefit programs for older adults.
          <br />Website: <a href="https://www.benefitscheckup.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.benefitscheckup.org</a>
        </li>
      </ul>

      {/* 6. Research & Clinical Trials */}
      <h2 className="disease-section-subt">
        6. Research Participation & Clinical Trials
      </h2>
      <p className="disease-section-text">
        Participating in research can help advance our understanding of Alzheimer's and may provide access to new treatments:
      </p>
      
      <ul className="disease-section-text">
        <li>
          <b>ClinicalTrials.gov:</b> A database of privately and publicly funded clinical studies conducted around the world.
          <br />Website: <a href="https://www.clinicaltrials.gov" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.clinicaltrials.gov</a>
        </li>
        <li>
          <b>Alzheimer's Prevention Registry:</b> Join a community committed to ending Alzheimer's by staying informed about prevention research opportunities.
          <br />Website: <a href="https://www.endalzheimer.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.endalznow.org</a>
        </li>
        <li>
          <b>TrialMatch (Alzheimer's Association):</b> A free service that matches individuals with current Alzheimer's clinical studies.
          <br />Website: <a href="https://www.alz.org/trialmatch" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.alz.org/trialmatch</a>
        </li>
      </ul>

      {/* 7. Helplines & Crisis Support */}
      <h2 className="disease-section-subt">
        7. 24/7 Helplines & Crisis Support
      </h2>
      <p className="disease-section-text">
        Immediate support is available when you need it most:
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
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Alzheimer's Association Helpline</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>1-800-272-3900</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>24/7 support, information, and care consultation</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Eldercare Locator</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>1-800-677-1116</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Connect to local resources and services</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>National Suicide Prevention Lifeline</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>988</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Crisis support for individuals and caregivers</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Family Caregiver Alliance</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}><b>1-800-445-8106</b></td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Information and support for caregivers</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 8. Mobile Apps & Digital Tools */}
      <h2 className="disease-section-subt">
        8. Mobile Apps & Digital Tools
      </h2>
      <p className="disease-section-text">
        Technology can help manage daily tasks, track symptoms, and stay connected:
      </p>
      
      <ul className="disease-section-text">
        <li>
          <b>MindMate:</b> Brain games, nutrition tips, and exercise routines designed for cognitive health.
        </li>
        <li>
          <b>CareZone:</b> Medication management, appointment tracking, and care coordination tool for families.
        </li>
        <li>
          <b>Lotsa Helping Hands:</b> Coordinates community support by organizing meals, rides, and visits.
        </li>
        <li>
          <b>Dementia Guide (by Alzheimer's Association):</b> Personalized action plans and resources delivered to your phone.
        </li>
        <li>
          <b>Lumosity:</b> Brain training games designed to improve memory, attention, and cognitive flexibility.
        </li>
      </ul>

      <div className="disease-section-divider"></div>
      
      <p className="disease-section-text">
        Remember, you are not alone in this journey. Whether you're a patient, caregiver, or loved one, these resources are here to provide support, guidance, and hope. Reaching out for help is a sign of strength, and connecting with others who understand can make all the difference. Don't hesitate to use these resources—they exist to help you navigate the challenges of Alzheimer's disease with dignity and compassion.
      </p>
    </div>
  );
};

export default Resources;