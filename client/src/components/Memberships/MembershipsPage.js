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
  };


  render() {

    let memberships = this.state.memberships;

    return(
      <div className="membership-page">
        <div className="membership-image">
          <div className="membership-text">
          
            <br></br>
            <p>Corporate and family memberships are available in person at MakerPlace.
         Military, student, and senior citizen (55+) discounts available with a valid ID for 
         the "Month to Month" membership level only.
            </p>
            {memberships.map(membership => {
              return (
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h1 className="card-title">{membership.membership_type}</h1>
                    <h2 className="card-annual-cost">{membership.annual_cost}</h2>
                    <h3 className="card-monthly-cost">{membership.monthly_cost}</h3>
                    <p className="card-discount">{membership.discount}</p>
                    <p className="card-text">{membership.description}</p>
                    <a href="#" className="btn btn-primary">Start Making...</a>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
};

export default Memberships;