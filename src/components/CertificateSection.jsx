import React, { useState } from 'react';
import '../styles/CertificateSection.css';

const certificates = [
  {
    title: 'Full Website Sprint',
    subtitle: 'EFFORTLESS EXECUTION, RAPID RESULTS',
    details: [
      'PRICING STARTS AT $3,999',
      'KICKOFF & PLANNING',
      'DESIGN & PROTOTYPING',
      'DEVELOPMENT & TESTING',
      'LAUNCH & OPTIMIZATION'
    ],
    image: '/images/certificate1.jpg',
    dots: 1
  },
  {
    title: 'Motion Design',
    subtitle: 'INTERACTION DESIGN, USABILITY AUDITS',
     details: [
      'PRICING STARTS AT $3,999',
      'KICKOFF & PLANNING',
      'DESIGN & PROTOTYPING',
      'DEVELOPMENT & TESTING',
      'LAUNCH & OPTIMIZATION'
    ],
    image: '/images/certificate2.jpg',
    dots: 2
  },
  {
    title: 'Full Design Package',
    subtitle: 'LOGO CREATION, TYPOGRAPHY, MATERIALS',
    details: [
      'PRICING STARTS AT $3,999',
      'KICKOFF & PLANNING',
      'DESIGN & PROTOTYPING',
      'DEVELOPMENT & TESTING',
      'LAUNCH & OPTIMIZATION'
    ],
    image: '/images/certificate3.jpg',
    dots: 3
  },
  {
    title: 'React Development',
    subtitle: 'FULL WEBSITE DEVELOPMENT',
    details: [
      'PRICING STARTS AT $3,999',
      'KICKOFF & PLANNING',
      'DESIGN & PROTOTYPING',
      'DEVELOPMENT & TESTING',
      'LAUNCH & OPTIMIZATION'
    ],
    image: '/images/certificate4.jpg',
    dots: 4
  },
  {
    title: 'Web Design',
    subtitle: 'FIGMA FILE, SKETCH FILE',
    details: [
      'PRICING STARTS AT $3,999',
      'KICKOFF & PLANNING',
      'DESIGN & PROTOTYPING',
      'DEVELOPMENT & TESTING',
      'LAUNCH & OPTIMIZATION'
    ],
    image: '/images/certificate5.jpg',
    dots: 5
  },
    {
    title: 'Web Design',
    subtitle: 'FIGMA FILE, SKETCH FILE',
    details: [
      'PRICING STARTS AT $3,999',
      'KICKOFF & PLANNING',
      'DESIGN & PROTOTYPING',
      'DEVELOPMENT & TESTING',
      'LAUNCH & OPTIMIZATION'
    ],
    image: '/images/certificate6.jpg',
    dots: 6
  },
];

const CertificateSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const renderDots = (count) => {
    const dots = [];
    for (let i = 0; i < 5; i++) {
      dots.push(
        <span 
          key={i} 
          className={`dot ${i < count ? 'active' : 'inactive'}`}
        ></span>
      );
    }
    return dots;
  };

  return (
    <section className="certificate-section">
      <div className="certificate-header">
        <span className="certificate-section-number">04</span>
        <span className="certificate-section-title">//CERTIFICATES</span>
        <span className="certificate-section-year">2022 - 2025</span>
      </div>
      <div className="certificate-content">
        <div className="certificate-title">
          PRO<br />CERTIFICATES
        </div>
        <div className="certificate-desc">
          Explore my collection of professional certificates<br />
          that showcase my expertise and commitment to continuous learning.
        </div>
      </div>
      <div className="certificate-accordion-list">
        {certificates.map((cert, idx) => (
          <div className={`certificate-accordion-item${openIndex === idx ? ' open' : ''}`} key={idx}>
            <div className="certificate-accordion-header" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
              <div className="certificate-accordion-left">
                <div className="certificate-dots">
                  {renderDots(cert.dots)}
                </div>
                <div className="certificate-accordion-text">
                  <strong>{cert.title}</strong>
                  <div className="certificate-accordion-sub">{cert.subtitle}</div>
                </div>
              </div>
              <span className={`certificate-accordion-icon${openIndex === idx ? ' open' : ''}`}>▼</span>
            </div>
            {openIndex === idx && (
              <div className="certificate-accordion-body">
                {cert.image && (
                  <img src={cert.image} alt={cert.title} className="certificate-accordion-img" />
                )}
                {cert.details.length > 0 && (
                  <ul>
                    {cert.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;