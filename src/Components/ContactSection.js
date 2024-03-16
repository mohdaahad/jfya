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
              <p>If someone wishes to contact us, they can reach out to us at the following address:
Village Sisaona, Bhagwanpur, Rudki, Haridwar, Uttarakhand, 247661.</p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Contact Map */}
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.849551329015!2d77.80232092703982!3d29.955103115022695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb7eedc1a85cf%3A0xf5a439116fd03ac0!2sJamia%20faize%20yunus%20Arabia!5e0!3m2!1sen!2sin!4v1710074746284!5m2!1sen!2sin"
                  title="Contact Map"
                ></iframe>
              </div>
            </div>
          </div>
       
          {/* Contact Form */}
          {/* <div className="col-lg-8 col-md-6 col-sm-12">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
