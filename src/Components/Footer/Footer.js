import React from 'react';
import Vector from "../../Assests/Vector.png";
import twitter from "../../Assests/Vectorin.png";
import fa from "../../Assests/Vector (1).png";
import insta from "../../Assests/Vector (2).png";
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
       <div>
          <h1 className='py-5' style={{color:"white"}}>Newsletter</h1>
          <div class="search-container ">
            <form  action="/action_page.php">
            <input className='subscribe-border' type="text" placeholder="Email address" name="search"/>
            <button style={{color:"white"}} className='submitborder' type="submit">Subscribe</button>
            </form>
          </div>
       </div>
       <div className='mt-5 row pb-5'>
        <div className='mt-5 col-lg-4'>
          <img src={Vector} className="navImage" alt="" />
          <span style={{ color: "white" }} className="ms-3 ">Space</span>
        </div>
          <div className='col-lg-4 mt-5'>
              <p style={{color:"white"}}>Space 2020, All rights reserved.</p>
          </div>
          <div className='col-lg-4 row mt-5'>
              <div className='col-lg-1' >
                  <img src={twitter} alt=""/>
              </div>
              <div className='col-lg-1'>
                <img src={fa} alt=""/>
              </div>
              <div className='col-lg-1'>
                <img src={insta} alt=""/>
              </div>
          </div>
       </div>
    </div>
  );
}

export default Footer;