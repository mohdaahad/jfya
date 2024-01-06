import React from 'react';
import logo from "../image/logo.jpeg";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <ul className="social">
              <li><a href="http://localhost:3000/"><i className="fa fa-facebook"></i></a></li>
              <li><a href="http://localhost:3000/"><i className="fa fa-twitter"></i></a></li>
              <li><a href="http://localhost:3000/"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="http://localhost:3000/"><i className="fa fa-rss"></i></a></li>
              <li><a href="http://localhost:3000/"><i className="fa fa-dribbble"></i></a></li>
            </ul>
          </div>
        </div>
        <hr /> */}
        <div className="row ">
          <div className='d-flex justify-content-center'>
          <div className="p-3">
            © 2020 Copyright: Provided by
            <a className="text-dark" href="http://localhost:3000/">
              {' '}
              <img
                style={{ width: '32px', borderRadius: '50%' }}
                src={logo}
                alt=""
              />
              <a className='hhc' href="https://www.hhc4u.org">HHC</a>
          
            </a>
          </div>
          </div>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
