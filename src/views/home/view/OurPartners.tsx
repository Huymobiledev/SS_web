/* eslint-disable jsx-a11y/alt-text */
// components/OurPartners.tsx
"use client"; // This is a client component 👈🏽
/* eslint-disable @next/next/no-img-element */
import { Typography, Stack, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/animation";
import { ServiceCard } from "@/components/card";

export default function OurPartners(props: any) {
    const { data } = props;

    const strongBackers = [
        {
            pic: "/assets/images/strongbackers/Frame55.png",
            url: "https://www.cls.global/",
        },
        {
            pic: "/assets/images/strongbackers/Frame54.png",
            url: "https://www.web3port.us/",
        },
        {
            pic: "/assets/images/strongbackers/Frame50.png",
            url: "https://kyber.network/",
        },
        {
            pic: "/assets/images/strongbackers/Frame51.png",
            url: "https://tomochain.com/",
        },
        {
            pic: "/assets/images/strongbackers/Frame49.png",
            url: "https://www.hubglobal.io/",
        },
        {
            pic: "/assets/images/strongbackers/Frame52.png",
            url: "https://funverse.capital/",
        },
    ];

    const partners = [
        {
            url: "https://okara.vn/",
            pic: "/assets/images/partners/okara.png",
        },
        {
            url: "https://www.avax.network/",
            pic: "/assets/images/partners/avalanche.png",
        },
        {
            url: "https://aws.amazon.com/",
            pic: "/assets/images/partners/amazon.png",
        },
        {
            url: "https://www.yieldguild.io/",
            pic: "/assets/images/partners/guild.png",
        },
        {
            url: "http://www.coins.ph/",
            pic: "/assets/images/partners/coins.png",
        },

        {
            url: "https://app.saakuru.com/",
            pic: "/assets/images/partners/saakuru.png",
        },
    ];
    return (
        <Stack
            sx={{
                textAlign: "center",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                display: "flex",
                backgroundColor: "transparent",
                paddingY: {
                    md: "100px",
                    sm: "50px",
                    xs: "50px",
                },
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    //styleName: Header-AllCap;
                    fontFamily: "Montserrat",
                    fontSize: {
                        xs: "18px",
                        sm: "32px",
                    },
                    fontWeight: 900,
                    lineHeight: { xs: "40px", md: "108px" },
                    letterSpacing: "0em",
                    textAlign: "center",
                    color: "white",
                }}
            >
                Our Backers
            </Typography>
            <Grid
                container
                gap={"20px"}
                sx={{
                    width: {
                        md: "50%",
                        lg: "55%",
                        xl: "60%",
                        xs: "90%",
                        sm: "90%",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {strongBackers.map((backer, index) => {
                    return (
                        <Grid
                            onClick={() => {
                                window.open(
                                    backer?.url,
                                    "_blank"
                                );
                            }}
                            key={index}
                            item
                            xs={5} // Chiếm 2 cột trên màn hình nhỏ
                            sm={5}
                            md={3}
                            lg={3}
                            xl={3}
                            sx={{
                                width: "270px", // Set specific width
                                height: "100px", // Set specific height
                                objectFit: "cover",
                                borderRadius: "15px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                transition: "filter 0.3s",
                                ":hover": {
                                    border: '1px solid white',
                                    boxShadow: '0 0 100px rgba(255, 255, 255, 1), 0 0 180px rgba(255, 255, 255, 0.2)' // Glowing effect
                                },
                                img: {
                                    width: "100%",
                                },
                                overflow: "hidden",
                                backgroundColor: 'transparent'
                            }}
                        >
                            <ServiceCard
                                icon={backer.pic}
                                index={index}
                                title={backer.url}
                            />
                        </Grid>
                    );
                })}
            </Grid>
            <Typography
                variant="h1"
                sx={{
                    //styleName: Header-AllCap;
                    fontFamily: "Montserrat",
                    fontSize: {
                        xs: "18px",
                        sm: "32px",
                    },
                    fontWeight: 900,
                    lineHeight: { xs: "40px", md: "108px" },
                    letterSpacing: "0em",
                    textAlign: "center",
                    color: "white",
                }}
            >
                Our Partners
            </Typography>
            <Grid
                container
                gap={"20px"}
                sx={{
                    width: {
                        md: "50%",
                        lg: "55%",
                        xl: "60%",
                        xs: "90%",
                        sm: "90%",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {partners.map((partner, index) => (
                    <Grid
                        onClick={() => {
                            window.open(
                                partner?.url,
                                "_blank"
                            );
                        }}
                        key={index}
                        item
                        xs={5} // Chiếm 2 cột trên màn hình nhỏ
                        sm={5}
                        md={3}
                        lg={3}
                        xl={3}
                        sx={{
                            width: "270px",
                            height: "100px",
                            backgroundColor: "transparent",
                            objectFit: "cover",
                            borderRadius: "15px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transition: "filter 0.3s",
                            ":hover": {
                                border: '1px solid white',
                                boxShadow: '0 0 100px rgba(255, 255, 255, 1), 0 0 180px rgba(255, 255, 255, 0.2)' // Glowing effect
                            },
                            img: {
                                width: "100%",
                            },
                            overflow: "hidden",
                        }}
                    >
                        <ServiceCard
                            icon={partner.pic}
                            index={index}
                            title={partner.url}
                        />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}
