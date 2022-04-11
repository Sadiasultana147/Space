import React from 'react';
import Banner from '../Banner/Banner';
import Universe from '../Universe/Universe';
import Rockets from "../Rockets/Rockets";
import './Home.css';

function Home() {
  return (
    <div >
      <div className='ms-5'>
         <Banner></Banner>
         <Universe></Universe>
         <Rockets></Rockets>
      </div>
    </div>
  );
}

export default Home;