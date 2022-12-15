import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import {findOrderByDonorIdThunk}
  from "../services/order-thunks";
import OrderItem from './order-item';



const PreviousDonorOrders= () =>  {
    const {previousorders, previousordersloading} = useSelector((state) => state.orders);
    const {currentUser}= useSelector((state)=> state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findOrderByDonorIdThunk(currentUser.userName))
        }, [dispatch])
        console.log(currentUser)
        console.log(previousorders);

    return (
        <>
        <div className='container'>
            <div className='row'>
            {
                previousordersloading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                !previousordersloading &&
                previousorders.map(order => <div key={order._id} className='col-12 col-md-6 col-xl-4'>
                    <OrderItem key={order._id} order={order}/></div> )
            }
            </div>
        </div>
        
     
       
 
        
        </>
        
    )
}

export default PreviousDonorOrders;