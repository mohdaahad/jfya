import React from 'react';

const WelcomeArea = () => {
  return (
    <div className="welcome-area" id="welcome">
      {/* Header Text Start */}
      <div className="header-text">
        <div className="container">
          <div className="row">
            <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
              <h1>Name Of <strong>Madrasa</strong></h1>
              <p>The Raised of Name Of Madrasa is to stimulate the spiritual and intellectual strengths of each child.</p>
              <a href="#features" className="main-button-slider">Discover More</a>
            </div>
          </div>
        </div>
      </div>
      {/* Header Text End */}
    </div>
  );
};

export default WelcomeArea;
