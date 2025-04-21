"use client";

import Image from "next/image";
import shopStore from "@/store/shopStore";

export default function CartList1({ data, quantity }) {
  const isLoading = shopStore((state) => state.isLoading);
  const deleteFromCart = shopStore((state) => state.deleteFromCart);
  const increaseQty = shopStore((state) => state.increaseQty);
  const decreaseQty = shopStore((state) => state.decreaseQty);
  const deleteHandler = async (id) => {
    deleteFromCart(id);
  };
  return (
    <>
      <tr>
        <td className="pl30 ">
          <div className="cart_list d-flex align-items-center">
            <div className="cart-img">
              <Image height={60} width={60} src={data.img} alt="cart-1.png" />
            </div>
            <h5 className="mb-0">{data.title.substring(0, 30) + "..."}</h5>
          </div>
        </td>
        <td>
          <div className="cart-price">
            ₦
            {Number(data.price).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </td>
        <td>
          <div className="cart-quantity d-flex align-items-center justify-items-center items-center gap-2 text-center">
            <button onClick={() => decreaseQty(data._id)} disabled={isLoading}>
              -
            </button>
            <span className="">{quantity}</span>
            <button onClick={() => increaseQty(data._id)} disabled={isLoading}>
              +
            </button>
          </div>
        </td>
        <td>
          <div className="cart-subtotal pl5">
            ₦
            {Number(data.price * quantity).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </td>
        <td>
          <a
            onClick={() => deleteHandler(data._id)}
            className="cart-delete d-inline-block"
          >
            <span className="flaticon-delete" />
          </a>
        </td>
      </tr>
    </>
  );
}
