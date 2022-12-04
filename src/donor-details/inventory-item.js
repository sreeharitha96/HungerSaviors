import React from "react";

const InventoryItem = (
    {
        food = {
            apple: 2,
            pasta: 10
        }
    }
) => {
    console.log(typeof(food))
    console.log(food);
    return(

        Object.keys(food).map((key, i) => (
            <div key={i} className="list-group-item">
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
        ))


    )
}

export default InventoryItem;
