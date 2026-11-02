
function LeftSec({imageURL , productName , productDescription , tryDemo ,learnMore , googlePlay , appStore}){
    return(
<div className="container mt-5">
    <div className="row">
        <div className="col-6">
            <img src={imageURL}></img>
        </div>
         <div className="col-6 mt-5 p-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>

            {(tryDemo || learnMore) && <div>
                {tryDemo && <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo</a>}
                {learnMore && <a href={learnMore} style={{marginLeft : "80px", textDecoration: "none"}}>Learn More</a>}
            </div>}

            {(googlePlay || appStore) && <div className="mt-4">
              {googlePlay && <a href={googlePlay}>
                <img src="src/assets/googlePlayBadge.svg" alt="Get it on Google Play" />
              </a>}

              {appStore && <a href={appStore}>
                <img src="src/assets/appstoreBadge.svg" alt="Download on the App Store" style={{marginLeft:"30px"}} />
              </a>}
            </div>}
         </div>
    </div>
</div>
    )
}

export default LeftSec;
