import React, { useState, useEffect } from "react";
import "../DiseaseLayout.css";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="disease-section">
      <h2 className="disease-section-title" style={{ fontSize: "2.5rem" }}>
        Statistics
      </h2>
      <div
        className="disease-section-divider"
        style={{ height: "4px", width: "80px" }}
      ></div>

      {/* Global Impact */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.08))",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2rem",
          border: "2px solid rgba(17, 100, 102, 0.2)",
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
          <span style={{ fontSize: "2rem" }}>🌍</span> Global Impact
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
                color: "#d45d00",
                marginBottom: "0.5rem",
              }}
            >
              ~332M
            </div>
            <div style={{ fontSize: "0.9rem", color: "#333", fontWeight: "600" }}>
              Estimated people with depression (2025)
            </div>
            <p style={{ fontSize: "0.8rem", color: "#555" }}>
              *Based on WHO estimates of adults with depressive disorder.
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
                color: "#116466",
                marginBottom: "0.5rem",
              }}
            >
              ~5.7%
            </div>
            <div style={{ fontSize: "0.9rem", color: "#333", fontWeight: "600" }}>
              Adult prevalence of depression
            </div>
            <p style={{ fontSize: "0.8rem", color: "#555" }}>
              *Among adults worldwide.
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
                color: "#ae530e",
                marginBottom: "0.5rem",
              }}
            >
              {">10%"}
            </div>
            <div style={{ fontSize: "0.9rem", color: "#333", fontWeight: "600" }}>
              Suicide cases related to depression
            </div>
            <p style={{ fontSize: "0.8rem", color: "#555" }}>
              *WHO estimate: over 727,000 suicide deaths linked to depression and related disorders.
            </p>
          </div>
        </div>
      </div>

      {/* Gender Distribution */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(174, 83, 14, 0.08))",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2rem",
          border: "2px solid rgba(17, 100, 102, 0.2)",
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
          <span style={{ fontSize: "2rem" }}>👥</span> Gender Distribution
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{ fontWeight: "700", fontSize: "1.2rem", color: "#d45d00" }}
                >
                  Women
                </span>
                <span
                  style={{ fontWeight: "800", fontSize: "1.3rem", color: "#d45d00" }}
                >
                  60%
                </span>
              </div>
              <div
                style={{
                  height: "24px",
                  background: "rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "60%",
                    background: "linear-gradient(90deg, #d45d00, #ae530e)",
                    borderRadius: "12px",
                    transition: "width 1.5s ease",
                  }}
                ></div>
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{ fontWeight: "700", fontSize: "1.2rem", color: "#116466" }}
                >
                  Men
                </span>
                <span
                  style={{ fontWeight: "800", fontSize: "1.3rem", color: "#116466" }}
                >
                  40%
                </span>
              </div>
              <div
                style={{
                  height: "24px",
                  background: "rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "40%",
                    background: "linear-gradient(90deg, #116466, #0d4d4f)",
                    borderRadius: "12px",
                    transition: "width 1.5s ease",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              background: "rgba(255,255,255,0.7)",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                color: "#d45d00",
                marginBottom: "0.5rem",
              }}
            >
              ~1.5×
            </div>
            <div style={{ fontSize: "0.95rem", color: "#333", fontWeight: "600" }}>
              Women more affected than men
            </div>
            <p style={{ fontSize: "0.8rem", color: "#555" }}>
              *Women are about 1.5 times more likely to have depression.
            </p>
          </div>
        </div>
      </div>

      {/* Economic Impact */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.08))",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2rem",
          border: "2px solid rgba(17, 100, 102, 0.2)",
        }}
      >
        <h3
          className="disease-section-subt"
          style={{
            fontSize: "1.8rem",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontSize: "2rem" }}>💸</span> Global Economic Impact
        </h3>
        <p className="disease-section-text">
          Depression and anxiety disorders together contribute to a huge economic loss each year — largely due to lost productivity at work and reduced participation in daily activities.
        </p>
        <div
          style={{
            textAlign: "center",
            padding: "1rem",
            marginTop: "1rem",
            background: "rgba(255,255,255,0.7)",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              fontSize: "2.8rem",
              fontWeight: "800",
              color: "#116466",
              marginBottom: "0.3rem",
            }}
          >
            ~$1T
          </div>
          <div style={{ fontSize: "0.9rem", color: "#333", fontWeight: "600" }}>
            Annual cost (lost productivity worldwide)
          </div>
          <p style={{ fontSize: "0.8rem", color: "#555" }}>
            *WHO & ILO estimate for depression + anxiety disorders' impact on global productivity.
          </p>
        </div>
      </div>

      {/* Closing Statement */}
      <div
        style={{
          padding: "2rem",
          background:
            "linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.08))",
          borderRadius: "16px",
          borderLeft: "6px solid #116466",
        }}
      >
        <p
          className="disease-section-text"
          style={{ fontSize: "1.1rem", margin: 0, fontWeight: "500" }}
        >
          These statistics reflect the widespread global impact of Major Depressive
          Disorder (MDD) — from prevalence and gender differences to economic loss
          and suicide risk. Reliable data helps inform better awareness, early
          intervention, and policy actions worldwide.
        </p>
      </div>
    </div>
  );
};

export default Statistics;
