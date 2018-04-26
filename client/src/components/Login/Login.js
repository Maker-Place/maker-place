import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import axios from 'axios';

// import './Login.css';

class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
         email: '',
          password: ''
      };
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
    axios.post('/api/user/login', {
      email: this.state.email,
      password: this.state.password
    }).then(response => {
      //if the login returns true, redirect      
      if (response.data.status = 200) {
        //check if logged in
        this.props.checkLoggedIn();
        this.props.history.push('/dashboard');
      }
    }).catch(error => {
      console.log(error);
      console.log('Not logged in');
      // show an error message
    })
    // make POST request to /api/user/login, data is email and password
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="col-md-6 mx-auto">
          <div className="card card-body">
            <h3 className="text-center">Account Login</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name="email" onChange={this.handleInputChange} value={this.state.email} required autoFocus />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" onChange={this.handleInputChange} value={this.state.password} required />
              </div>
              <div className="row">
                <div className="col">
                  <button type="submit" className="btn btn-primary">LogIn</button>
                </div>
                <div className="col mr-auto text-right">
                  <Link to="/register">
                    <button className="btn btn-secondary">Register</button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);