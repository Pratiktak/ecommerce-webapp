import { useState, useRef } from "react";
import "../index.css";

function Card() {
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  return (

      <div id="card">

        {/* Image upload zone */}
        <div id="card-img-zone" onClick={() => fileRef.current.click()}>
          {preview ? (
            <img src={preview} alt="Product" id="card-img-preview" />
          ) : (
            <>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span>Click to add image</span>
            </>
          )}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImage}
          />
        </div>

        {/* Card body */}
        <div id="card-body">
          <textarea id="card-name" placeholder="Product name..." rows="2" />

          <div id="card-price-row">
            <span id="card-currency">$</span>
            <input id="card-price" type="number" placeholder="0.00" min="0" step="0.01" />
          </div>

          <div id="card-divider" />

          <textarea id="card-desc" placeholder="Add a short description..." rows="3" />
        </div>

      </div>
  );
}

export default Card;