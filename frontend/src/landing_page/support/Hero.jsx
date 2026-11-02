function Hero(){
    return(
        <section className="container-fluid" id="supportHero">
            <div className="p-5 mt-5 mb-5" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="" style={{textDecoration: "none"}}>Track Ticket</a>
            </div>

            <div className="row mt-5 p-5 mb-5">
                <div className="col-6 p-5">
                    <h1 className="fs-3">
                        Search for an answer or browse for help topics to create a ticket
                    </h1>
                    <input placeholder="Eg. How do i activate F&O" />
                    <a href="" style={{textDecoration: "none"}}>Track Account Opening</a>
                     <br/>
                     <a href="" style={{textDecoration: "none"}}>Add Intraday margins</a>
                     <br/>
                     <a href="" style={{textDecoration: "none"}}>Kite User Manual </a>
                     <br/>

                </div>

                 <div className="col-6 p-5">
                    <h1 className="fs-3">
                        Featured
                    </h1>
                     <a href="" style={{textDecoration: "none"}}>Current Takeover and Delisting Ticket</a>
                     <br/>
                      <a href="" style={{textDecoration: "none"}}>Latest Intraday and traders</a>
                      
                </div>
            </div>
        </section>
    )
}
export default Hero;