// import React from "react";
// import "../DiseaseLayout.css";

// const Resources = () => {
//   return (
//     <div>
//       <h2 className="disease-section-title">Resources</h2>
//       <div className="disease-section-divider"></div>
//       <p className="disease-section-text">
//         Helpful resources include the World Health Organization, Alzheimer’s Association,
//         and Dementia Research Institute. Support groups and online communities also
//         provide valuable guidance and emotional support.
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
        Living with dementia affects not only the individual diagnosed but also their families, caregivers, and communities. Access to reliable resources, support networks, and educational materials is essential for navigating this journey. This section provides comprehensive information about organizations, hotlines, online communities, and tools designed to help patients and caregivers manage the challenges of dementia.
      </p>

      {/* 1. National Organizations */}
      <h2 className="disease-section-subt">
        1. National Organizations & Advocacy Groups
      </h2>
      <p className="disease-section-text">
        These organizations provide education, support, research funding, and advocacy for dementia patients and their families:
      </p>
      
      <ul className="disease-section-text">
        <li>
          <b>Alzheimer's Association:</b> Provides support, education, and resources for Alzheimer’s and other types of dementia. Offers a 24/7 helpline (1-800-272-3900), local chapters, support groups, and educational programs.
          <br />Website: <a href="https://www.alz.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.alz.org</a>
        </li>
        <li>
          <b>Dementia Society of America:</b> Offers education, caregiver resources, and support for people with dementia and their families.
          <br />Website: <a href="https://www.dementiasociety.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.dementiasociety.org</a>
        </li>
        <li>
          <b>National Institute on Aging (NIA):</b> Part of NIH, conducts research and provides information on dementia and age-related cognitive changes.
          <br />Website: <a href="https://www.nia.nih.gov" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.nia.nih.gov</a>
        </li>
      </ul>

      {/* 2. Caregiver Support */}
      <h2 className="disease-section-subt">
        2. Caregiver Support Resources
      </h2>
      <p className="disease-section-text">
        Caregiving for someone with dementia can be emotionally and physically demanding. These resources offer guidance, respite care options, and emotional support:
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
          <b>DementiaCareCentral Forums:</b> Active forum for caregivers to discuss challenges, treatments, and coping strategies.
          <br />Website: <a href="https://www.dementiacarecentral.com" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.dementiacarecentral.com</a>
        </li>
        <li>
          <b>Reddit r/dementia:</b> A supportive community for people affected by dementia and their caregivers.
          <br />Website: <a href="https://www.reddit.com/r/dementia" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.reddit.com/r/dementia</a>
        </li>
      </ul>

      {/* 4. Educational Materials */}
      <h2 className="disease-section-subt">
        4. Educational Materials & Publications
      </h2>
      <p className="disease-section-text">
        Understanding dementia is crucial for effective management. These resources provide comprehensive educational materials:
      </p>
      
      <ul className="disease-section-text">
        <li>
          <b>Understanding Dementia (Alzheimer's Association):</b> Free educational booklets covering symptoms, diagnosis, treatment, and care planning for all types of dementia.
        </li>
        <li>
          <b>BrightFocus Foundation:</b> Offers publications, webinars, and research updates on dementia.
          <br />Website: <a href="https://www.brightfocus.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.brightfocus.org</a>
        </li>
        <li>
          <b>Mayo Clinic Dementia Center:</b> Comprehensive medical information, treatment options, and lifestyle recommendations.
          <br />Website: <a href="https://www.mayoclinic.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.mayoclinic.org</a>
        </li>
      </ul>

      {/* 5. Financial & Legal Assistance */}
      <h2 className="disease-section-subt">
        5. Financial & Legal Resources
      </h2>
      <p className="disease-section-text">
        Managing the financial and legal aspects of dementia care is essential. These resources can help:
      </p>
      
      <ul className="disease-section-text">
        <li>
          <b>Medicare.gov:</b> Information about Medicare coverage for dementia care, including hospital stays, doctor visits, and hospice care.
          <br />Website: <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.medicare.gov</a>
        </li>
        <li>
          <b>Medicaid:</b> State-specific programs that may cover long-term care costs. Contact your state Medicaid office for eligibility information.
        </li>
        <li>
          <b>National Academy of Elder Law Attorneys (NAELA):</b> Find attorneys specializing in elder law, estate planning, and long-term care planning.
          <br />Website: <a href="https://www.naela.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.naela.org</a>
        </li>
      </ul>

      {/* 6. Research & Clinical Trials */}
      <h2 className="disease-section-subt">
        6. Research Participation & Clinical Trials
      </h2>
      <p className="disease-section-text">
        Participating in research can help advance our understanding of dementia and may provide access to new treatments:
      </p>
      
      <ul className="disease-section-text">
        <li>
          <b>ClinicalTrials.gov:</b> A database of privately and publicly funded clinical studies conducted around the world.
          <br />Website: <a href="https://www.clinicaltrials.gov" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.clinicaltrials.gov</a>
        </li>
      </ul>

      {/* 7. Helplines & Crisis Support */}
      <h2 className="disease-section-subt">
        7. 24/7 Helplines & Crisis Support
      </h2>
      <p className="disease-section-text">
        Immediate support is available when you need it most:
      </p>
      
      <ul className="disease-section-text">
        <li>
          <b>Alzheimer's Association Helpline:</b> 24/7 support for dementia caregivers and patients. 1-800-272-3900
        </li>
        <li>
          <b>Eldercare Locator:</b> Connect to local resources and services. 1-800-677-1116
        </li>
        <li>
          <b>National Suicide Prevention Lifeline:</b> Crisis support for individuals and caregivers. 988
        </li>
      </ul>

      <div className="disease-section-divider"></div>
      
      <p className="disease-section-text">
        Remember, you are not alone in this journey. Whether you're a patient, caregiver, or loved one, these resources provide support, guidance, and hope. Reaching out for help is a sign of strength, and connecting with others who understand can make all the difference. These resources exist to help you navigate the challenges of dementia with dignity and compassion.
      </p>
    </div>
  );
};

export default Resources;

