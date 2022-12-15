import './index.css';
import React, { useEffect } from 'react';
import NavBar from '../navbar-component/index.js';
import LandingDonate from './LandingDonate.js';
import LandingFind from './LandingFind.js';
import { Link } from 'react-router-dom';
import DonorList from '../donor-list-component';
import { useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';

function HomePage({ updateUser, userState }) {
  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const donorID = paths[1];

  useEffect(() => {
    if (donorID === '') {
      updateUser(false);
    }
  }, []);

  return (
    <>
      {/* <div className="bg-image ws-background">
        <div className="mask ws-overlap align-self-center">
          <div className="d-flex text-black flex-column justify-content-center align-items-center h-100">
            <h1 style={{ fontSize: '50px', fontWeight: 700 }}>
              Changing Lives
            </h1>
            <p style={{ width: '50%', fontSize: '20px' }}>
              Web Squads are changing the world by building this shitty app.
            </p>
          </div>
        </div>
      </div> */}

      <div className="p-5" style={{ backgroundColor: '#FAFBFD' }}>
        <div className="row">
          <div className="p-5 ">
            {/*<FontAwesomeIcon icon="fa-solid fa-handshake-simple" />*/}
            <h3 className="text-bold" style={{ fontWeight: 700 }}>
              How It Works
            </h3>
            <p style={{ fontSize: '16px' }}>
              Maintain a list of donors and their contact information.{' '}
            </p>
          </div>
          <div className="col-6">
            <div className="ws-landing-card d-inline-block">
              <LandingDonate />
            </div>
          </div>
          <div className="col-6">
            <div className="ws-landing-card d-inline-block">
              <LandingFind />
            </div>
          </div>
        </div>
      </div>
      <DonorList status={'Approved'} />
    </>
  );
}
export default HomePage;
