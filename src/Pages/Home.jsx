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
import { getAllProducts } from "../api/products";
import { addToCart } from "../api/cart";
import "../index.css";

// Must match the ids in products.js exactly
const heroPhones = [
  { id: 1, src: A56, alt: "Samsung Galaxy A56" },
  { id: 3, src: OppoFindX9, alt: "Oppo Find X9" },
  { id: 2, src: S26, alt: "Samsung Galaxy S26" },
  { id: 5, src: VivoX300U, alt: "Vivo X300U" },
  { id: 4, src: Xiaomi17U, alt: "Xiaomi 17 Ultra" },
  { id: 7, src: VivoV70, alt: "Vivo V70" },
  { id: 6, src: OppoR15, alt: "Oppo R15" },
  { id: 8, src: Iphone17Max, alt: "iPhone 17 Max" },
];

useEffect(() => {
  const fetch = async () => {
    const data = await getAllProducts();
    setProducts(data);
  }
  fetch();
}, []);

// call addToCart when user clicks Add to Cart:
const handleAddToCart = async (productId) => {
  await addToCart(productId, 1);
}

export default function Home() {
  return (
    <div id="HomePageContainer">
      <Header />
      <h3 id="text">Meet our latest and greatest tech product</h3>

      <div className="hero-wrapper">
        <button className="hero-scroll-btn left" onClick={() =>
          document.querySelector('.hero-section').scrollBy({ left: -300, behavior: 'smooth' })
        }>‹</button>

        <div className="hero-section">
          {heroPhones.map((phone) => (
            <Link to={`/store/product/${phone.id}`} key={phone.id}>
              <img src={phone.src} alt={phone.alt} />
            </Link>
          ))}
        </div>

        <button className="hero-scroll-btn right" onClick={() =>
          document.querySelector('.hero-section').scrollBy({ left: 300, behavior: 'smooth' })
        }>›</button>
      </div>

      <div className="hero-section">
        <img className="hero-img" src={Laptop} alt="Image of a laptop" />
      </div>
    </div>
  );
}