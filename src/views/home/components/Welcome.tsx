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
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FFC000",
  color: "#000000",
  width: "240px",
  padding: "5.5px 0px",
  borderRadius: "40px",
  textTransform: "none",
  fontWeight: "bold",
  display: "flex",
  flexDirection: "column",
  boxShadow: `
    0px -3px 13px 0px #7C1E0057 inset,
    0px -5px 13px 0px #7C1E0036 inset,
    0px 8px 21px 0px #FFDF8E57 inset,
    0px 5px 8px 0px #FFFFFFE3 inset,
    0px 1px 1px 0px #FFFFFF inset
  `,
  "&:hover": {
    backgroundColor: "#FFA500",
  },
}));
export default function Welcome(props: any) {
  const ViewButtonLaucher = () => {
    return (
      <Box flex={1}>
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
              md: "50px",
              xl: "55px",
              lg: "60px",
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
        <Box
          display={"flex"}
          gap={{
            xs: "10px",
            md: "13px", // Decrease the gap for md screens
          }}
          marginTop={{
            xs: "10px",
            md: "31px", // Decrease the gap for md screens
          }}
          sx={{
            justifyContent: {
              md: "flex-start",
              sm: "center",
              xs: "center",
            },
            marginRight: {
              md: "0px", // Remove or reduce the margin-right for md screens
              xs: "35px",
            },
            ".btn": {
              transition: "filter .5s, transform 0.3s",
              ":hover": {
                filter: "brightness(1.3)",
                transform: "scale(1.01)",
              },
              height: "60px",
              width: "240px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            },
          }}
        >
          <Link
            className="btn"
            href="https://t.me/SingSing_TG_bot/app"
            target="_blank"
          >
            <img
              src="/assets/images/welcome/btn_lauch_mini_app.png"
              style={{ width: "240px", height: "60px" }}
            />
          </Link>
          <Link
            className="btn"
            href="https://app.singsing.net/"
            target="_blank"
          >
            <img
              src="/assets/images/welcome/btn_lauch_dApp.png"
              style={{ width: "240px", height: "60px" }}
            />
          </Link>
        </Box>
        <Box
          display={"flex"}
          width={"auto"}
          gap={{
            xs: "10px",
            md: "13px", // Decrease the gap for md screens
          }}
          marginTop={{
            xs: "10px",
            md: "21px", // Decrease the gap for md screens
          }}
          sx={{
            justifyContent: {
              md: "flex-start",
              sm: "center",
              xs: "center",
            },
            marginRight: {
              md: "0px", // Remove or reduce the margin-right for md screens
              xs: "35px",
            },
            ".btn": {
              transition: "filter .5s, transform 0.3s",
              ":hover": {
                filter: "brightness(1.3)",
                transform: "scale(1.01)",
              },
              height: "60px",
              width: "240px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            },
          }}
        >
          <Link
            href="https://play.google.com/store/apps/details?id=net.singsing.app&hl=vi/"
            target="_blank"
          >
            <img
              src="/assets/images/welcome/ggplay.png"
              style={{ width: "240px", height: "60px" }}
            />
          </Link>
          <Link
            href="https://apps.apple.com/vn/app/singsing-network/id1611106632?l=vi"
            target="_blank"
          >
            <img
              src="/assets/images/welcome/appstore.png"
              style={{ width: "240px", height: "60px" }}
            />
          </Link>
        </Box>
      </Box>
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
            lg: "12%",
            xl: "10%",
            md: "5%",
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
        bottom={0}
        position="absolute"
        // left={50}
        alignItems="center"
        flexDirection={"column"}
        justifyContent={"space-between"}
        sx={{
          display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
          paddingY: {
            sm: "30px",
            xs: "30px",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: {
              xs: "40px",
              sm: "60px",
            },
            lineHeight: {
              xs: "40px",
              sm: "60px",
            },
            fontWeight: 900,
            textAlign: "center",
            color: "white",
            textShadow: "2px 2px 4px #000000C4",
            whiteSpace: "pre-line", // This will respect \n characters
          }}
        >
          {"singing\nSOCIALFI\nplatform".toUpperCase()}
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
              img: {
                objectFit: "cover",
                width: "100%",
              },
              height: "40px",
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
              <StyledButton variant="contained">
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "10px",
                    lineHeight: "12px",
                    fontWeight: 500,
                    textAlign: "center",
                    color: "black",
                    whiteSpace: "pre-line", // This will respect \n characters
                  }}
                >
                  {"Launch the".toUpperCase()}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    lineHeight: "17px",
                    fontWeight: 700,
                    textAlign: "center",
                    color: "black",
                    whiteSpace: "pre-line", // This will respect \n characters
                  }}
                >
                  {"Mini APP".toUpperCase()}
                </Typography>
              </StyledButton>
            </Link>
          </Grid>
          <Grid item className="btn">
            <Link href="https://app.singsing.net/" target="_blank">
              <StyledButton variant="contained">
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "10px",
                    lineHeight: "12px",
                    fontWeight: 500,
                    textAlign: "center",
                    color: "black",
                    whiteSpace: "pre-line", // This will respect \n characters
                  }}
                >
                  {"Launch the".toUpperCase()}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    lineHeight: "17px",
                    fontWeight: 700,
                    textAlign: "center",
                    color: "black",
                    whiteSpace: "pre-line", // This will respect \n characters
                  }}
                >
                  {"Dapp".toUpperCase()}
                </Typography>
              </StyledButton>
            </Link>
          </Grid>
          <Grid item className="btn">
            <Link
              href="https://play.google.com/store/apps/details?id=net.singsing.app&hl=vi/"
              target="_blank"
              className="btn"
            >
              <img
                src="/assets/images/welcome/ggplay_mb.png"
                style={{ width: "100%", height: "40px",objectFit:"cover" }}
              />
            </Link>
          </Grid>
          <Grid item className="btn">
            <Link
            className="btn"
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
      marginTop={"60px"}
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
