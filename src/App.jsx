
// import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './LandingPage/home/HomePage';
import Signup from './LandingPage/signup/Signup.jsx';
import AboutPage from './LandingPage/About/AboutPage.jsx';
import ProductsPage from './LandingPage/products/ProductsPage.jsx'
import PricingPage from './LandingPage/pricing/PricingPage.jsx';
import SupportPage from './LandingPage/support/SupportPage.jsx';

import NotFound from './LandingPage/NotFound.jsx';
import Navbar from "./LandingPage/Navbar.jsx";
import Footer from "./LandingPage/Footer.jsx";


function App() {
 

 return(
  <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/product" element={<ProductsPage/>}></Route>
        <Route path="/pricing" element={<PricingPage/>}></Route>
        <Route path="/support" element={<SupportPage/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
 )
}

export default App
