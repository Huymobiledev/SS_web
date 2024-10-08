/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AboutSS from "./view/AboutSS";
import { Stack } from "@mui/material";
import OurPartners from "./view/OurPartners";
import StarsCanvas from "@/components/background";
import Ecosystem from "./view/Ecosystem";
import BannerSS from "./view/BannerSS";
import { useSafariVersion } from "@/hooks/useSafari";

export default function ViewHomePage(props: any) {
  const { t } = useTranslation();
  const [data, setData] = useState<any>(null);
  return (

    <Fragment>
      <Stack
        direction={"column"}
        width={"100vw"}
        overflow={'hidden'}
        alignItems={"center"}
        sx={{ backgroundColor: "black" }}
      >
        <Stack sx={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          alignItems: {
            xl: "flex-end",
            md: "flex-end",
            xs: 'center'
          },
          justifyContent:"center",
          display: "flex",
          backgroundColor: "#E13737",
          '& #imgBanner': {
            height: "auto",
            width: "70vw",
            objectFit: '100% 100%',
            mixBlendMode: 'screen',
            display: {
              xl: 'flex',
              md: 'flex',
              xs: 'none'
            },
          },
          '& #imgBannerMb': {
            height: "auto",
            width: "150vw",
            mt:'-50vw', 
            objectFit: '100% 100%',
            mixBlendMode: 'screen',
            display: {
              xl: 'none',
              md: 'none',
              xs: 'flex'
            },
          }
        }}>
          <img id={`imgBanner`} src={'/assets/background/bg_banner.png'} />
          <img id={`imgBannerMb`} src={'/assets/background/bg_banner.png'} />
          <BannerSS />
        </Stack>
        <StarsCanvas >
          <Ecosystem />
          <OurPartners />
          <AboutSS />
        </StarsCanvas>

      </Stack>
    </Fragment>
  );
}