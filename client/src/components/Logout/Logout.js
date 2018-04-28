import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';
import { Button } from 'rmwc/Button';

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

         <Button theme="text-hint-on-background" onClick={this.handleLogout}> Log out </Button>

    )
  }
}

export default withRouter(Logout);