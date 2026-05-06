import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { applyAsPartner } from "../api/partner";

export default function Partner() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1 = details, 2 = verify email
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Step 1 — submit partner details, move to email verification
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(formData.email);
    setStep(2);
    // TODO: trigger backend to send verification email
    console.log("Sending verification email to:", formData.email);

    const handleSubmit = async (e) => {
  e.preventDefault();
  const data = await applyAsPartner({ businessName, phone, address });
  if (data.success) setStep(2);
}
  };

  // Step 2 — verify the code
  const handleVerify = (e) => {
    e.preventDefault();
    // TODO: validate code against backend
    console.log("Verifying code:", code);
    navigate("/partner/dashboard");
  };

  return (
    <div id="container">
      <div id="loginbox">

        {step === 1 && (
          <>
            <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#1d1d1f", marginBottom: "6px", letterSpacing: "-0.3px" }}>
              Become a Partner
            </h2>
            <p style={{ fontSize: "13px", color: "#6e6e73", marginBottom: "24px", textAlign: "center", lineHeight: 1.5 }}>
              Fill in your business details to get started.
            </p>

            <input
              type="text"
              name="businessName"
              placeholder="Business name"
              value={formData.businessName}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="ownerName"
              placeholder="Owner / Contact name"
              value={formData.ownerName}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="email"
              placeholder="Business email"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            <button id="btn" onClick={handleSubmit}>
              Continue
            </button>
            <br />
            <h3>Already have an account?</h3>
            <Link to="/login">Sign in</Link>
          </>
        )}

        {step === 2 && (
          <>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>📧</div>
            <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#1d1d1f", marginBottom: "6px", letterSpacing: "-0.3px" }}>
              Check your email
            </h2>
            <p style={{ fontSize: "13px", color: "#6e6e73", marginBottom: "24px", textAlign: "center", lineHeight: 1.6 }}>
              We sent a verification code to<br />
              <strong style={{ color: "#1d1d1f" }}>{email}</strong>
            </p>

            <input
              type="text"
              placeholder="Enter verification code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{ textAlign: "center", letterSpacing: "6px", fontSize: "20px" }}
            />
            <br />
            <button id="btn" onClick={handleVerify}>
              Verify & Continue
            </button>
            <br />
            <h3>Didn't receive it?</h3>
            <Link to="#" onClick={() => console.log("Resend email")}>
              Resend code
            </Link>
          </>
        )}

      </div>
    </div>
  );
}