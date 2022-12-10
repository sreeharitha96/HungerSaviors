import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import DonorItem from '../donor-list-component/donor-item';

const SearchResults= () =>  {
    const donors= useSelector((state) => state.donors);
    const [flag, setFlag]= useState(false)
    useEffect(() => {
        if  (donors && donors.length > 0)
         setFlag(true)
          console.log(donors)
        }, [donors])
    
    return (
       flag &&
        <ul className="list-group">
        {
          donors.map(donor =>
            <DonorItem
              key={donor._id} donor={donor}/> )
        }
      </ul>
    )
}

export default SearchResults;