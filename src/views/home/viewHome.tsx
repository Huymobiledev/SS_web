import { Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import TheTeam from "./components/TheTeam";
import Welcome from "./components/Welcome";
import OurAdvisors from "./components/OurAdvisors";
import Partners from "./components/Partners";
import FamousSingers from "./components/FamousSingers";
import ScrollAnimation from "react-animate-on-scroll";
// import { getHomeContentAPI } from "@/api/home";
import { useRouter } from "next/router";
import HowToPlay from "./components/HowToPlay";
import MicrophoneNFTs from "./components/MicrophoneNFTs";


export default function ViewHomePage(props: any) {
    const { t } = useTranslation()
    const [data, setData] = useState<any>(null);
    return (
        <Fragment>
            <Stack direction={'column'} width={'100%'} gap={0} alignItems={'center'} sx={{backgroundColor: '#0B0E11'}}>
                <Welcome/>
                <HowToPlay/>
                <MicrophoneNFTs data={data}/>
                <FamousSingers data={data} />
                <TheTeam/>
                <OurAdvisors/>
                <Partners/>
                {/* <BlogAndNews/> */}
            </Stack>
        </Fragment>
    )
}