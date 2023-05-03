
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <>
  <div className="container-fluid bg-light pt-3 d-none d-lg-block">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center">
            <p>
              <i className="fa fa-envelope mr-2" />
              amrrrrkh1996@gmail.com
            </p>
            <p className="text-body px-3">|</p>
            <p>
              <i className="fa fa-phone-alt mr-2" />
              +962789308028
            </p>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <a className="text-primary px-3" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="text-primary px-3" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="text-primary px-3" href="">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="text-primary px-3" href="">
              <i className="fab fa-instagram" />
            </a>
            <a className="text-primary pl-3" href="">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid position-relative nav-bar p-0">
    <div
      className="container-lg position-relative p-0 px-lg-3"
      style={{ zIndex: 9 }}
    >
      <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
        <a href="" className="navbar-brand">
          <h1 className="m-0 text-primary">
            JO-<span className="text-dark">Tourism</span>
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between px-3"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto py-0">
            <a href="index.html" className="nav-item nav-link active">
              <Link to="/">Home</Link>
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="service.html" className="nav-item nav-link">
              Services
            </a>
            <a href="package.html" className="nav-item nav-link">
              Tour Packages
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu border-0 rounded-0 m-0">
                <a href="blog.html" className="dropdown-item">
                  Blog Grid
                </a>
                <a href="single.html" className="dropdown-item">
                  Blog Detail
                </a>
                <a href="destination.html" className="dropdown-item">
                  Destination
                </a>
                <a href="guide.html" className="dropdown-item">
                  Travel Guides
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</>

    </>
  )
}

export default Header