import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./team.css";

function Team() {
  const [data, setData] = useState({});

  useEffect(() => {
    api
      .get("/team")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /team:", error);
      });
  }, []);

  return (
    <section class="section-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 class="section-title">{data.titulo1}</h2>
          </div>

          <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg"
                class="team-img"
                alt="pic"
              />
              <h3>{data.nome1}</h3>
              <div class="team-info">
                <p>{data.p1}</p>
              </div>
              <p>{data.t1}</p>

              <ul class="team-icon">
                <li>
                  <a
                    href="https://www.facebook.com/seu-perfil-do-Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={30} color="#1877f2" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/seu-perfil-do-Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={30} color="#e4405f" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/seu-perfil-do-LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={30} color="#0077b5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg"
                class="team-img"
                alt="pic"
              />

              <h3>{data.nome3}</h3>
              <div class="team-info">
                <p>{data.p3}</p>
              </div>
              <p>{data.t3}</p>

              <ul class="team-icon">
                <li>
                  <a
                    href="https://www.facebook.com/seu-perfil-do-Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={30} color="#1877f2" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/seu-perfil-do-Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={30} color="#e4405f" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/seu-perfil-do-LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={30} color="#0077b5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg"
                class="team-img"
                alt="pic"
              />

              <h3>{data.nome2}</h3>
              <div class="team-info">
                <p>{data.p2}</p>
              </div>
              <p>{data.t2}</p>

              <ul class="team-icon">
                <li>
                  <a
                    href="https://www.facebook.com/seu-perfil-do-Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={30} color="#1877f2" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/seu-perfil-do-Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={30} color="#e4405f" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/seu-perfil-do-LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={30} color="#0077b5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
