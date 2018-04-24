import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';

// import './Login.css';

class Login extends Component {
  state = {
    email: '',
    password: ''
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
      if (response.data.success) {
        this.props.history.push('/');
        console.log("you're logged in");
      }
    }).catch(error => {
      console.log(error.response.status + " error");
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
              <button type="submit" className="btn btn-primary">LogIn</button>
              <br></br>
              {/* <Link to="/register">
                <button className="btn btn-secondary">Register</button>
              </Link> */}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);