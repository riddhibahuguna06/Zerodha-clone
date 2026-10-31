function Hero(){
  return(
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 text-center mb-4">
          <h1 className="mb-0" style={{ fontSize: "clamp(30px, 4vw, 40px)", lineHeight: 1.35, fontWeight: 500 }}>
            We pioneered the discount broking model in India. Now, we are breaking ground with our technology.
          </h1>
        </div>

        <div className="col-12 col-lg-5 px-lg-4" style={{ fontSize: 17, lineHeight: 1.8 }}>
          <p className="mb-4">
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and “Rodha”, the Sanskrit word for barrier.
          </p>
          <p className="mb-0">
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India. Over 1.8+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-12 col-lg-5 px-lg-4" style={{ fontSize: 17, lineHeight: 1.8 }}>
          <p className="mb-4">
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors. Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
          </p>
          <p className="mb-0">
            And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us, or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero;
