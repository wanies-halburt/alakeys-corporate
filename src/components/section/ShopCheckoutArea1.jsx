"use client";

import OrderInfo1 from "../element/OrderInfo1";
import PaymentOption1 from "../element/PaymentOption1";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";
import toast from "react-hot-toast";

export default function ShopCheckoutArea1() {
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("alakeys-token");
      const res = await axios.get(`/api/get-cart`, {
        headers: {
          authorization: `${token}`, // Assuming you're using a Bearer token
        },
      });
      setAllProducts(res.data?.data);
    };
    fetchCart();
  }, []);

  let total = 0;
  allProducts
    ? allProducts.forEach((item) => {
        const price = 1 * parseInt(item.product.price);
        total = total + price;
      })
    : null;

  const firstName = user?.fullName.split(" ")[0];
  const lastName = user?.fullName.split(" ")[1];

  const handleSubmit = async () => {
    setIsLoading(true);
    const token = localStorage.getItem("alakeys-token");

    const payload = {
      companyName,
      address,
      state,
      country,
      message,
      phone,
      totalPrice: total,
    };
    const res = await axios.post(`/api/checkout`, payload, {
      headers: {
        authorization: `${token}`, // Assuming you're using a Bearer token
      },
    });
    toast.success(res.data?.message || "Order has been made");
    console.log("order response", res);
    setIsLoading(false);
    setAddress("");
    setCountry("");
    setMessage("");
    setState("");
    setPhone("");
    setCompanyName("");
  };

  return (
    <>
      <section className="shop-checkout pt-5">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-md-7 col-lg-8">
              <div className="checkout_form">
                <h4 className="title mb30">Billing details</h4>
                <div className="checkout_coupon">
                  <form className="form2">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb25">
                          <h6 className="mb15">First Name</h6>
                          <input
                            className="form-control"
                            type="text"
                            value={firstName}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb25">
                          <h6 className="mb15">Last Name</h6>
                          <input
                            className="form-control"
                            type="text"
                            disabled
                            value={lastName}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb25">
                          <h6 className="mb15">Company Name</h6>
                          <input
                            className="form-control"
                            type="text"
                            required
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb25">
                          <h6 className="mb15">Country *</h6>
                          <input
                            className="form-control"
                            type="text"
                            value={country}
                            required
                            onChange={(e) => setCountry(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb25">
                          <h6 className="mb15">House number and street name</h6>
                          <input
                            className="form-control"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb25">
                          <h6 className="mb15">State *</h6>
                          <input
                            className="form-control"
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb25">
                          <h6 className="mb15">Phone Number *</h6>
                          <input
                            className="form-control"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb25">
                          <h6 className="mb15">Email Address</h6>
                          <input
                            className="form-control"
                            type="email"
                            value={user.email}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb25">
                          <h4 className="mb15">Additional information</h4>
                          <h6>Order Notes (optional)</h6>
                          <textarea
                            name="form_message"
                            rows={7}
                            value={message}
                            placeholder="Description"
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="shop-sidebar ms-md-auto">
                <OrderInfo1 total={total} products={allProducts} />
                <PaymentOption1 />
                <div className="d-grid default-box-shadow2">
                  <button
                    className="ud-btn btn-thm"
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    Place Order
                    <i className="fal fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
