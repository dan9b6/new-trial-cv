import React from "react";
import Modal from "./components/Modal";
import Modal2 from "./components/Modal2";
import Modal3 from "./components/Modal3";
import Footer from "./components/Footer";

import Head from "next/head";

import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";

class Cv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponentOne: false,
      showComponentTwo: false,
      showComponentThree: false,
    };
  }

  render() {
    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <motion.div
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.8,
            },
          }}
          exit={{
            opacity: 0,
            x: "100vw",
            transition: {
              duration: 0.8,
            },
          }}
        >
          <div className="container">
            <div className={styles.cv}>
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
                className="text-center my-5"
              >
                My CV..
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 1.2 } }}
                className="text-center"
              >
                How long have I got to convince you?
              </motion.h2>
              <div className="row mt-5 justify-content-center align-items-center text-center">
                <div data-aos="fade-up" className="col-md-3">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1 } }}
                    className="btn text-white py-3 px-5 mb-5"
                    onClick={() => {
                      this.setState({
                        showComponentOne: !this.state.showComponentOne,
                        showComponentTwo: false,
                        showComponentThree: false,
                      });
                    }}
                  >
                    A few seconds
                  </motion.button>
                </div>
                <div data-aos="fade-up" className="col-md-3">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.2 } }}
                    className="btn text-white py-3 px-5 mb-5"
                    onClick={() => {
                      this.setState({
                        showComponentTwo: !this.state.showComponentTwo,
                        showComponentOne: false,
                        showComponentThree: false,
                      });
                    }}
                  >
                    A few minutes
                  </motion.button>
                </div>
                <div data-aos="fade-up" className="col-md-3">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.4 } }}
                    className="btn text-white py-3 px-5 mb-5"
                    onClick={() => {
                      this.setState({
                        showComponentThree: !this.state.showComponentThree,
                        showComponentOne: false,
                        showComponentTwo: false,
                      });
                    }}
                  >
                    10/15 minutes
                  </motion.button>
                </div>
              </div>

              {this.state.showComponentOne ? <Modal /> : null}
              {this.state.showComponentTwo ? <Modal2 /> : null}
              {this.state.showComponentThree ? <Modal3 /> : null}
            </div>
          </div>
          <Footer />
        </motion.div>
      </div>
    );
  }
}

export default Cv;
