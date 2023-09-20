import React from "react";
import Contacts from "./../Contacts/Contacts";
import Parent from "./../Parent/parent";
import {  Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <link className="nav-link active" aria-current="page" to="/">
                Home
              </link>
            </li>
            <li className="nav-item">
              <link className="nav-link" to="about">
                ِAbout
              </link>
            </li>
            <li className="nav-item">
              <link className="nav-link" to="contacts">
                Contacts
              </link>
            </li>
            <li className="nav-item">
              <link className="nav-link" to="Parent">
                Parent
              </link>
            </li>
            <li className="nav-item">
              <link className="nav-link" to="Profile">
                Profile
              </link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
