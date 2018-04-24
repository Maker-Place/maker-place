import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';

// import './Login.css';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    rpassword: '',
  }

  handleInputChange = event => {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // event.stopPropagation();
    axios.post('/api/user/register', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      rpassword: this.state.rpassword
    }).then(response => {
      //if the login returns true, redirect
      // console.log(response.data);
      if (response.data.success) {
        // redirect 
         this.props.history.push('/login');
      }
    }).catch(error => {
      console.log(error.response.status + " error");
      console.log(error.response.data[0]);
      // show an error message
    })
    // make POST request to /api/user/login, data is email and password
  }

  render() {
    return (
      <div className="container mt-5">
          <div className="col-md-6 mx-auto">
            <div className="card card-body">
              <h3 className="text-center">Account Register</h3>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" name="name" onChange={this.handleInputChange} value={this.state.name} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" name="email" onChange={this.handleInputChange} value={this.state.email} required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" onChange={this.handleInputChange} value={this.state.password} required />
                </div>
                <div className="form-group">
                  <label htmlFor="rpassword">Confirm Password</label>
                  <input type="password" className="form-control" name="rpassword" onChange={this.handleInputChange} value={this.state.rpassword} required />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </form>
            </div>
          </div>
      </div>

    )
  }
}

export default withRouter(Register);