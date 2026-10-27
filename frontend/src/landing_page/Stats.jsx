import ecosystem from "../assets/ecosystem.png";
import kc_logo from "../assets/kc-logo-landing.svg";

function Stats(){
    return(
        <>
       
       <div className="container">
        <div className="row">
            <div className="col-6">
          <h2>Trust with confidence</h2>

          <h3>Customer-first always</h3>
          <p>That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

           <h3>No spam or gimmicks</h3>
           <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

            <h3>The Zerodha universe</h3>
            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

            <h3>Do better with money</h3>
            <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className="col-6">
            <img className="img-fluid mb-4" src={ecosystem} alt="stats"></img>
            </div>

            <div className="row">
                <div className="col-3">
                  <img src={kc_logo} alt="kiteConnect"></img>
                </div>
              
            <div className="col-8">
                 <p>Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more.</p>
            </div>
               
            </div>
        </div>
       </div>
        </>
    )
}

export default Stats;