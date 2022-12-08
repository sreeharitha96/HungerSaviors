import React from "react";

const InventoryItemDonor = (
    {
        food = {
            apple: 2,
            pasta: 10
        }
    }
) => {
    return(

        Object.keys(food).map((key, i) => (
            <div key={i} className="p-1 col-12 col-lg-6">

                Something is happening here with keys

                <div className="card text-start p-1">
                    <div className="row">
                        <div className="col-8">{key}</div>
                        <div className="col-4"><span className="float-end">Available: {food[key]}</span></div>
                    </div>
                </div>
            </div>

        ))


    )
}

export default InventoryItemDonor;
