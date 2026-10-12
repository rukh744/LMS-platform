import React from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import HomeCourses from "./components/HomeCourses";
import Courses from "./components/Courses";
import AboutUsPage from "./components/AboutUsPage";
import FacultyPage from "./components/FacultyPage";
import Testimonial from "./components/Testimonial";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Banner />
        <HomeCourses />
        <Courses />
        <AboutUsPage />
        <FacultyPage />
        <Testimonial />
        <ContactPage />
      </main>

      <Footer />
    </>
  );
}

export default App;