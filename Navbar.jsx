import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e2e8f0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 20px",
          minHeight: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          style={{
            textDecoration: "none",
            color: "#4f46e5",
            fontSize: "25px",
            fontWeight: "800",
          }}
        >
          LearnStack
        </a>

        {/* Desktop Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <a href="#" style={navLinkStyle}>
            Home
          </a>

          <a href="#courses" style={navLinkStyle}>
            Courses
          </a>

          <a href="#about" style={navLinkStyle}>
            About Us
          </a>

          <a href="#faculty" style={navLinkStyle}>
            Faculty
          </a>

          <a href="#contact" style={navLinkStyle}>
            Contact
          </a>

          <button
            onClick={() => alert("Login page coming soon!")}
            style={{
              background: "#4f46e5",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "7px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: "28px",
            cursor: "pointer",
          }}
          className="mobile-menu-button"
          aria-label="Open menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            padding: "15px 20px 25px",
            borderTop: "1px solid #e2e8f0",
            background: "white",
          }}
        >
          <a href="#" onClick={closeMenu} style={mobileLinkStyle}>
            Home
          </a>

          <a href="#courses" onClick={closeMenu} style={mobileLinkStyle}>
            Courses
          </a>

          <a href="#about" onClick={closeMenu} style={mobileLinkStyle}>
            About Us
          </a>

          <a href="#faculty" onClick={closeMenu} style={mobileLinkStyle}>
            Faculty
          </a>

          <a href="#contact" onClick={closeMenu} style={mobileLinkStyle}>
            Contact
          </a>

          <button
            onClick={() => {
              closeMenu();
              alert("Login page coming soon!");
            }}
            style={{
              width: "100%",
              background: "#4f46e5",
              color: "white",
              border: "none",
              padding: "12px",
              borderRadius: "7px",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

const navLinkStyle = {
  color: "#334155",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "15px",
};

const mobileLinkStyle = {
  display: "block",
  color: "#334155",
  textDecoration: "none",
  fontWeight: "600",
  padding: "12px 0",
};

export default Navbar;