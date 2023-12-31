import React from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Service from "../../components/service/service";
import "./services.page.css";

const Services = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <Service />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
