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
                <p>Empowering minds with knowledge, Madrasa fosters a holistic education that blends academic excellence with moral values for a brighter future.</p>
              </div>
            </div>
          </div>

          {/* Mini Box Start */}
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="http://localhost:3000/" className="mini-box">
                <i><img src={work1} alt="" /></i>
                <strong>Quran</strong>
                {/* <span>Godard pabst prism fam cliche.</span> */}
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="http://localhost:3000/" className="mini-box">
                <i><img src={work1} alt="" /></i>
                <strong>Hadith</strong>
                {/* <span>Godard pabst prism fam cliche.</span> */}
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="http://localhost:3000/" className="mini-box">
                <i><img src={work1} alt="" /></i>
                <strong>Urdu</strong>
                {/* <span>Godard pabst prism fam cliche.</span> */}
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="http://localhost:3000/" className="mini-box">
                <i><img src={work1} alt="" /></i>
                <strong>Math & Scince</strong>
                {/* <span>Godard pabst prism fam cliche.</span> */}
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="http://localhost:3000/" className="mini-box">
                <i><img src={work1} alt="" /></i>
                <strong>Hindi & English</strong>
                {/* <span>Godard pabst prism fam cliche.</span> */}
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="http://localhost:3000/" className="mini-box">
                <i><img src={work1} alt="" /></i>
                <strong>Arbi</strong>
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
