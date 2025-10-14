import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Checkout: NextPage = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", address: "", city: "", state: "", 
    zip: "", phone: "", email: "", notes: "",
  });

  const [payment, setPayment] = useState("credit");
  const [products] = useState([
    { id: 1, name: "Blocks shape-sorting Toy", amount: 2, price: 78.00, image: "/img/products/image4.svg" },
    { id: 2, name: "Carrot harvest wooden Toy", amount: 1, price: 29.00, image: "/img/products/image5.svg" },
    { id: 3, name: "Talking flash cards Learning Toys", amount: 2, price: 78.00, image: "/img/products/image2.svg" },
  ]);

  const subtotal = products.reduce((sum, product) => sum + product.price, 0);
  const shipping = 20.00;
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", { formData, payment });
  };

  return (
    <div className="checkout-list">
      <div className="container">
        <div className="checkout">
          <h2 className="checkout__title">Check out</h2>

          <form className="checkout__content" onSubmit={handleSubmit}>
            {/* Delivery Info */}
            <div className="checkout__delivery">
              <h3 className="checkout__subtitle">Delivery info</h3>

              <div className="checkout__row">
                <input type="text" name="firstName" placeholder="First name *" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last name *" onChange={handleChange} required />
              </div>

              <input type="text" name="address" placeholder="Street address *" onChange={handleChange} required />

              <div className="checkout__row">
                <input type="text" name="city" placeholder="Town / City *" onChange={handleChange} required />
                <input type="text" name="state" placeholder="State *" onChange={handleChange} required />
              </div>

              <div className="checkout__row">
                <input type="text" name="zip" placeholder="ZIP code *" onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone *" onChange={handleChange} required />
              </div>

              <input type="email" name="email" placeholder="Email address *" onChange={handleChange} required />

              <textarea name="notes" placeholder="Order notes (optional)" onChange={handleChange} rows={3}></textarea>
            </div>

            {/* Order Summary */}
            <div className="checkout__order">
              <h3 className="checkout__subtitle">Your order</h3>
              
              <div className="checkout__order-list">
                {products.map(product => (
                  <div key={product.id} className="checkout__order-item">
                    <div className="checkout__product-info">
                      <div className="checkout__product-image">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="checkout__product-details">
                        <p>{product.name}</p>
                        <span>Amount: {product.amount}</span>
                      </div>
                    </div>
                    <strong>${product.price.toFixed(2)}</strong>
                  </div>
                ))}

                <div className="checkout__summary">
                  <p>Subtotal</p>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="checkout__summary">
                  <p>Shipping</p>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="checkout__summary total">
                  <p>Total</p>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment */}
              <div className="checkout__payment">
                <h3 className="checkout__subtitle">Payment</h3>
                <p className="checkout__payment-note">All transactions are secure and encrypted.</p>

                <label className="checkout__radio">
                  <input type="radio" name="payment" value="credit" checked={payment === "credit"} onChange={() => setPayment("credit")} />
                  Credit card
                </label>

                {payment === "credit" && (
                  <div className="checkout__credit-form">
                    <input type="text" placeholder="Card number" />
                    <input type="text" placeholder="Name on card" />
                    <div className="checkout__row">
                      <input type="text" placeholder="Expiration date (MM/YY)" />
                      <input type="text" placeholder="Security code" />
                    </div>
                  </div>
                )}

                <label className="checkout__radio">
                  <input type="radio" name="payment" value="paypal" checked={payment === "paypal"} onChange={() => setPayment("paypal")} />
                  PayPal
                </label>

                <button type="submit" className="checkout__btn">Place order</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withLayoutBasic(Checkout);