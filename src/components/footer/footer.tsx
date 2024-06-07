import { COLOR } from "@/constant/common";
import {
  Box,
  ButtonBase,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Fragment, useState, useEffect, CSSProperties } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  DiscordSvgIcon,
  FacebookSvgIcon,
  TeleSvgIcon,
  XSvgIcon,
  YoutubeSvgIcon,
} from "../icons/socials";
import router from "next/router";
import LanguageItem from "./languageItem";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation();

  const discord = {
    pic: "assets/icons/community/discord-round-black-icon.svg",
    link: "https://discord.com/invite/KjpWj4ce2P",
  };

  const facebook = {
    pic: "assets/icons/community/facebook-round-color-icon.svg",
    link: "https://www.facebook.com/SingSingGlobal",
  };

  const x = {
    pic: "assets/icons/community/x-social-media-round-icon.svg",
    link: "https://twitter.com/singsingglobal",
  };

  const telegram = {
    pic: "assets/icons/community/telegram-black-icon.svg",
    link: "https://t.me/singsingchannel",
  };

  const community = [discord, facebook, x, telegram];
  const viewAboutUs = () => {
    return (
      <Grid item xs={12} sm={5.5} md={2.5}>
        <Box
          sx={{
            width: "100%",
            // display: 'grid',
            // gridTemplateRows: '60px 100px',
            img: {
              width: "174px",
              m: {
                xs: "auto",
                sm: 0,
              },
            },
            justifyContent: {
              xs: "center",
              sm: "left",
            },
            mb: 3,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              //styleName: Mont T18;
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 700,
              lineHeight: "22px",
              letterSpacing: "0px",
              textAlign: { xs: "center", sm: "left" },
              width: "100%",
              mb: 2,
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              //styleName: Mont L14;
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: "0px",
              textAlign: { xs: "center", sm: "left" },
              my: "auto",
              span: {
                userSelect: "none",
                cursor: "pointer",
                transition: "color 0.3s, filter 0.3s",
                ":hover": {
                  color: "#B226C5",
                  filter: "brightness(2)",
                },
              },
            }}
          >
            <span
              onClick={() => {
                document
                  .getElementById("howtoplay")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              How To Play
            </span>
            <br />
            <span
              onClick={() => {
                document
                  .getElementById("ourteam")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About us
            </span>
            <br></br>
            <Link href="/terms-of-service">
              <span>Terms of use</span>
            </Link>
            <br></br>
            <Link href="/policy">
              <span>Privacy Policy</span>
            </Link>
          </Typography>
        </Box>
      </Grid>
    );
  };
  const viewSupportCenter = () => {
    return (
      <Grid item xs={12} sm={5.5} md={2.5}>
        <Box
          sx={{
            width: "100%",
            // display: 'grid',
            // gridTemplateRows: '60px 100px',
            img: {
              width: "174px",
              m: {
                xs: "auto",
                sm: 0,
              },
            },
            justifyContent: {
              xs: "center",
              sm: "left",
            },
            mb: 3,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              //styleName: Mont T18;
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 700,
              lineHeight: "22px",
              letterSpacing: "0px",
              textAlign: { xs: "center", sm: "left" },
              width: "100%",
              mb: 2,
            }}
          >
            Support Center
          </Typography>
          <Typography
            variant="body1"
            sx={{
              //styleName: Mont L14;
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: "0px",
              textAlign: { xs: "center", sm: "left" },
              my: "auto",
              span: {
                userSelect: "none",
                cursor: "pointer",
                transition: "color 0.3s, filter 0.3s",
                ":hover": {
                  color: "#B226C5",
                  filter: "brightness(2)",
                },
              },
            }}
          >
            <Link
              href="https://singsing.gitbook.io/singsing/sing-and-earn-deprecated/getting-started"
              target="_blank"
            >
              <span>How to register</span>
            </Link>
            <br />
            <Link
              href="https://singsing.gitbook.io/singsing/platform/marketplace"
              target="_blank"
            >
              <span>How to buy and sell</span>
            </Link>
            <br></br>
            <Link
              href="https://singsing.gitbook.io/singsing/platform/wallets"
              target="_blank"
            >
              <span>How to transfer NFT</span>
            </Link>
            <br></br>
          </Typography>
        </Box>
      </Grid>
    );
  };
  return (
    <Box
      sx={{
        width: "100%",
        color: "white",
        backgroundColor: "#0B0E11",
        justifyContent: "center",
        overflowX: "hidden",
        display: "flex",
        alignItems: "center",
        py: 8,
      }}
    >
      <Grid
        container
        sx={{
          width: "90%",
          maxWidth: "1270px",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          m: "auto",
          maxHeight: "90vh",
          display: "flex",
        }}
      >
        <Grid item xs={12} sm={5.5} md={2.5}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              // display: 'grid',
              // gridTemplateRows: '60px 100px',
              img: {
                width: "174px",
                m: {
                  xs: "auto",
                  sm: 0,
                },
              },
              justifyContent: {
                xs: "center",
                sm: "left",
              },
              my: 3,
            }}
          >
            <img src="assets/icons/logo_singsing.svg" />
            {/* <Typography variant="body1" sx={{
                                    //styleName: Mont L14;
                                    fontFamily: 'Montserrat',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    lineHeight: '22px',
                                    letterSpacing: '0px',
                                    textAlign: {xs: 'center', sm: 'left'},
                                }}>
                                    SING SING PTE. LTD
                                    <br/>
                                    Address: 114 Lavender street # 11-83
                                    <br/>
                                    CT Hub 2 Singapore (338729)
                                    <br/>
                                    © SingSing 2021
                                </Typography> */}
          </Box>
        </Grid>
        {viewAboutUs()}
        {viewSupportCenter()}
        <Grid item xs={12} sm={5.5} md={2.5} sx={{}}>
          <Grid
            container
            sx={{
              width: "100%",
              justifyContent: "space-evenly",
              maxWidth: "258px",
              alignItems: "center",
              m: "auto",
              img: {
                width: "48px",
                m: "auto",
                borderRadius: "10px",
                transition: "transform .4s, filter .5s",
                ":hover": {
                  transform: "scale(1.2)",
                  filter: "brightness(0.7)",
                },
              },
            }}
          >
            {community.map((button, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "42px",
                    borderRadius: "50%",
                    img: {
                      width: "42px",
                    },
                  }}
                >
                  <Link href={button.link} target="_blank" key={index}>
                    <img src={button.pic}></img>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
