import React from 'react';
import './Memberships.css';

const Memberships = () => (
    <div className="membership-page">
        <div className="membership-image">
          <div className="membership-text">
            <h1>Memberships</h1>
            <p>Corporate and family memberships are available in person at MakerPlace.
			   Military, student, and senior citizen (55+) discounts available with a valid ID for 
			   the "Month to Month" membership level only.
		      	</p>
          <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">Membership Title</h5>
              <p className="card-text">Details about membership...</p>
              <a href="#" className="btn btn-primary">Start Making...</a>
            </div>
          </div>
        </div>
      </div>
    </div>

);

export default Memberships;