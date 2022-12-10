import React, {useState, useEffect} from "react";
import $ from 'jquery';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import { updateUserThunk, findUserByIdThunk } from "../services/userprofile-thunk.js";

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


const {userprofile, loading} = useSelector((state) => state.userprofile);
const dispatch = useDispatch()
useEffect(() => {
  dispatch(findUserByIdThunk())
  }, [])
console.log(userprofile);
const profile= useSelector(store => store.profile);
const [profileData, setProfileData] = useState(profile);
console.log(profile);
console.log(profileData);
const navigate = useNavigate();


 const saveClickHandler = () => {
       console.log(profileData, "From comp");
      dispatch(updateUserThunk(profileData));   
      
      navigate("/profile");
      window.location.reload()

 }
    return(
        <>
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
        <div class="container bootstrap snippet">
    <div class="row">
  		<div class="col-sm-10"><h1>Hi! {userprofile.firstName}</h1></div>
    </div>
    <div class="row">
  		<div class="col-sm-3">
              

      <div class="text-center">
        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar"/>
        <h6>Upload a different photo...</h6>
        <input type="file" class="text-center center-block file-upload"/>
      </div><hr/><br/>

               
          <div class="panel panel-default">
            <div class="panel-heading"><strong>Activity</strong>  <i class="bi bi-speedometer2"></i></div>
            <div class="panel-body">
            <ul class="list-group">
            <li class="list-group-item text-right"><span class="pull-left"><strong>Likes </strong> </span> {userprofile.likes}</li>
            <li class="list-group-item text-right"><span class="pull-left"><strong>Followers</strong></span> {userprofile.followers}</li>
            </ul> 
            </div>
          </div>       
        </div>

    	<div class="col-sm-9">
             
          <div class="tab-content">
            <div class="tab-pane active" id="home">
                <hr/>
                  <form class="form" action="##" method="post" id="registrationForm">
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="first_name"><h4>First Name</h4> 
                              </label>
                              <input type="text" class="form-control" name="first_name" id="first_name"
                              placeholder= {userprofile.firstName}
                               onChange={(event) => setProfileData({...profileData, firstName:event.target.value})}
                              title="enter your first name if any."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                            <label for="last_name"><h4>Last Name</h4></label>
                              <input type="text" class="form-control" name="last_name" id="last_name" placeholder={userprofile.lastName}
                              onChange={(event) => setProfileData({...profileData, lastName:event.target.value})}
                               title="enter your last name if any."/>
                          </div>
                      </div>
          
                      
                      <div class="form-group">
                          <div class="col-xs-6">
                             <label for="username"><h4>Username</h4></label>
                              <input type="text" class="form-control" name="username" id="username"
                               placeholder={userprofile.username}
                               onChange={(event) => setProfileData({...profileData, username:event.target.value})}
                               title="enter your mobile number if any."/>
                          </div>
                      </div>

                      <div class="form-group">
                          <div class="col-xs-6">
                             <label for="password"><h4>Password</h4></label>
                              <input type="password" class="form-control" name="password" id="password"
                               placeholder={userprofile.password}
                               onChange={(event) => setProfileData({...profileData, password:event.target.value})}
                               title="enter your mobile number if any."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="companyname"><h4>Company Name</h4></label>
                              <input type="text" class="form-control" name="companyname" id="companyname" 
                              placeholder={userprofile.companyname}
                              onChange={(event) => setProfileData({...profileData, companyname:event.target.value})}
                               title="enter your phone number if any."/>
                          </div>
                      </div>
          
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="website"><h4>Website</h4></label>
                              <input type="text" class="form-control" name="website" id="website" 
                              placeholder={userprofile.website}
                              onChange={(event) => setProfileData({...profileData, website:event.target.value})}
                               title="enter your phone number if any."/>
                          </div>
                      </div>
          
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="email"><h4>Email</h4></label>
                              <input type="email" class="form-control" name="email" id="email" 
                              placeholder={userprofile.email}
                              onChange={(event) => setProfileData({...profileData, email:event.target.value})}
                               title="enter your email."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="location"><h4>Location</h4></label>
                              <input type="text" class="form-control" name="location" id="location" 
                              placeholder={userprofile.location}
                              onChange={(event) => setProfileData({...profileData, location:event.target.value})}
                               title="enter your email."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="occupation"><h4>Occupation</h4></label>
                              <input type="text" class="form-control" id="occupation" 
                              placeholder={userprofile.occupation}
                              onChange={(event) => setProfileData({...profileData, occupation:event.target.value})}
                               title="enter a location"/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="dateofbirth"><h4>Date of Birth</h4></label>
                              <input type="date" class="form-control" name="dateofbirth"
                               id="dateofbirth" placeholder={userprofile.dateofbirth} 
                               onChange={(event) => setProfileData({...profileData, dateofbirth:event.target.value})}
                               title="enter your password."/>
                          </div>
                      </div>

                      
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                            <label for="about"><h4>About</h4></label>
                            
                              <input type="text" class="form-control" 
                              name="about" id="about" placeholder= {userprofile.about}
                              onChange={(event) => setProfileData({...profileData, about:event.target.value})}
                               title="enter your password2."/>
                            
                          </div>
                      </div>
                      <div class="form-group">
                           <div class="col-xs-12">
                                <br/>
                              	<button class="btn btn-lg btn-success" type="submit"  onClick={saveClickHandler}><i class="glyphicon glyphicon-ok-sign"></i> Save</button>
                               	<button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>
                            </div>
                      </div>
              	</form>
              
              <hr/>
              
             </div>
             {/* <div class="tab-pane" id="messages">
               
               <h2></h2>
               
               <hr/>
                  <form class="form" action="##" method="post" id="registrationForm">
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="first_name"><h4>First name</h4></label>
                              <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                            <label for="last_name"><h4>Last name</h4></label>
                              <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any."/>
                          </div>
                      </div>
          
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="phone"><h4>Phone</h4></label>
                              <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any."/>
                          </div>
                      </div>
          
                      <div class="form-group">
                          <div class="col-xs-6">
                             <label for="mobile"><h4>Mobile</h4></label>
                              <input type="text" class="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="email"><h4>Email</h4></label>
                              <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="email"><h4>Location</h4></label>
                              <input type="email" class="form-control" id="location" placeholder="somewhere" title="enter a location"/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="password"><h4>Password</h4></label>
                              <input type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                            <label for="password2"><h4>Verify</h4></label>
                              <input type="password" class="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2."/>
                          </div>
                      </div>
                      <div class="form-group">
                           <div class="col-xs-12">
                                <br/>
                              	<button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Save</button>
                               	<button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>
                            </div>
                      </div>
              	</form>
               
             </div>
             <div class="tab-pane" id="settings">
            		
               	
                  <hr/>
                  <form class="form" action="##" method="post" id="registrationForm">
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="first_name"><h4>First name</h4></label>
                              <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                            <label for="last_name"><h4>Last name</h4></label>
                              <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any."/>
                          </div>
                      </div>
          
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="phone"><h4>Phone</h4></label>
                              <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any."/>
                          </div>
                      </div>
          
                      <div class="form-group">
                          <div class="col-xs-6">
                             <label for="mobile"><h4>Mobile</h4></label>
                              <input type="text" class="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="email"><h4>Email</h4></label>
                              <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="email"><h4>Location</h4></label>
                              <input type="email" class="form-control" id="location" placeholder="somewhere" title="enter a location"/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="password"><h4>Password</h4></label>
                              <input type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                            <label for="password2"><h4>Verify</h4></label>
                              <input type="password" class="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2."/>
                          </div>
                      </div>
                      <div class="form-group">
                           <div class="col-xs-12">
                                <br/>
                              	<button class="btn btn-lg btn-success pull-right" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Save</button>
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