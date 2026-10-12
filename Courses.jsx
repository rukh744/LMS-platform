import React from "react";

function Courses() {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description:
        "Learn HTML, CSS, JavaScript, React, Node.js and MySQL to build complete web applications.",
      duration: "12 Weeks",
      level: "Beginner",
      price: "₹2,999",
      icon: "💻",
    },
    {
      id: 2,
      title: "Python Programming",
      description:
        "Learn Python programming from basics to advanced concepts with practical projects.",
      duration: "10 Weeks",
      level: "Beginner",
      price: "₹2,499",
      icon: "🐍",
    },
    {
      id: 3,
      title: "Java Programming",
      description:
        "Master Java fundamentals, OOP, collections, exception handling and application development.",
      duration: "10 Weeks",
      level: "Beginner",
      price: "₹2,499",
      icon: "☕",
    },
    {
      id: 4,
      title: "React.js Development",
      description:
        "Build modern and responsive user interfaces using React.js and modern JavaScript.",
      duration: "8 Weeks",
      level: "Intermediate",
      price: "₹2,799",
      icon: "⚛️",
    },
    {
      id: 5,
      title: "Database & MySQL",
      description:
        "Learn databases, SQL queries, relationships, joins and database management.",
      duration: "6 Weeks",
      level: "Beginner",
      price: "₹1,999",
      icon: "🗄️",
    },
    {
      id: 6,
      title: "Data Science",
      description:
        "Learn Python, data analysis, visualization and the fundamentals of data science.",
      duration: "14 Weeks",
      level: "Intermediate",
      price: "₹3,499",
      icon: "📊",
    },
  ];

  const handleEnroll = (course) => {
    alert(`You selected: ${course.title}`);
  };

  return (
    <section
      id="courses"
      style={{
        padding: "80px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
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
            Our Courses
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
            Choose from our carefully designed courses and develop
            practical skills for your future.
          </p>
        </div>

        {/* Course Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              style={{
                background: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow:
                  "0 8px 25px rgba(0,0,0,0.08)",
                transition: "transform 0.2s",
              }}
            >
              {/* Course Icon */}
              <div
                style={{
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #4f46e5, #7c3aed)",
                  fontSize: "65px",
                }}
              >
                {course.icon}
              </div>

              {/* Course Content */}
              <div style={{ padding: "25px" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 10px",
                    background: "#eef2ff",
                    color: "#4f46e5",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  {course.level}
                </span>

                <h2
                  style={{
                    fontSize: "22px",
                    color: "#1e293b",
                    marginBottom: "12px",
                  }}
                >
                  {course.title}
                </h2>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: "1.6",
                    minHeight: "78px",
                  }}
                >
                  {course.description}
                </p>

                {/* Course Details */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                    paddingTop: "15px",
                    borderTop: "1px solid #e2e8f0",
                    color: "#64748b",
                    fontSize: "14px",
                  }}
                >
                  <span>⏱️ {course.duration}</span>
                  <span>👥 Students</span>
                </div>

                {/* Price */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "24px",
                      color: "#4f46e5",
                    }}
                  >
                    {course.price}
                  </strong>

                  <button
                    onClick={() => handleEnroll(course)}
                    style={{
                      padding: "11px 18px",
                      border: "none",
                      borderRadius: "8px",
                      background: "#4f46e5",
                      color: "white",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
                    