// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home"
import About from "./about/About"
import Information from "./information/Information";
import Enquiries from "./enquiries/Enquiries"
// import Hero from "./hero/Hero";
// import Destinations from "./destinations/Destinations";
// import Search from "./search/Search";
// import Selects from "./selects/Selects";
// import ImgCarousel from "./carousel/ImgCarousel";
// import Footer from "./footer/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Information/>
      <About/>
      <Enquiries/>
      {/* <Hero/>
      <Destinations/>
      <Search/>
      <Selects/>
      <ImgCarousel/>
      <Footer/> */}
    </div>
  );
}

export default App;