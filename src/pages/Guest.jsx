import React from "react";

// Assests folder se asli photos ko import kiya gaya hai
import NadimPic from "../Assests/nadim.jpg";
import AshutoshPic from "../Assests/ashutosh.jpg";

function Guest() {
  const sectionStyle = {
    padding: "40px 20px",
    background: "#f5f7fa",
    minHeight: "100vh",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#003366",
    marginBottom: "30px",
    fontSize: "2.2rem",
    fontWeight: "700",
  };

  const cardContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  };

  const cardStyle = {
    width: "350px",
    background: "#fff",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 5px 20px rgba(0,0,0,0.12)",
    border: "1px solid #e5e5e5",
    transition: "0.3s ease",
  };

  const imageStyle = {
    width: "100%",
    height: "400px",
    objectFit: "contain", /* Faculty page ki tarah pure face ko display karne ke liye contain best hai */
    backgroundColor: "#f8f9fa",
    padding: "10px",
  };

  const contentStyle = {
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div style={sectionStyle}>
      <h1 style={headingStyle}>Guest Faculty</h1>

      <div style={cardContainer}>
        {/* Dr. Nadim */}
        <div style={cardStyle}>
          {/* Asli Photo link ho gayi */}
          <img
            src={NadimPic}
            alt="Dr. Md. Nadim Heyat Jilani"
            style={imageStyle}
          />

          <div style={contentStyle}>
            <h2>Dr. Md. Nadim Heyat Jilani</h2>

            <p style={{ marginTop: "10px" }}>
              <strong>Qualification:</strong>
              <br />
              Ph.D. in Civil Engineering (Water, Energy and Environmental
              Engineering), IIT (ISM) Dhanbad
            </p>

            <p style={{ marginTop: "10px" }}>
              <strong>Designation:</strong> Guest Faculty
            </p>
          </div>
        </div>

        {/* Ashutosh Kumar */}
        <div style={cardStyle}>
          {/* Asli Photo link ho gayi */}
          <img
            src={AshutoshPic}
            alt="Ashutosh Kumar"
            style={imageStyle}
          />

          <div style={contentStyle}>
            <h2>Ashutosh Kumar</h2>

            <p style={{ marginTop: "10px" }}>
              <strong>Qualification:</strong>
              <br />
              M.Tech in Civil Engineering (Water Resource Engineering)
            </p>

            <p style={{ marginTop: "10px" }}>
              <strong>Designation:</strong> Guest Faculty
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guest;