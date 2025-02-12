
function Team() {
  return (
    <div className="container">
      <div className="row mt-3">
        <h1 className="fs-2 text-center">
         People
        </h1>
      </div>
      <div className="row p-5  mt-5 text-muted"  style={{lineHeight: "1.9", fontSize: "17px"}}>
        <div className="col-12 col-md-6 p-5 text-center">
            <img src="Media/images/nithinKamath.jpg" alt="nitinKumar" style={{borderRadius: "100%" , width: "55%"}}  className="img-fluid"/>
            <h4 className="mt-5 fs-4">Nithin Kamath</h4>
            <h6 className="fs-6">Founder, CEO</h6>
        </div>
        <div className="col-12 col-md-6 p-5">
            <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>
            Playing basketball is his zen
            </p>
            <p>
            Connect on <a className="text-decoration-none" href="">Homepage </a>/<a className="text-decoration-none"href=""> TradingQnA </a>/ <a className="text-decoration-none" href=""> Twitter</a>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Team