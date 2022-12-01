import React from "react";

const DonorItem = (
    {
        donor = {
            _id: 123,
            name: "restaurant1",
            location: "boston",
            image: "changing-lifes.jpg",
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
    return(
        <div className="col-12 col-md-6 col-xl-4 pb-3">
            <div className="card text-start">
                <img src={`/images/${donor.image}`} className="card-img-top" alt="..."/>
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
    )
}

export default DonorItem;
