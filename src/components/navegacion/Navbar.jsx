import React from 'react';
import {Link} from 'react-router-dom';
import logo1 from "../assets/logo1.png"
import espacio1 from "../assets/espacio1.jpg"
import espacio2 from "../assets/espacio2.jpg"
import espacio3 from "../assets/espacio3.jpg"

const Navbar = () => {
  return (
   <>
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <img src={logo1} alt="logo" width="100" height="50" className="rounded mt-1 " />
                <p className="text-white fs-3 fw-bold mx-2">DeMovie</p>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/action">Action</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/series">Series</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/comedy">Comedy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner mt-5">
                    <div class="carousel-item active">
                    <img src={espacio1} className="d-block w-100" alt="foto1"/>
                    </div>
                    <div class="carousel-item">
                    <img src={espacio2} className="d-block w-100" alt="foto2"/>
                    </div>
                    <div class="carousel-item">
                    <img src={espacio3}className="d-block w-100" alt="foto3"/>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    
   </>
  )     
};

export default Navbar;
