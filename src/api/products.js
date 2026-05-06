import BASE_URL from "./index";

export const getAllProducts = () =>
  fetch(`${BASE_URL}/api/products/`).then(res => res.json());

export const getProduct = (id) =>
  fetch(`${BASE_URL}/api/products/${id}`).then(res => res.json());

export const addProduct = (formData) =>
  fetch(`${BASE_URL}/api/products/`, {
    method: "POST",
    body: formData
  }).then(res => res.json());

export const deleteProduct = (id) =>
  fetch(`${BASE_URL}/api/products/${id}`, {
    method: "DELETE"
  }).then(res => res.json());