import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Nav.css';
import Logout from "../Logout/Logout";


const Nav = props => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">

     <a className="navbar-brand" href="/"><img src={process.env.PUBLIC_URL + '/assets/images/MakerPlace_VersionB.svg'} alt="MakerPlace"/></a>

     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>

     <div className="collapse navbar-collapse" id="navbarColor01">
       <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
         <li className="nav-item">
           <Link className="nav-link" to="/About">About Us</Link>
         </li>
         <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Classes
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {props.categories.map(category => (
              
                <Link className="dropdown-link"key={category} to={"/lessons/" + category}>{category}</Link>
              
            ))}
        </div>
      </li>
         <li className="nav-item">
           <Link className="nav-link" to="/memberships">Memberships</Link>
         </li>

       </ul>
       {/* <form className="form-inline my-2 my-lg-0"> */}
       <Link to="/login">
       <button className="btn btn-secondary my-2 my-sm-0">Login</button>
     </Link>
     <Logout/>
       {/* </form> */}
     </div>
  </nav>
);

export default Nav;
