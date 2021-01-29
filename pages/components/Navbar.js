import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-4">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">DB</a>
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
};

export default Navbar;
