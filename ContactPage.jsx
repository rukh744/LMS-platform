import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [phoneError, setPhoneError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "phone") {
      if (value && !/^[0-9]{0,10}$/.test(value)) {
        setPhoneError("Phone number must contain only numbers");
      } else if (value.length > 0 && value.length < 10) {
        setPhoneError("Phone number must be 10 digits");
      } else {
        setPhoneError("");
      }
    }
  };

  // Validate phone
  const validatePhone = (phone) => {
    return /^[0-9]{10}$/.test(phone);
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    }

    setSuccessMessage(
      "Thank you! Your message has been submitted successfully."
    );

    console.log("Form Data:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setPhoneError("");
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    validatePhone(formData.phone) &&
    formData.subject &&
    formData.message;

  return (
    <section
      style={{
        padding: "70px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              marginBottom: "10px",
              color: "#1e293b",
            }}
          >
            Contact Us
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "17px",
            }}
          >
            Have questions? We would love to hear from you.
          </p>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#ffffff",
            padding: "35px",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          {/* Name */}
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#334155",
              }}
            >
              Name *
            </label>

            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              style={inputStyle}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="email"
              style={labelStyle}
            >
              Email *
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              style={inputStyle}
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="phone"
              style={labelStyle}
            >
              Phone Number *
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              inputMode="numeric"
              maxLength={10}
              placeholder="Enter your 10-digit phone number"
              style={{
                ...inputStyle,
                borderColor: phoneError ? "#ef4444" : "#cbd5e1",
              }}
            />

            {phoneError && (
              <p
                style={{
                  color: "#ef4444",
                  fontSize: "14px",
                  marginTop: "6px",
                }}
              >
                {phoneError}
              </p>
            )}
          </div>

          {/* Subject */}
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="subject"
              style={labelStyle}
            >
              Subject *
            </label>

            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Enter subject"
              style={inputStyle}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: "25px" }}>
            <label
              htmlFor="message"
              style={labelStyle}
            >
              Message *
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Write your message..."
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={!isFormValid}
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "8px",
              background: isFormValid ? "#4f46e5" : "#94a3b8",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              cursor: isFormValid ? "pointer" : "not-allowed",
            }}
          >
            Send Message
          </button>

          {/* Success message */}
          {successMessage && (
            <p
              style={{
                marginTop: "20px",
                padding: "12px",
                borderRadius: "8px",
                background: "#dcfce7",
                color: "#166534",
                textAlign: "center",
              }}
            >
              {successMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

// Input styles
const inputStyle = {
  width: "100%",
  padding: "13px",
  border: "1px solid #cbd5e1",
  borderRadius: "8px",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "600",
  color: "#334155",
};

export default ContactPage;