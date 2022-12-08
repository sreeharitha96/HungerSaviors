import React from "react";
import {useDispatch} from "react-redux";
import {updateDonorThunk} from "../services/donor-thunks";

const InventoryItemEdit = (
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
    let food = donor.foodavailable;
    const dispatch = useDispatch();
    const deleteInventoryHandler = (key) => {

        // const data = {
        //     "apple pie": 2,
        //     "pasta": 10,
        //     "banana": 6
        // }
        // const fil = Object.keys(data)
        // const selectedUser = fil.filter(words => words !== "pasta")
        // const filteredUsers = Object.keys(data)
        //     .filter(key => selectedUser.includes(key))
        //     .reduce((obj, key) => {
        //         obj[key] = data[key];
        //         return obj;
        //     }, {});
        // console.log(filteredUsers)

        // let updatedInventory = JSON.parse(donor.foodavailable);
        // console.log(updatedInventory);
        // console.log(typeof (updatedInventory))
        // updatedInventory = JSON.parse(updatedInventory);
        // delete updatedInventory[key];
        // console.log(updatedInventory);

        // let newfood = {
        //     "pasta": 10
        // }


        // const foodList = Object.keys(donor.foodavailable)
        // const selectedUser = foodList.filter(words => words !== key)
        // const newfood = Object.keys(donor.foodavailable)
        //     .filter(key => selectedUser.includes(key))
        //     .reduce((obj, key) => {
        //         obj[key] = donor.foodavailable[key];
        //         return obj;
        //     }, {});
        // console.log(newfood)


        // let newInv = {
        //     "apple pie": 2,
        //     "pasta": 10,
        //     "banana": 6
        // }
        // console.log(typeof (newInv))
        // let newfood = newInv.filter(deleteInv);
        // console.log(newfood)
        // function deleteInv(inv) {
        //     return inv !== key;
        // }

        // let newDonor = {
        //     ...donor,
        //     foodavailable: newfood
        // }
        // dispatch(updateDonorThunk(newDonor));
    }

    return(

        Object.keys(food).map((key, i) => (
            <div key={i} className="p-1 col-12 col-lg-6">
                <div className="card text-start p-1 pt-0">
                    <div className="row">
                        <div className="d-inline-block text-muted">
                            <i className="bi bi-x float-end"
                               onClick={() => deleteInventoryHandler(key)}></i></div>
                    </div>
                    {/*onClick={() => deleteInventoryHandler(key)}*/}
                    {/*onClick={() => deleteTuitHandler(tuit._id)}*/}
                    <div className="row">
                        <div className="col-8">{key}</div>
                        <div className="col-4"><span className="float-end">Quantity: {food[key]}</span></div>
                    </div>
                    <div className="row">
                        <form className="col-8">
                            <label name="quantity">Available: </label>
                            <input htmlFor="quantity" type="number" placeholder={food[key]} min="0"/>
                        </form>
                        <div className="col-4"><button className="rounded-pill float-end">update</button></div>
                    </div>
                </div>
            </div>

        ))


    )
}

export default InventoryItemEdit;
