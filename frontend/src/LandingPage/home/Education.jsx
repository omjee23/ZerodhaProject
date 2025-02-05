function Education() {
    return (
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 ">
                    <img src="Media\images\education.svg" alt="Education" style={{width: '70%'}} className="img-fluid"/>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 ">
                <h1 className="mb-3 fs-2">Free and open market education</h1>
            <p className="">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a className="mx-5" style={{textDecoration : "none"}} href=" ">Varsity <i class="fas fa-long-arrow-alt-right"></i></a>
        
            <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a className="mx-5" style={{textDecoration : "none"}} href=" ">TradingQ&A <i class="fas fa-long-arrow-alt-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;