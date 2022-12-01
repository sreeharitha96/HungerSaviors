import React, {useEffect} from "react";
import NavBar from "../navbar-component";
import DonorItem from "./donor-item";
import {useDispatch, useSelector} from "react-redux";
import {findDonorThunk} from "../services/donor-thunks";

const DonorList = () => {
    const {donors, loading} = useSelector(
        state => state.donorsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findDonorThunk())
    },[dispatch])

    const donorArray = useSelector(
        (state) => state.donorsData);
    return (
        <>
            <h2>
                Find places with food available
            </h2>
            <div className="container">

                <ul className="list-group">
                    {
                        loading && <li className="list-group-item">
                            Loading...
                        </li>
                    }
                    {
                        donors.map(donor => <DonorItem key={donor._id} donor={donor}/>)
                    }
                </ul>
            </div>
        </>

    );
};
export default DonorList;