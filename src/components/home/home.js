import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import Slider from "../slider/slider";
import Review from "../review/review";
import "./home.css";
import Cred from "../ cred/cred";
import Header from "../header/header";
import CarrouselPage from "../carrousel/carrousel";
import Call from "../call/call";
import YoutubeEmbed from "../video/youtube";
import img1 from "../../assets/images/banner/banner1.png";
import img2 from "../../assets/images/banner/banner2.png";
import img3 from "../../assets/images/banner/banner3.png";
import Vuit from "../vuit/vuit";

const Homepage = () => {
  const [aboutData, setAboutData] = useState({});
  let slides = [
    {
      img: img1,
    },
    {
      img: img3,
    },
    {
      img: img2,
    },
  ];

  useEffect(() => {
    api
      .get("/about")
      .then((response) => {
        setAboutData(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /about:", error);
      });
  }, []);
  return (
    <>
      <Slider
        className="full-width-slider"
        slides={slides}
        loop={true}
        navs={true}
        auto={true}
        pags={true}
        delay={5}
      />

      <Vuit />

      <div className="movieYoutube">
        <div className="section-text__title-centered_movie">
          {aboutData.header1}
        </div>
        <YoutubeEmbed
          className="custom-youtube-embed"
          embedId="44gxvIpnsM8?si=Es6dB8RlqHERrcZ6"
        />
      </div>

      <Cred />
      <CarrouselPage />
      <Header />
      <Review />
      <Call />
    </>
  );
};

export default Homepage;
