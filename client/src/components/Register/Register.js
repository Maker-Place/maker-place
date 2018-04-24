import React from 'react';


import './Register.css';


const Register = () => (
<div className="container mt-5">
    <div className="col-md-6 mx-auto">
      <div className="card card-body">
        <h3 className="text-center">Account Register</h3>
        <form action="api/register" method="post" >
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" name="name" required />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" name="email" required />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" name="password" required />
          </div>
          <div className="form-group">
            <label for="email">Confirm Password</label>
            <input type="password" class="form-control" name="rpassword" required />
          </div>
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
</div>

);

export default Register;