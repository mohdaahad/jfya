import React from 'react';
import m1 from "../image/m1.jpeg";
import m2 from "../image/m6.jpg";
import m3 from "../image/m2.jpeg";
import m4 from "../image/m4.jpeg";
import m5 from "../image/m5.jpeg";
// import m6 from "../image/m6.jpeg";
const MudarriseenProfileSection = () => {
  return (
    <section className="section colored" id="donate-now">
      <div className="container">
        {/* Section Title Start */}
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Profile Of Teachers</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>Appreciatively, we acknowledge you for your charitable sustenance to Jamin Faize Yunus Arabia</p>
            </div>
          </div>
        </div>
        {/* Section Title End */}

        <div className="row">

          
          {/* Mudarriseen Item Start */}
          <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
            <div >
              <div className="card-container">
                <img className="round" src={m3} alt="user" />
                <h3>Molana Muhammad Irshad </h3>
                <p>Mohtameem</p>
                {/* <div className="buttons">
                  <ul className="wrapper">
                    <li className="icon facebook">
                      <span className="tooltip">Facebook</span>
                      <span><i className="fa fa-facebook"></i></span>
                    </li>
                    <li className="icon twitter">
                      <span className="tooltip">Twitter</span>
                      <span><i className="fa fa-twitter"></i></span>
                    </li>
                    <li className="icon instagram">
                      <span className="tooltip">Instagram</span>
                      <span><i className="fa fa-instagram"></i></span>
                    </li>
                    <li className="icon github">
                      <span className="tooltip">Github</span>
                      <span><i className="fa fa-github"></i></span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>


          {/* Mudarriseen Item End */}
          {/* Mudarriseen Item Start */}
          <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
            <div >
              <div className="card-container">
                <img className="round" src={m1} alt="user" />
                <h3>Qari Ahsan</h3>
                <p>Arabi(Najra)</p>
                {/* <div className="buttons">
                  <ul className="wrapper">
                    <li className="icon facebook">
                      <span className="tooltip">Facebook</span>
                      <span><i className="fa fa-facebook"></i></span>
                    </li>
                    <li className="icon twitter">
                      <span className="tooltip">Twitter</span>
                      <span><i className="fa fa-twitter"></i></span>
                    </li>
                    <li className="icon instagram">
                      <span className="tooltip">Instagram</span>
                      <span><i className="fa fa-instagram"></i></span>
                    </li>
                    <li className="icon github">
                      <span className="tooltip">Github</span>
                      <span><i className="fa fa-github"></i></span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          {/* Mudarriseen Item End */}

     


          <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
            <div >
              <div className="card-container">
                <img className="round" src={m4} alt="user" />
                <h3>Qari Juned</h3>
                <p>Arabi(Hifz)</p>
                {/* <div className="buttons">
                  <ul className="wrapper">
                    <li className="icon facebook">
                      <span className="tooltip">Facebook</span>
                      <span><i className="fa fa-facebook"></i></span>
                    </li>
                    <li className="icon twitter">
                      <span className="tooltip">Twitter</span>
                      <span><i className="fa fa-twitter"></i></span>
                    </li>
                    <li className="icon instagram">
                      <span className="tooltip">Instagram</span>
                      <span><i className="fa fa-instagram"></i></span>
                    </li>
                    <li className="icon github">
                      <span className="tooltip">Github</span>
                      <span><i className="fa fa-github"></i></span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
            <div >
              <div className="card-container">
                <img className="round" src={m5} alt="user" />
                <h3>Qari Murshid</h3>
                <p>Math & English</p>
                {/* <div className="buttons">
                  <ul className="wrapper">
                    <li className="icon facebook">
                      <span className="tooltip">Facebook</span>
                      <span><i className="fa fa-facebook"></i></span>
                    </li>
                    <li className="icon twitter">
                      <span className="tooltip">Twitter</span>
                      <span><i className="fa fa-twitter"></i></span>
                    </li>
                    <li className="icon instagram">
                      <span className="tooltip">Instagram</span>
                      <span><i className="fa fa-instagram"></i></span>
                    </li>
                    <li className="icon github">
                      <span className="tooltip">Github</span>
                      <span><i className="fa fa-github"></i></span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
            <div >
              <div className="card-container">
                <img className="round" src={m2} alt="user" />
                <h3>Mo Mohsin</h3>
                <p>Science & SST</p>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MudarriseenProfileSection;
