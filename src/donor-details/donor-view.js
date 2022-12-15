import React, {useState} from "react";
import InventoryItemDonor from "../inventory/inventory-donor-view";
import InventoryAddItem from "../inventory/inventory-add-item";

const DonorViewOfDonor = (
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
          storeTimings:"10:00am to 9:00pm",
          rewardpoints: 987,
          foodreviews: {
              "review1": "best place!",
              "review2": "decent place to find food"
          }
      }
  }
) => {
    let [edit, setEdit] = useState(false);

    const editHandler = () => {
        setEdit(!edit);
    }


    return(

                <div className="container ps-5 pe-5">
                    <div className="image-container">
                        <div className="main_image">
                            {
                                (donor.image) &&
                                <img className="w-100 rounded-2" src={`/images/${donor.image}`} alt="landing background"/>
                            }
                            {
                                <img className="w-100 rounded-2" src="/images/background.jfif" alt="landing background"/>
                            }                        </div>
                        <div className="overlay_image">
                            {
                                (donor.dp) &&
                                <img className="w-100 rounded-pill float-start" src={`/images/${donor.dp}`} alt="profile"/>
                            }
                            {
                                <img className="w-100 rounded-pill float-start" src="/images/rest_logo.jfif" alt="profile"/>
                            }                        </div>
                    </div>

                    <div className="row d-block text-start">
                        <h5>Inventory Available</h5>
                        {
                            !edit &&
                            <button onClick={editHandler}
                                    className="mt-2 btn rounded-pill float-end border-secondary border-thin fw-bold me-3">
                                edit
                            </button>
                        }
                        {
                            edit &&
                            <button onClick={editHandler}
                                    className="mt-2 btn rounded-pill float-end border-secondary border-thin fw-bold me-3">
                                save
                            </button>
                        }
                    </div>
                    <div className="text-start">
                        <div className="row">
                            {
                                !edit &&
                                <InventoryItemDonor key={donor._id} food={donor.inventory}/>
                            }
                            {
                                edit &&
                                <InventoryAddItem key={donor._id} donor={donor}/>
                            }
                        </div>
                    </div>

                </div>
    )
}
export default DonorViewOfDonor;