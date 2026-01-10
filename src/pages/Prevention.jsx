import React, { useEffect, useRef } from 'react';
import { Shield, Heart, Activity, Apple } from 'lucide-react';
import './Prevention.css';

const Prevention = () => {
  const canvasRef = useRef(null);

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
    <div className="prevention-page">
      <canvas ref={canvasRef} className="neuron-canvas" />

      <main className="prevention-main">
        <div className="phero-section">
          <div className="picon-circle picon-teal">
            <Shield className="phero-icon" />
          </div>
          <h1 className="page-title">Prevention</h1>
          <p className="page-subtitle">
            Healthy lifestyle, diet, exercise, and mental wellness can reduce the risk of neurological issues.
          </p>
        </div>

        <div className="pcontent-grid">
          <div className="pinfo-card">
            <div className="pcard-icon-header">
              <Activity className="section-icon icon-teal-color" />
              <h2 className="pcard-title">Physical Activity</h2>
            </div>
            <p className="pcard-text">
              Regular exercise improves blood flow to the brain, promotes new neuron growth, and reduces the risk of cognitive decline. Aim for at least 150 minutes of moderate activity per week.
            </p>
            <div className="tip-box">
              <strong>Tip:</strong> Walking, swimming, and dancing are excellent choices for brain health.
            </div>
          </div>

          <div className="pinfo-card">
            <div className="pcard-icon-header">
              <Apple className="section-icon icon-teal-color" />
              <h2 className="pcard-title">Healthy Diet</h2>
            </div>
            <p className="pcard-text">
              A brain-healthy diet rich in fruits, vegetables, whole grains, and omega-3 fatty acids supports cognitive function and reduces inflammation.
            </p>
            <div className="tip-box">
              <strong>Tip:</strong> Mediterranean and MIND diets are proven to support brain health.
            </div>
          </div>

          <div className="pinfo-card">
            <div className="pcard-icon-header">
              <Heart className="section-icon icon-teal-color" />
              <h2 className="pcard-title">Mental Wellness</h2>
            </div>
            <p className="pcard-text">
              Stay mentally active through reading, puzzles, learning new skills, and social engagement. Mental stimulation helps build cognitive reserve.
            </p>
            <div className="tip-box">
              <strong>Tip:</strong> Learn a new language or musical instrument to challenge your brain.
            </div>
          </div>
        </div>

        <div className="lifestyle-section">
          <h2 className="section-heading">Additional Prevention Strategies</h2>
          <div className="strategy-grid">
            <div className="strategy-item">
              <span className="strategy-emoji">😴</span>
              <h3>Quality Sleep</h3>
              <p>7-9 hours of sleep helps clear brain toxins and consolidate memories.</p>
            </div>
            <div className="strategy-item">
              <span className="strategy-emoji">🚭</span>
              <h3>Avoid Smoking</h3>
              <p>Smoking increases risk of cognitive decline and neurological disorders.</p>
            </div>
            <div className="strategy-item">
              <span className="strategy-emoji">🧘</span>
              <h3>Manage Stress</h3>
              <p>Chronic stress damages brain cells; practice meditation and relaxation.</p>
            </div>
            <div className="strategy-item">
              <span className="strategy-emoji">👥</span>
              <h3>Stay Social</h3>
              <p>Social connections reduce dementia risk and support mental health.</p>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h2 className="section-heading">Start Today for a Healthier Tomorrow</h2>
          <p className="detail-text">
            Prevention is a lifelong journey. Small, consistent changes in your daily habits can have a significant impact on your brain health. It's never too early or too late to start taking care of your neurological wellness.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Prevention;