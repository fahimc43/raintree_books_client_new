import React from "react";
import { useQuery } from "react-query";
import Loading from "../components/Loading";
import OrderedRow from "../components/OrderedRow";

function Order() {
  const { data: orders, isLoading } = useQuery("orders", () =>
    fetch("https://raintree-books-server.onrender.com/orders").then((res) =>
      res.json()
    )
  );
  // console.log(books);
  if (isLoading) {
    <Loading />;
  }

  console.log("orders", orders);
  return (
    <div className="md:container md:mx-auto mt-8">
      <div className="flex justify-center md:justify-start md:ml-20 ">
        <h3 className=" font-bold text-2xl">All Ordered Items</h3>
      </div>

      <div className="flex flex-col items-center mt-8">
        <div className="overflow-x-auto w-10/12">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th className=" text-base">Book Name</th>
                <th className=" text-base">Price (pcs)</th>
                <th className=" text-base">Quantity</th>
                <th className=" text-base">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <Loading />
              ) : (
                orders.map((order, index) => (
                  <OrderedRow order={order} key={index} index={index} />
                ))
              )}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Total</th>
                <th></th>
                <th></th>
                <th>$ 915</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Order;
