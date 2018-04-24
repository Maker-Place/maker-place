import React, {Component} from 'react';
import './Register.css';

class Register extends Component {

  render() {
    return(
      <div className="container mt-5">
          <div className="col-md-6 mx-auto">
            <div className="card card-body">
              <h3 className="text-center">Account Register</h3>
              <form action="/api/user/register" method="post" >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Confirm Password</label>
                  <input type="password" className="form-control" name="rpassword" required />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </form>
            </div>
          </div>
      </div>
    )
  }
}

export default Register;