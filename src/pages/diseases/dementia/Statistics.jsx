// import React from "react";
// import "../DiseaseLayout.css";

// const Statistics = () => {
//   return (
//     <div>
//       <h2 className="disease-section-title">Statistics</h2>
//       <div className="disease-section-divider"></div>
//       <p className="disease-section-text">
//         Globally, over 55 million people are living with dementia, and nearly
//         10 million new cases occur every year. Alzheimer’s disease accounts for
//         60–70% of dementia cases.
//       </p>
//     </div>
//   );
// };

// export default Statistics;


import React, { useState, useEffect } from "react";
import "../DiseaseLayout.css";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Data for dementia types pie chart
  const typesData = {
  labels: ["Alzheimer's", "Vascular", "Lewy Body", "Frontotemporal", "Mixed", "Other"],
  datasets: [
    {
      data: [65, 12, 8, 7, 6, 2],
      backgroundColor: ["#d45d00", "#116466", "#ae530e", "#f5a623", "#8b5e3c", "#6b4c3b"],
      borderWidth: 1,
    },
  ],
};


  return (
    <div className="disease-section">
      <h2 className="disease-section-title" style={{ fontSize: "2.5rem" }}>Statistics</h2>
      <div className="disease-section-divider" style={{ height: "4px", width: "80px" }}></div>

      {/* Global Statistics */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.08))',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        border: '2px solid rgba(17, 100, 102, 0.2)',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.6s ease'
      }}>
        <h3 className="disease-section-subt" style={{ fontSize: "1.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "2rem" }}>🌍</span> Global Impact
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
          <div style={{ textAlign: "center", padding: "1.5rem", background: "rgba(255,255,255,0.6)", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "3rem", fontWeight: "800", color: "#d45d00", marginBottom: "0.5rem" }}>57M</div>
            <div style={{ fontSize: "0.9rem", color: "#333", fontWeight: "600" }}>Current Cases</div>
          </div>
          <div style={{ textAlign: "center", padding: "1.5rem", background: "rgba(255,255,255,0.6)", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "3rem", fontWeight: "800", color: "#116466", marginBottom: "0.5rem" }}>152M</div>
            <div style={{ fontSize: "0.9rem", color: "#333", fontWeight: "600" }}>Projected by 2050</div>
          </div>
          <div style={{ textAlign: "center", padding: "1.5rem", background: "rgba(255,255,255,0.6)", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "3rem", fontWeight: "800", color: "#ae530e", marginBottom: "0.5rem" }}>3s</div>
            <div style={{ fontSize: "0.9rem", color: "#333", fontWeight: "600" }}>New Case Every</div>
          </div>
        </div>
      </div>

      {/* Age-Based Risk */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 className="disease-section-subt" style={{ fontSize: "1.8rem", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "2rem" }}>📈</span> Age-Based Risk
        </h3>
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          {[
            { age: "65+", risk: "Risk doubles every 5 years", percent: "10%", color: "#ae530e" },
            { age: "65+", risk: "1 in 10 people affected", percent: "10%", color: "#d45d00" },
            { age: "85+", risk: "1 in 3 individuals affected", percent: "33%", color: "#116466" }
          ].map((item, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
              <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: item.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "800",
                color: "white",
                fontSize: "1.1rem",
                marginRight: "1.5rem",
                boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
              }}>{item.age}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: "600", fontSize: "1.1rem", marginBottom: "0.5rem", color: "#333" }}>{item.risk}</div>
                <div style={{ height: "8px", background: "rgba(0,0,0,0.1)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: item.percent,
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}dd)`,
                    transition: "width 1s ease",
                    borderRadius: "4px"
                  }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gender Distribution */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(174, 83, 14, 0.08))',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        border: '2px solid rgba(17, 100, 102, 0.2)'
      }}>
        <h3 className="disease-section-subt" style={{ fontSize: "1.8rem", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "2rem" }}>👥</span> Gender Distribution
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem", alignItems: "center" }}>
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ fontWeight: "700", fontSize: "1.2rem", color: "#d45d00" }}>Women</span>
                <span style={{ fontWeight: "800", fontSize: "1.3rem", color: "#d45d00" }}>65%</span>
              </div>
              <div style={{ height: "24px", background: "rgba(0,0,0,0.1)", borderRadius: "12px", overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  width: "65%",
                  background: "linear-gradient(90deg, #d45d00, #ae530e)",
                  borderRadius: "12px",
                  transition: "width 1.5s ease"
                }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ fontWeight: "700", fontSize: "1.2rem", color: "#116466" }}>Men</span>
                <span style={{ fontWeight: "800", fontSize: "1.3rem", color: "#116466" }}>35%</span>
              </div>
              <div style={{ height: "24px", background: "rgba(0,0,0,0.1)", borderRadius: "12px", overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  width: "35%",
                  background: "linear-gradient(90deg, #116466, #0d4d4f)",
                  borderRadius: "12px",
                  transition: "width 1.5s ease"
                }}></div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", padding: "1.5rem", background: "rgba(255,255,255,0.7)", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "#d45d00", marginBottom: "0.5rem" }}>2/3</div>
            <div style={{ fontSize: "0.95rem", color: "#333", fontWeight: "600" }}>of dementia cases are women</div>
          </div>
        </div>
        <p className="disease-section-text" style={{ marginTop: "1.5rem", fontStyle: "italic" }}>
          After age 60, women are more likely to develop dementia than men.
        </p>
      </div>

      {/* Types of Dementia */}
<div
  style={{
    marginBottom: "2rem",
    padding: "2rem",
    borderRadius: "16px",
    border: "2px solid rgba(17,100,102,0.2)",
    background: "rgba(17,100,102,0.05)",
  }}
>
  {/* Heading centered */}
  <h3 style={{ fontSize: "1.8rem", marginBottom: "2rem", textAlign: "center" }}>
    Types of Dementia
  </h3>

  {/* Chart + Legend container */}
  <div
    style={{
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
      alignItems: "stretch", // make legend div same height as chart
    }}
  >
    {/* Pie Chart */}
    <div style={{ flex: "1 1 45%", minWidth: "200px" }}>
      <Pie
        data={typesData}
        options={{
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  const dataset = tooltipItem.dataset;
                  const value = dataset.data[tooltipItem.dataIndex];
                  const total = dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = ((value / total) * 100).toFixed(1) + "%";
                  return `${typesData.labels[tooltipItem.dataIndex]}: ${percentage}`;
                },
              },
            },
          },
        }}
      />
    </div>
{/* Custom Legend with percentages */}
<div
  style={{
    flex: "1 1 45%",
    minWidth: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // vertically centered
    gap: "1rem",
  }}
>
  {typesData.labels.map((label, idx) => {
    const value = typesData.datasets[0].data[idx];
    const total = typesData.datasets[0].data.reduce((a, b) => a + b, 0);
    const percentage = ((value / total) * 100).toFixed(1) + "%";
    return (
      <div
        key={idx}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        {/* Color box */}
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: typesData.datasets[0].backgroundColor[idx],
            borderRadius: "4px",
          }}
        ></div>

        {/* Fixed width label container */}
        <div style={{ minWidth: "130px", textAlign: "left" }}>
          {label}
        </div>

        {/* Percentage */}
        <div style={{ fontWeight: "600", marginLeft: "2rem" }}>{percentage}</div>
      </div>
    );
  })}
</div>

  </div>
</div>



      {/* Caregiver & Economic Burden */}
      <div style={{
        marginBottom: "2rem",
        padding: "2rem",
        borderRadius: "16px",
        border: "2px solid rgba(17,100,102,0.2)",
        background: "rgba(212,93,0,0.05)"
      }}>
        <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>👥 Caregiver & Economic Burden</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          <div style={{ padding: "1.5rem", background: "white", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <div style={{ fontSize: "2rem", fontWeight: "800", color: "#d45d00", marginBottom: "0.5rem" }}>20–30h</div>
            <div>Average care hours/week</div>
          </div>
          <div style={{ padding: "1.5rem", background: "white", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <div style={{ fontSize: "2rem", fontWeight: "800", color: "#116466", marginBottom: "0.5rem" }}>60%</div>
            <div>Caregivers experience stress/depression</div>
          </div>
          <div style={{ padding: "1.5rem", background: "white", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <div style={{ fontSize: "2rem", fontWeight: "800", color: "#ae530e", marginBottom: "0.5rem" }}>$1.3T</div>
            <div>Global dementia cost (2024)</div>
          </div>
        </div>
      </div>

      {/* Closing Statement */}
      <div style={{
        padding: "2rem",
        background: 'linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.08))',
        borderRadius: "16px",
        borderLeft: "6px solid #116466"
      }}>
        <p className="disease-section-text" style={{ fontSize: "1.1rem", margin: 0, fontWeight: "500" }}>
          These statistics highlight the global challenge posed by dementia. With cases expected to increase significantly in the coming decades, awareness, early detection, and comprehensive care are essential for supporting individuals, families, and healthcare systems worldwide.
        </p>
      </div>
    </div>
  );
};

export default Statistics;
