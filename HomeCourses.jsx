import React from "react";

function HomeCourses() {
  const courses = [
    {
      icon: "💻",
      title: "Full Stack Web Development",
      description:
        "Learn HTML, CSS, JavaScript, React, Node.js and build complete web applications.",
      duration: "12 Weeks",
      level: "Beginner",
      price: "₹2,999",
    },
    {
      icon: "🐍",
      title: "Python Programming",
      description:
        "Learn Python from basics to advanced concepts with practical examples.",
      duration: "10 Weeks",
      level: "Beginner",
      price: "₹2,499",
    },
    {
      icon: "☕",
      title: "Java Programming",
      description:
        "Master Java programming, OOP concepts, collections and application development.",
      duration: "10 Weeks",
      level: "Beginner",
      price: "₹2,499",
    },
  ];

  const handleEnroll = (courseName) => {
    alert(`You selected: ${courseName}`);
  };

  return (
    <section
      style={{
        padding: "70px 20px",
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
            marginBottom: "45px",
          }}
        >
          <p
            style={{
              color: "#4f46e5",
              fontWeight: "700",
              fontSize: "16px",
              marginBottom: "10px",
            }}
          >
            LEARN WITH US
          </p>

          <h2
            style={{
              fontSize: "40px",
              color: "#1e293b",
              margin: "0 0 15px",
            }}
          >
            Popular Courses
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: "17px",
              maxWidth: "650px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Explore our popular courses and develop the skills you need for
            your academic and professional career.
          </p>
        </div>

        {/* Course Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {courses.map((course, index) => (
            <div
              key={index}
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "15px",
                padding: "25px",
                transition: "0.3s",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "12px",
                  background: "#e0e7ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  marginBottom: "20px",
                }}
              >
                {course.icon}
              </div>

              {/* Course Title */}
              <h3
                style={{
                  color: "#1e293b",
                  fontSize: "22px",
                  marginBottom: "12px",
                }}
              >
                {course.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.6",
                  minHeight: "75px",
                }}
              >
                {course.description}
              </p>

              {/* Course Information */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  margin: "20px 0",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    background: "#eef2ff",
                    color: "#4f46e5",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  ⏱ {course.duration}
                </span>

                <span
                  style={{
                    background: "#f1f5f9",
                    color: "#475569",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  📚 {course.level}
                </span>
              </div>

              {/* Price + Button */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <strong
                  style={{
                    fontSize: "22px",
                    color: "#4f46e5",
                  }}
                >
                  {course.price}
                </strong>

                <button
                  onClick={() => handleEnroll(course.title)}
                  style={{
                    background: "#4f46e5",
                    color: "white",
                    border: "none",
                    padding: "11px 18px",
                    borderRadius: "7px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses */}
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <a
            href="#courses"
            style={{
              display: "inline-block",
              background: "#1e293b",
              color: "white",
              padding: "13px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            View All Courses →
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeCourses;