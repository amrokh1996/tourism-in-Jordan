import React from 'react'
import Hero1 from '../images/carousel-1.jpg'
import Hero2 from '../images/carousel-2.jpg'
import Tours from '../components/Tours'

export default function Home() {
  return (
    <div>
<div className="container-fluid p-0">
  <div id="header-carousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="w-100" src={Hero1} alt="Image" />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{ maxWidth: 900 }}>
            <h4 className="text-white text-uppercase mb-md-3">
              Tours &amp; Travel
            </h4>
            <h1 className="display-3 text-white mb-md-4">
              Let's Discover The World Together
            </h1>
            <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
              Book Now
            </a>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="w-100" src={Hero2} alt="Image" />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{ maxWidth: 900 }}>
            <h4 className="text-white text-uppercase mb-md-3">
              Tours &amp; Travel
            </h4>
            <h1 className="display-3 text-white mb-md-4">
              Discover Amazing Places With Us
            </h1>
            <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#header-carousel"
      data-slide="prev"
    >
      <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
        <span className="carousel-control-prev-icon mb-n2" />
      </div>
    </a>
    <a
      className="carousel-control-next"
      href="#header-carousel"
      data-slide="next"
    >
      <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
        <span className="carousel-control-next-icon mb-n2" />
      </div>
    </a>
  </div>
</div>

<div className="container-fluid py-5">
  <div className="container pt-5 pb-3">
    <div className="text-center mb-3 pb-3">
      <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>
        Packages
      </h6>
      <h1>Tour Packages</h1>
    </div>
    
        <Tours/>
      
    
  </div>
</div>
    </div>
  )
}
