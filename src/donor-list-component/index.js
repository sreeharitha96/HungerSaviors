import React, { useEffect } from 'react';
import NavBar from '../navbar-component';
import DonorItem from './donor-item';
import { useDispatch, useSelector } from 'react-redux';
import { findDonorThunk } from '../services/donor-thunks';
import { useLocation } from 'react-router-dom';

const DonorList = ({ status, updateUser, userState }) => {
  const { donors, loading } = useSelector((state) => state.donorsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findDonorThunk(status));
  }, [dispatch]);

  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const donorID = paths[1];

  useEffect(() => {
    if (donorID === 'home') {
      updateUser(true);
    }
  }, []);

  const donorArray = useSelector((state) => state.donorsData);
  return (
    <div style={{ backgroundColor: '#FAFBFD' }}>
      <h2 className="pt-5 pb-5" style={{ fontWeight: 700 }}>
        Browse All Available Restaurants
      </h2>
      <div className="container">
        <div className="row">
          {loading && <div>Loading...</div>}
          {
            // donors.map(donor => <div className="col-12 col-md-6 col-xl-4"> <DonorItem key={donor.userName} donor={donor}/></div>)
            donors.map((donor) => (
              <div key={donor._id} className="col-12 col-md-6 col-xl-4">
                {' '}
                <DonorItem key={donor._id} donor={donor} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
export default DonorList;
