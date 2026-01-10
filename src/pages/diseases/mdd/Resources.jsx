import React from "react";
import "../DiseaseLayout.css";

const Resources = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Support & Resources</h2>
      <div className="disease-section-divider"></div>

      <ul className="disease-section-list">
        <li>National Mental Health Helpline</li>
        <li>Local psychiatric clinics</li>
        <li>Online therapy platforms</li>
        <li>Mental health support groups</li>
        <li>Emergency services for severe symptoms</li>
      </ul>
    </div>
  );
};

export default Resources;
