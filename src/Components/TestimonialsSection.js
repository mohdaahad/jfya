import React from 'react';
import t1 from "../image/arif.jpeg";
import t2 from "../image/Mohd Haseen.jpeg";
import t3 from "../image/mo arif.jpeg";
import testimonial from "../image/testimonial-icon.png";
const TestimonialsSection = () => {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        {/* Section Title Start */}
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">What do they say?</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>
            </div>
          </div>
        </div>
        {/* Section Title End */}

        <div className="row">
          {/* Testimonials Item Start */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="team-item">
              <div className="team-content">
                <i><img src={testimonial} alt="" /></i>
                <p>Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.</p>
                <div className="user-image">
                  <img style={{ width: '67px' }} src={t1} alt="" />
                </div>
                <div className="team-info">
                  <h3 className="user-name">Mo Arif</h3>
                  <span>Businessman(Goldsmith)</span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonials Item End */}

          {/* Testimonials Item Start */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="team-item">
              <div className="team-content">
                <i><img src={testimonial} alt="" /></i>
                <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                <div className="user-image">
                  <img style={{ width: '67px' }} src={t2} alt="" />
                </div>
                <div className="team-info">
                  <h3 className="user-name">Mohd Haseen</h3>
                  <span>Businessman</span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonials Item End */}

          {/* Testimonials Item Start */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="team-item">
              <div className="team-content">
                <i><img src={testimonial} alt="" /></i>
                <p>Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.</p>
                <div className="user-image">
                  <img style={{ width: '67px' }} src={t3} alt="" />
                </div>
                <div className="team-info">
                  <h3 className="user-name">Mohd Arif</h3>
                  <span>Mohtameem Mumbai Madarsa</span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonials Item End */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
