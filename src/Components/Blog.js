import React from "react";
import nafed from "../Asset/Certifications/nafed.jpg";
import FranchiseeGrowth from "../Asset/Computer Franchisee Banner.png"


const MyComponent = () => {
  return (
    <div className="my-component">
      {/* <!-- Blog 1 - Bootstrap Brain Component --> */}
      <section class="py-3 py-md-5">
        <div class="container overflow-hidden">
          <div class="row gy-5">
            <div class="col-12">
              <div class="row align-items-center gy-3 gy-md-0 gx-xl-5">
                <div class="col-xs-12 col-md-6">
                  <div class="img-wrapper position-relative bsb-hover-push">
                    <a href="#!">
                      <span class="badge rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">
                        join franchisee
                      </span>
                      <img
                        class="img-fluid rounded w-100 h-100 object-fit-cover"
                        loading="lazy"
                        src={FranchiseeGrowth}
                        alt="Sports"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6">
                  <div>
                    <p class="text-secondary mb-1">Aug 15, 2024</p>
                    <h2 class="h1 mb-3">
                      <a class="link-dark text-decoration-none" href="#!">
                      Benefits of Becoming a IGCSM Franchisee
                      </a>
                    </h2>
                    <p class="mb-4 text-secondary">
                    We are seeking passionate individuals or organizations interested in partnering with IGCSM to expand our mission and contribute to educational empowerment across India. ....
                    </p>
                    <a class="btn btn-primary" href="#!" target="_blank">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 mt-4">
              <div class="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                <div class="col-xs-12 col-md-6">
                  <div class="img-wrapper position-relative bsb-hover-push">
                    <a href="#!">
                      <span class="badge rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">
                        vocaltional education
                      </span>
                      <img
                        class="img-fluid rounded w-100 h-100 object-fit-cover"
                        loading="lazy"
                        src="./assets/img/blog-image-2.jpg"
                        alt="Travel"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6">
                  <div>
                    <p class="text-secondary mb-1">Aug 15, 2024</p>
                    <h2 class="h1 mb-3">
                      <a class="link-dark text-decoration-none" href="#!">
                      Our Expertise in Vocational Education
                      </a>
                    </h2>
                    <p class="mb-4 text-secondary">
                    IGCSM have been successfully operating multiple skill development initiatives in PAN Indian with many government initiatives like PMKVY, UPSDM, DDUGKY and many other working tirelessly with 19 ministries on state and national level. Providing vocational education rural and urban youth, IGCSM have played an important role in India’s very own Skill Initiative.
                    </p>
                    <a class="btn btn-primary" href="#!" target="_self">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="row align-items-center gy-3 gy-md-0 gx-xl-5">
                <div class="col-xs-12 col-md-6">
                  <div class="img-wrapper position-relative bsb-hover-push">
                    <a href="#!">
                      <span class="badge rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">
                        Photography
                      </span>
                      <img
                        class="img-fluid rounded w-100 h-100 object-fit-cover"
                        loading="lazy"
                        src="./assets/img/blog-image-3.jpg"
                        alt="Photography"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6">
                  <div>
                    <p class="text-secondary mb-1">Sep 17, 2022</p>
                    <h2 class="h1 mb-3">
                      <a class="link-dark text-decoration-none" href="#!">
                        Reasons Why Photography Is an Art Form
                      </a>
                    </h2>
                    <p class="mb-4">
                      Before the first photo was captured in the 18th century,
                      lifelike images of what the eyes can see could only be
                      made by talented artists.
                    </p>
                    <a class="btn btn-primary" href="#!" target="_self">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="col-12">
              <div class="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                <div class="col-xs-12 col-md-6">
                  <div class="img-wrapper position-relative bsb-hover-push">
                    <a href="#!">
                      <span class="badge rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">
                        Food
                      </span>
                      <img
                        class="img-fluid rounded w-100 h-100 object-fit-cover"
                        loading="lazy"
                        src="./assets/img/blog-image-4.jpg"
                        alt="Food"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6">
                  <div>
                    <p class="text-secondary mb-1">Aug 23, 2022</p>
                    <h2 class="h1 mb-3">
                      <a class="link-dark text-decoration-none" href="#!">
                        Benefits of Having a Heavy Breakfast Every Morning
                      </a>
                    </h2>
                    <p class="mb-4">
                      Running late for work or school? "Let’s skip the
                      breakfast!" Well, this might sound like the most ideal
                      idea to save time when you are on the run.
                    </p>
                    <a class="btn btn-primary" href="#!" target="_self">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyComponent;
