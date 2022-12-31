import React from "react";

function OrderedRow({ order, index }) {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={order.imageUrl} alt={order.bookName} />
              </div>
            </div>
            <div>
              <div className="font-bold">{order.bookName}</div>
              <div className="text-sm opacity-50">{order.authorName}</div>
            </div>
          </div>
        </td>
        <td>$ {order.bookPrice}</td>
        <td>{order.quantity}</td>
        <td>$ {order.sum}</td>
      </tr>
    </>
  );
}

export default OrderedRow;
