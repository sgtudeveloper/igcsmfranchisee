import React from "react";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer class="text-center text-lg-start bg-body-tertiary text-muted">
        {/* <!-- Section: Social media --> */}
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="" class="me-4 text-reset m-1">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset m-1">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset m-1">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset m-1">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset m-1">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset m-1">
              <i class="fab fa-github"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div class="row mt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 class="text-uppercase fw-bold mb-4 text-orange">
                  <i class="fas me-3"></i>IGCSM Franchisee
                </h6>
                <p className="text-success text-left">
                IGCSM is an Indian not-for-profit organization working at the national level to uplift and empower the poor through education, skill development, and microfinance programs.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4 text-orange">
                  Articles
                </h6>
                <p>
                  <a href="#!" class="text-reset">
                    Academics
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Research
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Programmes
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Career
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4 text-orange">
                  Useful links
                </h6>
                <p>
                  <a href="#!" class="text-success underline">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-success underline">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-success underline">
                    Blogs
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-success underline">
                    Contact
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4 text-orange">Contact</h6>
                <p className="text-orange">
                  <i class="fas fa-home me-3 text-success"></i> 424, DLF Prime
                  Tower, Okhla Phase 1, New Delhi 110020
                </p>
                <p className="text-orange">
                  <i class="fas fa-envelope me-3 text-success"></i> info@igtiindia.org
                </p>
                <p className="text-orange">
                  <i class="fas fa-phone me-3 text-success"></i> + 98 188 41 248
                </p>
                <p className="text-orange">
                  <i class="fas fa-phone me-3 text-success"></i> + 88 600 94 657
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          class="text-center p-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.10)", color: 'green' }}
        >
          © 2024 Copyright: &nbsp;
          <a class="text-reset fw-bold" href="https://igcsm.com/">
            <p className="d-inline text-orange fw-bold">igcsm.com</p>
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
}
