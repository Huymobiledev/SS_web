import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { transform } from "next/dist/build/swc";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export default function Web3SingingPlatform1(props: any) {
    const boxRef = useRef(null)

  useEffect(() => {
    // Set the initial scroll position after the component is mounted
    if (boxRef.current) {
    }
  }, []);
    return (
        <Box
            sx={{
                width: '100%',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
        }}>
            <ScrollAnimation animateIn="fadeIn" duration={0.5} animateOnce={true}>

            <Stack direction={'column'} gap={5} sx={{
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
                <Box ref={boxRef} sx={{
                    width: '100%',
                    overflowX: 'scroll',
                    'img': {
                        width: '100%',
                        minWidth: '1000px',
                        maxWidth: '1600px'
                    },
                    '&::-webkit-scrollbar': {
                        display: 'none', // Hide the scrollbar
                    },
                    }}>
                    <img src='assets/images/web3singingplatform.png' alt='Web3 Singing Platform' />
                </Box>
            </Stack>
            </ScrollAnimation>
       </Box>

    );
}