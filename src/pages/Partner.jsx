import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Partner() {
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [productType, setProductType] = useState("");

  const handlePartnerRegister = (e) => {
    e.preventDefault();

    alert("Partner Registration Submitted Successfully!");

    setBusinessName("");
    setOwnerName("");
    setEmail("");
    setPhone("");
    setProductType("");
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={handlePartnerRegister}
          style={{
            width: "400px",
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h1>Become A Partner</h1>

          <p>
            Register your business and sell your products on our platform.
          </p>

          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}