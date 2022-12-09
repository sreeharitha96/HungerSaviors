import React, {useState} from "react";
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

    const [val, setVal] = useState('');
    const handleInput = event => {
        setVal(event.target.value);
        console.log('value: '+ val);
    }

    const deleteInventoryHandler = (key) => {

        const foodList = Object.keys(donor.foodavailable)
        const remainingFood = foodList.filter(words => words !== key)
        const newfood = Object.keys(donor.foodavailable)
            .filter(key => remainingFood.includes(key))
            .reduce((obj, key) => {
                obj[key] = donor.foodavailable[key];
                return obj;
            }, {});

        let newDonor = {
            ...donor,
            foodavailable: newfood
        }
        dispatch(updateDonorThunk(newDonor));
    }

    const updateInventoryHandler = (key) => {
        // console.log(key)
        // console.log(typeof key)
        // console.log(val)
        if(val !== '') {
            let newInv = {
                ...donor.foodavailable,
                [key] : parseInt(val)
            }
            console.log(newInv)
            let newDonor = {
                ...donor,
                foodavailable: newInv
            }
            // console.log(typeof(newDonor._id))
            dispatch(updateDonorThunk(newDonor));
            setVal('');
        }
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
                    <div className="row">
                        <div className="col-8">{key}</div>
                        <div className="col-4"><span className="float-end">Quantity: {food[key]}</span></div>
                    </div>
                    <div className="row">
                        <form className="col-8">
                            <label htmlFor={key}>Available: </label>
                            <input id={key} onChange={handleInput}
                                   type="number" defaultValue={food[key]} min="0"/>
                        </form>
                        <div className="col-4"><button className="rounded-pill float-end"
                           onClick={() => updateInventoryHandler(key)}>update</button></div>
                    </div>
                </div>
            </div>

        ))


    )
}

export default InventoryItemEdit;
