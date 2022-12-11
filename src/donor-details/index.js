import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import "./index.css";
import CustomerViewOfDonor from "./customer-view";
import DonorViewOfDonor from "./donor-view";
import {findDonorByUsernameThunk} from "../services/donor-thunks";

const DonorDetails = () => {
    const currentUser = useSelector((state) => state.users.currentUser);
    console.log('currentUser: ', currentUser);

    const customer = currentUser.role == 'CUSTOMER';
    // const customer = false;
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const donorID = paths[2];
    // const donorID = currentUser.userName;
    console.log('donorID: ', donorID);

    const {donor, loading2} = useSelector((state) => state.donorsData)
    console.log('useSelector(state => state.donorsData): ', useSelector(state => state.donorsData));
    console.log('donor: ', donor);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("in use effect s" + donorID)
        dispatch(findDonorByUsernameThunk(donorID))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch])

    return(
        <>
            {loading2 ? (
                <li className="list-group-item">
                    Loading...
                </li>
            ) : customer ? (
                <CustomerViewOfDonor key={donor._id} donor={donor}/>
            ): <DonorViewOfDonor key={donor._id} donor={donor}/>
            }
        </>
    );
};
export default DonorDetails;