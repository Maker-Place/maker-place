import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';

// import './Login.css';

class Logout extends Component {

  handleLogout = event => {
    event.preventDefault();
    axios.get('/api/user/logout').then(response => {
      if (response.status === 200) {
          // checks in app.js and sets logged in state
          this.props.checkLoggedIn()
          this.props.history.push('/');
      }
    }).catch(error => {
      console.log(error);
      // show an error message
    })
  }

  render() {
    return (

         <button onClick={this.handleLogout}> Log out </button>

    )
  }
}

export default withRouter(Logout);