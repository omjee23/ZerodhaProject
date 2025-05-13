function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <img
            src="Media/images/largestBroker.svg"
            alt="Largest Stock Broker"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stock & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bond and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img
            src="Media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
