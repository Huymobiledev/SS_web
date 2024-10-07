/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { makeStyles, Stack, Theme, Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import { color } from "framer-motion";
import Link from "next/link";
import GameCanvas from "./components/gameAnimation";
export default function BannerSS(props: any) {
    const Header = () => {
        return (
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100vw",
                    justifyContent: "space-between",
                    p: 1,
                }}
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
                        px: 2,
                        py: 1,
                        textAlign: "center",
                        justifyItems: "left",
                        mr: 2,
                        fontSize: 12,
                        color: "white",
                        fontWeight: "800",
                        border: "1px solid transparent", // Use transparent border for layout
                        borderRadius: "23px",
                        background: "linear-gradient(to left, #350af5, #2f024d)", // Set the gradient as background
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
                            xs: 24,
                            md: 60,
                            xl: 90
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
                                xl: 20,
                                md: 14,
                                xs: 12
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
                            xl: "80vh",
                            md: "60vh",
                            xs: '50vh'
                        },
                        width: "100%",
                    }}
                >
                    <GameCanvas />
                </Stack>
                <Typography
                    sx={{
                        fontSize: {
                            xs: 55,
                            md: 60,
                            xl: 90
                        },
                        color: "white",
                        fontWeight: 800,
                        whiteSpace: "pre-line",
                        width: "100%",
                        display: {
                            xl: 'none',
                            md: 'none',
                            xs: 'flex'
                        },
                        mb: 5,
                        flexDirection: "column",
                        alignItems: "center",
                        span: {
                            fontSize: {
                                xl: 16,
                                md: 16,
                                xs: 16
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
