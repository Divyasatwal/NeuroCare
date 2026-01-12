/*import React from "react";
import "../DiseaseLayout.css";

const Statistics = () => {
  return (
    <div className="content-section">
      <h1>Related Statistics</h1>

      <ul>
        <li>Over 10 million people worldwide are living with Parkinson’s.</li>
        <li>Most diagnoses occur after age 60.</li>
        <li>Men are 1.5× more likely to develop the condition than women.</li>
        <li>Incidence is increasing due to aging populations.</li>
        <li>Early intervention improves long-term quality of life.</li>
      </ul>
    </div>
  );
};

export default Statistics;*/

import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import "../DiseaseLayout.css";

const ParkinsonStatistics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Motor vs Non-Motor symptoms data
  const symptomsDonut = [
    { type: 'Motor Symptoms', percent: 80, color: '#116466', icon: '⚡', description: 'Tremor, rigidity, bradykinesia, balance issues' },
    { type: 'Non-Motor Symptoms', percent: 60, color: '#d45d00', icon: '🌙', description: 'Sleep disturbances, depression, cognitive decline' }
  ];

  return (
    <div className="disease-section">
      <h2 className="disease-section-title" style={{ fontSize: '2.5rem' }}>Statistics</h2>
      <div className="disease-section-divider" style={{ height: '4px', width: '80px' }}></div>

      {/* Global Impact */}
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
        <h3 className="disease-section-subt" style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '2rem' }}>🌍</span> Global Impact
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
          <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.6)', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#d45d00', marginBottom: '0.5rem' }}>10M</div>
            <div style={{ fontSize: '0.9rem', color: '#333', fontWeight: '600' }}>Current Cases</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.6)', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#116466', marginBottom: '0.5rem' }}>12M</div>
            <div style={{ fontSize: '0.9rem', color: '#333', fontWeight: '600' }}>Projected 2030</div>
          </div>
          <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.6)', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#ae530e', marginBottom: '0.5rem' }}>1 per 5s</div>
            <div style={{ fontSize: '0.9rem', color: '#333', fontWeight: '600' }}>New case every 5 seconds</div>
          </div>
        </div>
      </div>

      {/* Regional Prevalence */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(212, 93, 0, 0.08), rgba(17, 100, 102, 0.08))',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        border: '2px solid rgba(212, 93, 0, 0.2)',
      }}>
        <h3 className="disease-section-subt" style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '2rem' }}>🌐</span> Regional Prevalence
        </h3>
        <ul className="disease-section-text" style={{ marginTop: '1rem', lineHeight: '1.7rem' }}>
          <li><b>North America:</b> ~1 million cases, prevalence increasing with aging population</li>
          <li><b>Europe:</b> ~1.2 million cases, higher in Western Europe</li>
          <li><b>Asia:</b> ~3 million cases, growing rapidly due to population size</li>
          <li><b>Africa:</b> ~0.5 million cases, underdiagnosed</li>
          <li><b>South America:</b> ~0.7 million cases</li>
          <li><b>Oceania:</b> ~0.15 million cases</li>
        </ul>
      </div>

      {/* Age-Based Risk */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 className="disease-section-subt" style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '2rem' }}>📈</span> Age-Based Risk
        </h3>
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {[
            { age: '60+', risk: 'Risk doubles every decade', percent: '5%', color: '#ae530e' },
            { age: '70+', risk: '1 in 27 people affected', percent: '4%', color: '#d45d00' },
            { age: '80+', risk: '1 in 10 individuals affected', percent: '10%', color: '#116466' }
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                width: '60px', height: '60px', borderRadius: '50%',
                background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: '800', color: 'white', fontSize: '1.1rem', marginRight: '1.5rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
              }}>{item.age}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.5rem', color: '#333' }}>{item.risk}</div>
                <div style={{ height: '8px', background: 'rgba(0,0,0,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: item.percent,
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}dd)`,
                    transition: 'width 1s ease',
                    borderRadius: '4px'
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
        <h3 className="disease-section-subt" style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '2rem' }}>👥</span> Gender Distribution
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'center' }}>
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: '700', fontSize: '1.2rem', color: '#d45d00' }}>Men</span>
                <span style={{ fontWeight: '800', fontSize: '1.3rem', color: '#d45d00' }}>60%</span>
              </div>
              <div style={{ height: '24px', background: 'rgba(0,0,0,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '60%', background: 'linear-gradient(90deg, #d45d00, #ae530e)', borderRadius: '12px', transition: 'width 1.5s ease' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: '700', fontSize: '1.2rem', color: '#116466' }}>Women</span>
                <span style={{ fontWeight: '800', fontSize: '1.3rem', color: '#116466' }}>40%</span>
              </div>
              <div style={{ height: '24px', background: 'rgba(0,0,0,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '40%', background: 'linear-gradient(90deg, #116466, #0d4d4f)', borderRadius: '12px', transition: 'width 1.5s ease' }}></div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.7)', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#d45d00', marginBottom: '0.5rem' }}>3/5</div>
            <div style={{ fontSize: '0.95rem', color: '#333', fontWeight: '600' }}>of cases are men</div>
          </div>
        </div>
      </div>

      {/* Donut Chart Symptoms */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(17,100,102,0.08), rgba(212,93,0,0.08))',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        border: '2px solid rgba(17,100,102,0.2)'
      }}>
        <h3 className="disease-section-subt" style={{fontSize: '1.8rem', display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1.5rem'}}>
          <span style={{fontSize:'2rem'}}>🧠</span> Symptom Severity
        </h3>
        <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', gap:'2rem'}}>
          {symptomsDonut.map((item, idx) => (
            <div key={idx} style={{width:'180px', textAlign:'center'}}>
              <CircularProgressbar 
                value={item.percent} 
                text={`${item.percent}%`} 
                styles={buildStyles({
                  pathColor: item.color,
                  textColor: '#333',
                  trailColor: 'rgba(0,0,0,0.1)',
                  textSize: '16px'
                })}
              />
              <div style={{marginTop:'0.5rem', fontWeight:'700', color:item.color, fontSize:'1rem'}}>{item.type}</div>
              <div style={{fontSize:'0.85rem', color:'#333', marginTop:'0.3rem'}}>{item.description}</div>
            </div>
          ))}
        </div>
        <p style={{marginTop:'1rem', fontStyle:'italic', color:'#333'}}>
          Parkinson’s symptoms vary in type and severity. Motor symptoms affect movement, while non-motor symptoms impact sleep, mood, and cognition. Awareness of symptom prevalence helps guide early detection and management.
        </p>
      </div>

      {/* Closing Statement */}
      <div style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.08))',
        borderRadius: '16px',
        borderLeft: '6px solid #116466'
      }}>
        <p className="disease-section-text" style={{ fontSize: '1.1rem', margin: 0, fontWeight: '500' }}>
          Parkinson’s disease affects millions globally, with prevalence expected to rise as populations age. Understanding global patterns, age- and gender-specific risks, and symptom progression helps improve early detection, care strategies, and support for patients and families worldwide.
        </p>
      </div>
    </div>
  );
};

export default ParkinsonStatistics;
