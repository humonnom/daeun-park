import React from "react";
import App from "next/app";
import Head from "next/head";

// import "../src/styles.scss";
import "../src/styles.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Daeun's Portfolio</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
