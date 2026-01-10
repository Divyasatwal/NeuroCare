import React, { useState, useEffect } from "react";
import "../DiseaseLayout.css";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="disease-section">
      <h2 className="disease-section-title" style={{fontSize: '2.5rem'}}>Statistics</h2>
      <div className="disease-section-divider" style={{height: '4px', width: '80px'}}></div>

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
        <h3 className="disease-section-subt" style={{fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <span style={{fontSize: '2rem'}}>🌍</span> Global Impact
        </h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem'}}>
          <div style={{textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.6)', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
            <div style={{fontSize: '3rem', fontWeight: '800', color: '#d45d00', marginBottom: '0.5rem'}}>55M</div>
            <div style={{fontSize: '0.9rem', color: '#333', fontWeight: '600'}}>Current Cases</div>
          </div>
          <div style={{textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.6)', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
            <div style={{fontSize: '3rem', fontWeight: '800', color: '#116466', marginBottom: '0.5rem'}}>139M</div>
            <div style={{fontSize: '0.9rem', color: '#333', fontWeight: '600'}}>Projected by 2050</div>
          </div>
          <div style={{textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.6)', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
            <div style={{fontSize: '3rem', fontWeight: '800', color: '#ae530e', marginBottom: '0.5rem'}}>3s</div>
            <div style={{fontSize: '0.9rem', color: '#333', fontWeight: '600'}}>New Case Every</div>
          </div>
        </div>
      </div>

      {/* Age-Based Risk */}
      <div style={{marginBottom: '2rem'}}>
        <h3 className="disease-section-subt" style={{fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem'}}>
          <span style={{fontSize: '2rem'}}>📈</span> Age-Based Risk
        </h3>
        <div style={{position: 'relative', paddingLeft: '2rem'}}>
          {[
            {age: '65+', risk: 'Risk doubles every 5 years', percent: '10%', color: '#ae530e'},
            {age: '65+', risk: '1 in 10 people affected', percent: '10%', color: '#d45d00'},
            {age: '85+', risk: '1 in 3 individuals affected', percent: '33%', color: '#116466'}
          ].map((item, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                color: 'white',
                fontSize: '1.1rem',
                marginRight: '1.5rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
              }}>{item.age}</div>
              <div style={{flex: 1}}>
                <div style={{fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.5rem', color: '#333'}}>{item.risk}</div>
                <div style={{height: '8px', background: 'rgba(0,0,0,0.1)', borderRadius: '4px', overflow: 'hidden'}}>
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
        <h3 className="disease-section-subt" style={{fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem'}}>
          <span style={{fontSize: '2rem'}}>👥</span> Gender Distribution
        </h3>
        <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'center'}}>
          <div>
            <div style={{marginBottom: '1rem'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                <span style={{fontWeight: '700', fontSize: '1.2rem', color: '#d45d00'}}>Women</span>
                <span style={{fontWeight: '800', fontSize: '1.3rem', color: '#d45d00'}}>67%</span>
              </div>
              <div style={{height: '24px', background: 'rgba(0,0,0,0.1)', borderRadius: '12px', overflow: 'hidden'}}>
                <div style={{
                  height: '100%',
                  width: '67%',
                  background: 'linear-gradient(90deg, #d45d00, #ae530e)',
                  borderRadius: '12px',
                  transition: 'width 1.5s ease'
                }}></div>
              </div>
            </div>
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                <span style={{fontWeight: '700', fontSize: '1.2rem', color: '#116466'}}>Men</span>
                <span style={{fontWeight: '800', fontSize: '1.3rem', color: '#116466'}}>33%</span>
              </div>
              <div style={{height: '24px', background: 'rgba(0,0,0,0.1)', borderRadius: '12px', overflow: 'hidden'}}>
                <div style={{
                  height: '100%',
                  width: '33%',
                  background: 'linear-gradient(90deg, #116466, #0d4d4f)',
                  borderRadius: '12px',
                  transition: 'width 1.5s ease'
                }}></div>
              </div>
            </div>
          </div>
          <div style={{textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.7)', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
            <div style={{fontSize: '2.5rem', fontWeight: '800', color: '#d45d00', marginBottom: '0.5rem'}}>2/3</div>
            <div style={{fontSize: '0.95rem', color: '#333', fontWeight: '600'}}>of cases are women</div>
          </div>
        </div>
        <p className="disease-section-text" style={{marginTop: '1.5rem', fontStyle: 'italic'}}>
          After age 60, a woman's risk of developing Alzheimer's exceeds her risk of breast cancer.
        </p>
      </div>

      {/* Diagnosis & Mortality Grid */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem'}}>
        
        {/* Diagnosis Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(174, 83, 14, 0.08))',
          borderRadius: '16px',
          padding: '2rem',
          border: '2px solid rgba(17, 100, 102, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{position: 'absolute', top: '-20px', right: '-20px', fontSize: '6rem', opacity: '0.08'}}>🩺</div>
          <h3 className="disease-section-subt" style={{fontSize: '1.5rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1}}>
            Diagnosis Gap
          </h3>
          <div style={{position: 'relative', zIndex: 1}}>
            <div style={{marginBottom: '1.5rem'}}>
              <div style={{fontSize: '3rem', fontWeight: '800', color: '#116466', marginBottom: '0.5rem'}}>60-70%</div>
              <div style={{fontSize: '0.95rem', color: '#333'}}>Remain undiagnosed in developing countries</div>
            </div>
            <div style={{borderTop: '2px solid rgba(17, 100, 102, 0.2)', paddingTop: '1rem'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem'}}>
                <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#116466'}}></div>
                <span style={{fontSize: '0.95rem', color: '#333'}}>2-3 years delay after symptoms appear</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#ae530e'}}></div>
                <span style={{fontSize: '0.95rem', color: '#333'}}>Early diagnosis improves outcomes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mortality Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(212, 93, 0, 0.08), rgba(174, 83, 14, 0.08))',
          borderRadius: '16px',
          padding: '2rem',
          border: '2px solid rgba(212, 93, 0, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{position: 'absolute', top: '-20px', right: '-20px', fontSize: '6rem', opacity: '0.08'}}>📊</div>
          <h3 className="disease-section-subt" style={{fontSize: '1.5rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1}}>
            Mortality Impact
          </h3>
          <div style={{position: 'relative', zIndex: 1}}>
            <div style={{marginBottom: '1.5rem'}}>
              <div style={{fontSize: '3rem', fontWeight: '800', color: '#d45d00', marginBottom: '0.5rem'}}>7th</div>
              <div style={{fontSize: '0.95rem', color: '#333'}}>Leading cause of death worldwide</div>
            </div>
            <div style={{borderTop: '2px solid rgba(212, 93, 0, 0.2)', paddingTop: '1rem'}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.6)', borderRadius: '8px'}}>
                <span style={{fontSize: '0.95rem', fontWeight: '600', color: '#333'}}>Death rate increase:</span>
                <span style={{fontSize: '2rem', fontWeight: '800', color: '#d45d00'}}>+145%</span>
              </div>
              <p style={{fontSize: '0.85rem', color: '#333', marginTop: '0.8rem', fontStyle: 'italic'}}>
                Fastest-growing cause of mortality
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Economic Impact */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.08))',
        borderRadius: '16px',
        padding: '2.5rem',
        marginBottom: '2rem',
        border: '2px solid rgba(17, 100, 102, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{position: 'absolute', bottom: '-40px', right: '-40px', fontSize: '10rem', opacity: '0.05'}}>💰</div>
        <h3 className="disease-section-subt" style={{fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 1}}>
          <span style={{fontSize: '2rem'}}>💸</span> Economic Burden
        </h3>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1}}>
          <div style={{
            textAlign: 'center',
            padding: '2rem 1rem',
            background: 'rgba(255,255,255,0.7)',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid rgba(17, 100, 102, 0.2)'
          }}>
            <div style={{fontSize: '0.9rem', color: '#333', marginBottom: '0.5rem', fontWeight: '600'}}>Annual Cost (2024)</div>
            <div style={{fontSize: '3.5rem', fontWeight: '800', color: '#116466', marginBottom: '0.3rem'}}>$1T</div>
            <div style={{fontSize: '0.85rem', color: '#333'}}>Global economy impact</div>
          </div>
          
          <div style={{
            textAlign: 'center',
            padding: '2rem 1rem',
            background: 'rgba(255,255,255,0.7)',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '2px solid rgba(212, 93, 0, 0.3)',
            transform: 'scale(1.05)'
          }}>
            <div style={{fontSize: '0.9rem', color: '#333', marginBottom: '0.5rem', fontWeight: '600'}}>Projected (2030)</div>
            <div style={{fontSize: '3.5rem', fontWeight: '800', color: '#d45d00', marginBottom: '0.3rem'}}>$2T</div>
            <div style={{fontSize: '0.85rem', color: '#333'}}>Expected to double</div>
          </div>
          
          <div style={{
            textAlign: 'center',
            padding: '2rem 1rem',
            background: 'rgba(255,255,255,0.7)',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid rgba(174, 83, 14, 0.2)'
          }}>
            <div style={{fontSize: '0.9rem', color: '#333', marginBottom: '0.5rem', fontWeight: '600'}}>Growth Rate</div>
            <div style={{fontSize: '3.5rem', fontWeight: '800', color: '#ae530e', marginBottom: '0.3rem'}}>+100%</div>
            <div style={{fontSize: '0.85rem', color: '#333'}}>In just 6 years</div>
          </div>
        </div>

        <div style={{
          background: 'rgba(17, 100, 102, 0.05)',
          padding: '1.5rem',
          borderRadius: '12px',
          borderLeft: '4px solid #116466',
          position: 'relative',
          zIndex: 1
        }}>
          <p className="disease-section-text" style={{margin: 0}}>
            Rising costs driven by increased caregiving demands, medical expenses, and longer disease progression due to aging populations worldwide.
          </p>
        </div>
      </div>

      {/* Closing Statement */}
      <div style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(17, 100, 102, 0.08), rgba(212, 93, 0, 0.08))',
        borderRadius: '16px',
        borderLeft: '6px solid #116466'
      }}>
        <p className="disease-section-text" style={{fontSize: '1.1rem', margin: 0, fontWeight: '500'}}>
          These statistics underscore the urgent global challenge posed by Alzheimer's disease. 
          With cases projected to triple by 2050, early detection, innovative care strategies, and increased awareness are critical to supporting affected families and healthcare systems worldwide.
        </p>
      </div>
    </div>
  );
};

export default Statistics;