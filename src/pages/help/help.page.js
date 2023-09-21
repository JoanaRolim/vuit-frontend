import React from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Support from "../../components/support/support"; 
import "./help.page.css"

const Help = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
   
          <Support />

      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Help;
