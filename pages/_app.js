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

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <ChakraProvider>
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
