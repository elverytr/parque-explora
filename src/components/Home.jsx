import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/scss/cards.scss";
import styled from "styled-components";

const Title = styled.h1`
  color: #eeeeee;
  font-size: 3rem;
  font-family: "Open Sans";
`;

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const resp = await fetch(
        "https://encasa.parqueexplora.org/wp-json/wp/v2/posts"
      );
      const inData = await resp.json();
      setData(inData);
      setLoading(false);
    } catch {
      console.warn("No se recibió la data");
    }
  };

  let string = data[1]?.excerpt.rendered;

  var texto = string?.replace(/<[^>]+>/g, "");

  return (
    <div style={{ backgroundColor: "#a569d1", boxSizing: "border-box" }}>
      {/* --------------------- Sección 1 ---------------- */}
      <div className="container">
        <Grid
          display="inline-flex"
          flexDirection="column"
          minHeight="100%"
          justifyContent="space-evenly"
          w="100%"
        >
          {loading ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "calc(100vh - 60px)",
              }}
            >
              <div
                class="spinner-border"
                style={{ width: "4rem", height: "4rem", color: "white" }}
                role="status"
              />
            </div>
          ) : (
            <>
              <Title>Novedades</Title>
              <Box
                fontWeight="900"
                textAlign="center"
                width="100%"
                color="white"
                style={{ fontFamily: "Exo2", width: "100%" }}
                className="animate__animated animate__bounceInDown"
                display="flex"
                alignItems="center"
                justifyContent="space-evenly"
                flexWrap="wrap"
              >
                {data.map(
                  (datos, i) =>
                    i < 3 && (
                      <a href={datos?.guid.rendered} target="_blank">
                        <span key={i}>
                          <div>
                            <div className="card">
                              <figure>
                                <img
                                  src={datos?.jetpack_featured_media_url}
                                  alt={datos?.title.rendered}
                                />
                              </figure>
                              <div>
                                <h1>{datos?.title.rendered}</h1>
                                <p>
                                  {datos?.excerpt.rendered.replace(
                                    /<[^>]+>/g,
                                    ""
                                  )}
                                </p>
                              </div>
                                Ver mas
                            </div>
                          </div>
                        </span>
                      </a>
                    )
                )}
              </Box>
            </>
          )}
        </Grid>
      </div>
    </div>
  );
}
