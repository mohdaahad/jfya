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
                <p>Alhamdulillah madrasa haza me aehqar ko allah ne hazri ka maoqa inaayat farmaya
Taleem ka bhi nizam dekha dono taleemo ka nizam asri bhi or dini bhi azizam qari mohammad shamshad husne usloob ke sath chala rahe hai dekh kar dil bahot khush huwa allah azizam ki mehnato wa kawisho ko qubool kare or madrasa haza ko din doguni raat choguni taraqqi ata farmae
Mufti mohammad tarique saqibi. Mumbai Maharashtra</p>
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
                <p> मैं इस्लामनगर से हूँ और मैं मदरसे गया। मैंने जाकर मदरसे का तालिमी निजाम देखा तो, माशा अल्लाह, तबियत बहुत खुश हुई। दीनी तालीम के साथ-साथ दुनियावी तालीम का जो निजाम देखा तो, रूह खुश हो गई। तालीम का अंदाज बहुत पसंद आया। मैंने फिर अपने भांजे और भतीजे का दाखिला यहीं पर कराया है। मैं मदरसे के निजाम से बहुत खुश हूं। अल्लाह तआला मुजीब तरक्की अदा करें, आमीन। सुम्मा आमीन।</p>
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
                <p>الحمدللہ مدرسہ ھذا میں احقر کو اللہ نے حاضری کا موقع عنایت فرمایا
تعلیم کا بھی نظام دیکھا دونوں تعلیموں کا نظام عصری بھی اور دینی بھی عزیزم قاری محمد شمشاد حسن اسلوب کے ساتھ چلا رہے ہیں دیکھ کر دل بہت خوش ہوا اللہ عزیزم کی محنتوں و کاوشوں کو قبول کرے اور مدرسہ ھذا کو دن دوگنی رات چوگنی ترقی عطا فرمائے
مفتی محمد طارق ثاقبی ممبئی مہاراشٹر</p>
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
