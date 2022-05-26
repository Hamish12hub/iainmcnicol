import React from 'react'
import "./EnquiriesStyles.css"
import {AiOutlineCopyright} from "react-icons/ai"
import {FaFacebook} from "react-icons/fa"
import {FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"

function Enquiries() {
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
    
    <div name="Enquiries">
      
       <div className='thisOne'>
         <div className='thisTwo'>
           <p className='NameText'>Iain McNicol</p>
         </div>
         <div className='thisThree'>
           <h1>Enquiries</h1>
           <p className='textParagraph'>To contact Iain McNicol send an Email</p>
           <p className='textParagraph'>Or Catch Iain on his Socal Media</p>
           <div className='line'></div>
           <div className='this-social-icons'>
                  {/* <FaFacebook className="this-icon" />
                  <FaInstagram className="this-icon" />
                  <FaYoutube className="this-icon" />
                  <FaTwitter className="this-icon" /> */}
                  <FaFacebook className="this-icon" onClick={linkFunctionFaceBook}/>
                  <FaInstagram className="this-icon" onClick={linkFunctionInstagram}/>
                  <AiOutlineMail className="this-icon" onClick={linkFunctiongmail}/>
                  <FaTwitter className="this-icon" onClick={linkFunctionTwitter}/>
           </div>
         </div>
       </div>

    <div className='outside'>
      <div className='container'>
      <p className="text"><AiOutlineCopyright className="copyRight"/> 2022 Iain Mcnicol. All rights reserved.</p>
        <p className="text"> Created by Hamish Mcnicol</p>
      
      </div>
      </div>
      
      </div>
  )
}

export default Enquiries
