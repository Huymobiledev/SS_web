import { Box, Stack, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const handleClick = (event: any) => {
        let index = parseInt(event.target.id)
        let target = dataMenu[index]

        let targettedElement = document.getElementById(`${target.lable}`)
        console.log(index)

        switch (index) {
            case 5:
                window.open('https://twitter.com/FansipanLabs', '_blank')
                break
            default:
                targettedElement?.scrollIntoView({ behavior: 'smooth', block:'center' ,inline: 'start'})
        }
    }

export const dataMenu = [
    {
        lable: 'HOW TO PLAY',
        link: handleClick
    },
    {
        lable: 'WHITE PAPER',
        link: handleClick
    },
    {
        lable: 'MARKET PLACE',
        link: handleClick
    },
    {
        lable: 'LINK TREE',
        link: handleClick
    },
]


export default function Nav(props: any) {
    const {isDark} = props
    const router = useRouter()
    const {t} = useTranslation()



    return (
        <Fragment>
            <Stack direction='row' alignItems='center' id='a'
                sx={{
                    gap: 1,
                    height: '100%',
                    overflow: 'hidden',
                    pl: 5,
                    '@media screen and (max-width: 900px)': {
                        display: 'none',
                    },
                    mr: 0,
                    justifyItems: 'space-between',
                    width: '100%'
                }}
            >
                {
                    dataMenu.map((item, index) => (
                        <div key={index}>
                            <Box
                                
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    transition: 'transform 0.3s ease-in-out',
                                    ':hover': {
                                                transform: 'scale(1.1)'
                                            },
                                }}
                            >
                                    <Button
                                        id={`${index}`}
                                        onClick={item.link}
                                    >
                                        <Typography noWrap
                                        variant="button"
                                        id={`${index}`}
                                        sx={{
                                            //styleName: MainMenu-AllCap;
                                            fontFamily: 'Montserrat',
                                            fontSize: {md: '16px', xl: '20px'},
                                            fontWeight: '700',
                                            lineHeight: '24px',
                                            letterSpacing: '0em',
                                            textAlign: 'left',
                                            color: 'white'
                                        }}
                                    >
                                        {t(item.lable)}
                                    </Typography>
                                </Button>
                                {index != 3 && 
                                <img src='assets/icons/Frame 7.svg'/>
                            }
                            </Box>
                            
                        </div>
                    ))
                }
            </Stack>
        </Fragment>
    )
}