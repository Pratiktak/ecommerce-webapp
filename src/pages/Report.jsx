import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Report() {
  const [issue, setIssue] = useState("");

  const handleSubmit = () => {
    alert("Problem reported successfully");
    setIssue("");
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>Report a Problem</h1>

        <textarea
          rows="8"
          cols="50"
          placeholder="Describe the issue..."
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />

        <br /><br />

        <button onClick={handleSubmit}>
          Submit Report
        </button>
      </div>
    </>
  );
}