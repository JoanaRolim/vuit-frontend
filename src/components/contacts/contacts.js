import React, { useEffect, useState } from "react";
import api from "../../environments/environments";
import { Box, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import Form from '../forms/form'
import "./contacts.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import {
    FaFacebookSquare,
    FaTwitter,
    FaInstagram,
    FaYoutube
  } from "react-icons/fa";
  import { GrMail } from "react-icons/gr";
  
import "./contacts.css";

const Contacts = () => {
  const [data, setData] = useState({});
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    // Faça uma solicitação HTTP para o backend para buscar os dados da rota /about
    api
      .get("/contacts") // Certifique-se de que a URL corresponda à rota do seu backend
      .then((response) => {
        setData(response.data.data); // Supondo que os dados do backend estão na propriedade "data"
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da rota /about:", error);
      });
  }, []);

  // Função para abrir o WhatsApp em uma nova aba
  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=45991075509", "_blank");
  };

  // Função para abrir o mapa no Google Maps
  const openMap = () => {
    window.open("https://www.google.com/maps/place/R.+Pasteur,+463+-+Batel,+Curitiba+-+PR,+80250-104,+Brasil/data=!4m2!3m1!1s0x94dce47a1da489ef:0x7196738ccfabf8be?sa=X&ved=2ahUKEwih37Hhwq2BAxW7MmIAHVpEASEQ8gF6BAgQEAA&ved=2ahUKEwih37Hhwq2BAxW7MmIAHVpEASEQ8gF6BAgVEAI", "_blank");
  };

  const openEmailClient = () => {
    const emailAddress = "vuit@seguros.com"; // Substitua pelo endereço de e-mail desejado
    window.open(`mailto:${emailAddress}`, "_blank");
  };

  return (
    <>
      <div className="contactUsBanner">
        <div className="bannerHeadding">
          <div className="title_contacts">
          {data.titulo4}
          </div>
        </div>
        <div className="bannerTitle">
      {data.texto3}
        </div>
      </div>

    <div className="App">
        <div>
        <h1 className="bannerTitleChoice">
       {data.texto4}
        </h1>
        </div>
   
      <Box>
        <Grid container className="contact-page">
          
          <Grid container id="contact-info" sx={{ flexGrow: 1 }}>
            <Grid item xs={12} sm={12} md={5} id="info">
              <Grid container>
              <div className="detail" onClick={openMap}>
                  <LocationOnIcon className="icon" />
                  <Typography variant="h5" gutterBottom className="info-title">
                  Endereço
                  </Typography>
                  <Typography variant="subtitle" gutterBottom className="info-text">
                  Clique para ver a rota no mapa.
                  </Typography>
                </div>
              </Grid>
              <Grid container className="info-box">
                <div className="detail" onClick={openWhatsApp}>
                  <PhoneIcon className="icon" />
                  <Typography variant="h5" gutterBottom className="info-title">
                    WhatsApp
                  </Typography>
                  <Typography
                    variant="subtitle"
                    gutterBottom
                    className="info-text"
                  >
                      Clique para ser direcionado ao WhatsApp.
                  </Typography>
                </div>
              </Grid>
              <Grid container>
                <div className="detail" onClick={openEmailClient}>
                  <MailIcon className="icon" />
                  <Typography variant="h5" gutterBottom className="info-title">
                    Email
                  </Typography>
                  <Typography
                    variant="subtitle" 
                    gutterBottom
                    className="info-text"
                  >
                    Clique para enviar um e-mail.
                  </Typography>
                </div>
              </Grid>
            </Grid>



            
            <Grid item xs={12} sm={12} md={7} className="form">
              <Grid container id="form-box">
                <Form />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>

      <div>  
        <div>
        <p className="footer-text">
            Nos siga nas redes sociais:
            </p>
        </div>
      <ul className="footer-social-media">
              <li className="footer-social-media-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebookSquare />
                </a>
              </li>
              <li className="footer-social-media-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </li>
              <li className="footer-social-media-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li className="footer-social-media-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </li>
              <li className="footer-social-media-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <GrMail />
                </a>
              </li>
            </ul>
        </div>
    </>
  );
};

export default Contacts;
