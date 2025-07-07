import React, { useEffect, useRef, useState } from "react";
import "../styles/PortfolioSection.css";

const portfolioData = [
  {
    image: "/images/project1.0.png",
    title: "Company Profile",
    subtitle: "WEBSITE",
    dots: 5,
    activeDot: 0,
  },
  {
    image: "/images/project3.0.png",
    title: "Portofolio",
    subtitle: "LENSWORK SHOWCASE",
    dots: 5,
    activeDot: 1,
  },
  {
    image: "/images/project2.0.png",
    title: "KosKu",
    subtitle: "Commercial Website",
    dots: 5,
    activeDot: 2,
  },
];

const PortfolioSection = () => {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [cursor, setCursor] = useState({ show: false, x: 0, y: 0, dark: false });

  useEffect(() => {
    const currentTitle = titleRef.current;

    // Intersection Observer untuk title animation
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true);
          }
        });
      },
      { 
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px" // Trigger sedikit lebih awal
      }
    );

    if (currentTitle) titleObserver.observe(currentTitle);

    // Cleanup
    return () => {
      if (currentTitle) titleObserver.unobserve(currentTitle);
    };
  }, []);

  // Handler untuk custom cursor
  const handleImgEnter = (e) => {
    const isDark = e.target.dataset.cursor === "dark";
    setCursor({ show: true, x: e.clientX, y: e.clientY, dark: isDark });
  };

  const handleImgMove = (e) => {
    const isDark = e.target.dataset.cursor === "dark";
    setCursor({ show: true, x: e.clientX, y: e.clientY, dark: isDark });
  };

  const handleImgLeave = () => {
    setCursor({ show: false, x: 0, y: 0, dark: false });
  };

  return (
    <section className="portfolio-section" ref={sectionRef}>
      {/* Custom Cursor */}
      <div
        className={`portfolio-img-cursor${cursor.show ? " active" : ""}${cursor.dark ? " dark" : ""}`}
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        VIEW
      </div>

      <div className="portfolio-grid">
        {/* Header */}
        <div className="portfolio-header">
          <span className="portfolio-section-number">02</span>
          <span className="portfolio-section-title">//PROJECT</span>
          <span className="portfolio-section-year">2019 - 2025</span>
        </div>

        {/* Title */}
        <div className="portfolio-title-block">
          <h2
            ref={titleRef}
            className={`portfolio-title${titleVisible ? " animate" : ""}`}
          >
            <div className="title-line">
              <span className="word">LATEST</span>
            </div>
            <div className="title-line">
              <span className="word">PROJECT</span>
            </div>
          </h2>
        </div>

        {/* Description */}
        <div className="portfolio-desc-block">
          <p className="portfolio-desc">
            My creative spirit comes alive in the digital realm. With nimble
            <br />
            fingers flying across the device.
          </p>
        </div>

        {/* Cards Container */}
        <div className="portfolio-cards-container">
          {/* Card Left */}
          <div className="portfolio-card-left">
            <div className="portfolio-card">
              <img
                src={portfolioData[0].image}
                alt={portfolioData[0].title}
                className="portfolio-img"
                onMouseEnter={handleImgEnter}
                onMouseMove={handleImgMove}
                onMouseLeave={handleImgLeave}
              />
              <div className="portfolio-card-footer">
                <div className="portfolio-dots">
                  {[...Array(portfolioData[0].dots)].map((_, i) => (
                    <span
                      key={i}
                      className={i <= portfolioData[0].activeDot ? "dot active" : "dot"}
                    />
                  ))}
                </div>
                <div className="portfolio-card-footer-content">
                  <div className="portfolio-card-title">{portfolioData[0].title}</div>
                  <div className="portfolio-card-subtitle">{portfolioData[0].subtitle}</div>
                </div>
                <div className="portfolio-arrow">→</div>
              </div>
            </div>
          </div>

          {/* Card Right */}
          <div className="portfolio-card-right">
            <div className="portfolio-card landscape">
              <img
                src={portfolioData[1].image}
                alt={portfolioData[1].title}
                className="portfolio-img"
                data-cursor="dark"
                onMouseEnter={handleImgEnter}
                onMouseMove={handleImgMove}
                onMouseLeave={handleImgLeave}
              />
              <div className="portfolio-card-footer">
                <div className="portfolio-dots">
                  {[...Array(portfolioData[1].dots)].map((_, i) => (
                    <span
                      key={i}
                      className={i <= portfolioData[1].activeDot ? "dot active" : "dot"}
                    />
                  ))}
                </div>
                <div className="portfolio-card-footer-content">
                  <div className="portfolio-card-title">{portfolioData[1].title}</div>
                  <div className="portfolio-card-subtitle">{portfolioData[1].subtitle}</div>
                </div>
                <div className="portfolio-arrow">→</div>
              </div>
            </div>
          </div>

          {/* Card Center */}
          <div className="portfolio-card-center">
            <div className="portfolio-card">
              <img
                src={portfolioData[2].image}
                alt={portfolioData[2].title}
                className="portfolio-img"
                onMouseEnter={handleImgEnter}
                onMouseMove={handleImgMove}
                onMouseLeave={handleImgLeave}
              />
              <div className="portfolio-card-footer">
                <div className="portfolio-dots">
                  {[...Array(portfolioData[2].dots)].map((_, i) => (
                    <span
                      key={i}
                      className={i <= portfolioData[2].activeDot ? "dot active" : "dot"}
                    />
                  ))}
                </div>
                <div className="portfolio-card-footer-content">
                  <div className="portfolio-card-title">{portfolioData[2].title}</div>
                  <div className="portfolio-card-subtitle">{portfolioData[2].subtitle}</div>
                </div>
                <div className="portfolio-arrow">→</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;