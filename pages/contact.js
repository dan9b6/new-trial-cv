import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

import Footer from "./components/Footer";

const Contact = () => {
  return (
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
        <h1 className="text-center my-5">Fancy a chat?</h1>
        <p className="text-center">
          Are you interested in hiring me? Feel free to get in touch. Would be
          great to hear from you!
        </p>
        <div className="row align-items-center mb-5">
          <div className="col-md-8">
            <form className="p-4 m-5">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                />
                <label className="form-label" for="form4Example1">
                  Name
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form4Example2"
                  className="form-control"
                />
                <label className="form-label" for="form4Example2">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <textarea
                  className="form-control"
                  id="form4Example3"
                  rows="4"
                ></textarea>
                <label className="form-label" for="form4Example3">
                  Message
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Send
              </button>
            </form>
          </div>
          <div className="col-md-4">
            <Image src="/point.png" alt="me" width={"250"} height={"230"} />
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contact;
