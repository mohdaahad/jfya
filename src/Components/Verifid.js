import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import g1 from '../image/v1.png';  
import g2 from '../image/v2.png'; 
import g3 from '../image/v3.png'; 
import g4 from '../image/v4.png'; 
import g5 from '../image/v5.png'; 
import g6 from '../image/v6.png'; 



const VerifidSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [g1,g2,g3,g4,g5,g6]; // Add your other images to this array

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <section className="section" id="gallery">
      <div className="container">
        {/* ... (your existing code) */}
        <div className="elementor-widget-container">
                    <div className="wpo-section-title">
                     <h2>Our Madarsa verified by these Instiution(Madarsa)</h2>
                    </div>
                  </div>
        {/* Gallery Items */}
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-xs-6 thumb" data-scroll-reveal="enter bottom move 50px over 0.8s after 0.1s">
              <a className="thumbnail" href="#" onClick={() => openModal(index)}>
                <img className="img-thumbnail1" src={image} alt={`Gallery ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>

        {/* Image Gallery Modal */}
        <Modal show={showModal} onHide={closeModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title id="image-gallery-title">{`Gallery ${currentImageIndex + 1}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img id="image-gallery-image" className="img-responsive col-md-12" src={images[currentImageIndex]} alt={`Gallery ${currentImageIndex + 1}`} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" className="float-left" onClick={showPreviousImage}>
              <i className="fa fa-arrow-left"></i>
            </Button>
            <Button variant="primary" className="float-right" onClick={showNextImage}>
              <i className="fa fa-arrow-right"></i>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};

export default VerifidSection;
