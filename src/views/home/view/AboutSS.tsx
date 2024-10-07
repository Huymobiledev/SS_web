import { ButtonBase, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ViewNeuralNetwork } from "./components/ViewNeuralNetwork";
import { useSafariVersion } from "@/hooks/useSafari";
const contentAbout = {
    title: 'SingSing is set to become the #1 launchpool and gaming\nplatform on the TON ecosystem.',
    des: `With a robust pipeline of upcoming game partnerships\nwe're orchestrating a new era in blockchain gaming.`
}
export default function AboutSS(props: any) {
    const safariVersion = useSafariVersion();

    return <Stack sx={{
        width: "100%",
        display: "flex",
        backgroundColor: "transparent",
        flexDirection: "column",
        alignItems: 'center',
        mt: 2,
    }}>
        {(Number(safariVersion) > 16.8 || Number(safariVersion) == -1) && <Stack sx={{
            height: "25vw",
            width: "25vw"
        }}>
            <ViewNeuralNetwork />
        </Stack>}
        <Typography sx={{
            color: 'white',
            fontSize: 26,
            whiteSpace: 'pre-line',
            textAlign: "center",
            fontWeight: "700",
            mt: 2,
        }}>
            {contentAbout.title}
        </Typography>
        <Typography sx={{
            color: 'white',
            fontSize: 24,
            whiteSpace: 'pre-line',
            textAlign: "center",
            fontWeight: "500",
            mt: 2
        }}>
            {contentAbout.des}
        </Typography>
        <ButtonBase
            onClick={() => {
                window.open(
                    "https://singsing.gitbook.io/singsing/welcome/singsing-summary",
                    "_blank"
                );
            }}
            sx={{
                py: 1,
                border: '1px solid red',
                color: 'white',
                fontSize: {
                    xl: 18,
                    md: 16,
                    xs: 14
                },
                whiteSpace: 'pre-line',
                textAlign: "center",
                fontWeight: "700",
                width: "230px",
                borderRadius: 3,
                mt: 2
            }}>White Paper</ButtonBase>
    </Stack>
}