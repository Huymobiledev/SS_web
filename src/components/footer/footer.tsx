import { COLOR } from "@/constant/common";
import { Box, ButtonBase, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Fragment, useState, useEffect, CSSProperties } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { DiscordSvgIcon, FacebookSvgIcon, TeleSvgIcon, XSvgIcon, YoutubeSvgIcon } from "../icons/socials";
import router from 'next/router';
import { noHeaderUrl } from "../header/header";
import { checkUrl, getBackgroundColor } from "@/utils";
import LanguageItem from "./languageItem";
import Link from "next/link";

export default function Footer() {
    const { t } = useTranslation()

    const discord = {
        pic: 'assets/icons/Group 819.svg',
        link: ''
    }

    const facebook = {
        pic: 'assets/icons/Group 820.svg',
        link: ''
    }

    const x = {
        pic: 'assets/icons/Group 821.svg',
        link: ''
    }

    const telegram = {
        pic: 'assets/icons/Group 822.svg',
        link: ''
    }

    const community = [discord, facebook, x, telegram]



    return (
            <Box
                sx={{
                    width: '100%',
                    color: 'white',
                    backgroundColor: '#0B0E11',
                    justifyContent: 'center',
                    overflowX: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    py: 8
                }}
            >
                <Grid container sx={{
                    width: '90%', 
                    maxWidth: '1270px', 
                    justifyContent: 'space-around', 
                    alignItems:'center', 
                    m: 'auto', 
                    }}>
                    <Grid item xs={12} sm={5.5} md={2.5}>
                        <Box sx={{
                            width: '100%',
                            display: 'grid',
                            gridTemplateRows: '60px 100px',
                            'img': {
                                width: '174px',
                                m: {
                                    xs: 'auto',
                                    sm: 0
                                }
                            },
                            height: '160px',
                            justifyContent: {
                                xs: 'center',
                                sm: 'left'
                            },
                            mb: 2

                        }}>
                                <img src='assets/icons/logo_singsing.svg'/>                                
                                <Typography variant="body1" sx={{
                                    //styleName: Mont L14;
                                    fontFamily: 'Montserrat',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    lineHeight: '22px',
                                    letterSpacing: '0px',
                                    textAlign: {xs: 'center', sm: 'left'},
                                }}>
                                    SING SING PTE. LTD
                                    <br/>
                                    Address: 114 Lavender street # 11-83
                                    <br/>
                                    CT Hub 2 Singapore (338729)
                                    <br/>
                                    © SingSing 2021
                                </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={5.5} md={2.5}>
                    <Box sx={{
                            width: '100%',
                            display: 'grid',
                            gridTemplateRows: '60px 100px',
                            'img': {
                                width: '174px',
                                m: {
                                    xs: 'auto',
                                    sm: 0
                                }
                            },
                            height: '160px',
                            justifyContent: {
                                xs: 'center',
                                sm: 'left'
                            },
                            mb: 2

                        }}>
                                <Typography variant="h1" sx={{
                                    //styleName: Mont T18;
                                    fontFamily: 'Montserrat',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    lineHeight: '22px',
                                    letterSpacing: '0px',
                                    textAlign: {xs: 'center', sm: 'left'},
                                }}>
                                    About Us
                                </Typography>
                                <Typography variant="body1" sx={{
                                    //styleName: Mont L14;
                                    fontFamily: 'Montserrat',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    lineHeight: '22px',
                                    letterSpacing: '0px',
                                    textAlign: {xs: 'center', sm: 'left'},
                                }}>
                                    Home
                                    <br/>
                                    About Us
                                    <br/>
                                    Terms
                                    <br/>
                                    Privacy Policy
                                </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={5.5} md={2.5}>
                    <Box sx={{
                            width: '100%',
                            display: 'grid',
                            gridTemplateRows: '60px 100px',
                            'img': {
                                width: '174px',
                                m: {
                                    xs: 'auto',
                                    sm: 0
                                }
                            },
                            height: '160px',
                            justifyContent: {
                                xs: 'center',
                                sm: 'left'
                            },
                            mb: 2

                        }}>
                                <Typography variant="h1" sx={{
                                    //styleName: Mont T18;
                                    fontFamily: 'Montserrat',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    lineHeight: '22px',
                                    letterSpacing: '0px',
                                    textAlign: {xs: 'center', sm: 'left'},
                                }}>
                                    Support Center
                                </Typography>
                                <Typography variant="body1" sx={{
                                    //styleName: Mont L14;
                                    fontFamily: 'Montserrat',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    lineHeight: '22px',
                                    letterSpacing: '0px',
                                    textAlign: {xs: 'center', sm: 'left'},
                                }}>
                                    How to register
                                    <br/>
                                    How to buy and sell
                                    <br/>
                                    How to transfer NFT
                                </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={5.5} md={2.5} sx={{
                        
                    }}>
                        <Stack direction={'row'} sx={{
                            width: '100%',
                            justifyContent: 'space-evenly',
                            maxWidth: '258px',
                            m: 'auto'
                        }}>
                        {community.map((button, index)=>{
                            return(
                                <Link href={button.link} target="_blank" key={index}>
                                    <img src={button.pic}/>
                                </Link>
                            )
                        })}
                        </Stack>
                    </Grid>
                </Grid>
           </Box>

    )
}