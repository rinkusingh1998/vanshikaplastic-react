import React from 'react'
import { Cateproductdata } from '../data/Cateproducts';
import { Link } from "react-router-dom";
const Chalkmakingmachine = () => {
  const filteredItems = Cateproductdata.filter(item => item.categoryname == 'Chalk Making Machine');

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
            <li><Link to="javascript:void(0)"> Chalk Making Machine</Link></li> 
          </ul>
        </div>
      </div>
      {/* col end */}
    </div>
  </div>
</section>

   
    {/*Page Title Area End  */}

    {/* category_products section start */}
      <section className="category_products_section">
        <div className="container">
          <div className="row">
            {/* col start */}
            {filteredItems.map((v, i) => (
              <Cateproductsitems cateproitems={v} key={i} />
            ))}
           
            {/* col end */}
          </div>
        </div>
      </section>
      {/* category_products section end */}
    </>
  )
}

export default Chalkmakingmachine;


function Cateproductsitems(props){
 
  return(
    <>
    {/* col start */}
    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
     <Link to="Productsdetails">
     <div className="category_products_main_div">
        <div className="category_products_img_div">
          <img src={ props.cateproitems.image } alt="Priyavindustries" className='img-fluid'/>
        </div>
       <div className="category_products_txt_div">
       <h2 className='category_products_name'>{ props.cateproitems.cateproduct_name }</h2>
        <p className='category_products_price'><b className='netprice'>₹ { props.cateproitems.cateproduct_netprice } /-</b> <span className='dissprice'> ₹ { props.cateproitems.cateproduct_dissprice } /-</span></p>
        <h6 className='category_products_disscount'> <b className='offdiv'>({ props.cateproitems. cateproduct_offdiv })</b> <span className='freedlv'>{ props.cateproitems.cateproduct_freedlv }</span></h6>
       </div>
      </div>
     </Link>
    </div>
    {/* col end */}
    </>
  )
}
