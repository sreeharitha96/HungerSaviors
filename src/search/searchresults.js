import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import DonorItem from '../donor-list-component/donor-item';

const SearchResults= () =>  {
    const {donors, loading3} = useSelector((state) => state.donors);
    // useEffect(() => {
    //     if  (donors && donors.length > 0)
    //      setFlag(true)
    //     }, [donors])
    return (
        <>
        <div className='container'>
            <div className='row'>
            {
                loading3 &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !loading3 &&
                donors.map(donor => <div key={donor._id} className='col-12 col-md-6 col-xl-4'><DonorItem key={donor._id} donor={donor}/></div> )
            }
            </div>
        </div>
        
     
       
 
        
        </>
        
    )
}

export default SearchResults;