import React, {useEffect} from "react";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {findDonorThunk, approveDonorThunk} from "../services/donor-thunks";
import PendingDonorItem from "./pending-donor-item";

const PendingDonorList = ({status}) => {
    const {donors, loading} = useSelector(
        state => state.donorsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findDonorThunk(status))
    }, [dispatch])

    return (
        <div className="container">

            <div className="row">
                {
                    loading && <div>
                                Loading...
                            </div>
                }
                {
                    
                    donors.map(donor => (
                    <div key={donor._id} className="col-12 col-md-6 col-xl-4">
                        <PendingDonorItem key={donor._id} donor={donor}/>
                        {/*<div className="pb-3">*/}
                        {/*    <div className="card text-start">*/}
                        {/*        <img src={`/images/${donor.profilePhoto}`} className="card-img-top" height="200px" alt="..."/>*/}
                        {/*        <div className="card-body">*/}
                        {/*            <div className="row">*/}
                        {/*                <div className="col-8">*/}
                        {/*                    <h6>{donor.name}</h6>*/}
                        {/*                    <h6 className="small text-muted">{donor.location}</h6>*/}
                        {/*                    <div className="small text-muted">Open: {donor.storeTimings}</div>*/}
                        {/*                </div>*/}
                        {/*                <div className="col-4">*/}
                        {/*                    <Button onClick={handleApprove(donor._id)}>Approve</Button>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>))
                }
            </div>
        </div>
    );
};
export default PendingDonorList;