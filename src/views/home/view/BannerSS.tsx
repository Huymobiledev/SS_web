/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { makeStyles, Stack, Theme, Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import { color } from "framer-motion";
import Link from "next/link";
export default function BannerSS(props: any) {
    const Header = () => {
        return (
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100vw",
                    justifyContent: "space-between",
                    alignItems:"center",
                    p: 1,
                }}
            >
                <Stack
                    sx={{
                        img: {
                            width: {
                                xl:"120px",
                                xs:'100px'
                            },
                            height: "100%",
                            objectFit: "contain",
                            position: "relative",
                        },
                        textAlign: "center",
                        justifyItems: "left",
                        ml: 2,
                    }}
                >
                    <Link href="/">
                        <img src="assets/icons/logo-white.png" alt="logo" />
                    </Link>
                </Stack>
                <Stack
                    sx={{
                        textAlign: "center",
                        mr: 1,
                        fontSize: {
                            xl:20,
                            xs:14
                        },
                        color: "white",
                        fontWeight: "700",
                        border: "1px solid transparent", // Use transparent border for layout
                        borderRadius: "23px",
                        backgroundClip: "padding-box", // Make sure the gradient doesn't overlap the border
                    }}
                >
                    <Link href="https://singsing.gitbook.io/singsing/welcome/singsing-summary">{`White paper`.toUpperCase()}</Link>
                </Stack>
            </Stack>
        );
    };
    return (
        <Stack
            sx={{
                width: "100vw",
                height: "100vh",
                // backgroundColor: "rgba(225, 55, 55, 0.1)",
                flexDirection: "column",
                position: "absolute",
                top: 0,
            }}
        >
            {Header()}
            <Stack
                height={"100%"}
                width={"100vw"}
                sx={{
                    display: "flex",
                    flexDirection: {
                        xl: "row",
                        md:'row',
                        xs: 'column',
                    },
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                }}
            >
                <Typography
                    sx={{
                        fontSize: {
                            xs: 55,
                            md: 90,
                            xl: 120
                        },
                        color: "white",
                        fontWeight: 800,
                        whiteSpace: "pre-line",
                        display: {
                            xl: 'flex',
                            md: 'flex',
                            xs: 'none'
                        },
                        flexDirection: "column",
                        alignItems: "flex-start",
                        ml: "5%",
                        span: {
                            fontSize: {
                                xl: 32,
                                md: 24,
                                xs: 18
                            },
                            color: "white",
                            fontWeight: 500,
                            whiteSpace: "pre-line",
                        },
                    }}
                >
                    {"singSing".toUpperCase()}
                    <span>
                        {"Platform for onboarding \nweb2 users to web3 social gaming"}
                    </span>
                </Typography>
                <Stack
                    sx={{
                        height: {
                            xl: "40vh",
                            md: "40vh",
                            xs: '30vh'
                        },
                    }}
                >
                    {/* <GameCanvas /> */}
                </Stack>
                <Typography
                    sx={{
                        fontSize: {
                            xs: 55,
                            md: 60,
                            xl: 90
                        },
                        color: "white",
                        fontWeight:800,
                        whiteSpace: "pre-line",
                        width: "100%",
                        display: {
                            xl: 'none',
                            md: 'none',
                            xs: 'flex'
                        },
                        mb: 10,
                        flexDirection: "column",
                        alignItems: "center",
                        span: {
                            fontSize: {
                                xl: 24,
                                md: 24,
                                xs: 18
                            },
                            color: "white",
                            fontWeight: 700,
                            whiteSpace: "pre-line",
                            textAlign: "center",
                        },
                    }}
                >
                    {"singSing".toUpperCase()}
                    <span>
                        {"Platform for onboarding\nweb2 users to web3 social gaming"}
                    </span>
                </Typography>
            </Stack>
        </Stack>
    );
}
