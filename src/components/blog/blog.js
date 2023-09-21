import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import "./blog.css";
import { FaRegHeart, FaExpandAlt, FaRegLightbulb } from "react-icons/fa";
import Newsletter from "../newsletter/newsletter";

export default function Blog() {
  const [toggled, setToggled] = useState(false);
  const [data, setData] = useState({});

  const handleToggle = () => {
    setToggled(!toggled);
  };

  useEffect(() => {
    api
      .get("/partners") 
      .then((response) => {
        setData(response.data.data); 
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /partners:", error);
      });
  }, []);

  return (
    <div>
      <div className="contactUsBanner">
        <div className="bannerHeadding">
          <div className="title_blog">{data.titulo3}</div>
          <div className="subtitle_blog">{data.titulo}</div>
        </div>
        <div className="bannerTitle">{data.header}</div>
      </div>

      <div className="Page">
        <div className="MainContent">
          <FaExpandAlt className="ExpandIcon" />
          <h2>{data.titulo2}</h2>
        </div>
        <div className="AsideContent">
          <FaExpandAlt className="ExpandIcon" />
          <header />
          <div>
            <h3>{data.p1}</h3>
            <p>{data.p4}</p>
            <button className="ReadMore">Leia Mais</button>
          </div>
        </div>
      </div>
      <div className="NewsletterContainer">
        <Newsletter />
      </div>
    </div>
  );
}
