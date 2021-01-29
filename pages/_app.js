import React from "react";
import App from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    // <Component/> returns the component it self
    // pageProps returns the props you use to in that component. It can be any data
    // router.route returns the route your component lives on. So in our case it will be '/' or '/products/[id]'
    // exitBeforeEnter: AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered
    return (
      <div>
        <Head>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            rel="stylesheet"
          />

          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.2.0/mdb.min.css"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.2.0/mdb.min.js"
          ></script>

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato&family=Lobster&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    );
  }
}

export default MyApp;
