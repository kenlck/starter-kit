import React from 'react';
import App, { Container } from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/now-ui-kit.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, } = this.props;
    return (
      <Container>
        <div className="wrapper">
          <div className="main-panel" data="blue">
            <div className="content">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default MyApp;
