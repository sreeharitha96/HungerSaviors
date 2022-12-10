import React, {useEffect, useReducer, useState} from "react";
import {Button} from "react-bootstrap";
import OrderItem from "../inventory/order-item";
import {useDispatch} from "react-redux";
import {getElement} from "bootstrap/js/src/util";

const CustomerViewOfDonor = (
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
    const [showInv, setShowInv] = useState(false);
    const [cart, setCart] = useState({})
    const [test, setTest] = useState(false);
    const showInvHandler = () => {
        setShowInv(!showInv);
    }
    const [order, setOrder] = useState(false);
    let food = donor.foodavailable;
    const dispatch = useDispatch();

    // const [val, setVal] = useState('');
    // const handleInput = event => {
    //     setVal(event.target.value);
    // }

    const addOrderHandler = (key, avail) => {
        const quant =  document.getElementById(key).value;
        if(quant !== '' && quant <= avail) {
            cart[key] = parseInt(quant);
        }
        if(!test){
            setTest(true)
        } else {
            setTest(false)
        }
        console.log(cart)
        // forceUpdate()
        setOrder(true);
    }

    useEffect(() => {

        PlaceOrderHandler()


    }, [cart])

    const PlaceOrderHandler = () => {
        console.log(cart + "insert")


       return (
            <div className="col-3">
                <div className="card">
                    <h5>Your Cart</h5>
                    <br/>
                    <OrderItem order={cart}/>
                    <br/>
                    <Button className="btn-dark">Place order</Button>
                </div>
            </div>


       )
    }

    // const addToCrt = () => {
    //     return (
    //
    //     )
    // }

    return(
        <div className="ps-5 pe-5 row mt-2">
            <div className="col-9">
            <div className="image-container">
                <div className="main_image">
                    <img className="w-100 rounded-2" src={`/images/${donor.image}`} alt="landing background"/>
                </div>
                <div className="overlay_image">
                    <img className="w-100 rounded-pill float-start" src={`/images/${donor.dp}`} alt="profile"/>
                </div>
            </div>

            <div className="d-inline-block float-start text-start w-100">
                <h3>{donor.name}</h3>
                <div className="row d-block">
                    <span>{donor.location}</span> . <span>{donor.rating}</span>
                </div>
                <div className="row d-block">
                    <span>Address</span> . <span>Link for maps</span>
                </div>
            </div><br/>
            {
                !showInv &&
                <button onClick={showInvHandler}
                        className="mt-2 btn rounded-pill float-end border-secondary border-thin fw-bold me-3">
                    show Inventory
                </button>
            }
            {
                showInv &&
                <div className="row d-block text-start">
                    <h5>Inventory Available</h5>
                </div> &&
                <div className="text-start">
                    <div className="row">
                    {
                        showInv &&
                        Object.keys(food).map((key, i) => (
                          <div key={i} className="p-1 col-12 col-lg-6">
                              <div className="card text-start p-1 pt-0">
                                  <div className="row">
                                      <div className="col-8">{key}</div>
                                      <div className="col-4"><span className="float-end">Available: {food[key]}</span></div>
                                  </div>
                                  <div className="row">
                                      <form className="col-8">
                                          <label htmlFor={key}>Select: </label>
                                          <input id={key}
                                                 type="number" max={food[key]} min="0"/>
                                      </form>
                                      <div className="col-4"><button className="rounded-pill float-end"
                                         onClick={() => addOrderHandler(key, food[key])}>Add</button></div>
                                  </div>
                              </div>
                          </div>
                        )
                      )
                    }
                    </div>
                </div>
            }
            </div>
            {
               showInv && order && <PlaceOrderHandler />

            }

        </div>
    )

}
export default CustomerViewOfDonor;
