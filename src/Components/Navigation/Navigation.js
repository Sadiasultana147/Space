import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Vector from "../../Assests/Vector.png"
import './Navigation.css';

function Navigation() {
    const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
  return (
    <div  className='NavColor navContainer  me-5'>
       <nav className="navbar navbar-expand-lg navbar-light navbar-bg  ">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <img src={Vector} className="navImage" alt="" />
                    <span  style={{ color: "white" }} className="ms-3 ">Space</span>
                </NavLink>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarCollapse">
                     <div className={click ? "navbar-nav active ms-auto" : "navbar-nav ms-auto"}>
                        <NavLink aria-current="page" exact to="/"  activeClassName="active" className="  nav-item nav-link  navbutton " style={{ color: "white"}}><span className='navtext'>Home</span></NavLink>
                        <NavLink to="/about" activeClassName="active" className=" nav-item nav-link  navbutton " style={{ color: "white"}}><span className='navtext'>About us</span></NavLink>
                        <NavLink to="/story" activeClassName="active" className=" nav-item nav-link  navbutton " style={{ color: "white"}}><span className='navtext'>Story</span></NavLink>
                        <NavLink to="/blog" activeClassName="active" className=" nav-item nav-link  navbutton " style={{ color: "white"}}><span className='navtext'>Blogs</span></NavLink>
                        <NavLink to="/contact" activeClassName="active" className=" nav-item nav-link  navbutton contact " style={{ color: "white"}}><span className='navtext'>Contact us</span></NavLink>
                    </div> 
                </div>
            </div>
        </nav>

        
    </div>
  );
}

export default Navigation;