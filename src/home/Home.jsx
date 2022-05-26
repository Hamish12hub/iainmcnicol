import React from 'react'
import "./HomeStyles.css"
import two from "./two.JPG"

// import four from "./four.jpg"

function Home() {
  return (
    <div className='Home'>
      <img className='photo' src={two}/>
    </div>
  )
}

export default Home

// {/* <Carousel className='carousel' showArrows={false} autoPlay={true} infiniteLoop={true}>
//     <div>
//       <img src={one}/>
//       {/* <p className='legend'>legened</p> */}
//       </div>
//       <div>
//         <img src={two}/>
//         {/* <p className='legend'>legened</p> */}
//       </div>
      
//       <div>
//       <img src={three}/>
//       {/* <p className='legened'>legened</p> */}
//     </div>
    
//     {/* <div>
//     <img src={four}/> */}
//     {/* <p className='legened'>legened</p> */}
//   {/* </div> */}
//   </Carousel> */}