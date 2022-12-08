import React from "react";
import InventoryItemEdit from "./inventory-item-edit";

const EditInventory = (
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
    return(
        <div className="container ps-5 pe-5">
            <div className="image-container">
                <div className="main_image">
                    <img className="w-100 mt-2 rounded-2" src={`/images/${donor.image}`} alt="landing background"/>
                </div>
                <div className="overlay_image">
                    <img className="w-100 rounded-pill float-start" src={`/images/${donor.dp}`} alt="profile"/>
                </div>
            </div>

            <div className="row d-block text-start">
                <h5>Inventory Available</h5>
            </div>
            <div className="text-start">
                <div className="row">
                    <InventoryItemEdit key={donor._id} food={donor.foodavailable}/>
                </div>
            </div>

        </div>
    )

}
export default EditInventory;
