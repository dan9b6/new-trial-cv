import React from "react";
import Link from "next/link";
import Image from "next/image";

class Navbar extends React.Component {
  componentDidMount() {
    let navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((element) => {
      element.addEventListener("click", () => {
        let navStatus = document.getElementById("navbarNav");
        navStatus.classList.remove("show");
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg py-4">
          <div className="container">
            <Link href="/">
              <a>
                <Image
                  src="/gifs/wave.gif"
                  alt="me"
                  width={"100"}
                  height={"75"}
                />
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <Link href="/cv">
                  <li className="nav-item">
                    <a className="nav-link">CV</a>
                  </li>
                </Link>
                <Link href="/about">
                  <li className="nav-item">
                    <a className="nav-link">What can I offer?</a>
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="nav-item">
                    <a className="nav-link">Contact</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
