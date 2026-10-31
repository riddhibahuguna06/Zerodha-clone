import nithinKamath from "../../assets/nithinKamath.jpg"

function Team(){
    return(
      <div className="container py-5" aria-labelledby="people-title">
        <div className="row align-items-center justify-content-center g-5">
          <div className="col-12 col-md-4 text-center">
            <img
              src={nithinKamath}
              alt="Nithin Kamath"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "70%", borderRadius: "100%" }}
            />
            <h3 className="h5 mb-1">Nithin Kamath</h3>
            <p className="text-muted mb-0">Founder &amp; CEO</p>
          </div>
          <div className="col-12 col-md-7">
            <h2 id="people-title" className="mb-4" style={{ fontSize: 30, fontWeight: 500 }}>
              People
            </h2>
            <p className="mb-3">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className="mb-0">
              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
          </div>
        </div>
      </div>
    )
}

export default Team ;
