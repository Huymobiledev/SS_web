/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
export default function RoadMap() {
  const buildViewRoadMapMB = () => {
    return (
      <Stack
        direction={"column"}
        gap={8}
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 2 }}
        sx={{
          width: "95%",
          // height: "1050px",
          mx: "auto",
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          maxWidth: "420px",
          background: "url(assets/images/road.png) no-repeat",
          backgroundSize: "16px",
          backgroundPositionX: "31.5px",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          ".content": {
            fontFamily: "Montserrat",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "17px",
            letterSpacing: "0em",
            textAlign: "left",
            maxWidth: "70%",
          },
          ".time": {
            fontFamily: "Montserrat",
            "span:first-child": {
              fontSize: "16px",
              fontWeight: 800,
              lineHeight: "17px",
              letterSpacing: "0em",
            },
            "span:last-child": {
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "17px",
              letterSpacing: "0em",
            },
          },
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "left",
          }}
        >
          <Box
            className="time"
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#DDDDDD",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#8B8B8B",
              flexDirection: "column",
            }}
          >
            <span>2023</span>
            <span>Q3</span>
          </Box>
          <Typography className="content">
            <ul>
              <li>Real world voucher launch</li>
              <li>Real world Sing to Earn</li>
            </ul>
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "left",
          }}
        >
          <Box
            className="time"
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#DDDDDD",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#8B8B8B",
              flexDirection: "column",
            }}
          >
            <span>2023</span>
            <span>Q4</span>
          </Box>
          <Typography className="content">
            <ul>
              <li>Expand to Oasys and Polygon</li>
            </ul>
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "left",
          }}
        >
          <Box
            className="time"
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#DDDDDD",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              color: "#8B8B8B",
            }}
          >
            <span>2024</span>
            <span>Q1</span>
          </Box>
          <Typography className="content" position={"relative"}>
            <ul>
              <li>Sing to win launch</li>
              <li>Indonesia big event with AAG</li>
            </ul>
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "left",
          }}
        >
          <Box
            className="time"
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#DDDDDD",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              flexDirection: "column",
              color: "#8B8B8B",
            }}
          >
            <span>2024</span>
            <span>Q2</span>
          </Box>
          <Typography className="content">
            <ul>
              <li>Sing to Win - Big Event with Avalanche</li>
              <li>Launching Subnet (Haku Chain) on Avalanche</li>
              <li>Launching SingSing Mini App</li>
            </ul>
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "left",
          }}
        >
          <Box
            className="time"
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#FBBC04",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              flexDirection: "column",
            }}
          >
            <span>2024</span>
            <span>Q3</span>
          </Box>
          <Typography className="content">
            <ul>
              <img
                style={{
                  width: "61px",
                }}
                src="assets/images/roadmap/singer.png"
              ></img>
              <b>
                <li>Vietnam market pushed with Okara</li>
                <li>Platform expand to other chains</li>
               
              </b>
            </ul>
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "left",
          }}
        >
          <Box
            className="time"
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#93E2A8",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              flexDirection: "column",
            }}
          >
            <span>2024</span>
            <span>Q4</span>
          </Box>
          <Typography className="content">
            <ul>
              <li>South-East-Asia big contest with 1 big Foundation</li>
              <li>Platform expand to other chains</li>
              <li>Expand Market to Taiwan, Hong Kong</li>
              <li>IDO</li>
            </ul>
          </Typography>
        </Stack>
      </Stack>
    );
  };
  const buildViewRoadMapDesk = () => {
    return (
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          background: "url(assets/images/roadmap/road.png) no-repeat",
          display: {
            xs: "none",
            md: "flex",
          },
          mx: "auto",
          backgroundSize: "auto 20px",
          justifyContent: "space-evenly",
          backgroundPositionY: "40px",
          height: "100%",
        }}
      >
        <Stack direction={"column"} sx={{}}>
          <Box
            sx={{
              width: "100px",
              height: "100px",
              backgroundColor: "#DDDDDD",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              span: {
                color: "#8B8B8B",
              },

              "span:first-child": {
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: 800,
                lineHeight: "29px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#8B8B8B",
              },

              "span:last-child": {
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "19.5px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#8B8B8B",
              },
            }}
          >
            <span>2023</span>
            <span>Q3</span>
            <img
              src="assets/images/roadmap/Line2.svg"
              style={{ position: "absolute", top: "100px" }}
            />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { md: "12px", lg: "13px" },
                fontWeight: 500,
                lineHeight: { md: "30px", lg: "55px" },
                letterSpacing: "0em",
                textAlign: "center",
                position: "absolute",
                width: { md: "200px", lg: "310px" },
                top: "200px",
              }}
            >
              <li>Real world voucher launch</li>
              <li>Real world Sing to Earn</li>
            </Typography>
          </Box>
        </Stack>

        <Stack direction={"column"}>
          <Box
            sx={{
              width: "100px",
              height: "100px",
              backgroundColor: "#DDDDDD",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",

              span: {
                color: "#8B8B8B",
              },

              "span:first-child": {
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: 800,
                lineHeight: "29px",
                letterSpacing: "0em",
                textAlign: "center",
              },

              "span:last-child": {
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "19.5px",
                letterSpacing: "0em",
                textAlign: "center",
              },
            }}
          >
            <span>2023</span>
            <span>Q4</span>
            <img
              src="assets/images/roadmap/Line2.svg"
              style={{
                position: "absolute",
                transform: "rotate(180deg)",
                bottom: "100px",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { md: "12px", lg: "13px" },
                fontWeight: 500,
                lineHeight: { md: "30px", lg: "55px" },
                letterSpacing: "0em",
                textAlign: "center",
                position: "absolute",
                width: { md: "200px", lg: "250px" },
                bottom: "200px",
              }}
            >
              <ul>
                <li>Expand to Oasys and Polygon</li>
              </ul>
            </Typography>
          </Box>
        </Stack>

        <Stack
          direction={"column"}
          // sx={{
          //   transform: "translateY(-30px)",
          // }}
        >
          <Box
            sx={{
              width: "100px",
              height: "100px",
              backgroundColor: "#DDDDDD",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              "span:first-child": {
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: 800,
                lineHeight: "29px",
                letterSpacing: "0em",
                textAlign: "center",
              },
              span: {
                color: "#8B8B8B",
              },
              "span:last-child": {
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "19.5px",
                letterSpacing: "0em",
                textAlign: "center",
              },
            }}
          >
            <span>2024</span>
            <span>Q1</span>

            <img
              src="assets/images/roadmap/Line2.svg"
              style={{ position: "absolute", top: "100px" }}
            />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { md: "12px", lg: "13px" },
                fontWeight: 500,
                lineHeight: { md: "30px", lg: "55px" },
                letterSpacing: "0em",
                textAlign: "center",
                position: "absolute",
                width: { md: "270px", lg: "350px" },
                top: "270px",
              }}
            >
              <li>Sing to win launch</li>
              <li>Indonesia big event with AAG</li>
            </Typography>
          </Box>
        </Stack>

        <Stack
          direction={"column"}
          // sx={{
          //   transform: "translateY(-30px)",
          // }}
        >
          <Box
            sx={{
              width: "100px",
              height: "100px",
              backgroundColor: "#DDDDDD",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              "span:first-child": {
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: 800,
                lineHeight: "29px",
                letterSpacing: "0em",
                textAlign: "center",
              },
              span: {
                color: "#8B8B8B",
              },
              "span:last-child": {
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "19.5px",
                letterSpacing: "0em",
                textAlign: "center",
              },
            }}
          >
            <span>2024</span>
            <span>Q2</span>
            <img
              src="assets/images/roadmap/Line2.svg"
              style={{
                position: "absolute",
                transform: "rotate(180deg)",
                bottom: "100px",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { md: "12px", lg: "13px" },
                fontWeight: 500,
                lineHeight: { md: "30px", lg: "55px" },
                letterSpacing: "0em",
                textAlign: "center",
                position: "absolute",
                width: { md: "220px", lg: "450px" },
                bottom: "200px",
              }}
            >
              <li>Sing to Win - Big Event with Avalanche</li>
              <li>Launching Subnet (Haku Chain) on Avalanche</li>
              <li>Launching SingSing Mini App</li>
            </Typography>
          </Box>
        </Stack>

        <Stack direction={"column"} sx={{}}>
          <Box
            sx={{
              width: "120px",
              height: "120px",
              backgroundColor: "#FBBC04",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",

              "span:first-child": {
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: 800,
                lineHeight: "29px",
                letterSpacing: "0em",
                textAlign: "center",
              },

              "span:last-child": {
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "19.5px",
                letterSpacing: "0em",
                textAlign: "center",
              },
            }}
          >
            <span>2024</span>
            <span>Q3</span>
            <img
              src="assets/images/roadmap/singer.png"
              style={{
                position: "absolute",
                top: "-200px",
                width: "130px",
              }}
            />
            <img
              src="assets/images/roadmap/Line2.svg"
              style={{ position: "absolute", top: "100px" }}
            />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { md: "12px", lg: "16px" },
                fontWeight: 500,
                lineHeight: { md: "30px", lg: "55px" },
                letterSpacing: "0em",
                textAlign: "center",
                position: "absolute",
                width: { md: "300px", lg: "410px" },
                top: "200px",
              }}
            >
              <b>
                <li>Vietnam market pushed with Okara</li>
                <li>Platform expand to other chains</li>
                
              </b>
            </Typography>
          </Box>
        </Stack>

        <Stack direction={"column"} sx={{}}>
          <Box
            sx={{
              width: "100px",
              height: "100px",
              backgroundColor: "#93E2A8",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",

              "span:first-child": {
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: 800,
                lineHeight: "29px",
                letterSpacing: "0em",
                textAlign: "center",
              },

              "span:last-child": {
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "19.5px",
                letterSpacing: "0em",
                textAlign: "center",
              },
            }}
          >
            <span>2024</span>
            <span>Q4</span>
            <img
              src="assets/images/roadmap/Line2.svg"
              style={{
                position: "absolute",
                transform: "rotate(180deg)",
                bottom: "100px",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { md: "12px", lg: "13px" },
                fontWeight: 500,
                lineHeight: { md: "30px", lg: "55px" },
                letterSpacing: "0em",
                textAlign: "center",
                position: "absolute",
                width: { md: "280px", lg: "400px" },
                bottom: "200px",
                transform: {
                  md: "translateX(-50px)",
                  lg: "translateX(-40px)",
                },
              }}
            >
              <li>South-East-Asia big contest with 1 big Foundation</li>
              <li>Platform expand to other chains</li>
              <li>Expand Market to Taiwan, Hong Kong</li>
              <li>IDO</li>
            </Typography>
          </Box>
        </Stack>
      </Stack>
    );
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: { xs: "unset", md: "center" },
        position: "relative",
        paddingY: {
          md: "80px",
          sm: "50px",
          xs: "50px",
        },
      }}
    >
      <Stack
        direction={"column"}
        gap={{ xs: 5, md: 40 }}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: {
            md: "100px",
            xs: "50px",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
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
            mb: {
              md: "100px",
              xs: "30px",
            },
          }}
        >
          ROADMAP
        </Typography>
        <ScrollAnimation animateIn="fadeIn" duration={0.5} animateOnce={true}>
          {buildViewRoadMapDesk()}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={0.5} animateOnce={true}>
          {buildViewRoadMapMB()}
        </ScrollAnimation>
      </Stack>
    </Box>
  );
}
