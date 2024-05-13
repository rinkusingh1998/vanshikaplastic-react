import React from 'react'

const Sidenavbar = () => {
  return (
    <>
   {/* =====================================Mobile navbar navigation start================================================================================================================ */}
   
<div className="offcanvas offcanvas_scroll offcanvas-start d-block d-lg-none" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasScrollingLabel"><a href="/">
        <img src="../logo/logo.png" className="img-fluid" />
      </a></h5>
    <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">
      <i className="bx bx-x" />
    </button>
  </div>
  <div className="offcanvas-body">
    {/* Example single danger button */}
    <div className="mobile_navbar">
      <ul className="main_ul">
        <li><a href="/">Home</a></li>
        <li><a href="About">About Us</a></li>
        {/* products li */}
        <li><a href="">
            Products </a> <span data-bs-toggle="collapse" data-bs-target="#products-menu" className="bx bx-chevron-down" /></li>
        <div className="collapse" id="products-menu">
          <div className="card card-body profile_card_body">
            <ul className="profile_ul">
              {/* products sub  li */}
              <li><a href="">
                  HDPE Granules </a> <span data-bs-toggle="collapse" data-bs-target="#prosub_menu" className="bx bxs-chevron-down" /></li>
              <div className="collapse" id="prosub_menu">
                <div className="card card-body prodct_submenu_cardbody">
                  <ul className="product_submenu_ul">
                    <li><a href="">PE 100 SSBN Granule</a></li>  
                    <li><a href="">PE 80 SBN Granule</a></li>  
                    <li><a href="">PE 63 BN Granule</a></li>  
                    <li><a href="">BD (Blow) Granule</a></li>  
                    <li><a href="">Natural Granule</a></li>  
                    <li><a href="">Milkey Granule</a></li>  
                    <li><a href="">SSBL Blue Drum &amp; Blue SBL Granule</a></li>  
                    <li><a href="">Custom Compounding Granule</a></li>  
                  </ul>
                </div>
              </div>
              {/*products sub li end */}
              {/* products sub  li */}
              <li><a href="">
                  LLDPE Granules </a> <span data-bs-toggle="collapse" data-bs-target="#prosub_menu2" className="bx bxs-chevron-down" /></li>
              <div className="collapse" id="prosub_menu2">
                <div className="card card-body prodct_submenu_cardbody">
                  <ul className="product_submenu_ul">
                    <li><a href="">Cabu Compounding N1 n2 granules</a></li>  
                  </ul>
                </div>
              </div>
              {/*products sub li end */}
              {/* products sub  li */}
              <li><a href="">
                  PP Granules </a> <span data-bs-toggle="collapse" data-bs-target="#prosub_menu3" className="bx bxs-chevron-down" /></li>
              <div className="collapse" id="prosub_menu3">
                <div className="card card-body prodct_submenu_cardbody">
                  <ul className="product_submenu_ul">
                    <li><a href="">PPCP Black Granule</a></li>  
                    <li><a href="">Natural PPCP Granule</a></li>  
                  </ul>
                </div>
              </div>
              {/*products sub li end */}
              <li><a href="">Custom Compounding</a></li>
            </ul>
          </div>
        </div>
        {/*products drop li end */}
        <li className="nav-item"><a className="nav-link" href="Eprservices">EPR / Waste Management Service</a></li>
        <li className="nav-item"><a className="nav-link" href>Brochure </a></li>
        <li className="nav-item"><a className="nav-link" href="Contact">Contact Us</a></li>
      </ul>
    </div>
    {/* contact us div */}
    {/* <div class="offcanvas_ti">
<h3>Contact Details</h3>
</div> */}
    <div className="offcanvas_conatct_div">
      {/* div number */}
      <p>
        <a href="tel:+91-9810347240"><i className="bx bx-phone-outgoing" /> +91-9810347240</a>
        <a href="tel:+91-9310347240"><i className="bx bx-phone-outgoing" /> +91-9310347240</a>
        <a href="mailto:info@vanshikaplastic.com"> <i className="bx bx-mail-send" /> info@vanshikaplastic.com</a>
        <a href="mailto:sales@vanshikaplastic.com"> <i className="bx bx-mail-send" /> sales@vanshikaplastic.com</a>
      </p>
      <b> <i className="bx bx-map" /> Office &amp; Unit-1:</b>
      <p>D-25 &amp; 26 Sector-5, D.S.I.I.D.C Bawana Industrial Area, Delhi 110039 - (INDIA)</p>
      <b> <i className="bx bx-map" /> Unit-2:</b>
      <p>G1-228 RIICO Industrial Area Kahrani Bhiwadi Rajasthan 301019 - (INDIA)</p>
      {/* div number */}
    </div>
    {/* contact us div end */}
  </div>
</div>
{/* =====================================Mobile navbar navigation end================================================================================================================ */}
    </>
  )
}

export default Sidenavbar
