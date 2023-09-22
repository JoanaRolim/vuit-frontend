import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import FormSimulate from "../forms/form_simulate";
import CredVideo from "../video/credvideo";
import Call from "../call/call";
import "./simulate.css";

const Simulates = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    api
      .get("/cred")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /about:", error);
      });
  }, []);

  const [state, setState] = useState({
    nomeInput: "",
    emailInput: "",
    CEPInput: "",
    message: "",
    interest: "",
    buttonText: "Continuar",
    submitted: false,
  });

  const interestCategories = [
    "Qualquer Horário",
    "Período da Manhã",
    "Período da Tarde",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
      message: "",
    });
  };

  const validateEmail = (email) => {
    return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nomeInput, emailInput, CEPInput, interest } = state;
    const isValid = validateEmail(emailInput);

    if (!isValid) {
      setState({
        ...state,
        emailInput: "",
        message: "Por favor, insira um endereço de e-mail válido",
      });
      return;
    } else if (!interest) {
      setState({
        ...state,
        message: "Por favor, selecione um interesse",
      });
      return;
    }

    setTimeout(() => {
      setState({
        ...state,
        submitted: true,
        nomeInput: "",
        emailInput: "",
        CEPInput: "",
        interest: "",
      });
    }, 2000);

    setState({
      ...state,
      message: "",
      buttonText: "Enviando...",
    });
  };

  return (
    <>
      <div className="subscribe">
        <div id="header">
          <h1>Todo cuidado é Vuit</h1>
          <hr />
        </div>

        {state.submitted ? (
          <></>
        ) : (
          <FormSimulate
            nomeInput={state.nomeInput}
            emailInput={state.emailInput}
            CEPInput={state.CEPInput}
            interest={state.interest}
            handleChange={handleChange}
            message={state.message}
            categories={interestCategories}
            handleSubmit={handleSubmit}
            buttonText={state.buttonText}
          />
        )}
      </div>

      <section id="services">
        <div className="section-text">
          <div className="section-text__title-centered">{data.titulo1}</div>

          <div className="service-cards">
            <div className="service-card">
              <div className="service-card__icon">
                <ion-icon name="reader-outline" />
              </div>
              <div className="service-card__text-container">
                <div className="section-text__title-small">{data.cred1}</div>
                <div className="section-text__body">{data.texto1}</div>
              </div>
            </div>

            <div className="service-card active">
              <div className="service-card__icon">
                <ion-icon name="wallet-outline" />
              </div>
              <div className="service-card__text-container">
                <div className="section-text__title-small">{data.cred4}</div>
                <div className="section-text__body">{data.texto2}</div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card__icon">
                <ion-icon name="chatbubble-ellipses-outline" />
              </div>
              <div className="service-card__text-container">
                <div className="section-text__title-small">{data.cred5}</div>
                <div className="section-text__body">{data.texto3}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="movieYoutubeCred">
        <div className="section--centered_movie"> {data.subtitulo}</div>
        <CredVideo embedId="kdPSpUR9BLY?si=Etd2Q1L4W5Y6Reqj" />
      </div>

      <div>
        <Call />
      </div>
    </>
  );
};

export default Simulates;
