import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 400, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 1.2,
        },
      }}
      exit={{
        opacity: 0,
        y: 400,
      }}
      className="text-center justify-content-center"
    >
      <Image
        className="mt-4"
        src="/gifs/wave.gif"
        alt="me"
        width={"180"}
        height={"140"}
      />

      <h1>Say Hi</h1>
      <p>07956107973 | danbh7296@gmail.com</p>
      <div className={styles.links}>
        <div className="d-flex text-center justify-content-center mb-4">
          <i className="fa fa-facebook mx-3" aria-hidden="true"></i>
          <i className="fa fa-instagram mx-3" aria-hidden="true"></i>
          <i className="fa fa-linkedin mx-3" aria-hidden="true"></i>
          <i className="fa fa-github mx-3" aria-hidden="true"></i>
        </div>
      </div>
      <p>Copyright © 2020 Dan Burton. All Rights Reserved</p>
    </motion.footer>
  );
};

export default Footer;
