import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";
import Client from "../register/register.model";
import Product from "../products/products.model";
import jwt from "jsonwebtoken";

connectMongoDB();

export async function POST(req) {
  const token = req.headers.get("authorization");
  const { productId, action } = await req.json();

  if (!token) {
    return throwUserResponse({
      status: 401,
      success: false,
      message: "Unauthorized",
    });
  }

  try {
    // const result = await Client.updateMany(
    //   { "cart.quantity": { $exists: false } },
    //   { $set: { "cart.$[].quantity": 1 } }
    // );
    // console.log("Update result:", result);
    const decoded = jwt.verify(token, "secret");
    const userId = decoded._id;
    const user = await Client.findById(userId);
    if (!user) {
      return throwUserResponse({
        status: 404,
        success: false,
        message: "User not found",
      });
    }
    const existingProduct = await Product.findById(productId);
    if (!existingProduct) {
      return throwUserResponse({
        status: 404,
        success: false,
        message: "Product not found",
      });
    }
    user.cart.forEach((item) => {
      if (item.quantity == null) item.quantity = 1;
    });

    const existingCartItem = user.cart.find(
      (item) => item.product.toString() === productId.toString()
    );
    if (action === "increment") {
      if (existingCartItem) {
        console.log("increasing by 1");
        const currentQty = parseInt(existingCartItem.quantity) || 1;
        existingCartItem.quantity = currentQty + 1;
        console.log("updated quantity:", existingCartItem.quantity);
        // const itemIndex = user.cart.findIndex(
        //   (item) => item.product.toString() === productId.toString()
        // );

        // if (itemIndex !== -1) {
        //   user.cart[itemIndex].quantity = existingCartItem.quantity; // Update the quantity in the array
        //   await user.save();
        // }
      }
    } else if (action === "decrement") {
      if (existingCartItem && existingCartItem.quantity > 1) {
        console.log("decreasing by 1");
        existingCartItem.quantity -= 1;
      } else {
        // remove the item if quantity goes to 0 or below
        user.cart = user.cart.filter(
          (item) => item.product.toString() !== productId.toString()
        );
      }
    } else if (action === "remove") {
      user.cart = user.cart.filter(
        (item) => item.product.toString() !== productId.toString()
      );
    } else {
      // toggle behavior (add/remove)
      if (existingCartItem) {
        console.log("reached update here");
        // if already exists, increase quantity
        existingCartItem.quantity += 1;
      } else {
        console.log("reached new here");
        user.cart.push({ product: productId, quantity: 1 });
      }
    }

    await user.save();
    await user.populate("cart.product");
    return throwUserResponse({
      status: 200,
      success: true,
      message: "Cart updated successfully",
      data: user.cart,
    });
  } catch (error) {
    return throwUserResponse({
      status: 500,
      success: false,
      message: error?.message,
      errorStack: error,
    });
  }
}

export const dynamic = "force-dynamic";

// const existingInCart = user.cart.some(
//   (item) => item.product && item.product.toString() === productId.toString()
// );

// if (existingInCart) {
//   user.cart = user.cart.filter(
//     (item) =>
//       item.product && item.product.toString() !== productId.toString()
//   );

//   await user.save();
//   return throwUserResponse({
//     status: 200,
//     success: true,
//     message: "Product removed from Cart",
//     data: user.cart,
//   });
// } else {
//   user.cart = [...user.cart, { product: productId }];

//   await user.save();
//   return throwUserResponse({
//     status: 200,
//     success: true,
//     message: "Product added to Cart",
//     data: user.cart,
//   });
// }
