/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { transform } from "next/dist/build/swc";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function OurMetric(props: any) {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAFAFA",
        display: "flex",
        paddingY: {
          md: "80px",
          sm: "50px",
          xs: "50px",
        },
      }}
    >
      <ScrollAnimation animateIn="fadeIn" duration={0.5} animateOnce={true}>
        <Stack
          direction={"column"}
          gap={5}
          sx={{
            width: "100%",
            maxWidth: "99vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: {
                xs: "40px",
                sm: "64px",
              },
              fontWeight: 800,
              lineHeight: { xs: "54px", md: "108px" },
              textAlign: "center",
              color: "black",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {"Our metrics".toUpperCase()}
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            sx={{
              marginTop: { md: "50px", sm: "50px", xs: "50px" },
            }}
          >
            <Box
              sx={{
                width: {
                  md: "900px",
                  sm: "600px",
                  xs: "350px",
                },
                height: {
                  md: "900px",
                  sm: "600px",
                  xs: "350px",
                },
                borderRadius: "50%",
                backgroundColor: "#FFC0001A",
                border: "2px dashed #FFC000",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "column",
              }}
            >
              <Box flex={1} />
              <Box
                sx={{
                  width: {
                    md: "600px",
                    sm: "400px",
                    xs: "233px",
                  },
                  height: {
                    md: "600px",
                    sm: "400px",
                    xs: "233px",
                  },
                  borderRadius: "50%",
                  backgroundColor: "#FFC00080",
                  border: "2px dashed #FFC000",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box flex={1} />
                <Box
                  sx={{
                    width: {
                      md: "300px",
                      sm: "220px",
                      xs: "110px",
                    },
                    height: {
                      md: "300px",
                      sm: "220px",
                      xs: "110px",
                    },
                    borderRadius: "50%",
                    border: "2px dashed #FFC000",
                    backgroundColor: "#FFC000",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box flexDirection={"column"} display={"flex"}>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontSize: {
                          xs: "10px",
                          md: "20px",
                        },
                        fontWeight: 700,
                        lineHeight: {
                          xs: "14px",
                          md: "22px",
                        },
                        textAlign: "center",
                        color: "black",
                        whiteSpace: "pre-line", // This will respect \n characters
                      }}
                    >
                      {"Ruby &\nNFT Holders"}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontSize: {
                          xs: "13px",
                          md: "24px",
                        },
                        fontWeight: 800,
                        lineHeight: {
                          xs: "14px",
                          md: "20px",
                        },
                        textAlign: "center",
                        color: "black",
                        whiteSpace: "pre-line", // This will respect \n characters
                      }}
                    >
                      {"50,000"}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  flexDirection={"column"}
                  display={"flex"}
                  flex={1}
                  justifyContent={"center"}
                >
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: {
                        xs: "10px",
                        md: "20px",
                      },
                      fontWeight: 700,
                      lineHeight: {
                        xs: "14px",
                        md: "20px",
                      },
                      textAlign: "center",
                      color: "black",
                      whiteSpace: "pre-line", // This will respect \n characters
                    }}
                  >
                    {"Web3 User"}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: {
                        xs: "13px",
                        md: "24px",
                      },
                      fontWeight: 800,
                      lineHeight: {
                        xs: "14px",
                        md: "24px",
                      },
                      textAlign: "center",
                      color: "black",
                      whiteSpace: "pre-line", // This will respect \n characters
                    }}
                  >
                    {"250,000"}
                  </Typography>
                </Box>
              </Box>
              <Box
                flexDirection={"column"}
                display={"flex"}
                flex={1}
                justifyContent={"center"}
              >
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: {
                      xs: "10px",
                      md: "20px",
                    },
                    fontWeight: 700,
                    lineHeight: {
                      xs: "14px",
                      md: "20px",
                    },
                    textAlign: "center",
                    color: "black",
                    whiteSpace: "pre-line", // This will respect \n characters
                  }}
                >
                  {"Web2 User"}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: {
                      xs: "13px",
                      md: "24px",
                    },
                    fontWeight: 800,
                    lineHeight: {
                      xs: "14px",
                      md: "24px",
                    },
                    textAlign: "center",
                    color: "black",
                    whiteSpace: "pre-line", // This will respect \n characters
                  }}
                >
                  {"2,000,000"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
      </ScrollAnimation>
    </Box>
  );
}
