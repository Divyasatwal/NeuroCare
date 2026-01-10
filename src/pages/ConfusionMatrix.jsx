/*import React from 'react';
import './PageStyles.css';

const ConfusionMatrix = () => {
  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">Confusion Matrix Page</h1>
        <p className="page-text">Content coming soon...</p>
      </div>
    </div>
  );
};

export default ConfusionMatrix;*/

// import React from "react";
// import "./ConfusionMatrix.css";

// const ConfusionMatrix = () => {
//   return (
//     <div className="cm-container">
//       <h1 className="page-title">Confusion Matrix</h1>
//       <p className="page-subtitle">
//         Model performance summary for neurological disease prediction.
//       </p>

//       <div className="matrix-box">
//         <h3>📊 Model Accuracy</h3>
//         <p>
//           The confusion matrix provides insight into how well the model predicts
//           different neurological conditions.
//         </p>

//         <div className="matrix-grid">
//           <div className="matrix-cell correct">
//             True Positive<br />TP = 82
//           </div>
//           <div className="matrix-cell incorrect">
//             False Positive<br />FP = 9
//           </div>
//           <div className="matrix-cell incorrect">
//             False Negative<br />FN = 12
//           </div>
//           <div className="matrix-cell correct">
//             True Negative<br />TN = 97
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfusionMatrix;




import React, { useEffect, useRef, useState } from 'react';
import { HelpCircle, Brain, Users, Activity, Heart, Zap } from 'lucide-react';
import AlzheimerImg from '../assets/icons/alzheimer.png';
import ParkinsonImg from '../assets/icons/parkinson.png';
import DementiaImg from '../assets/icons/dementia.png';
import MDDImg from '../assets/icons/depression.png';
import BipolarImg from '../assets/icons/bipolar.png';

import './ConfusionMatrix.css';


const ConfusionMatrix = () => {
  const canvasRef = useRef(null);
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseases = [
    {
      id: 'alzheimers',
      name: "Alzheimer's Disease",
      // icon: <Brain className="disease-icon" />,
      icon: <img src={AlzheimerImg} alt="Alzheimer's" className="confusion-disease-icon" />,
      color: '#8b5cf6',
      keyFeatures: [
        'Progressive memory loss',
        'Difficulty with familiar tasks',
        'Confusion with time/place',
        'Problems with language'
      ],
      onset: 'Typically after age 65',
      progression: 'Gradual decline over 7-10 years',
      mainSymptom: 'Memory impairment is primary'
    },
    {
      id: 'dementia',
      name: 'Dementia',
      // icon: <Users className="disease-icon" />,
      icon: <img src={DementiaImg} alt="Dementia" className="confusion-disease-icon" />,
      color: '#3b82f6',
      keyFeatures: [
        'Umbrella term for cognitive decline',
        'Affects memory, thinking, behavior',
        'Interferes with daily activities',
        'Multiple possible causes'
      ],
      onset: 'Usually after age 60',
      progression: 'Varies by type',
      mainSymptom: 'General cognitive decline'
    },
    {
      id: 'parkinsons',
      name: "Parkinson's Disease",
      // icon: <Activity className="disease-icon" />,
      icon: <img src={ParkinsonImg} alt="Parkinson's" className="confusion-disease-icon" />,
      color: '#10b981',
      keyFeatures: [
        'Tremors and shaking',
        'Muscle stiffness',
        'Slow movement',
        'Balance problems'
      ],
      onset: 'Usually after age 60',
      progression: 'Progressive motor decline',
      mainSymptom: 'Movement disorders primary'
    },
    {
      id: 'mdd',
      name: 'Major Depressive Disorder ',
      // icon: <Heart className="disease-icon" />,
        icon: <img src={MDDImg} alt="MDD" className="confusion-disease-icon" />,
      color: '#ef4444',
      keyFeatures: [
        'Persistent sadness',
        'Loss of interest in activities',
        'Changes in sleep/appetite',
        'Difficulty concentrating'
      ],
      onset: 'Can occur at any age',
      progression: 'Episodic with treatment',
      mainSymptom: 'Mood disturbance primary'
    },
    {
      id: 'bipolar',
      name: 'Bipolar Disorder',
      // icon: <Zap className="disease-icon" />,
        icon: <img src={BipolarImg} alt="Bipolar" className="confusion-disease-icon" />,
      color: '#f59e0b',
      keyFeatures: [
        'Extreme mood swings',
        'Manic episodes (high energy)',
        'Depressive episodes (low energy)',
        'Changes in activity levels'
      ],
      onset: 'Usually late teens/early 20s',
      progression: 'Cycling between states',
      mainSymptom: 'Mood cycling primary'
    }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const neurons = [];
    const neuronCount = 80;
    const connectionDistance = 150;

    class Neuron {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 233, 253, 0.8)';
        ctx.fill();
      }
    }

    for (let i = 0; i < neuronCount; i++) {
      neurons.push(new Neuron());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      neurons.forEach((neuron, i) => {
        neuron.update();
        neuron.draw();

        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[j].x - neuron.x;
          const dy = neurons[j].y - neuron.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(neuron.x, neuron.y);
            ctx.lineTo(neurons[j].x, neurons[j].y);
            ctx.strokeStyle = `rgba(139, 233, 253, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="confusion-matrix-page">
      {/* Animated Neuron Background */}
      <canvas ref={canvasRef} className="neuron-canvas" />

      {/* Floating Particles */}
      <div className="floating-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      {/* Main Content */}
      <main className="confusion-main">
        {/* Hero Section */}
        <div className="confusion-hero-section">
          <div className="confusion-hero-badge">
            <HelpCircle className="confusion-badge-icon" />
            <span>Clear Your Doubts</span>
          </div>
          <h1 className="confusion-hero-title">Understanding the Differences</h1>
          <p className="confusion-hero-description">
            Learn the key differences between neurological and mental health conditions to better understand these disorders.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="comparison-grid">
          {diseases.map((disease, index) => (
            <div
              key={disease.id}
              className={`confusion-disease-card ${selectedDisease === disease.id ? 'selected' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedDisease(selectedDisease === disease.id ? null : disease.id)}
            >
              <div className="confusion-card-header" style={{ background: `linear-gradient(135deg, ${disease.color}, ${disease.color}dd)` }}>
                <div className="confusion-icon-wrapper">
                  {disease.icon}
                </div>
                <h3 className="confusion-disease-name">{disease.name}</h3>
              </div>

              <div className="confusion-card-body">
                <div className="confusion-info-section">
                  <h4 className="confusion-section-title">Key Features</h4>
                  <ul className="confusion-feature-list">
                    {disease.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="confusion-feature-item">
                        <span className="confusion-feature-bullet" style={{ background: disease.color }}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="confusion-info-section">
                  <h4 className="confusion-section-title">Typical Onset</h4>
                  <p className="confusion-info-text">{disease.onset}</p>
                </div>

                <div className="confusion-info-section">
                  <h4 className="confusion-section-title">Progression</h4>
                  <p className="confusion-info-text">{disease.progression}</p>
                </div>

                <div className="confusion-main-symptom-badge" style={{ background: `${disease.color}15`, color: disease.color }}>
                  {disease.mainSymptom}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Differences Section */}
        <div className="confusion-key-differences-section">
          <h2 className="confusion-section-main-title">Key Differences at a Glance</h2>
          
          <div className="confusion-difference-cards">
            <div className="confusion-diff-card">
              <div className="confusion-diff-icon">🧠</div>
              <h3 className="confusion-diff-title">Cognitive vs Motor</h3>
              <p className="confusion-diff-text">
                <strong>Alzheimer's & Dementia</strong> primarily affect memory and thinking, while 
                <strong> Parkinson's</strong> mainly affects movement and motor control.
              </p>
            </div>

            <div className="confusion-diff-card">
              <div className="confusion-diff-icon">🎭</div>
              <h3 className="confusion-diff-title">Neurological vs Mental Health</h3>
              <p className="confusion-diff-text">
                <strong>MDD & Bipolar</strong> are mental health conditions affecting mood and emotions, while the others are neurological disorders affecting brain function.
              </p>
            </div>

            <div className="confusion-diff-card">
              <div className="confusion-diff-icon">⏰</div>
              <h3 className="confusion-diff-title">Age of Onset</h3>
              <p className="confusion-diff-text">
                <strong>Alzheimer's, Dementia, and Parkinson's</strong> typically occur after age 60, while 
                <strong> MDD & Bipolar</strong> can appear at any age, often in younger adults.
              </p>
            </div>

            <div className="confusion-diff-card">
              <div className="confusion-diff-icon">📈</div>
              <h3 className="confusion-diff-title">Progression Pattern</h3>
              <p className="confusion-diff-text">
                <strong>Alzheimer's & Parkinson's</strong> show gradual decline, while 
                <strong> Bipolar</strong> cycles between states, and <strong>MDD</strong> can be episodic.
              </p>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="confusion-info-section-bottom">
          <div className="confusion-info-content">
            <h3 className="confusion-info-title">💡 Important to Remember</h3>
            <p className="confusion-info-description">
              These are simplified comparisons. Each condition is complex and affects individuals differently. 
              Always consult healthcare professionals for accurate diagnosis and personalized information. 
              Some symptoms may overlap, and comorbidity (having multiple conditions) is possible.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConfusionMatrix;