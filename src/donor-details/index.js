import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findDonorByIdThunk, findDonorThunk} from "../services/donor-thunks";
import {json, Link, useLocation} from "react-router-dom";
import "./index.css";
import InventoryItem from "./inventory-item";
import CustomerViewOfDonor from "./customer-view";
import DonorViewOfDonor from "./donor-view";

const DonorDetails = () => {
    const customer = false;
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const donorID = paths[2];

    const {donor, loading2} = useSelector(
        state => state.donorsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findDonorByIdThunk(donorID))
    },[dispatch])

    const donorArray = useSelector(
        (state) => state.donorsData);


    // const donor = JSON.parse(donors.find(d => d._id === donorID));
    // console.log(donorID)

       // console.log(donor)
    console.log(typeof (donor.foodavailable))


    return(
        <>
            {
                loading2 && <li className="list-group-item">
                         Loading...
                     </li>

            }

            {
                customer &&
                <CustomerViewOfDonor key={donor._id} donor={donor}/>
                // <div className="container ps-5 pe-5">
                //     <div className="image-container">
                //         <div className="main_image">
                //             <img className="w-100 mt-2 rounded-2" src={`/images/${donor.image}`} alt="landing background"/>
                //         </div>
                //         <div className="overlay_image">
                //             <img className="w-100 rounded-pill float-start" src={`/images/${donor.dp}`} alt="profile"/>
                //         </div>
                //     </div>
                //
                //     <div className="d-inline-block float-start text-start w-100">
                //         <h3>{donor.name}</h3>
                //         <div className="row d-block">
                //             <span>{donor.location}</span> . <span>{donor.rating}</span>
                //         </div>
                //         <div className="row d-block">
                //             <span>Address</span> . <span>Link for maps</span>
                //         </div>
                //     </div><br/>
                //     <div className="row d-block text-start">
                //         <h5>Inventory Available</h5>
                //     </div>
                //     <div className="text-start">
                //         <div className="row">
                //             <InventoryItem key={donor._id} food={donor.foodavailable}/>
                //         </div>
                //     </div>
                //
                // </div>
            }
            {
                !customer &&
                <DonorViewOfDonor key={donor._id} donor={donor}/>
            }
        </>
    );
};
export default DonorDetails;