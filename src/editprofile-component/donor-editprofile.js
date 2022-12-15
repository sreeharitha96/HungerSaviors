import React, {useState, useEffect} from "react";
import $ from 'jquery';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, Navigate} from "react-router";
import {findDonorByUsernameThunk, updateDonorThunk} from "../services/donor-thunks";
import { Link } from 'react-router-dom';
import ProfilePage from "../profile-component/index.js";


function EditDonorUserProfile (){
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
const {donor, loading2} = useSelector((state) => state.donorsData);
const dispatch = useDispatch()
useEffect(() => {
  dispatch(findDonorByUsernameThunk(currentUser.userName))
  }, [dispatch])

console.log(donor)

const [donorData, setDonorData] = useState(donor);
// console.log(profile);
// console.log(profileData);
// console.log(userprofile)
// console.log(currentUser)
const navigate = useNavigate();


 const saveClickHandler = () => {
    //    console.log(profileData, "From comp");
       
      dispatch(updateDonorThunk(donorData));   
      navigate("/donorprofile");
     

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
                loading2 &&
                <li className="list-group-item">
                    Loading...
                </li>
        }
  		<div className="col-sm-3"><h1>Hi! {donor.name}</h1></div>
    </div>
    <div className="row">
  		<div className="col-sm-3">
              

          <div className="text-center">
        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar"/>
        <h6>Upload a different photo...</h6>
        <input type="file" className="text-center center-block file-upload"/>
      </div><hr/><br/>


               
          <div className="panel panel-default">
            <div className="panel-heading"><strong>Activity</strong>  <i className="bi bi-speedometer2"></i></div>
            <div className="panel-body">
            <ul className="list-group">
            <li className="list-group-item text-right"><span className="pull-left"><strong>Rating </strong> </span> {donor.rating}</li>
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
                              <label for="first_name"><h4>Name</h4> 
                              </label>
                              <input type="text" className="form-control" name="first_name" id="first_name"
                              placeholder= {donor.name}
                               onChange={(event) => setDonorData({...donorData, name:event.target.value})}
                              title="enter your first name if any."/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                            <label for="last_name"><h4>About</h4></label>
                              <input type="text" className="form-control" name="last_name" id="last_name" 
                              placeholder={donor.description}
                              onChange={(event) => setDonorData({...donorData, description:event.target.value})}
                               title="enter your last name if any."/>
                          </div>
                      </div>
          
                      
                      <div className="form-group">
                          <div className="col-xs-6">
                             <label for="username"><h4>Location</h4></label>
                              <input type="text" className="form-control" name="username" id="username"
                               placeholder={donor.location}
                               onChange={(event) => setDonorData({...donorData, location:event.target.value})}
                               title="enter your mobile number if any."/>
                          </div>
                      </div>

                      <div className="form-group">
                          <div className="col-xs-6">
                             <label for="password"><h4>Phone</h4></label>
                              <input type="password" className="form-control" name="password" id="password"
                               placeholder={donor.phone}
                               onChange={(event) => setDonorData({...donorData, phone:event.target.value})}
                               title="enter your mobile number if any."/>
                          </div>
                      </div>
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="companyname"><h4>Email</h4></label>
                              <input type="text" className="form-control" name="companyname" id="companyname" 
                              placeholder={donor.email}
                              onChange={(event) => setDonorData({...donorData, email:event.target.value})}
                               title="enter your phone number if any."/>
                          </div>
                      </div>
          
                      <div className="form-group">
                          
                          <div className="col-xs-6">
                              <label for="website"><h4>Store Timings</h4></label>
                              <input type="text" className="form-control" name="website" id="website" 
                              placeholder={donor.storeTimings}
                              onChange={(event) => setDonorData({...donorData, storeTimings:event.target.value})}
                               title="enter your phone number if any."/>
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

export default EditDonorUserProfile;