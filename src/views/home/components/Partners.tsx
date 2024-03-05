import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";




export default function Partners(props: any) {
    const { data } = props


    const strongBackers = [
        {
            pic: '/assets/images/strongbackers/Frame 49.png',
            url: 'https://www.hubglobal.io/'
        },
        {
            pic: '/assets/images/strongbackers/Frame 50.png',
            url: 'https://kyber.network/'
        },
        {
            pic: '/assets/images/strongbackers/Frame 51.png',
            url: 'https://tomochain.com/'
        },
        {
            pic: '/assets/images/strongbackers/Frame 52.png',
            url: 'https://funverse.capital/'
        },
        {
            pic: '/assets/images/strongbackers/Frame 53.png',
            url: 'https://funverse.capital/'
        },
        {
            pic: '/assets/images/strongbackers/Frame 54.png',
            url: 'https://funverse.capital/'
        },
    ]

    const partners = [
        {
            pic: '/assets/images/partners/Frame 49.png',
            url: 'https://okara.vn/'
        },
        {
            pic: '/assets/images/partners/Frame 50.png',
            url: 'http://www.vcpmc.org/'
        },
        {
            pic: '/assets/images/partners/Frame 51.png',
            url: 'https://aiacademy.edu.vn/home'
        },
        {
            pic: '/assets/images/partners/Frame 52.png',
            url: 'https://www.verichains.io/'
        },
        {
            pic: '/assets/images/partners/Frame 59.png',
            url: 'https://aws.amazon.com/'
        },
        {
            pic: '/assets/images/partners/Frame 60.png',
            url: 'https://mcv.com.vn/'
        },
    ]

    return (
        <Box 
        sx={{
            textAlign: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            mb: '20px',
            justifyContent:'center',
            background: {
                sm: `url(/assets/background/bg-howtoplay.png) no-repeat`, 
                xs: `url(/assets/background/bg-m-howtoplay.png)`
            },
            backgroundSize: '100% 100%',
            width: '100%',
            backgroundPositionX: 100
        }}>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' animateOnce={true}>
                <Stack direction={'column'} gap={10} sx={{my: 5}}>
                <Typography variant="h1" sx={{
                    //styleName: Header-AllCap;
                    fontFamily: 'Montserrat',
                    fontSize: {
                        xs: '40px', 
                        sm: '64px', 
                        md: '90px', 
                        lg: '114px',
                        xl: '128px'
                    },
                    fontWeight: 800,
                    lineHeight: {xs: '40px', md: '108px'},
                    letterSpacing: '0em',
                    textAlign: 'center',
                    color: 'white',
                }}>
                    STRONG BACKERS
                </Typography>
                <Grid container sx={{
                    width: '100%',
                    maxWidth: '1040px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    m: 'auto',

                    'img' : {
                        width: '100%'
                    }
                }}>
                    {strongBackers.map((backer, index) => {
                        return (
                            <Grid key={index} item xs={6} sm={4} sx={{
                                width: '100%',
                                mb: 2
                            }}>
                                <Link href={backer.url} target="_blank">
                                    <img src={backer.pic}/>
                                </Link>
                                
                            </Grid>
                        )
                    })}
                </Grid>
                <Typography variant="h1" sx={{
                    //styleName: Header-AllCap;
                    fontFamily: 'Montserrat',
                    fontSize: {
                        xs: '40px', 
                        sm: '64px', 
                        md: '90px', 
                        lg: '114px',
                        xl: '128px'
                    },
                    fontWeight: 800,
                    lineHeight: {xs: '40px', md: '108px'},
                    letterSpacing: '0em',
                    textAlign: 'center',
                    color: 'white',
                }}>
                    PARTNERS
                </Typography>
                <Grid container sx={{
                    width: '100%',
                    maxWidth: '1040px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    m: 'auto',

                    'img' : {
                        width: '100%',
                        mb: 2
                    }
                }}>
                    {partners.map((partner, index) => {
                        return (
                            <Grid key={index} item xs={6} sm={4} sx={{
                                width: '100%'
                            }}>
                                <Link href={partner.url} target='_blank'>
                                    <img src={partner.pic}/>
                                </Link>
                                
                            </Grid>
                        )
                    })}
                </Grid>
                </Stack>
            </ScrollAnimation>
        </Box>
    )
}