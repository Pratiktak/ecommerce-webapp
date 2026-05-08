const BASE_URL = "http://localhost:5001";

export const getCart = async () => {
  const res = await fetch(`${BASE_URL}/api/cart`, {
    credentials: "include",
  });

  return res.json();
};

export const addToCartAPI = async (product) => {
  const res = await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(product),
  });

  return res.json();
};

export const removeFromCartAPI = async (productId) => {
  const res = await fetch(`${BASE_URL}/api/cart`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ productId }),
  });

  return res.json();
};