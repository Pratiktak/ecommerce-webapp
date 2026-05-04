import { Link } from "react-router-dom";
import { Header } from "../../Components";
import { phones } from "./products";
import "../../index.css";

export default function Phone() {
  return (
    <>
      <Header />
      <div id="product-page">
        <h1 id="product-heading">Phones</h1>
        <div id="product-grid">
          {phones.map(product => (
            <Link to={`/store/product/${product.id}`} key={product.id} style={{ textDecoration: "none" }}>
              <div className="product-card">
                <div className="product-img-wrap">
                  <img src={product.image} alt={product.name} className="product-img" />
                </div>
                <div className="product-info">
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">${product.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}