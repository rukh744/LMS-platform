import React from "react";

function Testimonial() {
  const testimonials = [
    {
      name: "Aman Sharma",
      course: "Full Stack Web Development",
      rating: "★★★★★",
      message:
        "LearnStack helped me understand web development from the basics. The courses are easy to follow and very practical.",
      avatar: "👨‍🎓",
    },
    {
      name: "Priya Verma",
      course: "Python Programming",
      rating: "★★★★★",
      message:
        "The Python course was excellent. The examples and practical exercises helped me improve my programming skills.",
      avatar: "👩‍🎓",
    },
    {
      name: "Rahul Kumar",
      course: "Java Programming",
      rating: "★★★★☆",
      message:
        "The faculty explained Java concepts very clearly. I would definitely recommend LearnStack to other students.",
      avatar: "👨‍💻",
    },
  ];

  return (
    <section
      style={{
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
              marginBottom: "10px",
              letterSpacing: "1px",
            }}
          >
            STUDENT REVIEWS
          </p>

          <h2
            style={{
              fontSize: "40px",
              color: "#1e293b",
              margin: "0 0 15px",
            }}
          >
            What Our Students Say
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
            Hear from students who have improved their skills and knowledge
            with LearnStack LMS.
          </p>
        </div>

        {/* Testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "15px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 5px 20px rgba(0, 0, 0, 0.06)",
              }}
            >
              {/* Quote */}
              <div
                style={{
                  fontSize: "35px",
                  color: "#4f46e5",
                  marginBottom: "10px",
                }}
              >
                “
              </div>

              {/* Message */}
              <p
                style={{
                  color: "#475569",
                  lineHeight: "1.7",
                  fontSize: "15px",
                  minHeight: "105px",
                }}
              >
                {testimonial.message}
              </p>

              {/* Rating */}
              <div
                style={{
                  color: "#f59e0b",
                  fontSize: "18px",
                  margin: "15px 0",
                  letterSpacing: "2px",
                }}
              >
                {testimonial.rating}
              </div>

              {/* Student */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  borderTop: "1px solid #e2e8f0",
                  paddingTop: "20px",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "#e0e7ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "25px",
                  }}
                >
                  {testimonial.avatar}
                </div>

                <div>
                  <h3
                    style={{
                      margin: "0 0 5px",
                      color: "#1e293b",
                      fontSize: "17px",
                    }}
                  >
                    {testimonial.name}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "#64748b",
                      fontSize: "13px",
                    }}
                  >
                    {testimonial.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;