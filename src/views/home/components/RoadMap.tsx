import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box, positions } from "@mui/system";
import Image from "next/image";
import { useState, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { useSpring, animated } from 'react-spring';

export default function RoadMap () {

    const [picIndex, setPicIndex] = useState(0)
    const containerRef = useRef(null);

  let startX = 0;
  let currentX = 0;

  const handleTouchStart = (e: any) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: any) => {
    currentX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = currentX - startX;


    if (deltaX > 0) {
      // Swipe right, replace with your desired action
      if (picIndex != 0) {
        setPicIndex(picIndex - 1)
      }
      
    } else if (deltaX < 0) {
        if (picIndex != 5) {
            setPicIndex(picIndex + 1)
        }
      // Swipe left, replace with your desired action
      
    }


  };
    
    const springProps = useSpring({
        transform: 'scale(1.5)' // Set opacity to 1 when picIndex is 0, otherwise set it to 0
      });

    const ms = [
        {
            year: '2023',
            place: 'Q3',
            detail: 
            <Typography variant="body1" className="detail" sx={{
                bottom: {
                    md: '5%',
                    xl: '10%'
                }, 
                width: '80%',
                mx: 0, pd: 0,
            }}>
                <ul>
                    <li>
                        Real world voucher launch
                    </li>
                    <li>
                        Real world Sing to Earn
                    </li>
                </ul>
            </Typography>
        },
        {
            year: '2023',
            place: 'Q4',
            detail: 
            <Typography className="detail" sx={{
                top: {
                    md: '5%',
                    xl: '10%'
                }
            }}>
                <ul>
                    <li>
                    Expand to Oasys and Polygon
                    </li>
                </ul>
            </Typography>
        },
        {
            year: '2024',
            place: 'Q1',
            detail: 
            <Typography className="detail" sx={{
                bottom: {
                    md: '2%',
                    lg: '4%',
                    xxl: '4%'
                }
            }}>
                <ul>
                    <li>
                        Sing to win launch
                    </li>
                    <li>
                        Indonesia big event with AAG
                    </li>
                   
                </ul>
            </Typography>
        },
        {
            year: '2024',
            place: 'Q2',
            detail: 
            <Typography className="detail" sx={{
                top: {
                    md: -5
                },
            }}>
                <ul>
                    <b>
                    <li>
                        Fansipan subnet launch
                    </li>
                    <li>
                    Philippines market big contest with YGG
                    </li>
                    <li>
                    B2B platform dev
                    </li>
                    <li>
                    IDO
                    </li>
                    </b>
                </ul>
                
            </Typography>
        },
        {
            year: '2024',
            place: 'Q3',
            detail: 
            <Typography className="detail" sx={{
                bottom: {
                    
                    md: '5%',
                    xl: '10%'
                }
            }}>
                <ul>
                    <li>
                        Vietnam market pushed with Okara
                    </li>
                    <li>
                        Platform expand to other chains
                    </li>
                </ul>
            </Typography>
        },
        {
            year: '2024',
            place: 'Q4',
            detail: 
            <Typography className="detail" sx={{
                top: { 
                    md: '5%',
                    xl: '8%'
                },
                width: {xs: '100%' , md: '150%'},
                mr: {xs: 0, md: '20%'},
                
            }}>
                <ul>
                    <li>
                        South-East-Asia big contest with 1 big Foundation
                    </li>
                    <li>
                        Platform expand to other chains
                    </li>
                    <li>
                        Expand Market to Taiwan, Hong Kong
                    </li>
                </ul>
            </Typography>
        },
    ]

    return(
        <Box sx={{
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: {xs: 'unset', md: 'center'},
            position: 'relative',
            '.road' : {
                position: 'absolute',
                
            },
            justifyContent: 'center',
        }}>
            <Stack direction={'column'} gap={5} sx={{width: '100%', mt: 5}}>
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
                    ROADMAP
                </Typography>
            <Box
                
            sx={{
                width: '100%',
                position: 'relative',
                alignItems: 'center',
                display: {xs: 'none', md: 'flex'},
                justifyContent: 'space-evenly',
                overflow:'hidden',

                'ul' : {
                    xs: {
                    },
            
                },

                '.masterContainer' : {
                    width: '80%', 
                    height: '90vh',
                    display: {xs: 'none', md: 'flex'},
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    maxWidth: '1920px',
                    maxHeight: '660px',
                    minWidth: '1000px'
                },

                '.smallContainer' : {
                    height: '100%',
                    zIndex: 4,
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    'svg' : {
                    }
                }
                ,
                '.road' : {
                    position: 'absolute',
                    minWidth: '768px',
                    zIndex: 0,
                    maxWidth: '2000px'
                },
                '.circle' : {
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    zIndex: 3,
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                '.circleBig' : {
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    backgroundColor: '#FBBC04',
                    zIndex: 3,
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                '.line' : {
                    width: '2px',
                    border: '2px solid #C2C2C2',
                    zIndex: 5,
                    position: 'absolute',

                },
                '.upper' : {
                    'svg' : {
                        transform: 'translateY(calc(-50px - 10%)) rotate(180deg)'                    
                    }
                },
                '.lower' : {
                    'svg' : {
                        transform: 'translateY(calc(50px + 5%))'                    
                    }
                },
                '.lowerMiddle' : {
                    'svg' : {
                        transform: 'translateY(calc(60px + 5%))'                    
                    },
                    'img' : {
                        maxWidth: '200px',
                        top: {md: 0, lg: '5%'}
                    }
                },
                '.detail' : {
                    fontFamily: 'Montserrat',
                    fontSize: {xs: '14px',md: '13px' ,lg: '16px' ,xl: '20px'},
                    fontWeight: '500',
                    lineHeight: {xs: '30px', md: '22px', lg: '26px' ,xl: '40px'},
                    letterSpacing: '0em',
                    position: 'absolute',
                    color: 'black',
                    textAlign: {
                        xs: 'center',
                        md: 'left'
                    },
                },
                '.year' : {
                    width: '100%',
                    fontFamily: 'Montserrat',
                    fontSize: '24px',
                    fontWeight: 800,
                    lineHeight: '29px',
                    letterSpacing: '0em',
                    textAlign: 'center',
                    'span:last-child' : {
                        fontSize: 16,
                        fontWeight: 500
                    }
                    
                },
                '.yearm' : {
                    width: '100%',
                    fontFamily: 'Montserrat',
                    fontSize: '48px',
                    fontWeight: 800,
                    lineHeight: '50px ',
                    letterSpacing: '0em',
                    textAlign: 'center',
                    'span:last-child' : {
                        fontSize: 16,
                        fontWeight: 'normal'
                    },
                    mt: 5
                    
                },
                '.bigscr' : {
                    display: {
                        xs: 'none',
                        md: 'flex'
                    },
                
                },
                '.smallscr' : {
                    display: {
                        xs: 'flex',
                        md: 'none'
                    },
                
                },
                
            }}  
                
            >  
            
            <svg className="road bigscr" width="2490" height="20" viewBox="0 0 2490 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="2490" height="20" fill="#564D4D"/>
            <line x1="-1" y1="9" x2="2490" y2="9.00022" stroke="#898989" stroke-width="2" stroke-dasharray="13 34"/>
            </svg>

            <Grid container className="masterContainer" sx={{

            }}>
                <Grid item md={1.9} className="smallContainer lower">
                    <Box className='circle' sx={{backgroundColor: '#DDDDDD', color: '#8B8B8B'}}>
                        <Box className='year'>
                            
                                
                                <span>

                            {ms[0].year}

                            </span>   
                                    
                                    
                            <br/>
                            <span>
                            {ms[0].place}
                            </span>
                        </Box>
                    </Box>
                    <svg width="12" height="115" viewBox="0 0 12 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 103.667C3.05448 103.667 0.666662 106.054 0.666662 109C0.666662 111.946 3.05448 114.333 6 114.333C8.94551 114.333 11.3333 111.946 11.3333 109C11.3333 106.054 8.94551 103.667 6 103.667ZM5 -4.37114e-08L5 1.94643L7 1.94643L7 4.37114e-08L5 -4.37114e-08ZM5 5.83929L5 9.73214L7 9.73214L7 5.83929L5 5.83929ZM5 13.625L5 17.5179L7 17.5179L7 13.625L5 13.625ZM5 21.4107L5 25.3036L7 25.3036L7 21.4107L5 21.4107ZM5 29.1964L5 33.0893L7 33.0893L7 29.1964L5 29.1964ZM5 36.9821L5 40.875L7 40.875L7 36.9821L5 36.9821ZM5 44.7679L5 48.6607L7 48.6607L7 44.7679L5 44.7679ZM5 52.5536L5 56.4464L7 56.4464L7 52.5536L5 52.5536ZM5 60.3393L5 64.2321L7 64.2321L7 60.3393L5 60.3393ZM5 68.125L5 72.0179L7 72.0179L7 68.125L5 68.125ZM5 75.9107L5 79.8036L7 79.8036L7 75.9107L5 75.9107ZM5 83.6964L5 87.5893L7 87.5893L7 83.6964L5 83.6964ZM5 91.4822L5 95.375L7 95.375L7 91.4822L5 91.4822ZM5 99.2679L5 103.161L7 103.161L7 99.2679L5 99.2679ZM5 107.054L5 109L7 109L7 107.054L5 107.054Z" fill="#C2C2C2"/>
                    </svg>
                    {ms[0].detail}
                </Grid>
                <Grid item md={1.9} className="smallContainer upper">
                    <Box className='circle' sx={{backgroundColor: '#DDDDDD', color: '#8B8B8B'}}>
                    <Box className='year' >
                        

                        <span>
                            {ms[1].year}

                            </span>
                        
                            
                            <br/>
                            <span>
                            {ms[1].place}
                            </span>
                        </Box>
                    </Box>
                    <svg width="12" height="115" viewBox="0 0 12 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 103.667C3.05448 103.667 0.666662 106.054 0.666662 109C0.666662 111.946 3.05448 114.333 6 114.333C8.94551 114.333 11.3333 111.946 11.3333 109C11.3333 106.054 8.94551 103.667 6 103.667ZM5 -4.37114e-08L5 1.94643L7 1.94643L7 4.37114e-08L5 -4.37114e-08ZM5 5.83929L5 9.73214L7 9.73214L7 5.83929L5 5.83929ZM5 13.625L5 17.5179L7 17.5179L7 13.625L5 13.625ZM5 21.4107L5 25.3036L7 25.3036L7 21.4107L5 21.4107ZM5 29.1964L5 33.0893L7 33.0893L7 29.1964L5 29.1964ZM5 36.9821L5 40.875L7 40.875L7 36.9821L5 36.9821ZM5 44.7679L5 48.6607L7 48.6607L7 44.7679L5 44.7679ZM5 52.5536L5 56.4464L7 56.4464L7 52.5536L5 52.5536ZM5 60.3393L5 64.2321L7 64.2321L7 60.3393L5 60.3393ZM5 68.125L5 72.0179L7 72.0179L7 68.125L5 68.125ZM5 75.9107L5 79.8036L7 79.8036L7 75.9107L5 75.9107ZM5 83.6964L5 87.5893L7 87.5893L7 83.6964L5 83.6964ZM5 91.4822L5 95.375L7 95.375L7 91.4822L5 91.4822ZM5 99.2679L5 103.161L7 103.161L7 99.2679L5 99.2679ZM5 107.054L5 109L7 109L7 107.054L5 107.054Z" fill="#C2C2C2"/>
                        </svg>
                        {ms[1].detail}
                </Grid>
                <Grid item md={1.9} className="smallContainer lowerMiddle">
                <img alt='' src='assets/images/roadmap/singer.png' style={{width: '100%', position: 'absolute', opacity: 0.8}}/>
                <Box className='circleBig'>
                <Box className='year'>
                    

                    <span>
                            {ms[2].year}

                            </span>
                    
                            
                            <br/>
                            <span>
                            {ms[2].place}
                            </span>
                        </Box>
                </Box>
                
                <svg width="12" height="115" viewBox="0 0 12 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 103.667C3.05448 103.667 0.666662 106.054 0.666662 109C0.666662 111.946 3.05448 114.333 6 114.333C8.94551 114.333 11.3333 111.946 11.3333 109C11.3333 106.054 8.94551 103.667 6 103.667ZM5 -4.37114e-08L5 1.94643L7 1.94643L7 4.37114e-08L5 -4.37114e-08ZM5 5.83929L5 9.73214L7 9.73214L7 5.83929L5 5.83929ZM5 13.625L5 17.5179L7 17.5179L7 13.625L5 13.625ZM5 21.4107L5 25.3036L7 25.3036L7 21.4107L5 21.4107ZM5 29.1964L5 33.0893L7 33.0893L7 29.1964L5 29.1964ZM5 36.9821L5 40.875L7 40.875L7 36.9821L5 36.9821ZM5 44.7679L5 48.6607L7 48.6607L7 44.7679L5 44.7679ZM5 52.5536L5 56.4464L7 56.4464L7 52.5536L5 52.5536ZM5 60.3393L5 64.2321L7 64.2321L7 60.3393L5 60.3393ZM5 68.125L5 72.0179L7 72.0179L7 68.125L5 68.125ZM5 75.9107L5 79.8036L7 79.8036L7 75.9107L5 75.9107ZM5 83.6964L5 87.5893L7 87.5893L7 83.6964L5 83.6964ZM5 91.4822L5 95.375L7 95.375L7 91.4822L5 91.4822ZM5 99.2679L5 103.161L7 103.161L7 99.2679L5 99.2679ZM5 107.054L5 109L7 109L7 107.054L5 107.054Z" fill="#C2C2C2"/>
                        </svg>
                    {ms[2].detail}
                </Grid>
                <Grid item md={1.9} className="smallContainer upper">
                
                <Box className='circle' sx={{backgroundColor: '#93E2A8'}}>
                <Box className='year'>
                    

                    <span>
                            {ms[3].year}

                            </span>
                    
                            
                            <br/>
                            <span>
                            {ms[3].place}
                            </span>
                        </Box>
                </Box>
                <svg width="12" height="100" viewBox="0 0 12 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 103.667C3.05448 103.667 0.666662 106.054 0.666662 109C0.666662 111.946 3.05448 114.333 6 114.333C8.94551 114.333 11.3333 111.946 11.3333 109C11.3333 106.054 8.94551 103.667 6 103.667ZM5 -4.37114e-08L5 1.94643L7 1.94643L7 4.37114e-08L5 -4.37114e-08ZM5 5.83929L5 9.73214L7 9.73214L7 5.83929L5 5.83929ZM5 13.625L5 17.5179L7 17.5179L7 13.625L5 13.625ZM5 21.4107L5 25.3036L7 25.3036L7 21.4107L5 21.4107ZM5 29.1964L5 33.0893L7 33.0893L7 29.1964L5 29.1964ZM5 36.9821L5 40.875L7 40.875L7 36.9821L5 36.9821ZM5 44.7679L5 48.6607L7 48.6607L7 44.7679L5 44.7679ZM5 52.5536L5 56.4464L7 56.4464L7 52.5536L5 52.5536ZM5 60.3393L5 64.2321L7 64.2321L7 60.3393L5 60.3393ZM5 68.125L5 72.0179L7 72.0179L7 68.125L5 68.125ZM5 75.9107L5 79.8036L7 79.8036L7 75.9107L5 75.9107ZM5 83.6964L5 87.5893L7 87.5893L7 83.6964L5 83.6964ZM5 91.4822L5 95.375L7 95.375L7 91.4822L5 91.4822ZM5 99.2679L5 103.161L7 103.161L7 99.2679L5 99.2679ZM5 107.054L5 109L7 109L7 107.054L5 107.054Z" fill="#C2C2C2"/>
                        </svg>
                    {ms[3].detail}
                </Grid>
                <Grid item md={1.9} className="smallContainer lower" >
                
                <Box className='circle' sx={{backgroundColor: '#93E2A8'}}>
                <Box className='year'>
                    
                    <span>
                            {ms[4].year}

                            </span>
                        
                    

                            <br/>
                            <span>
                            {ms[4].place}
                            </span>
                        </Box>
                </Box>
                <svg width="12" height="115" viewBox="0 0 12 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 103.667C3.05448 103.667 0.666662 106.054 0.666662 109C0.666662 111.946 3.05448 114.333 6 114.333C8.94551 114.333 11.3333 111.946 11.3333 109C11.3333 106.054 8.94551 103.667 6 103.667ZM5 -4.37114e-08L5 1.94643L7 1.94643L7 4.37114e-08L5 -4.37114e-08ZM5 5.83929L5 9.73214L7 9.73214L7 5.83929L5 5.83929ZM5 13.625L5 17.5179L7 17.5179L7 13.625L5 13.625ZM5 21.4107L5 25.3036L7 25.3036L7 21.4107L5 21.4107ZM5 29.1964L5 33.0893L7 33.0893L7 29.1964L5 29.1964ZM5 36.9821L5 40.875L7 40.875L7 36.9821L5 36.9821ZM5 44.7679L5 48.6607L7 48.6607L7 44.7679L5 44.7679ZM5 52.5536L5 56.4464L7 56.4464L7 52.5536L5 52.5536ZM5 60.3393L5 64.2321L7 64.2321L7 60.3393L5 60.3393ZM5 68.125L5 72.0179L7 72.0179L7 68.125L5 68.125ZM5 75.9107L5 79.8036L7 79.8036L7 75.9107L5 75.9107ZM5 83.6964L5 87.5893L7 87.5893L7 83.6964L5 83.6964ZM5 91.4822L5 95.375L7 95.375L7 91.4822L5 91.4822ZM5 99.2679L5 103.161L7 103.161L7 99.2679L5 99.2679ZM5 107.054L5 109L7 109L7 107.054L5 107.054Z" fill="#C2C2C2"/>
                        </svg>
                        {ms[4].detail}
                </Grid>

                <Grid item md={1.9} className="smallContainer upper">
                
                    <Box className='circle' sx={{backgroundColor: '#93E2A8'}}>
                    <Box className='year'>
                        
                        <span>
                            {ms[5].year}
                            </span>
                            <br/>
                            <span>
                            {ms[5].place}
                            </span>
                        </Box>
                    </Box>
                    <svg width="12" height="115" viewBox="0 0 12 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 103.667C3.05448 103.667 0.666662 106.054 0.666662 109C0.666662 111.946 3.05448 114.333 6 114.333C8.94551 114.333 11.3333 111.946 11.3333 109C11.3333 106.054 8.94551 103.667 6 103.667ZM5 -4.37114e-08L5 1.94643L7 1.94643L7 4.37114e-08L5 -4.37114e-08ZM5 5.83929L5 9.73214L7 9.73214L7 5.83929L5 5.83929ZM5 13.625L5 17.5179L7 17.5179L7 13.625L5 13.625ZM5 21.4107L5 25.3036L7 25.3036L7 21.4107L5 21.4107ZM5 29.1964L5 33.0893L7 33.0893L7 29.1964L5 29.1964ZM5 36.9821L5 40.875L7 40.875L7 36.9821L5 36.9821ZM5 44.7679L5 48.6607L7 48.6607L7 44.7679L5 44.7679ZM5 52.5536L5 56.4464L7 56.4464L7 52.5536L5 52.5536ZM5 60.3393L5 64.2321L7 64.2321L7 60.3393L5 60.3393ZM5 68.125L5 72.0179L7 72.0179L7 68.125L5 68.125ZM5 75.9107L5 79.8036L7 79.8036L7 75.9107L5 75.9107ZM5 83.6964L5 87.5893L7 87.5893L7 83.6964L5 83.6964ZM5 91.4822L5 95.375L7 95.375L7 91.4822L5 91.4822ZM5 99.2679L5 103.161L7 103.161L7 99.2679L5 99.2679ZM5 107.054L5 109L7 109L7 107.054L5 107.054Z" fill="#C2C2C2"/>
                    </svg>
                    {ms[5].detail}
                </Grid>
                
            </Grid>
        </Box>
            <Stack direction={"column"} gap={10} sx={{
                width: '90%',
                minHeight: '1200px',
                mx: 'auto',
                display: {xs: 'flex', md: 'none'},
                flexDirection: 'column',
                maxWidth: '420px',
                background: 'url(assets/images/road.png) no-repeat',
                backgroundSize: '16px',
                backgroundPositionX: '31.5px',
                alignItems: 'center',
                justifyContent: 'center',

                '.content' : {
                    fontFamily: 'Montserrat',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '17px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    maxWidth: '70%'
                },
                '.time' : {
                    fontFamily: 'Montserrat',
                    'span:first-child' : {
                        fontSize: '16px',
                        fontWeight: 800,
                        lineHeight: '17px',
                        letterSpacing: '0em',
                        
                    },
                    'span:last-child' : {
                        fontSize: '12px',
                        fontWeight: 500,
                        lineHeight: '17px',
                        letterSpacing: '0em', 
                    }
                }
            }}>
                <Stack direction={'row'} sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'left'
                }}>
                    <Box className='time' sx={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: '#DDDDDD',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#8B8B8B',
                        flexDirection: 'column'
                    }}>
                        <span>
                            2023
                        </span>
                        <span>
                            Q3
                        </span>
                    </Box>
                    <Typography className="content">
                        <ul>
                            <li>
                            Real world voucher launch
                            </li>
                            <li>
                            Real world Sing to Earn
                            </li>
                        </ul>
                    </Typography>
                </Stack>
                <Stack direction={'row'} sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'left'
                }}>
                    <Box className='time' sx={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: '#DDDDDD',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#8B8B8B',
                        flexDirection: 'column'
                    }}>
                        <span>
                            2023
                        </span>
                        <span>
                            Q4
                        </span>
                    </Box>
                    <Typography className="content">
                        <ul>
                            <li>
                            Expand to Oasys and Polygon
                            </li>
                        </ul>
                    </Typography>
                </Stack>
                <Stack direction={'row'} sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'left'
                }}>
                    <Box className='time' sx={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: '#FBBC04',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'black',
                        flexDirection: 'column'
                    }}>
                        <span>
                            2024
                        </span>
                        <span>
                            Q1
                        </span>
                    </Box>
                    <Typography className="content" position={'relative'}>
                        <img style={{position: 'absolute', width: '61px', top: '-60px', left: '20px'}} src='assets/images/roadmap/singer.png'>
                        </img>
                        <ul>
                            <li>
                            Sing to win launch
                            </li>
                            <li>
                            Indonesia big event with AAG
                            </li>
                        </ul>
                    </Typography>
                </Stack>
                
                <Stack direction={'row'} sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'left'
                }}>
                    <Box className='time' sx={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: '#93E2A8',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'black',
                        flexDirection: 'column'
                    }}>
                        <span>
                            2024
                        </span>
                        <span>
                            Q2
                        </span>
                    </Box>
                    <Typography className="content">
                        <ul>
                            <b>
                            <li>
                            Fansipan subnet launch
                            </li>
                            <li>
                            Philippines market big contest with YGG
                            </li>
                            <li>
                            B2B platform dev
                            </li>
                            <li>
                            IDO
                            </li>
                            </b>
                        </ul>
                    </Typography>
                </Stack>
                <Stack direction={'row'} sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'left'
                }}>
                    <Box className='time' sx={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: '#93E2A8',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'black',
                        flexDirection: 'column'
                    }}>
                        <span>
                            2024
                        </span>
                        <span>
                            Q3
                        </span>
                    </Box>
                    <Typography className="content">
                        <ul>
                            <li>
                            Vietnam market pushed with Okara
                            </li>
                            <li>
                            Platform expand to other chains
                            </li>
                        </ul>
                    </Typography>
                </Stack>
                <Stack direction={'row'} sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'left'
                }}>
                    <Box className='time' sx={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: '#93E2A8',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'black',
                        flexDirection: 'column'
                    }}>
                        <span>
                            2024
                        </span>
                        <span>
                            Q4
                        </span>
                    </Box>
                    <Typography className="content">
                        <ul>
                            <li>
                            South-East-Asia big contest with 1 big Foundation
                            </li>
                            <li>
                            Platform expand to other chains
                            </li>
                            <li>
                            Expand Market to Taiwan, Hong Kong
                            </li>
                        </ul>
                    </Typography>
                </Stack>
                    
                    

            </Stack>


            </Stack>
            
        </Box>
    )
}