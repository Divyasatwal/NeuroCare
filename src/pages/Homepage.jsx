/*import React from 'react';
import Hero from '../components/Hero';
import DiseaseCard from '../components/Diseasecard';
import Footer from '../components/Footer';
import './Homepage.css';

const Homepage = ({ onNavigate }) => {
  const diseases = [
    {
      title: "Alzheimer's Disease",
      description: "A progressive brain disorder that affects memory, thinking, and behavior.",
      image: "🧠",
      id: "alzheimers"
    },
    {
      title: "Dementia",
      description: "A general term for loss of memory and cognitive abilities severe enough to interfere with daily life.",
      image: "💭",
      id: "dementia"
    },
    {
      title: "Parkinson's Disease",
      description: "A progressive nervous system disorder that affects movement and coordination.",
      image: "🤝",
      id: "parkinsons"
    },
    {
      title: "ALS",
      description: "Amyotrophic Lateral Sclerosis affects nerve cells in the brain and spinal cord.",
      image: "⚡",
      id: "als"
    }
  ];

  return (
    <div className="homepage">
      <Hero />
      <div className="homepage-container">
        <h2 className="homepage-title">
          Explore Neurological Diseases
        </h2>
        <div className="disease-grid">
          {diseases.map((disease, index) => (
            <div key={index} id={`disease-${disease.id}`}>
              <DiseaseCard 
                {...disease} 
                onLearnMore={() => onNavigate(disease.id)}
              />
            </div>
          ))}
        </div>
         NEW: Add Footer 
      <Footer />
      </div>
    </div>
  );
};

export default Homepage;*/

import React from "react";
import Hero from "../components/Hero";
import DiseaseCard from "../components/Diseasecard";
import Footer from "../components/Footer";
// import brain from '../assets/brain1.jpg'
import Alzheimer from "../assets/Alzheimer.jpg"
import Parkinson from "../assets/Parkinson.jpg"
import dementia from "../assets/dementia.webp"
import MDD from "../assets/MDD.jpg"
import BipolarDisorder from "../assets/BipolarDisorder.jpg"
import About from '../components/Platformmission'
import Statistics from '../components/statssection'
import AwarenessSection from '../components/AwarenessSection'
import "./Homepage.css";

const Homepage = () => {
  const diseases = [
    {
      title: "Alzheimer's Disease",
      description:
        "A progressive brain disorder that affects memory, thinking, and behavior.",
      image: Alzheimer,
      link: "/alzheimers",
      id: "alzheimers",
    },
    {
      title: "Dementia",
      description:
        "A general term for loss of memory and cognitive abilities severe enough to interfere with daily life.",
      image: dementia,
      link: "/dementia",
      id: "dementia",
    },
    {
      title: "Parkinson's Disease",
      description:
        "A progressive nervous system disorder that affects movement and coordination.",
      image: Parkinson,
      link: "/parkinsons",
      id: "parkinsons",
    },
    {
      title: "MDD",
      description:
        "Amyotrophic Lateral Sclerosis affects nerve cells in the brain and spinal cord.",
      image: MDD,
      link: "/mdd",
      id: "mdd",
    },
    {
      title: "Bipolar Disorder",
      description:
        "Amyotrophic Lateral Sclerosis affects nerve cells in the brain and spinal cord.",
      image:BipolarDisorder,
      link: "/bipolar",
      id: "bipolar",
    },
  ];

  return (
    <div className="homepage">
      <Hero />
      {/* <SplitScreenHero/>
       */}

      {/* <ParticleHero/> */}
      <About />
      <div className="homepage-container">

        <div className="homepage-disease-title-wrapper">
          <h2 className="homepage-disease-title">Explore Neurological Diseases</h2>
          <span className="homepage-disease-underline"></span>
        </div>
        <div className="disease-grid">
          {diseases.map((disease, index) => (
            <div key={index} id={`disease-${disease.id}`}>
              <DiseaseCard {...disease} />
            </div>
          ))}

        </div>

      </div>
      <Statistics />
      <AwarenessSection />
      <Footer />
    </div>
  );
};

export default Homepage;
