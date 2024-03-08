import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";



export default function Tokenomic(props: any) {
    const { data } = props
    return (
        <Box
        sx={{
            textAlign: 'center',
            alignItems: 'center',
            width: '100%',
            justifyContent:'center',
            display: 'flex',
        }}>
            <Stack direction={'column'} gap={3}>
                <ScrollAnimation animateIn='fadeIn'
                    duration={.5} animateOnce={true}>
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
                  
                }}>
                    TOKENOMIC
                </Typography>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut' delay={200} animateOnce={true}>
                    <Box sx={{
                        width: '100%',
                        maxWidth: '1200px',
                        objectFit: 'contain',
                        'img' : {
                            width: '100%'
                        }
                        }}>
                        <img src='assets/images/tokenomic.png'/>
                    </Box>
                    
                </ScrollAnimation>
            </Stack>            
        </Box>
    )
}