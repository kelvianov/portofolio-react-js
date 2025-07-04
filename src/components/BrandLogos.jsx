import React from "react";
import "../styles/BrandLogos.css";

const brands = [
  // Phase 1: Discover and Analysis
  { name: "Figma", textClass: "brand-oslo" },
  { name: "Photoshop", textClass: "brand-script" },
  { name: "Git", textClass: "brand-bold" },
  { name: "VS Code", textClass: "brand-bold" },
  // Phase 2: Design and Implement
  { name: "HTML5", textClass: "brand-bold" },
  { name: "CSS3", textClass: "brand-bold" },
  { name: "Vite", textClass: "brand-cairo" },
  { name: "React", textClass: "brand-bold" },
  // Phase 3: Deliver and Monitor
  { name: "PHP", textClass: "brand-bold" },
  { name: "Laravel", textClass: "brand-cairo" },
  { name: "MySQL", textClass: "brand-bold" },
  { name: "Node.js", textClass: "brand-script" },
];

const BrandLogos = () => (
  <div className="brand-logos-marquee-wrapper">
    <div className="brand-logos-section brand-logos-marquee">
      {brands.concat(brands).map((brand, idx) => (
        <div className="brand-card" key={brand.name + idx}>
          <span className={`brand-text ${brand.textClass}`}>{brand.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default BrandLogos;
