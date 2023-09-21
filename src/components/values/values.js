import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import "./values.css";

const Values = () => {
  const [data, setAboutValues] = useState({});

  useEffect(() => {
    api
      .get("/cred")
      .then((response) => {
        setAboutValues(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /cred:", error);
      });
  }, []);

  if (!data || Object.keys(data).length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <div style={{ textAlign: "center", backgroundColor: 'none' }}>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <div className="title">{data.titulo3}</div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h3>{data.cred2}</h3>
            <p>{data.texto1}</p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h3>{data.cred4}</h3>
            <p>{data.texto2}</p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h3>{data.cred5}</h3>
            <p>{data.subtitulo}</p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h3>{data.cred1}</h3>
            <p>{data.texto3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
