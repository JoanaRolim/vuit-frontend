import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import "./send.css";

export const Send = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    api
      .get("/contacts")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /contacts:", error);
      });
  }, []);

  return (
    <div className="call">
      <div className="title_call">{data.titulo2}</div>
      <div>{data.texto1}</div>
      <button className="more"> Saiba Mais </button>
    </div>
  );
};

export default Send;
