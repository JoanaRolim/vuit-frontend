import React from "react";
import "./footer.css";
import MapWithMarker from "../maps/maps.js";
import logo from "../../assets/images/header/logovuit.svg";
import {
  FaTwitter,
  FaFacebook,
  FaGooglePlus,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer-content">
        <div class="top-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-md-3 col-sm-4 col-6 col-top">
                <div class="column-head">
                  <span>Saiba Mais</span>
                </div>
                <ul class="column-body">
                  <li>
                    <a href="/servicos">
                      <span>Serviços</span>
                    </a>
                  </li>
                  <li>
                    <a href="/simulacao">
                      <span>Simulação</span>
                    </a>
                  </li>
                  <li>
                    <a href="/ajuda">
                      <span>Assistência </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-4 col-6 col-top">
                <div class="column-head">
                  <span>Sobre</span>
                </div>
                <ul class="column-body">
                  <li>
                    <a href="/sobre">
                      <span>Quem Somos</span>
                    </a>
                  </li>
                  <li>
                    <a href="/sobre">
                      <span>Nossa Missão</span>
                    </a>
                  </li>
                  <li>
                    <a href="/sobre">
                      <span>Nosso Blog</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-4 col-6 col-top">
                <div class="column-head">
                  <span>Entre em Contato</span>
                </div>
                <ul class="column-body">
                  <li>
                    <a href="/ajuda">
                      <span>Suporte e Assistência</span>
                    </a>
                  </li>
                  <li>
                    <a href="/contatos">
                      <span>Contato</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-4 col-6 col-top">
                <div class="column-head">
                  <span>Legal</span>
                </div>
                <ul class="column-body">
                  <li>
                    <a href="#Prvacy Policy">
                      <span>Política de Privacidade</span>
                    </a>
                  </li>
                  <li>
                    <a href="#Terms & Condition">
                      <span>Termos &amp; Condições</span>
                    </a>
                  </li>
                  <li>
                    <a href="/blog">
                      <span>Blog</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-4 col-12 offset-lg-2 offset-md-9 offset-sm-4 col-top">
                <div class="column-head">
                  <span>Redes Sociais</span>
                </div>
                <ul className="column-body follow-row">
                  <li>
                    <a href="#twitter">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#facebook">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#whatsapp">
                      <FaWhatsapp />
                    </a>
                  </li>
                  <li>
                    <a href="#instagram">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="middle-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-12">
                <div class="logo">
                  <a href="#logo">
                    <div class="logo-symbol">
                      <img alt="logo vuit" src={logo} />
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6">
                <h6>Endereço</h6>
                <span>Rua Pasteur</span>
                <span> 463, Água Verde, Curitiba, PR</span>
                <span>80250-104</span>
              </div>
              <div class="col-lg-4 col-md-4 col-6">
                <h6>Ajuda</h6>
                <span>
                O Grupo Vuit está pronto para atender você. Confira aqui telefones, endereços e demais canais de atendimento
                </span>
              </div>
              <div class="col-lg-2 col-md-4 col-6 offset-lg-0 offset-md-4 offset-3">
                <div className="button-contact">
                  <a href="/contatos">Entre em contato</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="googlemaps">
          <MapWithMarker />
        </div>
      </div>
      <div>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", marginTop: "70px" }}
        >
          <a
            className="text-reset fw-bold"
            href="https://vuit.com.br/"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "500",
            }}
          >
            © 2023 Grupo Vuit - Todos os direitos reservados.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
