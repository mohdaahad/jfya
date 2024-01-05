import React from 'react';

const WorkProcessSection = () => {
  return (
    <section className="mini" id="work-process">
      <div className="mini-content">
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 col-lg-6">
              <div className="info">
                <h1>Work Process</h1>
                <p>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.</p>
              </div>
            </div>
          </div>

          {/* Mini Box Start */}
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i><img src="{% static 'account/image/work-process-item-01.png' %}" alt="" /></i>
                <strong>Get Ideas</strong>
                <span>Godard pabst prism fam cliche.</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i><img src="{% static 'account/image/work-process-item-01.png' %}" alt="" /></i>
                <strong>Sketch Up</strong>
                <span>Godard pabst prism fam cliche.</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i><img src="{% static 'account/image/work-process-item-01.png' %}" alt="" /></i>
                <strong>Discuss</strong>
                <span>Godard pabst prism fam cliche.</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i><img src="{% static 'account/image/work-process-item-01.png' %}" alt="" /></i>
                <strong>Revise</strong>
                <span>Godard pabst prism fam cliche.</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i><img src="{% static 'account/image/work-process-item-01.png' %}" alt="" /></i>
                <strong>Approve</strong>
                <span>Godard pabst prism fam cliche.</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <a href="#" className="mini-box">
                <i><img src="{% static 'account/image/work-process-item-01.png' %}" alt="" /></i>
                <strong>Launch</strong>
                <span>Godard pabst prism fam cliche.</span>
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
