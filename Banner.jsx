import React from "react";

function Banner() {
  return (
    <section
      style={{
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        background:
          "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #9333ea 100%)",
        color: "white",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Small heading */}
        <p
          style={{
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "15px",
            letterSpacing: "1px",
          }}
        >
          WELCOME TO LEARNSTACK LMS
        </p>

        {/* Main heading */}
        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 70px)",
            lineHeight: "1.1",
            margin: "0 0 20px",
            fontWeight: "800",
          }}
        >
          Learn Today.
          <br />
          Build Your Future.
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "19px",
            lineHeight: "1.7",
            maxWidth: "700px",
            margin: "0 auto 35px",
            opacity: 0.95,
          }}
        >
          Discover quality courses, learn from experienced faculty, and
          develop the skills you need for your academic and professional
          journey.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#courses"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: "white",
              color: "#4f46e5",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "16px",
            }}
          >
            Explore Courses
          </a>

          <a
            href="#about"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: "transparent",
              color: "white",
              border: "2px solid white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "16px",
            }}
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            flexWrap: "wrap",
            marginTop: "55px",
          }}
        >
          <div>
            <strong style={{ fontSize: "28px" }}>50+</strong>
            <p style={{ margin: "5px 0 0", opacity: 0.9 }}>
              Courses
            </p>
          </div>

          <div>
            <strong style={{ fontSize: "28px" }}>20+</strong>
            <p style={{ margin: "5px 0 0", opacity: 0.9 }}>
              Faculty
            </p>
          </div>

          <div>
            <strong style={{ fontSize: "28px" }}>1000+</strong>
            <p style={{ margin: "5px 0 0", opacity: 0.9 }}>
              Students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;