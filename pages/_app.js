import "../styles/globals.css";
import Layout from "../components/layout";
import "swiper/css/bundle";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import { store } from "../stores/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "react-scroll-to-top";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url);
        };
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on("routeChangeComplete", handleRouteChange);

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <ChakraProvider>
                    <Head>
                        <meta
                            name="viewport"
                            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                        />
                    </Head>
                    <Layout>
                        <Component {...pageProps} />
                        <ScrollToTop smooth color="#6f00ff" width="40px" />
                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            draggable={false}
                            pauseOnVisibilityChange={false}
                            closeOnClick
                            pauseOnHover={false}
                        />
                    </Layout>
                </ChakraProvider>
            </Provider>
        </SessionProvider>
    );
}

export default MyApp;
