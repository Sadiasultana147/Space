import React, {useState, useEffect} from 'react';
import './Rockets.css'



function Rockets() {
    const [rockets, setRockets] = useState([]);
    const [selects, setSelects] = useState("Yes");
    const [searchText, setSearchText] = useState('')
   
    //  Data fetch
   useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => setRockets(data))
    }, [])
    // Search Function
    const handleButton = (e) => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
        console.log(searchText);
    
        //searchText=searchTextValue
    };
    //  Rocket Filter
      
      const result = rockets.filter(
        (data) => data.rocket.rocket_name.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log(result)
    // PAgination Condition
    useEffect(() => {
            if(selects==="Yes" || "No" || "1990" || "1991-195" || "1996-2000" || "2001-2005"
             || "2006-2010" || "2011-2015" || "2016-2020"){
               document.getElementById("1")?.click();

            }
    }, [selects, document.getElementById("1")])
    // Page set up
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const lastPost = currentPage * pageSize;
    const firstPost = lastPost - pageSize;
    const pageIndex = [];
    const totalPage = Math.ceil(rockets.length / pageSize) + 1;
    for (let i = 1; i < totalPage; i++) {
        pageIndex.push(i);
    }
    //   page functon page valu change

    // const handleChangePageSize = (e) => {
    //     setPageSize(e.target.value);
    // };
    const handlePaginate = (index) => {
        setCurrentPage(index);
    };
    // Upcoming
    const filterUpcomingTrue = rockets.filter(rocket=>(rocket.upcoming===true));
    const filterUpcomingFalse = rockets.filter(rocket=>(rocket.upcoming===false))
    const currentRocketsTrue = filterUpcomingTrue.slice(firstPost, lastPost);
    const currentRocketsFalse = filterUpcomingFalse.slice(firstPost, lastPost);
    //Launch launch_year
    const filtered1990 = rockets.filter(rocket=>(parseInt(rocket.launch_year)<=1990 ));
    const filtered19911995 = rockets.filter(rocket=>(parseInt(rocket.launch_year)>=1991 && parseInt(rocket.launch_year)<=1995))
    const filtered19962000 = rockets.filter(rocket=>(parseInt(rocket.launch_year)>=1996 && parseInt(rocket.launch_year)<=2000))
    const filtered20012005 = rockets.filter(rocket=>(parseInt(rocket.launch_year)>=2001 && parseInt(rocket.launch_year)<=2005))
    const filtered20062010 = rockets.filter(rocket=>(parseInt(rocket.launch_year)>=2006 && parseInt(rocket.launch_year)<=2010))
    const filtered20112015 = rockets.filter(rocket=>(parseInt(rocket.launch_year)>=2011 && parseInt(rocket.launch_year)<=2015))
    const filtered20162020 = rockets.filter(rocket=>(parseInt(rocket.launch_year)>=2016 && parseInt(rocket.launch_year)<=2020))
    const current1990 = filtered1990.slice(firstPost, lastPost);
    const current19911995 = filtered19911995.slice(firstPost, lastPost);
    const current19962000 = filtered19962000.slice(firstPost, lastPost);
    const current20012005 = filtered20012005.slice(firstPost, lastPost);
    const current20062010 = filtered20062010.slice(firstPost, lastPost);
    const current20112015 = filtered20112015.slice(firstPost, lastPost);
    const current20162020 = filtered20162020.slice(firstPost, lastPost);
  return (
    <div  className='mt-5 rocketsContainer  '>
        <div style={{backgroundColor:"#2D2853"}} className='row singleCardfilter  '>
            <div className='d-flex align-items-center col-lg-3'>
                {/* Upcoming Rocket Select */}
            <div >
            <span style={{color: "#ABABAB"}}>

                Is Upcoming ? 
            </span>
            <select style={{color:"#DADADA"}} className='ms-5 search-border selected' value={selects} onChange={e=>setSelects(e.target.value)} name="upcoming" id="upcoming">
            <option selected value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
        </div>
               
            </div>
            <div style={{color:"#DADADA"}} className='col-lg-1 '>

                <h1>|</h1>
            </div>
            <div className='col-lg-4 d-flex align-items-center'>
                {/* Launch Year Selection */}
            <div >
                {/* <h1 style={{color:"white"}}>{selects}</h1> */}
                <span style={{color:"#DADADA"}} className="me-3" >Launch Year ?</span>
                    <select style={{color:"#DADADA"}}  className='ms-5 search-border' value={selects} onChange={e=>setSelects(e.target.value)} name="year" id="year">
                    <option value="1990">1990</option>
                    <option value="1991-1995">1991-1995</option>
                    <option value="1996-2000">1996-2000</option>
                    <option value="2001-2005">2001-2005</option>
                    <option value="2006-2010">2006-2010</option>
                    <option value="2011-2015">2011-2015</option>
                    <option value="2016-2020">2016-2020</option>
                    {/* <option value="2020">2020</option> */}
                
                </select>
          </div>
            </div>
             {/* Search Container */}
            <div className='col-lg-4  d-flex align-items-center'>
                <div class="search-container">
                   
                    <input style={{color:"white"}} onChange={handleButton}  className='search-border'  type="text" placeholder="Search for rocket" name="search"/>
                    <button style={{color:"#DADADA"}} className='submitborder' >Search</button>
                </div>
            </div>
        </div>

        {/* Data */}
        <div >
        <div className='rocketContainer '>
            {
                (selects=="Yes")&&
                <div  className='mt-5  g-5 row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 '>
                {
                    currentRocketsTrue.map(rocket => 
            
                        <div className='singleCardRocket allcard'> 
                            <img className='w-25 mt-4' src={rocket.links.mission_patch} alt=""/>
                            <h3 style={{color:"white"}}>{rocket.mission_name}</h3>
                            <p style={{color:"white"}}>Rocket name: {rocket.rocket.rocket_name}</p>
                            <p style={{color:"white"}}> Launch year: {rocket.launch_year}</p>
                            <p style={{color:"white"}}> 
                                 Upcoming: {rocket.upcoming.toString()}
                            </p>
                        </div>
                    )
                }
                    </div>
            }
             {
                (selects=="No")&&
                <div className='mt-5 g-5 row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 '>
                {
                    currentRocketsFalse.map(rocket => 
            
                        <div className='singleCardRocket ms-4'> 
                            <img className='w-25 mt-4' src={rocket.links.mission_patch} alt=""/>
                            <h3 style={{color:"white"}}>{rocket.mission_name}</h3>
                            <p style={{color:"white"}}>Rocket name: {rocket.rocket.rocket_name}</p>
                            <p style={{color:"white"}}> Launch year: {rocket.launch_year}</p>
                            <p style={{color:"white"}}> 
                            {
                            (rocket.upcoming.toString()=="false")?
                            <p>Upcoming: false</p>:
                            <p>Upcoming: No</p>
                            }
                            </p>
                        </div>
            
                    )
                }
                </div>
            }
        {
            (selects=="1990")&&
            <div className='mt-5 g-5 row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 '>
        {
            current1990.map(rocket => 
    
                <div className='singleCardRocket ms-4'> 
                    <img className='w-25 mt-4' src={rocket.links.mission_patch} alt=""/>
                    <h3 style={{color:"white"}}>{rocket.mission_name}</h3>
                    <p style={{color:"white"}}>Rocket name: {rocket.rocket.rocket_name}</p>
                    <p style={{color:"white"}}> Launch year: {rocket.launch_year}</p>
                    
                    <p style={{color:"white"}}> 
                        Upcoming: {rocket.upcoming.toString()}
                    </p>
                </div>
    
            )
        }
        </div>
    }
    {
        (selects=="1991-1995")&&
        <div className='mt-5 g-5 row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 '>
        {
            current19911995.map(rocket => 
    
                <div className='singleCardRocket ms-4'> 
                    <img className='w-25 mt-4' src={rocket.links.mission_patch} alt=""/>
                    <h3 style={{color:"white"}}>{rocket.mission_name}</h3>
                    <p style={{color:"white"}}>Rocket name: {rocket.rocket.rocket_name}</p>
                    <p style={{color:"white"}}> Launch year: {rocket.launch_year}</p>
                    <p style={{color:"white"}}> 
                        Upcoming: {rocket.upcoming.toString()}
                    </p>
                </div>
    
            )
        }
        </div>
    }

    {
        (selects=="1996-2000")&&
        <div className='mt-5 g-5 row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 '>
        {
            current19962000.map(rocket => 
    
                <div className='singleCardRocket ms-4'> 
                    <img className='w-25 mt-4' src={rocket.links.mission_patch} alt=""/>
                    <h3 style={{color:"white"}}>{rocket.mission_name}</h3>
                    <p style={{color:"white"}}>Rocket name: {rocket.rocket.rocket_name}</p>
                    <p style={{color:"white"}}> Launch year: {rocket.launch_year}</p>
                   
                    <p style={{color:"white"}}> 
                        Upcoming: {rocket.upcoming.toString()}
                    </p>
                </div>
    
            )
        }
        </div>
       
        
    }
     {
        (selects=="2001-2005")&&
        <div className='mt-5 g-5 row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 '>
        {
            current20012005.map(rocket => 
    
                <div className='singleCardRocket ms-4'> 
                    <img className='w-25 mt-4' src={rocket.links.mission_patch} alt=""/>
                    <h3 style={{color:"white"}}>{rocket.mission_name}</h3>
                    <p style={{color:"white"}}>Rocket name: {rocket.rocket.rocket_name}</p>
                    <p style={{color:"white"}}> Launch year: {rocket.launch_year}</p>
                    <p style={{color:"white"}}> 
                    <p style={{color:"white"}}> 
                        Upcoming: {rocket.upcoming.toString()}
                    </p>
                    </p>
                </div>
    
            )
        }
        </div>
       
        
    }


    
    {
        (selects=="2011-2015")&&
        <div className='mt-5 g-5 row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 '>
        {
            current20112015.map(rocket => 
    
                <div className='singleCardRocket ms-4'> 
                    <img className='w-25 mt-4' src={rocket.links.mission_patch} alt=""/>
                    <h3 style={{color:"white"}}>{rocket.mission_name}</h3>
                    <p style={{color:"white"}}>Rocket name: {rocket.rocket.rocket_name}</p>
                    <p style={{color:"white"}}> Launch year: {rocket.launch_year}</p>
                    <p style={{color:"white"}}> 
                        Upcoming: {rocket.upcoming.toString()}
                    </p>
                </div>
    
            )
        }
        </div>
       
    }
   
   {
        (selects=="2016-2020")&&
        <div className='mt-5 g-5 row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 '>
        {
            current20162020.map(rocket => 
    
                <div className='singleCardRocket ms-4'> 
                    <img className='w-25 mt-4' src={rocket.links.mission_patch} alt=""/>
                    <h3 style={{color:"white"}}>{rocket.mission_name}</h3>
                    <p style={{color:"white"}}>Rocket name: {rocket.rocket.rocket_name}</p>
                    <p style={{color:"white"}}> Launch year: {rocket.launch_year}</p>
                    <p style={{color:"white"}}> 
                        Upcoming: {rocket.upcoming.toString()}
                    </p>
                </div>
    
            )
        }
        </div>
    }
</div>
    {
        (searchText=="") ?
        <h1 className='mt-4' style={{color:"white"}}>There Having No searching Rockets</h1>
        :
        <h1 className='mt-4' style={{color:"white"}}>Your Searching Rockets</h1>
    }
    <div  style={{marginLeft:"150px"}}>
    
    {
        <div className='mt-5  g-5 row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 '>
        {
            
            (searchText) &&
            
            result.map(rocket => 
    
                <div className='singleCardRocket ms-4'> 
                    <img className='w-25 mt-4' src={rocket.links.mission_patch} alt=""/>
                    <h3 style={{color:"white"}}>{rocket.mission_name}</h3>
                    <p style={{color:"white"}}>Rocket name: {rocket.rocket.rocket_name}</p>
                    <p style={{color:"white"}}> Launch year: {rocket.launch_year}</p>
                    <p style={{color:"white"}}> 
                        Upcoming: {rocket.upcoming.toString()}
                    </p>
                </div>
    
            )
        }
        </div>
       
    }
    </div>
</div>
{/* Pagination button */}

<div className="blogs-pagination ">
        <div className="pagination-buttons">
            {pageIndex.map((index) => (
                <button id={index.toString()}
                    className={index === currentPage && "active-page-btn"}
                    onClick={() => handlePaginate(index)}
                >
                    {index}
                </button>
            ))}
        </div>
    </div>
</div>
  );
}

export default Rockets;