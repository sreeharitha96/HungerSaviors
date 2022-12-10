import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import "./index.css";
import CustomerViewOfDonor from "./customer-view";
import DonorViewOfDonor from "./donor-view";
import {findDonorByUsernameThunk} from "../services/donor-thunks";

const DonorDetails = () => {
    const customer = true;

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const donorID = paths[2];

    const {donor, loading2} = useSelector(
        state => state.donorsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findDonorByUsernameThunk(donorID))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch])

    return(
        <>
            {
                loading2 && <li className="list-group-item">
                         Loading...
                     </li>
            }
            {
                !customer &&
                <DonorViewOfDonor key={donor._id} donor={donor}/>
            }
            {
                customer &&
                <CustomerViewOfDonor key={donor._id} donor={donor}/>
                // <CustomerViewOfDonor key={donor._id} donor={donor}/>
                // <CustomerViewOfDonorNew key={donor._id}/>
                // <CustomerViewOfDonorNew2 key={donor._id} donor={donor}/>
            }
            {/*<pre>*/}
            {/*    {JSON.stringify(donor, null, 2)}*/}
            {/*</pre>*/}
        </>
    );
};
export default DonorDetails;