import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';

// import './Login.css';

class Logout extends Component {

  handleLogout = event => {
    event.preventDefault();
    console.log("logging out");
    axios.get('/api/user/logout').then(response => {
      console.log(response);
      console.log(this.props.history);
      if (response.status === 200) {
         this.props.history.push('/register');
        
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