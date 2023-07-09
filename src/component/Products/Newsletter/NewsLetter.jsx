import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="bg-primary text-light">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <h3 className="mb-3 mb-md-0">Sign Up For Newsletter</h3>

            <div className="input-group news-input">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
              />
              {/* <input type="text" className="form-control" placeholder="Enter Email"> */}
              <button className="btn btn-dark btn" type="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
