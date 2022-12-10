import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateDonorThunk} from "../services/donor-thunks";

const InventoryItemOld = (
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
    console.log(donor.foodavailable);
    return(

        Object.keys(donor.foodavailable).map((key, i) => (
            <div key={i} className="p-1 col-12 col-lg-6">
                <div className="card text-start p-1">
                    <div className="row">
                        <div className="col-8">{key}</div>
                        <div className="col-4"><span className="float-end">Available: {donor.foodavailable[key]}</span></div>
                    </div>
                    <div className="row">
                        <form className="col-8">
                            <label name="quantity">Select: </label>
                            <input htmlFor="quantity" type="number" placeholder="0"
                                   min="0" max={donor.foodavailable[key]}/>
                        </form>
                        <div className="col-4"><button className="rounded-pill float-end">Add</button></div>
                    </div>
                </div>
            </div>

        ))


    )
}

export default InventoryItemOld;
