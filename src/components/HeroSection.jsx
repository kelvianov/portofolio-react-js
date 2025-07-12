
import React from 'react';
import '../styles/HeroSection.css';
import Threads from '../blocks/Backgrounds/Threads/Threads';


const HeroSection = () => {
  return (
    <section className="hero-section" style={{ minHeight: 500, position: 'relative', overflow: 'hidden' }}>
      {/* Threads background */}
      <Threads
        color={[1, 1, 1]}
        amplitude={1}
        distance={0.7}
        enableMouseInteraction={true}
        style={{
          position: 'absolute',
          top: '-40%',
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div className="hero-content hero-content-left" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-subtitle">
          I’m Specialized in<br />
          Creating Website Design.
        </div>
        <h1 className="hero-title">KELVIANOV</h1>
      </div>
    </section>
  );
};

export default HeroSection;
