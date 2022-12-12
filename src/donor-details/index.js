import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import "./index.css";
import CustomerViewOfDonor from "./customer-view";
import DonorViewOfDonor from "./donor-view";
import {findDonorByUsernameThunk} from "../services/donor-thunks";

const DonorDetails = () => {
    
    const currentUser = useSelector((state) => state.users.currentUser);

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const donorID = paths[2];

    const {donor, loading2} = useSelector((state) => state.donorsData)
    const dispatch = useDispatch();
    useEffect(() => {
<<<<<<< HEAD
        console.log(donorID)
        dispatch(findDonorByUsernameThunk(donorID))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch])
=======
        dispatch(findDonorByUsernameThunk(donorID))
    }, [dispatch])
>>>>>>> 6e86d1f0ceea50eba9146401c0592f3fffb9328a

    return(
        <>
            {loading2 ? (
                <li className="list-group-item">
                    Loading...
                </li>
<<<<<<< HEAD
            ) : customer ? (
                <CustomerViewOfDonor key={donor._id} donor={donor}/>
            ): <DonorViewOfDonor key={donor._id} donor={donor}/>
=======
            ) :  donor.userName === currentUser.userName ? (
                <DonorViewOfDonor key={donor._id} donor={donor}/>
            ): <CustomerViewOfDonor key={donor._id} donor={donor}/>
>>>>>>> 6e86d1f0ceea50eba9146401c0592f3fffb9328a
            }
        </>
    );
};
export default DonorDetails;