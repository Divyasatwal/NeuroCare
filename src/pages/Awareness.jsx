/*import React from 'react';
import './PageStyles.css';

const Awareness = () => {
  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">Awareness Page</h1>
        <p className="page-text">Content coming soon...</p>
      </div>
    </div>
  );
};

export default Awareness;*/
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ShieldAlert,ShieldPlus, Stethoscope} from 'lucide-react';
import './Awareness.css';

const Awareness = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

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

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="awareness-page">
       {/*Animated Neuron Background */}
      <canvas ref={canvasRef} className="neuron-canvas" />

       {/*Main Content */}
      <main className="awareness-main">
         {/*Hero Section */}
        <div className="Awareness-hero-section">
          <h2 className="Awareness-hero-title">Neuro Awareness</h2>
          <p className="Awareness-hero-description">
            Learn about neurological disorders, early signs, prevention, and how to support affected individuals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="Awareness-cards-grid">
           {/*Card 1: Understanding the Brain */}
          <div className="Awareness-card-wrapper" onClick={() => handleCardClick('/brain-info')}>
            <div className="Awareness-card-glow Awareness-card-glow-pink"></div>
            <div className="Awareness-card Awareness-card-pink">
              <div className="Awareness-card-icon-wrapper Awareness-icon-pink">
                <Brain className="Awareness-card-icon" />
              </div>
              <h3 className="Awareness-card-title">Understanding the Brain</h3>
              <p className="Awareness-card-description">
                Your brain controls everything—from memory to movement. Learn how brain disorders affect daily life.
              </p>
              <div className="Awareness-card-accent Awareness-accent-pink"></div>
            </div>
          </div>

           {/*Card 2: Early Warning Signs */} 
          <div className="Awareness-card-wrapper" onClick={() => handleCardClick('/warning-signs')}>
            <div className="Awareness-card-glow Awareness-card-glow-amber"></div>
            <div className="Awareness-card Awareness-card-amber">
              <div className="Awareness-card-icon-wrapper Awareness-icon-amber">
                <ShieldAlert className="Awareness-card-icon" />
              </div>
              <h3 className="Awareness-card-title">Early Warning Signs</h3>
              <p className="Awareness-card-description">
                Early symptoms like memory loss, tremors, or confusion can help in detecting conditions sooner.
              </p>
              <div className="Awareness-accent Awareness-accent-amber"></div>
            </div>
          </div>

           {/*Card 3: Prevention */}
          <div className="Awareness-card-wrapper" onClick={() => handleCardClick('/prevention')}>
            <div className="Awareness-card-glow Awareness-card-glow-teal"></div>
            <div className="Awareness-card Awareness-card-teal">
              <div className="Awareness-card-icon-wrapper Awareness-icon-teal">
                <ShieldPlus className="Awareness-card-icon" />
              </div>
              <h3 className="Awareness-card-title">Prevention</h3>
              <p className="Awareness-card-description">
                Healthy lifestyle, diet, exercise, and mental wellness can reduce the risk of neurological issues.
              </p>
              <div className="Awareness-card-accent Awareness-accent-teal"></div>
            </div>
          </div>

           {/*Card 4: Support & Care */}
          <div className="Awareness-card-wrapper" onClick={() => handleCardClick('/support-care')}>
            <div className="Awareness-card-glow Awareness-card-glow-orange"></div>
            <div className="Awareness-card Awareness-card-orange">
              <div className="Awareness-card-icon-wrapper Awareness-icon-orange">
                <Stethoscope className="Awareness-card-icon" />
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-stethoscope-icon lucide-stethoscope"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg> */}
              </div>
              <h3 className="Awareness-card-title">Support & Care</h3>
              <p className="Awareness-card-description">
                Learn how to support loved ones battling neurological disorders with empathy and knowledge.
              </p>
              <div className="Awarenesscard-accent Awareness-accent-orange"></div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="Awareness-info-section">
          <div className="Awareness-info-content">
            <h3 className="Awareness-info-title">Knowledge is the First Step to Prevention</h3>
            <p className="Awareness-info-description">
              Understanding the warning signs and risk factors of neurological disorders empowers you to take proactive steps 
              towards better brain health. Early detection and lifestyle changes can make a significant difference in outcomes.
            </p>
            <button className="Awareness-info-button" onClick={() => navigate('/resources')}>
              Learn More About Brain Health
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Awareness;