import React from 'react';
import Productslider from './Productslider';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
     
     {/* slider section start */}
<section className="slider_section">
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../banner/11.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="../banner/22.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="../banner/33.jpg" className="d-block w-100" alt="..." />
    </div>
   
  </div>
 <div className="btn_left_right">
 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  <i class='bx bx-left-arrow'></i>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <i class='bx bx-right-arrow'></i>
  </button>
 </div>
</div>
</section>
     {/* slider section end */}


    </>
  )
}

export default Home
