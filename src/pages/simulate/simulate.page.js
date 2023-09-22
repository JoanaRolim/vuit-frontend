import React from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Simulates from "../../components/simulate/simulate";
import "./simulate.page.css";

const Simulate = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <Simulates />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Simulate;
