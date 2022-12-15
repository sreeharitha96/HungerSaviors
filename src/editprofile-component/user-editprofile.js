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

    // const [userName, setUsername] = useState('admin')
const [saveSucess, setSaveSuccess] = useState(false)
const {currentUser}= useSelector((state)=> state.users)
const {userprofile, loading} = useSelector((state) => state.userprofile);
const dispatch = useDispatch()
useEffect(() => {
  dispatch(findUserByUsernameThunk(currentUser.userName))
  }, [dispatch])

// console.log(userprofile);
const profile= useSelector(store => store.profile);

const [profileData, setProfileData] = useState(userprofile);
// console.log(profile);
// console.log(profileData);
// console.log(userprofile)
// console.log(currentUser)
const navigate = useNavigate();


 const saveClickHandler = () => {
    //    console.log(profileData, "From comp");
       
      dispatch(updateUserThunk(profileData));   
      setSaveSuccess(true)
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
  		<div className="col-sm-10"><h1>Hi! {userprofile.firstName}</h1></div>
    </div>
    <div className="row">
  		<div className="col-sm-3">
              

      <div className="text-center">
        <img src="./images/profilePhoto.png" className="avatar img-circle img-thumbnail" alt="avatar"/>
        <h6>Upload a different photo...</h6>
        <input type="file" className="text-center center-block file-upload"/>
      </div><hr/><br/>

               
          <div className="panel panel-default">
            <div className="panel-heading"><strong>Activity</strong>  <i className="bi bi-speedometer2"></i></div>
            <div className="panel-body">
            <ul className="list-group">
            <li className="list-group-item text-right"><span className="pull-left"><strong>Likes </strong> </span> {userprofile.likes}</li>
            <li className="list-group-item text-right"><span className="pull-left"><strong>Followers</strong></span> {userprofile.followers}</li>
            </ul> 
            </div>
          </div>       
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
                             <label for="username"><h4>Username</h4></label>
                              <input type="text" className="form-control" name="username" id="username"
                               placeholder={userprofile.username}
                               onChange={(event) => setProfileData({...profileData, username:event.target.value})}
                               title="enter your mobile number if any."/>
                          </div>
                      </div>

                      <div className="form-group">
                          <div className="col-xs-6">
                             <label for="password"><h4>Password</h4></label>
                              <input type="password" className="form-control" name="password" id="password"
                               placeholder={userprofile.password}
                               onChange={(event) => setProfileData({...profileData, password:event.target.value})}
                               title="enter your mobile number if any."/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="companyname"><h4>Company Name</h4></label>
                              <input type="text" className="form-control" name="companyname" id="companyname" 
                              placeholder={userprofile.companyname}
                              onChange={(event) => setProfileData({...profileData, companyname:event.target.value})}
                               title="enter your phone number if any."/>
                          </div>
                      </div>
          
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="website"><h4>Website</h4></label>
                              <input type="text" className="form-control" name="website" id="website" 
                              placeholder={userprofile.website}
                              onChange={(event) => setProfileData({...profileData, website:event.target.value})}
                               title="enter your phone number if any."/>
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
                              <label for="occupation"><h4>Occupation</h4></label>
                              <input type="text" className="form-control" id="occupation" 
                              placeholder={userprofile.occupation}
                              onChange={(event) => setProfileData({...profileData, occupation:event.target.value})}
                               title="enter a location"/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="dateofbirth"><h4>Date of Birth</h4></label>
                              <input type="date" className="form-control" name="dateofbirth"
                               id="dateofbirth" placeholder={userprofile.dateofbirth} 
                               onChange={(event) => setProfileData({...profileData, dateofbirth:event.target.value})}
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
             {/* <div className="tab-pane" id="messages">
               
               <h2></h2>
               
               <hr/>
                  <form className="form" action="##" method="post" id="registrationForm">
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="first_name"><h4>First name</h4></label>
                              <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any."/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                            <label for="last_name"><h4>Last name</h4></label>
                              <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any."/>
                          </div>
                      </div>
          
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="phone"><h4>Phone</h4></label>
                              <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any."/>
                          </div>
                      </div>
          
                      <div className="form-group">
                          <div className="col-xs-6">
                             <label for="mobile"><h4>Mobile</h4></label>
                              <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any."/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="email"><h4>Email</h4></label>
                              <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email."/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="email"><h4>Location</h4></label>
                              <input type="email" className="form-control" id="location" placeholder="somewhere" title="enter a location"/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="password"><h4>Password</h4></label>
                              <input type="password" className="form-control" name="password" id="password" placeholder="password" title="enter your password."/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                            <label for="password2"><h4>Verify</h4></label>
                              <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2."/>
                          </div>
                      </div>
                      <div className="form-group">
                           <div className="col-xs-12">
                                <br/>
                              	<button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                               	<button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                            </div>
                      </div>
              	</form>
               
             </div>
             <div className="tab-pane" id="settings">
            		
               	
                  <hr/>
                  <form className="form" action="##" method="post" id="registrationForm">
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="first_name"><h4>First name</h4></label>
                              <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any."/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                            <label for="last_name"><h4>Last name</h4></label>
                              <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any."/>
                          </div>
                      </div>
          
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="phone"><h4>Phone</h4></label>
                              <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any."/>
                          </div>
                      </div>
          
                      <div className="form-group">
                          <div className="col-xs-6">
                             <label for="mobile"><h4>Mobile</h4></label>
                              <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any."/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="email"><h4>Email</h4></label>
                              <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email."/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="email"><h4>Location</h4></label>
                              <input type="email" className="form-control" id="location" placeholder="somewhere" title="enter a location"/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="password"><h4>Password</h4></label>
                              <input type="password" className="form-control" name="password" id="password" placeholder="password" title="enter your password."/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                            <label for="password2"><h4>Verify</h4></label>
                              <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2."/>
                          </div>
                      </div>
                      <div className="form-group">
                           <div className="col-xs-12">
                                <br/>
                              	<button className="btn btn-lg btn-success pull-right" type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                            </div>
                      </div>
              	</form>
              </div> */}
               
              </div>
          </div>

        </div>
    </div>
   
  
   </>
    )
}

export default EditUserProfile;