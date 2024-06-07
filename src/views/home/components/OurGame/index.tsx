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

export default function OurGame(props: any) {
  const listImager = [
    "/assets/images/our_game/bg_mine_ruby.png",
    "/assets/images/our_game/bg_quest.png",
    "/assets/images/our_game/bg_mine_point.png",
    "/assets/images/our_game/bg_sing_to_win.png",
    "/assets/images/our_game/bg_sing_to_earn.png",
  ];
  const listImagerMB = [
    "/assets/images/our_game/bg_mine_ruby_mb.png",
    "/assets/images/our_game/bg_quest_mb.png",
    "/assets/images/our_game/bg_mine_point_mb.png",
    "/assets/images/our_game/bg_sing_to_win_mb.png",
    "/assets/images/our_game/bg_sing_to_earn_mb.png",
  ];
  const ViewImage = () => {
    return (
      <Stack
        width="100%"
        flexDirection="column"
        gap="100px"
        sx={{
          ".link": {
            width: "100%",
            height: "500px",
            paddingX: "4%",
          },
          ".img": {
            width: "100%",
            height: "500px",
            borderRadius: "21px",
            objectFit: "cover",
          },
          display: {
            sm: "none",
            xs: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
      >
        {listImager.map((item, index) => (
          <Link className="link" key={index} href="/">
            <img className="img" src={item} alt={`image-${index}`} />
          </Link>
        ))}
      </Stack>
    );
  };
  const ViewImageMB = () => {
    return (
      <Stack
        width="100%"
        flexDirection="column"
        gap="30px"
        sx={{
          ".link": {
            width: "95%",
            marginX: "4%",
          },
          ".img": {
            width: "95%",
            borderRadius: "21px",
            objectFit: "contain",
          },
          display: {
            sm: "flex",
            xs: "flex",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        {listImagerMB.map((item, index) => (
          <Link className="link" key={index} href="/">
            <img className="img" src={item} alt={`image-${index}`} />
          </Link>
        ))}
      </Stack>
    );
  };
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        display: "flex",
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
              mt: 5,
              mb: 0,
            }}
          >
            {"discover our games".toUpperCase()}
          </Typography>
          <ViewImage />
          <ViewImageMB />
        </Stack>
      </ScrollAnimation>
    </Box>
  );
}
