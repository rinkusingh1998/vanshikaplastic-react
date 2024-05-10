import React, { useState } from 'react';

import { Link } from "react-router-dom";
function QuantityInput() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity <= 100) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  
  return (
<>
<div className="main_div_flx_add">
<div className="quantity products_qty_input">
      <button className="minus" aria-label="Decrease" onClick={handleDecrease}>−</button>
      <input type="number" className="input-box" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}  min={1}  max={10} />
      <button className="plus" aria-label="Increase" onClick={handleIncrease}>+</button>
    </div>
    
<div className="addtocart_div">
  <Link to="">Add To Cart</Link>
</div>
</div>
</>
  );
}

const Productsdetails = () => {
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
            <li><Link to="javascript:void(0)"> Dust Less School Chalk Making Machine</Link></li> 
          </ul>
        </div>
      </div>
      {/* col end */}
    </div>
  </div>
</section>
    {/*Page Title Area End  */}

{/* products details section start */}
<section className="products_details_section">
        <div className="container">
          <div className="row">
            {/* col start */}
           <Productdetaiitems/>
           
            {/* col end */}
          </div>
        </div>
      </section>
{/* end */}

    </>
  )
}

export default Productsdetails


function Productdetaiitems(){
  return(
    <>
    {/* col start  */}
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="products_dt_img_maindiv">
<div className="img_box_pro_dt">
  <Link to=""><img src="../products/1.png" alt="priyavindustries" className='img-fluid' /></Link>
</div>
      </div>
    </div>
    {/* col end */}

     {/* col start  */}
     <div className="col-lg-7 col-md-6 col-sm-12">
      <div className="products_dt_txt_div">
<h2>Dust Less School Chalk Making Machine</h2>
<div class="review-box"> 
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i> 
<i class="fa fa-star-half-o"></i> 
<span>(4.5 Star Ratings)</span> 
 </div>

<p class="products_dt_price"><b class="productsnetprice">₹ 185000 /-</b> <span class="productsdissprice"> ₹ 148000 /-</span></p>
<h6 class="products_dt_disscount"> <b class="product_dtoffdiv">(30% Off)</b> <span class="products_dtfreedlv">Free Delivery</span></h6>

{/*  */}
<QuantityInput />

{/*  */}

<div className="delivery_option_div">
  <h4><span className='fa fa-truck'></span> Delivery Options</h4>
 <div className="input-group">
  <input type="text" className="form-control" placeholder="Enter Pin Code" />
  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Check</button>
</div>
<p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
</div>


      </div>
    </div>
    {/* col end */}

    
    
    </>
  )
}