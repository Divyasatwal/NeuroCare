import React, { useState, useEffect } from "react";
import "../DiseaseLayout.css";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const StatisticsBipolar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Data for Bipolar Subtypes Donut Chart
  const subtypeData = {
    labels: ["Bipolar I", "Bipolar II", "Cyclothymia", "Other"],
    datasets: [
      {
        label: "Bipolar Subtypes (%)",
        data: [50, 35, 10, 5],
        backgroundColor: ["#8800ff", "#0088ff", "#00aaff", "#44ffaa"],
        borderColor: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
        borderWidth: 2,
      },
    ],
  };

  const subtypeOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: { size: 14, weight: "600" },
        },
      },
    },
  };

  return (
    <div className="disease-section">
      <h2 className="disease-section-title" style={{ fontSize: "2.5rem" }}>
        Statistics
      </h2>
      <div
        className="disease-section-divider"
        style={{ height: "4px", width: "80px" }}
      ></div>

      {/* Global Prevalence */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(136,0,255,0.08), rgba(0,136,255,0.08))",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2rem",
          border: "2px solid rgba(136,0,255,0.2)",
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          opacity: isVisible ? 1 : 0,
          transition: "all 0.6s ease",
        }}
      >
        <h3
          className="disease-section-subt"
          style={{
            fontSize: "1.8rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontSize: "2rem" }}>🌍</span> Global Prevalence
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            marginTop: "1.5rem",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              background: "rgba(255,255,255,0.6)",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "800",
                color: "#8800ff",
                marginBottom: "0.5rem",
              }}
            >
              ~40M
            </div>
            <div
              style={{ fontSize: "0.9rem", color: "#333", fontWeight: "600" }}
            >
              People Worldwide
            </div>
            <p style={{ fontSize: "0.8rem", margin: "0.2rem 0" }}>
              Estimated 0.5% of the global population has bipolar disorder (2021)
            </p>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              background: "rgba(255,255,255,0.6)",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "800",
                color: "#0088ff",
                marginBottom: "0.5rem",
              }}
            >
              ~4.4%
            </div>
            <div
              style={{ fontSize: "0.9rem", color: "#333", fontWeight: "600" }}
            >
              Lifetime U.S. Prevalence
            </div>
            <p style={{ fontSize: "0.8rem", margin: "0.2rem 0" }}>
              Percentage of U.S. adults who will experience bipolar disorder in their lifetime (NIMH)
            </p>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              background: "rgba(255,255,255,0.6)",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "800",
                color: "#00aaff",
                marginBottom: "0.5rem",
              }}
            >
              ~2.8%
            </div>
            <div
              style={{ fontSize: "0.9rem", color: "#333", fontWeight: "600" }}
            >
              Annual U.S. Prevalence
            </div>
            <p style={{ fontSize: "0.8rem", margin: "0.2rem 0" }}>
              Percentage of U.S. adults who experienced bipolar disorder in the past year
            </p>
          </div>
        </div>
      </div>

      {/* Bipolar Subtypes Donut Chart */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(136,0,255,0.08), rgba(0,136,255,0.08))",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2rem",
          border: "2px solid rgba(136,0,255,0.2)",
        }}
      >
        <h3
          className="disease-section-subt"
          style={{
            fontSize: "1.8rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <span style={{ fontSize: "2rem" }}>📊</span> Bipolar Subtypes
        </h3>
        <p className="disease-section-text" style={{ marginBottom: "2rem" }}>
          Bipolar disorder has several subtypes. Approximate distribution of cases worldwide:
        </p>
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <Doughnut data={subtypeData} options={subtypeOptions} />
        </div>
      </div>

      {/* Age of Onset */}
         {/* Age of Onset with Graph */}
      <div style={{ marginBottom: "2rem" }}>
        <h3
          className="disease-section-subt"
          style={{
            fontSize: "1.8rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          <span style={{ fontSize: "2rem" }}>🧠</span> Age of Onset
        </h3>
        <p className="disease-section-text">
          Bipolar disorder usually begins in late adolescence or early adulthood, but onset can vary from teens to 30+ years.
        </p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          {[
            { label: "Teens (10–19)", percent: 18, color: "#8800ff" },
            { label: "Young Adults (20–29)", percent: 45, color: "#0088ff" },
            { label: "30+ years", percent: 35, color: "#00aaff" },
          ].map((item, idx) => (
            <div key={idx} style={{ flex: 1, textAlign: "center" }}>
              <div
                style={{
                  height: "150px",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  background: "rgba(0,0,0,0.05)",
                  borderRadius: "8px",
                  padding: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    height: `${item.percent}%`,
                    background: item.color,
                    borderRadius: "8px 8px 0 0",
                    transition: "height 1s ease",
                  }}
                ></div>
              </div>
              <div style={{ marginTop: "0.5rem", fontWeight: "600" }}>{item.label}</div>
              <div style={{ fontSize: "0.9rem", color: "#333" }}>{item.percent}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Gender Distribution */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(136,0,255,0.08), rgba(0,255,136,0.08))",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2rem",
          border: "2px solid rgba(136,0,255,0.2)",
        }}
      >
        <h3
          className="disease-section-subt"
          style={{
            fontSize: "1.8rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          <span style={{ fontSize: "2rem" }}>👥</span> Gender Trends
        </h3>
        <p className="disease-section-text">
          Bipolar disorder affects males and females at roughly equal rates.
          Some studies suggest females may experience more rapid cycling and depressive episodes, while males may experience more manic episodes.
        </p>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              color: "#8800ff",
            }}
          >
            ~50/50
          </div>
          <div style={{ fontSize: "0.9rem", fontWeight: "600" }}>
            Approximate Balance Between Men & Women
          </div>
        </div>
      </div>

      {/* Disability & Burden */}
      <div style={{ marginBottom: "2rem" }}>
        <h3
          className="disease-section-subt"
          style={{
            fontSize: "1.8rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontSize: "2rem" }}>📊</span> Disability & Burden
        </h3>
        <p className="disease-section-text">
          Bipolar disorder can cause significant functional impairment in daily life, including challenges in work, education, and relationships. In the U.S., about 83% of people with bipolar disorder report substantial interference with work or social functioning.
        </p>
      </div>

      {/* Closing Statement */}
      <div
        style={{
          padding: "2rem",
          background:
            "linear-gradient(135deg, rgba(136,0,255,0.08), rgba(0,136,255,0.08))",
          borderRadius: "16px",
          borderLeft: "6px solid #8800ff",
        }}
      >
        <p className="disease-section-text" style={{ fontSize: "1.1rem", margin: 0, fontWeight: "500" }}>
          Bipolar disorder affects millions worldwide, often beginning in adolescence or early adulthood, and can lead to substantial impairment without effective treatment. Awareness of its prevalence, onset age, and functional impact helps guide early diagnosis, better care strategies, and support for affected individuals and their families.
        </p>
      </div>
    </div>
  );
};

export default StatisticsBipolar;
