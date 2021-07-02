import React from "react";
import { Box, Grid, Image } from "@chakra-ui/react";
import "../styles/scss/experimenta.scss";

export default function Experimenta() {
  return (
    <div style={{ background: "#a569d1", boxSizing: "border-box",width:"100%"}}>
      {/* --------------------- Sección 1 ---------------- */}
      <div className="container bg1">
        <Grid
          alignItems="space-between"
          display="inline-flex"
          flexDirection="column"
          h="100%"
          justifyContent="space-evenly"
          w="50%"
        >
          <Box
            fontSize="90px"
            lineHeight="80px"
            fontWeight="900"
            textAlign="left"
            color="white"
            style={{ fontFamily: "Exo2" }}
          >
            Navegación por el universo para colegios
          </Box>
          <Box
            color="white"
            fontFamily="Open Sans"
            w="100%"
            padding="0 100px"
            textAlign="justify"
          >
            En este viaje en vivo conoceremos los logros y descubrimientos que
            hicieron mujeres y hombres inquietos por observar los misterios del
            cosmos. Acompañados por la curiosidad y el asombro, seremos testigos
            de la diversidad de objetos que hay en nuestro universo y, a través
            de historias, viajaremos por lugares ya conocidos y por conocer.
          </Box>
          <Box color="white" fontFamily="Open Sans" fontSize="19px">
            <Image
              w="40px"
              display="inline"
              src="https://i.ibb.co/hKxJC12/INTRO-WHATSAPP.png"
            />
            <br />
            Escribenos por Whatsapp
          </Box>
        </Grid>
      </div>
      {/* --------------------- Sección 2 ---------------- */}
      <div className="container bg2">
        <Grid
          alignItems="space-between"
          display="inline-flex"
          flexDirection="column"
          h="100%"
          justifyContent="space-evenly"
          w="50%"
        >
          <Box
            w="100%"
            textAlign="left"
            fontSize="50px"
            lineHeight="50px"
            fontWeight="900"
            color="#a569d1"
            style={{ fontFamily: "Exo2" }}
          >
            ¿Cuales son los objetivos de estos encuentros?
          </Box>
          <Box
            color="#a569d1"
            textAlign="left"
            fontFamily="Open Sans"
            fontSize="19px"
          >
            <img
              src="https://i.ibb.co/HKXvvQL/OBJETIVOS-NUM-1.png"
              style={{ display: "inline-block", float: "left" }}
              alt="IMG1"
            />
            Motivar la observación del cielo e incentivar la curiosidad sobre
            algunos temas relacionados con la Astronomía como planetas,
            estrellas y galaxias.
          </Box>
          <Box
            color="#a569d1"
            textAlign="left"
            fontFamily="Open Sans"
            fontSize="19px"
          >
            <img
              src="https://i.ibb.co/grDGs3W/OBJETIVOS-NUM-2.png"
              style={{ display: "inline-block", float: "left" }}
              alt="IMG2"
            />
            Fortalecer la divulgación de la Astronomía a través de entornos
            digitales que permitan mantener la conexión con estudiantes y
            maestros.
          </Box>
          <Box
            color="#a569d1"
            textAlign="left"
            fontFamily="Open Sans"
            fontSize="19px"
          >
            <img
              src="https://i.ibb.co/4N05rwN/OBJETIVOS-NUM-3.png"
              style={{ display: "inline-block", float: "left" }}
              alt="IMG3"
            />
            Mostrar la Tierra como un planeta muy especial que nos conecta con
            su familia planetaria y el universo en general.
          </Box>
        </Grid>
      </div>
      {/* --------------------- Sección 3 ---------------- */}
      <div className="container bg3">
        <img
          src="https://i.ibb.co/3pcZyPY/CARACTERISTICAS-3.png"
          class="d-block w-100"
          alt="..."
          style={{ float: "left", width: "33%" }}
        />
        <img
          src="https://i.ibb.co/3pcZyPY/CARACTERISTICAS-3.png"
          class="d-block w-100"
          alt="..."
          style={{ float: "left", width: "33%" }}
        />
        <img
          src="https://i.ibb.co/3pcZyPY/CARACTERISTICAS-3.png"
          class="d-block w-100"
          alt="..."
          style={{ float: "left", width: "33%" }}
        />
      </div>
      {/* --------------------- Sección 4 ---------------- */}
      <div className="container bg4">

      </div>      
    </div>
  );
}
