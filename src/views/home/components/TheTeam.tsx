import { Box, Container, Stack } from "@mui/system";
import { Fragment, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ButtonGreen } from "@/components/button";
import ScrollAnimation from "react-animate-on-scroll";
import { Typography, Grid } from "@mui/material";

export default function TheTeam(props: any) {
    const { t } = useTranslation()
    const [tab, setTab] = useState(0)

    const [isOnMobile, setIsOnMobile] = useState<boolean>(false)

useEffect(() => {
    setIsOnMobile(window.innerWidth < 600)
})

    const team1 = [
        {
            pic: 'assets/images/team1/20220816-SingSing-AppMockupMobile-MicBuy 1.png',
            name: 'PHUNG TIEN CONG',
            pos: 'Founder'
        },
        {
            pic: 'assets/images/team1/20220816-SingSing-AppMockupMobile-MicBuy 1-1.png',
            name: 'HA PHAM',
            pos: 'Co-Founder'
        },
        {
            pic: 'assets/images/team1/20220816-SingSing-AppMockupMobile-MicBuy 1-2.png',
            name: 'THU NGUYEN',
            pos: 'Co-Founder'
        },
    ]

    const team2 = [
        {
            pic: 'assets/images/team2/20220816-SingSing-AppMockupMobile-MicBuy 1.png',
            name: 'LAM NGUYEN'
        },
        {
            pic: 'assets/images/team2/20220816-SingSing-AppMockupMobile-MicBuy 1-1.png',
            name: 'HAI NGUYEN'
        },
        {
            pic: 'assets/images/team2/20220816-SingSing-AppMockupMobile-MicBuy 1-2.png',
            name: 'TAM MEO'
        },
        {
            pic: 'assets/images/team2/20220816-SingSing-AppMockupMobile-MicBuy 1-3.png',
            name: 'HUNG LAI'
        },
        {
            pic: 'assets/images/team2/20220816-SingSing-AppMockupMobile-MicBuy 1-4.png',
            name: 'THANG DO'
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
                background: {
                    sm: `url(/assets/background/bg-howtoplay.png) no-repeat`, 
                    xs: `url(/assets/background/bg-m-howtoplay.png)`
                },
                backgroundPosition: 'center',
                position: 'relative',
                backgroundSize: 'auto 100%'


            }}
            >
                <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                    <Stack direction={'column'} gap={9} sx={{my: 2}}>
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
                    }}>
                        THE TEAM
                    </Typography>

                    <Grid container sx={{
                        justifyContent: 'space-between', 
                        display: 'flex', 
                        position: 'relative',
                        width: '100%',
                        alignItems: 'center',
                        maxWidth: '2000px',
                        m: 'auto',

                    }} 
                        >

                        {team1.map((member, index) => {
                            return (
                                <Grid item key={index} xs={12} md={3} sx={{
                                    width: '100%',
                                    mx: 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    'img' : {
                                        width: '100%'
                                    },
                                    p: 0
                                }}>
                                    <Box sx={{
                                        width: '80%',
                                        minWidth: '250px',
                                        maxWidth: '300px',
                                        m: 'auto',
                                        backgroundColor: '#99999921',
                                        borderRadius: '20px',
                                        mb: 2,
                                        boxShadow: '0px 13px 21px 0px #00000057',
                                    }}>
                                        <img src={member.pic}/>
                                        <Typography variant="body1" sx={{
                                            //styleName: ArtistsName;
                                            
                                            fontFamily: 'Montserrat',
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            lineHeight: '22px',
                                            letterSpacing: '0em',
                                            textAlign: 'center',
                                            color: 'white',
                                            my: 1.5,
                                            'span:first-child' : {
                                            },
                                            'span:last-child' : {
                                                color: '#FFC000',
                                                fontWeight: 500
                                            }
                                        }}>
                                            <span>
                                                {member.name}
                                            </span>
                                            <br></br>
                                            <span>
                                                {member.pos}
                                            </span>
                                        </Typography>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Typography variant={'h1'} sx={{
                        fontFamily: 'Montserrat',
                        fontSize: {xs: '20px', md : '55px'},
                        fontWeight: 800,
                        lineHeight: {xs: '24px', md: '57px'},
                        letterSpacing: '0em',
                        textAlign: 'center',
                        mt: {
                            xs: 1, 
                            md: 3
                        },
                        'span:first-child' : {
                            color: '#00D668'
                        },
                        'span:last-child' : {
                            color: 'white',
                            fontFamily: 'Montserrat',
                            fontSize: {xs: '20px', md: '34px'},
                            fontWeight: 500,
                            lineHeight: {xs: '24px',md: '41px'},
                            letterSpacing: '0em',
                            textAlign: 'center',
                        }
                    }}>
                        <span>
                        20 YEARS OF EXPERIENCE 
                        </span>
                        <br></br>
                        <span>
                        In Digital Music and Karaoke Industry
                        </span>
                    </Typography>
                    <Grid container sx={{
                        justifyContent: 'space-evenly', 
                        display: 'flex', 
                        position: 'relative',
                        width: '100%',
                        alignItems: 'center',
                        maxWidth: '1200px',
                        m: 'auto',

                    }}>
                        {team2.map((member, index) => {
                            return (
                                <Grid key={index} item xs={12} md={2.3} sx={{width: '100%', mb: 2}}>
                                    <Box sx={{
                                        width: '100%',
                                        maxWidth: '200px',
                                        minWidth: '140px',
                                        'img' : {
                                            width: '100%'
                                        },
                                        minHeight: '196px',
                                        backgroundColor: '#99999921',
                                        borderRadius: '20px',
                                        mx: 'auto',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        pb: '2px',
                                        boxShadow: '0px 13px 21px 0px #00000057',
                                        
                                    }}>
                                        <img src={member.pic}/>
                                        <Typography variant='h1' sx={{
                                            fontFamily: 'Montserrat',
                                            fontSize: {xs: '13px',md: '18px'},
                                            fontWeight: 700,
                                            letterSpacing: '0em',
                                            textAlign: 'center',
                                            color: 'white',
                                            mt: 1,
                                            mb: 2,
                                            
                                        }}>
                                            {member.name}
                                        </Typography>
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