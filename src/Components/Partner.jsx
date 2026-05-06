import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { applyAsPartner } from "../api/partner";

export default function Partner() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [formData, setFormData] = useState({
    businessName: "", ownerName: "", email: "", phone: "", password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await applyAsPartner({
      businessName: formData.businessName,
      phone: formData.phone,
      address: formData.ownerName,
    });
    setEmail(formData.email);
    setStep(2);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    navigate("/partner/dashboard");
  };

  return (
    <div id="container">
      <div id="loginbox">
        {step === 1 && (
          <>
            <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#1d1d1f", marginBottom: "6px" }}>
              Become a Partner
            </h2>
            <p style={{ fontSize: "13px", color: "#6e6e73", marginBottom: "24px", textAlign: "center" }}>
              Fill in your business details to get started.
            </p>
            <input type="text" name="businessName" placeholder="Business name"
              value={formData.businessName} onChange={handleChange} /><br />
            <input type="text" name="ownerName" placeholder="Owner / Contact name"
              value={formData.ownerName} onChange={handleChange} /><br />
            <input type="text" name="email" placeholder="Business email"
              value={formData.email} onChange={handleChange} /><br />
            <input type="text" name="phone" placeholder="Phone number"
              value={formData.phone} onChange={handleChange} /><br />
            <input type="password" name="password" placeholder="Create a password"
              value={formData.password} onChange={handleChange} /><br />
            <button id="btn" onClick={handleSubmit}>Continue</button><br />
            <h3>Already have an account?</h3>
            <Link to="/login">Sign in</Link>
          </>
        )}
        {step === 2 && (
          <>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>📧</div>
            <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#1d1d1f" }}>Check your email</h2>
            <p style={{ fontSize: "13px", color: "#6e6e73", marginBottom: "24px", textAlign: "center" }}>
              We sent a verification code to<br />
              <strong style={{ color: "#1d1d1f" }}>{email}</strong>
            </p>
            <input type="text" placeholder="Enter verification code"
              value={code} onChange={(e) => setCode(e.target.value)}
              style={{ textAlign: "center", letterSpacing: "6px", fontSize: "20px" }} /><br />
            <button id="btn" onClick={handleVerify}>Verify & Continue</button><br />
            <h3>Didn't receive it?</h3>
            <Link to="#">Resend code</Link>
          </>
        )}
      </div>
    </div>
  );
}