import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import './Contact.css';

class Contact extends Component {
  state = {
    name: '',
    company: '',
    email:'',
    phone:'',
    message:''
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
    axios.post('/api/user/send', {
      name: this.state.name,
      company: this.state.company,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    }).then(response => {
      if (response.data.success) {
        // redirect 
        console.log('sucsess');
        this.props.history.push('/contact')
      }
    }).catch(error => {
      console.log('Error');
      // show an error message
    })
    // make POST request to /api/user/login, data is email and password
  }

  render() {
    return (
        <div className="container">
        <h1 className="brand"><span> ( MP ) </span> Maker Place</h1>
        <div className="wrapper animated bounceInLeft">
          <div className="company-info">
            <h3>Maker Place</h3>
            <ul>
              <li><i class="fa fa-road"></i>1022 West Morena Blvd</li>
              <li><i class="fa fa-phone"></i> (555) 555-5555</li>
              <li><i class="fa fa-envelope"></i>info@makerplace.com</li>
            </ul>
          </div>
          <div className="contact">
            <h3>Email Us</h3>
           
            <form onSubmit={this.handleSubmit} >
              <p>
                <label>Name</label>
                <input type="text" name="name" onChange={this.handleInputChange} value={this.state.name} />
              </p>
              <p>
                <label>Company</label>
                <input type="text" name="company" onChange={this.handleInputChange} value={this.state.company} />
              </p>
              <p>
                <label>Email Address</label>
                <input type="email" name="email" onChange={this.handleInputChange} value={this.state.email} />
              </p>
              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" onChange={this.handleInputChange} value={this.state.phone} />
              </p>
              <p className="full">
                <label>Message</label>
                <textarea name="message" rows="5" onChange={this.handleInputChange} value={this.state.message} ></textarea>
              </p>
              <p className="full">
                <button type="submit">Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Contact);