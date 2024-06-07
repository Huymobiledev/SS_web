import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function Tokenomic(props: any) {
  const { data } = props;
  return (
    <Box
      sx={{
        textAlign: "center",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Stack
        direction={"column"}
        gap={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollAnimation animateIn="fadeIn" duration={0.5} animateOnce={true}>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: {
                xs: "40px",
                sm: "64px",
              },
              fontWeight: 800,
              lineHeight: { xs: "40px", md: "108px" },
              textAlign: "center",
              color: "black",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            TOKENOMIC
          </Typography>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay={200}
          animateOnce={true}
        >
          <Grid
            container
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mx: "auto",
              maxWidth: "xl",
            }}
          >
            <Grid
              item
              xs={12}
              sm={8}
              sx={{
                img: {
                  width: "100%",
                },
              }}
            >
              <img src="assets/images/tokenomic.png" />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                img: {
                  width: "95%",
                  height: "auto",
                },
              }}
            >
              <img src="assets/images/legends.png" />
            </Grid>
          </Grid>
        </ScrollAnimation>
      </Stack>
    </Box>
  );
}
