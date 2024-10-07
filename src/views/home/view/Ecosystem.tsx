/* eslint-disable @next/next/no-img-element */
import { fadeIn } from "@/components/animation";
import { ServiceCard } from "@/components/card";
import { Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import { keyframes } from '@mui/system';
const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px 2px #e6dfdf;
  }
  50% {
    box-shadow: 0 0 10px 5px #00000040;
  }
  100% {
    box-shadow: 0 0 5px 2px #e6dfdf;
  }
`;
// Define the up and down movement animation
const moveUpDownAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;
const EcosystemContent: { img: string, url: string, name: string, user: string, }[] = [
    {
        img: "/assets/images/partners/bg_game_chick.png",
        url: 'https://t.me/chickizenbot',
        name: 'CHICKIZEN',
        user: '100k User',
    },
    {
        img: "/assets/images/partners/bg_game_kara.png",
        url: 'https://t.me/SingSing_TG_bot',
        name: 'SINGSING TYCOON',
        user: '200k User',
    },
    {
        img: "/assets/images/partners/bg_game_cow.png",
        url: 'https://t.me/cowtopiabot',
        name: 'COWTOPIA',
        user: '700k User',
    },
]
export default function Ecosystem(props: any) {
    const cardImage = ({ item, index }: { item: { img: string, url: string, name: string, user: string, }, index: number }) => {
        return (
            <Tilt
                // options={{
                //     max: 45,
                //     scale: 1,
                //     speed: 450,
                // }}
                className="w-[100%]"
            >
                <Stack
                    sx={{
                        alignItems: "center",
                        flexDirection: "column",
                        width: index == 1 ? {
                            xs: "250px",
                            md: "250px",
                            lg: "350px",
                            xl: "350px"
                        } : {
                            xs: '200px',
                            md: "200px",
                            lg: "300px",
                            xl: "300px"
                        },
                        height: index == 1 ? {
                            xs: '550px',
                            md: "550px",
                            lg: "650px",
                            xl: "650px"
                        } : {
                            xs: '450px',
                            md: "450px",
                            lg: "550px",
                            xl: "550px"
                        },
                    }}
                >
                    <Stack
                        sx={{
                            borderRadius: "23px",
                            alignItems: "center",
                            flexDirection: "column",
                            animation: `${glowAnimation} 1.5s infinite ease-in-out, ${moveUpDownAnimation} 2.5s infinite ease-in-out`, // Combine both animations
                            width: "100%",
                            height: "100%",
                            p: 0.4,
                            img: {
                                width: "100%",
                                height: "100%",
                            },
                        }}
                    >
                        <img
                            src={item?.img}
                            alt={item?.name}
                        />

                    </Stack>
                    <Typography sx={{
                        fontSize: 13,
                        color: 'white',
                        fontWeight: 600,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        span: {
                            fontSize: 16,
                            color: '#E13737',
                            fontWeight: 800,
                        }
                    }}>
                        {item?.name}
                        <span>{item?.user}</span>
                    </Typography>
                </Stack>
            </Tilt>

        );
    };
    return <Stack sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }}>
        <Typography
            sx={{
                fontFamily: "Montserrat",
                fontSize: {
                    xs: "16px",
                    sm: "24px",
                },
                fontWeight: 700,
                lineHeight: { xs: "16px", md: "24px" },
                letterSpacing: "0em",
                textAlign: "center",
                color: "white",
            }}
        >
            1M users ecosystem
        </Typography>
        <Grid
            container
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {EcosystemContent.map((item, index) => {
                return (
                    <Grid
                        onClick={() => {
                            window.open(
                                item?.url,
                                "_blank"
                            );
                        }}
                        key={index}
                        item
                        xs={12} // 1 column on extra small screens (mobile)
                        sm={12} // 1 column on small screens (tablets)
                        md={4}  // 3 columns on medium screens
                        lg={4}  // 3 columns on large screens
                        xl={4}  // 3 columns on extra-large screens
                        sx={{
                            objectFit: "cover",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: 'transparent',
                            my: 2
                        }}
                    >
                        {cardImage({ index: index, item: item })}
                    </Grid>
                );
            })}
        </Grid>
    </Stack>
}