import React from 'react';
import './statssection.css';

const Statistics = () => {
  const stats = [
    {
      number: "55M+",
      label: "People Living with Dementia",
      sublabel: "Worldwide in 2024",
    },
    {
      number: "10M",
      label: "New Cases Every Year",
      sublabel: "One every 3 seconds",
    },
    {
      number: "8.5M",
      label: "Parkinson's Patients",
      sublabel: "Global prevalence",
    },
    {
      number: "280M",
      label: "People with Depression",
      sublabel: "Affecting all ages",
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {/* Header */}
        <div className="stats-header">
          <h2 className="stats-title">
            Understanding the <span className="stats-highlight">Global Impact</span>
          </h2>
          <p className="stats-subtitle">
            Neurological conditions affect millions worldwide. Knowledge and awareness 
            are the first steps toward better care and support.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-num">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sublabel">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
