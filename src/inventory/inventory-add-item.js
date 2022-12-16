import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateDonorThunk} from "../services/donor-thunks";
import InventoryItemEdit from "./inventory-item-edit";

const InventoryAddItem = (
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
    }
) => {
    const dispatch = useDispatch();

    const [itemName, setItemName] = useState('');
    const [quant, setQuant] = useState('');
    const handleItemInput = event => {
        setItemName(event.target.value);
    }
    const handleQuantInput = event => {
        setQuant(event.target.value);
    }
    const updateInventoryHandler = () => {
        if(itemName !== '') {
            let newInv = {
                ...donor.inventory,
                [itemName] : parseInt(quant)
            }
            let newDonor = {
                ...donor,
                inventory: newInv
            }
            dispatch(updateDonorThunk(newDonor));
            setItemName('');
            setQuant('');
        }
    }

    return(
        <>
            <div className="card">
                <div className="row">
                <input value={itemName} placeholder="Item Name"
                          className="col-5 form-control"
                          onChange={handleItemInput}>
                </input>
                <input value={quant} placeholder="Quantity"
                       className="col-4 form-control"
                       onChange={handleQuantInput}>
                </input>
                <button onClick={() => updateInventoryHandler()}
                    className="col-3 rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold">
                    Add
                </button>
                </div>
            </div>

            <InventoryItemEdit key={donor._id} donor={donor}/>
        </>
    )
}

export default InventoryAddItem;
