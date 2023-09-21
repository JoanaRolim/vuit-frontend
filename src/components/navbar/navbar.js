import React, { useState } from "react";
import "./navbar.css";
import Button from "@material-ui/core/Button";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/header/logo1.svg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="TopArea">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "0vh",
          paddingLeft: "2%",
          paddingRight: "2%",
          backgroundColor: "#eff0f4"
          //backgroundColor: "#f7f7f9"
        }}
      >
        <div className="logo-container">
          <img src={logo} alt="Logo da empresa" className="logo" />
        </div>

        <div className={`menu-items ${menuOpen ? "open" : ""}`}>
          <a className="underLine2 hide_on_responsive"  href="/">
            <Button variant="text" color="default">
              INÍCIO
            </Button>
          </a>
          <a className="underLine2 hide_on_responsive" href="/sobre">
            <Button variant="text" color="default">
              QUEM SOMOS
            </Button>
          </a>
          <a className="underLine2 hide_on_responsive" href="/servicos">
            <Button variant="text" color="default">
              SERVIÇOS
            </Button>
          </a>
          <a className="underLine2 hide_on_responsive" href="/simulacao">
            <Button variant="text" color="default">
              SIMULAÇÃO
            </Button>
          </a>
          <a className="underLine2 hide_on_responsive" href="/blog">
            <Button variant="text" color="default">
              BLOG
            </Button>
          </a>
          <a className="underLine2 hide_on_responsive" href="ajuda">
            <Button variant="text" color="default">
              ASSISTÊNCIA
            </Button>
          </a>
          <Link to="/contatos" className="underLine2 hide_on_responsive">
            <Button variant="text" color="default">
              CONTATO
            </Button>
          </Link>

          <a className="underLine2">
            <Button variant="outlined" color="primary">
              ENTRAR
            </Button>
          </a>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaFacebook style={{ cursor: "pointer" }} />
            <FaInstagram style={{ cursor: "pointer", marginLeft: "16px" }} />
            <FaWhatsapp style={{ cursor: "pointer", marginLeft: "16px" }} />
          </div>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </div>
  );
};

export default NavBar;
