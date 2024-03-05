import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";



export default function FamousSingers(props: any) {
    const { data } = props
    const group1 = [
        {
            name: 'NHU QUYNH',
            photo: '/assets/images/singers/group1/20220816-SingSing-AppMockupMobile-MicBuy 1.png',
            fl: '388K',
        },
        {
            name: 'TUAN HUNG',
            photo: '/assets/images/singers/group1/20220816-SingSing-AppMockupMobile-MicBuy 1-1.png',
            fl: '7.5M',
        },
        {
            name: 'LK',
            photo: '/assets/images/singers/group1/20220816-SingSing-AppMockupMobile-MicBuy 1-2.png',
            fl: '955K',
        },
        {
            name: 'B-RAY',
            photo: '/assets/images/singers/group1/20220816-SingSing-AppMockupMobile-MicBuy 1-3.png',
            fl: '4.2M',
        }
    ]

    const group2 = [
        {
            name: 'DATMANIAC',
            photo: '/assets/images/singers/group2/20220816-SingSing-AppMockupMobile-MicBuy 1.png',
            fl: '250K',
        },
        {
            name: 'MASEW',
            photo: '/assets/images/singers/group2/20220816-SingSing-AppMockupMobile-MicBuy 1-1.png',
            fl: '4.1M',
        },
        {
            name: 'ANDIEZ',
            photo: '/assets/images/singers/group2/20220816-SingSing-AppMockupMobile-MicBuy 1-2.png',
            fl: '246.6K',
        },
        {
            name: 'SEACHAIN',
            photo: '/assets/images/singers/group2/20220816-SingSing-AppMockupMobile-MicBuy 1-3.png',
            fl: '572.2K',
        }
    ]

    const group3 = [
        {
            name: 'HIEUTHUHAI',
            photo: '/assets/images/singers/group3/20220816-SingSing-AppMockupMobile-MicBuy 1.png',
            fl: '1M',
        },
        {
            name: 'PHAO',
            photo: '/assets/images/singers/group3/20220816-SingSing-AppMockupMobile-MicBuy 1-1.png',
            fl: '1.3M',
        },
        {
            name: 'W/N',
            photo: '/assets/images/singers/group3/20220816-SingSing-AppMockupMobile-MicBuy 1-2.png',
            fl: '1.1M',
        },
        {
            name: 'EMMA',
            photo: '/assets/images/singers/group3/20220816-SingSing-AppMockupMobile-MicBuy 1-3.png',
            fl: '2.2M',
        }
    ]

    const group4 = [
        {
            name: 'RIGHT',
            photo: '/assets/images/singers/group4/20220816-SingSing-AppMockupMobile-MicBuy 1.png',
            fl: '47K',
        },
        {
            name: 'DINHMANH NINH',
            photo: '/assets/images/singers/group4/20220816-SingSing-AppMockupMobile-MicBuy 1-1.png',
            fl: '275.4K',
        },
        {
            name: 'DUONGTRAN NGHIA',
            photo: '/assets/images/singers/group4/20220816-SingSing-AppMockupMobile-MicBuy 1-2.png',
            fl: '26.4K',
        },
        {
            name: 'NGOC KHUE',
            photo: '/assets/images/singers/group4/20220816-SingSing-AppMockupMobile-MicBuy 1-3.png',
            fl: '51.2K',
        }
    ]

    const famousSingers = [group1, group2, group3, group4]

    return (
        <Box
        sx={{
            textAlign: 'center',
            alignItems: 'center',
            width: '100%',
            justifyContent:'center',
            display: 'flex',
            mt: {md: 20, lg: 20, xl: 0}
        }}>
            <Stack direction={'column'} mb={5}>
                <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut' animateOnce={true}>
                    <Typography sx={{
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
                    textAlign: 'center',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',   
                    mb: {xs: 2, xl: 10}
                }}>
                    FAMOUS SINGERS
                </Typography>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut' delay={200} animateOnce={true}>
                    <Grid container sx={{justifyContent: 'space-between', m: 'auto', width: '98%', display: 'flex',maxWidth: '2390px'}}>
                        {famousSingers.map((group, index) => {
                            return (
                                <Grid item xs={12} md={6} key={index} >
                                    <Grid container sx={{justifyContent: 'space-between', m: 'auto', width: '100%', display: 'flex'}}>
                                        {group.map((singer) => {
                                            return (
                                                <Grid item xs={3} sx={{display: 'flex'}} key={index}>
                                                    <Box sx={{
                                                        width: '95%',
                                                        maxWidth: '290px',
                                                        minHeight: '150px',
                                                        maxHeight: '370px',
                                                        backgroundColor: '#99999921',
                                                        m: 'auto',
                                                        mt: 1.5,
                                                        borderBottomLeftRadius: {xs: '13px', lg: '30px'},
                                                        borderBottomRightRadius: {xs: '13px', lg: '30px'},
                                                        borderTopLeftRadius: '60px',
                                                        borderTopRightRadius: '60px',
                                                        'img' : {
                                                            width: '100%',
                                                        },
                                                        
                                                    }}>
                                                        <img src={singer.photo}/>
                                                        <Typography variant="h1" sx={{
                                                            fontFamily: 'Montserrat',
                                                            fontSize: {xs: '9px', lg: '15.6px'},
                                                            fontWeight: 700,
                                                            lineHeight: {xs: '11px', lg: '22px'},
                                                            letterSpacing: '0em',
                                                            textAlign: 'center',
                                                            color: 'white',
                                                            mt: .5
                                                        }}>
                                                            {singer.name}
                                                        </Typography>
                                                        <Typography variant={'body1'} sx={{
                                                            fontFamily: 'Montserrat',
                                                            fontSize: {xs: '16px', lg: '22.5px'},
                                                            fontWeight: 900,
                                                            lineHeight: {xs: '19.5px', lg: '28px'},
                                                            letterSpacing: '0em',
                                                            textAlign: 'center',
                                                            color: '#FFC000'
                                                        }}>
                                                            {singer.fl}
                                                        </Typography>
                                                        <Typography variant={'body1'} sx={{
                                                            fontFamily: 'Montserrat',
                                                            fontSize: {xs: '10px', md: '14.5px', lg: '19.5'},
                                                            fontWeight: 500,
                                                            lineHeight: {xs: '12px', md: '24.3px'},
                                                            letterSpacing: '0em',
                                                            textAlign: 'center',
                                                            color: 'white',
                                                            mb: 1

                                                        }}>
                                                            Followers
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Typography variant={'h1'} sx={{
                        fontFamily: 'Montserrat',
                        fontSize: {xs: '20px', md : '55px'},
                        fontWeight: 800,
                        lineHeight: {xs: '24px', md: '57px'},
                        letterSpacing: '0em',
                        textAlign: 'center',
                        mt: {
                            xs: 1, 
                            md: 3
                        },
                        'span:first-child' : {
                            color: '#00D668'
                        },
                        'span:last-child' : {
                            color: 'white'
                        }
                    }}>
                        <span>
                        36,000,000+&nbsp;
                        </span>
                        <span>
                        Social followers
                        </span>
                    </Typography>
                </ScrollAnimation>
            </Stack>            
        </Box>
    )
}