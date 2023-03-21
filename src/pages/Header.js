import React from "react";
import NavBrand from "../components/images/Woxsen.png"
import {NavLink, useNavigate, Link} from "react-router-dom"
import "../Css files/Header.css"
class Header extends React.Component {
    render(){
        return (
            <div className="Header">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark " bg-blackdata-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={NavBrand} width="25%"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
       
          <ul className="nav nav-pills">
          <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? " bg-light active text-dark nav-link" : " nav-link text-light")} to="/Admin" >Admin</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? " bg-light active text-dark nav-link" : " nav-link text-light")} to="/" >Home</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? " bg-light active text-dark nav-link" : "nav-link text-light")} to="/StudentCouncilpage" >Clubs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? " bg-light active text-dark nav-link" : "nav-link text-light")} to="/COE" >COE</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? " bg-light active text-dark nav-link" : "nav-link text-light")} to="/Login" >Log-In</NavLink>
            </li>
            
          </ul>
          </div>
        </nav>
        </div>
            );
        
        }
    }
export default Header
