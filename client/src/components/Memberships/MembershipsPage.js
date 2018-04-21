import React, {Component} from 'react';
import './Memberships.css';
import API  from '../../utils/API.js';

class Memberships extends Component {
  state = {
    memberships: []
  }

  componentDidMount() {
    this.getMemberships();
  }

  getMemberships = () => {
    API.getMemberships()
    .then(response => {
      let memberships = response.data;
      this.setState({memberships: memberships})
      console.log(memberships);
    })
    .catch(err => console.log(err));
  }

  membershipPayment = () => {
    window.location.href='http://makerplace.com/page-1820253' 
  };

  render() {

    let memberships = this.state.memberships;

    return(
      <div className="membership-page">
        <div className="membership-image">
          <div className="membership-text">
            <div className="membership-header">
              <div className="membership-title">
                Memberships
              </div>
              <div className="membership-description">
                Corporate and family memberships are available in person at MakerPlace.
         Military, student, and senior citizen (55+) discounts available with a valid ID for 
         the "Month to Month" membership level only.
              </div>
            </div>
            {/* add wrapper for grouping cards together */}
            <div className="cards">
              {memberships.map(membership => {
                return (
                  <div className="card">
                    <div className="card-body">
                      <h1 className="card-title">{membership.membership_type}</h1>
                      <h2 className="card-annual-cost">{membership.annual_cost}</h2>
                      <h3 className="card-monthly-cost">{membership.monthly_cost}</h3>
                      <p className="card-discount">{membership.discount}</p>
                      <p className="card-text">{membership.description}</p>
<<<<<<< HEAD
                      <a href="#" className="btn btn-primary">Start Making...</a>
=======
                      <button type="button" onClick={this.membershipPayment} className="btn btn-primary">Start Making...</button>
>>>>>>> ac3fdc6a5a62eec02d89a0a5b411fbbc85be7b21
                    </div>
                  </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Memberships;