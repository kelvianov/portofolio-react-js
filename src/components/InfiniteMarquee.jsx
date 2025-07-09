import React from "react";
import "../styles/project/Project1.css";


const MARQUEE_REPEAT = 12;
const MARQUEE_TEXT = "MORE WORKS\u00A0";

const InfiniteMarquee = () => {
  // Pola: bold, pudar, bold, pudar, ...
  const marqueeItems = Array.from({ length: MARQUEE_REPEAT }).map((_, i) => (
    <span
      key={i}
      className={i % 2 === 0 ? "marquee-active" : "marquee-fade"}
    >
      {MARQUEE_TEXT}
    </span>
  ));

  return (
    <div className="infinite-marquee-wrapper">
      <div className="infinite-marquee">
        {marqueeItems}
        {marqueeItems}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
