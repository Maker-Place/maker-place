import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import ToolList from '../ToolList/ToolList';

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

//   render() {
//     return (
//     <div className="contact-page">
//       <div className="jumbotron">
//         <h3 className="display-4">How the MakerPlace Works</h3>
//         <p className="lead">The Maker Place is a shared woodshop offering Memberships and classes.
//               We offer a variety of classes/workshops covering many techniques and intrests.
//               We also offer month to month or year long Memberships.
//               make our shop your daily studio. </p>
//         <hr className="my-4" />
//         <p>Not sure how to start first? Give us a call and we will walk you through it!</p>
//       </div>
//         <div className="tools-container">
//           <h2><b>Our Tools</b></h2>
//           <ToolList/>
//         </div>
//           <div className="container">
//             <form className="form-container" onSubmit={this.handleSubmit}>
//               <fieldset>
//                 <legend>Email Us</legend>
//                 <div className="form-group row">
//                   <label for="staticName" className="col-sm-3 col-form-label">Name</label>
//                   <div className="col-sm-10">
//                     <input type="text" className="form-control" id="staticName" value="First and Last Name" name="name" onChange={this.handleInputChange} value={this.state.name} />
//                   </div>
//                 </div>
//                 <div className="form-group row">
//                   <label for="staticCompanyName" className="col-sm-3 col-form-label">Company</label>
//                   <div className="col-sm-10">
//                     <input type="text" className="form-control" id="staticCompanyName" value="Company or Organization Name" name="company" onChange={this.handleInputChange} value={this.state.company} />
//                   </div>
//                 </div>
//                 <div className="form-group row">
//                   <label for="staticEmail" className="col-sm-3 col-form-label">Email</label>
//                   <div className="col-sm-10">
//                     <input type="text" className="form-control" id="staticEmail" value="email@example.com" name="email" onChange={this.handleInputChange} value={this.state.email} />
//                   </div>
//                 </div>
//                 <div className="form-group row">
//                   <label for="staticPhone" className="col-sm-3 col-form-label">Phone</label>
//                   <div className="col-sm-10">
//                     <input type="text" className="form-control" id="staticPhone" value="555-555-5555" name="phone" onChange={this.handleInputChange} value={this.state.phone} />
//                   </div>
//                 </div>
//                 <div class="form-group">
//                   <label for="exampleTextarea">Message</label>
//                   <textarea class="form-control" id="exampleTextarea" rows="3" name="message" rows="5" onChange={this.handleInputChange} value={this.state.message}></textarea>
//                 </div>
//                 <button type="submit" class="btn btn-primary">Submit</button>
//               </fieldset>
//             </form>
//           </div>
//       </div>
      
//     )
//   }
// }

render() {
    return (
      <div className="contact-body">
        <div className="jumbotron">
          <h3 className="display-4">How the MakerPlace Works</h3>
          <p className="lead">The Maker Place is a shared woodshop offering Memberships and classes.
              We offer a variety of classes/workshops covering many techniques and intrests.
              We also offer month to month or year long Memberships.
              make our shop your daily studio. </p>
          <hr className="my-4" />
          <p>Not sure how to start first? Give us a call and we will walk you through it!</p>
        </div>
        <div className="container">
          <div className="my-5">
            <h2><strong>Our Tools</strong></h2>
            <ToolList/>
          </div>
        </div>

        <div className="container">
        <div className="wrapper animated bounceInLeft mb-4">
          <div className="company-info">
            <h3>Maker Place</h3>
            <ul>
              <li><i class="fa fa-road"></i>1022 West Morena Blvd</li>
              <li><i class="fa fa-phone"></i> (555) 555-5555</li>
              <li><i class="fa fa-envelope"></i>info@makerplace.com</li>
            </ul>
          </div>
          <div className="contact ">
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
      </div>// end contact body
    )
  }
}

export default withRouter(Contact);