import React from "react";

function Univers() {
  return (
    <div className="container">
      <div className="row text-center ">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row">
        <div className="col-12 col-sm-6 col-md-4 p-3">
          <img
            src="Media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "200px" }}
            className="img-fluid mt-3 mb-3"
          />
          <br />
          <span className="text-muted">
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </span>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 ">
          <img
            src="Media\images\sensibullLogo.svg"
            alt=""
            style={{ width: "200px" }}
            className="img-fluid mt-3 mb-3"
          />
          <br />
          <span className="text-muted">
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </span>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3">
          <img
            src="Media\images\goldenpiLogo.png"
            alt=""
            style={{ width: "200px" }}
            className="img-fluid mt-3 mb-3"
          />
          <br />
          <span className="text-muted">
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </span>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3">
          <img
            src="Media/images/streakLogo.png"
            alt=""
            style={{ width: "200px" }}
            className="img-fluid mt-3 mb-3"
          />
          <br />
          <span className="text-muted">
            Systematic trading platform
            <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </span>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3">
          <img
            src="Media/images/smallcaseLogo.png"
            alt="smallcaseLogo"
            style={{ width: "200px" }}
            className="img-fluid mt-3 mb-3"
          />
          <br />
          <span className="text-muted">
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </span>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3">
          <img
            src="Media/images/dittoLogo.png"
            alt="dittoLogo"
            style={{ width: "200px" }}
            className="img-fluid mt-3 mb-3"
          />
          <br />
          <span class="text-muted">
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling.
          </span>
        </div>
        <button className="p-2 btn btn-primary fs-5 w-25 w-md-25 mx-auto mt-5 mb-5" >Sign up for free</button>
        </div>
      </div>
    </div>
  );
} 

export default Univers;
