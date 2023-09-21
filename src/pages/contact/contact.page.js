import React from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Contacts from "../../components/contacts/contacts";
import "../contact/contact.page.css";

const Contact = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <div>
          <Contacts />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
