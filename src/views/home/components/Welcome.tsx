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

export default function Welcome(props: any) {
    return (
        <Box width={'100%'} minHeight={'100vh'}>
            <Box
                sx={{
                    width: '100%',
                    background: {
                        sm: `url(/assets/background/bg.png) no-repeat`, 
                        xs: `url(/assets/background/bg-m.png) no-repeat`
                    },
                    backgroundSize: {
                        xs: '100% auto',
                        sm: 'auto 100%',
                        md: '100%'
                    },
                    backgroundPosition: 'center',
                    position: 'relative',
                    minHeight: '100vh',
                    '@media screen' : { 
                        backgroundPositionX: {sm: '-50px', md: 'center'}
                    }
                    
                }}
            >
                
                <Box sx={{
                    width: '100%',
                    height: '50px', // Set the desired height
                    backgroundImage: 'linear-gradient(to top, #0B0E11, transparent 50%)',
                    position: 'absolute',
                    bottom: 0
                }}>
                </Box>
            </Box>
            {/* <Grid container width={'100%'} sx={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
                mt: 2,
                'div' : {
                    mx: 'auto',
                    alignItems: 'center',
                    display: 'flex',
                    mb: 2,
                    maxHeight: '360px'
                },
                
                'img' : {
                    width: '100%'
                },
                }}>
                <Grid item xs={10} sm={3} sx={{
                }}>
                    <img src='assets/icons/btn-play-on-website.svg'></img>
                </Grid>
                <Grid item xs={10} sm={3} sx={{
                }}>
                    <img src='assets/icons/btn-playstore.svg'></img>
                </Grid>
                <Grid item xs={10} sm={3} sx={{
                }}>
                    <img src='assets/icons/btn-appstore.svg'></img>
                </Grid>
            </Grid>  */}
            
        </Box>

    )
}