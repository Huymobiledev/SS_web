import { Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import TheTeam from "./components/TheTeam";
import Welcome from "./components/Welcome";
import Partners from "./components/Partners";
import Tokenomic from "./components/Tokenomic";
import ScrollAnimation from "react-animate-on-scroll";
// import { getHomeContentAPI } from "@/api/home";
import { useRouter } from "next/router";
import HowToPlay from "./components/HowToPlay";
import SingAndEarn from "./components/SingAndEarn";
import SocialVotingGame from "./components/SocialVotingGame";
import Web3SingingPlatform1 from "./components/Web3SingingPlatform1";
import Web3SingingPlatform2 from "./components/Web3SingingPlatform2";
import RoadMap from "./components/RoadMap";

export default function ViewHomePage(props: any) {
    const { t } = useTranslation()
    const [data, setData] = useState<any>(null);
    return (
        <Fragment>
            <Stack direction={'column'} width={'100%'} gap={10} alignItems={'center'} sx={{backgroundColor: '#white'}}>
                <Welcome/>
                <Web3SingingPlatform1/>
                <Web3SingingPlatform2/>
                <SocialVotingGame/>
                <SingAndEarn data={data}/>
                <Tokenomic data={data} />
                <TheTeam/>
                <Partners/>
                <RoadMap/>
                {/* <BlogAndNews/> */}
            </Stack>
        </Fragment>
    )
}