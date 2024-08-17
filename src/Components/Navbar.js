import React, { useContext } from "react";
import logo from "../Asset/logo.webp";
import sindia from "../Asset/Certifications/skill_india.png";
import nsdc from "../Asset/Certifications/NSDC.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import logo1 from "../Asset/igcsmlogo.png"
import BlogContext from "../Context/BlogContext";

export default function Navbar() {
  const { news } = useContext(BlogContext);
  return (
    <>
      {/* Sticky bar starts */}
      <div
        className="d-flex bg-light bg-nav justify-content-end sticky-top shadow"
        style={{ zIndex: 1029 }}
      >
        <nav class="navbar w-100 navbar-expand-lg navbar-light">
          <a class="navbar-brand pl-4  p-0" href="#">
            <img src={logo1} alt="igcsm" height="55rem" width="60rem" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="1.875"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-house-plus"
            >
              <path d="M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354" />
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M15 6h6" />
              <path d="M18 3v6" />
            </svg> */}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class=" collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link text-dark" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-dark" to="/blog">
                  Blogs
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-dark" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <p className="m-0 ms-auto glow-email">
              <i class="fas fa-phone me-2"></i> +91 9818-841-248
            </p>
            <p className="ml-4 pl-4 mb-0 glow-email">
              <i class="fas fa-envelope me-2"></i> info@igtiindia.org
            </p>
          </div>
        </nav>
      </div>
      {/* sticky bar ends */}

      {/* logo area starts */}
      <div className="">
        <div className="d-flex">
          <div className="col-4  my-auto">
            <div className="logo  mx-0">
              <img src={logo} alt="IGCSM" width={"300px"} height={"100px"} />
            </div>
          </div>
          <div className="col-2 ">{/* One of three columns */}</div>
          <div className="col-6 text-right ">
            <div className="govlogo pl-4">
              {/* Images */}
              <div className="container  d-inline">
                <img src={nsdc} alt="" width={"230px"} />
              </div>
              <div className="container  d-inline mr-0">
                <img src={sindia} alt="" width={"140px"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* logo area ends */}

      {/* Navbar */}
      <div className="p-1 px-2 bg-orange sticky-top sticky-margin text-2xl" style={{ zIndex: 1032 }}>
        <marquee behavior="scroll" direction="left">
          {news}
        </marquee>
      </div>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/919818841248" // Replace with your WhatsApp number
        className="whatsapp_float sticky-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          size="3x"
          className="whatsapp-icon"
          color="white"
        />
      </a>
    </>
  );
}
