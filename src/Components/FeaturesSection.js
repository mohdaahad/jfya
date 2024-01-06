import React from 'react';
import missionImage from '../image/mistion.jpg';
const FeaturesSection = () => {
  return (
    <section className="section padding-top-70 padding-bottom-0" id="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
            <img src={missionImage} style={{ height: '280px' }} className="rounded img-fluid d-block mx-auto" alt="App" />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
            <div className="left-heading">
              <h2 className="section-title">Things We Are Doing</h2>
            </div>
            <div className="left-text">
              <p>مدرسہ کا مقصد تعلیمی انصرام ہے جس میں علمی تعلیمات کے علاوہ دینی اور اخلاقی تربیت بھی شامل ہوتی ہے۔ یہاں طلباء کو ریاستی اور علمی ترقی کی راہنمائی کے لئے ریاستیات، انگریزی، ہندی اور ریاستی اور علمی میدانوں میں مضبوط تعلیم فراہم کی جاتی ہے۔ اس کے علاوہ، مدرسہ قرآنی تعلیمات، نماز کی اہمیت اور حدیثوں کو بھی مضبوطی سے سکھاتا ہے تاکہ طلباء ایک متعلقہ اور مؤثر شہرت حاصل کریں۔</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="hr"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
