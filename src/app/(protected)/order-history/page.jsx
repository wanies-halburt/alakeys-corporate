"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Loader } from "@/components/Loader";
import Link from "next/link";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const token = localStorage.getItem("alakeys-token");
        const res = await axios.get(`/api/get-orders`, {
          headers: {
            authorization: `${token}`,
          },
        });
        setOrderHistory(res.data?.data);
      } catch (error) {
        console.error(error); // Handle error logging or display
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderHistory();
  }, []);

  return (
    <div className="shop-checkout pt-0">
      <h3 className="title text-center fw-bold pb-3">Order History</h3>
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
                  {!isLoading && orderHistory.length ? (
                    orderHistory.map((res) => (
                      <tr key={res._id}>
                        <td className="pl30 ">{res.orderId}</td>
                        <td className="">
                          {res.products.map((val) => (
                            <p key={val._id}>
                              <Link href={`/products/${val._id}`}>
                                {val.product.title}
                              </Link>
                            </p>
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
                        <td className="">{res.message}</td>
                      </tr>
                    ))
                  ) : isLoading ? (
                    <div className="loader-container mt-10">
                      <Loader />
                    </div>
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
