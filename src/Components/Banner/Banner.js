import React from 'react';
import image1 from "../../Assests/3 1.png";
import Asset from "../../Assests/Asset 1@8x-8 1.png";
import image2 from "../../Assests/r8 2.png";
import r7  from "../../Assests/r7 2.png";
import r8 from "../../Assests/r8 1.png";
import image3 from "../../Assests/2 1.png";
import star from "../../Assests/Asset 5@2x-8.png";
import './Banner.css';


function Banner() {
  return (
    
       
        <div className='mt-5'>
         
            <div className="row ">
                <div className="col-lg-1">
                    <img  src ={image1} alt=""/>
                </div>
                <div  className="col-lg-4">
                <div className='welcome ms-5'> 
                <img  src ={image2} alt=""/>
                <span className="text1 ms-3" style={{color:"white"}}>Welcome to setella</span> 
                </div>
                <h1 className='text2 mt-5 mb-5' style={{color:"white"}}>
                    <span>SPACE FOR</span> 
                       <br></br>
                    <span>EVERYONE</span>
                </h1>
                <p style={{color:"white"}} className="text3 mb-5">
                    At PIAP Space, we believe that we can make Space and Earth cleaner,
                    engineering, and delivering top-quality robotics solutions.
                 </p>
                 <p  className="getStart" style={{color:"white"}}>GET START</p>
                
                </div>
                <div className="col-lg-4 ">
                    
                    <img className='asset' src = {Asset}  alt=""/>
                   
                    
                </div>
                <div  className="col-lg-3 ">
               
                <img className='spacemanAttached '  src={r7} alt=""/>
                <img className='back' src={r8} alt=""/>
                <img className='image3' src={image3} alt=""/>
                
                </div>
                
            </div>
           
        </div>
        
    
  );
}

export default Banner;