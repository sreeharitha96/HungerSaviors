import React, {useState, useEffect} from "react";
import $ from 'jquery';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, Navigate} from "react-router";
import { updateUserThunk, findUserByUsernameThunk } from "../services/userprofile-thunk.js";
import { Link } from 'react-router-dom';
import ProfilePage from "../profile-component/index.js";


function EditUserProfile (){
    $(document).ready(function() {

        var readURL = function(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
    
                reader.onload = function (e) {
                    $('.avatar').attr('src', e.target.result);
                }
        
                reader.readAsDataURL(input.files[0]);
            }
        }
        
    
        $(".file-upload").on('change', function(){
            readURL(this);
        });
    });

const {currentUser}= useSelector((state)=> state.users)
const {userprofile, loading} = useSelector((state) => state.userprofile);
const dispatch = useDispatch()
useEffect(() => {
  dispatch(findUserByUsernameThunk(currentUser.userName))
  }, [dispatch])

const [profileData, setProfileData] = useState(userprofile);

const navigate = useNavigate();


 const saveClickHandler = () => {
       
      dispatch(updateUserThunk(profileData));   
      navigate("/profile");
     

 }
    return(
        <>
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
        <div className="container bootstrap snippet">
    <div className="row">
    {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
        }
  		<div className="col-sm-3"><h1>Hi! {userprofile.firstName}</h1></div>
    </div>
    <div className="row">
  		<div className="col-sm-3">
              

      <div className="text-center">
        <img src="./images/profilePhoto.png" className="avatar img-circle img-thumbnail" alt="avatar"/>
        <h6>Upload a different photo...</h6>
        <input type="file" className="text-center center-block file-upload"/>
      </div><hr/><br/>

               
          {/* <div className="panel panel-default">
            <div className="panel-heading"><strong>Activity</strong>  <i className="bi bi-speedometer2"></i></div>
            <div className="panel-body">
            <ul className="list-group">
            <li className="list-group-item text-right"><span className="pull-left"><strong>Likes </strong> </span> {userprofile.likes}</li>
            <li className="list-group-item text-right"><span className="pull-left"><strong>Followers</strong></span> {userprofile.followers}</li>
            </ul> 
            </div>
          </div>        */}
        </div>

    	<div className="col-sm-9">
             
          <div className="tab-content">
            <div className="tab-pane active" id="home">
                <hr/>
                  <form className="form" action="##" method="post" id="registrationForm">
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="first_name"><h4>First Name</h4> 
                              </label>
                              <input type="text" className="form-control" name="first_name" id="first_name"
                              placeholder= {userprofile.firstName}
                               onChange={(event) => setProfileData({...profileData, firstName:event.target.value})}
                              title="enter your first name if any."/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                            <label for="last_name"><h4>Last Name</h4></label>
                              <input type="text" className="form-control" name="last_name" id="last_name" placeholder={userprofile.lastName}
                              onChange={(event) => setProfileData({...profileData, lastName:event.target.value})}
                               title="enter your last name if any."/>
                          </div>
                      </div>
          
                      
            

                     
                     
                      
          
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="email"><h4>Email</h4></label>
                              <input type="email" className="form-control" name="email" id="email" 
                              placeholder={userprofile.email}
                              onChange={(event) => setProfileData({...profileData, email:event.target.value})}
                               title="enter your email."/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="location"><h4>Location</h4></label>
                              <input type="text" className="form-control" name="location" id="location" 
                              placeholder={userprofile.location}
                              onChange={(event) => setProfileData({...profileData, location:event.target.value})}
                               title="enter your email."/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="occupation"><h4>Phone</h4></label>
                              <input type="text" className="form-control" id="occupation" 
                              placeholder={userprofile.phone}
                              onChange={(event) => setProfileData({...profileData, phone:event.target.value})}
                               title="enter a location"/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="dateofbirth"><h4>Date of Birth</h4></label>
                              <input type="date" className="form-control" name="dateofbirth"
                               id="dateofbirth" placeholder={userprofile.dateOfBirth} 
                               onChange={(event) => setProfileData({...profileData, dateOfBirth:event.target.value})}
                               title="enter your password."/>
                          </div>
                      </div>

                      
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                            <label for="about"><h4>About</h4></label>
                            
                              <input type="text" className="form-control" 
                              name="about" id="about" placeholder= {userprofile.about}
                              onChange={(event) => setProfileData({...profileData, about:event.target.value})}
                               title="enter your password2."/>
                            
                          </div>
                      </div>
                      <div className="form-group">
                           <div className="col-xs-12">
                                <br/>
                              	<button className="btn btn-lg btn-success" type="submit"  onClick={saveClickHandler}>Save</button>
                                   <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                            </div>
                           
                      </div>
              	</form>
              
              <hr/>
              
              
             </div>
               
              </div>
          </div>

        </div>
    </div>
   
  
   </>
    )
}

export default EditUserProfile;