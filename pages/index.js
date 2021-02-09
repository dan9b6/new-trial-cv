import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Footer from "./components/Footer";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <Head>
        <title>danburts</title>
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
          <div className={styles.header}>
            <div className="row d-flex align-items-center mb-5">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 1,
                  },
                }}
                className="col-md-6 d-flex justify-content-center"
              >
                <Image src="/me.png" alt="me" width={"890"} height="1000" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 1,
                  },
                }}
                className="col-md-6 justify-content-center"
              >
                <h1 className="mb-4 mt-5">
                  Hello. I’m Dan. I’m a Web Developer looking for a new role!
                </h1>
                <p>
                  Are you considering employing a Junior Web Developer or
                  Software Engineer? Well, check out my personal website and see
                  if I am the right fit for your company!
                </p>
                <Link href="/cv">
                  <a>
                    <button
                      type="button"
                      className="btn text-white mt-5 py-3 px-5"
                    >
                      Check Me Out
                    </button>
                  </a>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
