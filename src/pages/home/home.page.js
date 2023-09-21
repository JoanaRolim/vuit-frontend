import React from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

import "../home/home.page.css";
import Homepage from "../../components/home/home";

const Home = () => {
  return (
    <div>
        <div>
        <NavBar /> 
        </div>

        <div>
          <Homepage />
        </div>
        <div>
        <Footer />
        </div>
    </div>
  );
};

export default Home;
