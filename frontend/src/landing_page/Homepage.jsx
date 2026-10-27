import Navbar from "../Navbar";
import Awards from "./Awards";
import Education from "./Education";
import Footer from "../Footer";
import Hero from "./Hero";
import Stats from "./Stats";
import Price from "./Price";

function Homepage(){
    return(
        <>
         <Navbar/>
         <Hero/>
        <Stats/>
        <Price/>
         <Awards/>
        
        <Education/>
         <Footer/>
        </>
    )
}

export default Homepage;