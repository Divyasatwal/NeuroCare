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
          <b>Alzheimer's Association (Global):</b> Provides support, education, and resources for Alzheimer’s and other types of dementia. Offers a 24/7 helpline (1-800-272-3900), local chapters, support groups, and educational programs.
          <br />Website: <a href="https://www.alz.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.alz.org</a>
        </li>
        <li>
          <b>Dementia Society of America (Global):</b> Offers education, caregiver resources, and support for people with dementia and their families.
          <br />Website: <a href="https://www.dementiasociety.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.dementiasociety.org</a>
        </li>
        <li>
          <b>Alzheimer’s & Dementia India (India):</b> National support, helpline, and advocacy for patients and caregivers.
          <br />Helpline: <b>+91 11 2649 4442</b>
          <br />Website: <a href="https://www.alzheimersindia.org.in" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.alzheimersindia.org.in</a>
        </li>
        <li>
          <b>Parkinson’s Disease Society of India (India):</b> Support for neurological disorders, including dementia-related guidance.
          <br />Helpline: <b>1800-180-2567</b>
          <br />Website: <a href="https://www.pdsiindia.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.pdsiindia.org</a>
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
          <b>Family Caregiver Alliance (Global):</b> National center on caregiving offering resources, fact sheets, and online support groups.
          <br />Website: <a href="https://www.caregiver.org" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.caregiver.org</a>
        </li>
        <li>
          <b>ADI Caregiver Support (India):</b> Counseling and local support groups for caregivers.
          <br />Helpline: <b>+91 11 2649 4442</b>
          <br />Website: <a href="https://www.alzheimersindia.org.in" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.alzheimersindia.org.in</a>
        </li>
        <li>
          <b>NIMHANS Caregiver Helpline (India, Bengaluru):</b> Guidance for neurological caregivers.
          <br />Phone: <b>080-26995000</b>
          <br />Website: <a href="https://www.nimhans.ac.in" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.nimhans.ac.in</a>
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
          <b>DementiaCareCentral Forums (Global):</b> Active forum for caregivers to discuss challenges, treatments, and coping strategies.
          <br />Website: <a href="https://www.dementiacarecentral.com" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.dementiacarecentral.com</a>
        </li>
        <li>
          <b>ADI Online Forum (India):</b> Indian caregivers and patients connect for support and guidance.
          <br />Helpline / WhatsApp: <b>+91 98100 34567</b>
          <br />Website: <a href="https://www.alzheimersindia.org.in/forum" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.alzheimersindia.org.in/forum</a>
        </li>
        <li>
          <b>Reddit r/dementia:</b> Global community for sharing tips, questions, and lived experiences.
          <br />Website: <a href="https://www.reddit.com/r/dementia" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.reddit.com/r/dementia</a>
        </li>
      </ul>

      {/* 4. Educational Materials */}
      <h2 className="disease-section-subt">
        4. Educational Materials & Publications
      </h2>
      <ul className="disease-section-text">
        <li>
          <b>Understanding Dementia (Alzheimer's Association):</b> Global educational booklets covering symptoms, diagnosis, treatment, and care planning.
        </li>
        <li>
          <b>ADI Info Desk (India):</b> Provides booklets, webinars, and caregiver guides.
          <br />Helpline: <b>+91 11 2649 4442</b>
          <br />Website: <a href="https://www.alzheimersindia.org.in" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.alzheimersindia.org.in</a>
        </li>
        <li>
          <b>NIMHANS Neurology Education (India):</b> Educational resources for neurological disorders.
          <br />Phone: <b>080-26995000</b>
          <br />Website: <a href="https://www.nimhans.ac.in" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.nimhans.ac.in</a>
        </li>
      </ul>

      {/* 5. Financial & Legal Assistance */}
      <h2 className="disease-section-subt">
        5. Financial & Legal Resources
      </h2>
      <ul className="disease-section-text">
        <li>
          <b>National Trust – Disability Helpline (India):</b> Financial and legal guidance for elder care.
          <br />Toll-Free: <b>1800-425-8484</b>
          <br />Website: <a href="https://thenationaltrust.gov.in" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.thenationaltrust.gov.in</a>
        </li>
        <li>
          <b>ESI / Disability Assistance (India):</b> Social security and disability support.
          <br />Toll-Free: <b>1800-180-3333</b>
          <br />Website: <a href="https://www.esic.nic.in" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.esic.nic.in</a>
        </li>
        <li>
          <b>Medicare / Medicaid (Global):</b> Coverage information for dementia care.
          <br />Website: <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.medicare.gov</a>
        </li>
      </ul>

      {/* 6. Research & Clinical Trials */}
      <h2 className="disease-section-subt">
        6. Research Participation & Clinical Trials
      </h2>
      <ul className="disease-section-text">
        <li>
          <b>ClinicalTrials.gov (Global):</b> Database of clinical studies worldwide.
          <br />Website: <a href="https://www.clinicaltrials.gov" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.clinicaltrials.gov</a>
        </li>
        <li>
          <b>NIMHANS Clinical Research Desk (India):</b> Dementia and neurological research trials.
          <br />Phone: <b>080-26995000</b>
          <br />Website: <a href="https://www.nimhans.ac.in/research" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.nimhans.ac.in/research</a>
        </li>
        <li>
          <b>ICMR Clinical Trials (India):</b> Government database for medical research.
          <br />Phone: <b>011-2373 9000</b>
          <br />Website: <a href="https://www.icmr.gov.in" target="_blank" rel="noopener noreferrer" style={{color: '#116466', textDecoration: 'underline'}}>www.icmr.gov.in</a>
        </li>
      </ul>

      {/* 7. Helplines & Crisis Support */}
      <h2 className="disease-section-subt">
        7. 24/7 Helplines & Crisis Support
      </h2>
      <ul className="disease-section-text">
        <li>
          <b>Alzheimer's & Dementia India Helpline:</b> +91 11 2649 4442
        </li>
        <li>
          <b>Parkinson’s Disease Society of India Helpline:</b> 1800-180-2567
        </li>
        <li>
          <b>NIMHANS Mental Health Helpline:</b> 080-26995000
        </li>
        <li>
          <b>Vandrevala Foundation (Mental Health 24/7):</b> 1860-266-2345
        </li>
        <li>
          <b>AASRA Suicide Prevention Helpline:</b> +91 9820466726
        </li>
      </ul>

      {/* 8. Mobile Apps & Digital Tools */}
      <h2 className="disease-section-subt">
        8. Mobile Apps & Digital Tools
      </h2>
      <ul className="disease-section-text">
        <li>
          <b>ADI Mobile App (India):</b> Guides, symptom tracking, and resources.
          <br />Helpline: +91 11 2649 4442
        </li>
        <li>
          <b>PDSI Mobile App (India):</b> Support for caregivers and patients.
          <br />Helpline: 1800-180-2567
        </li>
        <li>
          <b>BrightFocus / Global Apps:</b> Symptom trackers, educational tools, and exercises.
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
