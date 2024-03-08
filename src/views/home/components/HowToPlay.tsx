import { Container, Typography } from "@mui/material";
import { Fragment, useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {Stack, Box, Grid} from "@mui/material";
import Link from "next/link";
import {Button} from "@mui/material";
import {useSpring} from 'react-spring';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function HowToPlay() {

    const steps = [
        {
            pic: 'assets/images/howtoplay/step1.png',
            detail: '1. EQUIP A MICROPHONE'
        },
        {
            pic: 'assets/images/howtoplay/step2.png',
            detail: '2. CHOOSE A SONG'
        },
        {
            pic: 'assets/images/howtoplay/step3.png',
            detail: '3. START TO SING'
        },
        {
            pic: 'assets/images/howtoplay/step4.png',
            detail: '4. GET REWARDS'
        }
    ]

    const [picIndex, setPicIndex] = useState(0)

    return (
        <Box 
        id='howtoplay'
        sx={{
            textAlign: 'center',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 0,
            width: '100%',
            background: 'linear-gradient(160deg, rgba(33,17,41,1) 0%, rgba(11,14,17,1) 37%, rgba(255,192,0,0.2) 63%, rgba(11,14,17,1) 100%)',
            backgroundSize: '100% 100%',
            minHeight: '600px',
            maxHeight: '100vh'
        }}
        >
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' animateOnce={true}>
                <Stack gap={9} my={2} sx={{width: '100%'}}>

                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontSize: {
                        xs: '40px', 
                        sm: '64px', 
                        md: '95px', 
                        lg: '100px',
                        xl: '128px'
                    },
                    fontWeight: 800,
                    lineHeight: {xs: '40px', md: '108px'},
                    textAlign: 'center',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: {xs: 0, md: 2}
                }}>
                    HOW TO PLAY
                </Typography>
                <ScrollAnimation animateIn="fadeIn">
                    <Grid container sx={{
                        width: {xs: '50vw' ,md: '80vw', xl: '100vw'},
                        maxWidth: '1400px',
                        minWidth: '300px',
                        mx: 'auto',
                        justifyContent: {xs: 'space-between', md: 'space-evenly'},
                        '.bigscreen' : {
                            width: '100%'
                        }, 
                        '.bigscreenDetail' : {
                            fontFamily: 'Montserrat',
                            fontSize: {md: '10px', lg: '23px', xl: '28px'},
                            fontWeight: 600,
                            lineHeight: {md: '24px', lg: '41px'},
                            textAlign: 'center',
                            color: 'white',
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
                            mt: 2,
                            color: 'white'
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
                            color: '#FFFFFF30'
                        },
                        display: 'flex',
                        '.bigscreenArrow' : {
                            width: '40%',
                            
                        },
                        '.arrow' : {
                            'img' : {
                                width: '50%'
                            }
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
                            'svg' : {
                                my: 18
                            },
                           
                        }}>
                            <Button className="arrow" sx={{width: '100%'}} onClick={()=>{setPicIndex(picIndex -1)}}>
                                <img src='assets/icons/Polygon 2.svg' style={{transform: 'rotate(180deg)'}}/>
                            </Button>
                        </Grid>
                        <Grid item xs={6} sx={{
                            display: {
                                md: 'none'
                            },
                            height: '100%',
                            'img': {
                                width: '100%',
                                
                            },
                        }}>
                            <Box sx={{
                                width: '100%',
                                height: '100%',
                                alignItems: 'center',
                                position: 'relative',
                                '.prev' : {
                                    position: 'absolute',
                                    right: '25%',
                                    zIndex: -1,
                                    transform: 'scale(0.85)',
                                    opacity: 0.5,
                                    transition: 'transform 0.3s, opacity 0.3s',
                                    width: '100%'
                                },
                                '.next' : {
                                    position: 'absolute',
                                    left: '25%',
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
                                    {picIndex !== 0 && (
                                    <CSSTransition
                                        key={picIndex - 1}
                                        in={picIndex!=0} // You can use picIndex !== 0 as well
                                        timeout={100}
                                        classNames="prev"
                                    >
                                    <img
                                        src={steps[picIndex - 1].pic}
                                        className="prev"
                                        alt="Previous"
                                    />
                                    </CSSTransition>
                                    )}

                                    <CSSTransition
                                        key={picIndex}
                                        in={true}
                                        timeout={100}
                                        classNames="current"
                                    >
                                        <img src={steps[picIndex].pic} className="current" alt="Current" />
                                    </CSSTransition>

                                    {picIndex !== 3 && (
                                    <CSSTransition
                                    key={picIndex + 1}
                                    in={picIndex != 3} // You can use picIndex !== 3 as well
                                    timeout={100}
                                    classNames="next"
                                    >
                                    <img src={steps[picIndex + 1].pic} className="next" alt="Next" />
                                    </CSSTransition>
                                    )}
                                </TransitionGroup>
                            
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
                            'svg' : {
                                my: 18
                            },
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}>
                            <Button className="arrow" sx={{width: '100%'}} onClick={()=>{setPicIndex(picIndex + 1)}}>
                                <img src='assets/icons/Polygon 2.svg' style={{}}/>
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
                            <img className="bigscreen" src='assets/images/howtoplay/step1.png'/>
                            <Typography className='bigscreenDetail' sx={{
                                
                            }}>
                            EQUIP YOUR MICROPHONE
                            </Typography>
                        </Grid>
                        <Grid item md={1.7} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            my: 'auto'
                        }}>
                            
                            <img className='bigscreenArrow' src='assets/icons/Polygon 2.svg'/>
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
                            <img className="bigscreen" src='assets/images/howtoplay/step2.png'/>
                            <Typography className='bigscreenDetail' sx={{
                                
                            }}>
                            CHOOSE A SONG
                            </Typography>
                        </Grid>
                        <Grid item md={1.7} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            my: 'auto'
                        }}>
                            <img className='bigscreenArrow' src='assets/icons/Polygon 2.svg'/>
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
                            <img className="bigscreen" src='assets/images/howtoplay/step3.png'/>
                            <Typography className='bigscreenDetail' sx={{
                                
                            }}>
                            START SINGING
                            </Typography>
                        </Grid>
                        <Grid item md={1.7} sx={{
                            display: {
                                xs: 'none',
                                md: 'unset'
                            },
                            my: 'auto'
                        }}>
                            <img className='bigscreenArrow' src='assets/icons/Polygon 2.svg'/>
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
                            <img className="bigscreen" src='assets/images/howtoplay/step4.png'/>
                            <Typography className='bigscreenDetail' sx={{
                                
                            }}>
                            GET REWARDS
                            </Typography>
                        </Grid>
                    </Grid>
                    
                </ScrollAnimation>
                {/* <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontSize: {sm: '24px', md: '34px'},
                    fontWeight: 500,
                    lineHeight: '41px',
                    letterSpacing: '0em',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    'span:first-child':{
                        color: '#999999'
                    },
                    'span:last-child':{
                        color: '#FFC000',
                    },
                }}>
                    <span>Want to know more?&nbsp;</span>
                    <Link href='unset' target="_blank">
                        <span><u>Click here</u></span>
                    </Link>
                </Typography> */}
                </Stack>

            </ScrollAnimation>
        </Box>
    )
}