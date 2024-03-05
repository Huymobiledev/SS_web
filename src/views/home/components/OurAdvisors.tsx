import { Box, Container, Stack } from "@mui/system";
import { Fragment, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ButtonGreen } from "@/components/button";
import ScrollAnimation from "react-animate-on-scroll";
import { Typography, Grid } from "@mui/material";

export default function OurAdvisors() {

    const advisors = [
        {
            pic: 'assets/images/advisors/20220816-SingSing-AppMockupMobile-MicBuy 1.png',
            name: 'LONG VUONG',
            pos: 'Founder & CEO Tomochain'
        },
        {
            pic: 'assets/images/advisors/20220816-SingSing-AppMockupMobile-MicBuy 1-1.png',
            name: 'ELIZA CHUI',
            pos: 'CEO MOOV music HongKong'
        },
        {
            pic: 'assets/images/advisors/20220816-SingSing-AppMockupMobile-MicBuy 1-2.png',
            name: 'DR. DAVID TRAN',
            pos: 'Blockchain Professor Uni of Massachusettes USA'
        },
        {
            pic: 'assets/images/advisors/20220816-SingSing-AppMockupMobile-MicBuy 1-3.png',
            name: 'DR. NGUYEN XUAN HOAI',
            pos: 'AI Professor. CEO Vietnam AI Academy Vietnam - Korea'
        },
        {
            pic: 'assets/images/advisors/20220816-SingSing-AppMockupMobile-MicBuy 1-4.png',
            name: 'DUC TRAN',
            pos: 'CEO IDG Capital Vietnam China - USA - Vietnam'
        },

    ]

    return (
        <Fragment>
            <Box
                sx={{
                textAlign: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                mt: {md: 5},
                width: '100%',
                backgroundPosition: 'center',
                position: 'relative',
                backgroundSize: '100% auto',
                backgroundColor: '#0B0E11'
            }}
            >
                <Stack direction={'column'}>
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
                        mb: {xs: 2,sm: 3, lg: 5}
                    }}>
                        OUR ADVISORS
                    </Typography>

                    <Grid container sx={{
                        justifyContent: 'space-between', 
                        width: '100%',
                        alignItems: 'center',
                        m: 'auto',
                        my: 5,
                        maxWidth: {sm: '550px', lg: '1200px'}

                    }}>
                        {advisors.map((member, index) => {
                            return (
                                <Grid item xs={12} sm={6} lg={2.3} sx={{width: '100%', mb: 1, mx: 'auto'}} key={index}>
                                    <Box sx={{
                                        width: '100%',
                                        maxWidth: '250px',
                                        minWidth: '160px',
                                        'img' : {
                                            width: '100%'
                                        },
                                        height: {
                                            xs: '350px',
                                            md: '370px'
                                        },
                                        backgroundColor: '#99999921',
                                        borderTopLeftRadius: '36px',
                                        borderTopRightRadius: '36px',
                                        borderBottomLeftRadius: '20px',
                                        borderBottomRightRadius: '20px',
                                        mx: 'auto',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        pb: '2px',
                                        position: 'relative',
                                        mb: 2
                                    }}>
                                        <img src={member.pic}/>
                                        <Box sx={{
                                            fontFamily: 'Montserrat',
                                            fontSize: {xs: '13px',md: '17px'},
                                            fontWeight: 700,
                                            letterSpacing: '0em',
                                            textAlign: 'center',
                                            color: 'white',
                                            mt: 2.4,
                                            width: '100%',
                                        }}>
                                            {member.name}
                                        </Box>
                                        <Box sx={{
                                                width: '90%', 
                                                fontFamily: 'Montserrat',
                                                fontSize: {xs: '13px', md: '17px'},
                                                fontWeight: 500,
                                                lineHeight: '20px',
                                                letterSpacing: '0em',
                                                textAlign: 'center',
                                                mx: 'auto',
                                                color: '#FFC000',
                                                position: 'relative',
                                                mb: 1,
                                                
                                                }}>
                                            {member.pos}
                                        </Box>                                        
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Stack>
            </Box>
        </Fragment>
    )
}