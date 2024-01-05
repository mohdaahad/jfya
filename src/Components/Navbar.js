import React from 'react';

const Header = () => {
  return (
    <>
      {/* <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
      {/* Preloader End */}

      {/* Header Area Start */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* Logo Start */}
                <a href="#" className="logo">
                  {/* <img src="{% static 'account/image/Madrasha.jpg' %}" alt="Softy Pinko"/> */}Logo of Madrasa
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
