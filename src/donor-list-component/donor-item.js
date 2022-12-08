import React from "react";
import {Link} from "react-router-dom";

const DonorItem = (
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
    // console.log(donor._id)
    return(
        <Link to={`/donor/${donor._id}`} className="text-decoration-none">
            <div className="pb-3">
                <div className="card text-start">
                    <img src={`/images/${donor.image}`} className="card-img-top" height="200px" alt="..."/>
                    <div className="card-body">
                        <div className="row">
                            <h6 className="col-8">{donor.name}</h6>
                            <h6 className="col-4 small text-end">{donor.rating}</h6>
                        </div>
                        <h6 className="small text-muted">{donor.location}</h6>
                        <div className="small text-muted">Open: {donor.storetimings}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default DonorItem;
