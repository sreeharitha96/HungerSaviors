import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import {Link} from "react-router-dom";
import DonorItem from '../donor-list-component/donor-item';
import findUserByIdThunk from "../services/userprofile-thunk.js";
import {findPreviousOrdersByCustomernameThunk}
  from "../services/previousorder-thunk";
import OrderItem from './order-item';



const PreviousOrders= () =>  {
    const {orders, loading4} = useSelector((state) => state.orders);
    const {userprofile, loading3} = useSelector((state) => state.userprofile);
    const dispatch = useDispatch()
    console.log(userprofile);

    useEffect(() => {
        dispatch(findPreviousOrdersByCustomernameThunk(userprofile.username))
        }, [])
        console.log(orders);

    return (
        <>
        <div className='container'>
            <div className='row'>
            {
                loading4 &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !loading4 &&
                orders.map(order => <div key={order._id} className='col-12 col-md-6 col-xl-4'>
                    <OrderItem key={order._id} order={order}/></div> )
            }
            </div>
        </div>
        
     
       
 
        
        </>
        
    )
}

export default PreviousOrders;