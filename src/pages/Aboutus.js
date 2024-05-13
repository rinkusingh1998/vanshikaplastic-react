import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


const Aboutus = () => {

  return (
    <>


  {/* pagte titile section start  */}
  <section className="page_title_mkp_section">
    <div className="page_ti_overly_mkp_div">
      <div className="container">
        <div className="row">
          {/* col start */}
          <div className="col-xxl-12 colxl-12 col-lg-12 col-sm-12 col-12">
            <div className="page_title_tax_mkp_main_div">
              <div className="page_title_tax_mkp_div">
                <h1> About Us</h1>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
          {/* col end */}
        </div>
      </div>
    </div>
  </section>
  {/* pagte titile section end */}
  {/* about us section start */}
  <section className="about_us_section">
    <div className="container">
     
      <div className="row">
        {/* col start */}
        <div className="col-lg-5 col-md-6 col-sm-12 col-12">
          <div className="about_img_main_div" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={0}>
            <div className="about_vd_div">
              <video width="100%" loop muted autoPlay>
                <source src="../banner/about02.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        {/* col end */}
        {/* col start */}
        <div className="col-lg-7 col-md-6 col-sm-12 col-12">
          <div className="about_content_div" data-aos="fade-down" data-aos-duration={1600} data-aos-offset={0}>
          <h1>Welcome to<span>Vanshika Plastic</span> </h1>
            <h3>Leading Manufacturer, Supplier and Exporter of</h3>
            <h4> HDPE Granules |  LDPE Granules |  LLDPE Granules</h4>
            <p>Vanshika Plastic Industry is a dynamic force in the plastic industry, specializing in the manufacturing and distribution of high-quality HDPE, PP, and LLDPE granules. Established in 2001, our company has emerged as a trusted name, delivering innovative and sustainable solutions to meet the diverse needs of our clients.</p>
            <b>Mission Statement</b>
            <p>At Vanshika Plastic Industry, our mission is to be a leader in the plastic industry, providing top-notch HDPE, PP, and LLDPE granules that meet the highest quality standards. We are committed to innovation, sustainability, and customer satisfaction in all our endeavors.</p>
            <h3>Key Products</h3>
            <b>HDPE Granules</b>
            <p>Our HDPE granules are renowned for their strength, durability, and versatility.</p>
          </div>
        </div>
        {/* col end */}
        {/* col s */}
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="about_content_div" data-aos="fade-up" data-aos-duration={1600} data-aos-offset={0}>
            <b>PP Granules</b>
            <p>Vanshika Plastic Industry offers a wide range of PP granules known for their exceptional clarity, impact resistance, and chemical stability. </p>
            <b>LLDPE Granules</b>
            <p>Our LLDPE granules are designed for flexibility, toughness, and excellent processability.</p>
            <h3>Manufacturing Excellence</h3>
            <p>At the heart of our operations are state-of-the-art manufacturing facilities equipped with cutting-edge technology. Our commitment to quality ensures that our HDPE, PP, and LLDPE granules meet and exceed industry standards.</p>
            <h3>Sustainability Initiatives</h3>
            <p>Vanshika Plastic Industry is dedicated to sustainable practices. We actively engage in [recycling programs/environmentally-friendly initiatives] to reduce our environmental impact and contribute to a greener future.</p>
          </div>
        </div>
        {/* col end */}
      </div>
    </div>
  </section>
  {/* about us section end */}
  <section className="container our_team_sec">
    {/* col start */}
    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="making_main_txt_div" data-aos="fade-down" data-aos-duration={1800} data-aos-offset={0}>
        <h3> Premium Plastic Material For Every Need.</h3>
        <p>Your search for a flawless range of Plastic Granules ends at Vanshika Plastic Industry. We offer a range which comprises of HDPE Granules, LDPE Granules, LLDPE Granules, Natural HDPE, Milky White HDPE.</p>
      </div>
    </div>
    {/* col end */}
    <section className="card__container" data-aos="fade-up" data-aos-duration={2500} data-aos-offset={0}>
      {/*==================== SERVICE CARD ====================*/}
      <div className="container">
        <div className="row">
          {/* col s */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card__bx card__1">
              <div className="card__data">
                <div className="card__icon">
                  <div className="card__icon-bx">
                    <i className="bx bx-cog" />
                  </div>
                </div>
                <div className="card__content">
                  <h3>infrastructure</h3>
                  <p>The manufacturing unit and office of the company are located in the Bhiwadi Rajasthan &amp; Delhi. The unit is supported with state-of-the-art machinery for manufacturing of the Plastic Granules.</p>
                </div>
              </div>
            </div>
          </div>
          {/* col end */}
          {/* col s */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card__bx card__2">
              <div className="card__data">
                <div className="card__icon">
                  <div className="card__icon-bx">
                    <i className="bx bx-user-pin" />
                  </div>
                </div>
                <div className="card__content">
                  <h3>Our Team</h3>
                  <p>Forming the backbone of the company, the team at Vanshika Plastic Industry is always ready to rise up to the challenging market demands. The team members involved in production, quality control and delivery.</p>
                </div>
              </div>
            </div>
          </div>
          {/* col end */}
          {/* col s */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card__bx card__3">
              <div className="card__data">
                <div className="card__icon">
                  <div className="card__icon-bx">
                    <i className="bx bx-edit" />
                  </div>
                </div>
                <div className="card__content">
                  <h3>quality assurance</h3>
                  <p>We have a keen understanding of the quality levels expected by the clientele and accordingly undertake the strictest checking at all levels to ensure the best. Right from sourcing high grade raw material.</p>
                </div>
              </div>
            </div>
          </div>
          {/* col end */}
          {/* col s */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card__bx card__4">
              <div className="card__data">
                <div className="card__icon">
                  <div className="card__icon-bx">
                    <i className="bx bxs-message-alt-dots" />
                  </div>
                </div>
                <div className="card__content">
                  <h3>Commitment</h3>
                  <p>Our commitment to our customers is to maintain product consistency and ensure that our service is good, not limited to the point of sale but also to issues that arise after the sale. We listen to all feedback and continue to improve all aspects.</p>
                </div>
              </div>
            </div>
          </div>
          {/* col end */}
        </div>
      </div>
    </section>
  </section>
  {/* end section */}


    </>
  )
}

export default Aboutus
