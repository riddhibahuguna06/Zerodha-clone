function RightSec({learnMore , imageURL , productName ,  productDescription} ){
    return(
      <div className="container">
        <div className="row align-items-center">
            <div className="col-6 mt-5 p-5 text-center text-md-start">
                <h1>{productName}</h1>
                <p>{productDescription}</p>

                <a href={learnMore} style={{textDecoration : "none"}}>
                    Learn More
                </a>
            </div>

            <div className="col-6">
             <img src={imageURL}/>
            </div>
        </div>
      </div>
    )
   
    
}

export default RightSec;
