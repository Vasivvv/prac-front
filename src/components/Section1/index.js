import React from "react";
import "./style.scss";
function Section1() {
  return (
    <div className="sec-1">
      <div className="sec-1-left">
        <div className="sec-1-text">
          <h1>Learn From The Expert</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa
            nulla sed quis rerum amet natus quas necessitatibus.
          </p>
        </div>
        <div className="sec-1-btn">
          <button>ADMISSION NOW</button>
        </div>
      </div>
      <div className="sec-1-right">
        <div className="signup">
          <form action="" method="post" class="form-box">
            <h3 class="h4 text-black mb-4">Sign Up</h3>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Email Addresss"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <div class="form-group mb-4">
              <input
                type="password"
                class="form-control"
                placeholder="Re-type Password"
              />
            </div>
            <div class="form-group">
              <input
                type="submit"
                class="btn btn-primary btn-pill"
                value="Sign up"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Section1;
