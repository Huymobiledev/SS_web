import { Box, Stack } from "@mui/material";
import Link from "next/link";


export function MobileDownload() {
    return (
        <Box sx={{
            wdith: '80%',
            display: {
                xs: 'flex',
                sm: 'none',
                justifyContent: 'center',

                
            }
        }}>
            <Stack direction={'column'} gap={2} sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Link href='https://apps.apple.com/app/singsing-network/id1611106632' target='_blank'>
                    <img src='/assets/images/welcome/appstore.png' style={{width: '100%'}}/>
                </Link>

                <Link href='https://app.singsing.net/vi' target='_blank'>
                    <img src='/assets/images/welcome/dapp.png' style={{width: '100%'}}/>
                </Link>
                
                <Link href='https://play.google.com/store/apps/details?id=net.singsing.app&pli=1' target='_blank'>
                    <img src='/assets/images/welcome/ggplay.png' style={{width: '100%'}}/>
                </Link>
            </Stack>
        </Box>
    )
}