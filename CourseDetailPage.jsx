import React from "react";

function CourseDetailPage() {
  const course = {
    title: "Full Stack Web Development",
    instructor: "LearnStack Faculty",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    students: "500+ Students",
    price: "₹2,999",
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "70px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Course Header */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #4f46e5, #7c3aed)",
            color: "white",
            padding: "45px",
            borderRadius: "18px",
            marginBottom: "30px",
          }}
        >
          <p
            style={{
              marginBottom: "10px",
              fontWeight: "600",
            }}
          >
            LEARNSTACK COURSE
          </p>

          <h1
            style={{
              fontSize: "42px",
              margin: "0 0 15px",
            }}
          >
            {course.title}
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              maxWidth: "750px",
            }}
          >
            Learn how to build modern websites and web applications
            using frontend and backend technologies.
          </p>
        </div>

        {/* Course Information */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <InfoCard
            title="Instructor"
            value={course.instructor}
          />

          <InfoCard
            title="Duration"
            value={course.duration}
          />

          <InfoCard
            title="Level"
            value={course.level}
          />

          <InfoCard
            title="Students"
            value={course.students}
          />
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {/* Course Description */}
          <div
            style={{
              background: "white",
              padding: "35px",
              borderRadius: "16px",
              boxShadow:
                "0 8px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={headingStyle}>
              About This Course
            </h2>

            <p style={paragraphStyle}>
              This course is designed for students who want to
              learn web development from the basics. You will
              learn how websites work and how to create modern,
              responsive web applications.
            </p>

            <h2 style={headingStyle}>
              What You Will Learn
            </h2>

            <ul style={listStyle}>
              <li>HTML and CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL Database</li>
              <li>REST APIs</li>
              <li>Project Development</li>
            </ul>
          </div>

          {/* Enrollment Card */}
          <div
            style={{
              background: "white",
              padding: "35px",
              borderRadius: "16px",
              boxShadow:
                "0 8px 25px rgba(0,0,0,0.08)",
              height: "fit-content",
            }}
          >
            <h2 style={headingStyle}>
              Enroll Now
            </h2>

            <p
              style={{
                color: "#64748b",
                marginBottom: "10px",
              }}
            >
              Course Price
            </p>
             

            <button
              onClick={() => alert("Enrollment feature coming soon!")}
              style={{
                width: "100%",
                padding: "15px",
                background: "#4f46e5",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Enroll Now
            </button>

            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
                marginTop: "20px",
              }}
            >
              What you get:
            </p>

            <ul style={listStyle}>
              <li>Lifetime course access</li>
              <li>Practical projects</li>
              <li>Learning support</li>
              <li>Course completion certificate</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, value }) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "14px",
        boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
      }}
    >
      <p
        style={{
          color: "#64748b",
          margin: "0 0 10px",
          fontSize: "14px",
        }}
      >
        {title}
      </p>

      <h3
        style={{
          color: "#1e293b",
          margin: 0,
          fontSize: "18px",
        }}
      >
        {value}
      </h3>
    </div>
  );
}

const headingStyle = {
  color: "#1e293b",
  fontSize: "24px",
  marginBottom: "18px",
};

const paragraphStyle = {
  color: "#475569",
  lineHeight: "1.8",
  marginBottom: "30px",
};

const listStyle = {
  color: "#475569",
  lineHeight: "2",
  paddingLeft: "22px",
};

export default CourseDetailPage;
            