import { Stack, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import $ from 'jquery'

type Article = {
    title: string,
    content: string
}

export default function ViewTerms(props: any) {
    const [articleData, setArticleData] = useState<Article>();
    const [loaded, setLoaded] = useState<Boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://nft-api.singsing.net/article/term');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data != undefined) {
              setArticleData(data)
            }

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    

      useEffect(() => {
        if (articleData){
          document.getElementById('termContent')!.innerHTML = articleData!.content
        } 
      }, [articleData])

    return (
        <Fragment>
            <Stack direction={"column"} sx={{mt: '100px', width: '80vw', minWidth: 'sm', maxWidth: 'xl'}}>
                {loaded &&
                <Typography variant="h1" sx={{textAlign: 'center', fontSize: '46px', fontWeight: 700}}>
                {articleData!.title}
                </Typography>
               }
                <Typography id='termContent' sx={{textAlign: 'justify'}}>
                </Typography>
            </Stack>
        </Fragment>
    )
}