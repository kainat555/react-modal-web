import React from 'react';
// import banner_image from '../images/bg_image.jpeg';
import '../App.css';
import Navbar from './Components/NavigationBar';



const Header = () => {
return (
<div className='banner'>
    {/* <img src={banner_image} /> */}
    <Navbar />
    <div className="banner_content">
        <div className='content'>
            <div className="banner_text">
            <h2>Pizza Delivery</h2>
            <h1>MAESTRO PIZZINI</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloribus magnam quas. 
                Illo quae vitae aliquam, facilis reprehenderit, ullam vero iure iusto ipsa, odit rerum 
                corrupti dolore fuga laboriosam recusandae?
            </p>
            <button className='btn btn-smart'>
                <a href="">Deliver Now</a>
            </button>
            </div>
        </div>
    </div>
  </div>
)
}


export default Header;