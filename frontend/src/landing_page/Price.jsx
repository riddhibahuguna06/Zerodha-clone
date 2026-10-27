import Pricing0 from "../assets/pricing0.svg";
import PricingEquity from "../assets/pricingEquity.svg";
import IntradayTrades from "../assets/intradayTrades.svg";

function Price() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <h3>Unbeatable Pricing</h3>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        <div className="col">
          <img src={Pricing0} alt="Pricing0" />
        </div>
        <div className="col">
          <img src={PricingEquity} alt="PricingEquity" />
        </div>
        <div className="col">
          <img src={IntradayTrades} alt="IntradayTrades" />
        </div>
      </div>
    </>
  );
}

export default Price;
