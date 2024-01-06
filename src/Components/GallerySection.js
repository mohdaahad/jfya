import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import g1 from '../image/g1.jpeg';  
import g2 from '../image/g2.jpeg'; 
import g3 from '../image/g3.jpeg'; 
import g4 from '../image/g4.jpeg'; 
import g5 from '../image/g5.jpeg'; 
import g6 from '../image/g6.jpeg'; 
import g7 from '../image/g7.jpeg'; 
import g8 from '../image/g8.jpeg'; 
import g9 from '../image/g9.jpeg'; 
import g10 from '../image/g10.jpeg'; 
import g11 from '../image/g11.jpeg'; 
import g12 from '../image/g12.jpeg'; 

const GallerySection = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12]; // Add your other images to this array

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

        {/* Gallery Items */}
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-xs-6 thumb" data-scroll-reveal="enter bottom move 50px over 0.8s after 0.1s">
              <a className="thumbnail" href="http://localhost:3000/" onClick={() => openModal(index)}>
                <img className="img-thumbnail" src={image} alt={`Gallery ${index + 1}`} />
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

export default GallerySection;
