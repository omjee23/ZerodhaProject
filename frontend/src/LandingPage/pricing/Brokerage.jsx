import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row border-top p-5 mt-5 text-center">
        <div className="col-12 col-md-8 p-4">
          <a href="" className="text-decoration-none"><h3 className="fs-5">Brokerage calculator</h3></a>
          <ul style={{textAlign: "left", lineHeight: "2.5" , fontSize: "13px"}} className="text-muted mt-3">
            <li>Call & Trade and RMS auto-squareoff:Additional charges of ₹50 + GST per order. </li>
            <li>Digital Contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
            <li>For NRI account (non-PIS) , 0.5% or ₹100 per exeuted order for equity (whichever is lower).</li>
            <li>For NRI account (PIS) , 0.5% or ₹200 per exeuted order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order inetead of ₹20 per executed order</li>
          </ul>
        </div>
        <div className="col-6 col-md-4 p-4">
          <a href="" className="text-decoration-none"><h3 className="fs-5">List of charges</h3></a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
