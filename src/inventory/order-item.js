import React from 'react';

const OrderItem = ({ order }) => {
  console.log(order + 'test');
  return Object.entries(order).map((key, i) => (
    <div key={i} className="p-1 col-12 col-lg-6">
      <div className="card text-start p-1">
        <div className="row">
          <div className="col-8">{key}</div>
          <div className="col-4">
            <span className="float-end">Available: {order[key]}</span>
          </div>
        </div>
      </div>
    </div>
  ));
};
export default OrderItem;
