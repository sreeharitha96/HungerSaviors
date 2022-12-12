import React from "react";
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {approveDonorThunk} from "../services/donor-thunks";

const PendingDonorItem = (
    {
        donor = {
            _id: "123",
            userName: "rest1",
            name: "restaurant1",
            location: "boston",
            profilePhoto: "logo.png",
            coverPhoto: "changing-lifes.jpg",
            description : "about the donor1",
            rating: 4.2,
            inventory: {
                "apple pie": 2,
                "pasta": 10
            },
            storeTimings:"10:00am to 9:00pm",
        }
    }
) => {
    const dispatch = useDispatch();
    const handleApprove = () => {
        console.log(donor._id)
        dispatch(approveDonorThunk(donor._id))
        setApproved(true)
    }
    const [approved, setApproved] = React.useState(false)

    const Show = () => (
        <div className="pb-3">
                <div className="card text-start">
                    {/*<img src={`/images/${donor.image}`} className="card-img-top" height="200px" alt="..."/>*/}
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <h6>{donor.name}</h6>
                                <h6 className="small text-muted">{donor.location}</h6>
                                <div className="small text-muted">Open: {donor.storeTimings}</div>
                            </div>
                            <div className="col-4">
                                <Button onClick={handleApprove}>Approve</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    return(
            !approved && <Show/>
        
    )
}

export default PendingDonorItem;
