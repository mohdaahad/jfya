import React from 'react';

const ContactSection = () => {
  return (
    <section className="section colored" id="contact-us">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Talk To Us</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat hendrerit semper.</p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Contact Map */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=326&amp;height=321&amp;hl=en&amp;q=islamnager saharanpur&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Contact Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8 col-md-6 col-sm-12">
            <div className="contact-form">
              <form id="contact" action="" method="get">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required="" />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="email" type="email" className="form-control" id="email" placeholder="E-Mail Address" required="" />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="main-button">
                        Send Message
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
