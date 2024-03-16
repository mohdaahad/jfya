import React from 'react';
import work1 from "../image/work-process-item-01.png";
const WorkProcessSection = () => {
  return (
    <section className="mini" id="work-process">
      <div className="mini-content">
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 col-lg-6">
              <div className="info">
                <h1>Education we are providing</h1>
                <p>
Madrasa helps students learn important things and be good people by teaching them about different subjects and how to behave well. This helps them have a better future.</p>
              </div>
            </div>
          </div>

          {/* Mini Box Start */}
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i><img src={work1} alt="" /></i>
                <strong>Quran</strong>
                {/* <span>Godard pabst prism fam cliche.</span> */}
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i><img src={work1} alt="" /></i>
                <strong>Hadith</strong>
                {/* <span>Godard pabst prism fam cliche.</span> */}
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i><img src={work1} alt="" /></i>
                <strong>Urdu</strong>
                {/* <span>Godard pabst prism fam cliche.</span> */}
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i><img src={work1} alt="" /></i>
                <strong>Math & Science</strong>
                {/* <span>Godard pabst prism fam cliche.</span> */}
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i><img src={work1} alt="" /></i>
                <strong>Hindi & English</strong>
                {/* <span>Godard pabst prism fam cliche.</span> */}
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i><img src={work1} alt="" /></i>
                <strong>Arabi</strong>
                {/* <span>Godard pabst prism fam cliche.</span> */}
              </a>
            </div>
          </div>
          {/* Mini Box End */}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
