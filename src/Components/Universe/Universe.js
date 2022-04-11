import React from 'react';

import Bongo from "../../Assests/t@2x.png";
import BD from "../../Assests/se@2x.png";
import M11 from "../../Assests/j@2x.png";
import './Universe.css'

function Universe() {
  return (
    <div className='mb-4 universe-container' >
       <h1 style={{color:"white"}}>Discover Universe</h1>
        <div className='mt-4 row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 d-flex justify-content-center'>
            <div className='singleCard13'>
                <img className='mt-3' src={Bongo} alt=""/>
                <h3 style={{color:"white" , textAlign:"center"}}>Mission Bongo</h3>
                <p style={{color:"white", textAlign:"center"}}>
                    At PIAP Space, we believe that we can make Space and Earth cleaner,
                    engineering, and delivering top-quality robotics solutions.
                </p>
            </div>
            <div className='singleCard2 ms-5' >
                <img className="mt-3"src={BD} alt=""/>
                <h3 style={{color:"white"}}>Mission BD</h3>
                <p style={{color:"white"}}>
                    At PIAP Space, we believe that we can make Space and Earth cleaner,
                    engineering, and delivering top-quality robotics solutions.
                </p>
            </div>
            <div className='singleCard13 ms-5'>
                <img className="mt-3" src={M11} alt=""/>
                <h3 style={{color:"white", textAlign:"center" }}>Mission 11</h3>
                <p style={{color:"white", textAlign:"center"}}>
                    At PIAP Space, we believe that we can make Space and Earth cleaner,
                    engineering, and delivering top-quality robotics solutions.
                </p>
            </div>

        </div>
         
        
    </div>
  );
}

export default Universe;