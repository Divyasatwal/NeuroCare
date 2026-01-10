/*import React from "react";
import "../DiseaseLayout.css";

const Overview = () => (
  <div className="disease-section">
    <h2>Dementia Overview</h2>
    <p>This section gives an overview of Dementia...</p>
  </div>
);

export default Overview;*/

import React from "react";
import "../DiseaseLayout.css";

const Overview = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Overview: Understanding Dementia</h2>
      <div className="disease-section-divider"></div>
      <p className="disease-section-text">
        Dementia is a general term for a group of symptoms affecting memory,
        thinking, and social abilities severely enough to interfere with daily
        life. It’s not a specific disease but a collection of symptoms caused by
        various disorders that affect the brain.
      </p>
    </div>
  );
};

export default Overview;

