import Navbar from "../../Navbar";

import Footer from "../../Footer";

import LeftSec from "./LestSec";

import RightSec from "./RightSec";


import Hero from "./Hero";
import kiteImage from "../../assets/kite.png";
import kiteConnect from "../../assets/kiteconnect.png"
import consoleImage from "../../assets/console.png";

function Products(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <LeftSec imageURL={kiteImage} productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." productName="Kite" tryDemo="#" learnMore="#" googlePlay="#" appStore="#" />

        <RightSec imageURL={consoleImage} productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." productName="Console" tryDemo="#" learnMore="#" />

          <LeftSec imageURL={kiteConnect} productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." productName="Kite Connect API" />

        <Footer/>
        </>
    )
}
export default Products;
