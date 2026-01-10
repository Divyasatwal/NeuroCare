import React, { useEffect, useRef } from 'react';
import { AlertTriangle, Clock, Eye, Brain } from 'lucide-react';
import './WarningSigns.css';

const WarningSigns = () => {
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
    <div className="warning-signs-page">
      <canvas ref={canvasRef} className="neuron-canvas" />

      <main className="warning-signs-main">
        <div className="whero-section">
          <div className="wicon-circle icon-amber">
            <AlertTriangle className="whero-icon" />
          </div>
          <h1 className="wpage-title">Early Warning Signs</h1>
          <p className="wpage-subtitle">
            Early symptoms like memory loss, tremors, or confusion can help in detecting conditions sooner.
          </p>
        </div>

        <div className="wcontent-grid">
          <div className="winfo-card">
            <div className="wcard-icon-header">
              <Brain className="section-icon icon-amber-color" />
              <h2 className="wcard-title">Memory & Cognitive Signs</h2>
            </div>
            <ul className="sign-list">
              <li>Difficulty remembering recent events</li>
              <li>Confusion with time or place</li>
              <li>Problems with familiar tasks</li>
              <li>Difficulty finding the right words</li>
              <li>Poor judgment or decision-making</li>
            </ul>
          </div>

          <div className="winfo-card">
            <div className="wcard-icon-header">
              <Eye className="section-icon icon-amber-color" />
              <h2 className="wcard-title">Physical Signs</h2>
            </div>
            <ul className="sign-list">
              <li>Tremors or shaking</li>
              <li>Changes in movement or balance</li>
              <li>Unexplained muscle stiffness</li>
              <li>Changes in handwriting</li>
              <li>Difficulty with coordination</li>
            </ul>
          </div>

          <div className="winfo-card">
            <div className="wcard-icon-header">
              <Clock className="section-icon icon-amber-color" />
              <h2 className="wcard-title">Behavioral Changes</h2>
            </div>
            <ul className="sign-list">
              <li>Mood swings or personality changes</li>
              <li>Withdrawal from social activities</li>
              <li>Increased anxiety or depression</li>
              <li>Loss of interest in hobbies</li>
              <li>Changes in sleep patterns</li>
            </ul>
          </div>
        </div>

        <div className="wdetail-section">
          <h2 className="section-heading">Why Early Detection Matters</h2>
          <p className="wdetail-text">
            Recognizing early warning signs allows for timely medical intervention, better treatment outcomes, and the opportunity to plan for the future. If you or a loved one experience these symptoms, consult a healthcare professional for proper evaluation. Early diagnosis can significantly improve quality of life and provide access to support resources.
          </p>
        </div>
      </main>
    </div>
  );
};

export default WarningSigns;