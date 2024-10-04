/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as React from 'react';

class WebAppDocument extends Document {
  static async getInitialProps(ctx: any) {
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => <App {...props} />,
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: <>{initialProps.styles}</>,
      };
    } finally {
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="icon" href="/assets/icons/favicon.jpg" sizes="any" />

          <link href="assets/js/font.css" rel="stylesheet" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG || `G-DFZPQTX28M`
              }`}
          ></script>
          <script
            data-partytown-config
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_GTAG || `G-DFZPQTX28M`
                }');
            
            `,
            }}
          />
          <link rel="stylesheet" href="assets/js/animate.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default WebAppDocument;
