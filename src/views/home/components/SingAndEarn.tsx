import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { transform } from "next/dist/build/swc";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export default function SingAndEarn(props: any) {
    const [picIndex, setPicIndex] = useState(0)
    const [startX, setStartX] = useState(0);
    const steps = [
        {
            pic: 'assets/images/singandearn/step1.png',
            detail: ''
        },
        {
            pic: 'assets/images/singandearn/step2.png',
            detail: 'SING A SONG'
        },
        {
            pic: 'assets/images/singandearn/step3.png',
            detail: 'AI SCORING'
        },
        {
            pic: 'assets/images/singandearn/step4.png',
            detail: 'WIN REWARDS'
        }
    ]

    const handleTouchStart = (event: any) => {
        setStartX(event.touches[0].clientX);
      };
    
      const handleTouchEnd = (event: any) => {
        const deltaX = event.changedTouches[0].clientX - startX;
    
        if (deltaX > 0) {
          // Swipe right
        
        } else if (deltaX < 0) {
          // Swipe left
          
        }
      };

    return (
        <Box
            sx={{
                width: '100%',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                maxHeight: '100vh'
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
            }}>
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontSize: {
                        xs: '40px', 
                        sm: '64px', 
                    },
                    fontWeight: 800,
                    lineHeight: {xs: '40px', md: '108px'},
                    textAlign: 'center',
                    color: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',  
                    mt: 5,
                    mb: 0
                }}>
                    SING AND EARN
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
                            width: '99%'
                        }, 
                        height: '550px',
                        '.bigscreenDetail' : {
                            fontFamily: 'Montserrat',
                            fontSize: {md: '12px', lg: '21px', xl: '24px'},
                            fontWeight: 600,
                            lineHeight: {md: '24px', lg: '41px'},
                            textAlign: 'center',
                            color: 'black',
                            width: '100%',
                        },
                        '.detail' : {
                            //styleName: Title;
                            fontFamily: 'Montserrat',
                            fontSize: '20px',
                            fontWeight: 600,
                            lineHeight: '29px',
                            letterSpacing: '0em',
                            textAlign: 'center',
                            color: 'black'
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
                            width: '30%',

                            
                        },
                        '.arrow' : {
                            'img' : {
                                width: '50%'
                            },
                            height: '100%'
                        }
                        
                        
                        
                    }}>
                        <Grid item xs={1.7}  sx={{
                            my: 'auto',
                            display: {
                                xs: 'flex',
                                md: 'none'
                            },
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            visibility: picIndex == 0 ? 'hidden' : 'unset',
                            
                        }}>
                            <Button className="arrow" sx={{width: '100%'}} onClick={()=>{setPicIndex(picIndex -1)}}>
                                <img src='assets/icons/Polygon_2.svg' style={{transform: 'rotate(180deg)'}}/>
                            </Button>
                        </Grid>
                        <Grid item xs={6} sx={{
                            display: {
                                md: 'none'
                            },
                            height: '100%',
                            'img': {
                                width: '100%',
                                my: 'auto'
                            },
                        }}>
                            <Box sx={{
                                width: '100%',
                                height: '462px',
                                alignItems: 'center',
                                position: 'relative',
                                display: 'flex',
                                '.prev' : {
                                    position: 'absolute',
                                    right: '30%',
                                    zIndex: -1,
                                    transform: 'scale(0.85)',
                                    opacity: 0.5,
                                    transition: 'transform 0.3s, opacity 0.3s',
                                    width: '100%'
                                },
                                '.next' : {
                                    position: 'absolute',
                                    left: '30%',
                                    zIndex: -1,
                                    transform: 'scale(0.85)',
                                    opacity: 0.5,
                                    transition: 'transform 0.3s, opacity 0.3s',
                                },
                                'img' : {
                                    width: '100%',
                                    maxWidth: {sm: '280px', md: '0'}
                                }
                            }}>
                                <TransitionGroup>
                                
                                        <img src={steps[picIndex].pic} className="current" alt="Current" />
                                </TransitionGroup>
                            
                            </Box>
                            <Box sx={{
                                width: '100%',
                                background: 'radial-gradient(50% 50% at 50% 50%, #00000070 0%, rgba(0, 0, 0, 0) 100%)',
                                height: '17px',
                                mt: -5,
                                mb: 2
                                
                            }}>

                            </Box>
                            <Typography variant="body1" className="detail">
                                {steps[picIndex].detail}
                            </Typography>
                        </Grid>

                        <Grid item xs={2} sx={{
                            display: {
                                xs: 'flex',
                                md: 'none'
                            },
                            my: 'auto',
                            visibility: picIndex == 3 ? 'hidden' : 'unset',
                            
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}>
                            <Button className="arrow" sx={{width: '100%'}} onClick={()=>{setPicIndex(picIndex + 1)}}>
                                <img src='assets/icons/Polygon_2.svg' style={{}}/>
                            </Button>
                                                      
                        </Grid>

                        <Grid item md={1.7} sx={{
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
                            <img className="bigscreen" src='assets/images/singandearn/step1.png'/>
                            <Typography className='bigscreenDetail' sx={{
                                
                            }}>
                            
                            </Typography>
                        </Grid>
                        <Grid item md={1.7} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            my: 'auto'
                        }}>
                            
                            <img className='bigscreenArrow' src='assets/icons/Polygon_2.svg'/>
                        </Grid>
                        <Grid item md={1.7} sx={{
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
                            <img className="bigscreen" src='assets/images/singandearn/step2.png'/>
                            <Typography className='bigscreenDetail' sx={{
                                
                            }}>
                            SING A SONG
                            </Typography>
                        </Grid>
                        <Grid item md={1.7} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            my: 'auto'
                        }}>
                            <img className='bigscreenArrow' src='assets/icons/Polygon_2.svg'/>
                        </Grid>
                        <Grid item md={1.7} sx={{
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
                            <img className="bigscreen" src='assets/images/singandearn/step3.png'/>
                            <Typography className='bigscreenDetail' sx={{
                                
                            }}>
                            AI SCORING
                            </Typography>
                        </Grid>
                        <Grid item md={1.7} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            my: 'auto'
                        }}>
                            <img className='bigscreenArrow' src='assets/icons/Polygon_2.svg'/>
                        </Grid>
                        <Grid item md={1.7} sx={{
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
                            <img className="bigscreen" src='assets/images/singandearn/step4.png'/>
                            <Typography className='bigscreenDetail' sx={{
                                
                            }}>
                            WIN REWARDS
                            </Typography>
                        </Grid>
                    </Grid>
            </Stack>
            </ScrollAnimation>
       </Box>

    );
}