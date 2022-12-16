import React, { useEffect } from 'react';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {findUserByUsernameThunk, updateUserThunk} from "../services/userprofile-thunk.js";


const  UserProfilePublicPage = () => {
  const navigate = useNavigate()

  const userName='rakshikaraju'
  const {userprofile, loading} = useSelector((state) => state.userprofile);
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(findUserByUsernameThunk(userName))
    console.log(userName)
    }, [dispatch])
  

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
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
        }
      <div class="col-xs-9 col-sm-12">      
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4 class="panel-title"><strong>User profile</strong></h4>
          </div>
          <div className="panel-body">
            <div className="profile__avatar">
              <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="..."/>
            </div>
            <div className="profile__header">
              <h4>{userprofile.firstName} {userprofile.lastName}<small>{userprofile.occupation}</small></h4>
              <p className="text-muted">
                {userprofile.about}
              </p>
              <p>
                <a href="#">{userprofile.firstName}.com</a>
              </p>
            </div>
           
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
          <h4 className="panel-title"><strong>User information</strong></h4>
          </div>
          <div className="panel-body">
            <table className="table profile__table">
              <tbody>
                <tr>
                  <th><strong>Location</strong></th>
                  <td>{userprofile.location}</td>
                </tr>
                <tr>
                  <th><strong>Phone</strong></th>
                  <td>{userprofile.phone}</td>
                </tr>
                <tr>
                  <th><strong>Email</strong></th>
                  <td>{userprofile.email}</td>
                </tr>
                <tr>
                  <th><strong>Date of Birth</strong></th>
                  <td>{userprofile.dateOfBirth}</td>
                  {/* <button
                className="profile__contact-btn btn btn-lg btn-block btn-danger" data-toggle="modal" data-target="#profile__contact-form"
                onClick={() => dispatch(updateUserThunk({
                  ...userprofile,
                  likes: userprofile.likes + 1
                }))}>
                Like : {userprofile.likes}
            </button> */}
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

export default UserProfilePublicPage;