import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Modal2 = () => {
  return (
    <div className={styles.modal}>
      <div className="container mt-5 pt-2 pb-4">
        <div className="row justify-content-between text-center pt-5 px-4">
          <div className="col-md-2">
            <h2 className="mb-5">Bio</h2>
            <p>Name: Dan</p>
            <p>Age: 25</p>
            <p>Location: Poole</p>
            <p>Unpopular Opinion: I don't like cheese..</p>
          </div>
          <div className="col-md-3">
            <h2 className="mb-5">Skills</h2>
            <div className="row mb-3">
              <div className="col-md-4">
                <Image src="/react-p.png" alt="me" width={"50"} height={"50"} />
              </div>
              <div className="col-md-4">
                <Image src="/next-p.png" alt="me" width={"50"} height={"50"} />
              </div>
              <div className="col-md-4">
                <Image src="/js-p.png" alt="me" width={"50"} height={"50"} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <Image src="/html-p.png" alt="me" width={"50"} height={"50"} />
              </div>
              <div className="col-md-4">
                <Image src="/css-p.png" alt="me" width={"50"} height={"50"} />
              </div>
              <div className="col-md-4">
                <Image src="/sass.p.png" alt="me" width={"50"} height={"50"} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <Image src="/boot-p.png" alt="me" width={"50"} height={"50"} />
              </div>
              <div className="col-md-4">
                <Image src="/git-p.png" alt="me" width={"50"} height={"50"} />
              </div>
              <div className="col-md-4">
                <Image src="/c-p.png" alt="me" width={"50"} height={"50"} />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h2>Ironhack Lisbon</h2>
            <Image src="/ironhack-p.png" alt="me" width={"80"} height={"80"} />
            <h4>Top 3 Global Tech Academy</h4>
            <p>
              This was a Web Development Bootcamp set in the heart of Lisbon,
              Portugal. During my time on the course I covered a wide range of
              skills and coding languages. By the end of the course, I had
              created three web applications.
            </p>
          </div>
          <div className="col-md-3">
            <h2>The Training Room</h2>
            <Image src="/ttr-p.png" alt="me" width={"80"} height={"80"} />

            <h4>IT Sales Executive</h4>
            <p>
              Selling training courses and career opportunities amongst the IT
              sector - including Web Development, Software Development, Cyber
              Security, Technicians and Networking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
