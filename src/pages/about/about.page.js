import React from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import AboutUs from "../../components/about/about";
import "./about.page.css"

const About = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <div className="new-home">
            <AboutUs />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
