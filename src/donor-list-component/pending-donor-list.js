import React, {useEffect} from "react";
import DonorItem from "./donor-item";
import {useDispatch, useSelector} from "react-redux";
import {findDonorThunk} from "../services/donor-thunks";
import PendingDonorItem from "./pending-donor-item";

const PendingDonorList = ({status}) => {
    const {donors, loading} = useSelector(
        state => state.donorsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findDonorThunk(status))
    },[dispatch])

    const donorArray = useSelector(
        (state) => state.donorsData);
    return (
        <div className="container">

            <div className="row">
                {
                    loading && <div>
                                Loading...
                            </div>
                }
                {
                    donors.map(donor => <div key={donor._id} className="col-12 col-md-6 col-xl-4"> <PendingDonorItem key={donor._id} donor={donor}/></div>)
                }
            </div>
        </div>
    );
};
export default PendingDonorList;