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
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.5 5.90692C21.7504 6.2343 20.9565 6.44896 20.144 6.54392C20.9968 6.04315 21.638 5.24903 21.948 4.30992C21.14 4.78025 20.2587 5.11152 19.341 5.28992C18.9545 4.88513 18.4897 4.56331 17.9748 4.3441C17.4598 4.12489 16.9056 4.01289 16.346 4.01492C14.08 4.01492 12.243 5.82492 12.243 8.05492C12.243 8.37092 12.279 8.67992 12.349 8.97492C10.7236 8.89761 9.13212 8.48233 7.67617 7.75556C6.22022 7.02879 4.93176 6.0065 3.893 4.75392C3.52883 5.36832 3.33742 6.0697 3.339 6.78392C3.3397 7.45189 3.50683 8.10915 3.82529 8.69631C4.14375 9.28348 4.6035 9.78203 5.163 10.1469C4.51248 10.1259 3.87602 9.95225 3.305 9.63992V9.68992C3.305 11.6479 4.72 13.2809 6.595 13.6529C6.24261 13.7464 5.87958 13.7938 5.515 13.7939C5.25 13.7939 4.993 13.7689 4.742 13.7189C5.01008 14.5268 5.52311 15.2312 6.20982 15.7343C6.89653 16.2373 7.72284 16.514 8.574 16.5259C7.11407 17.6505 5.32182 18.258 3.479 18.2529C3.147 18.2529 2.821 18.2329 2.5 18.1969C4.38125 19.3876 6.56259 20.0182 8.789 20.0149C16.336 20.0149 20.462 13.8579 20.462 8.51892L20.448 7.99592C21.2529 7.42959 21.9481 6.72177 22.5 5.90692Z" fill="white"/>
                                            </svg>
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