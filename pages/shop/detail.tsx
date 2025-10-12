import React, { useState } from "react";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { ProductCard } from "@/libs/components/product/productCard";

const Detail = () => {
  //Related product
  const [products, setProducts] = useState([1, 2, 3, 4])

  // tab uchun 
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");



  // Add to cart
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    // Demo uchun alert
    alert(`Added ${quantity} item(s) to your cart!`);

    // 2 sekunddan keyin tugma yana "Add to cart" bo'lib qaytadi
    setTimeout(() => setAddedToCart(false), 2000);
    setTimeout(() => setQuantity(1), 2000);

  };

  const handleQuantityChange = (type: "plus" | "minus") => {
    setQuantity((prev) => {
      if (type === "minus" && prev > 1) return prev - 1;
      if (type === "plus") return prev + 1;
      return prev;
    });
  };

  return (
    <div className="detail">
      <div className="container">
        <div className="product-page">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span>Home</span> / <span className="active">Blocks shape-sorting Toy</span>
          </div>

          <div className="product-detail">
            {/* Left image section */}
            <div className="product-gallery">
              <div className="main-image">
                <img src="/img/products/image 11.svg" alt="Blocks shape-sorting Toy" />
              </div>
              <div className="thumbnail-row">
                <img src="/img/products/image 11.svg" alt="thumb" />
                <img src="/img/products/image 11.svg" alt="thumb" />
                <img src="/img/products/image 11.svg" alt="thumb" />
              </div>
            </div>

            {/* Right product info */}
            <div className="product-info">
              <h2>Blocks shape-sorting Toy</h2>
              <p className="price">$39.00</p>
              <p className="reviews">(14 Reviews)</p>
              <p className="desc">
                Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus
                dictum at tempor commodo ullamcorper a lacus.
              </p>

              <div className="quantity">
                <button onClick={() => handleQuantityChange("minus")}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange("plus")}>+</button>
              </div>

              <button
                className={`add-to-cart ${addedToCart ? "added" : ""}`}
                onClick={handleAddToCart}
                disabled={addedToCart}
              >
                {addedToCart ? "✓ Added to cart" : "Add to cart"}
              </button>

              <div className="short-desc">
                <p><strong>SKU:</strong> BG-1068</p>
                <p><strong>Category:</strong> Educational Toy</p>
                <p><strong>Tags:</strong> 2 - 5 years</p>
                <p><strong>EXP:</strong> 06/08/2026</p>
              </div>

              <div className="checkout">
                <p>Guaranteed Safe Checkout</p>
                <div className="cards">
                  <img src="/img/icons/Discover Card.png" alt="visa" />
                  <img src="/img/icons/master.png" alt="mastercard" />
                  <img src="/img/icons/American Express.png" alt="amex" />
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="product-tabs">
            <div className="tabs">
              <button
                className={activeTab === "description" ? "active" : ""}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={activeTab === "reviews" ? "active" : ""}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews (14)
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "description" ? (
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              ) : (
                <div className="reviews-section">
                  <h4>Customer Reviews (14)</h4>

                  <div className="review">
                    <strong>Jane Doe</strong>
                    <span className="stars">★★★★★</span>
                    <p>My kid absolutely loves this toy! Great quality and colorful design.</p>
                  </div>

                  <div className="review">
                    <strong>John Smith</strong>
                    <span className="stars">★★★★☆</span>
                    <p>Very educational toy. The shapes fit perfectly and colors are vibrant.</p>
                  </div>

                  <form className="review-form">
                    <h5>Leave a review</h5>
                    <textarea placeholder="Write your review..." />
                    <button type="submit">Submit Review</button>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Related products */}
          <div className="related-products">
            <h3>Related products</h3>
            <div className="related-grid">
              {products.map((product, index) => {
                return (
                  <ProductCard key={index} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default withLayoutBasic(Detail);
