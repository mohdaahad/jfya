import React from 'react';

const CounterSection = () => {
  return (
    <section className="counter">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item decoration-bottom">
                <strong>270</strong>
                <span>Student</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item decoration-top">
                <strong>7</strong>
                <span>Teacher</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item decoration-bottom">
                <strong>8</strong>
                <span>Course</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="count-item">
                <strong>11</strong>
                <span>Members of Committee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
