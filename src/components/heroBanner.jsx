import React from "react";
import "./Components.css";
import heroVideo from "../assets/coverr-cat.mp4";
<assets />;

const Hero = () => {
  return (
    <div className="hero">
      <video src={heroVideo} autoPlay loop muted />
      {/* <div className="hero-content">
        <h1>Find your next recipe</h1>
        <p>Discover recipes and create your shopping list</p>
      </div> */}
    </div>
  );
};

export default Hero;
