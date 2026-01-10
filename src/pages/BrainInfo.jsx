import React, { useEffect, useRef } from 'react';
import { Brain, Zap, Network, Activity } from 'lucide-react';
import './BrainInfo.css';

const BrainInfo = () => {
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
    <div className="brain-info-page">
      <canvas ref={canvasRef} className="neuron-canvas" />

      <main className="brain-info-main">
        <div className="bhero-section">
          <div className="icon-circle">
            <Brain className="bhero-icon" />
          </div>
          <h1 className="page-title">Understanding the Brain</h1>
          <p className="page-subtitle">
            Your brain controls everything—from memory to movement. Learn how brain disorders affect daily life.
          </p>
        </div>

        <div className="content-grid">
          <div className="info-card">
            <div className="bcard-icon-header">
              <Zap className="section-icon" />
              <h2 className="bcard-title">How Your Brain Works</h2>
            </div>
            <p className="bcard-text">
              The brain is the control center of your body, containing billions of neurons that communicate through electrical and chemical signals. It processes information, controls movement, regulates emotions, and stores memories.
            </p>
          </div>

          <div className="info-card">
            <div className="bcard-icon-header">
              <Network className="section-icon" />
              <h2 className="bcard-title">Brain Structure</h2>
            </div>
            <p className="bcard-text">
              The brain consists of several key regions: the cerebrum (thinking and memory), cerebellum (balance and coordination), and brain stem (vital functions). Each region plays a crucial role in daily functioning.
            </p>
          </div>

          <div className="info-card">
            <div className="bcard-icon-header">
              <Activity className="section-icon" />
              <h2 className="bcard-title">Brain Health</h2>
            </div>
            <p className="bcard-text">
              Maintaining brain health involves regular physical exercise, mental stimulation, quality sleep, healthy diet, and social connections. These factors help protect against cognitive decline and support overall brain function.
            </p>
          </div>
        </div>

        <div className="detail-section">
          <h2 className="section-heading">Impact of Brain Disorders</h2>
          <p className="detail-text">
            When the brain is affected by disorders like Alzheimer's, Parkinson's, or other neurological conditions, it can impact memory, movement, thinking, and daily activities. Understanding how these disorders affect the brain helps in early detection and better management of symptoms.
          </p>
        </div>
      </main>
    </div>
  );
};

export default BrainInfo;