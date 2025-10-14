import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Cart: NextPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Blocks shape-sorting Toy",
      price: 39,
      quantity: 2,
      image: "/img/products/image3.svg",
    },
    {
      id: 2,
      title: "Carrot harvest wooden Toy",
      price: 29,
      quantity: 1,
      image: "/img/products/image4.svg",
    },
    {
      id: 3,
      title: "Talking flash cards learning Toys",
      price: 39,
      quantity: 1,
      image: "/img/products/image5.svg",
    },
  ]);

  const handleIncrease = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (

    <div className="cart-page">
      <Stack className="container">
        <div className="cart">
          {/* Breadcrumb */}
          <div className="cart__breadcrumb">
            Home / <span className="active">Your shopping cart</span>
          </div>

          <h2 className="cart__title">Your Cart</h2>

          {/* Cart Table */}
          <table className="cart__table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="cart__product">
                      <img src={item.image} alt={item.title} />
                      <p>{item.title}</p>
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className="cart__quantity">
                      <button onClick={() => handleDecrease(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrease(item.id)}>+</button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="cart__remove"
                      onClick={() => handleRemove(item.id)}
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Cart Bottom */}
          <div className="cart__bottom">
            <div className="cart__coupon">
              <input type="text" placeholder="Coupon code" />
              <button>Apply</button>
            </div>

            <div className="cart__summary">
              <div className="cart__summary-item">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="cart__summary-item total">
                <span>Total</span>
                <span>${(subtotal + 20).toFixed(2)}</span>
              </div>
              <button className="cart__checkout">Proceed to checkout</button>
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
}
export default withLayoutBasic(Cart)