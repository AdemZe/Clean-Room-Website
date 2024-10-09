'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'



const Carousel = ({ data }) => {

    
    useEffect(() => {
   import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrap) => {
      new bootstrap.Carousel(document.getElementById('carouselExampleDark'));
    });
    }, []);
    
 return (

<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button 
      type="button" 
      data-bs-target="#carouselExampleDark" 
      data-bs-slide-to="0" 
      className="active" 
      aria-current="true" 
      aria-label="Slide 1"
    ></button>
    <button 
      type="button" 
      data-bs-target="#carouselExampleDark" 
      data-bs-slide-to="1" 
      aria-label="Slide 2"
    ></button>
    <button 
      type="button" 
      data-bs-target="#carouselExampleDark" 
      data-bs-slide-to="2" 
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner">
    {data.map((i,index )=> (
    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="10000">
       <div  style={{ position: 'relative', width: '100%', height: '500px' }} >
      <Image 
       src={`/images/${i.image}`}
       alt={`carouselImage ${index+1}`} 
       fill
       sizes="100vw"
       style={{ objectFit: 'cover' , position: 'absolute'}}
       priority={index === 0}
       />
      </div>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>

    ))}
  
   
  </div>

  <button 
    className="carousel-control-prev" 
    type="button" 
    data-bs-target="#carouselExampleDark" 
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button 
    className="carousel-control-next" 
    type="button" 
    data-bs-target="#carouselExampleDark" 
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



      )







}
export default Carousel;
