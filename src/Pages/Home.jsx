import { useState } from "react";
import Laptop from "../Components/Images/Laptop.jpg";
import { Link } from "react-router-dom";
import { Header } from "../Components";
import A56 from "../Components/Images/A56.jpg";
import S26 from "../Components/Images/S26.jpg";
import OppoFindX9 from "../Components/Images/OppoFindX9.jpg";
import Xiaomi17U from "../Components/Images/Xiaomi17U.jpg";
import VivoX300U from "../Components/Images/VivoX300U.jpg";
import OppoR15 from "../Components/Images/OppoR15.jpg";
import VivoV70 from "../Components/Images/VivoV70.jpg";
import Iphone17Max from "../Components/Images/Iphone17Max.jpg";
import "../index.css";

export default function Home() {
  return (
    <div id="HomePageContainer">
      <Header />
      <h3 id="text">Meet out latest and greatest tech product</h3>

     <div className="hero-wrapper">
        <button className="hero-scroll-btn left" onClick={() =>
          document.querySelector('.hero-section').scrollBy({ left: -300, behavior: 'smooth' })
        }>‹</button>

      <div className="hero-section">
        
        <img src={A56} alt="Samsung Galaxy A57 Image" />
        <img src={OppoFindX9} alt="Oppo Find X9 Image" />
        <img src={S26} alt="Samsung Galaxy S26 Image" />
        <img src={VivoX300U} alt="Vivo X300U Image" />
        <Link to="/store/product/7">
        <img src={Xiaomi17U} alt="Xiaomi 17 Ultra Image" />
        </ Link>
        <img src={VivoV70} alt="Vivo V70 Image" /> 
        <img src={OppoR15} alt="Oppo R15 Image" />
        <img src={Iphone17Max} alt="iPhone 17 Max Image" />
      </div>

      <button className="hero-scroll-btn right" onClick={() =>
          document.querySelector('.hero-section').scrollBy({ left: 300, behavior: 'smooth' })
        }>›</button>
      </div>
      <div className="hero-section">
        <img className="hero-img" src={Laptop} alt="Image of an laptop" />
      </div>
    </div>
  );
}
