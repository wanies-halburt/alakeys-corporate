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
  return (
    <div className="shop-checkout pt-0">
      <h5 className="title text-center">Order History</h5>
      <div className="container">
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="">
            <div className=" shopping_cart_table table-responsive mb-4 mb-lg-5">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th className="pl30  fw500" scope="col">
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
                <tbody className="table_body">
                  {orderHistory.length ? (
                    orderHistory.map((res) => (
                      <tr key={res._id}>
                        <td className="pl30 ">{res.orderId}</td>
                        <td className="max-w-3/12">
                          {res.products.map((val) => (
                            <p key={val._id}>{val.product.title}, </p>
                          ))}
                        </td>
                        <td>{res.products.length}</td>
                        <td>
                          ₦
                          {Number(res.totalPrice).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </td>
                        <td className="max-w-3/12">{res.message}</td>
                      </tr>
                    ))
                  ) : (
                    <h2 className="text-center mx-auto mt-5">
                      No Service has been ordered
                    </h2>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
