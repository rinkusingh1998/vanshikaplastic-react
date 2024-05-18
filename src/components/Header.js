import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import Sidenavbar from './Sidenavbar';
const Header = () => {
  return (
    <>

  <section className="top_bar_sec">
    <div className="conatiner" />
  </section>
  {/* navbar  */}
  <nav className="navbar navbar-expand-lg navbar-light sticky-top">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src="../logo/logo.png" className="img-fluid" />
      </Link>
      {/* phone view icons s */}
      <div className="phone_view_icons_div">
       
        <Link to="tel:+91-9810347240"> <i className="bx bx-phone-call" /> </Link>
        <Link className="offcanvas_btn bx bx-menu" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" />
      </div>
      {/* end */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/About">About Us</Link> </li>
          {/* dropdwon menu */}
          <li className="nav-item dropdown"><Link className="nav-link" to="">Products <i className="bx bx-chevron-down" /> </Link>
            <ul className="dropdown-menu">
              {/* sub menu */}
              <li className="mkp-submenu"><Link className="dropdown-item" to="">HDPE Granules <i className="bx bx-chevron-right" /></Link>
                <ul className="dropdown-menu sub_menu_scrolls"> 
                  <li><Link className="dropdown-item" to="">PE 100 SSBK Granules</Link></li>  
                  <li><Link className="dropdown-item" to="">PE 80 SBK Granules</Link></li>  
                  <li><Link className="dropdown-item" to="">PE 63 BK Granules</Link></li>  
                  <li><Link className="dropdown-item" to="">BD (Blow Grade) Granules</Link></li>  
                  <li><Link className="dropdown-item" to="">Natural Granules</Link></li>  
                  <li><Link className="dropdown-item" to="">Milky Granules</Link></li>  
                  <li><Link className="dropdown-item" to="">SSBL Blue Drum Granules</Link></li>  
                  <li><Link className="dropdown-item" to>Custom Compounded Granules</Link></li>  
                </ul>
              </li>
              {/* end submenu */}
              {/* sub menu */}
              <li className="mkp-submenu"><Link className="dropdown-item" to="">LLDPE Granules <i className="bx bx-chevron-right" /></Link>
                <ul className="dropdown-menu sub_menu_scrolls"> 
                  <li><Link className="dropdown-item" to="">Cable Compounding N1, N2 granules</Link></li>  
                </ul>
              </li>
              {/* end submenu */}
              {/* sub menu */}
              <li className="mkp-submenu"><Link className="dropdown-item" to="">PPCP Granules <i className="bx bx-chevron-right" /></Link>
                <ul className="dropdown-menu sub_menu_scrolls"> 
                  <li><Link className="dropdown-item" to="">Black PPCP Granules</Link></li>  
                  <li><Link className="dropdown-item" to="">Natural PPCP Granules</Link></li>  
                </ul>
              </li>
              {/* end submenu */}
              <li><Link className="dropdown-item" to="">Custom Compounding</Link></li>
            </ul>
          </li>
          {/* dropdwon menu end*/}
          <li className="nav-item"><Link className="nav-link" to="/Eprservices">EPR / Waste Management Service</Link></li>
          <li className="nav-item"><Link className="nav-link" to="">Brochure </Link></li>
          <li className="nav-item"><Link className="nav-link" to="/Contact">Contact Us</Link></li>
        </ul>
      </div>
      <ul className="navbar-nav navbar_num_xl m-auto">
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0">
            <Link to="mailto:info@vanshikaplastic.com" className="bx bx-envelope-open bx-tada" />
          </div>
          <div className="flex-grow-1 ms-2">
            <h5>E-Mail ID</h5>
            <Link to="mailto:info@vanshikaplastic.com"> info@vanshikaplastic.com</Link>
          </div>
        </div>
      </ul>
    </div>
  </nav>
  {/* navbar end */}


{/* sidenavbar start */}
<Sidenavbar/>
{/* sidenavbar end */}

    </>
 )
}

export default Header



