import React from "react";
import "../DiseaseLayout.css";

const Statistics = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">Statistics</h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        MDD is one of the leading causes of disability worldwide.
      </p>

      <ul className="disease-section-list">
        <li>Affects over 280 million people globally</li>
        <li>More common in women than men</li>
        <li>High risk during adolescence and adulthood</li>
        <li>About 30% of patients experience chronic symptoms</li>
      </ul>
    </div>
  );
};

export default Statistics;
