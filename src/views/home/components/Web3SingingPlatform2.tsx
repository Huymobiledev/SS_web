import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { transform } from "next/dist/build/swc";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export default function Web3SingingPlatform2(props: any) {
    const [picIndex, setPicIndex] = useState(0)
    const [startX, setStartX] = useState(0);
    const steps = [
        {
            pic: 'assets/images/web3singingplatform2/step1.png',
            detail: ''
        },
        {
            pic: 'assets/images/web3singingplatform2/step2.png',
            detail: 'sing a song'
        },
        {
            pic: 'assets/images/web3singingplatform2/step3.png',
            detail: 'share on X to get more bonus based on successful referral count'
        },
        {
            pic: 'assets/images/web3singingplatform2/step4.png',
            detail: 'singing contest'
        }
    ]

    return (
        <Box
            sx={{
                width: '100%',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                overflow: "hidden"
        }}>
            <ScrollAnimation animateIn="slideInLeft" duration={.5} animateOnce={true}>

            <Stack direction={'column'} sx={{
                width: '100%', 
                maxWidth: '99vw',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                m:'auto',
                'button' : {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    p: 0,
                },
                overflow: 'hidden'
            }}>
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontSize: {
                        xs: '40px', 
                        sm: '64px', 
                    },
                    fontWeight: 800,
                    lineHeight: {xs: '54px', md: '108px'},
                    textAlign: 'center',
                    color: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',  
                    mt: 5,
                    mb: 0
                }}>
                    WEB3 SINGING PLATFORM
                </Typography>
                    <Grid container sx={{
                        width: {xs: '50vw' ,md: '80vw', xl: '100vw'},
                        maxWidth: '1400px',
                        minWidth: '300px',
                        mx: 'auto',
                        justifyContent: {xs: 'space-between', md: 'space-between'},
                        '.bigscreen' : {
                            objectFit: 'contain',
                            MaxWidth: '228px',
                            height: '462px',
                            width: '99%',
                            maxWidth: '161px'
                        }, 
                        '.bigscreenDetail' : {
                            fontFamily: 'Montserrat',
                            fontSize: {md: '12px', lg: '14px', xl: '20'},
                            fontWeight: 600,
                            lineHeight: {md: '21px', lg: '32px' ,xl: '41px'},
                            textAlign: 'center',
                            color: 'black',
                            width: '100%',
                            textTransform: 'uppercase'
                        },
                        '.detail' : {
                            fontFamily: 'Montserrat',
                            fontSize: '16px',
                            fontWeight: 600,
                            lineHeight: '20px',
                            letterSpacing: '0em',
                            textAlign: 'center',
                            color: 'black',
                            textTransform: 'uppercase',

                        },
                        '.num' : {
                            fontFamily: 'Montserrat',
                            fontSize: '233px',
                            fontWeight: 900,
                            letterSpacing: '0em',
                            textAlign: 'center',
                            position: 'absolute',
                            top: '-40%',
                            left: '-40%',
                            zIndex: -1,
                            color: '#fff'
                        },
                        display: 'flex',
                        '.bigscreenArrow' : {
                            width: '100%',
                            minWidth: '20px',
                            maxWidth: '40px'
                        },
                        '.arrow' : {
                            'img' : {
                                width: '50%'
                            },
                            height: '100%'
                        },
                        overflow: 'hidden',
                    }}>
                        
                        <Grid item xs={10} sx={{
                            display: {
                                xs: 'flex',
                                md: 'none'
                            },
                            'img': {
                                width: '100%',
                                my: 'auto'
                            },
                            mx: 'auto',
                            overflow: 'hidden'
                        }}>
                            <Stack direction={"column"} gap={5} sx={{
                                width: '100%',
                                maxWidth: '310px',
                                display: 'flex',
                                alignItems: 'center',
                                'img' : {
                                    width: '90%',
                                    maxWidth: '280px'
                                },
                                overflow: 'hidden'
                            }}>
                                {steps.map((value, index) => {
                                    return (
                                        <Stack key={index} gap={2} direction={'column'} sx={{
                                            width: '100%',
                                            alignItems: 'center',
                                            position: 'relative',
                                            display: 'flex',
                                            overflow: 'hidden',
                                            'img' : {
                                                my: 'auto'
                                            }
                                        }}>
                                            <img src={value.pic} className="current"/>
                                            {value.detail != '' && <Typography variant="body1" className="detail">
                                                {value.detail}
                                            </Typography>}
                                            {index < 3 && <img style={{
                                                transform: 'rotate(90deg)',
                                                height: '100px'
                                            }} src='assets/icons/Polygon_2.svg'/>}
                                        </Stack>
                                    )
                                })}
                            </Stack>        
                        </Grid>

                        <Grid item md={2.5} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            position: 'relative'
                        }}>
                            <Box className='num' sx={{                                
                            }}>
                                1
                            </Box>
                            <img className="bigscreen" src='assets/images/web3singingplatform2/step1.png'/>
                            <Box sx={{
                                width: '100%',
                                background: 'radial-gradient(50% 50% at 50% 50%, #00000070 0%, rgba(0, 0, 0, 0) 100%)',
                                height: '17px',
                                mt: -15,
                                mb: 2
                                
                            }}></Box>
                            <Typography className='bigscreenDetail' sx={{
                                
                            }}>
                            
                            </Typography>
                        </Grid>
                        <Grid item md={0.5} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            my: 'auto'
                        }}>
                            
                            <img className='bigscreenArrow' src='assets/icons/Polygon_2.svg'/>
                        </Grid>
                        <Grid item md={2.5} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            position: 'relative'
                        }}>
                            <Box className='num' sx={{                                
                            }}>
                                2
                            </Box>
                            <img className="bigscreen" src='assets/images/web3singingplatform2/step2.png'/>
                            <Box sx={{
                                width: '100%',
                                background: 'radial-gradient(50% 50% at 50% 50%, #00000070 0%, rgba(0, 0, 0, 0) 100%)',
                                height: '17px',
                                mt: -7,
                                mb: 2
                                
                            }}></Box>
                            <Typography className='bigscreenDetail' sx={{
                                
                            }}>
                            SING A SONG
                            </Typography>
                        </Grid>
                        <Grid item md={0.5} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            my: 'auto'
                        }}>
                            <img className='bigscreenArrow' src='assets/icons/Polygon_2.svg'/>
                        </Grid>
                        <Grid item md={2.5} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            position: 'relative'
                        }}>
                            <Box className='num' sx={{                                
                            }}>
                                3
                            </Box>
                            <img className="bigscreen" src='assets/images/web3singingplatform2/step3.png'/>
                            <Box sx={{
                                width: '100%',
                                background: 'radial-gradient(50% 50% at 50% 50%, #00000070 0%, rgba(0, 0, 0, 0) 100%)',
                                height: '17px',
                                mt: -15,
                                mb: 2
                                
                            }}></Box>
                            <Typography className='bigscreenDetail' sx={{
                                
                            }}>
                            share on X to get more bonus based on successful referral count
                            </Typography>
                        </Grid>
                        <Grid item md={0.5} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            my: 'auto'
                        }}>
                            <img className='bigscreenArrow' src='assets/icons/Polygon_2.svg'/>
                        </Grid>
                        <Grid item md={2.5} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            position: 'relative',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Box className='num' sx={{                                
                            }}>
                                4
                            </Box>
                            <img className="bigscreen" src='assets/images/web3singingplatform2/step4.png'/>
                            <Box sx={{
                                width: '100%',
                                background: 'radial-gradient(50% 50% at 50% 50%, #00000070 0%, rgba(0, 0, 0, 0) 100%)',
                                height: '17px',
                                mt: -7,
                                mb: 2
                                
                            }}></Box>
                            <Typography className='bigscreenDetail' sx={{
                                
                            }}>
                            singing contest
                            </Typography>
                        </Grid>
                    </Grid>
            </Stack>
            </ScrollAnimation>
       </Box>

    );
}