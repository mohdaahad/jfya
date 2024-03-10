import React from 'react';
// import { Modal, Button } from 'react-bootstrap';
const DonateNowSection = () => {
  // const [showModal, setShowModal] = useState(false);

  // const handleShow = () => setShowModal(true);
  // const handleClose = () => setShowModal(false);
  return (
    <section className="section colored" id="donate-now">
      <div className="container">
        {/* Section Title Start */}
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">We Need Your Help</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>Appreciatively, we acknowledge you for your charitable sustenance to Jamin Faize Yunus Arabia</p>
            </div>
          </div>
        </div>
        {/* Section Title End */}

        <div className="row">
          {/* Pricing Item Start */}
          <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
            <div className="pricing-item">
              <div className="pricing-header">
                <h3 className="pricing-title">Zakat Appeal</h3>
              </div>
              {/* <div className="pricing-body">
                <div className="price-wrapper">
                  <span className="currency">$</span>
                  <span className="price">14.50</span>
                  <span className="period">Raised</span>
                </div>
               
              </div>
              <div className="pricing-footer">
                <a href="#"  onClick={handleShow}  type="button" data-toggle="modal" className="main-button">Donate Now</a>
              </div> */}
            </div>
          </div>
          {/* Pricing Item End */}

          {/* Pricing Item Start */}
          <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
            <div className="pricing-item active">
              <div className="pricing-header">
                <h3 className="pricing-title">Sadaqah Jariyah</h3>
              </div>
              {/* <div className="pricing-body">
                <div className="price-wrapper">
                  <span className="currency">$</span>
                  <span className="price">21.50</span>
                  <span className="period">Raised</span>
                </div>
                
              </div>
              <div className="pricing-footer">
                <a href="#" data-target="#exampleModalCenter" type="button" data-toggle="modal" className="main-button">Donate Now</a>
              </div> */}
            </div>
          </div>
          {/* Pricing Item End */}

          {/* Pricing Item Start */}
          <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
            <div className="pricing-item">
              <div className="pricing-header">
                <h3 className="pricing-title">Al Imdaad</h3>
              </div>
              {/* <div className="pricing-body">
                <div className="price-wrapper">
                  <span className="currency">$</span>
                  <span className="price">42.00</span>
                  <span className="period">Raised</span>
                </div>
              
              </div>
              <div className="pricing-footer">
                <a href="#" data-target="#exampleModalCenter2" type="button" data-toggle="modal" className="main-button">Donate Now</a>
              </div> */}
            </div>
          </div>
          {/* Pricing Item End */}
        </div>
      </div>
      {/* <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#7f0dff' }}>
          <Modal.Title className="text-light">Zakat Appeal</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <img style={{ width: '200px' }} src="static/account/image/qr.png" alt="" />
        </Modal.Body>
       
      </Modal> */}
    </section>
  );
};

export default DonateNowSection;
