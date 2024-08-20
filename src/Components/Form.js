import React from "react";

export default function Form() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade content"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Let's Connect
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form method="post" id="contactForm" name="contactForm">
                <div className="row">
                  <div className="col-md-6 form-group mb-3">
                    <label className="col-form-label">
                      Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-md-6 form-group mb-3">
                    <label className="col-form-label">
                      Phone *
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Your phone"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 form-group mb-3">
                    <label className="col-form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Your subject"
                    />
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-md-12 form-group mb-3">
                    <label className="col-form-label">
                      Message *
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      cols="30"
                      rows="4"
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-5 form-group text-center">
                    <button
                      data-dismiss="modal"
                      className="btn btn-block btn-primary rounded-0 py-2 px-4 text-center"
                    >
                      Send message
                    </button>
                    <span className="submitting"></span>
                  </div>
                </div>
              </form>

              <div id="form-message-warning mt-4"></div>
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
