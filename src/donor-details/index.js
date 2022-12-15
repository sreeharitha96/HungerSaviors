import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './index.css';
import CustomerViewOfDonor from './customer-view';
import DonorViewOfDonor from './donor-view';
import { findDonorByUsernameThunk } from '../services/donor-thunks';

//solved by manual resolution
const DonorDetails = ({ updateUser, userState }) => {
  const currentUser = useSelector((state) => state.users.currentUser);

  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const donorID = paths[2];
  const test = paths[1];

  const { donor, loading2 } = useSelector((state) => state.donorsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findDonorByUsernameThunk(donorID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  console.log(donor, 'this is donor');
  console.log(donor.userName, 'this is donor username');
  console.log(currentUser.userName, 'this is current user username');

  useEffect(() => {
    console.log(donorID, 'donor');
    if (test === 'donor') {
      updateUser(true);
    }
  }, []);

  // solved
  return (
    <>
      {loading2 ? (
        <li className="list-group-item">Loading...</li>
      ) :  donor.userName === currentUser.userName ? (
          <DonorViewOfDonor key={donor._id} donor={donor}/>
      ): <CustomerViewOfDonor key={donor._id} donor={donor}/>
      }
    </>
  );
};
export default DonorDetails;
