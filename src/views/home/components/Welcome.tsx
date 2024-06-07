/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Box, Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import { useAppSelector } from "@/hooks/hooks";
import { appConfigSelector } from "@/slices/appConfigSlice";
import router from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Welcome(props: any) {
  const ViewButtonLaucher = () => {
    return (
      <Grid container width="100%" gap={3}>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: {
              xs: "40px",
              sm: "64px",
            },
            fontWeight: 900,
            lineHeight: {
              xs: "40px",
              md: "60px",
            },
            textAlign: {
              md: "left",
              sm: "center",
              xs: "center",
            },
            display: {
              md: "flex",
              sm: "none",
              xs: "none",
            },
            color: "white",
            textShadow: "2px 2px 4px #000000C4",
            whiteSpace: "pre-line", // This will respect \n characters
          }}
        >
          {"singing\nSOCIALFI platform".toUpperCase()}
        </Typography>
        <Grid
          container
          display={"flex"}
          width="100%"
          gap={"10px"}
          sx={{
            justifyContent: {
              md: "flex-start",
              sm: "center",
              xs: "center",
            },
            marginTop: {},
            ".btn": {
              transition: "filter .5s, transform 0.3s",
              ":hover": {
                filter: "brightness(1.3)",
                transform: "scale(1.01)",
              },
              height: "60px",
              width: "240px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Grid item className="btn">
            <Link
              className="btn"
              href="https://t.me/SingSing_TG_bot/app"
              target="_blank"
            >
              <img
                src="/assets/images/welcome/btn_lauch_mini_app.png"
                style={{ width: "240px", height: "60px" }} // Ensure the image itself has the required dimensions
              />
            </Link>
          </Grid>
          <Grid item className="btn">
            <Link href="https://app.singsing.net/" target="_blank">
              <img
                src="/assets/images/welcome/btn_lauch_dApp.png"
                style={{ width: "240px", height: "60px" }}
              />
            </Link>
          </Grid>
          <Grid item className="btn">
            <Link
              href="https://play.google.com/store/apps/details?id=net.singsing.app&hl=vi/"
              target="_blank"
            >
              <img
                src="/assets/images/welcome/ggplay.png"
                style={{ width: "240px", height: "60px" }}
              />
            </Link>
          </Grid>
          <Grid item className="btn">
            <Link
              href="https://apps.apple.com/vn/app/singsing-network/id1611106632?l=vi"
              target="_blank"
            >
              <img
                src="/assets/images/welcome/appstore.png"
                style={{ width: "240px", height: "60px" }}
              />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  const viewAbsolute = () => {
    return (
      <Box
        width="100%"
        height="100%"
        position="absolute"
        bottom={0}
        // left={50}
        justifyContent="center"
        alignItems="center"
        sx={{
          display: {
            lg: "flex",
            md: "flex",
            sm: "none",
            xs: "none",
          },
          left: {
            md: 50,
            sm: 0,
            xs: 0,
          },
          flexDirection: {
            md: "row",
            sm: "column",
            xs: "column",
          },
          img: {
            width: {
              md: "30%",
              xl: "30%",
              lg: "30%",
              sm: "60%",
              xs: "70%",
            },
            objectFit: "contain",
          },
        }}
      >
        <img src="/assets/images/welcome/img_singer.png" alt="Singer" />
        <ViewButtonLaucher />
      </Box>
    );
  };
  const viewAbsoluteMoblie = () => {
    return (
      <Box
        width="100%"
        height="100%"
        position="absolute"
        bottom={30}
        // left={50}
        alignItems="flex-end"
        sx={{
          display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
        }}
      >
        <Grid
          container
          display={"flex"}
          width="100%"
          gap={"10px"}
          sx={{
            justifyContent: {
              md: "flex-start",
              sm: "center",
              xs: "center",
            },
            marginTop: {},
            ".btn": {
              transition: "filter .5s, transform 0.3s",
              ":hover": {
                filter: "brightness(1.3)",
                transform: "scale(1.01)",
              },
              img: {
                objectFit: "contain",
                width: "100%",
              },
              height: "40px",
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Grid item className="btn">
            <Link
              className="btn"
              href="https://t.me/SingSing_TG_bot/app"
              target="_blank"
            >
              <img
                src="/assets/images/welcome/btn_lauch_mini_app_mb.png"
                style={{ width: "100%", height: "40px" }}
              />
            </Link>
          </Grid>
          <Grid item className="btn">
            <Link href="https://app.singsing.net/" target="_blank">
              <img
                src="/assets/images/welcome/btn_lauch_dApp_mb.png"
                style={{ width: "100%", height: "40px" }}
              />
            </Link>
          </Grid>
          <Grid item className="btn">
            <Link
              href="https://play.google.com/store/apps/details?id=net.singsing.app&hl=vi/"
              target="_blank"
            >
              <img
                src="/assets/images/welcome/ggplay_mb.png"
                style={{ width: "100%", height: "40px" }}
              />
            </Link>
          </Grid>
          <Grid item className="btn">
            <Link
              href="https://apps.apple.com/vn/app/singsing-network/id1611106632?l=vi"
              target="_blank"
            >
              <img
                src="/assets/images/welcome/appstore_mb.png"
                style={{ width: "100%", height: "40px" }}
              />
            </Link>
          </Grid>
        </Grid>
      </Box>
    );
  };
  return (
    <Box
      width="100%"
      minHeight="100vh"
      position="relative"
      sx={{
        ".img_banner": {
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          display: {
            lg: "flex",
            md: "flex",
            xs: "none",
            sm: "none",
          },
        },
        ".img_banner_mb": {
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          display: {
            lg: "none",
            md: "none",
            xs: "flex",
            sm: "flex",
          },
        },
      }}
    >
      <img
        className="img_banner"
        src="/assets/background/bg_banner_home.png"
        alt="Background"
      />
      <img
        className="img_banner_mb"
        src="/assets/background/bg_banner_home_mb.png"
        alt="Background"
      />
      {viewAbsolute()}
      {viewAbsoluteMoblie()}
    </Box>
  );
}
