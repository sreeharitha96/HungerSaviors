import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {createOrderThunk} from "../services/order-thunks";
import {updateDonor} from "../services/donor-service";
import {useDispatch} from "react-redux";
import {approveDonorThunk, updateDonorThunk} from "../services/donor-thunks";

const PendingDonorItem = (
    {
        donor = {
            _id: "123",
            userName: "rest1",
            name: "restaurant1",
            location: "boston",
            image: "changing-lifes.jpg",
            dp: "logo.png",
            about : "about the donor1",
            followers: 123,
            following: 234,
            liked: true,
            likes: 14,
            rating: 4.2,
            foodavailable: {
                "apple pie": 2,
                "pasta": 10
            },
            foodavailabilityposts: "array",
            storetimings:"10:00am to 9:00pm",
            rewardpoints: 987,
            foodreviews: {
                "review1": "best place!",
                "review2": "decent place to find food"
            }
        }
    }
) => {
    const dispatch = useDispatch();
    const handleApprove = () => {
        console.log(donor._id)
        dispatch(approveDonorThunk(donor._id))
    }
    return(
        <div className="pb-3">
            <div className="card text-start">
                {/*<img src={`/images/${donor.image}`} className="card-img-top" height="200px" alt="..."/>*/}
                <div className="card-body">
                    <div className="row">
                        <div className="col-8">
                            <h6>{donor.name}</h6>
                            <h6 className="small text-muted">{donor.location}</h6>
                            <div className="small text-muted">Open: {donor.storetimings}</div>
                        </div>
                        <div className="col-4">
                            <Button onClick={handleApprove}>Approve</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendingDonorItem;
