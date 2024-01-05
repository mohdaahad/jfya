import React from 'react';

const GallerySection = () => {
  return (
    <section className="section" id="gallery">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Gallery</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
            </div>
          </div>
        </div>

        {/* Gallery Items */}
        <div className="row">
          <div className="col-lg-3 col-md-4 col-xs-6 thumb" data-scroll-reveal="enter bottom move 50px over 0.8s after 0.1s">
            <a className="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title="Im so nice" data-image="/path/to/g1.jpg" data-target="#image-gallery">
              <img className="img-thumbnail" src="/path/to/g1.jpg" alt="Another alt text" />
            </a>
          </div>
          {/* Add more gallery items here */}
        </div>

        {/* Image Gallery Modal */}
        <div className="modal fade" id="image-gallery" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="image-gallery-title"></h4>
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">×</span>
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <div className="modal-body">
                <img id="image-gallery-image" className="img-responsive col-md-12" src="" alt="Gallery" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary float-left" id="show-previous-image">
                  <i className="fa fa-arrow-left"></i>
                </button>
                <button type="button" id="show-next-image" className="btn btn-primary float-right">
                  <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
