import React from 'react';

const HomeFeatureSection = () => {
  return (
    <section className="section home-feature">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {/* Features Small Item Start */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                <div className="features-small-item">
                  <div className="icon">
                    <i><img src="{% static 'account/image/quran.png' %}" alt="" /></i>
                  </div>
                  <h5 className="features-title">Quran</h5>
                  <p>Customize anything in this template to fit your website needs</p>
                  <a href="#" className="main-button">Read More</a>
                </div>
              </div>
              {/* Features Small Item End */}

              {/* Features Small Item Start */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                <div className="features-small-item">
                  <div className="icon">
                    <i><img src="{% static 'account/image/hadith.png' %}" alt="" /></i>
                  </div>
                  <h5 className="features-title">Hadith</h5>
                  <p>Contact us immediately if you have a question in mind</p>
                  <a href="#" className="main-button">Read More</a>
                </div>
              </div>
              {/* Features Small Item End */}

              {/* Features Small Item Start */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                <div className="features-small-item">
                  <div className="icon">
                    <i><img src="{% static 'account/image/namaz.png' %}" alt="" /></i>
                  </div>
                  <h5 className="features-title">Namaz</h5>
                  <p>You just need to tell your friends about our free templates</p>
                  <a href="#" className="main-button">Read More</a>
                </div>
              </div>
              {/* Features Small Item End */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureSection;
