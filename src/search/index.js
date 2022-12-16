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
    }
   
return(
      
            <nav className="navbar navbar-default">
        <div className="nav nav-justified navbar-nav ">
 
            <form className="navbar-form navbar-search" role="search">
                <div className="input-group">
        
                    <input type="text" className="form-control" name="city" id="city" 
                             
                              onChange={(event) => setCityname(event.target.value)}
                               title="enter your phone number if any."/>
                
                    <div className="input-group-btn">
                        <button type="button" className="btn btn-search btn-info" onClick={handlesearchbycity}>
                            <span className="glyphicon glyphicon-search"></span>
                            <span className="label-icon">Search</span>
                        </button>
                    </div>

                </div>  
            </form>   
         
        </div>
    </nav>
                            
      
  
)
}

export default Search;