import BASE_URL from "./index";

export const registerUser = (data) =>
  fetch(`${BASE_URL}/api/auth/user/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const loginUser = (data) =>
  fetch(`${BASE_URL}/api/auth/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const logoutUser = () =>
  fetch(`${BASE_URL}/api/auth/user/logout`).then(res => res.json());