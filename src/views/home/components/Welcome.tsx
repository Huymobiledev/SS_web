import { Box, Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import { useAppSelector } from "@/hooks/hooks";
import { appConfigSelector } from "@/slices/appConfigSlice";
import router from 'next/router';
import Link from "next/link";
import Image from "next/image";

export default function Welcome(props: any) {

    return (
        <Box width={'100%'} minHeight={'100vh'} sx={{
            
        }}>
            
            <Box
                id='element'
                sx={{
                    width: '100%',
                    // background: {
                    //     sm: `url(/assets/images/welcome/banner-bg.png) no-repeat`, 
                    //     xs: `url(/assets/images/welcome/banner-bg-mobile.png)`
                    // },
                    background: 'linear-gradient(254.2deg, #BD2E2C 4.3%, #781513 93.65%)',
                    backgroundSize: '100% 100%',
                    backgroundPositionX: '20%',
                    position: 'relative',
                    minHeight: '101vh',
                    display: 'flex',
                    overflow: 'hidden',
                    'img' : {
                        width: '100%'
                    },
                    '.bigscreen' : {
                        display: {
                            xs: 'none',
                            sm: 'flex'
                        }
                    },
                    '.smallscreen' : {
                        display: {
                            xs: 'flex',
                            sm: 'none'
                        }
                    },
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                    
                }}  
            >
                <Grid container sx={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: {xs: 'space-evenly', sm: 'center'}, 
                    mt: {
                        xs: 10, 
                        sm: 0
                        }, 
                    position: 'relative',
                    maxWidth: '1600px',
                    mx: 'auto',
                    zIndex: 7
                }}>
                    <Grid item xs={10} sm={0} sx={{
                        display: {
                            xs: 'flex', 
                            sm: 'none'
                        }, 
                        justifyContent: 'center', 
                        alignItems: 'center'
                        }}>
                        <img className="smallscreen" src='/assets/images/welcome/web3_singing_platform.png' style={{zIndex: 11}}/>
                        <img className="smallscreen" src='/assets/images/welcome/NM3.png' style={{width: '40px', position: 'absolute', transform: 'translateY(300%) scale(1.3)'}}/>
                        <img className="smallscreen" src='/assets/images/welcome/NM4.png' style={{width: '40px', position: 'absolute', transform: 'translateY(400%)'}}/>

                    </Grid>
                    <Grid item xs={5} sm={2}>
                        <img className="bigscreen" src='/assets/images/welcome/Singer_1.png' style={{transform: 'translateY(30%)'}}/>
                        <img className="smallscreen" src='/assets/images/welcome/Singer_1_m.png' style={{width: '100%'}}/>
                    </Grid>
                    <Grid item xs={0} sm={5} sx={{
                        display: {
                            xs: 'none',
                            sm: 'flex',
                        
                        },

                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 2
                        }}>
                        <img className="bigscreen" src='/assets/images/welcome/mic.png' style={{width: '140%', transform: 'translateY(-20%)'}}/>
                        <img className="bigscreen" src='/assets/images/welcome/web3_singing_platform.png' style={{position: 'absolute', width: '80%', transform: 'translateY(20%)', zIndex: 11}}/>
                    </Grid>
                    <Grid item xs={5} sm={2}>
                        <img className="bigscreen" src='/assets/images/welcome/Singer_2.png' style={{transform: 'translateY(30%)'}}/>
                        <img className="smallscreen" src='/assets/images/welcome/Singer_2_m.png' style={{width: '100%'}}/>
                    </Grid>
                    <Grid container sx={
                    {width: '100%', 
                    maxWidth: {md: '75vw', lg: '900px', xl: '1600px'}, 
                    display: {
                        xs: 'none',
                        sm: 'flex'
                    }, 
                    position: 'absolute', 
                    bottom: {xs: 0, lg: 10},
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    transform: 'translateY(15vh)',
                    '.btnLR' : {
                        transition: 'transform 0.3s' ,
                        transform: 'scale(0.9)',
                        
                        ':hover' : {
                            transform: 'scale(1.2)'
                        }
                        
                    },
                    '.btn' : {
                        transition: 'filter .8s, transform 0.3s',
                        ':hover' : {
                            filter: 'brightness(1.3)',
                            transform: 'scale(1.2)'
                        }
                        
                    },
                    userSelect: 'none',
                    
                    zIndex: 10
                    }}>
                        <Grid item sm={3} className="btnLR" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Link href='https://apps.apple.com/app/singsing-network/id1611106632' target='_blank'>
                                <img src='/assets/images/welcome/appstore.png' style={{width: '100%'}}/>
                            </Link>
                                
                            
                        </Grid>
                        <Grid item sm={3} className="btn">
                            <Link href='https://app.singsing.net/vi' target='_blank'>
                                <img src='/assets/images/welcome/dapp.png' style={{width: '100%'}}/>
                            </Link>
                            
                        </Grid>
                        <Grid item sm={3} className="btnLR" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Link href='https://play.google.com/store/apps/details?id=net.singsing.app&pli=1' target='_blank'>
                                <img src='/assets/images/welcome/ggplay.png' style={{width: '100%'}}/>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid container sx={
                    {width: '100%', 
                    maxWidth: {lg: '900px', xl: '1600px'}, 
                    display: {
                        xs: 'none',
                        sm: 'flex'
                    }, 
                    position: 'absolute', 
                    bottom: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    '.btnLR' : {
                        transition: 'transform 0.3s' ,
                        
                        ':hover' : {
                            transform: 'scale(1.2)'
                        }
                        
                    },
                    '.btn' : {
                        transition: 'filter 0.3s, transform 0.3s',
                        ':hover' : {
                            filter: 'brightness(1.2)',
                            transform: 'scale(1.2)'
                        }
                        
                    },
                    zIndex: 2
                    }}>
                        <Grid item sm={3} className="btnLR" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Link href='https://apps.apple.com/app/singsing-network/id1611106632' target='_blank'>
                                <img src='/assets/images/welcome/appstore.png' style={{width: '70%'}}/>
                            </Link>
                                
                            
                        </Grid>
                        <Grid item sm={3} className="btn">
                            <Link href='https://app.singsing.net/vi' target='_blank'>
                                <img src='/assets/images/welcome/dapp.png' style={{width: '100%'}}/>
                            </Link>
                            
                        </Grid>
                        <Grid item sm={3} className="btnLR" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Link href='https://play.google.com/store/apps/details?id=net.singsing.app&pli=1' target='_blank'>
                                <img src='/assets/images/welcome/ggplay.png' style={{width: '70%'}}/>
                            </Link>
                        </Grid>
                    </Grid>
                 */}
                <Box sx={{
                    width: '100$',
                    position: 'absolute',
                    bottom: {
                        xs: 'calc(-10px - 5%)',
                        sm: 'calc(-70px - 5%)',
                        md: 'calc(-100px - 5%)',
                        lg: 'calc(-150px - 15%)'
                },
                    objectFit: 'contain',
                    zIndex: 2
                    
                }}>
                    <img alt='' src='/assets/background/CB.png' className="bigscreen" style={{
                        }}/>
                    <img src='/assets/background/CBM.png' className="smallscreen"/>
                </Box>
                    <img src='/assets/background/CT2.png' className="bigscreen" style={{
                        width: '40%',
                        left: 0,
                        top: '60px',
                        position: 'absolute',
                        zIndex: 1
                        }}/>
                    <img src='/assets/background/CT1.png' className="bigscreen" style={{
                        width: '40%',
                        right: 0,
                        top: '60px',
                        position: 'absolute',
                        zIndex: 1
                        }}/>
                    <img src='/assets/background/CTM.png' className="smallscreen" style={{
                        width: '100%',
                        top: '60px',
                        position: 'absolute',
                        zIndex: 1,
                        filter: 'brightness(.7)'
                    }}/>
                <Box sx={{
                    width: '100%',
                    position: 'absolute',
                    height: '10vh',
                    zIndex: 0.1,
                    minWidth: '1000px',
                    bottom: {
                        xs: 140,
                        md: 200,
                        xl: 400
                    }
                }}>
                    <img src='/assets/images/welcome/peopledance.png'/>
                </Box>
                
            </Box>
            
        </Box>

    )
}