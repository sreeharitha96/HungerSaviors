import React from "react";
import {Link} from "react-router-dom";
import InventoryItemDonor from "../inventory/inventory-donor-view";

const OrderItem = (
    {
        order = {
            "_id": "63938666ea17c38133f70c61",
            "donorUserName": "store4",
            "customerUserName": "user2",
            "status": "COMPLETED",
            "orderList": {
              "banana": 5,
              "orange": 10
            }
          }
    }
) => {
    const foodlist=order.orderList
    for (let i=0; i< foodlist.length; i++) {
        const string1 = foodlist[i];
     }

    return(
            <div className="pb-3">
                <div className="card text-start">
                    <div className="card-body">
                        <div className="row">
                            <h6 className="col-8">Ordered from {order.donorUserName}</h6>
                            <h6 className="col-8">Ordered By {order.customerUserName}</h6>

                            <h6 className="col-4 small text-end">Order Status is {order.status}</h6>
                        </div>
                       <InventoryItemDonor food={order.orderList}></InventoryItemDonor>
                        
                    </div>
                </div>
            </div>
    )
}

export default OrderItem;
