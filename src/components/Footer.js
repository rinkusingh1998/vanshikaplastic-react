import React from 'react'
import './Footer.css';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
<div>
  <footer className="footer">
    <div className="footer_overlay">
      <div className="container">
        <div className="row">
          {/* col start */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="footer_about_div" data-aos="fade-down" data-aos-duration={800} data-aos-offset={0}>
              <div className="footer_logo_div">
                <Link to="index.php"><img src="../logo/white-logo.png" alt className="img-fluid" /></Link>
              </div>
              <p>Vanshika Plastic Industry is a dynamic force in the plastic industry, specializing in the manufacturing and distribution of high-quality HDPE, PP, and LLDPE granules.... <Link to="">Read More</Link></p>
              <div className="makeindia">
                <img src="../images/makeindia.png" alt className="img-fluid" />
                <img src="../images/swachh-bharat.png" alt className="img-fluid" />
              </div>
            </div>
          </div>
          {/* col end */}
          {/* col start */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="footer_headti" data-aos="fade-down" data-aos-duration={1200} data-aos-offset={0}>
              <h5> Products</h5>
              <ul>
                <li><Link to="">PE 100 SSBN Granule</Link></li>  
                <li><Link to="">PE 80 SBN Granule</Link></li>  
                <li><Link to="">PE 63 BN Granule</Link></li>  
                <li><Link to="">BD (Blow) Granule</Link></li>  
                <li><Link to="">Natural Granule</Link></li>  
              </ul>
            </div>
          </div>
          {/* col end */}
          {/* col start */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="footer_headti" data-aos="fade-up" data-aos-duration={1400} data-aos-offset={0}>
              <h5> Contact Us</h5>
              {/* media div start */}
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <i className="bx bx-map" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <div className="footer_num_div">
                    <p>D-25 &amp; 26 Sector-5, D.S.I.I.D.C Bawana Industrial Area, Delhi 110039 - (INDIA)</p>
                  </div>
                </div>
              </div>
              {/* media div end */}
              {/* media div start */}
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <i className="bx bxs-phone-call" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <div className="footer_num_div">
                    <Link to="tel:+91-9810347240"> +91-9810347240</Link>
                    <Link to="tel:+91-9310347240"> +91-9310347240</Link>
                  </div>
                </div>
              </div>
              {/* media div end */}
              {/* media div start */}
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <i className="bx bx-envelope-open" />
                </div>
                <div className="flex-grow-1 ms-2">
                  <div className="footer_num_div">
                    <Link to="mailto:info@vanshikaplastic.com">  info@vanshikaplastic.com</Link>
                    <Link to="mailto:sales@vanshikaplastic.com">  sales@vanshikaplastic.com</Link>
                  </div>
                </div>
              </div>
              {/* media div end */}
            </div>
          </div>
          {/* col end */}
          {/* col start */}
          <div className="col-lg-2 col-md-6 col-sm-12 col-12">
            <div className="footer_headti" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={0}>
              <h5> Location</h5>
              <p><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28129.685786216156!2d76.83927438755286!3d28.200909707771977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sG1-228%20RIICO%20Industrial%20Area%20Kahrani%20Bhiwadi%20Rajasthan%20301019%20-!5e0!3m2!1sen!2sin!4v1709616569827!5m2!1sen!2sin" width="100%" height="auto" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></p>
            </div>
          </div>
          {/* col end */}
        </div>
      </div>
    </div>
  </footer>
  {/* ===================================copyright section start================= */}
  <section className="copyright_section">
    <div className="container">
      <div className="row">
        {/* col start  */}
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <p>Copyright © 2023 Vanshika Plastic Industry. All Right Reserved.</p>
        </div>
        {/* col end */}
      </div>
    </div>
  </section>
  {/* ===================================copyright section end================= */}
</div>


    </>
  )
}

export default Footer
