import React from "react";
import "../styles/PortfolioSection.css";

const portfolioData = [
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    title: "Seventy Seven",
    subtitle: "PORTFOLIO",
    dots: 5,
    activeDot: 0,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Scrambler",
    subtitle: "PHOTOGRAPHY",
    dots: 5,
    activeDot: 1,
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    title: "Zudio Garage®",
    subtitle: "BUSINESS",
    dots: 5,
    activeDot: 2,
  },
];

const PortfolioSection = () => (
  <section className="portfolio-section">
    <div className="portfolio-grid">
      {/* Atas */}
      <div className="portfolio-header">
        <span className="portfolio-section-number">02</span>
        <span className="portfolio-section-title">//PORTFOLIO</span>
        <span className="portfolio-section-year">2019 - 2025</span>
      </div>
      <div className="portfolio-title-block">
        <h2 className="portfolio-title">
          <span>LATEST</span>
          <br />
          <span>PROJECT</span>
        </h2>
      </div>
      <div className="portfolio-desc-block">
        <p className="portfolio-desc">
          My creative spirit comes alive in the digital realm. With nimble<br />
          fingers flying across the device.
        </p>
      </div>
      {/* Bawah */}
      <div className="portfolio-card-left">
        <div className="portfolio-card">
          <img src={portfolioData[0].image} alt={portfolioData[0].title} className="portfolio-img" />
          <div className="portfolio-card-footer">
            <div className="portfolio-dots">
              {[...Array(portfolioData[0].dots)].map((_, i) => (
                <span key={i} className={i === portfolioData[0].activeDot ? "dot active" : "dot"}></span>
              ))}
            </div>
            <div>
              <div className="portfolio-card-title">{portfolioData[0].title}</div>
              <div className="portfolio-card-subtitle">{portfolioData[0].subtitle}</div>
            </div>
            <div className="portfolio-arrow">→</div>
          </div>
        </div>
      </div>
      <div className="portfolio-card-center">
        <div className="portfolio-card">
          <img src={portfolioData[2].image} alt={portfolioData[2].title} className="portfolio-img" />
          <div className="portfolio-card-footer">
            <div className="portfolio-dots">
              {[...Array(portfolioData[2].dots)].map((_, i) => (
                <span key={i} className={i === portfolioData[2].activeDot ? "dot active" : "dot"}></span>
              ))}
            </div>
            <div>
              <div className="portfolio-card-title">{portfolioData[2].title}</div>
              <div className="portfolio-card-subtitle">{portfolioData[2].subtitle}</div>
            </div>
            <div className="portfolio-arrow">→</div>
          </div>
        </div>
      </div>
      <div className="portfolio-card-right">
        <div className="portfolio-card landscape">
          <img src={portfolioData[1].image} alt={portfolioData[1].title} className="portfolio-img" />
          <div className="portfolio-card-footer">
            <div className="portfolio-dots">
              {[...Array(portfolioData[1].dots)].map((_, i) => (
                <span key={i} className={i === portfolioData[1].activeDot ? "dot active" : "dot"}></span>
              ))}
            </div>
            <div>
              <div className="portfolio-card-title">{portfolioData[1].title}</div>
              <div className="portfolio-card-subtitle">{portfolioData[1].subtitle}</div>
            </div>
            <div className="portfolio-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
