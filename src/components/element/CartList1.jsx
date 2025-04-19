"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import axios from "axios";

export default function CartList1({ data, reload }) {
  const deleteHandler = async (id) => {
    const token = localStorage.getItem("alakeys-token");
    const payload = { productId: id };
    const res = await axios.post(`/api/add-cart`, payload, {
      headers: {
        authorization: `${token}`, // Assuming you're using a Bearer token
      },
    });
    reload();
    toast.success(res.data?.message || "Product has been removed");
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
            ₦{parseInt(data.price).toLocaleString()}
          </div>
        </td>
        <td>
          <div className="cart-quantity">
            <p className=" text-center">1</p>
          </div>
        </td>
        <td>
          <div className="cart-subtotal pl5">
            ₦{parseInt(data.price).toLocaleString()}
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
