import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findDonorByIdThunk, findDonorThunk} from "../services/donor-thunks";
import {json, Link, useLocation} from "react-router-dom";
import "./index.css";
import InventoryItem from "../inventory/inventory-item";
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
    // console.log(typeof (donor.foodavailable))


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
            }
            {
                !customer &&
                <DonorViewOfDonor key={donor._id} donor={donor}/>
            }
        </>
    );
};
export default DonorDetails;