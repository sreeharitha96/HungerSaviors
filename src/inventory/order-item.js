import React from 'react';

const OrderItem = ({ order }) => {
  console.log(order + 'test');
  return (
      Object.keys(order).map((key, i) => (
      <div key={i} className="p-1">
        <div className="card text-start p-1">
            <div className="row p-1">
              <div className="col-9">{key}</div>
              <div className="col-3 float-end">{order[key]}</div>
            </div>
          </div>
        </div>
  )));
};
export default OrderItem;
