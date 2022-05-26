import React, {useState} from 'react'
import {BiSearch} from "react-icons/bi"
import {BiAccessibility} from "react-icons/bi"
import {BiAlarmOff} from "react-icons/bi"
import {BiAlarm} from "react-icons/bi"
import "./NavbarStyles.css"
import {FaFacebook} from "react-icons/fa"
import {FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"
import {BiAbacus} from "react-icons/bi"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from "react-scroll"
import {AiOutlineMail} from "react-icons/ai"


{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Luxurious+Roman&family=Oxanium:wght@300&family=PT+Serif&family=Smooch&display=swap" rel="stylesheet"></link> */}



function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    // window.addEventListener('scroll', (event) => {
    //     console.log(window.scrollY);
    //     if(window.scrollY >= 100){
    //       document.getElementById("navbar").classList.add("felix")
    //     }else{
    //       document.getElementById("navbar").classList.remove("felix")
    //     }
    //   })
    
    window.addEventListener('scroll', (event) => {
        console.log(window.scrollY);
        if(window.scrollY >= 500){
                // document.getElementsByClassName("navbar").classList.add("felix")
                document.getElementById("navbar").classList.add("felix")
          }else{
                // document.getElementsByClassName("navbar").classList.remove("felix")
                document.getElementById("navbar").classList.remove("felix")
              }
      })

    function refresh() {
        window.location.reload(false);
    }
    const linkFunctionFaceBook = () =>{
        window.location.href='https://m.facebook.com/profile.php?id=100057829641075';
    }
    const linkFunctionInstagram = () =>{
        window.location.href='https://www.instagram.com/lordiainmcnicol/?hl=en-gb';
    }
    const linkFunctiongmail = () =>{
        window.location.href="mailto:iain.m.mcnicol@gmail.com";
    }
    const linkFunctionTwitter = () =>{
        window.location.href='https://twitter.com/iainmcnicol'; 
    }
  return (
    <div id={nav ? "navbarRed" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
          <h2 className='boxPaddingLeft' onClick={refresh}>IAIN MCNICOL</h2>
      </div>
      <ul className='nav-menu'>
          <Link className='listTwo' to="Home" smooth={true} duration={500}><li>Home</li></Link>
          <Link className='listTwo' to="Information" smooth={true} duration={500}><li>Information</li></Link>
          <Link className='listTwo' to="About" smooth={true} duration={500}><li>About</li></Link>
          <Link className='listTwo' to="Enquiries" smooth={true} duration={500}><li>Enquiries</li></Link>
          {/* <li>Home</li>
          <li>Destination</li>
          <li>Travel</li>
          <li>Books</li>
          <li>Views</li> */}
      </ul>
      {/* <div className='nav-icons'>
          <BiSearch className="icon" style={{marginRight: "1rem"}}/>
          <BiAccessibility className="icon" />
          <BiAlarm className="icon" />
      </div> */}
      <div className="hamburger" onClick={handleNav}>
          {!nav ? (<AiOutlineMenu className="iconboxPaddingRight" />) : (<AiOutlineClose className="iconboxPaddingRight"/>)}

      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
          <ul className='mobile-nav'>
          <Link className='listOne' to="Home" smooth={true} duration={500}><li>Home</li></Link>
          <Link className='listOne' to="Information" smooth={true} duration={500}><li>Information</li></Link>
          <Link className='listOne' to="About" smooth={true} duration={500}><li>About</li></Link>
          <Link className='listOne' to="Enquiries" smooth={true} duration={500}><li>Enquiries</li></Link>
            {/* <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Books</li>
            <li>Views</li> */}
          </ul>
          <div className='mobile-menu-bottom'>
              {/* <div className='menu-icons'>
                  <button>Search</button>
                  <button>Account</button>
              </div> */}
              <div className='social-icons'>
                  <FaFacebook className="icon" onClick={linkFunctionFaceBook}/>
                  <FaInstagram className="icon" onClick={linkFunctionInstagram}/>
                  <AiOutlineMail className="icon" onClick={linkFunctiongmail}/>
                  <FaTwitter className="icon" onClick={linkFunctionTwitter}/>
                  {/* <FaPinterest className="icon" /> */}
              </div>
          </div>


      </div>
    </div>
  )
}

export default Navbar

