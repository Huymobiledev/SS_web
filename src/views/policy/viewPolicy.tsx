import { Stack, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import $ from 'jquery'

type Article = {
    title: string,
    content: string
}

export default function ViewPolicy(props: any) {
    
    return (
        <Fragment>
            <Stack direction={"column"} sx={{mt: '100px', width: '80vw', minWidth: 'sm', maxWidth: 'xl'}}>
                <Typography variant="h1" sx={{textAlign: 'center', fontSize: '46px', fontWeight: 700}}>
                    Privacy Policy
                </Typography>
                <Typography id='policy' sx={{textAlign: 'justify'}}>
                    <span>
                        <p>Sing Sing Pte. Ltd. (“SingSing,” “we” or “us”) provides you with a platform (&quot;Platform&quot;) that allows you to buy, sell, or display NFTs or create a collection of NFTs, in addition to other features and services (collectively, the “Services”).</p>
                        <p>We are committed to protecting your privacy. We have prepared this Privacy Policy to describe to you our practices regarding the Personal Data (as defined below) we collect, why we collect it, and how we use and disclose it.</p>
                        <p>We care about your privacy, so please take the time to learn about and understand our policies and practices. Please be aware that we reserve the right to amend any of our policies and practices at any time, but the most recent version of this Privacy Policy may always be found on this page. We recommend that you review the Privacy Policy on a regular basis to ensure that you are familiar with the most updated version.</p>
                        <p><b>1. Personal Data We Collect</b></p>
                        <p>&quot;Personal Data,&quot; as used herein, refers to information that directly or indirectly identifies or is reasonably capable of identifying an individual, as well as information that can be linked to an identified or reasonably identifiable individual.</p>
                        <p><b>1.1. Personal Data we collect from you</b></p>
                        <p>We may collect the following categories of Personal Data directly from you:</p>
                        <ul>
                            <li>&nbsp;Identification Information such as name, email, phone number, postal address;</li>
                            <li>&nbsp;Commercial Activity such as trading activity, order activity, deposits, withdrawals, account balances;</li>
                            <li>&nbsp;Correspondence such as information you provide to us in correspondence, including account opening and customer support; and</li>
                            <li>&nbsp;Sensory Information such as images that you upload to your Profile;</li></ul><p><b>1.2. Personal Data we collect automatically</b></p>
                            <p>We may collect the following categories of Personal Data automatically through your use of our Services:</p><ul>
                            <li>&nbsp;Online Identifiers such as IP address, domain name;</li>
                            <li>&nbsp;Device Information such as hardware, operating system, browser;</li>
                            <li>&nbsp;Usage Data such as system activity, internal and external information related to SingSing pages that you visit, clickstream information; and</li>
                            <li>&nbsp;Geolocation Data.</li>
                        </ul>
                            <p>Our automatic collection of Personal Data may involve the use of Cookies, described in greater detail below.</p>
                            <p><b>1.3. Personal Data we collect from third parties</b></p>
                            <p>Third parties, such as service providers and affiliates, may provide us with the following categories of Personal Data about you, which we may collect and/or verify:</p>
                            <ul>
                                <li>&nbsp;Identification Information such as name, email, phone number, postal address</li>
                                <li>&nbsp;Public blockchain data (bitcoin, ether, and other digital assets) isn&apos;t completely anonymous. Because Personal Data published on a blockchain (such as your digital asset address and IP address) can be correlated with Personal Data that we and others may have, we and others who can match your public digital asset address to other Personal Data about you may be able to identify you from a blockchain transaction. Furthermore, it may be possible to detect other Personal Data about you by using data analysis tools on a certain blockchain);</li>
                                <li>&nbsp;Financial Information such as bank account information, routing number, credit card number, debit card number; and</li><li>&nbsp;Additional Information at our discretion to comply with legal obligations.</li>
                            </ul>
                            <p><b>1.4. Public Information Observed from Blockchains</b></p>
                            <p>&nbsp;We collect data from publicly visible and/or accessible blockchain activity. This could include blockchain addresses and information on NFT purchases, sales, or transfers, which could subsequently be linked to other information you&apos;ve provided us.</p>
                            <p><b>1.5. Accuracy and retention of Personal Data</b></p><p>We take reasonable and practicable steps to ensure that your Personal Data held by us is (i) accurate with regard to the purposes for which it is to be used, and (ii) not kept longer than is necessary for the fulfillment of the purpose for which it is to be used.</p>
                            <p><b>2. Use of Your Personal Data</b></p>
                            <p>We collect Personal Data about you in an attempt to provide you with the best experience possible, protect you from risks related to improper use and fraud, and help us maintain and improve our Services. We may use your Personal Data to:</p>
                            <ul>
                                <li>Facilitate the creation of and secure your account;</li>
                                <li>Identify you as a user in our system;</li>
                                <li>Provide you with our Services, including but not limited to assisting you in viewing, buying and selling non-fungible tokens (&quot;NFTs&quot;) with our tools, as well as connecting directly with others to buy, sell, or transfer NFTs on public blockchains at your discretion;</li>
                                <li>Improve the administration of our Service and the quality of your experience when you interact with it, for example, by studying how you and other users find and engage with it;</li>
                                <li>Provide customer support and respond to your requests and inquiries;</li>
                                <li>Investigate and address conduct that may violate our Terms of Service;</li>
                                <li>Detect, prevent, and address fraud, violations of our terms or policies, and/or other harmful or unlawful activity;</li>
                                <li>Display your username next to the NFTs currently or previously accessible in your wallet, and next to NFTs on which you have interacted;</li>
                                <li><span>Send you a welcome email to verify ownership of the email address provided when your account was created;</span></li>
                                <li>Send you administrative notifications, such as security, support, and maintenance advisories;</li>
                                <li>Send you notifications related to actions on the Service, including notifications of offers on your NFTs;</li>
                                <li>Send you newsletters</li>
                            </ul>
                            </span>
                </Typography>
            </Stack>
        </Fragment>
    )
}