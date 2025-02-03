import OpenAccount from "../OpenAccount";
import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Footer from "../Footer";
import Navbar from "../Navbar";

function HomePage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
        <h2>Homepage 2</h2>
        </>
     );
}

export default HomePage;