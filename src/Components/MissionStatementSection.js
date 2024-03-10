import React from 'react';
import mistion2 from "../image/mistion2.jpg";
const MissionStatementSection = () => {
  return (
    <section className="section padding-bottom-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
            <div className="left-heading">
              <h2 className="section-title">Mission Statement</h2>
            </div>
            <div className="left-text">
              <p>ہم چاہتے ہیں کہ ہمارے طلباء صرف دینی اصولوں پر عمل ہی نہیں کریں بلکہ انہیں ہنرمند، ذمہ دار، اور معاشرتی طور پر تربیت یافتہ افراد بننے کے لئے محنتی کریں۔ ہم انہیں ہندی اور انگریزی زبانوں میں مضبوط تعلیمات دیتے ہیں تاکہ وہ علمی، صنعتی اور تجارتی شعبوں میں بہترین مقامات حاصل کر سکیں۔ اس کے علاوہ، ہم ان کو معاشرتی اور اخلاقی تعلیمات سے گزر کر برداشت، ایمانداری، اور بھلائی کی راہوں میں ہدایت دیتے ہیں تاکہ وہ اپنے دیس اور جمعیت کی خدمت میں مصروف ہوں۔ یہ سب اہم مددگار ہیں تاکہ ہمارے بچے نہ صرف فعال معاشرتی اراکین بلکہ علماء اور معاشرتی رہنماؤں بھی بن سکیں</p>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
            <img src={mistion2} style={{height: ' 300px',width:'227px' }} className="rounded img-fluid d-block mx-auto" alt="App" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatementSection;
