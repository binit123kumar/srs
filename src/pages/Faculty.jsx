import React from "react";

import FacultyPic from "../Assests/staff1.jpg";
import GauravPic from "../Assests/gaurav.jpeg";
import NitishPic from "../Assests/nitish.jpeg";

function Faculty() {
  const sectionStyle = {
    padding: "40px 20px",
    background: "#f5f7fa",
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
    textAlign: "center",
    border: "1px solid #e5e5e5",
    transition: "0.3s ease",
  };

  const imageStyle = {
    width: "100%",
    height: "400px",
    objectFit: "contain",
    objectPosition: "center",
    backgroundColor: "#f8f9fa",
    padding: "10px",
  };

  const contentStyle = {
    padding: "20px",
    textAlign: "left",
  };

  const nameStyle = {
    textAlign: "center",
    color: "#003366",
    marginBottom: "15px",
  };

  const labelStyle = {
    color: "#003366",
    fontWeight: "600",
  };

  return (
    <>
      {/* Faculty Section */}
      <div style={sectionStyle}>
        <h1 style={headingStyle}>Faculty</h1>

        <div style={cardContainer}>
          <div
            style={cardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img
              src={FacultyPic}
              alt="Dr. Saad Asghar Moeeni"
              style={imageStyle}
            />

            <div style={contentStyle}>
              <h2 style={nameStyle}>Dr. Saad Asghar Moeeni</h2>

              <p>
                <span style={labelStyle}>Qualification:</span> B.Tech, M.Tech,
                PhD in Civil (Water Resource Engineering)
              </p>

              <p>
                <span style={labelStyle}>Experience:</span> Ex Flood Modeller
                in Water Resource Department, Govt. of Bihar
              </p>

              <p>
                <span style={labelStyle}>Designation:</span> Assistant
                Professor
              </p>

              <p>
                <span style={labelStyle}>School:</span> School of River Studies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Section */}
      <div style={sectionStyle}>
        <h1 style={headingStyle}>Staff</h1>

        <div style={cardContainer}>
          {/* Gaurav */}
          <div
            style={cardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img
              src={GauravPic}
              alt="Gaurav Kumar"
              style={imageStyle}
            />

            <div style={contentStyle}>
              <h2 style={nameStyle}>Gaurav Kumar</h2>

              <p>
                <span style={labelStyle}>Qualification:</span> PGDM (MBA),
                B.Com
              </p>

              <p>
                <span style={labelStyle}>Designation:</span> MTCO
              </p>

              <p>
                <span style={labelStyle}>Email:</span>
                <br />
                g.kr01aku@gmail.com
              </p>

              <p>
                <span style={labelStyle}>Mobile:</span> 7979062749
              </p>
            </div>
          </div>

          {/* Nitish */}
          <div
            style={cardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img
              src={NitishPic}
              alt="Nitish Kumar"
              style={imageStyle}
            />

            <div style={contentStyle}>
              <h2 style={nameStyle}>Nitish Kumar</h2>

              <p>
                <span style={labelStyle}>Qualification:</span> B.Tech
                (Electronics & Communication Engineering)
              </p>

              <p>
                <span style={labelStyle}>Designation:</span> Assistant
              </p>

              <p>
                <span style={labelStyle}>School:</span> School of River Studies
              </p>

              <p>
                <span style={labelStyle}>Mobile:</span> 7779840265
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faculty;