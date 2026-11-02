import intradayTrades from "../../assets/intradayTrades.svg"
import pricingEquity from "../../assets/pricingEquity.svg"
import pricingMF from "../../assets/pricingMF.svg"
function Hero(){
    return(
        <div className="container py-5">
            <h1 className="text-center mt-4 mb-3">
                Charges
            </h1>
            <h3 className="text-muted text-center mb-5">
                List of all charges and taxes
            </h3>

            <div className="row g-5 text-center">
                <div className="col-12 col-md-4 px-lg-4">
                  <img src={pricingEquity} alt="Equity delivery pricing" className="img-fluid mb-3" />
                  <h3 className="mt-3 mb-3">Free equity delivery</h3>
                  <p className="fw-light" style={{ lineHeight: 1.7 }}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                 <div className="col-12 col-md-4 px-lg-4">
                      <img src={intradayTrades} alt="Intraday and F&O pricing" className="img-fluid mb-3" />
                      <h3 className="mt-3 mb-3">Intraday and F&amp;O trades</h3>
                      <p className="fw-light" style={{ lineHeight: 1.7 }}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                 <div className="col-12 col-md-4 px-lg-4">
                     <img src={pricingMF} alt="Direct mutual fund pricing" className="img-fluid mb-3" />
                     <h3 className="mt-3 mb-3">Free direct MF</h3>
                     <p className="fw-light" style={{ lineHeight: 1.7 }}>All direct mutual fund investments are absolutely free — ₹ 0 commissions &amp; DP charges.</p>
                </div>
            </div>
        </div>
    )
}
export default Hero ;
