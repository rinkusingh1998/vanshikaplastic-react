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
    <div className="cart_qty_input">
      <button className="minus" aria-label="Decrease" onClick={handleDecrease}>−</button>
      <input type="number" className="input-box" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}  min={1}  max={10} />
      <button className="plus" aria-label="Increase" onClick={handleIncrease}>+</button>
    </div>
  );
}

const Cart = () => {
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
            <li><Link to="javascript:void(0)"> Cart</Link></li> 
          </ul>
        </div>
      </div>
      {/* col end */}
    </div>
  </div>
</section>
    {/*Page Title Area End  */}

{/*  */}
<section className="cart_section">
    <div className="container">
        <div className="row">
            {/* col start */}
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="cart_main_div_table">
                    <table className='table table-bordered table-striped'>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>

                        <tr>
                            <td>1.</td>
                            <td><img src="../products/1.png" alt="Priyavindustries" className='img-fluid' /></td>
                            <td><h3 className='item_name'>Chalk Making Mold 100 Piece</h3></td>
                            <td><p className='price_disstd'><b>₹ 1,85,000 /-</b> <span> ₹ 1,48,000 /-</span> <i> (30% Off) </i></p></td>
                            <td><QuantityInput /></td>
                            <td><p className='pricetable'>₹ 1,85,000 /-</p></td>
                            <td><a href="" className='trash_btn'> <i class='fa fa-trash'></i> Remove</a></td>
                        </tr>
                    </table>
                    
                </div>

                <div className="checkout_btn_div">
                        <Link to="Checkout">Proceed To Checkout</Link>
                    </div>
            </div>
            {/* col end */}
        </div>
    </div>
</section>
{/*  */}


    </>
  )
}

export default Cart
