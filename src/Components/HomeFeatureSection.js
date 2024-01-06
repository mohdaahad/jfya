import React from 'react';
import quran from "../image/quran.png";
import hadith from "../image/hadith.png";
import namaz from "../image/namaz.png";
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
                    <i><img src={quran} alt="" /></i>
                  </div>
                  <h5 className="features-title">Quran</h5>
                  <p>As the ultimate source of divine guidance in Islam, the Quran serves as a timeless manual for personal development, fostering a harmonious society built on justice, compassion, and the pursuit of knowledge.</p>
                  {/* <a href="#" className="main-button">Read More</a> */}
                </div>
              </div>
              {/* Features Small Item End */}

              {/* Features Small Item Start */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                <div className="features-small-item">
                  <div className="icon">
                    <i><img src={hadith} alt="" /></i>
                  </div>
                  <h5 className="features-title">Hadith</h5>
                  <p>Through meticulous preservation and transmission, Hadith plays a pivotal role in shaping Islamic jurisprudence and fostering a deep understanding of Prophet Muhammad's exemplary life among Muslims worldwide.</p>
                  {/* <a href="#" className="main-button">Read More</a> */}
                </div>
              </div>
              {/* Features Small Item End */}

              {/* Features Small Item Start */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                <div className="features-small-item">
                  <div className="icon">
                    <i><img src={namaz} alt="" /></i>
                  </div>
                  <h5 className="features-title">Namaz</h5>
                  <p>Namaz, or Islamic prayer, is a sacred ritual performed by Muslims to connect with Allah. It involves specific physical postures and recitations, fostering spiritual discipline and a sense of devotion.</p>
                  {/* <a href="#" className="main-button">Read More</a> */}
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
