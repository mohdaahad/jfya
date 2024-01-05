import React from 'react';

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
              <p>Islam is a monotheistic religion teaching that there is only one incomparable God – Allah and that Muhammad is the messenger of God. It is the world’s second-largest religion and the fastest-growing major religion in the world. Islam teaches that God is merciful, all-powerful, and unique.</p>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
            <img src="{% static 'account/image/mistion2.jpg' %}" style={{ height: '280px' }} className="rounded img-fluid d-block mx-auto" alt="App" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatementSection;
