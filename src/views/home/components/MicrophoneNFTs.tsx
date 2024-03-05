import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { transform } from "next/dist/build/swc";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export default function MicrophoneNFTs(props: any) {
    const [picIndex, setPicIndex] = useState(2)
    const [startX, setStartX] = useState(0);
    const [nftsArray, setNftsArray] = useState([
        {
            pic: 'assets/images/nfts/20220816-SingSing-AppMockupMobile-MicBuy 1.png',
            rank: 'BRONZE'
        },
        {
            pic: 'assets/images/nfts/20220816-SingSing-AppMockupMobile-MicBuy 1-2.png',
            rank: 'SILVER'
        },
        {
            pic: 'assets/images/nfts/20220816-SingSing-AppMockupMobile-MicBuy 1-4.png',
            rank: 'GOLD'
        },
        {
            pic: 'assets/images/nfts/20220816-SingSing-AppMockupMobile-MicBuy 1-3.png',
            rank: 'PLATINUM'
        },
        {
            pic: 'assets/images/nfts/20220816-SingSing-AppMockupMobile-MicBuy 1-1.png',
            rank: 'DIAMOND'
        },
    ])

    const handleNext = () => {
        setNftsArray([...nftsArray.slice(-4), nftsArray[0]])
        setPicIndex(picIndex - 1)
    }

    const handleBack = () => {
        setNftsArray([nftsArray[4],...nftsArray.slice(0, 4)])
        setPicIndex(picIndex + 1)
    }

    const handleTouchStart = (event: any) => {
        setStartX(event.touches[0].clientX);
      };
    
      const handleTouchEnd = (event: any) => {
        const deltaX = event.changedTouches[0].clientX - startX;
    
        if (deltaX > 0) {
          // Swipe right
          handleNext()
        } else if (deltaX < 0) {
          // Swipe left
          handleBack()
        }
      };

    return (
        <Box
            sx={{
                width: '100%',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(180deg, rgba(33,17,41,1) 0%, rgba(11,14,17,1) 30%)',
                mt: 10,
                mb: {xs: 10, sm: 15, md: 0},
        }}>
            <Stack direction={'column'} gap={10} sx={{
                width: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                m:'auto',
                'button' : {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    p: 0,
                    'img' : {
                        my: 10,
                        width: '20%',
                        minWidth: '25px'
                    }
                },
            }}>
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
                    mt: 5,
                    mb: {xs: 0}
                }}>
                    MICROPHONE NFTS
                </Typography>
                <Grid container sx={{
                    width: '100%',
                    height: '65vh',
                    minHeight: '335px',
                    justifyContent: 'space-between',
                    display: 'flex',

                }}>
                    <Grid item sm={2} md={1} sx={{my:'auto', display: {xs: 'none', sm: 'unset'}}}>
                        <Button onClick={handleBack}>
                            <img src='assets/icons/Polygon 2.svg' style={{transform: 'rotate(180deg)'}}/>
                        </Button>
                        
                    </Grid>
                    <Grid item xs={12} sm={8} md={10} sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        height: '65vh'
                    }}>
                        <Box sx={{
                            width: '100%',
                            maxWidth: '1300px',
                            position: 'relative',
                            height: {xs: '80%', md: '100%'},
                            display: 'flex',
                            justifyContent: 'center',
                            mx: 'auto',
                            '.outmost' : {
                                display: {xs: 'none', md: 'unset'},
                                width: '28%',
                                height: '100%',
                                borderRadius: {xs: '34px', md: '55px'},
                                position: 'absolute',
                                zIndex: 1,
                                transform: 'scale(1)',
                                maxWidth: '336px',
                                transition: 'transform 0.3s'
                                
                            },
                            '.inner' : {
                                width: '28%',
                                height: '100%',
                                borderRadius: {xs: '34px', md: '55px'},
                                m: 'auto',
                                zIndex: 2,
                                position: 'absolute',
                                transform: 'scale(1.1)',
                                maxWidth: '336px',      
                                minWidth: '156px'                          
                            },
                            '.middle' : {
                                width: '28%',
                                height: '100%',
                                borderRadius: {
                                    xs: '34px', 
                                    md: '55px'
                                },
                                zIndex: 3,
                                maxWidth: '336px',
                                transform: 'scale(1.2)',
                                minWidth: '156px'
                            },
                            'img' : {
                                width: '70%',
                                mx: 'auto',
                            },
                            '.innerContent' : {
                                width: '100%',
                                height: '90%',
                                backgroundColor: '#99999999',
                                borderRadius: {
                                    xs: '34px', 
                                    md: '55px'
                                },
                                alignItems: 'center',
                                justifyItems: 'center',
                                display: 'flex',
                                maxHeight: '594px',
                                backdropFilter: 'blur(15px)',
                                boxShadow: '0px 13px 21px 0px #00000057',
                                
                            },
                            '.rank' : {
                                //styleName: Title;
                                fontFamily: 'Montserrat',
                                
                                fontWeight: 600,
                                letterSpacing: '0em',
                                textAlign: 'center',
                                color: 'white',
                                mt: 4
                            }
                        }}  onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >                            
                                <Box className='outmost' sx={{
                                    left: 0,
                                }}>
                                    <Box className='innerContent' sx={{
                                        
                                    }}>
                                        <img src={nftsArray[0].pic}></img>
                                    </Box>
                                    <Box className="rank" sx={{fontSize: {md: '18px' ,lg: '22px'}, lineHeight: '29px' ,display: {xs: 'none', md: 'block'}}}>
                                        {nftsArray[0].rank}
                                    </Box>
                                </Box>
                            <Box className='inner' sx={{
                                left: {xs: '10%', sm: '15%'}
                            }}>
                                <Box className='innerContent' sx={{
                                    
                                }}>
                                    <img src={nftsArray[1].pic}></img>
                                </Box>
                                <Box className="rank" sx={{fontSize: {md: '22px' ,lg: '28px'}, lineHeight: '35px', display: {xs: 'none', md: 'block'}}}>
                                    {nftsArray[1].rank}
                                </Box>
                            </Box>

                            <Box className='middle'>
                                <Box className='innerContent' sx={{
                                    
                                }}>
                                    <img src={nftsArray[2].pic}></img>
                                </Box>
                                <Box className="rank" sx={{fontSize: {xs: '24px', md: '30px', lg: '34px'}, width: '100%'}}>
                                    {nftsArray[2].rank}
                                </Box>
                            </Box>

                            <Box className='inner' sx={{
                                right: {xs: '10%', sm: '15%'}
                            }}>
                                <Box className='innerContent' sx={{
                                    
                                }}>
                                    <img src={nftsArray[3].pic}></img>
                                </Box>
                                <Box className="rank" sx={{fontSize: {md: '22px' ,lg: '28px'}, lineHeight: '35px', display: {xs: 'none', md: 'block'}}}>
                                    {nftsArray[3].rank}
                                </Box>
                            </Box>

                            <Box className='outmost' sx={{
                                right: 0
                            }}>
                                <Box className='innerContent' sx={{
                                    
                                }}>
                                    <img src={nftsArray[4].pic}></img>
                                </Box>
                                <Box className="rank" sx={{fontSize: {md: '18px' ,lg: '22px'}, lineHeight: '29px' ,display: {xs: 'none', md: 'block'}}}>
                                    {nftsArray[4].rank}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={2} md={1} my='auto' sx={{display: {xs: 'none', sm: 'unset'}}}>
                        <Button onClick={handleNext}>
                            <img src='assets/icons/Polygon 2.svg' style={{}}/>
                        </Button>
                    </Grid>
                </Grid>
            </Stack>
            
       </Box>

    );
}