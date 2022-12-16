import React, { useEffect } from 'react';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {findUserByUsernameThunk, updateUserThunk} from "../services/userprofile-thunk.js";


const  UserProfilePage = () => {
  const navigate = useNavigate()

  const {currentUser}= useSelector((state)=> state.users)
  const {userprofile, loading} = useSelector((state) => state.userprofile);
  
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(findUserByUsernameThunk(currentUser.userName))
    }, [dispatch])  
  
 const handleOrders = () =>{
    navigate('/order')
 }

  const handleUpdateUserProfileBtn = () => {
    navigate('/updateUser')
}
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
      <div class="col-xs-12 col-sm-11">      
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4 class="panel-title"><strong>User profile</strong></h4>
          </div>
          <div className="panel-body">
            <div className="profile__avatar">
              <img src={userprofile.profilePhoto} alt="..."/>
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
            {/* <div className="profile__header">
            &nbsp;&nbsp; <span><i className="bi bi-chat">&nbsp;{userprofile.followers}   </i> &nbsp;Followers</span> &nbsp;&nbsp;&nbsp;&nbsp;
                <span><i className="bi bi-repeat">&nbsp;{userprofile.following}  </i>&nbsp; Following </span> &nbsp;&nbsp;&nbsp;&nbsp;
                <span><i className="bi bi-hand-thumbs-up">&nbsp;{userprofile.likes} </i>&nbsp; Likes</span>
            </div> */}

<div class="profile__header">
            <table class="table profile__table">
              <tbody>
                <tr>
            
                  <th>
                    <button
                className="profile__contact-btn btn btn-block btn-info float-end" data-toggle="modal" data-target="#profile__contact-form"
                onClick={handleUpdateUserProfileBtn}>
              <span><i class="bi bi-person-square"></i></span>  Edit Profile
            </button>
            </th>
            <th>
            <button
                className="profile__contact-btn btn btn-block btn-warning" data-toggle="modal" data-target="#profile__contact-form"
                onClick={handleOrders}>
                  <span><i class="bi bi-list"></i></span>
                Previous Food Orders
            </button>
            </th>
           
                </tr>
                </tbody>
                </table>
    
            
            {/* &nbsp;&nbsp; <span><i class="bi bi-chat">&nbsp;{donor.followers}   </i> &nbsp;Followers</span> &nbsp;&nbsp;&nbsp;&nbsp;
                <span><i class="bi bi-repeat">&nbsp;{donor.following}  </i>&nbsp; Following </span> &nbsp;&nbsp;&nbsp;&nbsp;
                <span><i class="bi bi-hand-thumbs-up">&nbsp;{donor.likes} </i>&nbsp; Likes</span> */}

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

export default UserProfilePage;