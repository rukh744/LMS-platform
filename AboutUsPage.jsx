import React from "react";

function AboutUsPage() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              color: "#1e293b",
              marginBottom: "15px",
            }}
          >
            About LearnStack LMS
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#64748b",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            LearnStack LMS is an online learning platform designed to help
            students develop practical skills through quality courses,
            experienced faculty, and interactive learning.
          </p>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            alignItems: "stretch",
          }}
        >
          {/* Who We Are */}
          <div style={cardStyle}>
            <div style={iconStyle}>🎓</div>

            <h2 style={headingStyle}>Who We Are</h2>

            <p style={textStyle}>
              LearnStack LMS provides students with a simple and modern
              platform for learning. Our goal is to make education accessible,
              practical, and engaging for everyone.
            </p>
          </div>

          {/* Our Mission */}
          <div style={cardStyle}>
            <div style={iconStyle}>🚀</div>

            <h2 style={headingStyle}>Our Mission</h2>

            <p style={textStyle}>
              Our mission is to provide high-quality educational content that
              helps students improve their knowledge, technical skills, and
              confidence.
            </p>
          </div>

          {/* Our Vision */}
          <div style={cardStyle}>
            <div style={iconStyle}>💡</div>

            <h2 style={headingStyle}>Our Vision</h2>

            <p style={textStyle}>
              We aim to create a learning environment where students can learn
              at their own pace and prepare themselves for academic and
              professional success.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div
          style={{
            marginTop: "60px",
            padding: "40px",
            background: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "30px",
              color: "#1e293b",
              marginBottom: "30px",
            }}
          >
            Why Choose LearnStack?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "25px",
            }}
          >
            <Feature
              icon="📚"
              title="Quality Courses"
              text="Learn from well-structured courses created for students."
            />

            <Feature
              icon="👨‍🏫"
              title="Expert Faculty"
              text="Get guidance from experienced teachers and instructors."
            />

            <Feature
              icon="💻"
              title="Learn Online"
              text="Access your learning materials anytime and anywhere."
            />

            <Feature
              icon="🏆"
              title="Build Your Skills"
              text="Develop practical skills that can help you achieve your goals."
            />
          </div>
          </div>
      </div>
    </section>
  );
}

// Feature component
function Feature({ icon, title, text }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          fontSize: "35px",
          marginBottom: "10px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          color: "#334155",
          marginBottom: "8px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#64748b",
          lineHeight: "1.6",
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

const cardStyle = {
  background: "#ffffff",
  padding: "35px 25px",
  borderRadius: "16px",
  textAlign: "center",
  boxShadow: "0 8px 25px rgba(0,0,0,0.07)",
};

const iconStyle = {
  fontSize: "45px",
  marginBottom: "15px",
};

const headingStyle = {
  fontSize: "24px",
  color: "#1e293b",
  marginBottom: "12px",
};

const textStyle = {
  color: "#64748b",
  lineHeight: "1.7",
  fontSize: "16px",
};

export default AboutUsPage;
