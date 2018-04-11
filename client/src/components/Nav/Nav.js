import React from "react";

const Nav = () => (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   <a className="navbar-brand" href="#"><img src="../../assets/images/MakerPlace_Logo.jpg" alt="MakerPlace"></a>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>

   <div className="collapse navbar-collapse" id="navbarColor01">
     <ul className="navbar-nav mr-auto">
       <li className="nav-item active">
         <a className="nav-link" href="#">About Us <span class="sr-only">(current)</span></a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Classes</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Memberships</a>
       </li>
     </ul>
     <form className="form-inline my-2 my-lg-0">
       <button className="btn btn-secondary my-2 my-sm-0" type="submit">Login</button>
     </form>
   </div>
</nav>
);

export default Nav;
