import React from 'react'
import { Link } from "react-router-dom";

const Checkout = () => {
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
            <li><Link to="javascript:void(0)"> Checkout</Link></li> 
          </ul>
        </div>
      </div>
      {/* col end */}
    </div>
  </div>
</section>
    {/*Page Title Area End  */}

{/* checkout main wrapper start */}
<div className="checkout_section_page">
  <div className="container">
    <div className="row">
      {/* Checkout Billing Details */}
      <div className="col-lg-8">
        <div className="checkout_main_div">
          <h5 className="checkout-title">Billing Details</h5>
          <div className="billing_from_main_div">
            <form method="POST">
              <div className="row">
                <div className="col-md-6">
                  <div className="checkout_input_div">
                    <label>Name</label>
                    <input type="text" className='form-control' placeholder="Enter Name" name="name" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout_input_div">
                  <label>Email</label>
                    <input type="email" className='form-control' placeholder="Enter Email" name="email" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout_input_div">
                  <label>Mobile No.</label>
                    <input type="tel" className='form-control' placeholder="Enter Mobile" name="mobile" required />
                  </div>
                </div>
                <div className="col-md-6">	
                  <div className="checkout_input_div">
                  <label>Pin Code</label>
                    <input type="text" className='form-control' placeholder="Enter Pin Code" name="name" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout_input_div">
                    <label>Address (House/Street/Locality)</label>
                    <input type="text" className='form-control' placeholder="Enter Address" name="address1" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout_input_div">
                    <label>Address (Landmark/Near By)</label>
                    <input type="text" className='form-control' placeholder="Enter Address" name="address2" />
                  </div>
                </div>
                <div className="col-md-6">	
                  <div className="checkout_input_div">
                    <label>City</label>
                    <input type="text" className='form-control' placeholder="Enter City" name="city" required />
                  </div>
                </div>
                <div className="col-md-6">	
                  <div className="checkout_input_div">
                    <label>State</label>
                    <input type="text" className='form-control' placeholder="Enter State" name="state" required />
                  </div>
                </div>
                <div className="col-md-12">	
                  <div className="checkout_input_div">
                    <label>Select Payment Method</label>
                    <select name="payment" className="form-control" required>
                      <option selected disabled>Payment method</option>
                      <option value="online">Pay Online</option>
                      <option value="cash">Cash On Delivery</option>
                    </select>
                  </div>
                </div>
              </div>
            </form></div>
        </div>
      </div>
      {/* Order Summary Details */}
      <div className="col-lg-4">
        <div className="order-summary-details">
          <h5 className="checkout-title">Price Details</h5>
          <div className="order-summary-content">
            {/* Order Summary Table */}
            <div className="order-summary-table">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Price</td>
                    <td>₹ 21998</td>
                  </tr>
                  <tr>
                    <td className="dis">Discount (-)</td>
                    <td className="dis">₹ 0</td>
                  </tr>
                 
                </tbody>
                <tfoot>
                  <tr>
                    <td className="dis">Delivery Charge (+)</td>
                    <td className="dis">₹ <span id="deliverycharge" /></td>
                  </tr>
                  <tr>
                    <td>Total Amount (Inc. GST)</td>
                    <td>₹ <span id="finalprice" /></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            {/* Order Payment Method */}
            <div className="order-payment-method">
              <div className="summary-footer-area">
                <div className="custom-control">
                  <input type="checkbox"  required />
                  <label>I have read and agree to the website <a href="Terms-Conditions">terms and conditions.</a></label>
                </div>
                <button type="submit" name="placeorder" className="btn btn-sqr">Proceed</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* checkout main wrapper end */}


    </>
  )
}

export default Checkout
