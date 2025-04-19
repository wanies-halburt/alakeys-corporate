"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("alakeys-token");

      const res = await axios.get(`/api/get-orders`, {
        headers: {
          authorization: `${token}`, // Assuming you're using a Bearer token
        },
      });
      console.log("res", res);
      setOrderHistory(res.data?.data);
    };
    fetchCart();
  }, []);
  console.log("orderHistory", orderHistory);
  return (
    <div className="ui-content">
      <h5 className="title text-center">Order History</h5>
      <div className="table-style1 table-responsive mb-4 mb-lg-5">
        <table className="table table-borderless">
          <thead className="thead-light">
            <tr>
              <th className="fz15 fw500" scope="col">
                Order Id
              </th>
              <th className="fz15 fw500" scope="col">
                Services Ordered
              </th>
              <th className="fz15 fw500" scope="col">
                Quantity
              </th>
              <th className="fz15 fw500" scope="col">
                Price
              </th>
              <th className="fz15 fw500" scope="col">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.length
              ? orderHistory.map((res) => (
                  <tr key={res._id}>
                    <td>{res._id}</td>
                    <td className=" max-w-2/12">
                      {res.products.map((val) => (
                        <p key={val._id}>{val.product.title}, </p>
                      ))}
                    </td>
                    <td>{res.products.length}</td>
                    <td>₦{parseInt(res.totalPrice).toLocaleString()}</td>
                    <td className=" max-w-4/12">{res.message}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
