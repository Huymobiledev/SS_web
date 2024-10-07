/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import AboutSS from "./view/AboutSS";
import { Stack } from "@mui/material";
import OurPartners from "./view/OurPartners";
import StarsCanvas from "@/components/background";
import Ecosystem from "./view/Ecosystem";
import BannerSS from "./view/BannerSS";

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
          alignItems: "center",
          display: "flex",
          '& #imgBanner': {
            height: "100vh",
            width: "100vw",
            objectFit:'cover'
          }
        }}>
          {/* <EarthCanvas /> */}
          <img id={'imgBanner'} src={`/assets/background/bg_banner.webp`} />
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