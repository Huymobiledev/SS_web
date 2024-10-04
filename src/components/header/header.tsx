import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fragment, useEffect, useState } from "react";
import Nav from "./components/nav";
import router from "next/router";
import { checkUrl } from "@/utils";
import Link from "next/link";
import { useShowMediaUp } from "@/hooks/useResponse";
import LanguageItem from "../footer/languageItem";
import { MenuIcon } from "../icons/icons";
import MenuMobile from "./components/menuMobile";
// import { useSpring, animated } from 'react-spring';

export const noHeaderUrl = ["/login*", "/forget-password*"];

const CustomOutlinedButton = styled(Button)({
  border: "1px solid inherit",
  borderRadius: "59px",
  height: "30px",
  color: "inherit",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "inherit",
    border: "1px solid inherit",
  },
});

export default function Header() {
  const [isBg, setIsBg] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const darkUrl = [
    "/new*",
    // '/service*',
    //'/about-us*'
  ];

  const isDark = checkUrl(router.pathname, darkUrl);

  useEffect(() => {
    function checkScroll() {
      //console.log(window.scrollY)
      if (window.scrollY >= 10) {
        setIsBg(true);
      }
      if (window.scrollY === 0) {
        setIsBg(false);
      }
    }
    window.addEventListener("scroll", checkScroll);
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  if (checkUrl(router.pathname, noHeaderUrl)) {
    return <></>;
  }

  return (
    <Fragment>
      <Stack
        sx={{
          background: "black",
          position: "fixed",
          zIndex: 1000,
          top: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          height: "60px",
          pl: 0,
        }}
      >
        <Stack
          sx={{
            "@media screen and (min-width: 800px)": {
              width: "10vw",
            },
          }}
        ></Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="right"
          width="100%"
          sx={{
            height: [60, 60, 60, 60, 60],
            minHeight: [60, 60, 60, 60, 60],
            color: isDark ? "#000" : "#fff",
            width: "100%",
            pl: 0,
          }}
        >
          <Stack
            direction="row"
            alignItems="right"
            height="100%"
            sx={{ pl: 0 }}
          >
            <Stack
              sx={{
                height: [30],
                minHeight: [30],
                img: {
                  width: "120px",
                  height: "100%",
                  objectFit: "contain",
                  position: "relative",
                  top: "50%",
                },
                textAlign: "center",
                justifyItems: "left",
                ml: 0,
              }}
            >
              <Link href="/">
                <img src="assets/icons/logo-white.png" alt="logo" />
              </Link>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyItems={"space-between"}
            height="100%"
            sx={{
              mr: 0,
            }}
          >
            <Nav isDark={isDark} />
            <Stack
              sx={{
                display: isBg ? "flex" : "none",
                position: "fixed",
                background: "#951f1d",
                boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
                width: 36,
                height: 36,
                textAlign: "center",
                justifyContent: "center",
                bottom: 10,
                right: 10,
                ":hover": {
                  background: "#ac5c54",
                },
                img: {
                  width: 16,
                  height: 11,
                  m: "auto",
                },
              }}
              onClick={scrollToTop}
            >
              <img src="/assets/icons/Polygon_1.svg"></img>
            </Stack>
            <IconButton
              sx={{
                display: {
                  xs: "auto",
                  md: "none",
                },
                color: "inherit",
              }}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <MenuIcon />
            </IconButton>
            {/* <LanguageItem isDark={isDark} /> */}
          </Stack>
        </Stack>
        <Stack
          sx={{
            "@media screen and (min-width: 800px)": {
              width: "10vw",
            },
          }}
        ></Stack>
      </Stack>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
        sx={{
          ".MuiPaper-root": {
            p: 3,
            px: 1.5,
            width: "50vw",
            maxWidth: "200px",
            zIndex: 999,
            background: "black",
          },
        }}
      >
        <MenuMobile onClose={() => setOpenMenu(false)} />
      </Drawer>
    </Fragment>
  );
}
