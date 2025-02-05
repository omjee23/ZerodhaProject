function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-2">
        <a href="#" className="navbar-brand">
          <img
            src="Media/images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportContent"
          aria-controls="navbarSupportContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                style={{ marginLeft: "30px" }}
                href="#"
              >
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                style={{ marginLeft: "30px" }}
                href="#"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                style={{ marginLeft: "30px" }}
                href="#"
              >
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                style={{ marginLeft: "30px" }}
                href="#"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
