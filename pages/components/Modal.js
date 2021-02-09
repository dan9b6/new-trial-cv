import React from "react";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";

import Footer from "../components/Footer";

import Image from "next/image";

const Modal = () => {
  return (
    <motion.div
      className={styles.modal}
      initial={{ opacity: 0, y: 400 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
        },
      }}
      exit={{ opacity: 0 }}
    >
      <div className="container mt-5 pt-2 pb-4">
        <h1 className="text-center">See...</h1>
        <h3 className="text-center">I can code!</h3>
      </div>
      <div className="row justify-content-center text-center mb-5">
        <div className="">
          <Image src="/gifs/modal1.gif" alt="me" width={"500"} height={"300"} />
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
