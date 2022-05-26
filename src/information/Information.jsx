import React from 'react'
import "./InformationStyles.css"
import ReactPlayer from "react-player"

function Information() {
  const opts = {
    height: "100%",
    width: "100%"
  }
  return (
    <div name="Information" className='thisContainer'>
      <div className='secondConatiner'>
      <h2>this is a text box 150 words</h2>
      <br></br>
      <p>this is a text box this is a text box this is a text box
      this is a text box this is a text box this is a text box
      this is a text box this is a text box this is a text box
      this is a text box this is a text box this is a text box
      this is a text box this is a text box this is a text box
      this is a text box this is a text box this is a text box
      <br></br>
      <br></br>
      this is a text box this is a text box this is a text box
      this is a text box this is a text box this is a text box
      this is a text box this is a text box this is a text box
      this is a text box this is a text box this is a text box
      this is a text box this is a text box this is a text box
      </p>
    </div>
      <div className='insideContainer'>
      <ReactPlayer opts={opts} controls={true} className="video" url = "https://www.youtube.com/watch?v=tLFByXxdMfs&t=357s" />
    </div>
    </div>
  )
}

export default Information
