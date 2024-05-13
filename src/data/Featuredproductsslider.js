import React from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
  var settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    infinite: true,
    speed: 1200,
    arrows: true, // Corrected typo here
    slidesToShow: 4,
    padding: 40,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: true, // Corrected typo here
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1,
          arrows: true, // Corrected typo here
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true, // Corrected typo here
        }
      }
    ]
};


const Featuredproductsslider = () => {
  return (
    <>
      <Slider {...settings}>
      

        {/* itmes start */}
      <div className='items'>
     <Link to="">
     <div className="featureproducts_items_main_div_slider">
        <div className="featureproducts_itmes_img_sldr">
        <img src="../products/1.png" alt="" className='img-fluid' />
        </div>
        <div className="featureproducts_name_div">
            <h3>HDPE Granules</h3>
        </div>
      </div>
     </Link>
      </div>
       {/* itmes end */}

       

        {/* itmes start */}
        <div className='items'>
     <Link to="">
     <div className="featureproducts_items_main_div_slider">
        <div className="featureproducts_itmes_img_sldr">
        <img src="../products/2.png" alt="" className='img-fluid' />
        </div>
        <div className="featureproducts_name_div">
            <h3>LLDPE Granules</h3>
         </div>
      </div>
     </Link>
      </div>
       {/* itmes end */}

       
        {/* itmes start */}
        <div className='items'>
     <Link to="">
     <div className="featureproducts_items_main_div_slider">
        <div className="featureproducts_itmes_img_sldr">
        <img src="../products/3.png" alt="" className='img-fluid' />
        </div>
        <div className="featureproducts_name_div">
            <h3>PP Granules</h3>
         </div>
      </div>
     </Link>
      </div>
       {/* itmes end */}


        {/* itmes start */}
        <div className='items'>
     <Link to="">
     <div className="featureproducts_items_main_div_slider">
        <div className="featureproducts_itmes_img_sldr">
        <img src="../products/4.png" alt="" className='img-fluid' />
        </div>
        <div className="featureproducts_name_div">
            <h3>HDPE Granules</h3>
         </div>
      </div>
     </Link>
      </div>
       {/* itmes end */}

       
        {/* itmes start */}
        <div className='items'>
     <Link to="">
     <div className="featureproducts_items_main_div_slider">
        <div className="featureproducts_itmes_img_sldr">
        <img src="../products/5.png" alt="" className='img-fluid' />
        </div>
        <div className="featureproducts_name_div">
            <h3>HDPE Granules</h3>
         </div>
      </div>
     </Link>
      </div>
       {/* itmes end */}

       
        {/* itmes start */}
        <div className='items'>
     <Link to="">
     <div className="featureproducts_items_main_div_slider">
        <div className="featureproducts_itmes_img_sldr">
        <img src="../products/6.png" alt="" className='img-fluid' />
        </div>
        <div className="featureproducts_name_div">
            <h3>HDPE Granules</h3>
         </div>
      </div>
     </Link>
      </div>
       {/* itmes end */}




       
      
    </Slider>
    </>
  )
}

export default Featuredproductsslider


