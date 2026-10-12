import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "white",
        padding: "50px 20px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "35px",
        }}
      >
        {/* About */}
        <div>
          <h2
            style={{
              color: "#818cf8",
              marginBottom: "15px",
            }}
          >
            LearnStack
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.7",
            }}
          >
            LearnStack is a Learning Management System that helps students
            learn new skills through quality courses and experienced faculty.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ marginBottom: "18px" }}>Quick Links</h3>

          <a href="#" style={linkStyle}>
            Home
          </a>

          <a href="#courses" style={linkStyle}>
            Courses
          </a>

          <a href="#about" style={linkStyle}>
            About Us
          </a>

          <a href="#faculty" style={linkStyle}>
            Faculty
          </a>

          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </div>

        {/* Courses */}
        <div>
          <h3 style={{ marginBottom: "18px" }}>Popular Courses</h3>

          <p style={textStyle}>Full Stack Web Development</p>
          <p style={textStyle}>Python Programming</p>
          <p style={textStyle}>Java Programming</p>
          <p style={textStyle}>React.js Development</p>
          <p style={textStyle}>Data Science</p>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ marginBottom: "18px" }}>Contact Us</h3>

          <p style={textStyle}>📧 support@learnstack.com</p>
          <p style={textStyle}>📞 +91 7439880043</p>
          <p style={textStyle}>📍 India</p>

          <div style={{ marginTop: "20px" }}>
            <a href="#" style={socialStyle}>
              Facebook
            </a>

            <a href="#" style={socialStyle}>
              Instagram
            </a>

            <a href="#" style={socialStyle}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "40px auto 0",
          paddingTop: "20px",
          borderTop: "1px solid #334155",
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} LearnStack LMS. All Rights Reserved.
        </p>

        <p style={{ marginTop: "8px", fontSize: "14px" }}>
          Learn Today. Build Your Future.
        </p>
      </div>
    </footer>
  );
}

const linkStyle = {
  display: "block",
  color: "#cbd5e1",
  textDecoration: "none",
  marginBottom: "10px",
};

const textStyle = {
  color: "#cbd5e1",
  margin: "0 0 10px",
  lineHeight: "1.5",
};

const socialStyle = {
  display: "inline-block",
  color: "#818cf8",
  textDecoration: "none",
  marginRight: "12px",
  marginBottom: "8px",
};

export default Footer;