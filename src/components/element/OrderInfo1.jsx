"use client";

export default function OrderInfo1({ total, products }) {
  const vat = total * 1.075;
  return (
    <>
      <div className="order_sidebar_widget mb30 default-box-shadow1">
        <h4 className="title">Your Order</h4>
        <ul className="p-0 mb-0">
          <li className="bdrb1 mb20">
            <h6>
              Product
              <span className="float-end">Subtotal</span>
            </h6>
          </li>
          {products?.map((item, i) => (
            <li key={i} className="mb20">
              <p className="body-color">
                {item?.product.title}
                <span className="float-end">
                  ₦{parseInt(item?.product.price).toLocaleString()}
                </span>
              </p>
            </li>
          ))}
          <li className=" bdrb1 mb15">
            <h6>
              Subtotal
              <span className="float-end">₦{total.toLocaleString()}</span>
            </h6>
          </li>
          <li className=" bdrb1 mb15">
            <h6>
              Shipping
              <span className="float-end">
                {products?.length !== 0 ? "₦0" : "₦0.00"}
              </span>
            </h6>
          </li>
          <li className=" bdrb1 mb15">
            <h6>
              VAT
              <span className="float-end">
                ₦
                {products?.length !== 0
                  ? parseInt(vat - total).toLocaleString()
                  : "0.00"}
              </span>
            </h6>
          </li>
          <li>
            <h6>
              Total
              <span className="float-end">
                ₦
                {products?.length !== 0 ? Number(vat).toLocaleString() : "0.00"}
              </span>
            </h6>
          </li>
        </ul>
      </div>
    </>
  );
}
