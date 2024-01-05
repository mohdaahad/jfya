import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <ul className="social">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa fa-rss"></i></a></li>
              <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row d-flex justify-content-center">
          <div className="p-3">
            © 2020 Copyright: Provided by
            <a className="text-dark" href="">
              {' '}
              <img
                style={{ width: '32px', borderRadius: '50%' }}
                src="{% static 'account/image/logo.jpeg' %}"
                alt=""
              />
              <strong> Helping Hands</strong>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
