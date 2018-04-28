import React from 'react';
import './Home.css';

const HomePage = () => (
    <div className="homepage">
        <div className="homepage-image">
          <div className="homepage-text">

            <img src={process.env.PUBLIC_URL + '/assets/images/MakerPlace_VersionB.svg'} alt=""/>
          </div>
        </div>
    </div>
);

export default HomePage;

