import { Box, Container, Stack } from "@mui/system";
import { Fragment, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ButtonGreen } from "@/components/button";
import ScrollAnimation from "react-animate-on-scroll";
import { Typography, Grid, Button } from "@mui/material";

export default function TheTeam(props: any) {
    const { t } = useTranslation()
    const [tab, setTab] = useState(0)

    const [isOnMobile, setIsOnMobile] = useState<boolean>(false)

useEffect(() => {
    setIsOnMobile(window.innerWidth < 600)
})

    const team2 = [
        {
            name: 'PHUNG TIEN CONG',
            pos: 'Co-Founder',
            url: ''
        },
        {
            name: 'HARRY PHAM',
            pos: 'Co-Founder | CEO',
            url: ''
        },
        {
            name: 'HAI NGUYEN',
            pos: 'COO',
            url: ''
        },
        {
            name: 'LONG VUONG',
            pos: 'Advisor',
            url: ''
        },
        {
            name: 'LOI LUU',
            pos: 'Investor',
            url: ''
        },
    ]

    return (
        <Fragment>
            <Box id={'ourteam'}
                sx={{
                textAlign: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                py: 5,
                width: '100%',
                backgroundPosition: 'center',
                position: 'relative',
            }}
            >
                <ScrollAnimation animateIn='fadeInUp' duration={.5} animateOnce={true}>
                    <Stack direction={'column'} gap={9} sx={{ width: '100vw', maxWidth: '1200px'}}>
                    <Typography sx={{
                        fontFamily: 'Montserrat',
                        fontSize: {
                            xs: '40px', 
                            sm: '64px', 
                        },
                        fontWeight: 800,
                        lineHeight: {
                            xs: '40px', 
                            md: '108px'},
                        textAlign: 'center',
                        color: 'black',
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                    }}>
                        THE BUILDERS
                    </Typography>
                    <Grid container sx={{
                        justifyContent: 'space-evenly', 
                        display: 'flex', 
                        position: 'relative',
                        width: '100%',
                        alignItems: 'center',
                        maxWidth: '1300px',
                        mx: 'auto',
                    }}>
                        {team2.map((member, index) => {
                            return (
                                <Grid key={index} item xs={12} md={2.2} sx={{width: '100%', mb: 5}}>
                                    <Box sx={{
                                        width: '100%',
                                        maxWidth: '250px',
                                        minWidth: '140px',
                                        'img' : {
                                            width: '100%',
                                        },
                                        minHeight: '196px',
                                        borderRadius: '20px',
                                        mx: 'auto',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        pb: '2px',                                        
                                    }}>
                                        <img src={`assets/images/team2/20220816-SingSing-AppMockupMobile-MicBuy-1-${index}.png`}/>
                                        <Typography variant='h1' sx={{
                                            fontFamily: 'Montserrat',
                                            fontSize: {xs: '16px',md: '20px'},
                                            fontWeight: 700,
                                            letterSpacing: '0em',
                                            textAlign: 'center',
                                            color: 'black',
                                            mt: 1,
                                            mb: 2,
                                            lineHeight: '24px',
                                            'span:last-child' : {
                                                color: '#999999',
                                                fontSize: {
                                                    xs: '14px',
                                                    md: '16px',
                                                    fontWeight: 400
                                                }
                                            }
                                            
                                        }}>
                                            <span>
                                                {member.name}
                                            </span>
                                            <br/>
                                            <span>
                                                {member.pos}
                                            </span>
                                            
                                        </Typography>
                                        <Button sx={{
                                            width: '150px',
                                            height: '50px',
                                            backgroundColor: '#B226C5',
                                            borderRadius: '50px',
                                            minWidth: '150px',
                                            transition: 'transform 0.3s, filter 0.3s',
                                            ':hover' : {
                                                transform: 'scale(1.2)',
                                                filter: 'brightnes(10)',
                                                backgroundColor: '#B226C5',
                                            },
                                            display: 'flex',
                                            mx: 'auto',
                                            color: 'white',
                                            justifyContent: 'space-evenly',
                                            textTransform: 'none',
                                            fontFamily: 'Montserrat',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            lineHeight: '20px',
                                            letterSpacing: '0em',
                                            textAlign: 'center',

                                        }}>
                                            <img style={{width: '25px'}} src='assets/icons/linkedin.svg'/>
                                            LinkedIn

                                        </Button>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                    </Stack>
                </ScrollAnimation>
            </Box>
        </Fragment>
    )
}