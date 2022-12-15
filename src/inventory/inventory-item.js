import React from "react";
import {useSelector} from "react-redux";

const InventoryItem = (
    {
        donor = {
            _id: "123",
            userName: "rest1",
            name: "restaurant1",
            location: "boston",
            coverPhoto: "changing-lifes.jpg",
            profilePhoto: "logo.png",
            description : "about the donor1",
            followers: 123,
            following: 234,
            liked: true,
            likes: 14,
            rating: 4.2,
            inventory: {
                "apple pie": 2,
                "pasta": 10
            },
            foodavailabilityposts: "array",
            storeTimings:"10:00am to 9:00pm",
            rewardpoints: 987,
            foodreviews: {
                "review1": "best place!",
                "review2": "decent place to find food"
            }
        }
        // food = {
        //     apple: 2,
        //     pasta: 10
        // }
    }
) => {
    // console.log(typeof(food))
    // console.log(food);
    // console.log(donor)
    // console.log(donor.foodavailable)
    // let food = donor.foodavailable;
    console.log(donor);
    return(

        Object.keys(food).map((key, i) => (
            <div key={i} className="p-1 col-12 col-lg-6">
                <div className="card text-start p-1">
                    <div className="row">
                        <div className="col-8">{key}</div>
                        <div className="col-4"><span className="float-end">Available: {food[key]}</span></div>
                    </div>
                    <div className="row">
                        <form className="col-8">
                            <label name="quantity">Select: </label>
                            <input htmlFor="quantity" type="number" placeholder="0"
                                   min="0" max={food[key]}/>
                        </form>
                        <div className="col-4"><button className="rounded-pill float-end">Add</button></div>
                    </div>
                </div>
            </div>

        ))


    )
}

export default InventoryItem;
