import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {findDonorsByCitynameThunk} from "../services/search-thunk.js";
import SearchResults from './searchresults.js';
import './index.css';

const Search =() => {
    const {donors, loading} = useSelector((state) => state.donors);
    const [cityname, setCityname] = useState(donors);
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const handlesearchbycity = () => {
        
          dispatch(findDonorsByCitynameThunk(cityname))
          navigate('/searchresults')
           console.log(cityname)
    }
   
return(
      
            <nav class="navbar navbar-default">
        <div class="nav nav-justified navbar-nav ">
 
            <form class="navbar-form navbar-search" role="search">
                <div class="input-group">
        
                    <input type="text" class="form-control" name="city" id="city" 
                             
                              onChange={(event) => setCityname(event.target.value)}
                               title="enter your phone number if any."/>
                
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-search btn-info" onClick={handlesearchbycity}>
                            <span class="glyphicon glyphicon-search"></span>
                            <span class="label-icon">Search</span>
                        </button>
                    </div>

                </div>  
            </form>   
         
        </div>
    </nav>
                            
      
  
)
}

export default Search;