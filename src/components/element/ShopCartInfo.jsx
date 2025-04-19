"use client";

import Link from "next/link";

export default function ShopCartInfo({ data }) {
  let total = 0;
  data
    ? data.forEach((item) => {
        const price = 1 * parseInt(item.product.price);
        total = total + price;
      })
    : null;

  return (
    <>
      <div className="shop-sidebar ms-lg-auto">
        <div className="order_sidebar_widget default-box-shadow1">
          <h4 className="title">Cart Totals</h4>
          <p className="text bdrb1 pb10">
            Subtotal
            <span className="float-end">₦{total.toLocaleString()}</span>
          </p>
          <p className="text">
            Total
            <span className="float-end">₦{total.toLocaleString()}</span>
          </p>
          <div className="d-grid mt40">
            <Link className="ud-btn btn-thm" href="/checkout">
              Proceed to Checkout
              <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
