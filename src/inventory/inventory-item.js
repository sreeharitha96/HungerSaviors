// import React, {useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
//
// const InventoryItem = (
// {
//     donor = {
//         _id: "123",
//         userName: "rest1",
//         name: "restaurant1",
//         location: "boston",
//         image: "changing-lifes.jpg",
//         dp: "logo.png",
//         about: "about the donor1",
//         followers: 123,
//         following: 234,
//         liked: true,
//         likes: 14,
//         rating: 4.2,
//         foodavailable: {
//             "apple pie": 2,
//             "pasta": 10
//         },
//         foodavailabilityposts: "array",
//         storetimings: "10:00am to 9:00pm",
//         rewardpoints: 987,
//         foodreviews: {
//             "review1": "best place!",
//             "review2": "decent place to find food"
//         }
//     }
// }
// ) => {
//     let food = donor.foodavailable;
//     const dispatch = useDispatch();
//
//     const [val, setVal] = useState('');
//     const handleInput = event => {
//         setVal(event.target.value);
//     }
//     let newOrder = {}
//     const AddOrderHandler = (key) => {
//         if(val !== '') {
//             let newOrder = {
//                 ...newOrder,
//                 [key] : parseInt(val)
//             }
//
//             console.log(newOrder)
//             // dispatch(updateDonorThunk(newDonor));
//             setVal('');
//         }
//     }
//
//     return(
//         Object.keys(food).map((key, i) => (
//               <div key={i} className="p-1 col-12 col-lg-6">
//                   <div className="card text-start p-1 pt-0">
//                       <div className="row">
//                           <div className="col-8">{key}</div>
//                           <div className="col-4"><span className="float-end">Available: {food[key]}</span></div>
//                       </div>
//                       <div className="row">
//                           <form className="col-8">
//                               <label htmlFor={key}>Select: </label>
//                               <input id={key} onChange={handleInput}
//                                      type="number" max={food[key]} min="0"/>
//                           </form>
//                           <div className="col-4"><button className="rounded-pill float-end"
//                                  onClick={() => AddOrderHandler(key)}>Add</button></div>
//                       </div>
//                   </div>
//               </div>
//           )
//         )
        // <>
        //     <pre>
        //         {JSON.stringify(donor, null, 2)}
        //     </pre>
        // </>

//     )
// }


// export default InventoryItem;
