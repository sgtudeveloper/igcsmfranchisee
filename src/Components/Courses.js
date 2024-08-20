import React from "react";
import ADCA from "../Asset/Images/courses/ADCA.jpg"
import CTTC from "../Asset/Images/courses/CTTC.jpg"
import CTTC1 from "../Asset/Images/courses/CTTC (2).jpg"
import DCA from "../Asset/Images/courses/DCA.jpg"
import ADFA from "../Asset/Images/courses/ADFA.jpg"
import NTT from "../Asset/Images/courses/NTT.jpg"
import PTT from "../Asset/Images/courses/PTT.jpg"
import ADCH from "../Asset/Images/courses/ADCH.jpg"
import DWD from "../Asset/Images/courses/DWD.jpg"
import DHN from "../Asset/Images/courses/DHN.jpg"
import DFD from "../Asset/Images/courses/DFD.jpg"

export default function Courses() {
  return (
    <>
      <div className="container">
        {/* <h1 className="text-center">Our Courses</h1> */}
        <div class="container h-100s">
          <div class="row align-middle">
            <div class="col-md-6 col-lg-4 column">
              <div class="card gr-1">
                <div class="txt">
                  <h1>
                    Online <br />
                    Examination
                  </h1>
                  <p>Examination will be done via online mode.</p>
                </div>
                <a href="#">more</a>
                <div class="ico-card">
                  <i class="fa fa-chalkboard-user"></i>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 column">
              <div class="card gr-2">
                <div class="txt">
                  <h1>
                    Online <br />
                    Support
                  </h1>
                  <p>Get online support from our expert team.</p>
                </div>
                <a href="#">more</a>
                <div class="ico-card">
                  <i class="fa fa-phone"></i>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 column">
              <div class="card gr-3">
                <div class="txt">
                  <h1>
                    Online <br />
                    Verification
                  </h1>
                  <p>Get verification done through online mode.</p>
                </div>
                <a href="#">more</a>
                <div class="ico-card">
                  <i class="fa fa-copy"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Courses Cards */}

      <hr className="w-25 text-black" />

      <h1 className="text-center py-4">Our Courses</h1>

      <div className="container d-flex justify-content-center align-items-center ">
        {/* /* From Uiverse.io by gharsh11032000   */}

        <div class="cardcourse m-4">
          
          <img src={PTT} alt=""  />
          <div class="card__content">
            <p class="card__title">Primary teacher training - (PTT)</p>
            <p class="card__description">
              It includes Introduction course in Science, Computer Basics and Fundamentals, Introduction course in EVS, Meathods of Teaching, Child Psychology, School of Management and Administration.
            </p>
          </div>
        </div>
        
        <div class="cardcourse m-4">
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg> */}
          <img src={DCA} alt=""  />
          <div class="card__content">
            <p class="card__title">Diploma in Computer Application - (DCA)</p>
            <p class="card__description">
              In this course you will learn about Information Technology, Microsoft Office, Operating Sytem, Multimedia and CyberSecurity.
            </p>
          </div>
        </div>
        <div class="cardcourse m-4">
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg> */}
          <img src={DWD} alt=""  />
          <div class="card__content">
            <p class="card__title">Diploma in web designing - (DWD)</p>
            <p class="card__description">
              In this course you will learn about Introduction to Web Designing, HTML, CSS , JavaScript, Photoshop, Illustrator, Wordpress and Visual Studio Code.
            </p>
          </div>
        </div>
      </div>


{/* Second Row for the courses */}

      <div className="container d-flex justify-content-center align-items-center ">
    

        <div class="cardcourse m-4">
          
          <img src={DHN} alt=""  />
          <div class="card__content">
            <p class="card__title">Diploma in hardware and networking - (DHN)</p>
            <p class="card__description">
              In this course you will learn about Hardware and how the networking works.
            </p>
          </div>
        </div>
        <div class="cardcourse m-4">
          
          <img src={DFD} alt=""  />
          <div class="card__content">
            <p class="card__title">Diploma in Fashion designing - (DFD)</p>
            <p class="card__description">
              In this course you will learn Fashion Designing
            </p>
          </div>
        </div>
        <div class="cardcourse m-4">
          
          <img src={ADCA} alt=""  />
          <div class="card__content">
            <p class="card__title">advanced diploma in computer application - (ADCA)</p>
            <p class="card__description">
              You will learn Fundamentals of Computer, Operating System, Microsoft Office, C++ Language, Photoshop and Tally ERP-9.
            </p>
          </div>
        </div>
      </div>


{/* Third row for courses */}


      <div className="container d-flex justify-content-center align-items-center ">
    

        <div class="cardcourse m-4">
          
          <img src={ADFA} alt=""  />
          <div class="card__content">
            <p class="card__title">Advanced Diploma in Financial Accounting - (ADFA)</p>
            <p class="card__description">
              In this course you will learn Fundamental of Computer, Financial and Costing, E-Commerce, Introducing to Auditing.
            </p>
          </div>
        </div>
        <div class="cardcourse m-4">
          
          <img src={ADCH} alt=""  />
          <div class="card__content">
            <p class="card__title">advanced diploma in computer hardware - (ADCH)</p>
            <p class="card__description">
              You will learn Peripheral Architecture, Analog and Digital, Operating System Diagnostics and Administration.
            </p>
          </div>
        </div>
        <div class="cardcourse m-4">
          
          <img src={NTT} alt=""  />
          <div class="card__content">
            <p class="card__title">nursery teacher training - (NTT)</p>
            <p class="card__description">
              It includes basic of Pre-Primary Education, Nursery School Education, Child Health and Nutrition, Child Psychology, Teaching Meathodlogy and Principles, Practical and Intractive Workshops. 
            </p>
          </div>
        </div>
      </div>

      {/* Row four for the courses */}

      <div className="container d-flex justify-content-center align-items-center ">
    

        
        <div class="cardcourse m-4">
          
          <img src={CTTC1} alt=""  />
          <div class="card__content">
            <p class="card__title">PGDCA</p>
            <p class="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>

        <div class="cardcourse m-4">
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg> */}
          <img src={CTTC} alt=""  />
          <div class="card__content">
            <p class="card__title">Computer Teachers Training Course - (CTTC)</p>
            <p class="card__description">
              Course include of two semesters with having
              teaching of Tally ERP9, Personality Development, Advance MS Office and much more.
            </p>
          </div>
        </div>
        <div class="cardcourse m-4">
          
          <img src={CTTC1} alt=""  />
          <div class="card__content">
            <p class="card__title">PGDIT</p>
            <p class="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>





    </>
  );
}
