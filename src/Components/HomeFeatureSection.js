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
                  <p>

                  The Quran is like a guidebook for Muslims, offering timeless wisdom for personal growth and helping to create a fair, caring, and knowledgeable society, serving as a beacon of light for individuals seeking guidance in their lives.</p>
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
                  <p>Hadith, which are the sayings and actions of Prophet Muhammad, are incredibly important in Islam. They help shape Islamic law and give Muslims around the world a deeper understanding of how the Prophet lived his life.</p>
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
                  <p>Namaz, also known as Islamic prayer, is a special ritual that Muslims perform to connect with Allah. It includes certain physical movements and prayers, which help to create spiritual discipline and a strong sense of devotion.




</p>
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
