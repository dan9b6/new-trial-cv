import React from "react";
import styles from "../../styles/Home.module.css";

import Footer from "../components/Footer";

import Image from "next/image";

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className="container mt-5 pt-2 pb-4">
        <h1 className="text-center">See...</h1>
        <h3 className="text-center">I can code!</h3>
      </div>
      <div className="row justify-content-center text-center mb-5">
        <div className="">
          <Image src="/modal1.gif" alt="me" width={"500"} height={"300"} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
