import { useCart } from "../CartContext";

export default function CartSidebar() {
  const { cart, cartOpen, setCartOpen, removeFromCart, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Cart Button */}
      <button id="cart-btn" onClick={() => setCartOpen(true)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
        {totalItems > 0 && <span id="cart-count">{totalItems}</span>}
      </button>

      {/* Overlay */}
      {cartOpen && <div id="cart-overlay" onClick={() => setCartOpen(false)} />}

      {/* Sidebar */}
      <div id="cart-sidebar" className={cartOpen ? "open" : ""}>
        <div id="cart-header">
          <h2 id="cart-title">Your Cart</h2>
          <button id="cart-close" onClick={() => setCartOpen(false)}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div id="cart-empty">
            <span style={{ fontSize: "40px" }}>🛒</span>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div id="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">${item.price.toFixed(2)} × {item.qty}</p>
                  </div>
                  <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>✕</button>
                </div>
              ))}
            </div>
            <div id="cart-footer">
              <div id="cart-total">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button id="cart-checkout-btn">Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}