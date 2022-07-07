import Document, { Head } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
    render() {
        return (
            // ...
            <Head>
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-JRK66KZS3X"
                    strategy="afterInteractive"
                />

                <Script id="google-analytics" strategy="afterInteractive">
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JRK66KZS3X', { page_path: window.location.pathname });
        `}
                </Script>
            </Head>
        );
    }
}
