import React from 'react'
import { Allcategoriesdata } from '../data/Cateproducts';
import { Link } from "react-router-dom";

const Allcategories = () => {
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
            <li><Link to="javascript:void(0)"> categories</Link></li> 
          </ul>
        </div>
      </div>
      {/* col end */}
    </div>
  </div>
</section>

   
    {/*Page Title Area End  */}

    {/* all cate section */}
      <section className="allcategories_section">
        <div className="container">
            <div className="row">
                {/*  */}
                  { Allcategoriesdata.map((v,i)=>{
                    return(
                        <Allcatedata allcateitem={v}/> 
                    )
                  }) }
                
{/* <Allcatedata/> */}
                {/*  */}
            </div>
        </div>
      </section>
      {/* all cate section end */}
    </>
  )
}

export default Allcategories;

function Allcatedata(props){
    return(
        <>
        {/* col start */}
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
           <a href="">
           <div className="all_cate_main_div">
                <div className="all_cateimg_box">
                    <img src={props.allcateitem.image} alt="Priyavindustries" className='img-fluid' />
                </div>
                <div className="all_cate_name_div">
                    <h2>{props.allcateitem.category_name}</h2>
                    <p>{props.allcateitem.category_desc}</p>
                    <span>{props.allcateitem.catebtn_view}</span>
                </div>
            </div>
           </a>
        </div>
        {/* col end */}
        </>
    )
}
