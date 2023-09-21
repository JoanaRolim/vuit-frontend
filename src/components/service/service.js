import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../simulate/simulate.css";
import Categories from "../categories/categories";
import Call from "../call/call";

export default function Services() {
  const [data, setData] = useState({});

  useEffect(() => {
    api
      .get("/services")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /services:", error);
      });
  }, []);
  return (
    <div className="container_services" >
      <div className="section-color">
      <div className="section-text">
        <div className="section-text__title-centered">O que você procura?</div>
        </div>
        <Categories />
      </div>


      <h1 className="h1">{data.titulo1}</h1>

      <Carousel
        showThumbs={false}
        showStatus={true}
        infiniteLoop={true}
        emulateTouch={true}
        centerMode={true}
        centerSlidePercentage={33.33}
        className="carousel"
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                position: "absolute",
                zIndex: 2,
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "50%",
                padding: "10px",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              &#9664;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                position: "absolute",
                zIndex: 2,
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "50%",
                padding: "10px",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              &#9654;
            </button>
          )
        }
      >
        <div className="carousel-item">
          <button className="buttonStyle">
            <h6>{data.s1}</h6>
            <p>{data.t1}</p>
            <a href="#1">Saiba Mais »</a>
          </button>
        </div>

        <div className="carousel-item">
          <button className="buttonStyle">
            <h6>{data.s2}</h6>
            <p>{data.t2}</p>
            <a href="#1">Saiba Mais »</a>
          </button>
        </div>

        <div className="carousel-item">
          <button className="buttonStyle">
            <h6>{data.s3}</h6>
            <p>{data.t3}</p>
            <a href="#1">Saiba Mais »</a>
          </button>
        </div>

        <div className="carousel-item">
          <button className="buttonStyle">
            <h6>{data.s4}</h6>
            <p>{data.t4}</p>
            <a href="#1">Saiba Mais »</a>
          </button>
        </div>

        <div className="carousel-item">
          <button className="buttonStyle">
            <h6>{data.s5}</h6>
            <p>{data.t5}</p>
            <a href="#1">Saiba Mais »</a>
          </button>
        </div>

        <div className="carousel-item">
          <button className="buttonStyle">
            <h6>{data.s6}</h6>
            <p>{data.t6}</p>
            <a href="#1">Saiba Mais »</a>
          </button>
        </div>
      </Carousel>

      <div>
        <Call />
      </div>
    </div>
  );
}
