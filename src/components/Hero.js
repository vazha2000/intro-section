import React, { useEffect, useState } from "react";
import "../styles/Hero.css";
import HeroMobile from "../images/image-hero-mobile.png";
import HeroDesktop from "../images/image-hero-desktop.png";
import Footer from "./Footer";
const Hero = () => {
  const [imageSrc, setImageSrc] = useState(HeroMobile);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setImageSrc(HeroDesktop);
      } else {
        setImageSrc(HeroMobile);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="image-container">
        <img src={imageSrc} />
      </div>
      <div className="hero-text-container">
        <div className="hero-text">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync. no matter your location. Streamline
            processes. create team rituals, and watch productivity soar.
          </p>
          <button>Learn more</button>
          <div className="hero-footer">
            <Footer />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
