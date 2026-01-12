/*import React from 'react';
import './PageStyles.css';

const Feedback = () => {
  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">Feedback Page</h1>
        <p className="page-text">Content coming soon...</p>
      </div>
    </div>
  );
};

// export default Feedback;*/

// import React, { useState } from "react";
// import "./Feedback.css";

// const Feedback = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div className="feedback-container">
//       <h1 className="page-title">We Value Your Feedback</h1>
//       <p className="page-subtitle">
//         Help us improve NeuroCare by sharing your thoughts.
//       </p>

//       <form className="feedback-form" onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input type="text" placeholder="Enter your name" required />

//         <label>Email</label>
//         <input type="email" placeholder="Enter your email" required />

//         <label>Your Feedback</label>
//         <textarea placeholder="Type your feedback..." required />

//         <button type="submit">Submit</button>
//       </form>

//       {submitted && <p className="success-msg">Thank you for your feedback! 💙</p>}
//     </div>
//   );
// };

// export default Feedback;



import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, Star, ThumbsUp, Heart,MessagesSquare,Users} from 'lucide-react';
import './Feedback.css';
import api from "../services/api";


const Feedback = () => {
  const canvasRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitted(true);

  try {
    await api.submitFeedback({ name, email, rating, message });
    // Clear form after 3 seconds
    setTimeout(() => {
      setName("");
      setEmail("");
      setRating(0);
      setMessage("");
      setSubmitted(false);
    }, 3000);
    
  } catch (error) {
    console.error('Error submitting feedback:', error);
    alert('Failed to submit feedback. Please try again.');
  } 
};
  return (
    <div className="feedback-page">
      {/* Animated Neuron Background */}
      <canvas ref={canvasRef} className="neuron-canvas" />

      {/* Floating Particles */}
      <div className="floating-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>

      {/* Main Content */}
      <main className="feedback-main">
        {/* Hero Section */}
        <div className="fhero-section">
          <div className="fhero-icon-wrapper">
            <MessageCircle className="fhero-icon" />
            <div className="icon-pulse"></div>
          </div>
          <h1 className="fhero-title">We Value Your Feedback</h1>
        <p className="fhero-description">
  <span className="feedback-bracket">[ </span>
   Your insights help us improve and provide better support for neurological health awareness.
  <span className="feedback-bracket"> ]</span>
</p>

        </div>

        {/* Main Feedback Container */}
        <div className="feedback-container">
          {/* Left Side - Info Cards */}
          <div className="feedback-info">
            <div className="info-card-feedback card-purple">
              <div className="fcard-icon-bg bg-purple">
                <MessagesSquare className="fcard-icon" />
              </div>
              <h3 className="fcard-title">Share Your Experience</h3>
              <p className="fcard-text">
                Tell us about your experience using NeuroCare. Your feedback helps us understand what's working and what we can improve.
              </p>
            </div>

            <div className="info-card-feedback card-teal">
              <div className="fcard-icon-bg bg-teal">
                <ThumbsUp className="fcard-icon" />
              </div>
              <h3 className="fcard-title">Help Others</h3>
              <p className="fcard-text">
                Your suggestions can make a real difference in helping others access quality neurological health information.
              </p>
            </div>

            <div className="info-card-feedback card-orange">
              <div className="fcard-icon-bg bg-orange">
                <Users className="fcard-icon" />
              </div>
              <h3 className="fcard-title">Stay Connected</h3>
              <p className="fcard-text">
                Join our community and stay updated with the latest research, resources, and support for brain health.
              </p>
            </div>
          </div>

          {/* Right Side - Feedback Form */}
          <div className="feedback-form-wrapper">
            {!submitted ? (
              <form className="feedback-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h2 className="form-title">Send Us Your Feedback</h2>
                  <p className="form-subtitle">We'd love to hear from you!</p>
                </div>

                {/* Name Input */}
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Rating */}
                <div className="form-group">
                  <label className="form-label">Rate Your Experience</label>
                  <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`star ${star <= (hoveredStar || rating) ? 'star-filled' : ''}`}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="rating-text">
                      {rating === 5 ? '🌟 Excellent!' : rating === 4 ? '😊 Great!' : rating === 3 ? '👍 Good' : rating === 2 ? '😐 Fair' : '😟 Needs Improvement'}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Tell us what you think..."
                    rows="6"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                  <div className="char-count">{message.length} / 500</div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-button">
                  <Send className="button-icon" />
                  <span>Send Feedback</span>
                  <div className="button-shine"></div>
                </button>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon-wrapper">
                  <div className="success-checkmark">✓</div>
                </div>
                <h2 className="success-title">Thank You!</h2>
                <p className="success-text">
                  Your feedback has been received. We appreciate you taking the time to help us improve NeuroCare.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section - Quick Stats */}
        <div className="feedback-stats">
          <div className="fstat-box">
            <div className="fstat-number">1,247</div>
            <div className="fstat-label">Feedback Received</div>
          </div>
          <div className="fstat-box">
            <div className="fstat-number">4.8/5</div>
            <div className="fstat-label">Average Rating</div>
          </div>
          <div className="fstat-box">
            <div className="fstat-number">98%</div>
            <div className="fstat-label">Satisfaction Rate</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feedback;