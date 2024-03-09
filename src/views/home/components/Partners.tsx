import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";




export default function Partners(props: any) {
    const { data } = props


    const strongBackers = [
        {
            pic: '/assets/images/strongbackers/Frame50.png',
            url: 'https://kyber.network/'
        },
        {
            pic: '/assets/images/strongbackers/Frame51.png',
            url: 'https://tomochain.com/'
        },
        {
            pic: '/assets/images/strongbackers/Frame49.png',
            url: 'https://www.hubglobal.io/'
        },
        {
            pic: '/assets/images/strongbackers/Frame52.png',
            url: 'https://funverse.capital/'
        },
        {
            pic: '/assets/images/strongbackers/Frame54.png',
            url: 'https://capital.viabtc.com/'
        },
    ]

    const partners = [
        {
            url: 'https://okara.vn/'
        },
        {
            url: 'https://aiacademy.edu.vn/home'
        },
        {
            url: 'https://www.oav.edu.in/'
        },
        {
            url: 'https://www.aag.org/'
        },
        {
            url: 'https://www.avax.network/'
        },
        {
            url: 'https://aws.amazon.com/'
        },
        {
            url: 'https://www.yieldguild.io/'
        },
        {
            url: 'http://www.coins.ph/'
        },
        {
            url: 'https://metaone.gg/'
        },
        {
            url: 'https://app.saakuru.com/'
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
            backgroundSize: '100% 100%',
            width: '100%',
        }}>
            <ScrollAnimation animateIn='fadeIn'
                animateOnce={true}>
                <Stack direction={'column'} gap={10} sx={{my: 5}}>
                <Typography variant="h1" sx={{
                    //styleName: Header-AllCap;
                    fontFamily: 'Montserrat',
                    fontSize: {
                        xs: '40px', 
                        sm: '64px', 
                    },
                    fontWeight: 800,
                    lineHeight: {xs: '40px', md: '108px'},
                    letterSpacing: '0em',
                    textAlign: 'center',
                    color: 'black',
                }}>
                    INVESTOR
                </Typography>
                <Grid container sx={{
                    width: '100%',
                    maxWidth: '1040px',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    m: 'auto',

                    'img' : {
                        width: '100%'
                    }
                }}>
                    {strongBackers.map((backer, index) => {
                        return (
                            <Grid key={index} item xs={5.8} sm={2.3} sx={{
                                width: '250px',
                                height: '90px',
                                backgroundColor: 'white',
                                objectFit: 'contain',
                                borderRadius: '15px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mb: 2,
                                boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.48)',
                                transition: 'filter 0.3s',
                                ':hover' : {
                                    filter: 'brightness(0.9)',
                                    
                                }
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
                    },
                    fontWeight: 800,
                    lineHeight: {xs: '40px', md: '108px'},
                    letterSpacing: '0em',
                    textAlign: 'center',
                    color: 'black',
                }}>
                    PARTNERS
                </Typography>
                <Grid container sx={{
                    width: '100%',
                    maxWidth: '2000px',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    m: 'auto',

                    'img' : {
                        width: '90%',
                    }
                }}>
                    {partners.map((partner, index) => {
                        return (
                            <Grid key={index} item xs={5.8} md={2.2} xl={1.1} sx={{
                                width: '250px',
                                height: '90px',
                                backgroundColor: 'white',
                                objectFit: 'cover',
                                borderRadius: '15px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mb: 2,
                                boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.48)',
                                transition: 'filter 0.3s',
                                ':hover' : {
                                    filter: 'brightness(0.9)',
                                    
                                },
                                overflow: 'hidden'
                            }}>
                                <Box >

                                </Box>
                                <Link href={partner.url} target='_blank'>
                                    <img src={`assets/images/partners/Funverse_Captial_1-${index}.png`}/>
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