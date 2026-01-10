import React, { useEffect, useRef } from 'react';
import { Heart, Users, BookOpen, Phone } from 'lucide-react';
import './SupportCare.css';

const SupportCare = () => {
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
    <div className="support-care-page">
      <canvas ref={canvasRef} className="neuron-canvas" />

      <main className="support-care-main">
        <div className="shero-section">
          <div className="sicon-circle icon-orange">
            <Heart className="shero-icon" />
          </div>
          <h1 className="page-title">Support & Care</h1>
          <p className="page-subtitle">
            Learn how to support loved ones battling neurological disorders with empathy and knowledge.
          </p>
        </div>

        <div className="scontent-grid">
          <div className="sinfo-card">
            <div className="scard-icon-header">
              <Heart className="section-icon icon-orange-color" />
              <h2 className="scard-title">Emotional Support</h2>
            </div>
            <p className="scard-text">
              Be patient, understanding, and compassionate. Listen without judgment and validate their feelings. Your presence and emotional availability can make a significant difference.
            </p>
            <ul className="support-list">
              <li>Practice active listening</li>
              <li>Show empathy and patience</li>
              <li>Maintain a positive attitude</li>
              <li>Respect their independence</li>
            </ul>
          </div>

          <div className="sinfo-card">
            <div className="scard-icon-header">
              <Users className="section-icon icon-orange-color" />
              <h2 className="scard-title">Caregiver Resources</h2>
            </div>
            <p className="scard-text">
              Caregiving is challenging. Access support groups, respite care, and educational resources to help you provide better care while maintaining your own wellbeing.
            </p>
            <ul className="support-list">
              <li>Join caregiver support groups</li>
              <li>Take breaks and practice self-care</li>
              <li>Learn about the condition</li>
              <li>Seek professional guidance</li>
            </ul>
          </div>

          <div className="sinfo-card">
            <div className="scard-icon-header">
              <BookOpen className="section-icon icon-orange-color" />
              <h2 className="scard-title">Education & Training</h2>
            </div>
            <p className="scard-text">
              Understanding the condition helps you provide appropriate care. Learn about symptoms, progression, and effective communication strategies for better support.
            </p>
            <ul className="support-list">
              <li>Attend workshops and seminars</li>
              <li>Read reliable medical resources</li>
              <li>Consult healthcare professionals</li>
              <li>Stay updated on treatments</li>
            </ul>
          </div>
        </div>

        <div className="resources-section">
          <h2 className="section-heading">Helpful Resources</h2>
          <div className="resource-grid">
            <div className="resource-card">
              <Phone className="resource-icon" />
              <h3>Helpline Services</h3>
              <p>24/7 support and crisis intervention for caregivers and families</p>
            </div>
            <div className="resource-card">
              <Users className="resource-icon" />
              <h3>Support Groups</h3>
              <p>Connect with others facing similar challenges</p>
            </div>
            <div className="resource-card">
              <BookOpen className="resource-icon" />
              <h3>Educational Materials</h3>
              <p>Access guides, videos, and training programs</p>
            </div>
          </div>
        </div>

        <div className="sdetail-section">
          <h2 className="section-heading">You're Not Alone</h2>
          <p className="sdetail-text">
            Caring for someone with a neurological disorder is challenging, but you don't have to do it alone. Reach out for help, connect with support communities, and remember to take care of yourself. Your wellbeing is essential for providing the best care to your loved one.
          </p>
        </div>
      </main>
    </div>
  );
};

export default SupportCare;