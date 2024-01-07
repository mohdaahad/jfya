import React, { useEffect } from 'react';
import $ from 'jquery';
import work1 from "../image/logo.png";

const Header = () => {
  useEffect(() => {

    // Menu Dropdown Toggle
    $(".menu-trigger").on('click', function() {  
      console.log("Clicked");
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      $(".menu-trigger").off('click');
    };
  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <>
      <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> 
 
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* Logo Start */}
                <a href="#" className="logo">
                <img src={work1} alt="" />
                </a>
                {/* Logo End */}
                {/* Menu Start */}
                <ul className="nav">
                  <li><a href="#welcome" className="active">Home</a></li>
                  <li><a href="#features">About</a></li>
                  <li><a href="#work-process">Work Process</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#donate-now">Donate Now</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><a href="#contact-us">Contact Us</a></li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
                {/* Menu End */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
