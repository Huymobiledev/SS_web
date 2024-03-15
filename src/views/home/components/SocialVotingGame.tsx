import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { transform } from "next/dist/build/swc";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Image from 'next/image'

export default function SocialVotingGame(props: any) {
    const [picIndex, setPicIndex] = useState(0)
    const [startX, setStartX] = useState(0);
    const steps = [
        {
            pic: 'assets/images/socialvotinggame/step1.png',
            detail: 'VOTING USING SING TOKEN'
        },
        {
            pic: 'assets/images/socialvotinggame/step2.png',
            detail: 'VOTE FOR YOUR SINGER'
        },
        {
            pic: 'assets/images/socialvotinggame/step3.png',
            detail: "SHARE THE SINGER'S VOTING LINK TO X TO ENCOURAGE VOTING"
        },
        {
            pic: 'assets/images/socialvotinggame/step4.png',
            detail: 'CLAIM REWARDS IF YOUR CHOSEN SINGERS WIN'
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
            <ScrollAnimation animateIn='slideInRight' duration={.5} animateOnce={true}>

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
                    SOCIAL VOTING GAME
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
                            width: '80%'
                        }, 
                        height: '550px',
                        '.bigscreenDetail' : {
                            fontFamily: 'Montserrat',
                            fontSize: {md: '12px', lg: '14px', xl: '20'},
                            fontWeight: 600,
                            lineHeight: {md: '24px', lg: '32px' ,xl: '41px'},
                            textAlign: 'center',
                            color: 'black',
                        },
                        '.detail' : {
                            //styleName: Title;
                            fontFamily: 'Montserrat',
                            fontSize: '14px',
                            fontWeight: 600,
                            lineHeight: '20px',
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
                            width: '100%',

                        },
                        '.arrow' : {
                            'img' : {
                                width: '50%'
                            },
                            height: '100%'
                        }
                        

                    }}>
                        <Grid item xs={2}  sx={{
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
                                <img alt='' src='assets/icons/Polygon_2.svg' style={{transform: 'rotate(180deg)'}}/>
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
                                
                                'img' : {
                                    width: '100%',
                                    maxWidth: {sm: '280px', md: '0'}
                                }
                            }}>
                                <TransitionGroup>


                                        <img alt='' src={steps[picIndex].pic} className="current"/>

                                
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
                                <img alt='' src='assets/icons/Polygon_2.svg' style={{}}/>
                            </Button>
                                                      
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
                            <img alt='' className="bigscreen" src='assets/images/socialvotinggame/step1.png'/>
                            <Box sx={{
                                width: '100%',
                                background: 'radial-gradient(50% 50% at 50% 50%, #00000070 0%, rgba(0, 0, 0, 0) 100%)',
                                height: '17px',
                                mt: -7,
                                mb: 2
                            }}>

                            </Box>
                            <Typography className='bigscreenDetail' sx={{
                                
                            }}>
                            VOTING USING SING TOKEN
                            </Typography>
                        </Grid>
                        <Grid item md={0.5} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            my: 'auto'
                        }}>
                            
                            <img alt='' className='bigscreenArrow' src='assets/icons/Polygon_2.svg'/>
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
                            <img alt='' className="bigscreen" src='assets/images/socialvotinggame/step2.png'/>
                            <Box sx={{
                                width: '100%',
                                background: 'radial-gradient(50% 50% at 50% 50%, #00000070 0%, rgba(0, 0, 0, 0) 100%)',
                                height: '17px',
                                mt: -7,
                                mb: 2
                                
                            }}>

                            </Box>
                            <Typography className='bigscreenDetail' sx={{
                                
                            }}>
                            VOTE FOR YOUR SINGER
                            </Typography>
                        </Grid>
                        <Grid item md={0.5} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            my: 'auto'
                        }}>
                            <img alt='' className='bigscreenArrow' src='assets/icons/Polygon_2.svg'/>
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
                            <img alt='' className="bigscreen" src='assets/images/socialvotinggame/step3.png'/>
                            <Box sx={{
                                width: '100%',
                                background: 'radial-gradient(50% 50% at 50% 50%, #00000070 0%, rgba(0, 0, 0, 0) 100%)',
                                height: '17px',
                                mt: -7,
                                mb: 2
                                
                            }}>

                            </Box>
                            <Typography className='bigscreenDetail' sx={{
                         
                                
                            }}>
                            SHARE THE SINGER&apos;S VOTING LINK TO X TO ENCOURAGE VOTING
                            </Typography>
                        </Grid>
                        <Grid item md={0.5} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            my: 'auto'
                        }}>
                            <img alt='' className='bigscreenArrow' src='assets/icons/Polygon_2.svg'/>
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
                            <img alt='' className="bigscreen" src='assets/images/socialvotinggame/step4.png'/>
                            <Box sx={{
                                width: '100%',
                                background: 'radial-gradient(50% 50% at 50% 50%, #00000070 0%, rgba(0, 0, 0, 0) 100%)',
                                height: '17px',
                                mt: -7,
                                mb: 2
                                
                            }}>

                            </Box>
                            <Typography className='bigscreenDetail' sx={{
                                
                            }}>
                            CLAIM REWARDS IF YOUR CHOSEN SINGER WINS
                            </Typography>
                        </Grid>
                    </Grid>
            </Stack>
            </ScrollAnimation>

       </Box>

    );
}