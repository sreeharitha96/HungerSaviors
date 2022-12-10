import React, { useEffect } from 'react';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {findUserByIdThunk, updateUserThunk} from "../services/userprofile-thunk.js";


const  UserProfilePage = () => {
  const navigate = useNavigate()

  const {userprofile, loading} = useSelector((state) => state.userprofile);
  const profile= useSelector((state) => state.profile);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findUserByIdThunk())
    }, [])
  console.log(userprofile);


  const handleUpdateUserProfileBtn = () => {
    
    navigate('/updateUser')
}
// var myStringArray = userprofile;
// var user1;
// var user2;
// var arrayLength = myStringArray.length;
// for (var i = 0; i < arrayLength; i++) {
//     user1= myStringArray[0];
//     user2= myStringArray[1];
//     console.log("user 1 is ",user1);
//     console.log("user 2 is", user2);
//     //Do something
// }
console.log(userprofile.firstName);
 return (   
     <>
     <head>
     <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<div class="container">
<div class="row">
      <div class="col-xs-12 col-sm-9">      
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4 class="panel-title">User profile</h4>
          </div>
          <div class="panel-body">
            <div class="profile__avatar">
              <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="..."/>
            </div>
            <div class="profile__header">
              <h4>{userprofile.firstName} {userprofile.lastName}<small>{userprofile.occupation}</small></h4>
              <p class="text-muted">
                {userprofile.about}
              </p>
              <p>
                <a href="#">{userprofile.website}</a>
              </p>
            </div>
            <div class="profile__header">
            &nbsp;&nbsp; <span><i class="bi bi-chat">&nbsp;{userprofile.followers}   </i> &nbsp;Followers</span> &nbsp;&nbsp;&nbsp;&nbsp;
                <span><i class="bi bi-repeat">&nbsp;{userprofile.following}  </i>&nbsp; Following </span> &nbsp;&nbsp;&nbsp;&nbsp;
                <span><i class="bi bi-hand-thumbs-up">&nbsp;{userprofile.likes} </i>&nbsp; Likes</span>

            </div>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">
          <h4 class="panel-title">User information</h4>
          </div>
          <div class="panel-body">
            <table class="table profile__table">
              <tbody>
                <tr>
                  <th><strong>Location</strong></th>
                  <td>{userprofile.location}</td>
                </tr>
                <tr>
                  <th><strong>Company name</strong></th>
                  <td>{userprofile.companyname}</td>
                </tr>
                <tr>
                  <th><strong>Position</strong></th>
                  <td>{userprofile.position}</td>
                </tr>
                <tr>
                  <th><strong>Date of Birth</strong></th>
                  <td>{userprofile.dateofbirth}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">
          <h4 class="panel-title">Orders History</h4>
          </div>
          <div class="panel-body">
            <table class="table profile__table">
              <tbody>
                <tr>
                  <th><strong>Comments</strong></th>
                  <td>58584</td>
                </tr>
                <tr>
                  <th><strong>Member since</strong></th>
                  <td>{userprofile.dateofjoining}</td>
                </tr>
                <tr>
                  <th><strong><a href="#">Previous Food Orders</a></strong></th>
                  <td>{userprofile.previousorders}</td> 
                </tr>
                <tr>
                  <th><strong><a href="#">Favorites</a></strong></th>
                  <td>{userprofile.favorites}</td> 
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">
          <h4 class="panel-title">Latest posts</h4>
          </div>
          <div class="panel-body">
            <div class="profile__comments">
              <div class="profile-comments__item">
                <div class="profile-comments__controls">
                  <a href="#"><i class="bi bi-share-square-o"></i></a>
                  <a href="#"><i class="bi bi-edit"></i></a>
                  <a href="#"><i class="bi bi-trash-o"></i></a>
                </div>
                <div class="profile-comments__avatar">
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..."/>
                </div>
                <div class="profile-comments__body">
                  <h5 class="profile-comments__sender">
                    Richard Roe <small>2 hours ago</small>
                  </h5>
                  <div class="profile-comments__content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, corporis. Voluptatibus odio perspiciatis non quisquam provident, quasi eaque officia.
                  </div>
                </div>
              </div>
              <div class="profile-comments__item">
                <div class="profile-comments__controls">
                  <a href="#"><i class="bi bi-share-square-o"></i></a>
                  <a href="#"><i class="bi bi-edit"></i></a>
                  <a href="#"><i class="bi bi-trash-o"></i></a>
                </div>
                <div class="profile-comments__avatar">
                  <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..."/>
                </div>
                <div class="profile-comments__body">
                  <h5 class="profile-comments__sender">
                    Richard Roe <small>5 hours ago</small>
                  </h5>
                  <div class="profile-comments__content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero itaque dolor laboriosam dolores magnam mollitia, voluptatibus inventore accusamus illo.
                  </div>
                </div>
              </div>
              <div class="profile-comments__item">
                <div class="profile-comments__controls">
                  <a href="#"><i class="bi bi-share-square-o"></i></a>
                  <a href="#"><i class="bi bi-edit"></i></a>
                  <a href="#"><i class="bi bi-trash-o"></i></a>
                </div>
                <div class="profile-comments__avatar">
                  <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..."/>
                </div>
                <div class="profile-comments__body">
                  <h5 class="profile-comments__sender">
                    Richard Roe <small>1 day ago</small>
                  </h5>
                  <div class="profile-comments__content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, esse, magni aliquam quisquam modi delectus veritatis est ut culpa minus repellendus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-xs-12 col-sm-3">
        <p>
          <a href="#" class="profile__contact-btn btn btn-lg btn-block btn-info" data-toggle="modal" data-target="#profile__contact-form">
            Follow
          </a>
          <a href="#" class="profile__contact-btn btn btn-lg btn-block btn-danger" data-toggle="modal" data-target="#profile__contact-form">
            Like
          </a>

          <button
                className="profile__contact-btn btn btn-lg btn-block btn-warning" data-toggle="modal" data-target="#profile__contact-form"
                onClick={() => dispatch(updateUserThunk({
                  ...userprofile,
                  likes: userprofile.likes + 1
                }))}>
                Like : {userprofile.likes}
            </button>


            {/* <span>
     Likes: {tuit.likes}
     <i onClick={() => dispatch(updateTuitThunk({
       ...tuit,
       likes: tuit.likes + 1
     }))} className="bi bi-heart-fill me-2 text-danger"></i>
   </span> */}


          <button
                className="profile__contact-btn btn btn-lg btn-block btn-warning" data-toggle="modal" data-target="#profile__contact-form"
                onClick={handleUpdateUserProfileBtn}>
                Edit Profile
            </button>
        </p>

        <hr class="profile__contact-hr"/>
        
        <div class="profile__contact-info">
          <div class="profile__contact-info-item">
            <div class="profile__contact-info-icon">
            <i class="bi bi-telephone-fill"></i>
            </div>
            <div class="profile__contact-info-body">
              <h5 class="profile__contact-info-heading">Work number</h5>
              (000)987-65-43
            </div>
          </div>
          <div class="profile__contact-info-item">
            <div class="profile__contact-info-icon">
            <i class="bi bi-telephone-fill"></i>
            </div>
            <div class="profile__contact-info-body">
              <h5 class="profile__contact-info-heading">Mobile number</h5>
              (000)987-65-43
            </div>
          </div>
          <div class="profile__contact-info-item">
            <div class="profile__contact-info-icon">
            <i class="bi bi-envelope"></i>
            </div>
            <div class="profile__contact-info-body">
              <h5 class="profile__contact-info-heading">E-mail address</h5>
              <a href="mailto:admin@domain.com">admin@domain.com</a>
            </div>
          </div>
          <div class="profile__contact-info-item">
            <div class="profile__contact-info-icon">
            <i class="bi bi-building"></i>
            </div>
            <div class="profile__contact-info-body">
              <h5 class="profile__contact-info-heading">Work address</h5>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>
        </div>

      </div>
    </div>
</div>
     </>
 )
}

export default UserProfilePage;