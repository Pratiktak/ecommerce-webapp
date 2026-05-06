import BASE_URL from "./index";

export const createOrder = () =>
  fetch(`${BASE_URL}/api/order`, {
    method: "POST"
  }).then(res => res.json());

export const getMyOrders = () =>
  fetch(`${BASE_URL}/api/order/my`).then(res => res.json());