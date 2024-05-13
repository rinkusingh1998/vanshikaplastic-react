import React from 'react'
import { Link } from "react-router-dom";

const Eprservices = () => {
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
                <h1> EPR / Waste Management Service</h1>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li>EPR / Waste Management Service</li>
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

{/* ===================epr pages section s */}
<section className="epr_page_sec">
  <div className="container">
    <div className="row align-items-center">
      {/* col */}
      <div className="col-lg-7 col-md-7 col-sm-12 col-12">
        <div className="epr_pg_txt_div" data-aos="fade-down" data-aos-duration={1600} data-aos-offset={0}>
          <h2>EPR &amp; Waste Management </h2>
          <p>EPR, or Extended Producer Responsibility, is a concept and policy approach that places the responsibility for the end-of-life management of a product on the producer rather than the consumer or local government. The goal of EPR is to encourage producers to design products with a lifecycle approach, considering environmental impact from production to disposal.</p>
          <h3>In the context of waste management, EPR typically involves:
            <p> <b>Design for Environment (DfE):</b> Encouraging producers to design products with materials that are easier to recycle or dispose of, reducing the environmental impact.</p>
            <p> <b>Waste Collection and Recycling Infrastructure:</b> Producers are often responsible for setting up or contributing to the infrastructure for collecting and recycling their products. This may include establishing collection points or partnering with existing recycling facilities.</p>
            <p> <b>Financial Responsibility:</b> Producers may be required to cover some or all of the costs associated with the collection, recycling, and proper disposal of their products at the end of their life cycle. This can provide an economic incentive for producers to design products that are more sustainable.</p>
          </h3></div>
      </div>
      {/* col end */}
      {/* col */}
      <div className="col-lg-5 col-md-5 col-sm-12 col-12">
        <div className="epr_imgpage_box" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={0}>
          <img src="../images/epr01.webp" alt className="img-fluid" />
        </div>
      </div>
      {/* col end */}
      {/* col 12  */}
      <div className="col-lg-12">
        <div className="epr_pg_txt_div2" data-aos="fade-down" data-aos-duration={1600} data-aos-offset={0}>
          <p>EPR is often implemented in various industries, such as electronics, packaging, and automotive, where products can have significant environmental impacts. The aim is to create a more circular economy by promoting resource efficiency and reducing the environmental footprint of products.</p>
          <p>In the context of waste management, the principles of EPR can contribute to reducing the amount of waste sent to landfills, promoting recycling and reuse, and minimizing the environmental impact of products throughout their life cycle.</p>
          <p>It's worth noting that the effectiveness of EPR depends on proper implementation, enforcement, and collaboration among producers, consumers, and regulatory authorities.</p>
        </div>
      </div>
      {/* col 12 end */}
    </div>
  </div>
</section>
{/* ===================epr pages section end */}


    </>
  )
}

export default Eprservices
