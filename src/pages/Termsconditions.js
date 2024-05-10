import React from 'react'
import { Link } from "react-router-dom";

const Termsconditions = () => {
  return (
    <>
     
    {/*  Page Title Area Start  */}

    <section className="inner_page_tisection_bred">
  <div className="container-fluid">
    <div className="row align-items-center">
      {/* col */}
      <div className="col-lg-12">
        <div className="page_ti_inner_page">
          <ul>
            <li className="active"><Link to="/">Home</Link></li> -
            <li><Link to="javascript:void(0)"> Terms and Conditions</Link></li> 
          </ul>
        </div>
      </div>
      {/* col end */}
    </div>
  </div>
</section>
    {/*Page Title Area End  */}

{/* Terms and Conditions  */}

<section className="terms_condition_section">
    <div className="container">
        <div className="row">
            {/* col start */}
            <div className="col-lg-12">
                <div className="term_constion_txt_div">
                    <h2>Terms and Conditions</h2>
                    <b>Last updated: May 04, 2024</b>

                    <h3>1. General</h3>
                    <p>1.1. These terms and conditions govern the sale and use of the Manual Chalk Making Machine, Designer Candle Making Machine, and Manual Slipper Sole Cutting Press (hereafter referred to as "the Machines") offered by [Your Company Name], (hereafter referred to as "the Seller").</p>
                    <p>1.2. By purchasing or using the Machines, the buyer (hereafter referred to as "the Customer") agrees to be bound by these terms and conditions.</p>
                    <h3>2. Purchase</h3>
                    <p>2.1. The Customer agrees to pay the agreed-upon purchase price for the Machines as specified in the invoice provided by the Seller.</p>
                    <p>2.2. Payment shall be made in full prior to the delivery of the Machines unless otherwise agreed upon in writing by both parties.</p>
                    <h3>3. Delivery</h3>
                    <p>3.1. The Seller shall make reasonable efforts to deliver the Machines to the Customer within the agreed-upon timeframe.</p>
                    <p>3.2. Any delays in delivery shall not entitle the Customer to cancel the order or seek compensation unless such delays are due to the fault of the Seller.</p>
                    <h3>4. Use of Machines</h3>
                    <p>4.1. The Customer agrees to use the Machines strictly in accordance with the user manual and instructions provided by the Seller.</p>
                    <p>4.2. The Seller shall not be liable for any damage or injury caused by the misuse or improper operation of the Machines.</p>
                    <h3>5. Warranty</h3>
                    <p>5.1. The Machines are warranted to be free from defects in materials and workmanship for a period of [insert warranty period] from the date of delivery.</p>
                    <p>5.2. The warranty does not cover damage caused by misuse, negligence, or unauthorized modifications to the Machines.</p>
                    <h3>6. Limitation of Liability</h3>
                    <p>6.1. The Seller shall not be liable for any indirect, incidental, or consequential damages arising out of the purchase or use of the Machines.</p>
                    <p>6.2. In no event shall the Seller's liability exceed the purchase price paid by the Customer for the Machines.</p>

                </div>
            </div>
            {/* col end */}
        </div>
    </div>
</section>
{/* Terms and Conditions  */}

    </>
  )
}

export default Termsconditions;
