import React, { useEffect } from 'react';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {findDonorByUsernameThunk, updateDonorThunk} from "../services/donor-thunks";
import userprofileReducer from '../reducers/userprofile-reducer';
import { useLocation } from 'react-router';


const  DonorProfilePublicPage = () => {
  const navigate = useNavigate()

  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const userName = paths[2];
 // const userName="starmarket"
  const {donor, loading2} = useSelector((state) => state.donorsData);
  console.log(useSelector((state) => state.donor))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findDonorByUsernameThunk(userName))
    }, [dispatch])
    
  console.log(donor);

 return (   
     <>
     <head>
     <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<div class="container">

           

<div class="row">
        {
                loading2 &&
                <li className="list-group-item">
                    Loading...
                </li>
        }
      <div class="col-xs-18 col-sm-10">      
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4 class="panel-title"><strong>Donor profile</strong></h4>
          </div>
          <div class="panel-body">
            <div class="profile__avatar">
              <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="..."/>
            </div>
            <div class="profile__header">
              <h4>{donor.name} </h4>
              <h4><small>{donor.description}</small></h4>
              <p class="text-muted">
                {donor.about}
              </p>
              <p>
                <a href="#">{donor.name}.com</a>
              </p>
              <p>
              <span ><i class="bi bi-star-fill"/>&nbsp;
                My Rating : {donor.rating}
                </span> &nbsp;&nbsp;&nbsp;&nbsp;
                <span >
    
     <i onClick={() => dispatch(updateDonorThunk({
       ...donor,
       likes: donor.likes + 1
     }))} className="bi bi-heart-fill me-2 text-danger"></i>
   </span>
   Likes: {donor.likes}

              </p>
              {/* <button
                className="profile__contact-btn btn btn-lg btn-block btn-warning" data-toggle="modal" data-target="#profile__contact-form"
                onClick={() => dispatch(updateDonorThunk({
                  ...donor,
                  likes: donor.likes + 1
                }))}>
                Like : {donor.likes}
            </button> */}
            </div>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">
          <h4 class="panel-title"><strong>Donor Information </strong></h4>
          </div>
          <div class="panel-body">
            <table class="table profile__table">
              <tbody>
                <tr>
                  <th><strong>Location</strong></th>
                  <td>{donor.location}</td>
                </tr>
                <tr>
                  <th><strong>Phone</strong></th>
                  <td>{donor.phone}</td>
                </tr>
                <tr>
                  <th><strong>Email</strong></th>
                  <td>{donor.email}</td>
                </tr>
                <tr>
                  <th><strong>Store Timings</strong></th>
                  <td>{donor.storeTimings}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        

       

      </div>
      
    </div>
</div>
     </>
 )
}

export default DonorProfilePublicPage;