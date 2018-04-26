import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Nav.css';
import sanitizeHtml from 'sanitize-html'; 
import Logout from "../Logout/Logout";
import { Button } from 'rmwc/Button';

const Nav = props => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">

     <Link className="navbar-brand" to="/"><img src={process.env.PUBLIC_URL + '/assets/images/MakerPlace_VersionB.svg'} alt="MakerPlace"/></Link>

     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>

     <div className="collapse navbar-collapse" id="navbarColor01">

       <ul className="navbar-nav mr-auto">

         <li className="nav-item" data-toggle="collapse"  data-target="#navbarColor01">
           <Link className="nav-link" to="/About">About Us</Link>
         </li>
         <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Classes
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {props.categories.map(category => {
              
                let clean_cat = sanitizeHtml(category, { 
                allowedTags: ['p', 'a'], 
                allowedAttributes: { 
                  a: ['href', 'target'] 
                } 
              }); 
              String.prototype.replaceAll = function(search, replacement) { 
                  var target = this; 
                  return target.replace(new RegExp(search, 'g'), replacement); 
              }; 
 
              let slug = clean_cat.replaceAll(' ', '_'); 
              slug = slug.replaceAll('&amp;', '&');
             
              return (<Link className="dropdown-link"key={clean_cat} to={"/lessons/" + slug} dangerouslySetInnerHTML={{__html: clean_cat}}></Link>)

              
            })
        }
        </div>
      </li>
         <li className="nav-item">
           <Link className="nav-link" to="/memberships">Memberships</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/dashboard">Dashboard</Link>
         </li>

       </ul>
       {/* <form className="form-inline my-2 my-lg-0"> */}
       
      {
        props.loggedin 
        ? (<Logout checkLoggedIn={props.checkLoggedIn}/>)
        : (<Link to="/login">
             <Button>Log In</Button>
           </Link>)
        
        }
       {/* </form> */}
     </div>
  </nav>
);

export default Nav;
