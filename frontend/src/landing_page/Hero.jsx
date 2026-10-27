
import homeHero from "../assets/homeHero.png";

function Hero(){
    return(
        <>
        <div className="container text-center my-5">
            <div className="row justify-content-center">
          <img className="img-fluid mb-4" src={homeHero} alt="Zerodha trading platform dashboard" />
          <h1>Invest in everything</h1>
          <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds and more.</p>
          <div>
            <button className="btn btn-primary hero-signup-button">Signup Now</button>
          </div>
            </div>
         
        </div>
      
        </>
    )
}
export default Hero;