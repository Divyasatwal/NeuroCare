import React from "react";
import "../DiseaseLayout.css";

const Overview = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Overview: Understanding MDD</h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Major Depressive Disorder (MDD), also known as clinical depression, is a
        serious mood disorder characterized by persistent sadness, loss of
        interest, and emotional and physical symptoms that interfere with daily
        life. It affects how a person feels, thinks, and behaves.
      </p>

      <p className="disease-section-text">
        Unlike temporary feelings of sadness, MDD lasts for weeks, months, or
        even years and requires proper medical intervention. It is one of the
        most common mental health disorders worldwide.
      </p>
    </div>
  );
};

export default Overview;
