import React from "react";

export default function Courses() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Our Courses</h1>
        <div class="container h-100s">
          <div class="row align-middle">
            <div class="col-md-6 col-lg-4 column">
              <div class="card gr-1">
                <div class="txt">
                  <h1>
                    Online <br />
                    Examination
                  </h1>
                  <p>Visual communication and problem-solving</p>
                </div>
                <a href="#">more</a>
                <div class="ico-card">
                  <i class="fa fa-rebel"></i>
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
                  <p>How design is implemented on the web.</p>
                </div>
                <a href="#">more</a>
                <div class="ico-card">
                  <i class="fa fa-codepen"></i>
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
                  <p>User Interface and User Experience Design.</p>
                </div>
                <a href="#">more</a>
                <div class="ico-card">
                  <i class="fa fa-empire"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
