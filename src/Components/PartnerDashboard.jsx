import { useState, useRef } from "react";
import { Header } from ".";
import "../index.css";
import { addProduct } from "../api/products";

export default function PartnerDashboard() {
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send formData + image to backend
    console.log("Submitting product:", formData);
    setSubmitted(true);
    // reset after 2 seconds
    setTimeout(() => {
      setSubmitted(false);
      setPreview(null);
      setFormData({ name: "", price: "", description: "" });
    }, 2000);

    const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("name", formData.name);
  formData.append("price", formData.price);
  formData.append("description", formData.description);
  formData.append("image", imageFile);
  await addProduct(formData);
}
  };

  return (
    <>
      <Header />
      <div id="dashboard-page">

        <div id="dashboard-header">
          <h1 id="dashboard-title">Partner Dashboard</h1>
          <p id="dashboard-sub">Upload a new product for customers to see.</p>
        </div>

        <div id="dashboard-form">

          {/* Image Upload */}
          <div id="card-img-zone" onClick={() => fileRef.current.click()}>
            {preview ? (
              <img src={preview} alt="Product preview" id="card-img-preview" />
            ) : (
              <>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span>Click to upload product image</span>
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

          {/* Product Name */}
          <div className="form-group">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="e.g. iPhone 15 Pro"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Price */}
          <div className="form-group">
            <label className="form-label">Price (USD)</label>
            <div className="price-input-wrap">
              <span className="price-symbol">$</span>
              <input
                type="number"
                name="price"
                className="form-input price-field"
                placeholder="0.00"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="form-label">Short Description</label>
            <textarea
              name="description"
              className="form-textarea"
              placeholder="Describe your product in a few sentences..."
              rows="4"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <button id="btn" onClick={handleSubmit} disabled={submitted}>
            {submitted ? "✓ Product Listed!" : "List Product"}
          </button>

        </div>
      </div>
    </>
  );
}