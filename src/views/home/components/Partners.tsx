/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function Partners(props: any) {
  const { data } = props;

  const strongBackers = [
    {
      pic: "/assets/images/strongbackers/Frame55.png",
      url: "https://kyber.network/",
    },
    {
      pic: "/assets/images/strongbackers/Frame54.png",
      url: "https://www.web3port.us/",
    },
    {
      pic: "/assets/images/strongbackers/Frame50.png",
      url: "https://kyber.network/",
    },
    {
      pic: "/assets/images/strongbackers/Frame51.png",
      url: "https://tomochain.com/",
    },
    {
      pic: "/assets/images/strongbackers/Frame49.png",
      url: "https://www.hubglobal.io/",
    },
    {
      pic: "/assets/images/strongbackers/Frame52.png",
      url: "https://funverse.capital/",
    },
   
  ];

  const partners = [
    {
      url: "https://okara.vn/",
    },
    {
      url: "https://www.oav.edu.in/",
    },
    {
      url: "https://www.aag.org/",
    },
    {
      url: "https://www.avax.network/",
    },
    {
      url: "https://aws.amazon.com/",
    },
    {
      url: "https://www.yieldguild.io/",
    },
    {
      url: "http://www.coins.ph/",
    },
    {
      url: "https://metaone.gg/",
    },
    {
      url: "https://app.saakuru.com/",
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        display: "flex",
        backgroundColor: "#FAFAFA",
        paddingY: {
          md: "100px",
          sm: "50px",
          xs: "50px",
        },
      }}
    >
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <Stack
          direction={"column"}
          gap={10}
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            display: "flex",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              //styleName: Header-AllCap;
              fontFamily: "Montserrat",
              fontSize: {
                xs: "40px",
                sm: "64px",
              },
              fontWeight: 800,
              lineHeight: { xs: "40px", md: "108px" },
              letterSpacing: "0em",
              textAlign: "center",
              color: "black",
            }}
          >
            INVESTOR
          </Typography>
          <Grid
            container
            gap={"20px"}
            sx={{
              width: {
                md: "50%",
                lg: "55%",
                xl: "60%",
                xs: "90%",
                sm: "90%",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {strongBackers.map((backer, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={5} // Chiếm 2 cột trên màn hình nhỏ
                  sm={5}
                  md={3}
                  lg={3}
                  xl={3}
                  sx={{
                    width: "250px", // Set specific width
                    height: "90px", // Set specific height
                    backgroundColor: "white",
                    objectFit: "cover",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.48)",
                    transition: "filter 0.3s",
                    ":hover": {
                      filter: "brightness(0.9)",
                    },
                    img: {
                      width: "80%",
                    },
                    overflow: "hidden",
                  }}
                >
                  <Link href={backer.url} target="_blank">
                    <img src={backer.pic} />
                  </Link>
                </Grid>
              );
            })}
          </Grid>
          <Typography
            variant="h1"
            sx={{
              //styleName: Header-AllCap;
              fontFamily: "Montserrat",
              fontSize: {
                xs: "40px",
                sm: "64px",
              },
              fontWeight: 800,
              lineHeight: { xs: "40px", md: "108px" },
              letterSpacing: "0em",
              textAlign: "center",
              color: "black",
            }}
          >
            PARTNERS
          </Typography>
          <Grid
            container
            gap={"20px"}
            sx={{
              width: {
                md: "50%",
                lg: "55%",
                xl: "60%",
                xs: "90%",
                sm: "90%",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {partners.map((partner, index) => (
              <Grid
                key={index}
                item
                xs={5} // Chiếm 2 cột trên màn hình nhỏ
                sm={5}
                md={3}
                lg={3}
                xl={3}
                sx={{
                  width: "250px", // Set specific width
                  height: "90px", // Set specific height
                  backgroundColor: "white",
                  objectFit: "cover",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.48)",
                  transition: "filter 0.3s",
                  ":hover": {
                    filter: "brightness(0.9)",
                  },
                  img: {
                    width: "75%",
                  },
                  overflow: "hidden",
                }}
              >
                <Link href={partner.url} target="_blank">
                  <img
                    src={`assets/images/partners/Funverse_Captial_1-${index}.png`}
                    alt={`Partner ${index}`}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </ScrollAnimation>
    </Box>
  );
}
