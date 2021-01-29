import React, { Component, useState } from "react";

import Footer from "./components/Footer";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponentOne: false,
      showComponentTwo: false,
      showComponentThree: false,
    };
  }

  render() {
    AOS.init();
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
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
              className="text-center my-5"
            >
              What can I offer?
            </motion.h1>
            <div className="row justify-content-evenly">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 1.1 } }}
                className="col-md-3 text-center  my-5"
              >
                <Image src="/about1.gif" alt="me" width={"250"} height="250" />
                <h3 className="mb-4">Try Before You Buy!</h3>
                <p>
                  I’m so eager to prove my worth, I’ll give you two weeks free
                  (well, in exchange for a few cuppas and regular biscuits). If
                  you really don’t think I’m a good match at the end, we part
                  ways, no hard feelings.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 1.3 } }}
                className="col-md-3 text-center  my-5"
              >
                <Image src="/about2.gif" alt="me" width={"250"} height="250" />
                <h3 className="mb-4">Enthusiasm</h3>
                <p>
                  This is something I am incredibly passionate about. I know I
                  will end up learning for the rest of my life, but this really
                  excites me. I know this is what I want for now and my future.
                  I’m open minded and enthusiastic to learn and improve.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 1.5 } }}
                className="col-md-3 text-center  my-5"
              >
                <Image src="/about3.gif" alt="me" width={"250"} height="250" />
                <h3 className="mb-4">Innovation</h3>
                <p>
                  I have a big desire to be at the forefront of innovation,
                  which is one of the main reasons I chose to complete Ironhack,
                  learning React. I can talk more about this in detail when we
                  meet.
                </p>
              </motion.div>
            </div>

            <div className={styles.project}>
              <div data-aos="fade-up" className={styles.img}>
                <Image
                  src="/project.png"
                  alt="me"
                  width={"250"}
                  height={"140"}
                />
              </div>
              <h1 className="text-center my-5">Projects</h1>
              <div className="row justify-content-evenly">
                <div data-aos="fade-up" className="col-md-3 text-center  my-5">
                  <Image
                    src="/puffdaddy.png"
                    alt="me"
                    width={"250"}
                    height={"150"}
                  />
                  <h3 className="my-4">Puff Daddy</h3>
                  <p>
                    I created this game using CanvasJS, JS, HTML & CSS. The aim
                    of the game is to keep this Pufferfish alive by swimming
                    under the hooks and over the seaweed. Also, you have to
                    avoid floating plastic in the sea. If you hit the plastic
                    the Pufferfish will rage and double in size - making it much
                    harder to avoid the obstacles!
                  </p>
                  <Link href="/about">
                    <a>
                      <button
                        type="button"
                        className="btn text-white mt-5 py-3 px-5"
                      >
                        Code
                      </button>
                    </a>
                  </Link>
                </div>
                <div data-aos="fade-up" className="col-md-3 text-center  my-5">
                  <Image
                    src="/foothead.png"
                    alt="me"
                    width={"250"}
                    height={"150"}
                  />
                  <h3 className="my-4">Footheads</h3>
                  <p>
                    This is a web app created using React.JS, Node.JS, a restful
                    API, HTML, SASS and JS. The Web App keeps you up to date
                    with all the latest football information for the top leagues
                    in Europe. Once you sign up, you gain exclusive features
                    like comments, likes, blog posting and reading, profile
                    creation and creating your own dream team.
                  </p>
                  <Link href="/about">
                    <a>
                      <button
                        type="button"
                        className="btn text-white mt-5 py-3 px-5"
                      >
                        Code
                      </button>
                    </a>
                  </Link>
                </div>
                <div data-aos="fade-up" className="col-md-3 text-center  my-5">
                  <Image
                    src="/ironcode.png"
                    alt="me"
                    width={"250"}
                    height={"150"}
                  />
                  <h3 className="my-4">IronCode</h3>
                  <p>
                    This web app was built using Javascript, CSS, HTML,
                    Bootstrap and Node.JS. It was created for existing and
                    previous cohorts at Ironhack to add their projects for
                    others to see and take inspiration from. This had a like,
                    comment, profile creation and project upload features. There
                    is authentication for sign-in/sign-up features.
                  </p>
                  <Link href="/about">
                    <a>
                      <button
                        type="button"
                        className="btn text-white my-5 py-3 px-5"
                      >
                        Code
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
              <h1 className="text-center my-5">My CV..</h1>
              <h2 className="text-center">
                How long have I got to convince you?
              </h2>
              <div className="row mt-5 justify-content-center align-items-center text-center">
                <div data-aos="fade-up" className="col-md-3">
                  <button
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
                  </button>
                </div>
                <div data-aos="fade-up" className="col-md-3">
                  <button
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
                  </button>
                </div>
                <div data-aos="fade-up" className="col-md-3">
                  <button
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
                  </button>
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

export default About;
