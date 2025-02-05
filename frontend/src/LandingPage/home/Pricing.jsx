function Pricing() {
  return (
    <div className="container">
  <div className="row">
    <div className="col-12 col-md-4 mb-4">
      <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
      <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
      <a className="mx-5" style={{ textDecoration: "none" }} href="#">See Pricing <i className="fas fa-long-arrow-alt-right"></i></a>
    </div>
    
    <div className="col-12 col-md-8">
      <div className="row text-center">
        <div className="col-12 col-md-6 mb-4">
          <div className="border p-3">
            <h1 className="mb-3"><i className="fas fa-rupee-sign"></i> 0</h1>
            <p>Free equity delivery <br /> and direct mutual funds</p>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <div className="border p-3">
            <h1 className="mb-3"><i className="fas fa-rupee-sign"></i> 20</h1>
            <p>Intraday and F&O</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Pricing;
