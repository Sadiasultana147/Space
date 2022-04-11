// import React, {useEffect, useState } from 'react';
// import UpcomingRocket from "../UpcomingRocket/UpcomingRocket";
// import LaunchYear from "../LaunchYear/LaunchYear";
// import Search from "../Search/Search";
// import { Spinner } from 'react-bootstrap';


// function FilterRockets() {
//     const [selects, setSelects] = useState("");
//     const [control, setControl] = useState('upcoming');
    
//     if (control.length === 0) {
//         return <Spinner animation="border" variant="danger" />
//     }
//     return (
//         <div className=' detailbody'>
//             <div className='pt-5 ms-4' >
//                 <button className='p-2 button' onClick={() => setControl("upcoming")}>
//                 <div>
//            {/* <h1 >{selects}</h1> */}
//            <span  className="me-3" >
//                     Is Upcoming ? 
                         
//                 </span>
           
//           <select value={selects} onChange={e=>setSelects(e.target.value)} name="upcoming" id="upcoming">
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
           
//           </select>
//           </div>
//                 </button>

//                 <button className='p-2 ms-4 button'
//                     onClick={() => setControl("launch")}
                    

//                 >
//                     <div>
//            {/* <h1 style={{color:"white"}}>{selects}</h1> */}
//            <span  className="me-3" >Launch Year ?</span>
//           <select value={selects} onChange={e=>setSelects(e.target.value)} name="year" id="year">
//             <option value="1990">1990</option>
//             <option value="1991-1995">1991-1995</option>
//             <option value="1996-2000">1996-2000</option>
//             <option value="2001-2005">2001-2005</option>
//             <option value="2006-2010">2006-2010</option>
//             <option value="2011-2015">2011-2015</option>
//             <option value="2016-2020">2016-2020</option>
//             {/* <option value="2020">2020</option> */}
           
//           </select>
//           </div>
                   
//                 </button>
//                 <button className='p-2 ms-3 button'
//                     onClick={() => setControl("search")}
                    

//                 >
//                    Search
//                 </button>
//             </div>
//             <div >

//                 {control === "upcoming" && <UpcomingRocket></UpcomingRocket>}
//                 {control === "launch" && <LaunchYear></LaunchYear>}
//                 {control === "search" && <Search></Search>}




//             </div>


//         </div>
//   );
// }

// export default FilterRockets;