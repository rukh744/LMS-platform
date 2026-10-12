import React from "react";

function FacultyPage() {
  const faculty = [
    {
      id: 1,
      name: "Dr. Rahul Sharma",
      subject: "Web Development",
      experience: "8+ Years Experience",
      icon: "👨‍💻",
    },
    {
      id: 2,
      name: "Ms. Priya Singh",
      subject: "Python & Data Science",
      experience: "7+ Years Experience",
      icon: "👩‍💻",
    },
    {
      id: 3,
      name: "Mr. Amit Kumar",
      subject: "Java Programming",
      experience: "6+ Years Experience",
      icon: "👨‍🏫",
    },
    {
      id: 4,
      name: "Ms. Neha Gupta",
      subject: "Database & MySQL",
      experience: "5+ Years Experience",
      icon: "👩‍🏫",
    },
  ];

  return (
    <section
      id="faculty"
      style={{
        padding: "80px 20px",
        background: "#ffffff",
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
              marginBottom: "12px",
            }}
          >
            Our Faculty
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "17px",
              lineHeight: "1.7",
            }}
          >
            Learn from experienced and dedicated instructors who are
            passionate about helping students achieve their goals.
          </p>
        </div>

        {/* Faculty Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "25px",
          }}
        >
          {faculty.map((member) => (
            <div
              key={member.id}
              style={{
                background: "#f8fafc",
                borderRadius: "16px",
                padding: "30px 20px",
                textAlign: "center",
                boxShadow:
                  "0 8px 25px rgba(0,0,0,0.07)",
              }}
            >
              {/* Faculty Avatar */}
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  margin: "0 auto 20px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #4f46e5, #7c3aed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "50px",
                }}
              >
                {member.icon}
              </div>

              {/* Name */}
              <h2
                style={{
                  color: "#1e293b",
                  fontSize: "21px",
                  marginBottom: "8px",
                }}
              >
                {member.name}
              </h2>

              {/* Subject */}
              <p
                style={{
                  color: "#4f46e5",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                {member.subject}
              </p>

              {/* Experience */}
              <p
                style={{
                  color: "#64748b",
                  fontSize: "14px",
                  marginBottom: "20px",
                }}
              >
                {member.experience}
              </p>

              <button
                onClick={() =>
                  alert(`Faculty: ${member.name}`)
                }
                style={{
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#4f46e5",
                  color: "white",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FacultyPage;