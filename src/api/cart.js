    import BASE_URL from "./index";

export const getCart = () =>
  fetch(`${BASE_URL}/api/cart`).then(res => res.json());

export const addToCart = (productId, quantity) =>
  fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, quantity })
  }).then(res => res.json());

export const removeFromCart = (productId) =>
  fetch(`${BASE_URL}/api/cart`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId })
  }).then(res => res.json());