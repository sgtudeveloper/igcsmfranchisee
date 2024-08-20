import React, { useContext } from "react";
import nsdc from "../Asset/Certifications/NSDC.png";
import skillindia from "../Asset/Certifications/skill_india.png";
import g20 from "../Asset/Certifications/g20.png";
import msme from "../Asset/Certifications/msme.jpg";
import nafed from "../Asset/Certifications/nafed.jpg";
import pmkvy from "../Asset/Certifications/pmkvy.jpg";
import titp from "../Asset/Certifications/titp.jpeg";
import digitalindia from "../Asset/Certifications/digitalIndia.png";
import banner0 from "../Asset/Banner/Banner0.jpg";
import banner1 from "../Asset/Banner/Banner1.jpg";
import banner2 from "../Asset/Banner/Banner2.jpg";
import banner3 from "../Asset/Banner/Banner3.jpg";
import banner4 from "../Asset/Banner/77777.jpg";
import ministries from "../Asset/ministries.png";
import Blog from "./Blog";
import BlogContext from "../Context/BlogContext";

export default function Home() {
  const { news } = useContext(BlogContext);

  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide border p-0 m-0"
        data-ride="carousel"
      >
        <div className="carousel-inner p-0 m-0">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={banner4}
              alt="Fourth slide"
              height={"400px"}
            />
          </div>

          {/* <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={banner0}
              alt="First slide"
              height={"400px"}
            />
          </div> */}
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={banner1}
              alt="Second slide"
              height={"400px"}
            />
          </div>
          {/* <div className="carousel-item">
            <img
              className="d-block w-100"
              src={banner2}
              alt="Third slide"
              height={"400px"}
            />
          </div> */}
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={banner3}
              alt="Fourth slide"
              height={"400px"}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* carousel Ends here */}
      {/* 
      <div className="container">
        <div className="d-flex p-2 justify-content-center">
          <div className="card m-2 mx-4 w-25">
            <img src={img3} className="card-img-top" alt="Franchisee" />
            <div className="card-body">
              <h4>Franchisee</h4>
              <p className="card-text ">
                A track record of successful franchise operations across 21
                states and 100 franchisee. If you have a question we have an
                answer.
              </p>
            </div>
          </div>
          <div className="card m-2 mx-4 w-25">
            <img src={img4} className="card-img-top" alt="green iguana" />
            <div className="card-body">
              <h4>Bussiness</h4>
              <p className="card-text">
                By joining IGCSM as a franchisee you will get opportunity to get
                return upto 40% and other.
              </p>
            </div>
          </div>
          <div className="card m-2 mx-4 w-25">
            <img src={govt} className="card-img-top" alt="green iguana" />
            <div className="card-body">
              <h4>Government Partnership</h4>
              <p className="card-text">
                Upon joining IGCSM, franchisee can opt to join hands in
                government initiatives on a revenue sharing model.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <section className="py-3 py-md-5 py-xl-8 w-20">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">
                Our Certifications
              </h2>
              <h2 className="mb-4 display-5 text-center text-dark certificate-subhead fancy">
                Worked with 19 Government Ministries.
              </h2>
              <p className="fs-5 text-secondary mb-5 text-center"></p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container overflow-hidden">
          <div className="row gy-4">
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 logoimg">
                <img className="shadow-lg" src={nsdc} alt="" />
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 logoimg">
                <img className="shadow-lg" src={g20} alt="" />
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 logoimg">
                <img className="shadow-lg" src={skillindia} alt="" />
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 logoimg">
                <img className="shadow-lg" src={msme} alt="" />
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 logoimg">
                <img className="shadow-lg" src={nafed} alt="" />
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 logoimg">
                <img className="shadow-lg" src={pmkvy} alt="" />
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 logoimg">
                <img className="shadow-lg" src={titp} alt="" />
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5 logoimg">
                <img className="shadow-lg " src={digitalindia} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="light">
        <div className="container py-2">
          <div className="h1 text-center text-dark" id="pageHeaderTitle">
            Our Strength
          </div>

          <article className="postcard light blue">
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src={ministries}
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title blue">
                <a href="#">Empaneled with 19 Ministries</a>
              </h1>
              <div className="postcard__subtitle small">
                {/* <time datetime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                </time> */}
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                IGCSM is empaneled with 19 ministries dealing in all sorts of
                skills training initiatives. From Basic training like Sampling
                Tailor to advanced Information Technology related courses IGCSM
                does it all, in order to provide rural youth the education
                required to be productive and job ready.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>ministries
                </li>
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Information Technology
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-tag mr-2"></i>IGCSM
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <article className="postcard light red">
            <a className="postcard__img_link" href="#">
              <img className="postcard__img" src={nafed} alt="Image Title" />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title red">
                <a href="#">Empaneled with NAFED</a>
              </h1>
              <div className="postcard__subtitle small">
                {/* <time datetime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                </time> */}
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                National Agricultural Cooperative Marketing Federation of India
                Ltd.: IGCSM is a certified partner of NAFED, providing both
                technical and practical aspect of modern farming to rural and
                new farmers. IGCSM with NAFED wishes to see a not so distant
                future where No farmer will perish loss crop due to
                non-availability of much needed information.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>NAFED
                </li>
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>IGCSM
                </li>
                <li className="tag__item play red">
                  <a href="#">
                    <i className="fas fa-tag mr-2"></i>mordern farming
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <article className="postcard light green">
            <a className="postcard__img_link" href="#">
              <img className="postcard__img" src={nsdc} alt="Image Title" />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title green">
                <a href="#">Non-Funded Partnership with NSDC</a>
              </h1>
              <div className="postcard__subtitle small">
                {/* <time datetime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                </time> */}
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                IGCSM is in an active non-funded partnership with NSDC. Together
                with NSDC we shape the future of our nation by providing top
                quality education at low cost. Our Certification with the
                approval of NSDC shall be valid in all government,
                semi-government or any other organization.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>NSDC
                </li>
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>non-funded
                </li>
                <li className="tag__item play green">
                  <a href="#">
                    <i className="fas fa-tag mr-2"></i>quality education
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      {/* Blogs Section */}
      <Blog />
    </>
  );
}
